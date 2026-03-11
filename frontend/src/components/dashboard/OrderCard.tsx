const labels = ['01', '02', '03', '04', '05', '06'];
const last6Days = [20, 45, 30, 60, 40, 75];
const lastWeek  = [15, 30, 20, 50, 35, 55];
const W = 200, H = 70;
const max = Math.max(...last6Days, ...lastWeek);

function pts(data: number[]) {
  return data
    .map((v, i) => `${(i / (data.length - 1)) * W},${H - (v / max) * H}`)
    .join(' ');
}

export function OrderCard() {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <div>
          <div className="card-title">Order</div>
          <div className="card-value">2.568</div>
          <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>Sales from 1-6 Dec, 2020</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <button style={{ fontSize: 12, color: '#4F46E5', background: 'none', border: '1px solid #e0e7ff', borderRadius: 6, padding: '4px 10px', cursor: 'pointer' }}>
            View Report
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span className="card-badge badge-red">↓ 2.1%</span>
            <span style={{ fontSize: 11, color: '#9ca3af' }}>vs last week</span>
          </div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H + 16}`} width="100%" style={{ display: 'block', marginTop: 8 }}>
        <polyline points={pts(last6Days)} fill="none" stroke="#4F46E5" strokeWidth={2} strokeLinejoin="round" />
        <polyline points={pts(lastWeek)} fill="none" stroke="#c7d2fe" strokeWidth={2} strokeLinejoin="round" />
        {labels.map((lbl, i) => (
          <text
            key={lbl}
            x={(i / (labels.length - 1)) * W}
            y={H + 14}
            textAnchor="middle"
            fontSize={9}
            fill="#9ca3af"
          >
            {lbl}
          </text>
        ))}
      </svg>

      <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
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
