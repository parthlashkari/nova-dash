import { useState } from 'react';
import type { Transaction } from '../types';

const PER_PAGE = 6;

type SortCol = keyof Transaction;

interface Props { data: Transaction[] }

export default function DataTable({ data }: Props) {
  const [sort, setSort] = useState<{ col: SortCol; dir: 'asc' | 'desc' }>({ col: 'date', dir: 'desc' });
  const [page, setPage] = useState(0);

  const sorted = [...data].sort((a, b) => {
    const va = a[sort.col]; const vb = b[sort.col];
    const cmp = va < vb ? -1 : va > vb ? 1 : 0;
    return sort.dir === 'asc' ? cmp : -cmp;
  });
  const rows = sorted.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  const pages = Math.ceil(data.length / PER_PAGE);

  function toggleSort(col: SortCol) {
    setSort(s => ({ col, dir: s.col === col && s.dir === 'asc' ? 'desc' : 'asc' }));
    setPage(0);
  }

  function Th({ col, label }: { col: SortCol; label: string }) {
    return (
      <th className="sortable" onClick={() => toggleSort(col)}>
        {label}{' '}
        {sort.col === col ? (sort.dir === 'asc' ? '↑' : '↓') : <span style={{ opacity: .3 }}>↕</span>}
      </th>
    );
  }

  return (
    <>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <Th col="user" label="Customer" />
              <Th col="amount" label="Amount" />
              <Th col="status" label="Status" />
              <Th col="method" label="Method" />
              <Th col="date" label="Date" />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr><td colSpan={5} style={{ textAlign: 'center', padding: '32px', color: 'var(--text2)' }}>No transactions found</td></tr>
            ) : rows.map(r => (
              <tr key={r.id}>
                <td>
                  <div className="user-cell">
                    <div className="user-av">{r.user.charAt(0)}</div>
                    <div>
                      <div className="user-main">{r.user}</div>
                      <div className="user-email">{r.email}</div>
                    </div>
                  </div>
                </td>
                <td><strong>${r.amount.toLocaleString()}</strong></td>
                <td><span className={`badge badge-${r.status}`}>{r.status}</span></td>
                <td style={{ color: 'var(--text2)' }}>{r.method}</td>
                <td style={{ color: 'var(--text2)' }}>{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pages > 1 && (
        <div className="pagination">
          <button className="page-btn" onClick={() => setPage(p => p - 1)} disabled={page === 0}>← Prev</button>
          <span className="page-info">Page {page + 1} of {pages}</span>
          <button className="page-btn" onClick={() => setPage(p => p + 1)} disabled={page === pages - 1}>Next →</button>
        </div>
      )}
    </>
  );
}
