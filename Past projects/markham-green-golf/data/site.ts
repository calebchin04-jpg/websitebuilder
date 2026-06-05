export const siteConfig = {
  name:         'Markham Green Golf Club',
  tagline:      "Markham's public golf course — real golf, no pretension",
  phone:        '(905) 294-6156',
  phoneRaw:     '+19052946156',
  email:        '',                          // pro shop email — TBC from client
  address:      '',                          // PLACEHOLDER — client must provide before launch
  addressFull:  '',                          // PLACEHOLDER — full formatted address
  mapsUrl:      '',                          // PLACEHOLDER — Google Maps URL when address confirmed
  hours: {
    note:       'Open seasonally April–November',
    weekday:    '',                          // PLACEHOLDER — e.g. "Mon–Fri: 7am–Dusk"
    weekend:    '',                          // PLACEHOLDER — e.g. "Sat–Sun: 6am–Dusk"
  },
  seasonOpen:   'April 26, 2025',
  yearEstablished: '',                       // PLACEHOLDER — client must confirm
  bookingUrl:   null as string | null,       // null = tel: link; set to URL when booking system activates
  social: {
    instagram:  '',                          // PLACEHOLDER — confirm with client
    facebook:   '',                          // PLACEHOLDER — confirm with client
  },
}

// Greg Salazar / Salazar Golf Academy
export const lessonContact = {
  name:    'Greg Salazar',
  academy: 'Salazar Golf Academy',
  email:   'greg@salazargolfacademy.com',
  // If client confirms pro shop handles all inquiries, change cta to 'phone'
  cta:     'email' as 'email' | 'phone',
}
