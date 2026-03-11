import { NavLink } from 'react-router-dom';

const MENU_NAV = [
  { to: '/', label: 'Dashboard', icon: '▦' },
  { to: '/food-order', label: 'Food Order', icon: '🛒' },
  { to: '/manage-menu', label: 'Manage Menu', icon: '🍽️' },
  { to: '/customer-review', label: 'Customer Review', icon: '⭐' },
];

const OTHERS_NAV = [
  { to: '/settings', label: 'Settings', icon: '⚙️' },
  { to: '/payment', label: 'Payment', icon: '💳' },
  { to: '/accounts', label: 'Accounts', icon: '👤' },
  { to: '/help', label: 'Help', icon: '❓' },
];

function NavSection({ title, items }: { title: string; items: typeof MENU_NAV }) {
  return (
    <>
      <div className="sidebar-section">{title}</div>
      <ul className="sidebar-nav">
        {items.map(({ to, label, icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <span>{icon}</span> {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span>🍔</span> GoodFood
      </div>
      <NavSection title="MENU" items={MENU_NAV} />
      <NavSection title="OTHERS" items={OTHERS_NAV} />
    </aside>
  );
}
