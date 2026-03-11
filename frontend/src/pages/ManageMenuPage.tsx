import { useMemo } from 'react';
import { useMenuItems } from '../hooks/useMenuItems';

export function ManageMenuPage() {
  const { items, loading, error } = useMenuItems();

  const categories = useMemo(() => [...new Set(items.map((i) => i.category))], [items]);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="page">
      <h1>Manage Menu</h1>
      {categories.map((cat) => (
        <div key={cat} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#4F46E5', marginBottom: 12 }}>{cat}</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Price (IDR)</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              {items
                .filter((i) => i.category === cat)
                .map((item) => (
                  <tr key={item.id}>
                    <td style={{ fontSize: 20 }}>{item.emoji}</td>
                    <td>{item.name}</td>
                    <td>{item.price.toLocaleString('id-ID')}</td>
                    <td style={{ color: item.isAvailable ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
                      {item.isAvailable ? 'Yes' : 'No'}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
