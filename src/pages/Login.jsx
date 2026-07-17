import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { HiMail, HiLockClosed } from 'react-icons/hi'
import toast from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, loginWithGoogle, resetPassword } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) return toast.error('Please fill all fields')
    setLoading(true)
    try {
      await login(email, password)
      toast.success('Welcome back!')
      navigate('/home')
    } catch (error) {
      toast.error(error.message?.replace('Firebase: ', '') || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
      toast.success('Logged in with Google!')
      navigate('/home')
    } catch (error) {
      toast.error(error.message?.replace('Firebase: ', '') || 'Google login failed')
    }
  }

  const handleForgotPassword = async () => {
    if (!email) return toast.error('Enter your email first')
    try {
      await resetPassword(email)
      toast.success('Password reset email sent!')
    } catch (error) {
      toast.error(error.message?.replace('Firebase: ', '') || 'Failed to send reset email')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Rstate</span>
          </Link>
          <h1 className="text-2xl font-bold font-heading">Welcome Back</h1>
          <p className="text-dark-500 mt-1">Sign in to your account</p>
          <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-1 text-xs text-dark-400">
            <span>Demo:</span>
            <button type="button" onClick={() => { setEmail('admin@rstate.in'); setPassword('admin123') }} className="text-primary-600 hover:underline">Admin</button>
            <span>·</span>
            <button type="button" onClick={() => { setEmail('buyer@test.com'); setPassword('test123') }} className="text-primary-600 hover:underline">Buyer</button>
            <span>·</span>
            <button type="button" onClick={() => { setEmail('seller@test.com'); setPassword('test123') }} className="text-primary-600 hover:underline">Seller</button>
          </div>
        </div>

        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <div className="relative">
                <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400 w-5 h-5" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" className="input-field pl-10" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Password</label>
              <div className="relative">
                <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400 w-5 h-5" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password" className="input-field pl-10" required />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-dark-300 text-primary-600 focus:ring-primary-500" />
                <span className="text-dark-600 dark:text-dark-400">Remember me</span>
              </label>
              <button type="button" onClick={handleForgotPassword} className="text-primary-600 hover:text-primary-700 font-medium">
                Forgot Password?
              </button>
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-dark-200 dark:border-dark-700" /></div>
            <div className="relative flex justify-center text-sm"><span className="px-3 bg-white dark:bg-dark-800 text-dark-500">Or continue with</span></div>
          </div>

          <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 py-3 border-2 border-dark-200 dark:border-dark-700 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors font-medium">
            <FcGoogle className="w-5 h-5" /> Google
          </button>
        </div>

        <p className="text-center mt-6 text-sm text-dark-500">
          Don't have an account? <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">Create one</Link>
        </p>
      </div>
    </div>
  )
}
