export default function CrossroadsPreview() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: '#F4ECD8', fontFamily: 'Satoshi, sans-serif' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(42,31,20,0.07) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Bottom forest wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 108%, rgba(31,78,61,0.18) 0%, rgba(31,78,61,0.06) 45%, transparent 68%)',
        }}
      />

      {/* Left brass accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 28% 45% at -3% 68%, rgba(184,120,46,0.1) 0%, transparent 55%)',
        }}
      />

      {/* Paper grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '220px 220px',
        }}
      />

      {/* Nav */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center z-10"
        style={{ padding: '28px 75px' }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: '#2A1F14',
            letterSpacing: '0.18em',
          }}
        >
          CROSSROADS
        </span>
      </div>

      {/* Main hero content */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-center"
        style={{ paddingLeft: 75, paddingRight: 75, paddingTop: 80 }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="relative flex h-[7px] w-[7px] shrink-0">
            <span
              className="absolute inline-flex h-full w-full rounded-full"
              style={{ background: '#1F4E3D', opacity: 0.5 }}
            />
            <span
              className="relative inline-flex h-[7px] w-[7px] rounded-full"
              style={{ background: '#1F4E3D' }}
            />
          </span>
          <p
            style={{
              fontSize: 10,
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'rgba(42,31,20,0.5)',
            }}
          >
            Markham, ON · Founding 30 offer active
          </p>
        </div>

        {/* Headline */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontSize: 'clamp(3.2rem, 6.5vw, 6rem)',
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: '-0.03em',
              color: '#2A1F14',
            }}
          >
            Built in Markham.
          </div>
          <div
            style={{
              fontSize: 'clamp(3.2rem, 6.5vw, 6rem)',
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: '-0.03em',
              color: '#1F4E3D',
            }}
          >
            Built for Markham.
          </div>
        </div>

        {/* Body copy */}
        <p
          style={{
            color: 'rgba(42,31,20,0.65)',
            fontSize: '1.07rem',
            lineHeight: 1.75,
            maxWidth: 510,
            marginBottom: 40,
          }}
        >
          We help Markham businesses get discovered by local residents — through a local
          directory, in-store voting, monthly giveaways, and simple monthly exposure.{' '}
          <span style={{ color: '#2A1F14', fontWeight: 500 }}>Starting at $5/month.</span>
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              background: '#1F4E3D',
              color: '#FBF6E9',
              fontWeight: 700,
              padding: '20px 40px',
              borderRadius: 6,
              fontSize: 15,
            }}
          >
            Reserve My Free 2-Month Trial →
          </div>
          <span
            style={{
              color: 'rgba(42,31,20,0.6)',
              fontSize: 15,
              textDecoration: 'underline',
              textUnderlineOffset: 4,
            }}
          >
            Book a 10-minute demo ↗
          </span>
        </div>
      </div>

      {/* Founding badge — right side */}
      <div
        className="absolute z-10"
        style={{ right: 75, top: '50%', transform: 'translateY(-50%)' }}
      >
        <div style={{ position: 'relative', width: 320, height: 320 }}>
          {/* Orbiting text ring */}
          <svg
            viewBox="0 0 240 240"
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          >
            <defs>
              <path
                id="preview-ring"
                d="M 120,120 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0"
              />
            </defs>
            <text fill="rgba(184,120,46,0.65)" fontSize="9.5" letterSpacing="4.5" fontWeight="600">
              <textPath href="#preview-ring">
                FOUNDING 30 · MARKHAM ON · FOUNDING 30 · MARKHAM ON ·{' '}
              </textPath>
            </text>
          </svg>

          {/* Center disc */}
          <div
            style={{
              position: 'absolute',
              inset: '22%',
              borderRadius: '50%',
              border: '1px solid rgba(31,78,61,0.2)',
              background: 'rgba(31,78,61,0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow:
                '0 30px 60px -30px rgba(31,78,61,0.25), inset 0 0 30px rgba(31,78,61,0.04)',
            }}
          >
            <span style={{ fontSize: '6rem', fontWeight: 700, lineHeight: 1, color: '#1F4E3D' }}>
              30
            </span>
            <span
              style={{
                fontSize: 9,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(42,31,20,0.45)',
                marginTop: 4,
              }}
            >
              spots
            </span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ padding: '24px 75px' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { n: '10,000', label: 'flyers / month' },
            { n: '40,000', label: 'households reached' },
            { n: '30', label: 'founding spots' },
            { n: '$5', label: 'starting price / mo' },
          ].map((s) => (
            <div key={s.label} style={{ padding: '8px 24px' }}>
              <div style={{ fontSize: '1.9rem', fontWeight: 700, color: '#1F4E3D', marginBottom: 4 }}>
                {s.n}
              </div>
              <div
                style={{
                  fontSize: 10,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'rgba(42,31,20,0.45)',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
