import { useState, useMemo } from 'react';
import { stats, revenueData, salesData, transactions } from './data';
import StatsCard from './components/StatsCard';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DataTable from './components/DataTable';
import type { Theme } from './types';

const NAV = [
  { id: 'dashboard', icon: '⊞', label: 'Dashboard' },
  { id: 'analytics', icon: '◎', label: 'Analytics' },
  { id: 'users', icon: '◉', label: 'Users' },
  { id: 'orders', icon: '⬡', label: 'Orders' },
  { id: 'settings', icon: '⚙', label: 'Settings' },
] as const;

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [page, setPage] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () => transactions.filter(t =>
      t.user.toLowerCase().includes(search.toLowerCase()) ||
      t.email.toLowerCase().includes(search.toLowerCase())
    ),
    [search]
  );

  function exportCSV() {
    const headers = ['Customer', 'Email', 'Amount', 'Status', 'Method', 'Date'];
    const rows = filtered.map(t => [t.user, t.email, `$${t.amount}`, t.status, t.method, t.date]);
    const csv = [headers, ...rows].map(r => r.map(v => `"${v}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transactions.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  const PAGE_LABELS: Record<string, string> = {
    dashboard: 'Dashboard',
    analytics: 'Analytics',
    users: 'Users',
    orders: 'Orders',
    settings: 'Settings',
  };

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
          <button className="icon-btn" onClick={() => setSidebarOpen(o => !o)} aria-label="Toggle sidebar">
            ☰
          </button>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              placeholder="Search users, orders..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="topbar-right">
            <button
              className="icon-btn"
              onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
            >
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
              <h1 className="page-title">{PAGE_LABELS[page]}</h1>
              <p className="page-subtitle">
                {page === 'dashboard' ? "Welcome back, Parth. Here's what's happening today." : `Viewing ${PAGE_LABELS[page]}`}
              </p>
            </div>
            {page === 'dashboard' && (
              <button className="export-btn" onClick={exportCSV}>⬇ Export Report</button>
            )}
          </div>

          {page !== 'dashboard' ? (
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'50vh', gap:'1rem', color:'var(--text2)' }}>
              <div style={{ fontSize:'4rem' }}>{NAV.find(n => n.id === page)?.icon}</div>
              <h2 style={{ fontSize:'1.5rem', color:'var(--text1)', margin:0 }}>{PAGE_LABELS[page]}</h2>
              <p style={{ margin:0, fontSize:'.95rem' }}>This section is a UI demo — content coming soon.</p>
            </div>
          ) : (<>
          {/* KPI Stats */}
          <div className="stats-grid">
            {stats.map(s => <StatsCard key={s.id} stat={s} />)}
          </div>

          {/* Charts */}
          <div className="charts-grid">
            <div className="card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">Revenue Trend</h3>
                  <p className="card-sub">Last 6 months</p>
                </div>
                <span className="card-badge up">↑ 18.4%</span>
              </div>
              <LineChart data={revenueData} color="#6366f1" />
            </div>
            <div className="card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">Daily Orders</h3>
                  <p className="card-sub">This week</p>
                </div>
                <span className="card-badge up">↑ 7.2%</span>
              </div>
              <BarChart data={salesData} color="#10b981" />
            </div>
          </div>

          {/* Transactions table */}
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Recent Transactions</h3>
                <p className="card-sub">{filtered.length} entries</p>
              </div>
            </div>
            <DataTable data={filtered} />
          </div>
          </>)}
        </main>
      </div>
    </div>
  );
}
