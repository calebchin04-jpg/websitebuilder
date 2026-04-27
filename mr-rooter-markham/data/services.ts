import { Droplets, Wrench, Flame, AlertTriangle, ShieldCheck } from 'lucide-react'

export const services = [
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning & Clog Removal',
    shortDescription: 'Slow drains or full blockages cleared fast — kitchen, bathroom, main line.',
    fullDescription:
      'Clogged drains don\'t fix themselves. Whether it\'s a slow kitchen sink, a backed-up shower, or a blocked main sewer line, our licensed plumbers arrive with the equipment to clear it the same day. We use professional-grade snaking and hydro-jetting — no guesswork, no temporary fixes.',
    icon: Droplets,
    features: [
      'Kitchen and bathroom sink drain clearing',
      'Toilet and bathtub blockage removal',
      'Main sewer line cleaning',
      'Hydro-jetting for stubborn buildup',
      'Camera inspection available',
      'Flat-rate pricing — quoted before we start',
    ],
    faqs: [
      {
        q: 'How much does drain cleaning cost?',
        a: 'We provide upfront flat-rate pricing after a quick assessment. You know the cost before any work begins — no surprise invoices.',
      },
      {
        q: 'Can you clear a main sewer line clog?',
        a: 'Yes. Main line blockages are one of our most common calls. We carry the equipment to clear and inspect your main sewer line on the same visit.',
      },
      {
        q: 'Do you charge extra for evening or weekend service?',
        a: 'No. We don\'t charge overtime rates — ever. The price you\'re quoted is the price you pay, regardless of when you call.',
      },
    ],
    relatedServices: ['sewer-line', 'emergency'],
  },
  {
    slug: 'sewer-line',
    name: 'Sewer Line Repair & Replacement',
    shortDescription: 'Cracked, collapsed, or root-damaged sewer lines diagnosed and repaired.',
    fullDescription:
      'A failing sewer line is one of the most serious plumbing problems a homeowner can face. Slow drains throughout the house, sewage smell, or wet patches in the yard are warning signs. We camera-inspect first so you know exactly what you\'re dealing with — then provide a clear repair or replacement quote.',
    icon: Wrench,
    features: [
      'Video camera sewer line inspection',
      'Root intrusion clearing and removal',
      'Pipe relining (trenchless where possible)',
      'Full sewer line replacement',
      'Excavation and restoration',
      'Insurance documentation available',
    ],
    faqs: [
      {
        q: 'How do I know if my sewer line is damaged?',
        a: 'Multiple slow drains at once, gurgling sounds from toilets, sewer smell in the basement, or unusually lush patches of lawn above the sewer line are common signs.',
      },
      {
        q: 'Do you use trenchless repair methods?',
        a: 'Where the pipe condition allows, yes. Pipe relining is less disruptive than full excavation and is often faster. We\'ll tell you which method suits your situation.',
      },
      {
        q: 'Will my homeowner\'s insurance cover sewer line repair?',
        a: 'Some policies include sewer line coverage — it depends on the cause (tree roots vs. normal wear). We can provide a detailed report to support an insurance claim.',
      },
    ],
    relatedServices: ['drain-cleaning', 'emergency'],
  },
  {
    slug: 'water-heater',
    name: 'Water Heater Repair & Installation',
    shortDescription: 'No hot water? We repair or replace tank and tankless water heaters.',
    fullDescription:
      'A water heater that fails in the middle of winter isn\'t just inconvenient — it\'s disruptive to your whole household. We repair and replace all major brands of tank and tankless water heaters, typically on the same day. Flat-rate pricing before any work starts.',
    icon: Flame,
    features: [
      'Same-day service for most calls',
      'Tank water heater repair and replacement',
      'Tankless (on-demand) water heater service',
      'All major brands serviced',
      'Gas and electric units',
      'Proper disposal of old unit',
    ],
    faqs: [
      {
        q: 'How long does a water heater installation take?',
        a: 'A standard tank replacement typically takes 2–3 hours including disposal of the old unit. Tankless installations may take slightly longer depending on the setup.',
      },
      {
        q: 'Should I repair or replace my water heater?',
        a: 'If your unit is under 8 years old and the repair cost is under 50% of replacement, repair is usually worth it. We\'ll give you an honest assessment — not just the more expensive option.',
      },
      {
        q: 'Do you service rental water heaters?',
        a: 'We work on owned units. If you\'re renting your water heater, you\'ll need to contact your rental company — but we can advise you on buyout options.',
      },
    ],
    relatedServices: ['emergency', 'drain-cleaning'],
  },
  {
    slug: 'emergency',
    name: '24/7 Emergency Plumbing',
    shortDescription: 'Burst pipe, sewage backup, or flooding — we\'re available around the clock.',
    fullDescription:
      'Plumbing emergencies don\'t wait for business hours. Burst pipes, sewage backups, and flooding can cause serious damage within hours. We\'re available 24 hours a day, 7 days a week — including holidays. And unlike other services, we don\'t charge overtime rates for after-hours calls.',
    icon: AlertTriangle,
    features: [
      '24/7 availability — no exceptions',
      'No overtime or after-hours surcharge',
      'Burst pipe repair and water shutoff',
      'Sewage backup emergency response',
      'Basement flooding mitigation',
      'Frozen pipe thawing',
    ],
    faqs: [
      {
        q: 'How fast can you get to me?',
        a: 'We aim to reach Markham and surrounding areas within 60–90 minutes for emergency calls. Call (905) 472-9100 and we\'ll give you an accurate arrival time.',
      },
      {
        q: 'Do you charge more for middle-of-the-night calls?',
        a: 'No. No overtime charges, ever. It\'s one of our core commitments. The price you\'re quoted at 2am is the same as at 2pm.',
      },
      {
        q: 'What counts as a plumbing emergency?',
        a: 'Any situation where water is actively causing damage or poses a health risk: burst pipes, sewage backup, gas line concern, or complete loss of water. When in doubt, call — we\'ll help you assess.',
      },
    ],
    relatedServices: ['drain-cleaning', 'sewer-line', 'backwater-valve'],
  },
  {
    slug: 'backwater-valve',
    name: 'Backwater Valve & Sump Pump',
    shortDescription: 'Protect your basement from sewage backup and flooding.',
    fullDescription:
      'Markham\'s aging sewer infrastructure and heavy rainfall events make basement flooding a real risk. A properly installed backwater valve prevents sewage from backing up into your home, and a sump pump handles groundwater accumulation. Both are eligible for municipal rebates — we handle the paperwork.',
    icon: ShieldCheck,
    features: [
      'Backwater valve installation and inspection',
      'Sump pump installation and replacement',
      'Battery backup sump pump systems',
      'Municipal rebate documentation assistance',
      'Annual maintenance programs',
      'Camera inspection before installation',
    ],
    faqs: [
      {
        q: 'Is there a rebate for backwater valve installation?',
        a: 'Yes. The City of Markham offers a subsidy for backwater valve and sump pump installations through the Residential Protective Plumbing Program. We can help you apply.',
      },
      {
        q: 'How long does backwater valve installation take?',
        a: 'Typically 4–6 hours. It requires cutting into the floor to access the main drain — our crew handles concrete cutting, installation, and cleanup.',
      },
      {
        q: 'My sump pump is running constantly — is that normal?',
        a: 'A pump running continuously usually means it\'s undersized, has a float switch issue, or there\'s a serious water infiltration problem. Call us to assess — ignoring it often leads to pump failure at the worst time.',
      },
    ],
    relatedServices: ['sewer-line', 'emergency'],
  },
] as const

export type Service = (typeof services)[number]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
