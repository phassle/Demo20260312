import { useMemo } from 'react';
import { usePayments } from '../hooks/usePayments';

const STATUS_COLOR: Record<string, string> = {
  Completed: '#16a34a',
  Pending: '#d97706',
  Failed: '#dc2626',
};

export function PaymentPage() {
  const { payments, loading, error } = usePayments();

  if (loading) return <p>Loading payments...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  const total = useMemo(
    () => payments.filter((p) => p.status === 'Completed').reduce((sum, p) => sum + p.amount, 0),
    [payments]
  );

  return (
    <div className="page">
      <h1>Payment</h1>
      <p style={{ color: '#6b7280', marginBottom: 16 }}>
        Total collected:{' '}
        <strong style={{ color: '#1f2937' }}>IDR {total.toLocaleString('id-ID')}</strong>
      </p>
      <table className="data-table">
        <thead>
          <tr>
            <th>Order #</th>
            <th>Customer</th>
            <th>Amount (IDR)</th>
            <th>Method</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id}>
              <td>{p.orderId}</td>
              <td>{p.customerName}</td>
              <td>{p.amount.toLocaleString('id-ID')}</td>
              <td>{p.method}</td>
              <td>
                <span style={{ color: STATUS_COLOR[p.status] ?? '#6b7280', fontWeight: 600 }}>
                  {p.status}
                </span>
              </td>
              <td>{new Date(p.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
