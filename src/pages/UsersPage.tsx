import type { AppUser } from '../types';

interface Props {
  users: AppUser[];
}

const ROLE_COLOR: Record<string, string> = {
  Admin: '#6366f1',
  Editor: '#10b981',
  Viewer: '#f59e0b',
};

export default function UsersPage({ users }: Props) {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h3 className="card-title">Team Members</h3>
          <p className="card-sub">{users.length} users</p>
        </div>
        <button className="export-btn" style={{ fontSize: '.8rem', padding: '6px 16px' }}>+ Invite User</button>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Last Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: 'var(--text2)' }}>
                  No users found
                </td>
              </tr>
            ) : users.map(u => (
              <tr key={u.id}>
                <td>
                  <div className="user-cell">
                    <div className="user-av">{u.name.charAt(0)}</div>
                    <div>
                      <div className="user-main">{u.name}</div>
                      <div className="user-email">{u.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge" style={{
                    background: `${ROLE_COLOR[u.role]}22`,
                    color: ROLE_COLOR[u.role],
                    border: `1px solid ${ROLE_COLOR[u.role]}55`,
                  }}>
                    {u.role}
                  </span>
                </td>
                <td>
                  <span className={`badge badge-${u.status === 'active' ? 'completed' : 'failed'}`}>
                    {u.status}
                  </span>
                </td>
                <td style={{ color: 'var(--text2)' }}>{u.joined}</td>
                <td style={{ color: 'var(--text2)' }}>{u.lastActive}</td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button className="page-btn" style={{ fontSize: '.75rem', padding: '3px 12px' }}>Edit</button>
                    <button className="page-btn" style={{ fontSize: '.75rem', padding: '3px 12px', color: '#ef4444', borderColor: '#ef444466' }}>
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
