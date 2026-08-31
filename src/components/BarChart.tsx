import { useState } from 'react';
import type { DataPoint } from '../types';

const W = 380, H = 200, PX = 32, PY = 24;

interface Props { data: DataPoint[]; color: string }

export default function BarChart({ data, color }: Props) {
  const [hov, setHov] = useState<number | null>(null);

  const max = Math.max(...data.map(d => d.value));
  const innerW = W - PX * 2, innerH = H - PY * 2;
  const barW = (innerW / data.length) * 0.55;
  const step = innerW / data.length;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg">
      {[0.25, 0.5, 0.75, 1].map((t, i) => (
        <line key={i} x1={PX} x2={W - PX} y1={PY + t * innerH} y2={PY + t * innerH} className="grid-line" />
      ))}
      {data.map((d, i) => {
        const bh = (d.value / max) * innerH;
        const bx = PX + i * step + (step - barW) / 2;
        const by = PY + innerH - bh;
        const isHov = hov === i;
        return (
          <g key={i} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)} style={{ cursor: 'pointer' }}>
            <rect
              x={bx} y={by} width={barW} height={bh} rx="5"
              fill={isHov ? color : `${color}80`}
              style={{ transition: 'fill .15s' }}
            />
            <text x={bx + barW / 2} y={H - 4} className="axis-label" textAnchor="middle">{d.label}</text>
            {isHov && (
              <g>
                <rect x={bx + barW / 2 - 18} y={by - 30} width="36" height="22" rx="5" fill={color} />
                <text x={bx + barW / 2} y={by - 14} fill="#fff" fontSize="11" textAnchor="middle" fontWeight="700">
                  {d.value}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}
