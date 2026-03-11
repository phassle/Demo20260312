const foods = [
  { name: 'Cheeseburger',   orders: 1240, pct: 92, emoji: '🍔' },
  { name: 'Pepperoni Pizza', orders: 980,  pct: 78, emoji: '🍕' },
  { name: 'Caesar Salad',    orders: 760,  pct: 61, emoji: '🥗' },
  { name: 'Chicken Wings',   orders: 640,  pct: 52, emoji: '🍗' },
  { name: 'Veggie Wrap',     orders: 420,  pct: 34, emoji: '🌯' },
];

export function MostOrderedFood() {
  return (
    <div className="card">
      <div className="card-title" style={{ marginBottom: 16 }}>Most Ordered Food</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {foods.map((f) => (
          <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22 }}>{f.emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{f.name}</span>
                <span style={{ fontSize: 12, color: '#9ca3af' }}>{f.orders.toLocaleString()} orders</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: '#f3f4f6', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${f.pct}%`, background: '#4F46E5', borderRadius: 3 }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
