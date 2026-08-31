import { useState } from 'react';
import type { DataPoint } from '../types';

const W = 580, H = 200, PX = 48, PY = 28;

/** Smooth cubic bezier path through points */
function smoothPath(pts: { x: number; y: number }[]): string {
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const cpx = (pts[i - 1].x + pts[i].x) / 2;
    d += ` C${cpx},${pts[i - 1].y} ${cpx},${pts[i].y} ${pts[i].x},${pts[i].y}`;
  }
  return d;
}

function formatK(v: number) {
  return v >= 1000 ? `$${(v / 1000).toFixed(0)}k` : `$${v}`;
}

interface Props { data: DataPoint[]; color: string }

export default function LineChart({ data, color }: Props) {
  const [hov, setHov] = useState<number | null>(null);

  const max = Math.max(...data.map(d => d.value));
  const min = Math.min(...data.map(d => d.value));
  const range = max - min || 1;
  const innerW = W - PX * 2, innerH = H - PY * 2;

  const pts = data.map((d, i) => ({
    x: PX + (i / (data.length - 1)) * innerW,
    y: PY + (1 - (d.value - min) / range) * innerH,
  }));

  const linePath = smoothPath(pts);
  const areaPath = `${linePath} L${pts.at(-1)!.x},${H - PY} L${pts[0].x},${H - PY} Z`;

  const yTicks = [0, 0.5, 1].map(t => ({
    y: PY + (1 - t) * innerH,
    label: formatK(min + t * range),
  }));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg">
      {/* Y-axis ticks */}
      {yTicks.map((t, i) => (
        <g key={i}>
          <line x1={PX} x2={W - PX} y1={t.y} y2={t.y} className="grid-line" />
          <text x={PX - 6} y={t.y + 4} className="axis-label" textAnchor="end">{t.label}</text>
        </g>
      ))}
      {/* X-axis labels */}
      {data.map((d, i) => (
        <text key={i} x={pts[i].x} y={H - 4} className="axis-label" textAnchor="middle">{d.label}</text>
      ))}
      {/* Area fill */}
      <path d={areaPath} fill={`${color}18`} />
      {/* Line */}
      <path d={linePath} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Dots + tooltips */}
      {pts.map((p, i) => (
        <g key={i} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)} style={{ cursor: 'pointer' }}>
          <circle cx={p.x} cy={p.y} r="12" fill="transparent" />
          <circle cx={p.x} cy={p.y} r={hov === i ? 6 : 4} fill={color} stroke="#fff" strokeWidth="2" style={{ transition: 'r .15s' }} />
          {hov === i && (
            <g>
              <rect x={p.x - 32} y={p.y - 36} width="64" height="24" rx="6" fill={color} />
              <text x={p.x} y={p.y - 20} fill="#fff" fontSize="11" textAnchor="middle" fontWeight="700">
                {formatK(data[i].value)}
              </text>
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}
