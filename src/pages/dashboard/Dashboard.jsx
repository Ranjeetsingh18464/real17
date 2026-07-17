import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import LoadingScreen from '../../components/common/LoadingScreen'

const ROLE_TO_PATH = {
  buyer: '/dashboard/buyer',
  seller: '/dashboard/seller',
  broker: '/dashboard/broker',
  builder: '/dashboard/builder',
  super_admin: '/dashboard/admin',
}

export default function Dashboard() {
  const { user, userProfile, loading } = useAuth()

  if (loading) return <LoadingScreen />
  if (!user) return <Navigate to="/login" replace />

  const role = userProfile?.role || 'buyer'
  const path = ROLE_TO_PATH[role] || '/dashboard/buyer'

  return <Navigate to={path} replace />
}
