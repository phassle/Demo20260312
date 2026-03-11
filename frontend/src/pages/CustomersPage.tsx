import { useCustomers } from '../hooks/useCustomers';
import { CustomerTable } from '../components/CustomerTable';

export function CustomersPage() {
  const { customers, loading, error } = useCustomers();

  if (loading) return <p>Loading customers...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="page">
      <h1>Customers</h1>
      <div className="actions">
        {/* TODO: YT-1234 — Add "Export CSV" button here */}
        <button disabled title="YT-1234: Export CSV (not yet implemented)">
          Export CSV
        </button>
      </div>
      <CustomerTable customers={customers} />
    </div>
  );
}
