import type { Customer } from '../types/customer';

interface Props {
  customers: Customer[];
}

export function CustomerTable({ customers }: Props) {
  return (
    <table className="customer-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Org. Number</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.organizationNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
