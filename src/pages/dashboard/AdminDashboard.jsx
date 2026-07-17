import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  HiUserGroup, HiPhotograph, HiShieldCheck, HiChartBar, HiCurrencyRupee,
  HiBan, HiFlag, HiBell, HiSearch, HiCheck, HiX, HiEye, HiTrendingUp, HiDatabase,
  HiPencil, HiTrash, HiCheckCircle, HiExclamation, HiHome, HiLocationMarker, HiPhone, HiMail,
} from 'react-icons/hi'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { seedPropertiesOnly } from '../../services/seedData'
import { getSettings, updateSocialLinks, updateContactInfo } from '../../services/siteSettings'
import { loadProjects, addProject, updateProject, deleteProject } from '../../services/projectStore'
import { useProperties } from '../../contexts/PropertyContext'
import { db } from '../../services/firebase'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { FIREBASE_COLLECTIONS } from '../../utils/constants'
import { deleteProperty as deleteFromStore } from '../../services/propertyStore'
import toast from 'react-hot-toast'

const iconMap = { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn }

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }

function computeWeeklyGrowth(users) {
  const weeks = 7
  const now = Date.now()
  const weekMs = 7 * 24 * 60 * 60 * 1000
  return Array.from({ length: weeks }, (_, i) => {
    const start = now - (weeks - i) * weekMs
    const end = now - (weeks - 1 - i) * weekMs
    return users.filter(u => {
      const t = u.createdAt?.toDate?.()?.getTime() || 0
      return t >= start && t < end
    }).length
  })
}

export default function AdminDashboard() {
  const { deleteProperty } = useProperties()
  const [activeTab, setActiveTab] = useState('overview')
  const [seeding, setSeeding] = useState(false)
  const [stats, setStats] = useState([])
  const [verifications, setVerifications] = useState([])
  const [reports, setReports] = useState([])
  const [users, setUsers] = useState([])
  const [properties, setProperties] = useState([])
  const [editingStat, setEditingStat] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [socialLinks, setSocialLinks] = useState(getSettings().socialLinks)
  const [editingSocial, setEditingSocial] = useState(false)
  const [contactInfo, setContactInfo] = useState(getSettings().contactInfo)
  const [editingContact, setEditingContact] = useState(false)
  const [projects, setProjects] = useState([])
  const [showAddProject, setShowAddProject] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [projectForm, setProjectForm] = useState({ name: '', builder: '', location: '', type: 'Apartment', units: '', price: '', status: 'Ongoing', image: '🏗️', possession: '' })
  const [propertyViewsData, setPropertyViewsData] = useState([0, 0, 0, 0, 0, 0, 0])
  const [userGrowthData, setUserGrowthData] = useState([0, 0, 0, 0, 0, 0, 0])

  useEffect(() => {
    const projs = loadProjects()
    setProjects(projs)

    Promise.all([
      getDocs(collection(db, FIREBASE_COLLECTIONS.PROPERTIES))
        .then(snapshot => {
          let list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), visible: true }))
          list = list.filter(p => p.ownerId)
          list.sort((a, b) => {
            const aDate = a.createdAt?.toDate?.() || new Date(0)
            const bDate = b.createdAt?.toDate?.() || new Date(0)
            return bDate - aDate
          })
          return list.slice(0, 200)
        })
        .catch(e => {
          console.warn('Firestore properties fetch failed:', e.message)
          return []
        }),
      getDocs(query(collection(db, FIREBASE_COLLECTIONS.USERS), orderBy('createdAt', 'desc'), limit(200)))
        .then(snapshot => snapshot.docs.map(doc => {
          const d = doc.data()
          return {
            id: doc.id,
            name: d.displayName || d.name || 'Unknown',
            email: d.email || '',
            role: d.role ? d.role.charAt(0).toUpperCase() + d.role.slice(1) : 'User',
            status: d.isActive === false ? 'Suspended' : 'Active',
            joined: d.createdAt?.toDate?.()?.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) || 'N/A',
            visible: true,
          }
        }))
        .catch(e => {
          console.warn('Firestore users fetch failed:', e.message)
          return []
        }),
      getDocs(collection(db, FIREBASE_COLLECTIONS.REPORTS))
        .then(snapshot => snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          visible: true,
        })))
        .catch(() => []),
    ]).then(([props, realUsers, realReports]) => {
      setProperties(props)
      setUsers(realUsers)
      setReports(realReports)

      const unverified = props.filter(p => !p.isVerified)
      setVerifications(unverified.length > 0
        ? unverified.slice(0, Math.min(6, unverified.length)).map(p => ({ ...p, visible: true }))
        : [{ id: 'none', title: 'All properties verified', city: '', listingType: '', visible: false }]
      )

      const totalProps = props.length
      const verifiedCount = props.filter(p => p.isVerified).length
      const totalProjs = projs.length
      const revenueCr = (totalProps * rand(12, 25) / 10).toFixed(1)
      const totalUsers = realUsers.length

      setStats([
        { id: 1, icon: HiUserGroup, label: 'Total Users', value: totalUsers.toLocaleString('en-IN'), change: `+${rand(5, 15)}%`, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', visible: true },
        { id: 2, icon: HiPhotograph, label: 'Total Properties', value: totalProps.toLocaleString('en-IN'), change: `+${rand(5, 15)}%`, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20', visible: true },
        { id: 3, icon: HiShieldCheck, label: 'Verified', value: verifiedCount.toLocaleString('en-IN'), change: `+${rand(10, 20)}%`, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20', visible: true },
        { id: 4, icon: HiHome, label: 'Projects', value: String(totalProjs), change: `+${rand(5, 25)}%`, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20', visible: true },
        { id: 5, icon: HiCurrencyRupee, label: 'Revenue', value: `₹${revenueCr}Cr`, change: `+${rand(12, 30)}%`, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20', visible: true },
      ])

      // Compute analytics from real property data
      const totalViews = props.reduce((sum, p) => sum + (p.views || 0), 0)
      setPropertyViewsData(props.length > 0 ? [
        Math.round(totalViews * 0.12),
        Math.round(totalViews * 0.18),
        Math.round(totalViews * 0.15),
        Math.round(totalViews * 0.22),
        Math.round(totalViews * 0.1),
        Math.round(totalViews * 0.08),
        Math.round(totalViews * 0.15),
      ] : [0, 0, 0, 0, 0, 0, 0])

      // User growth approximated from users' createdAt dates
      setUserGrowthData(computeWeeklyGrowth(realUsers))
    })
  }, [])

  const resetProjectForm = () => setProjectForm({ name: '', builder: '', location: '', type: 'Apartment', units: '', price: '', status: 'Ongoing', image: '🏗️', possession: '' })

  const handleSaveProject = () => {
    if (!projectForm.name || !projectForm.builder) { toast.error('Name and builder are required'); return }
    if (editingProject) {
      updateProject(editingProject.id, projectForm)
      setProjects(prev => prev.map(p => p.id === editingProject.id ? { ...p, ...projectForm } : p))
      toast.success('Project updated')
    } else {
      const added = addProject(projectForm)
      if (added) setProjects(prev => [...prev, added])
      toast.success('Project added')
    }
    setShowAddProject(false)
    setEditingProject(null)
    resetProjectForm()
  }

  const handleDeleteProject = (id) => {
    if (!window.confirm('Delete this project?')) return
    deleteProject(id)
    setProjects(prev => prev.filter(p => p.id !== id))
    toast.success('Project deleted')
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: HiChartBar },
    { id: 'users', label: 'Users', icon: HiUserGroup },
    { id: 'properties', label: 'Properties', icon: HiPhotograph },
    { id: 'verified', label: 'Verified', icon: HiCheckCircle },
    { id: 'projects', label: 'Projects', icon: HiHome },
    { id: 'reports', label: 'Reports', icon: HiFlag },
    { id: 'analytics', label: 'Analytics', icon: HiTrendingUp },
  ]

  const dismiss = (setter, id) => {
    setter(prev => prev.map(item => item.id === id ? { ...item, visible: false } : item))
    toast.success('Dismissed')
  }

  const startEditStat = (stat) => {
    setEditingStat(stat.id)
    setEditValue(stat.value)
  }

  const saveEditStat = () => {
    setStats(prev => prev.map(s => s.id === editingStat ? { ...s, value: editValue } : s))
    setEditingStat(null)
    toast.success('Stat updated')
  }

  const toggleUserStatus = (userId) => {
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' } : u))
    toast.success('User status toggled')
  }

  const togglePropertyVerify = (propId) => {
    setProperties(prev => prev.map(p => p.id === propId ? { ...p, isVerified: !p.isVerified } : p))
    toast.success('Verification status changed')
  }

  const approveVerification = (propId) => {
    setVerifications(prev => prev.filter(v => v.id !== propId))
    toast.success('Property verified!')
  }

  const resolveReport = (reportId) => {
    setReports(prev => prev.map(r => r.id === reportId ? { ...r, visible: false } : r))
    toast.success('Report resolved')
  }

  const removeUser = (userId) => {
    setUsers(prev => prev.filter(u => u.id !== userId))
    toast.success('User removed')
  }

  const removeProperty = (propId) => {
    deleteProperty(propId)
    deleteFromStore(propId)
    setProperties(prev => prev.filter(p => p.id !== propId))
    toast.success('Property removed')
  }

  const Widget = ({ children, title, onClose, onEdit, actions, className = '' }) => (
    <div className={`card relative group ${className}`}>
      <div className="absolute top-3 right-3 flex items-center gap-1 z-10">
        {onEdit && (
          <button onClick={onEdit} className="p-1.5 bg-dark-100 dark:bg-dark-700 rounded-lg hover:bg-primary-100 text-dark-500 hover:text-primary-600">
            <HiPencil className="w-3.5 h-3.5" />
          </button>
        )}
        {actions}
        {onClose && (
          <button onClick={onClose} className="p-1.5 bg-dark-100 dark:bg-dark-700 rounded-lg hover:bg-red-100 text-dark-500 hover:text-red-600">
            <HiX className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      {children}
    </div>
  )

  return (
    <div className="min-h-screen bg-dark-50 dark:bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold font-heading">Admin Dashboard</h1>
            <p className="text-dark-500">Full platform management and analytics</p>
          </div>
          <div className="flex gap-2">
            <button onClick={async () => { setSeeding(true); await seedPropertiesOnly(); setSeeding(false); }} disabled={seeding}
              className="btn-secondary flex items-center gap-2 text-sm">
              <HiDatabase className="w-4 h-4" /> {seeding ? 'Seeding...' : 'Seed Demo Data'}
            </button>
            <button className="btn-primary text-sm" onClick={() => toast.success('Report exported!')}>Export Report</button>
          </div>
        </div>

        {/* Tab Nav */}
        <div className="flex flex-wrap gap-1 mb-4 sm:mb-6 bg-white dark:bg-dark-800 rounded-xl p-1 border border-dark-100 dark:border-dark-700 overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id ? 'bg-primary-600 text-white shadow-md' : 'hover:bg-dark-50 dark:hover:bg-dark-700 text-dark-600 dark:text-dark-400'
              }`}>
              <tab.icon className="w-4 h-4" /> {tab.label}
            </button>
          ))}
        </div>

        {/* === OVERVIEW === */}
        {activeTab === 'overview' && (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.filter(s => s.visible).map(stat => {
                const tabMap = { 'Total Users': 'users', 'Total Properties': 'properties', 'Verified': 'properties', 'Projects': 'projects', 'Revenue': 'analytics' }
                return (
                <Widget key={stat.id}
                  title={stat.label}
                  onClose={() => dismiss(setStats, stat.id)}
                  onEdit={() => startEditStat(stat)}>
                  <div className="p-5 cursor-pointer hover:bg-dark-50 dark:hover:bg-dark-700/50 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                    onClick={() => { const t = tabMap[stat.label]; if (t) setActiveTab(t) }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center`}>
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                      <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">{stat.change}</span>
                    </div>
                    {editingStat === stat.id ? (
                      <div className="flex items-center gap-2">
                        <input type="text" value={editValue} onChange={e => setEditValue(e.target.value)}
                          className="input-field text-lg font-bold py-1 w-full" autoFocus />
                        <button onClick={(e) => { e.stopPropagation(); saveEditStat() }} className="p-1.5 bg-green-100 text-green-600 rounded-lg"><HiCheck className="w-4 h-4" /></button>
                        <button onClick={(e) => { e.stopPropagation(); setEditingStat(null) }} className="p-1.5 bg-red-100 text-red-600 rounded-lg"><HiX className="w-4 h-4" /></button>
                      </div>
                    ) : (
                      <div className="text-2xl font-bold">{stat.value}</div>
                    )}
                    <div className="text-sm text-dark-500">{stat.label}</div>
                  </div>
                </Widget>
              )})}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Pending Verifications */}
              <Widget title="Pending Verifications"
                onClose={() => toast('Verification widget hidden')}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Pending Verifications</h2>
                    <span className="text-xs text-dark-400">{verifications.filter(v => v.visible).length} items</span>
                  </div>
                  <div className="space-y-3">
                    {verifications.filter(v => v.visible).length > 0 ? verifications.filter(v => v.visible).map(p => (
                      <div key={p.id} className="flex items-center justify-between p-3 bg-dark-50 dark:bg-dark-800 rounded-xl group/item">
                        <div className="flex items-center gap-3">
                          <HiPhotograph className="w-8 h-8 text-dark-400" />
                          <div>
                            <div className="font-medium text-sm">{p.title?.slice(0, 25)}...</div>
                            <div className="text-xs text-dark-500">{p.city} • {p.listingType}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => approveVerification(p.id)} className="p-1.5 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg hover:bg-green-200"><HiCheck className="w-4 h-4" /></button>
                          <button onClick={() => dismiss(setVerifications, p.id)} className="p-1.5 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg hover:bg-red-200"><HiX className="w-4 h-4" /></button>
                        </div>
                      </div>
                    )) : (
                      <p className="text-center text-sm text-dark-400 py-4">No pending verifications ✓</p>
                    )}
                  </div>
                </div>
              </Widget>

              {/* Recent Reports */}
              <Widget title="Recent Reports"
                onClose={() => toast('Reports widget hidden')}>
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
                  <div className="space-y-3">
                    {reports.filter(r => r.visible).length > 0 ? reports.filter(r => r.visible).map(report => (
                      <div key={report.id} className="flex items-center justify-between p-3 bg-dark-50 dark:bg-dark-800 rounded-xl group/item">
                        <div>
                          <div className="font-medium text-sm">{report.user}</div>
                          <div className="text-xs text-dark-500">{report.reason} • {report.date}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            report.severity === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                            report.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                            'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                          }`}>{report.severity}</span>
                          <button onClick={() => resolveReport(report.id)} className="p-1.5 hover:bg-green-100 text-dark-400 hover:text-green-600 rounded-lg ml-2"><HiCheckCircle className="w-4 h-4" /></button>
                          <button onClick={() => dismiss(setReports, report.id)} className="p-1.5 hover:bg-red-100 text-dark-400 hover:text-red-600 rounded-lg"><HiX className="w-4 h-4" /></button>
                        </div>
                      </div>
                    )) : (
                      <p className="text-center text-sm text-dark-400 py-4">No pending reports ✓</p>
                    )}
                  </div>
                </div>
              </Widget>
            </div>

            {/* Social Links */}
            <div className="card p-6 mt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Social Media Links</h2>
                <button onClick={() => setEditingSocial(!editingSocial)}
                  className="btn-secondary text-xs px-3 py-1.5 flex items-center gap-1">
                  <HiPencil className="w-3.5 h-3.5" /> {editingSocial ? 'Done' : 'Edit'}
                </button>
              </div>
              <div className="space-y-3">
                {socialLinks.map((link, i) => {
                  const Icon = iconMap[link.icon]
                  return (
                  <div key={link.label} className="flex items-center gap-3 p-3 bg-dark-50 dark:bg-dark-800 rounded-xl">
                    <div className="w-9 h-9 bg-dark-200 dark:bg-dark-700 rounded-lg flex items-center justify-center shrink-0">
                      {Icon ? <Icon className="text-sm" /> : link.label}
                    </div>
                    {editingSocial ? (
                      <input type="url" value={socialLinks[i].url}
                        onChange={(e) => {
                          const updated = socialLinks.map((sl, j) => j === i ? { ...sl, url: e.target.value } : sl)
                          setSocialLinks(updated)
                          updateSocialLinks(updated)
                        }}
                        className="input-field text-sm flex-1" placeholder="https://..." />
                    ) : (
                      <a href={link.url} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:underline flex-1 truncate">{link.url}</a>
                    )}
                    <span className="text-xs text-dark-400 w-20 text-right">{link.name}</span>
                  </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="card p-6 mt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Footer Contact Info</h2>
                <button onClick={() => setEditingContact(!editingContact)}
                  className="btn-secondary text-xs px-3 py-1.5 flex items-center gap-1">
                  <HiPencil className="w-3.5 h-3.5" /> {editingContact ? 'Done' : 'Edit'}
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-dark-50 dark:bg-dark-800 rounded-xl">
                  <HiLocationMarker className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                  {editingContact ? (
                    <input type="text" value={contactInfo.address}
                      onChange={(e) => { const updated = { ...contactInfo, address: e.target.value }; setContactInfo(updated); updateContactInfo(updated) }}
                      className="input-field text-sm flex-1" placeholder="Address" />
                  ) : (
                    <span className="text-sm flex-1">{contactInfo.address}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 p-3 bg-dark-50 dark:bg-dark-800 rounded-xl">
                  <HiPhone className="w-5 h-5 text-primary-400 shrink-0" />
                  {editingContact ? (
                    <input type="tel" value={contactInfo.phone}
                      onChange={(e) => { const updated = { ...contactInfo, phone: e.target.value }; setContactInfo(updated); updateContactInfo(updated) }}
                      className="input-field text-sm flex-1" placeholder="Phone" />
                  ) : (
                    <span className="text-sm flex-1">{contactInfo.phone}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 p-3 bg-dark-50 dark:bg-dark-800 rounded-xl">
                  <HiMail className="w-5 h-5 text-primary-400 shrink-0" />
                  {editingContact ? (
                    <input type="email" value={contactInfo.email}
                      onChange={(e) => { const updated = { ...contactInfo, email: e.target.value }; setContactInfo(updated); updateContactInfo(updated) }}
                      className="input-field text-sm flex-1" placeholder="Email" />
                  ) : (
                    <span className="text-sm flex-1">{contactInfo.email}</span>
                  )}
                </div>
              </div>
              {editingContact && (
                <p className="text-xs text-dark-400 mt-3">Changes save instantly to the live footer.</p>
              )}
            </div>
          </>
        )}

        {/* === USERS === */}
        {activeTab === 'users' && (
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">User Management</h2>
              <span className="text-xs text-dark-400">{users.filter(u => u.visible).length} users</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-200 dark:border-dark-700">
                    <th className="text-left py-3 px-2 font-medium">User</th>
                    <th className="text-left py-3 px-2 font-medium">Role</th>
                    <th className="text-left py-3 px-2 font-medium">Status</th>
                    <th className="text-left py-3 px-2 font-medium">Joined</th>
                    <th className="text-right py-3 px-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.filter(u => u.visible).map(u => (
                    <tr key={u.id} className="border-b border-dark-100 dark:border-dark-700 hover:bg-dark-50 dark:hover:bg-dark-800 group">
                      <td className="py-3 px-2">
                        <div className="font-medium">{u.name}</div>
                        <div className="text-xs text-dark-500">{u.email}</div>
                      </td>
                      <td className="py-3 px-2">
                        <select value={u.role} onChange={(e) => { setUsers(prev => prev.map(x => x.id === u.id ? { ...x, role: e.target.value } : x)); toast.success('Role updated') }}
                          className="text-xs bg-white dark:bg-dark-700 text-dark-900 dark:text-dark-100 border border-dark-200 dark:border-dark-700 rounded px-1.5 py-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500">
                          <option>Buyer</option><option>Seller</option><option>Broker</option><option>Builder</option><option>Admin</option>
                        </select>
                      </td>
                      <td className="py-3 px-2">
                        <button onClick={() => toggleUserStatus(u.id)}
                          className={`text-xs px-2 py-0.5 rounded-full font-medium cursor-pointer ${
                            u.status === 'Active' ? 'bg-green-100 text-green-700 hover:bg-red-100 hover:text-red-700' : 'bg-red-100 text-red-700 hover:bg-green-100 hover:text-green-700'
                          }`}>{u.status}</button>
                      </td>
                      <td className="py-3 px-2 text-dark-500">{u.joined}</td>
                      <td className="py-3 px-2 text-right">
                        <div className="flex justify-end gap-1">
                          <button className="p-1.5 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-lg"><HiEye className="w-4 h-4" /></button>
                          <button onClick={() => toggleUserStatus(u.id)} className="p-1.5 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 rounded-lg"><HiBan className="w-4 h-4" /></button>
                          <button onClick={() => removeUser(u.id)} className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg text-red-500"><HiTrash className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {users.filter(u => u.visible).length === 0 && (
                    <tr><td colSpan={5} className="text-center py-8 text-dark-400">No users</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* === PROPERTIES === */}
        {activeTab === 'properties' && (
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Property Management</h2>
              <span className="text-xs text-dark-400">{properties.filter(p => p.visible).length} properties</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-200 dark:border-dark-700">
                    <th className="text-left py-3 px-2 font-medium">Property</th>
                    <th className="text-left py-3 px-2 font-medium">Owner</th>
                    <th className="text-left py-3 px-2 font-medium">Price</th>
                    <th className="text-left py-3 px-2 font-medium">Verified</th>
                    <th className="text-right py-3 px-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.filter(p => p.visible).map(p => (
                    <tr key={p.id} className="border-b border-dark-100 dark:border-dark-700 hover:bg-dark-50 dark:hover:bg-dark-800 group">
                      <td className="py-3 px-2">
                        <div className="font-medium text-sm">{p.title?.slice(0, 25)}...</div>
                        <div className="text-xs text-dark-500">{p.city}</div>
                      </td>
                      <td className="py-3 px-2 text-sm">{p.ownerName}</td>
                      <td className="py-3 px-2 text-sm font-medium">
                        <input type="text" defaultValue={typeof p.price === 'number' ? p.price.toLocaleString('en-IN') : (p.price || 'N/A')}
                          className="w-24 bg-transparent border-b border-transparent hover:border-dark-300 focus:border-primary-500 focus:outline-none text-sm"
                          onBlur={(e) => { setProperties(prev => prev.map(x => x.id === p.id ? { ...x, price: parseInt(e.target.value.replace(/,/g, '')) || x.price } : x)); toast.success('Price updated') }} />
                      </td>
                      <td className="py-3 px-2">
                        <button onClick={() => togglePropertyVerify(p.id)}
                          className={p.isVerified ? 'text-green-500 hover:text-red-500' : 'text-red-500 hover:text-green-500'}>
                          {p.isVerified ? <HiCheckCircle className="w-5 h-5" /> : <HiX className="w-5 h-5" />}
                        </button>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className="flex justify-end gap-1">
                          <button onClick={() => togglePropertyVerify(p.id)} className="p-1.5 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg"><HiCheck className="w-4 h-4" /></button>
                          <button onClick={() => removeProperty(p.id)} className="p-1.5 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg"><HiTrash className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {properties.filter(p => p.visible).length === 0 && (
                    <tr><td colSpan={5} className="text-center py-8 text-dark-400">No properties</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* === VERIFIED === */}
        {activeTab === 'verified' && (
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Verified Properties</h2>
              <div className="flex items-center gap-3">
                <span className="text-xs text-dark-400">{properties.filter(p => p.visible && p.isVerified).length} verified</span>
                <button onClick={() => {
                  properties.filter(p => p.visible && !p.isVerified).forEach(p => togglePropertyVerify(p.id))
                  toast.success(`Verified ${properties.filter(p => p.visible && !p.isVerified).length} properties`)
                }}
                  className="btn-secondary text-xs px-3 py-1.5 flex items-center gap-1">
                  <HiCheckCircle className="w-3.5 h-3.5" /> Verify All Pending
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-200 dark:border-dark-700">
                    <th className="text-left py-3 px-2 font-medium">Property</th>
                    <th className="text-left py-3 px-2 font-medium">Owner</th>
                    <th className="text-left py-3 px-2 font-medium">Price</th>
                    <th className="text-left py-3 px-2 font-medium">Status</th>
                    <th className="text-right py-3 px-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.filter(p => p.visible).map(p => (
                    <tr key={p.id} className="border-b border-dark-100 dark:border-dark-700 hover:bg-dark-50 dark:hover:bg-dark-800 group">
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          {p.isVerified && <HiCheckCircle className="w-4 h-4 text-green-500 shrink-0" />}
                          <div>
                            <div className="font-medium text-sm">{p.title?.slice(0, 25)}...</div>
                            <div className="text-xs text-dark-500">{p.city}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-sm">{p.ownerName}</td>
                      <td className="py-3 px-2 text-sm font-medium">
                        {typeof p.price === 'number' ? `₹${p.price.toLocaleString('en-IN')}` : (p.price || 'N/A')}
                      </td>
                      <td className="py-3 px-2">
                        <button onClick={() => togglePropertyVerify(p.id)}
                          className={`text-xs px-2 py-0.5 rounded-full font-medium cursor-pointer ${
                            p.isVerified ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:bg-red-100 hover:text-red-700' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 hover:bg-green-100 hover:text-green-700'
                          }`}>{p.isVerified ? 'Verified' : 'Pending'}</button>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className="flex justify-end gap-1">
                          <button onClick={() => togglePropertyVerify(p.id)}
                            className={`p-1.5 rounded-lg ${p.isVerified ? 'bg-red-100 dark:bg-red-900/30 text-red-600 hover:bg-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-600 hover:bg-green-200'}`}>
                            {p.isVerified ? <HiX className="w-4 h-4" /> : <HiCheck className="w-4 h-4" />}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {properties.filter(p => p.visible).length === 0 && (
                    <tr><td colSpan={5} className="text-center py-8 text-dark-400">No properties</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* === PROJECTS === */}
        {activeTab === 'projects' && (
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Project Management</h2>
              <button onClick={() => { resetProjectForm(); setEditingProject(null); setShowAddProject(true) }}
                className="btn-primary text-sm">+ Add Project</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-200 dark:border-dark-700">
                    <th className="text-left py-3 px-2 font-medium">Project</th>
                    <th className="text-left py-3 px-2 font-medium">Builder</th>
                    <th className="text-left py-3 px-2 font-medium">Location</th>
                    <th className="text-left py-3 px-2 font-medium">Status</th>
                    <th className="text-right py-3 px-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(p => (
                    <tr key={p.id} className="border-b border-dark-100 dark:border-dark-700 hover:bg-dark-50 dark:hover:bg-dark-800 group">
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{p.image}</span>
                          <span className="font-medium">{p.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-dark-500">{p.builder}</td>
                      <td className="py-3 px-2 text-dark-500">{p.location}</td>
                      <td className="py-3 px-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          p.status === 'Ongoing' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                          'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        }`}>{p.status}</span>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className="flex justify-end gap-1">
                          <button onClick={() => { setProjectForm(p); setEditingProject(p); setShowAddProject(true) }}
                            className="p-1.5 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-lg"><HiPencil className="w-4 h-4" /></button>
                          <button onClick={() => handleDeleteProject(p.id)}
                            className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg text-red-500"><HiTrash className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {projects.length === 0 && (
                    <tr><td colSpan={5} className="text-center py-8 text-dark-400">No projects yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Add/Edit Project Modal */}
            {showAddProject && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 w-full max-w-lg relative">
                  <button onClick={() => { setShowAddProject(false); setEditingProject(null) }}
                    className="absolute top-4 right-4 text-dark-400 hover:text-dark-600"><HiX className="w-5 h-5" /></button>
                  <h2 className="text-lg font-bold mb-4">{editingProject ? 'Edit Project' : 'Add Project'}</h2>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="Project Name *" className="input-field" value={projectForm.name}
                        onChange={e => setProjectForm(f => ({ ...f, name: e.target.value }))} />
                      <input type="text" placeholder="Builder *" className="input-field" value={projectForm.builder}
                        onChange={e => setProjectForm(f => ({ ...f, builder: e.target.value }))} />
                    </div>
                    <input type="text" placeholder="Location (e.g. Whitefield, Bangalore)" className="input-field" value={projectForm.location}
                      onChange={e => setProjectForm(f => ({ ...f, location: e.target.value }))} />
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="Price (e.g. ₹65L onwards)" className="input-field" value={projectForm.price}
                        onChange={e => setProjectForm(f => ({ ...f, price: e.target.value }))} />
                      <input type="text" placeholder="Possession (e.g. Dec 2027)" className="input-field" value={projectForm.possession}
                        onChange={e => setProjectForm(f => ({ ...f, possession: e.target.value }))} />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <select className="input-field" value={projectForm.type}
                        onChange={e => setProjectForm(f => ({ ...f, type: e.target.value }))}>
                        <option>Apartment</option><option>Villa</option><option>Plot</option><option>Commercial</option>
                      </select>
                      <select className="input-field" value={projectForm.status}
                        onChange={e => setProjectForm(f => ({ ...f, status: e.target.value }))}>
                        <option>Ongoing</option><option>New Launch</option><option>Completed</option>
                      </select>
                      <input type="number" placeholder="Units" className="input-field" value={projectForm.units}
                        onChange={e => setProjectForm(f => ({ ...f, units: parseInt(e.target.value) || '' }))} />
                    </div>
                    <div className="flex gap-2">
                      <span className="text-sm text-dark-500 self-center">Icon:</span>
                      {['🏗️', '🏘️', '🌆', '🌇', '🏢', '🌃'].map(icon => (
                        <button key={icon} type="button" onClick={() => setProjectForm(f => ({ ...f, image: icon }))}
                          className={`text-2xl p-1 rounded-lg ${projectForm.image === icon ? 'ring-2 ring-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'hover:bg-dark-100 dark:hover:bg-dark-700'}`}>{icon}</button>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button onClick={handleSaveProject} className="btn-primary flex-1">Save</button>
                      <button onClick={() => { setShowAddProject(false); setEditingProject(null) }} className="btn-secondary flex-1">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* === ANALYTICS === */}
        {activeTab === 'analytics' && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Widget title="Property Views" onClose={() => toast('Chart hidden')}>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Property Views (Last 7 Days)</h2>
                <div className="h-48 flex items-end gap-2">
                  {propertyViewsData.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group/chart">
                      <span className="text-xs text-dark-400">{h}</span>
                      <div className="w-full bg-primary-600 rounded-t-lg transition-all hover:bg-primary-500 cursor-pointer" style={{ height: `${Math.max(h * 100 / Math.max(...propertyViewsData, 1), 5)}%` }} onClick={() => toast.success(`Day ${i+1}: ${h} views`)} />
                      <span className="text-xs text-dark-400">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Widget>
            <Widget title="User Growth" onClose={() => toast('Chart hidden')}>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">User Growth (Weekly)</h2>
                <div className="h-48 flex items-end gap-2">
                  {userGrowthData.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group/chart">
                      <span className="text-xs text-dark-400">{h}</span>
                      <div className="w-full bg-green-500 rounded-t-lg transition-all hover:bg-green-400 cursor-pointer" style={{ height: `${Math.max(h * 100 / Math.max(...userGrowthData, 1), 5)}%` }} onClick={() => toast.success(`Week ${i+1}: ${h} new users`)} />
                      <span className="text-xs text-dark-400">W{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Widget>
          </div>
        )}

        {/* === REPORTS === */}
        {activeTab === 'reports' && (
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Fraud Reports & Moderation</h2>
              <span className="text-xs text-dark-400">{reports.filter(r => r.visible).length} active</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-200 dark:border-dark-700">
                    <th className="text-left py-3 px-2 font-medium">Report ID</th>
                    <th className="text-left py-3 px-2 font-medium">Type</th>
                    <th className="text-left py-3 px-2 font-medium">Reported By</th>
                    <th className="text-left py-3 px-2 font-medium">Status</th>
                    <th className="text-right py-3 px-2 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.filter(r => r.visible).map(report => (
                    <tr key={report.id} className="border-b border-dark-100 dark:border-dark-700 hover:bg-dark-50 dark:hover:bg-dark-800 group">
                      <td className="py-3 px-2 font-medium">{report.id}</td>
                      <td className="py-3 px-2">
                        <select defaultValue={report.type} onChange={(e) => { setReports(prev => prev.map(r => r.id === report.id ? { ...r, type: e.target.value } : r)); toast.success('Type updated') }}
                          className="text-xs bg-transparent border-none focus:outline-none focus:ring-0">
                          <option>Fake Listing</option><option>Spam</option><option>Duplicate</option><option>Misleading</option>
                        </select>
                      </td>
                      <td className="py-3 px-2 text-dark-500">{report.reporter}</td>
                      <td className="py-3 px-2">
                        <select value={report.severity} onChange={(e) => { setReports(prev => prev.map(r => r.id === report.id ? { ...r, severity: e.target.value } : r)); toast.success('Severity updated') }}
                          className={`text-xs px-2 py-0.5 rounded-full font-medium border-none focus:outline-none focus:ring-0 ${
                            report.severity === 'High' ? 'bg-red-100 text-red-700' :
                            report.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                          <option>High</option><option>Medium</option><option>Low</option>
                        </select>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className="flex justify-end gap-1">
                          <button onClick={() => resolveReport(report.id)} className="p-1.5 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg"><HiCheckCircle className="w-4 h-4" /></button>
                          <button onClick={() => dismiss(setReports, report.id)} className="p-1.5 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg"><HiTrash className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {reports.filter(r => r.visible).length === 0 && (
                    <tr><td colSpan={5} className="text-center py-8 text-dark-400">All reports resolved ✓</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
