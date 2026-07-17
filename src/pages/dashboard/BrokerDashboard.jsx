import { Link } from 'react-router-dom'
import { HiUserGroup, HiPhotograph, HiCurrencyRupee, HiChartBar, HiPlus } from 'react-icons/hi'

export default function BrokerDashboard() {
  const stats = [
    { icon: HiUserGroup, label: 'Total Clients', value: 45, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { icon: HiPhotograph, label: 'Active Listings', value: 28, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
    { icon: HiCurrencyRupee, label: 'Commission Earned', value: '₹2.4L', color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
    { icon: HiChartBar, label: 'This Month', value: '₹45K', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
  ]

  const recentLeads = [
    { name: 'Amit Sharma', property: '3 BHK in Noida', budget: '₹85L', status: 'Hot', date: 'Today' },
    { name: 'Priya Patel', property: 'Villa in Whitefield', budget: '₹2.5Cr', status: 'Warm', date: 'Yesterday' },
    { name: 'Rahul Verma', property: 'Office Space CP', budget: '₹4.5Cr', status: 'Cold', date: '2 days ago' },
  ]

  return (
    <div className="min-h-screen bg-dark-50 dark:bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold font-heading">Broker Dashboard</h1>
            <p className="text-dark-500">Manage clients, listings, and commissions</p>
          </div>
          <Link to="/add-property" className="btn-primary flex items-center gap-2">
            <HiPlus className="w-5 h-5" /> Add Listing
          </Link>
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

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Leads</h2>
            <div className="space-y-3">
              {recentLeads.map((lead, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-dark-50 dark:bg-dark-800 rounded-xl">
                  <div>
                    <div className="font-medium text-sm">{lead.name}</div>
                    <div className="text-xs text-dark-500">{lead.property} • {lead.budget}</div>
                    <div className="text-xs text-dark-400">{lead.date}</div>
                  </div>
                  <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                    lead.status === 'Hot' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                    lead.status === 'Warm' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Add Client', icon: HiUserGroup, path: '/clients/add' },
                { label: 'New Listing', icon: HiPhotograph, path: '/add-property' },
                { label: 'View Reports', icon: HiChartBar, path: '/reports' },
                { label: 'Commission', icon: HiCurrencyRupee, path: '/commission' },
              ].map(action => (
                <Link key={action.label} to={action.path}
                  className="flex items-center gap-3 p-4 rounded-xl border border-dark-200 dark:border-dark-700 hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors">
                  <action.icon className="w-6 h-6 text-primary-600" />
                  <span className="font-medium text-sm">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
