import { useCustomers } from '../hooks/useCustomers';
import { CustomerTable } from '../components/CustomerTable';

async function downloadCsv() {
  const res = await fetch('/api/v2/customers/export');
  if (!res.ok) {
    alert(`Export failed: ${res.status}`);
    return;
  }
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'customers.csv';
  a.click();
  URL.revokeObjectURL(url);
}

export function CustomersPage() {
  const { customers, loading, error } = useCustomers();

  if (loading) return <p>Loading customers...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="page">
      <h1>Customers</h1>
      <div className="actions">
        <button onClick={downloadCsv}>Export CSV</button>
      </div>
      <CustomerTable customers={customers} />
    </div>
  );
}
