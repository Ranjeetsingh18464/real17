import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX, HiBell, HiUser, HiLogout, HiSun, HiMoon, HiPhotograph, HiViewGrid } from 'react-icons/hi'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'
import { useNotifications } from '../../contexts/NotificationContext'
import { getInitials } from '../../utils/helpers'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, userProfile, logout } = useAuth()
  const { darkMode, toggleTheme } = useTheme()
  const { unreadCount } = useNotifications()
  const menuRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowUserMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-dark-100 dark:border-dark-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold font-heading gradient-text">Rstate</span>
          </Link>

          <div className="flex items-center gap-3">
            {user && (
              <Link to={`/dashboard/${userProfile?.role === 'super_admin' ? 'admin' : userProfile?.role}`}
                className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                <HiViewGrid className="w-4 h-4" /> Dashboard
              </Link>
            )}
            {user && ['seller', 'broker', 'builder', 'super_admin'].includes(userProfile?.role) && (
              <Link to="/add-property" className="hidden md:flex btn-primary text-sm px-4 py-2 items-center gap-1.5">
                <HiPhotograph className="w-4 h-4" /> Post Property
              </Link>
            )}
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors">
              {darkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            </button>

            {user ? (
              <div className="flex items-center gap-2">
                <Link to="/notifications" className="relative p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors">
                  <HiBell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </Link>

                <div className="relative" ref={menuRef}>
                  <button onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors">
                    {userProfile?.photoURL ? (
                      <img src={userProfile.photoURL} alt="" className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {getInitials(userProfile?.displayName)}
                      </div>
                    )}
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-dark-800 rounded-xl shadow-xl border border-dark-100 dark:border-dark-700 z-20 py-2">
                      <div className="px-4 py-3 border-b border-dark-100 dark:border-dark-700">
                        <p className="font-semibold text-sm">{userProfile?.displayName || 'User'}</p>
                        <p className="text-xs text-dark-500">{user.email}</p>
                        <span className="inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 capitalize">
                          {userProfile?.role}
                        </span>
                      </div>
                      <Link to={`/dashboard/${userProfile?.role === 'super_admin' ? 'admin' : userProfile?.role}`}
                        className="block px-4 py-2.5 text-sm hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
                        onClick={() => setShowUserMenu(false)}>
                        Dashboard
                      </Link>
                      {userProfile?.role === 'super_admin' && (
                        <Link to="/dashboard/admin"
                          className="block px-4 py-2.5 text-sm text-primary-600 font-semibold hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
                          onClick={() => setShowUserMenu(false)}>
                          ⚡ Admin Panel
                        </Link>
                      )}
                      <Link to="/profile"
                        className="block px-4 py-2.5 text-sm hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
                        onClick={() => setShowUserMenu(false)}>
                        My Profile
                      </Link>
                      <Link to="/saved-properties"
                        className="block px-4 py-2.5 text-sm hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
                        onClick={() => setShowUserMenu(false)}>
                        Saved Properties
                      </Link>
                      <hr className="my-1 border-dark-100 dark:border-dark-700" />
                      <button onClick={() => { logout(); setShowUserMenu(false) }}
                        className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-2">
                        <HiLogout className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="btn-secondary text-sm px-4 py-2">Login</Link>
                <Link to="/register" className="btn-primary text-sm px-4 py-2">Register</Link>
              </div>
            )}

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800">
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-dark-100 dark:border-dark-800 bg-white dark:bg-dark-900 px-4 pb-3 pt-2 space-y-1">
          <Link to="/properties?category=buy" onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800">Buy</Link>
          <Link to="/properties?category=rent" onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800">Rent</Link>
          <Link to="/properties?type=PG" onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800">PG</Link>
          <Link to="/properties?type=Commercial" onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800">Commercial</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800">Projects</Link>
          {user && (
            <Link to={`/dashboard/${userProfile?.role === 'super_admin' ? 'admin' : userProfile?.role}`}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-primary-600 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20">Dashboard</Link>
          )}
        </div>
      )}
    </nav>
  )
}
