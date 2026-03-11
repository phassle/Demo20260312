const labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const last6Days = [40, 70, 50, 90, 60, 80, 55, 75, 65, 85, 50, 95];
const lastWeek  = [30, 50, 40, 60, 45, 55, 40, 60, 50, 70, 40, 75];

const W = 320, H = 100, BAR_W = 10, GAP = 4;
const max = Math.max(...last6Days, ...lastWeek);
const step = W / labels.length;

export function RevenueCard() {
  return (
    <div className="card" style={{ gridColumn: 'span 2' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <div>
          <div className="card-title">Revenue</div>
          <div className="card-value">IDR 7.852.000</div>
          <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>Sales from 1-12 Dec, 2020</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <button style={{ fontSize: 12, color: '#4F46E5', background: 'none', border: '1px solid #e0e7ff', borderRadius: 6, padding: '4px 10px', cursor: 'pointer' }}>
            View Report
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span className="card-badge badge-green">↑ 2.1%</span>
            <span style={{ fontSize: 11, color: '#9ca3af' }}>vs last week</span>
          </div>
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H + 20}`} width="100%" style={{ display: 'block', marginTop: 12 }}>
        {labels.map((lbl, i) => {
          const x = i * step + step / 2;
          const h1 = (last6Days[i] / max) * H;
          const h2 = (lastWeek[i] / max) * H;
          return (
            <g key={lbl}>
              <rect x={x - BAR_W - GAP / 2} y={H - h1} width={BAR_W} height={h1} fill="#4F46E5" rx={3} />
              <rect x={x + GAP / 2} y={H - h2} width={BAR_W} height={h2} fill="#c7d2fe" rx={3} />
              <text x={x} y={H + 14} textAnchor="middle" fontSize={9} fill="#9ca3af">{lbl}</text>
            </g>
          );
        })}
      </svg>
      <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
        <span style={{ fontSize: 12, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: '#4F46E5', display: 'inline-block' }} /> Last 6 days
        </span>
        <span style={{ fontSize: 12, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: '#c7d2fe', display: 'inline-block' }} /> Last Week
        </span>
      </div>
    </div>
  );
}
