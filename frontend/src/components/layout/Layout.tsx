import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export function Layout({ children, title = 'Dashboard' }: LayoutProps) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-area">
        <Header title={title} />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
