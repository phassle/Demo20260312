const ratings = [
  { label: 'Hygiene',    pct: 85, color: '#7c3aed' },
  { label: 'Food Taste', pct: 85, color: '#f97316' },
  { label: 'Packaging',  pct: 92, color: '#0d9488' },
];

export function RatingCard() {
  return (
    <div className="card">
      <div className="card-title">Customer Rating</div>
      <div className="card-value" style={{ marginBottom: 16 }}>4.8 ★</div>
      <div style={{ position: 'relative', height: 90, marginBottom: 12 }}>
        {ratings.map((r, i) => (
          <div
            key={r.label}
            style={{
              position: 'absolute',
              left: i * 32,
              top: 0,
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: r.color,
              opacity: 0.85,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 13,
              fontWeight: 700,
              border: '3px solid #fff',
              zIndex: i + 1,
            }}
          >
            {r.pct}%
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
        {ratings.map(r => (
          <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: r.color, display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: '#6b7280', flex: 1 }}>{r.label}</span>
            <span style={{ fontSize: 12, fontWeight: 600 }}>{r.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
