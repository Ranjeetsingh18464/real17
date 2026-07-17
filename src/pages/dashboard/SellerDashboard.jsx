import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiEye, HiChartBar, HiStar, HiPhotograph, HiTrash } from 'react-icons/hi'
import { formatPrice } from '../../utils/helpers'
import { useAuth } from '../../contexts/AuthContext'
import { useProperties } from '../../contexts/PropertyContext'
import { loadProperties, deleteProperty as deleteFromStore } from '../../services/propertyStore'
import toast from 'react-hot-toast'

export default function SellerDashboard() {
  const { userProfile } = useAuth()
  const { deleteProperty } = useProperties()
  const [listings, setListings] = useState(loadProperties().filter(p => p.listingType === 'owner'))

  const totalViews = listings.reduce((s, p) => s + (p.views || 0), 0)
  const totalLeads = listings.reduce((s, p) => s + (p.leads || 0), 0)
  const inquiries = listings.filter(p => (p.leads || 0) > 0).length

  const stats = [
    { icon: HiPhotograph, label: 'Total Listings', value: listings.length, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { icon: HiEye, label: 'Total Views', value: totalViews.toLocaleString('en-IN'), color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
    { icon: HiStar, label: 'Leads Received', value: totalLeads, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { icon: HiChartBar, label: 'Inquiries', value: inquiries, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20' },
  ]

  return (
    <div className="min-h-screen bg-dark-50 dark:bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-heading">Seller Dashboard</h1>
            <p className="text-dark-500">Manage your property listings</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(stat => (
            <div key={stat.label} className="card p-5">
              <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-dark-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">My Listings</h2>
          </div>
          {listings.length > 0 ? (
            <div className="space-y-3">
              {listings.map(p => (
                <div key={p.id} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-dark-50 dark:bg-dark-800 rounded-xl group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xl sm:text-2xl">🏠</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-xs sm:text-sm truncate">{p.title || `${p.bedrooms} BHK ${p.propertyType}`}</h3>
                    <p className="text-xs text-dark-500 truncate">{p.locality}, {p.city}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-dark-500">
                      <span>{formatPrice(p.price)}</span>
                      <span>{p.views || 0} views</span>
                      <span>{p.leads || 0} leads</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <Link to={`/property/${p.id}`} className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded-lg hover:bg-dark-200 dark:hover:bg-dark-600">View</Link>
                    <Link to={`/edit-property/${p.id}`} className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs bg-primary-600 text-white rounded-lg hover:bg-primary-700">Edit</Link>
                    <button onClick={() => { if (window.confirm('Delete this listing?')) { deleteProperty(p.id); deleteFromStore(p.id); setListings(prev => prev.filter(x => x.id !== p.id)); toast.success('Listing deleted') } }}
                      className="p-1 sm:p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                      <HiTrash className="w-4 h-4" />
                    </button>
                    <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${p.isVerified ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'}`}>
                      {p.isVerified ? 'Verified' : 'Pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <span className="text-4xl block mb-3">📋</span>
              <h3 className="font-semibold mb-1">No listings yet</h3>
              <p className="text-dark-500 text-sm">You don't have any properties listed yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
