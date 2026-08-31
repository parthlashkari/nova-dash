import StatsCard from '../components/StatsCard';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import { analyticsStats, trafficData, conversionData, trafficSources } from '../data';

export default function AnalyticsPage() {
  return (
    <>
      <div className="stats-grid">
        {analyticsStats.map(s => <StatsCard key={s.id} stat={s} />)}
      </div>

      <div className="charts-grid">
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Monthly Traffic</h3>
              <p className="card-sub">Unique visitors over 6 months</p>
            </div>
            <span className="card-badge up">↑ 22.3%</span>
          </div>
          <LineChart data={trafficData} color="#8b5cf6" />
        </div>
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Daily Conversions</h3>
              <p className="card-sub">This week</p>
            </div>
            <span className="card-badge up">↑ 14.7%</span>
          </div>
          <BarChart data={conversionData} color="#f59e0b" />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">Traffic Sources</h3>
            <p className="card-sub">Where your visitors come from</p>
          </div>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Visits</th>
                <th>Share</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {trafficSources.map(s => (
                <tr key={s.source}>
                  <td><strong style={{ color: 'var(--text1)' }}>{s.source}</strong></td>
                  <td style={{ color: 'var(--text2)' }}>{s.visits.toLocaleString()}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ flex: 1, height: '6px', background: 'var(--border)', borderRadius: '3px', maxWidth: '120px' }}>
                        <div style={{ height: '100%', background: '#6366f1', borderRadius: '3px', width: `${s.pct}%` }} />
                      </div>
                      <span style={{ color: 'var(--text2)', fontSize: '.82rem', minWidth: '32px' }}>{s.pct}%</span>
                    </div>
                  </td>
                  <td>
                    <span className={`card-badge ${s.trend}`} style={{ fontSize: '.75rem', padding: '2px 8px' }}>
                      {s.trend === 'up' ? '↑' : '↓'} {s.change}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
