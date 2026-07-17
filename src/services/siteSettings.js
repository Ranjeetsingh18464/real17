let settings = {
  socialLinks: [
    { label: 'FB', name: 'Facebook', url: 'https://facebook.com/rstate', icon: 'FaFacebookF' },
    { label: 'TW', name: 'Twitter', url: 'https://twitter.com/rstate', icon: 'FaTwitter' },
    { label: 'IG', name: 'Instagram', url: 'https://instagram.com/rstate', icon: 'FaInstagram' },
    { label: 'LN', name: 'LinkedIn', url: 'https://linkedin.com/company/rstate', icon: 'FaLinkedinIn' },
  ],
  contactInfo: {
    address: 'SANT ASHRAM, NEAR CHHAYA PUBLIC SCHOOL, GOVINDPURI, MODINAGAR 201201',
    phone: '8057007105',
    email: 'ranjeetsingh18463@gmail.com',
  },
}

const listeners = new Set()

export function getSettings() {
  return settings
}

export function updateSocialLinks(links) {
  settings = { ...settings, socialLinks: links }
  listeners.forEach(fn => fn(settings))
}

export function updateContactInfo(info) {
  settings = { ...settings, contactInfo: { ...settings.contactInfo, ...info } }
  listeners.forEach(fn => fn(settings))
}

export function onSettingsChange(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
