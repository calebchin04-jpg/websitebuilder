// Static 900×900 deals feed thumbnail — scaled to 90×90 inside the switcher tile.
export default function DealsPreview() {
  // Mock deal cards to render
  const cards = [
    { type: 'discount', color: '#1F4E3D', bg: 'rgba(31,78,61,0.15)', label: 'Discount', text: '20% off your first visit this week only', biz: 'Pinnacle Realty', hasImg: true },
    { type: 'event',    color: '#1A3D5C', bg: 'rgba(26,61,92,0.15)', label: 'Event',    text: 'Open house Saturday 2–5 PM, refreshments included', biz: 'Markham Dental', hasImg: false },
    { type: 'freebie',  color: '#7A4500', bg: 'rgba(184,120,46,0.15)', label: 'Freebie', text: 'Free coffee with any purchase over $15', biz: 'Local Roasters', hasImg: false },
  ];

  return (
    <div style={{ width: 900, height: 900, background: '#F4ECD8', position: 'relative', overflow: 'hidden' }}>
      {/* Dot grid — matches Crossroads page */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(42,31,20,0.06) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Header */}
      <div style={{ padding: '60px 72px 40px' }}>
        <p style={{ fontSize: 18, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#1F4E3D', fontWeight: 700, marginBottom: 10 }}>
          Markham · Local
        </p>
        <h1 style={{ fontSize: 72, fontWeight: 800, color: '#2A1F14', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 14 }}>
          Local Deals
        </h1>
        <p style={{ fontSize: 26, color: 'rgba(42,31,20,0.45)', lineHeight: 1.5 }}>
          Fresh offers from businesses in your community.
        </p>
      </div>

      {/* Filter pills */}
      <div style={{ display: 'flex', gap: 16, paddingLeft: 72, paddingBottom: 36 }}>
        {['All', 'Discounts', 'Events', 'Freebies'].map((label, i) => (
          <div key={label} style={{
            padding: '12px 28px', borderRadius: 40,
            background: i === 0 ? '#1F4E3D' : 'transparent',
            border: `1.5px solid ${i === 0 ? '#1F4E3D' : 'rgba(42,31,20,0.18)'}`,
            color: i === 0 ? '#FBF6E9' : 'rgba(42,31,20,0.55)',
            fontSize: 22, fontWeight: i === 0 ? 600 : 400,
          }}>
            {label}
          </div>
        ))}
      </div>

      {/* Deal cards */}
      <div style={{ padding: '0 72px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        {cards.map((card, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: 28,
            border: '1.5px solid rgba(42,31,20,0.07)',
            overflow: 'hidden',
          }}>
            {card.hasImg && (
              <div style={{
                width: '100%', height: 140,
                background: `linear-gradient(135deg, ${card.bg} 0%, rgba(42,31,20,0.04) 100%)`,
                borderBottom: '1px solid rgba(42,31,20,0.06)',
              }} />
            )}
            <div style={{ padding: '28px 32px 30px' }}>
              {/* Business row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: card.bg, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 24, fontWeight: 700, color: card.color,
                  }}>
                    {card.biz[0]}
                  </div>
                  <div>
                    <p style={{ fontSize: 24, fontWeight: 600, color: '#2A1F14' }}>{card.biz}</p>
                    <p style={{ fontSize: 18, color: 'rgba(42,31,20,0.38)' }}>{i === 0 ? '2h ago' : i === 1 ? '5h ago' : '1d ago'}</p>
                  </div>
                </div>
                {/* Bookmark icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(42,31,20,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
              </div>
              <p style={{ fontSize: 26, color: '#2A1F14', lineHeight: 1.5, marginBottom: 18 }}>{card.text}</p>
              <span style={{
                fontSize: 18, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
                padding: '8px 20px', borderRadius: 30, color: card.color, background: card.bg,
              }}>
                {card.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
