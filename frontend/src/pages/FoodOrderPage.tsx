import { useFoodOrders } from '../hooks/useFoodOrders';

const STATUS_COLOR: Record<string, string> = {
  Delivered: '#16a34a',
  Processing: '#d97706',
  Pending: '#6b7280',
  Cancelled: '#dc2626',
};

export function FoodOrderPage() {
  const { orders, loading, error } = useFoodOrders();

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="page">
      <h1>Food Order</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total (IDR)</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customerName}</td>
              <td>{o.items.join(', ')}</td>
              <td>{o.total.toLocaleString('id-ID')}</td>
              <td>
                <span style={{ color: STATUS_COLOR[o.status] ?? '#6b7280', fontWeight: 600 }}>
                  {o.status}
                </span>
              </td>
              <td>{new Date(o.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
