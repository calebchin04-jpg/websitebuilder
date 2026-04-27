export type StaffMember = {
  id:         string
  name:       string
  title:      string
  credential: string
  bio:        string       // placeholder until client provides full bios
  photo:      string       // path in /public/images/staff/; '' = use initials
  initials:   string
  link?:      string       // optional link to related page (e.g. /lessons for Greg)
}

export const staff: StaffMember[] = [
  {
    id:         'scott-haynes',
    name:       'Scott Haynes',
    title:      'Course Manager',
    credential: 'PGA of Canada Professional',
    bio:        'Scott manages the day-to-day operations of Markham Green Golf Club. As a PGA of Canada Professional, he brings a level of expertise and care that separates Markham Green from a typical municipal course.',
    photo:      '',          // PLACEHOLDER — provide staff headshot
    initials:   'SH',
  },
  {
    id:         'greg-salazar',
    name:       'Greg Salazar',
    title:      'Head Instructor',
    credential: 'Salazar Golf Academy',
    bio:        'Greg runs the Salazar Golf Academy instruction program at Markham Green, offering private lessons, the Ladies Learn to Golf series, and junior golf camps. His structured programs welcome golfers at every level.',
    photo:      '',          // PLACEHOLDER — provide staff headshot
    initials:   'GS',
    link:       '/lessons',
  },
  {
    id:         'zac-spain',
    name:       'Zac Spain',
    title:      'Food & Beverage Manager',
    credential: '',
    bio:        'Zac manages the on-site food and beverage operation at Markham Green, keeping the 19th hole as welcoming as the course itself.',
    photo:      '',
    initials:   'ZS',
  },
  {
    id:         'dennis-gilchrist',
    name:       'Dennis Gilchrist',
    title:      'Course Superintendent',
    credential: '',
    bio:        'Dennis oversees the maintenance and conditioning of all nine holes at Markham Green. A well-kept course is the foundation of a good round — Dennis makes sure of it.',
    photo:      '',
    initials:   'DG',
  },
]

// Homepage shows only the primary trust anchors
export const staffFeatured = staff.filter(s =>
  s.id === 'scott-haynes' || s.id === 'greg-salazar'
)
