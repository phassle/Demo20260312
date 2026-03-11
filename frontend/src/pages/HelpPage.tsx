const FAQ = [
  { q: 'How do I add a new menu item?', a: 'Go to Manage Menu and click "Add Item".' },
  { q: 'How do I export orders?', a: 'Open Food Order and use the Export button.' },
  { q: 'How do I respond to a customer review?', a: 'Open Customer Review, find the review and click "Reply".' },
  { q: 'Where can I see payment history?', a: 'Go to Payment to see all transactions.' },
  { q: 'How do I change my restaurant name?', a: 'Go to Settings and update the Restaurant Name field.' },
];

export function HelpPage() {
  return (
    <div className="page">
      <h1>Help</h1>
      <p style={{ color: '#6b7280', marginBottom: 24 }}>Frequently asked questions</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 640 }}>
        {FAQ.map(({ q, a }) => (
          <div key={q} style={{ background: '#f9fafb', borderRadius: 10, padding: '14px 18px' }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{q}</div>
            <div style={{ color: '#6b7280', fontSize: 14 }}>{a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
