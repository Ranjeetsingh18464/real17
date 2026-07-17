import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { HiMail, HiLockClosed, HiUser } from 'react-icons/hi'
import toast from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'
import { ROLES } from '../utils/constants'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', role: ROLES.BUYER })
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const { register, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  const updateForm = (key, value) => setForm(prev => ({ ...prev, [key]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) return toast.error('Passwords do not match')
    if (form.password.length < 6) return toast.error('Password must be at least 6 characters')
    setLoading(true)
    try {
      await register(form.email, form.password, form.name, form.role)
      toast.success('Account created successfully!')
      navigate('/home')
    } catch (error) {
      toast.error(error.message?.replace('Firebase: ', '') || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleRegister = async () => {
    try {
      await loginWithGoogle(form.role)
      toast.success('Account created with Google!')
      navigate('/home')
    } catch (error) {
      toast.error(error.message?.replace('Firebase: ', '') || 'Google signup failed')
    }
  }

  const roles = [
    { value: ROLES.BUYER, label: 'Buyer', desc: 'Looking to buy/rent a property', icon: '🏠' },
    { value: ROLES.SELLER, label: 'Seller', desc: 'Want to sell your property', icon: '💰' },
    { value: ROLES.BROKER, label: 'Broker', desc: 'Professional real estate agent', icon: '🤝' },
    { value: ROLES.BUILDER, label: 'Builder', desc: 'Real estate developer', icon: '🏗️' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Rstate</span>
          </Link>
          <h1 className="text-2xl font-bold font-heading">Create Your Account</h1>
          <p className="text-dark-500 mt-1">Join India's trusted real estate platform</p>
        </div>

        <div className="card p-8">
          {step === 1 ? (
            <div>
              <h3 className="font-semibold mb-4 text-center">I am a...</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {roles.map(r => (
                  <button key={r.value} onClick={() => { updateForm('role', r.value); setStep(2) }}
                    className={`p-4 rounded-xl border-2 text-center transition-all hover:shadow-md ${
                      form.role === r.value ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'border-dark-200 dark:border-dark-700'
                    }`}>
                    <span className="text-2xl block mb-1">{r.icon}</span>
                    <div className="font-semibold text-sm">{r.label}</div>
                    <div className="text-xs text-dark-500">{r.desc}</div>
                  </button>
                ))}
              </div>
              <button onClick={handleGoogleRegister} className="w-full flex items-center justify-center gap-3 py-3 border-2 border-dark-200 dark:border-dark-700 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors font-medium">
                <FcGoogle className="w-5 h-5" /> Continue with Google
              </button>
              <p className="text-center mt-4 text-xs text-dark-500">
                Already have an account? <Link to="/login" className="text-primary-600 font-medium">Sign in</Link>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Full Name</label>
                <div className="relative">
                  <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400 w-5 h-5" />
                  <input type="text" value={form.name} onChange={(e) => updateForm('name', e.target.value)}
                    placeholder="Enter your full name" className="input-field pl-10" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <div className="relative">
                  <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400 w-5 h-5" />
                  <input type="email" value={form.email} onChange={(e) => updateForm('email', e.target.value)}
                    placeholder="Enter your email" className="input-field pl-10" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Password</label>
                <div className="relative">
                  <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400 w-5 h-5" />
                  <input type="password" value={form.password} onChange={(e) => updateForm('password', e.target.value)}
                    placeholder="Create a password" className="input-field pl-10" required minLength={6} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Confirm Password</label>
                <div className="relative">
                  <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400 w-5 h-5" />
                  <input type="password" value={form.confirmPassword} onChange={(e) => updateForm('confirmPassword', e.target.value)}
                    placeholder="Confirm your password" className="input-field pl-10" required />
                </div>
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? 'Creating Account...' : `Create ${form.role} Account`}
              </button>

              <div className="text-center text-sm text-dark-500">
                <button type="button" onClick={() => setStep(1)} className="text-primary-600 hover:text-primary-700 font-medium">
                  ← Change role
                </button>
              </div>

              <p className="text-center text-xs text-dark-500">
                By signing up, you agree to our <Link to="/terms" className="underline">Terms</Link> & <Link to="/privacy" className="underline">Privacy Policy</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
