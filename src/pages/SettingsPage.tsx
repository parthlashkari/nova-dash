import { useState } from 'react';
import type { Theme } from '../types';

interface Props {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const NOTIF = [
  { key: 'n1', label: 'New order notifications', sub: 'Get notified when a new order is placed', on: true },
  { key: 'n2', label: 'New user sign-ups', sub: 'Get notified when someone joins the team', on: true },
  { key: 'n3', label: 'Weekly analytics digest', sub: 'Revenue and traffic summary every Monday', on: false },
  { key: 'n4', label: 'Security alerts', sub: 'Unusual login attempts or password changes', on: true },
];

export default function SettingsPage({ theme, setTheme }: Props) {
  const [notifs, setNotifs] = useState(() => Object.fromEntries(NOTIF.map(n => [n.key, n.on])));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '700px' }}>

      {/* Profile */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Profile</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingBottom: '1rem' }}>
          {[
            { label: 'Full Name', value: 'Parth Lashkari' },
            { label: 'Email', value: 'parth@novadash.io' },
            { label: 'Role', value: 'Lead Engineer' },
            { label: 'Company', value: 'NovaDash Inc.' },
          ].map(f => (
            <div key={f.label}>
              <label style={{ display: 'block', fontSize: '.72rem', color: 'var(--text2)', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                {f.label}
              </label>
              <input
                defaultValue={f.value}
                style={{
                  width: '100%', boxSizing: 'border-box', padding: '8px 12px',
                  background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px',
                  color: 'var(--text1)', fontSize: '.9rem', outline: 'none',
                }}
              />
            </div>
          ))}
        </div>
        <button className="export-btn">Save Changes</button>
      </div>

      {/* Appearance */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Appearance</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text1)', fontSize: '.9rem' }}>Dark Mode</div>
            <div style={{ color: 'var(--text2)', fontSize: '.82rem', marginTop: '3px' }}>Switch between light and dark interface</div>
          </div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle dark mode"
            style={{
              width: '48px', height: '26px', borderRadius: '13px', border: 'none', cursor: 'pointer',
              background: theme === 'dark' ? '#6366f1' : 'var(--border)',
              position: 'relative', transition: 'background .2s', flexShrink: 0,
            }}
          >
            <span style={{
              position: 'absolute', top: '3px',
              left: theme === 'dark' ? '25px' : '3px',
              width: '20px', height: '20px', borderRadius: '50%', background: '#fff',
              transition: 'left .2s', display: 'block',
            }} />
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Notifications</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {NOTIF.map(n => (
            <div key={n.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text1)', fontSize: '.9rem' }}>{n.label}</div>
                <div style={{ color: 'var(--text2)', fontSize: '.82rem', marginTop: '2px' }}>{n.sub}</div>
              </div>
              <button
                onClick={() => setNotifs(prev => ({ ...prev, [n.key]: !prev[n.key] }))}
                aria-label={n.label}
                style={{
                  width: '40px', height: '22px', borderRadius: '11px', border: 'none', cursor: 'pointer',
                  background: notifs[n.key] ? '#6366f1' : 'var(--border)',
                  position: 'relative', transition: 'background .2s', flexShrink: 0,
                }}
              >
                <span style={{
                  position: 'absolute', top: '3px',
                  left: notifs[n.key] ? '21px' : '3px',
                  width: '16px', height: '16px', borderRadius: '50%', background: '#fff',
                  transition: 'left .2s', display: 'block',
                }} />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
