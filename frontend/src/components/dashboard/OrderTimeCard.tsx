import { useState } from 'react';

const R = 50;
const CX = 70;
const CY = 70;
const CIRCUMFERENCE = 2 * Math.PI * R;

const segments = [
  { label: 'Afternoon', pct: 40, color: '#312e81', timeRange: '1pm – 4pm', orders: '1.890' },
  { label: 'Evening',   pct: 32, color: '#4F46E5', timeRange: '4pm – 8pm', orders: '1.512' },
  { label: 'Morning',   pct: 28, color: '#a5b4fc', timeRange: '8am – 12pm', orders: '1.323' },
];

export function OrderTimeCard() {
  const [hovered, setHovered] = useState<string | null>(null);

  let rotation = -90;
  const arcs = segments.map((s) => {
    const arc = { ...s, rotation };
    rotation += (s.pct / 100) * 360;
    return arc;
  });

  const hoveredSeg = segments.find(s => s.label === hovered);

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <div>
          <div className="card-title">Order Time</div>
          <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>From 1-6 Dec, 2020</div>
        </div>
        <button style={{ fontSize: 12, color: '#4F46E5', background: 'none', border: '1px solid #e0e7ff', borderRadius: 6, padding: '4px 10px', cursor: 'pointer' }}>
          View Report
        </button>
      </div>

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: 12 }}>
        <svg viewBox="0 0 140 140" width={120} height={120}>
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="#f3f4f6" strokeWidth={18} />
          {arcs.map((s) => (
            <circle
              key={s.label}
              cx={CX} cy={CY} r={R}
              fill="none"
              stroke={s.color}
              strokeWidth={hovered === s.label ? 22 : 18}
              strokeDasharray={`${CIRCUMFERENCE * s.pct / 100} ${CIRCUMFERENCE}`}
              strokeDashoffset={0}
              transform={`rotate(${s.rotation} ${CX} ${CY})`}
              strokeLinecap="round"
              style={{ cursor: 'pointer', transition: 'stroke-width 0.15s' }}
              onMouseEnter={() => setHovered(s.label)}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
          {hovered && (
            <text x={CX} y={CY + 5} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1a1a2e">
              {hoveredSeg?.pct}%
            </text>
          )}
          {!hovered && (
            <text x={CX} y={CY + 5} textAnchor="middle" fontSize={11} fill="#6b7280">Peak</text>
          )}
        </svg>

        {hoveredSeg && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(10px, -50%)',
            background: '#1f2937',
            color: '#fff',
            borderRadius: 8,
            padding: '8px 12px',
            fontSize: 12,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 10,
          }}>
            <div style={{ fontWeight: 600 }}>{hoveredSeg.label}</div>
            <div style={{ color: '#d1d5db', marginTop: 2 }}>{hoveredSeg.timeRange}</div>
            <div style={{ color: '#d1d5db' }}>{hoveredSeg.orders} orders</div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 16 }}>
        {segments.map(s => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontSize: 11, color: '#6b7280' }}>{s.label}</span>
            <span style={{ fontSize: 11, fontWeight: 600 }}>{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
