import type { Order } from '../types';

interface Props {
  orders: Order[];
}

const STATUS_CLASS: Record<string, string> = {
  delivered: 'completed',
  shipped: 'pending',
  processing: 'pending',
  cancelled: 'failed',
};

export default function OrdersPage({ orders }: Props) {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h3 className="card-title">All Orders</h3>
          <p className="card-sub">{orders.length} orders</p>
        </div>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '40px', color: 'var(--text2)' }}>
                  No orders found
                </td>
              </tr>
            ) : orders.map(o => (
              <tr key={o.id}>
                <td style={{ fontFamily: 'monospace', color: '#6366f1', fontWeight: 600, fontSize: '.85rem' }}>{o.id}</td>
                <td>
                  <div className="user-cell">
                    <div className="user-av">{o.customer.charAt(0)}</div>
                    <span className="user-main">{o.customer}</span>
                  </div>
                </td>
                <td style={{ color: 'var(--text1)' }}>{o.product}</td>
                <td style={{ color: 'var(--text2)' }}>{o.qty}</td>
                <td><strong>${o.total.toLocaleString()}</strong></td>
                <td>
                  <span className={`badge badge-${STATUS_CLASS[o.status]}`}>{o.status}</span>
                </td>
                <td style={{ color: 'var(--text2)' }}>{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
