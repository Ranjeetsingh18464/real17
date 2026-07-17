import { sampleProperties } from '../data/sampleProperties'

const STORAGE_KEY = 'rstate_properties'

function getAll() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch (e) {
    console.warn('localStorage read error:', e)
  }
  return null
}

export function loadProperties() {
  const stored = getAll()
  if (stored) return stored
  try {
    const initial = [...sampleProperties]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial))
    return initial
  } catch (e) {
    console.warn('localStorage init error:', e)
    return [...sampleProperties]
  }
}

export function updateProperty(id, data) {
  try {
    let props = getAll() || [...sampleProperties]
    const idx = props.findIndex(p => p.id === id)
    if (idx === -1) { console.warn('Property not found for update:', id); return }
    props[idx] = { ...props[idx], ...data }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(props))
  } catch (e) {
    console.error('updateProperty error:', e)
  }
}

export function deleteProperty(id) {
  try {
    let props = getAll() || [...sampleProperties]
    props = props.filter(p => p.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(props))
  } catch (e) {
    console.error('deleteProperty error:', e)
  }
}

export function incrementViews(id) {
  try {
    const props = getAll() || [...sampleProperties]
    const idx = props.findIndex(p => p.id === id)
    if (idx === -1) return
    props[idx] = { ...props[idx], views: (props[idx].views || 0) + 1 }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(props))
  } catch (e) {
    console.error('incrementViews error:', e)
  }
}

export function incrementLeads(id) {
  try {
    const props = getAll() || [...sampleProperties]
    const idx = props.findIndex(p => p.id === id)
    if (idx === -1) return
    props[idx] = { ...props[idx], leads: (props[idx].leads || 0) + 1 }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(props))
  } catch (e) {
    console.error('incrementLeads error:', e)
  }
}

export function addProperty(data) {
  try {
    const props = getAll() || [...sampleProperties]
    const newProp = { ...data, id: 'demo-' + Date.now(), createdAt: new Date().toISOString(), views: 0, saves: 0 }
    props.push(newProp)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(props))
    return newProp
  } catch (e) {
    console.error('addProperty error:', e)
    return null
  }
}

export function replaceId(oldId, newId) {
  try {
    const props = getAll()
    if (!props) return
    const idx = props.findIndex(p => p.id === oldId)
    if (idx === -1) return
    props[idx].id = newId
    localStorage.setItem(STORAGE_KEY, JSON.stringify(props))
  } catch (e) {
    console.error('replaceId error:', e)
  }
}
