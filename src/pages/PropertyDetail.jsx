import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { HiArrowLeft, HiHeart, HiShare, HiPhone, HiChat, HiCalendar, HiLocationMarker, HiCheck, HiShieldCheck, HiPhotograph, HiVideoCamera, HiX } from 'react-icons/hi'
import { IoBedOutline, IoWaterOutline } from 'react-icons/io5'
import { TbRulerMeasure } from 'react-icons/tb'
import toast from 'react-hot-toast'
import PropertyCard from '../components/common/PropertyCard'
import { loadProperties, incrementViews, incrementLeads } from '../services/propertyStore'
import { trackView, toggleSave as trackSave, trackVisit, isSaved } from '../services/userActivityStore'
import { useAuth } from '../contexts/AuthContext'
import { useChat } from '../contexts/ChatContext'
import { formatPrice, formatArea, formatDate, calculateEMI, getPropertyTypeIcon } from '../utils/helpers'
import { AMENITIES } from '../utils/constants'

export default function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { createChat } = useChat()
  const allProperties = loadProperties()
  const property = allProperties.find(p => p.id === id) || allProperties[0]
  const [activeImage, setActiveImage] = useState(0)
  const [showContact, setShowContact] = useState(false)
  const [saved, setSaved] = useState(isSaved(id))
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [showEmi, setShowEmi] = useState(false)
  const [emiParams, setEmiParams] = useState({ rate: 8.5, tenure: 20 })
  const [emiResult, setEmiResult] = useState(0)

  useEffect(() => { incrementViews(id); trackView(id) }, [id])

  useEffect(() => {
    if (showEmi) {
      setEmiResult(calculateEMI(property.price * 0.8, emiParams.rate, emiParams.tenure))
    }
  }, [showEmi, emiParams, property.price])

  const handleContact = () => {
    if (!user) return toast.error('Please login to contact owner')
    setShowContact(true)
    incrementLeads(id)
  }

  const handleChat = async () => {
    if (!user) return toast.error('Please login to chat')
    const chatId = await createChat('owner-' + property.ownerName, property.id)
    if (chatId) { toast.success('Chat started!'); incrementLeads(id) }
  }

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href)
    toast.success('Link copied!')
  }

  const handleSave = () => {
    if (!user) return toast.error('Please login to save properties')
    const nowSaved = trackSave(id)
    setSaved(nowSaved)
    toast.success(nowSaved ? 'Property saved!' : 'Removed from saved')
  }

  const similarProperties = allProperties.filter(p => p.city === property.city && p.id !== property.id).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-dark-50 dark:bg-dark-900/50 border-b border-dark-100 dark:border-dark-700">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <button onClick={() => navigate(-1)} className="p-1 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-lg">
              <HiArrowLeft className="w-4 h-4" />
            </button>
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-primary-600">Properties</Link>
            <span>/</span>
            <span className="text-dark-900 dark:text-dark-50 truncate max-w-[200px] sm:max-w-xs">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Image Gallery */}
            <div className="card overflow-hidden">
              <div className="relative h-[200px] sm:h-[280px] md:h-[350px] bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 flex items-center justify-center">
                <span className="text-5xl sm:text-7xl opacity-50">{getPropertyTypeIcon(property.propertyType)}</span>
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.isFeatured && <span className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-sm font-medium">Featured</span>}
                  {property.isVerified && <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm font-medium flex items-center gap-1"><HiShieldCheck /> Verified</span>}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button onClick={handleShare} className="p-2.5 bg-white/90 dark:bg-dark-800/90 rounded-full hover:bg-white transition-colors">
                    <HiShare className="w-5 h-5" />
                  </button>
                  <button onClick={handleSave} className={`p-2.5 bg-white/90 dark:bg-dark-800/90 rounded-full hover:bg-white transition-colors ${saved ? 'text-red-500' : ''}`}>
                    <HiHeart className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Property Info */}
            <div className="card p-5">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h1 className="text-xl font-bold font-heading mb-1">
                    {property.title || `${property.bedrooms ? property.bedrooms + ' BHK ' : ''}${property.propertyType} in ${property.locality}`}
                  </h1>
                  <p className="text-dark-500 flex items-center gap-1 text-sm">
                    <HiLocationMarker className="w-4 h-4" /> {property.locality}, {property.city}, {property.state}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">{formatPrice(property.price)}</div>
                  {property.category === 'rent' && <span className="text-sm text-dark-500">per month</span>}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 py-3 border-y border-dark-100 dark:border-dark-700 mb-3">
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-50 dark:bg-dark-800 rounded-lg">
                    <IoBedOutline className="w-4 h-4 text-primary-600" />
                    <div className="text-sm"><span className="font-semibold">{property.bedrooms}</span> <span className="text-dark-500">Beds</span></div>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-50 dark:bg-dark-800 rounded-lg">
                    <IoWaterOutline className="w-4 h-4 text-primary-600" />
                    <div className="text-sm"><span className="font-semibold">{property.bathrooms}</span> <span className="text-dark-500">Baths</span></div>
                  </div>
                )}
                {property.area > 0 && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-50 dark:bg-dark-800 rounded-lg">
                    <TbRulerMeasure className="w-4 h-4 text-primary-600" />
                    <div className="text-sm"><span className="font-semibold">{formatArea(property.area)}</span> <span className="text-dark-500">Area</span></div>
                  </div>
                )}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-50 dark:bg-dark-800 rounded-lg">
                  <span className="text-primary-600 text-sm">📐</span>
                  <div className="text-sm"><span className="font-semibold">{property.furnishing}</span> <span className="text-dark-500">Furnishing</span></div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                {property.facing && <InfoItem label="Facing" value={property.facing} />}
                <InfoItem label="Floor" value={`${property.floor || 'Ground'} of ${property.totalFloors || 'N/A'}`} />
                <InfoItem label="Age" value={property.age || 'New'} />
                <InfoItem label="Parking" value={`${property.parking || 0} spots`} />
                <InfoItem label="Type" value={property.propertyType} />
                <InfoItem label="Status" value={property.category === 'rent' ? 'Rental' : 'Sale'} />
                <InfoItem label="Posted" value={formatDate(property.createdAt)} />
                <InfoItem label="Views" value={`${property.views || 0}`} />
              </div>

              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-dark-600 dark:text-dark-400 leading-relaxed">{property.description}</p>
              </div>
            </div>

            {/* Amenities */}
            <div className="card p-5">
              <h3 className="font-semibold mb-3">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {(property.amenities?.length > 0 ? property.amenities : AMENITIES.slice(0, 8)).map(amenity => (
                  <div key={amenity} className="flex items-center gap-2 text-sm">
                    <HiCheck className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* EMI Calculator */}
            <div className="card p-5">
              <button onClick={() => setShowEmi(!showEmi)} className="flex items-center justify-between w-full">
                <h3 className="font-semibold">EMI Calculator</h3>
                <span className="text-primary-600 text-sm">{showEmi ? 'Hide' : 'Calculate EMI'}</span>
              </button>
              {showEmi && (
                <div className="mt-4 space-y-4 animate-slide-down">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-dark-500 block mb-1">Loan Amount: ₹{(property.price * 0.8).toLocaleString('en-IN')}</label>
                      <input type="range" min={1} max={20} value={emiParams.rate}
                        onChange={(e) => setEmiParams(p => ({ ...p, rate: e.target.value }))} className="w-full" />
                      <span className="text-xs text-dark-500">Rate: {emiParams.rate}%</span>
                    </div>
                    <div>
                      <label className="text-sm text-dark-500 block mb-1">Tenure: {emiParams.tenure} years</label>
                      <input type="range" min={5} max={30} value={emiParams.tenure}
                        onChange={(e) => setEmiParams(p => ({ ...p, tenure: e.target.value }))} className="w-full" />
                    </div>
                  </div>
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg text-center">
                    <div className="text-sm text-dark-500">Monthly EMI</div>
                    <div className="text-3xl font-bold text-primary-600">{formatPrice(emiResult)}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Similar Properties */}
            {similarProperties.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Similar Properties in {property.city}</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {similarProperties.map(p => (
                    <PropertyCard key={p.id} property={p} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {!sidebarVisible && (
              <button onClick={() => setSidebarVisible(true)} className="card p-3 w-full text-center text-sm text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium transition-colors">
                Show Owner Card
              </button>
            )}
            {/* Owner Card */}
            <div className={`card p-5 ${sidebarVisible ? '' : 'hidden'}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-xl font-bold text-primary-600">
                    {property.ownerName?.[0] || 'O'}
                  </div>
                  <div>
                    <div className="font-semibold">{property.ownerName || 'Property Owner'}</div>
                    <div className="text-xs text-dark-500 capitalize">{property.listingType}</div>
                  </div>
                </div>
                <button onClick={() => setSidebarVisible(false)} className="p-1.5 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-lg text-dark-400 hover:text-dark-600">
                  <HiX className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                {showContact ? (
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center relative">
                    <button onClick={() => setShowContact(false)} className="absolute top-1 right-1 p-1 hover:bg-green-100 dark:hover:bg-green-800 rounded">
                      <HiX className="w-4 h-4 text-green-600" />
                    </button>
                    <div className="text-lg font-bold text-green-600">{property.ownerPhone}</div>
                    <div className="text-xs text-green-600 mt-1">✓ Phone number revealed</div>
                  </div>
                ) : (
                  <button onClick={handleContact} className="btn-primary w-full flex items-center justify-center gap-2">
                    <HiPhone className="w-5 h-5" /> Show Contact
                  </button>
                )}

                <button onClick={handleChat} className="btn-outline w-full flex items-center justify-center gap-2">
                  <HiChat className="w-5 h-5" /> Chat with Owner
                </button>

                <button onClick={() => {
                  const phone = property.ownerPhone?.replace(/[^0-9]/g, '') || '91xxxxxxxxxx'
                  const msg = encodeURIComponent(`Hi, I'm interested in ${property.title || 'your property'} listed on Rstate.`)
                  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank')
                  incrementLeads(id)
                }} className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-green-500 text-green-600 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 font-medium transition-colors">
                  <span>💬</span> WhatsApp
                </button>

                <button onClick={() => { toast.success('Visit request sent! Owner will contact you.'); incrementLeads(id); trackVisit(id) }}
                  className="btn-secondary w-full flex items-center justify-center gap-2">
                  <HiCalendar className="w-5 h-5" /> Schedule Visit
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-dark-100 dark:border-dark-700">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-dark-500 overflow-x-auto scrollbar-hide">
                  <HiShieldCheck className="w-4 h-4 text-green-500" />
                  {property.isVerified ? 'Verified Listing' : 'Verification Pending'}
                </div>
                <div className="text-xs text-dark-400 mt-1">
                  Property ID: RST-{property.id?.toString().padStart(6, '0') || '000001'}
                </div>
                <div className="text-xs text-dark-400 mt-1">
                  Views: {property.views || 0} | Saves: {property.saves || 0}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card p-4">
              <h4 className="font-semibold text-sm mb-2">Need Help?</h4>
              <div className="space-y-2 text-sm">
                <Link to="/home-loan" className="block p-2 hover:bg-dark-50 dark:hover:bg-dark-700 rounded-lg">🏦 Home Loan</Link>
                <Link to="/property-valuation" className="block p-2 hover:bg-dark-50 dark:hover:bg-dark-700 rounded-lg">📊 Property Valuation</Link>
                <Link to="/rental-agreement" className="block p-2 hover:bg-dark-50 dark:hover:bg-dark-700 rounded-lg">📝 Rental Agreement</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoItem({ label, value }) {
  return (
    <div className="text-sm">
      <div className="text-dark-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  )
}
