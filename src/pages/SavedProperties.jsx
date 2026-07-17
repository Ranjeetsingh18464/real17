import PropertyCard from '../components/common/PropertyCard'
import { loadProperties } from '../services/propertyStore'
import { getSavedIds } from '../services/userActivityStore'
import { Link } from 'react-router-dom'
import { HiHeart } from 'react-icons/hi'

export default function SavedProperties() {
  const savedIds = getSavedIds()
  const saved = loadProperties().filter(p => savedIds.includes(p.id))

  return (
    <div className="min-h-screen bg-dark-50 dark:bg-dark-900/50 py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl font-bold font-heading mb-6">Saved Properties</h1>
        {saved.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saved.map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <HiHeart className="w-16 h-16 text-dark-300 mx-auto mb-4" />
            <h2 className="text-lg font-semibold mb-2">No saved properties</h2>
            <p className="text-dark-500 mb-4">Save properties you like by clicking the heart icon</p>
            <Link to="/properties" className="btn-primary">Browse Properties</Link>
          </div>
        )}
      </div>
    </div>
  )
}
