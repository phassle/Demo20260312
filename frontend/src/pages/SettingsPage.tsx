export function SettingsPage() {
  return (
    <div className="page">
      <h1>Settings</h1>
      <div style={{ maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>
            Restaurant Name
          </label>
          <input
            defaultValue="Delicious Burger"
            style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 14 }}
          />
        </div>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>
            Contact Email
          </label>
          <input
            defaultValue="admin@deliciousburger.com"
            style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 14 }}
          />
        </div>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>
            Currency
          </label>
          <select
            defaultValue="IDR"
            style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 14 }}
          >
            <option>IDR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
        <button
          style={{ alignSelf: 'flex-start', padding: '8px 24px', background: '#4F46E5', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
