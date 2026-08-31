import { useState, useMemo, useEffect } from 'react';
import { stats, transactions, users, orders } from './data';
import StatsCard from './components/StatsCard';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DataTable from './components/DataTable';
import AnalyticsPage from './pages/AnalyticsPage';
import UsersPage from './pages/UsersPage';
import OrdersPage from './pages/OrdersPage';
import SettingsPage from './pages/SettingsPage';
import { revenueData, salesData } from './data';
import type { Theme } from './types';

const NAV = [
  { id: 'dashboard', icon: '⊞', label: 'Dashboard' },
  { id: 'analytics', icon: '◎', label: 'Analytics' },
  { id: 'users', icon: '◉', label: 'Users' },
  { id: 'orders', icon: '⬡', label: 'Orders' },
  { id: 'settings', icon: '⚙', label: 'Settings' },
] as const;

const PAGE_META: Record<string, { title: string; sub: string; placeholder: string }> = {
  dashboard: { title: 'Dashboard', sub: "Welcome back, Parth. Here's what's happening today.", placeholder: 'Search transactions...' },
  analytics: { title: 'Analytics', sub: 'Overview of traffic, conversions, and user behaviour.', placeholder: 'Search analytics...' },
  users: { title: 'Users', sub: 'Manage team members and their access levels.', placeholder: 'Search by name or email...' },
  orders: { title: 'Orders', sub: 'Track and manage all customer orders.', placeholder: 'Search by customer or product...' },
  settings: { title: 'Settings', sub: 'Manage your account preferences and notifications.', placeholder: 'Search settings...' },
};

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [page, setPage] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState('');

  // clear search when switching pages
  useEffect(() => { setSearch(''); }, [page]);

  const filteredTransactions = useMemo(
    () => transactions.filter(t =>
      t.user.toLowerCase().includes(search.toLowerCase()) ||
      t.email.toLowerCase().includes(search.toLowerCase())
    ),
    [search]
  );

  const filteredUsers = useMemo(
    () => users.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    ),
    [search]
  );

  const filteredOrders = useMemo(
    () => orders.filter(o =>
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase())
    ),
    [search]
  );

  function exportCSV() {
    const headers = ['Customer', 'Email', 'Amount', 'Status', 'Method', 'Date'];
    const rows = filteredTransactions.map(t => [t.user, t.email, `$${t.amount}`, t.status, t.method, t.date]);
    const csv = [headers, ...rows].map(r => r.map(v => `"${v}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'transactions.csv'; a.click();
    URL.revokeObjectURL(url);
  }

  const meta = PAGE_META[page];

  return (
    <div className={`app ${theme}`}>
      {/* ── Sidebar ── */}
      <aside className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
        <div className="sidebar-brand">
          <span className="brand-icon">⬡</span>
          {sidebarOpen && <span className="brand-name">NovaDash</span>}
        </div>

        <nav className="sidebar-nav">
          {NAV.map(n => (
            <button
              key={n.id}
              className={`nav-btn ${page === n.id ? 'active' : ''}`}
              onClick={() => setPage(n.id)}
              title={!sidebarOpen ? n.label : undefined}
            >
              <span className="nav-ic">{n.icon}</span>
              {sidebarOpen && <span className="nav-label">{n.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          {sidebarOpen ? (
            <div className="user-row">
              <div className="avatar sm">PL</div>
              <div className="user-info">
                <div className="user-name">Parth Lashkari</div>
                <div className="user-role">Lead Engineer</div>
              </div>
            </div>
          ) : (
            <div className="avatar sm" style={{ margin: '0 auto' }}>PL</div>
          )}
        </div>
      </aside>

      {/* ── Content area ── */}
      <div className="content-wrap">
        {/* Topbar */}
        <header className="topbar">
          <button className="icon-btn" onClick={() => setSidebarOpen(o => !o)} aria-label="Toggle sidebar">☰</button>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              placeholder={meta.placeholder}
              value={search}
              onChange={e => setSearch(e.target.value)}
              disabled={page === 'analytics' || page === 'settings'}
            />
          </div>

          <div className="topbar-right">
            <button className="icon-btn" onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')} aria-label="Toggle theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className="icon-btn" aria-label="Notifications">🔔</button>
            <div className="avatar">PL</div>
          </div>
        </header>

        {/* Main page */}
        <main className="page">
          <div className="page-header">
            <div>
              <h1 className="page-title">{meta.title}</h1>
              <p className="page-subtitle">{meta.sub}</p>
            </div>
            {page === 'dashboard' && (
              <button className="export-btn" onClick={exportCSV}>⬇ Export Report</button>
            )}
          </div>

          {page === 'dashboard' && (<>
            <div className="stats-grid">
              {stats.map(s => <StatsCard key={s.id} stat={s} />)}
            </div>
            <div className="charts-grid">
              <div className="card">
                <div className="card-header">
                  <div><h3 className="card-title">Revenue Trend</h3><p className="card-sub">Last 6 months</p></div>
                  <span className="card-badge up">↑ 18.4%</span>
                </div>
                <LineChart data={revenueData} color="#6366f1" />
              </div>
              <div className="card">
                <div className="card-header">
                  <div><h3 className="card-title">Daily Orders</h3><p className="card-sub">This week</p></div>
                  <span className="card-badge up">↑ 7.2%</span>
                </div>
                <BarChart data={salesData} color="#10b981" />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">Recent Transactions</h3>
                  <p className="card-sub">{filteredTransactions.length} entries</p>
                </div>
              </div>
              <DataTable data={filteredTransactions} />
            </div>
          </>)}

          {page === 'analytics' && <AnalyticsPage />}
          {page === 'users' && <UsersPage users={filteredUsers} />}
          {page === 'orders' && <OrdersPage orders={filteredOrders} />}
          {page === 'settings' && <SettingsPage theme={theme} setTheme={setTheme} />}
        </main>
      </div>
    </div>
  );
}
