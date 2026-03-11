import { useCustomerReviews } from '../hooks/useCustomerReviews';

function Stars({ n }: { n: number }) {
  return (
    <span style={{ color: '#f59e0b' }}>
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </span>
  );
}

export function CustomerReviewPage() {
  const { reviews, loading, error } = useCustomerReviews();

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="page">
      <h1>Customer Review</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Food Item</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((r) => (
            <tr key={r.id}>
              <td>{r.customerName}</td>
              <td>{r.foodItem}</td>
              <td><Stars n={r.rating} /></td>
              <td>{r.comment}</td>
              <td>{new Date(r.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
