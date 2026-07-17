import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiPhotograph, HiUpload, HiX } from 'react-icons/hi'
import toast from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'
import { useProperties } from '../contexts/PropertyContext'
import { addProperty as saveLocal, replaceId } from '../services/propertyStore'
import { PROPERTY_TYPES, FURNISHING_TYPES, FACING_TYPES, AMENITIES, ALL_CITIES, CITIES_BY_STATE, INDIAN_STATES, BHK_TYPES } from '../utils/constants'

const PLOT_TYPES = ['Plot', 'Agriculture']
const BUILT_TYPES = ['Flat', 'Villa', 'PG', 'Hostel', 'Commercial', 'Office', 'Shop', 'Rent', 'Pagri']

export default function AddProperty() {
  const { userProfile } = useAuth()
  const { addProperty } = useProperties()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    propertyType: '',
    category: 'buy',
    bedrooms: '',
    bathrooms: '',
    area: '',
    furnishing: '',
    parking: '',
    facing: '',
    floor: '',
    totalFloors: '',
    age: '',
    city: '',
    state: '',
    locality: '',
    pincode: '',
    listingType: userProfile?.role === 'seller' ? 'owner' : userProfile?.role || 'owner',
    ownerName: userProfile?.displayName || '',
    ownerPhone: '',
    amenities: [],
    latitude: '',
    longitude: '',
    plotArea: '',
    plotAreaUnit: 'sq.ft',
    dtcpApproved: '',
    reraApproved: '',
    reraNumber: '',
    roadWidth: '',
    boundaryWall: '',
    cornerPlot: '',
    availableFrom: '',
    deposit: '',
    noticePeriod: '',
  })

  const isPlot = PLOT_TYPES.includes(form.propertyType)
  const isRent = form.category === 'rent'
  const isBuilt = !isPlot && BUILT_TYPES.includes(form.propertyType)

  const updateForm = (key, value) => setForm(prev => ({ ...prev, [key]: value }))

  const toggleAmenity = (amenity) => {
    setForm(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity],
    }))
  }

  const handleFiles = (e) => {
    const selected = Array.from(e.target.files)
    setFiles(prev => [...prev, ...selected].slice(0, 10))
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleNext = () => {
    if (step === 1 && (!form.title || !form.price || !form.propertyType)) {
      return toast.error('Please fill Title, Price, and Property Type')
    }
    if (step === 2) {
      if (isPlot && !form.plotArea) return toast.error('Please enter the plot area')
      if (isBuilt && !form.area) return toast.error('Please enter the area')
    }
    if (step === 3 && !form.city) {
      return toast.error('Please enter the city')
    }
    setStep(step + 1)
  }

  const handleSubmit = async () => {
    if (!form.title || !form.price || !form.propertyType || !form.city) {
      return toast.error('Please fill required fields')
    }
    setLoading(true)
    const data = {
      ...form,
      price: parseInt(form.price),
      bedrooms: parseInt(form.bedrooms) || 0,
      bathrooms: parseInt(form.bathrooms) || 0,
      area: parseInt(form.area) || 0,
      plotArea: parseInt(form.plotArea) || 0,
      parking: parseInt(form.parking) || 0,
      floor: parseInt(form.floor) || 0,
      totalFloors: parseInt(form.totalFloors) || 0,
      deposit: parseInt(form.deposit) || 0,
      roadWidth: parseInt(form.roadWidth) || 0,
      latitude: parseFloat(form.latitude) || 0,
      longitude: parseFloat(form.longitude) || 0,
    }
    const saved = saveLocal(data)
    const dashPath = userProfile?.role === 'super_admin' ? '/dashboard/admin' : `/dashboard/${userProfile?.role || 'seller'}`
    navigate(dashPath, { replace: true })
    try {
      const result = await addProperty(data, files)
      if (result?.id && saved?.id) replaceId(saved.id, result.id)
    } catch (error) {
      console.warn('Cloud save failed, property saved locally:', error)
    } finally {
      setLoading(false)
    }
  }

  const steps = [
    { num: 1, label: 'Basic Info' },
    { num: 2, label: isPlot ? 'Plot Details' : 'Property Details' },
    { num: 3, label: 'Location' },
    { num: 4, label: 'Photos & Submit' },
  ]

  return (
    <div className="min-h-screen bg-dark-50 dark:bg-dark-900/50 py-4 sm:py-8">
      <div className="max-w-3xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold font-heading mb-2">Add New Property</h1>
            <p className="text-dark-500">List your property for sale or rent</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => { if (window.confirm('Discard all changes?')) navigate(-1) }}
              className="btn-secondary text-sm px-3 py-2">Cancel</button>
            <button onClick={() => { if (window.confirm('Discard all changes?')) navigate(-1) }} className="p-2 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-lg text-dark-400 hover:text-dark-600">
              <HiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= s.num ? 'bg-primary-600 text-white' : 'bg-dark-200 dark:bg-dark-700 text-dark-500'
              }`}>{s.num}</div>
              <span className={`text-sm hidden sm:block ${step >= s.num ? 'font-medium' : 'text-dark-400'}`}>{s.label}</span>
              {i < steps.length - 1 && <div className={`flex-1 h-0.5 ${step > s.num ? 'bg-primary-600' : 'bg-dark-200 dark:bg-dark-700'}`} />}
            </div>
          ))}
        </div>

        <div className="card p-4 sm:p-6 lg:p-8">
          <div>
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Property Title *</label>
                  <input type="text" value={form.title} onChange={(e) => updateForm('title', e.target.value)}
                    placeholder="e.g., 3 BHK Luxury Apartment in Sector 62" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Description</label>
                  <textarea value={form.description} onChange={(e) => updateForm('description', e.target.value)}
                    placeholder="Describe your property in detail..." rows={4} className="input-field resize-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Price (₹) *</label>
                    <input type="number" value={form.price} onChange={(e) => updateForm('price', e.target.value)}
                      placeholder="Enter price" className="input-field" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Category *</label>
                    <select value={form.category} onChange={(e) => updateForm('category', e.target.value)} className="input-field">
                      <option value="buy">For Sale</option>
                      <option value="rent">For Rent</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Property Type *</label>
                    <select value={form.propertyType} onChange={(e) => updateForm('propertyType', e.target.value)} className="input-field" required>
                      <option value="">Select type</option>
                      <optgroup label="Residential">
                        <option value="Flat">Flat</option>
                        <option value="Villa">Villa</option>
                        <option value="PG">PG</option>
                        <option value="Hostel">Hostel</option>
                      </optgroup>
                      <optgroup label="Plot / Land">
                        <option value="Plot">Plot</option>
                        <option value="Agriculture">Agriculture</option>
                      </optgroup>
                      <optgroup label="Commercial">
                        <option value="Commercial">Commercial</option>
                        <option value="Office">Office</option>
                        <option value="Shop">Shop</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Listing As *</label>
                    <select value={form.listingType} onChange={(e) => updateForm('listingType', e.target.value)} className="input-field">
                      <option value="owner">Owner</option>
                      <option value="broker">Broker</option>
                      <option value="builder">Builder</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Property / Plot Details */}
            {step === 2 && (
              <div className="space-y-5 animate-fade-in">
                {/* ============ PLOT / AGRICULTURE ============ */}
                {isPlot && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Plot Area *</label>
                        <input type="number" value={form.plotArea} onChange={(e) => updateForm('plotArea', e.target.value)}
                          placeholder="e.g., 1200" className="input-field" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Area Unit</label>
                        <select value={form.plotAreaUnit} onChange={(e) => updateForm('plotAreaUnit', e.target.value)} className="input-field">
                          <option value="sq.ft">sq.ft</option>
                          <option value="sq.yd">sq.yd</option>
                          <option value="sq.m">sq.m</option>
                          <option value="acre">Acre</option>
                          <option value="hectare">Hectare</option>
                          <option value="bigha">Bigha</option>
                          <option value="gunta">Gunta</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Facing</label>
                        <select value={form.facing} onChange={(e) => updateForm('facing', e.target.value)} className="input-field">
                          <option value="">Select</option>
                          {FACING_TYPES.map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Road Width (ft)</label>
                        <input type="number" value={form.roadWidth} onChange={(e) => updateForm('roadWidth', e.target.value)}
                          placeholder="e.g., 30" className="input-field" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">DTCP Approved</label>
                        <select value={form.dtcpApproved} onChange={(e) => updateForm('dtcpApproved', e.target.value)} className="input-field">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="applied">Applied</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">RERA Approved</label>
                        <select value={form.reraApproved} onChange={(e) => updateForm('reraApproved', e.target.value)} className="input-field">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="applied">Applied</option>
                        </select>
                      </div>
                    </div>

                    {form.reraApproved === 'yes' && (
                      <div>
                        <label className="block text-sm font-medium mb-1.5">RERA Number</label>
                        <input type="text" value={form.reraNumber} onChange={(e) => updateForm('reraNumber', e.target.value)}
                          placeholder="e.g., HARERA/GGM/XXX/XXXX" className="input-field" />
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Boundary Wall</label>
                        <select value={form.boundaryWall} onChange={(e) => updateForm('boundaryWall', e.target.value)} className="input-field">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Corner Plot</label>
                        <select value={form.cornerPlot} onChange={(e) => updateForm('cornerPlot', e.target.value)} className="input-field">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Amenities</label>
                      <div className="flex flex-wrap gap-2">
                        {['Park', 'Security', 'Power Backup', 'Rain Water Harvesting', 'Vaastu Compliant', '24x7 Water', 'CCTV', 'Gated Community', 'Club House', 'Jogging Track'].map(a => (
                          <button key={a} type="button" onClick={() => toggleAmenity(a)}
                            className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                              form.amenities.includes(a)
                                ? 'bg-primary-600 text-white border-primary-600'
                                : 'border-dark-200 dark:border-dark-700 hover:border-primary-400'
                            }`}>
                            {a}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* ============ BUILT PROPERTY (Flat, Villa, PG, Hostel, Commercial, etc.) ============ */}
                {isBuilt && (
                  <>
                    {['Flat', 'Villa', 'Hostel', 'PG', 'Rent', 'Pagri'].includes(form.propertyType) && (
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Bedrooms</label>
                          <select value={form.bedrooms} onChange={(e) => updateForm('bedrooms', e.target.value)} className="input-field">
                            <option value="">Select</option>
                            {BHK_TYPES.map(b => <option key={b} value={b.split(' ')[0]}>{b}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Bathrooms</label>
                          <select value={form.bathrooms} onChange={(e) => updateForm('bathrooms', e.target.value)} className="input-field">
                            <option value="">Select</option>
                            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Area (sq.ft)</label>
                          <input type="number" value={form.area} onChange={(e) => updateForm('area', e.target.value)}
                            placeholder="Carpet area" className="input-field" />
                        </div>
                      </div>
                    )}

                    {['Commercial', 'Office', 'Shop'].includes(form.propertyType) && (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Carpet Area (sq.ft)</label>
                          <input type="number" value={form.area} onChange={(e) => updateForm('area', e.target.value)}
                            placeholder="Carpet area" className="input-field" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Facing</label>
                          <select value={form.facing} onChange={(e) => updateForm('facing', e.target.value)} className="input-field">
                            <option value="">Select</option>
                            {FACING_TYPES.map(f => <option key={f} value={f}>{f}</option>)}
                          </select>
                        </div>
                      </div>
                    )}

                    {['Flat', 'Villa', 'Hostel', 'PG', 'Rent', 'Pagri'].includes(form.propertyType) && (
                      <>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1.5">Furnishing</label>
                            <select value={form.furnishing} onChange={(e) => updateForm('furnishing', e.target.value)} className="input-field">
                              <option value="">Select</option>
                              {Object.values(FURNISHING_TYPES).map(f => <option key={f} value={f}>{f}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1.5">Parking</label>
                            <select value={form.parking} onChange={(e) => updateForm('parking', e.target.value)} className="input-field">
                              <option value="">Select</option>
                              {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n} spot{n > 1 ? 's' : ''}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1.5">Facing</label>
                            <select value={form.facing} onChange={(e) => updateForm('facing', e.target.value)} className="input-field">
                              <option value="">Select</option>
                              {FACING_TYPES.map(f => <option key={f} value={f}>{f}</option>)}
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1.5">Floor</label>
                            <input type="number" value={form.floor} onChange={(e) => updateForm('floor', e.target.value)}
                              placeholder="Floor number" className="input-field" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1.5">Total Floors</label>
                            <input type="number" value={form.totalFloors} onChange={(e) => updateForm('totalFloors', e.target.value)}
                              placeholder="Total floors" className="input-field" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1.5">Age of Property</label>
                            <input type="text" value={form.age} onChange={(e) => updateForm('age', e.target.value)}
                              placeholder="e.g., 2 years" className="input-field" />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Rent-specific fields */}
                    {isRent && (
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Security Deposit (₹)</label>
                          <input type="number" value={form.deposit} onChange={(e) => updateForm('deposit', e.target.value)}
                            placeholder="e.g., 50000" className="input-field" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Available From</label>
                          <input type="date" value={form.availableFrom} onChange={(e) => updateForm('availableFrom', e.target.value)}
                            className="input-field" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Notice Period</label>
                          <select value={form.noticePeriod} onChange={(e) => updateForm('noticePeriod', e.target.value)} className="input-field">
                            <option value="">Select</option>
                            <option value="1month">1 Month</option>
                            <option value="2months">2 Months</option>
                            <option value="3months">3 Months</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium mb-2">Amenities</label>
                      <div className="flex flex-wrap gap-2">
                        {AMENITIES.map(a => (
                          <button key={a} type="button" onClick={() => toggleAmenity(a)}
                            className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                              form.amenities.includes(a)
                                ? 'bg-primary-600 text-white border-primary-600'
                                : 'border-dark-200 dark:border-dark-700 hover:border-primary-400'
                            }`}>
                            {a}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* ============ FALLBACK: No type selected ============ */}
                {!isPlot && !isBuilt && (
                  <div className="text-center py-8 text-dark-400">
                    <p className="text-sm">Please go back and select a Property Type to see relevant fields.</p>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Location */}
            {step === 3 && (
              <div className="space-y-5 animate-fade-in">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">City *</label>
                    <input type="text" value={form.city} onChange={(e) => updateForm('city', e.target.value)} list="addCities" className="input-field" placeholder="Search or type city" required />
                    <datalist id="addCities">
                      {CITIES_BY_STATE.flatMap(s =>
                        (!form.state || s.state === form.state)
                          ? s.cities.map(c => <option key={c} value={c} />)
                          : []
                      )}
                    </datalist>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">State</label>
                    <select value={form.state} onChange={(e) => updateForm('state', e.target.value)} className="input-field">
                      <option value="">Select state</option>
                      {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Locality *</label>
                    <input type="text" value={form.locality} onChange={(e) => updateForm('locality', e.target.value)}
                      placeholder="e.g., Sector 62, Whitefield" className="input-field" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Pincode</label>
                    <input type="text" value={form.pincode} onChange={(e) => updateForm('pincode', e.target.value)}
                      placeholder="6-digit pincode" maxLength={6} className="input-field" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Owner Name *</label>
                    <input type="text" value={form.ownerName} onChange={(e) => updateForm('ownerName', e.target.value)}
                      className="input-field" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Owner Phone *</label>
                    <input type="tel" value={form.ownerPhone} onChange={(e) => updateForm('ownerPhone', e.target.value)}
                      placeholder="10-digit number" maxLength={10} className="input-field" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Latitude</label>
                    <input type="text" value={form.latitude} onChange={(e) => updateForm('latitude', e.target.value)}
                      placeholder="e.g., 28.6200" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Longitude</label>
                    <input type="text" value={form.longitude} onChange={(e) => updateForm('longitude', e.target.value)}
                      placeholder="e.g., 77.3900" className="input-field" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Photos & Submit */}
            {step === 4 && (
              <div className="space-y-5 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Photos</label>
                  <div className="border-2 border-dashed border-dark-200 dark:border-dark-700 rounded-xl p-8 text-center hover:border-primary-400 transition-colors cursor-pointer"
                    onClick={() => document.getElementById('file-input').click()}>
                    <HiUpload className="w-12 h-12 text-dark-400 mx-auto mb-3" />
                    <p className="font-medium">Click to upload images</p>
                    <p className="text-xs text-dark-400 mt-1">Max 10 images, JPG/PNG/WebP</p>
                    <input id="file-input" type="file" multiple accept="image/*" onChange={handleFiles} className="hidden" />
                  </div>

                  {files.length > 0 && (
                    <div className="grid grid-cols-4 gap-3 mt-4">
                      {files.map((file, i) => (
                        <div key={i} className="relative group">
                          <img src={URL.createObjectURL(file)} alt="" className="w-full h-24 object-cover rounded-lg" />
                          <button type="button" onClick={() => removeFile(i)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center">
                            <HiX className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Preview</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="text-dark-500">Title:</span> {form.title}</div>
                    <div><span className="text-dark-500">Price:</span> ₹{form.price ? parseInt(form.price).toLocaleString('en-IN') : 'N/A'}</div>
                    <div><span className="text-dark-500">Type:</span> {form.propertyType}</div>
                    <div><span className="text-dark-500">Category:</span> {isRent ? 'For Rent' : 'For Sale'}</div>
                    <div><span className="text-dark-500">Location:</span> {form.locality}, {form.city}</div>
                    {isPlot ? (
                      <div><span className="text-dark-500">Plot Area:</span> {form.plotArea || 'N/A'} {form.plotAreaUnit}</div>
                    ) : (
                      <>
                        <div><span className="text-dark-500">BHK:</span> {form.bedrooms || 'N/A'}</div>
                        <div><span className="text-dark-500">Area:</span> {form.area || 'N/A'} sq.ft</div>
                      </>
                    )}
                    {isRent && form.deposit && (
                      <div><span className="text-dark-500">Deposit:</span> ₹{parseInt(form.deposit).toLocaleString('en-IN')}</div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-dark-100 dark:border-dark-700">
              <button type="button" onClick={() => setStep(Math.max(1, step - 1))}
                className={`btn-secondary ${step === 1 ? 'invisible' : ''}`}>Previous</button>
              <div className="flex gap-3">
                {step < 4 ? (
                  <button type="button" onClick={handleNext} className="btn-primary">Next</button>
                ) : (
                  <button type="button" onClick={handleSubmit} disabled={loading} className="btn-primary">
                    {loading ? 'Listing...' : 'List Property'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
