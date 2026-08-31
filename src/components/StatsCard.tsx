import type { Stat } from '../types';

interface Props { stat: Stat }

export default function StatsCard({ stat }: Props) {
  const isUp = stat.trend === 'up';
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className="stat-icon" style={{ background: stat.bg }}>
          {stat.icon}
        </div>
        <span className={`stat-badge ${isUp ? 'up' : 'down'}`}>
          {isUp ? '↑' : '↓'} {Math.abs(stat.change)}%
        </span>
      </div>
      <div className="stat-value" style={{ color: stat.color }}>{stat.value}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}
