// Full-size 900×900 hub preview — rendered at scale(90/900) inside the switcher tile.
// Matches the Live Hub's actual aesthetic: dark bg, circular constellation, industry colours.
export default function LiveHubPreview() {
  // Constellation layout — circle centred at (450, 450), outer ring R=270
  const CX = 450, CY = 450;
  const R_OUT = 270;

  // Outer ring — 6 nodes every 60°, starting from top (90°)
  const outer: { cx: number; cy: number; r: number; fill: string }[] = [
    { cx: 450,                                        cy: CY - R_OUT,       r: 55, fill: '#F0A040' }, // top    — finance
    { cx: CX + R_OUT * Math.cos(Math.PI / 6),        cy: CY - R_OUT * 0.5, r: 48, fill: '#5B9FE8' }, // TR     — tech
    { cx: CX + R_OUT * Math.cos(Math.PI / 6),        cy: CY + R_OUT * 0.5, r: 58, fill: '#4DAF8D' }, // BR     — healthcare
    { cx: 450,                                        cy: CY + R_OUT,       r: 50, fill: '#E8604A' }, // bottom — restaurants
    { cx: CX - R_OUT * Math.cos(Math.PI / 6),        cy: CY + R_OUT * 0.5, r: 42, fill: '#9C5CE8' }, // BL     — retail
    { cx: CX - R_OUT * Math.cos(Math.PI / 6),        cy: CY - R_OUT * 0.5, r: 45, fill: '#E8B84A' }, // TL     — real estate
  ];

  // Inner ring — 3 nodes offset 30° from outer, R=130
  const R_IN = 130;
  const inner: { cx: number; cy: number; r: number }[] = [
    { cx: CX + R_IN * 0.5,  cy: CY - R_IN * 0.866, r: 28 }, // upper-right
    { cx: CX + R_IN,        cy: CY,                 r: 22 }, // right
    { cx: CX - R_IN * 0.5,  cy: CY - R_IN * 0.866, r: 24 }, // upper-left
  ];

  // Edges: outer ring loop + centre spokes + inner spokes
  const edges: [number, number, number, number][] = [
    // outer ring
    ...outer.map((a, i) => [a.cx, a.cy, outer[(i + 1) % outer.length].cx, outer[(i + 1) % outer.length].cy] as [number, number, number, number]),
    // centre → each outer
    ...outer.map(n => [CX, CY, n.cx, n.cy] as [number, number, number, number]),
    // centre → each inner
    ...inner.map(n => [CX, CY, n.cx, n.cy] as [number, number, number, number]),
  ];

  return (
    <div
      style={{
        width:      900,
        height:     900,
        background: '#0C0C0E',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      <svg
        viewBox="0 0 900 900"
        width="900"
        height="900"
        style={{ position: 'absolute', inset: 0 }}
      >
        <defs>
          <radialGradient id="hub-centre-glow" cx="50%" cy="50%" r="35%">
            <stop offset="0%"   stopColor="#4DAF8D" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#4DAF8D" stopOpacity="0" />
          </radialGradient>
          <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        {/* Ambient centre glow */}
        <circle cx={CX} cy={CY} r={320} fill="url(#hub-centre-glow)" />

        {/* Connection lines */}
        {edges.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
        ))}

        {/* Outer node glow halos */}
        {outer.map((n, i) => (
          <circle key={`halo-${i}`} cx={n.cx} cy={n.cy} r={n.r * 2.5}
            fill={n.fill} opacity={0.18} filter="url(#node-glow)" />
        ))}

        {/* Outer nodes */}
        {outer.map((n, i) => (
          <circle key={`outer-${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} opacity={0.88} />
        ))}

        {/* Inner nodes */}
        {inner.map((n, i) => (
          <circle key={`inner-${i}`} cx={n.cx} cy={n.cy} r={n.r}
            fill="rgba(239,239,239,0.25)" />
        ))}

        {/* Centre node */}
        <circle cx={CX} cy={CY} r={20} fill="rgba(239,239,239,0.18)" />
        <circle cx={CX} cy={CY} r={8}  fill="rgba(239,239,239,0.45)" />

        {/* Header — mirrors real hub header */}
        <text x="820" y="55" textAnchor="end"
          fontSize="22" letterSpacing="6" fill="rgba(239,239,239,0.16)"
          fontFamily="sans-serif" fontWeight="600"
          style={{ textTransform: 'uppercase' }}>
          MARKHAM · LIVE
        </text>
        <text x="820" y="82" textAnchor="end"
          fontSize="18" letterSpacing="5" fill="rgba(239,239,239,0.09)"
          fontFamily="sans-serif">
          Circular Constellation
        </text>

        {/* Footer hint — mirrors real hub footer */}
        <text x="450" y="862" textAnchor="middle"
          fontSize="20" letterSpacing="8" fill="rgba(239,239,239,0.08)"
          fontFamily="sans-serif">
          Click an industry to explore
        </text>
      </svg>

      {/* Live dot — mirrors the hub's live indicator */}
      <div style={{ position: 'absolute', top: 28, left: 36, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span className="animate-ping" style={{
          position: 'absolute', width: 10, height: 10,
          borderRadius: '50%', background: '#4DAF8D', opacity: 0.6,
        }} />
        <span style={{
          position: 'relative', width: 10, height: 10,
          borderRadius: '50%', background: '#4DAF8D',
        }} />
      </div>
    </div>
  );
}
