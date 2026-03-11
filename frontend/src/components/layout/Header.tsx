interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-title">{title}</div>
      <div className="header-search">
        <input type="text" placeholder="Search…" />
      </div>
      <div className="header-actions">
        <button className="header-bell" aria-label="Notifications">🔔</button>
        <div className="header-avatar">🍔</div>
        <span className="header-username">Delicious Burger</span>
      </div>
    </header>
  );
}
