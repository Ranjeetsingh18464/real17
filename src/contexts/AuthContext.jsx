import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth'
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db, googleProvider, signInWithPopup } from '../services/firebase'
import { ROLES, FIREBASE_COLLECTIONS } from '../utils/constants'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser)
      if (firebaseUser) {
        await fetchUserProfile(firebaseUser.uid)
      } else {
        setUserProfile(null)
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const fetchUserProfile = async (uid) => {
    try {
      const docRef = doc(db, FIREBASE_COLLECTIONS.USERS, uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const data = docSnap.data()
        const email = auth.currentUser?.email || ''
        const isAdminEmail = email === 'admin@rstate.in' || email === 'punjabfoodsrte@gmail.com'
        if (isAdminEmail && data.role !== ROLES.ADMIN) {
          await updateDoc(docRef, { role: ROLES.ADMIN })
          data.role = ROLES.ADMIN
        }
        setUserProfile({ id: uid, ...data })
      } else {
        const email = auth.currentUser?.email || ''
        const isAdminEmail = email === 'admin@rstate.in' || email === 'punjabfoodsrte@gmail.com'
        const userData = {
          uid,
          email,
          displayName: auth.currentUser?.displayName || '',
          phone: auth.currentUser?.phoneNumber || '',
          photoURL: auth.currentUser?.photoURL || '',
          role: isAdminEmail ? ROLES.ADMIN : ROLES.BUYER,
          createdAt: serverTimestamp(),
          lastLogin: serverTimestamp(),
          isVerified: false,
          isActive: true,
          subscription: 'basic',
          preferences: {},
          savedProperties: [],
        }
        await setDoc(docRef, userData)
        setUserProfile({ id: uid, ...userData })
      }
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  const register = async (email, password, name, role = ROLES.BUYER) => {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(result.user, { displayName: name })
    await setDoc(doc(db, FIREBASE_COLLECTIONS.USERS, result.user.uid), {
      uid: result.user.uid,
      email,
      displayName: name,
      phone: '',
      photoURL: '',
      role,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      isVerified: false,
      isActive: true,
      subscription: 'basic',
      preferences: {},
    })
    setUserProfile({
      id: result.user.uid,
      email,
      displayName: name,
      phone: '',
      photoURL: '',
      role,
      isVerified: false,
      isActive: true,
      subscription: 'basic',
      preferences: {},
    })
    return result.user
  }

  const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password)
    await fetchUserProfile(result.user.uid)
    return result.user
  }

  const loginWithGoogle = async (role = ROLES.BUYER) => {
    googleProvider.setCustomParameters({ prompt: 'select_account' })
    const result = await signInWithPopup(auth, googleProvider)
    const userDoc = await getDoc(doc(db, FIREBASE_COLLECTIONS.USERS, result.user.uid))
    if (!userDoc.exists()) {
      await setDoc(doc(db, FIREBASE_COLLECTIONS.USERS, result.user.uid), {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        phone: result.user.phoneNumber || '',
        photoURL: result.user.photoURL || '',
        role,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        isVerified: true,
        isActive: true,
        subscription: 'basic',
        preferences: {},
      })
    } else {
      await setDoc(doc(db, FIREBASE_COLLECTIONS.USERS, result.user.uid), {
        lastLogin: serverTimestamp(),
      }, { merge: true })
    }
    await fetchUserProfile(result.user.uid)
    return result.user
  }

  const logout = async () => {
    await signOut(auth)
    setUser(null)
    setUserProfile(null)
  }

  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email)
  }

  const setupRecaptcha = (containerId) => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
      size: 'invisible',
      callback: () => {},
    })
    return window.recaptchaVerifier
  }

  const sendOTP = async (phoneNumber, recaptchaVerifier) => {
    const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
    return confirmation
  }

  const verifyOTP = async (confirmation, code) => {
    const result = await confirmation.confirm(code)
    return result.user
  }

  const updateUserRole = async (uid, role) => {
    await setDoc(doc(db, FIREBASE_COLLECTIONS.USERS, uid), { role }, { merge: true })
    setUserProfile(prev => ({ ...prev, role }))
  }

  const updateUserProfile = async (data) => {
    await setDoc(doc(db, FIREBASE_COLLECTIONS.USERS, user.uid), data, { merge: true })
    setUserProfile(prev => ({ ...prev, ...data }))
  }

  const value = {
    user,
    userProfile,
    loading,
    register,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    setupRecaptcha,
    sendOTP,
    verifyOTP,
    updateUserRole,
    updateUserProfile,
    fetchUserProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
