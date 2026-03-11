import { useCustomers } from '../hooks/useCustomers';
import { CustomerTable } from '../components/CustomerTable';

export function AccountsPage() {
  const { customers, loading, error } = useCustomers();

  if (loading) return <p>Loading accounts...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="page">
      <h1>Accounts</h1>
      <CustomerTable customers={customers} />
    </div>
  );
}
