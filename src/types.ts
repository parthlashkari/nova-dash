export interface Stat {
  id: string;
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  color: string;
  bg: string;
  icon: string;
}

export interface DataPoint {
  label: string;
  value: number;
}

export type TxStatus = 'completed' | 'pending' | 'failed';

export interface Transaction {
  id: string;
  user: string;
  email: string;
  amount: number;
  status: TxStatus;
  method: string;
  date: string;
}

export type Theme = 'light' | 'dark';

export type UserRole = 'Admin' | 'Editor' | 'Viewer';
export type UserStatus = 'active' | 'inactive';

export interface AppUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joined: string;
  lastActive: string;
}

export type OrderStatus = 'delivered' | 'shipped' | 'processing' | 'cancelled';

export interface Order {
  id: string;
  customer: string;
  product: string;
  qty: number;
  total: number;
  status: OrderStatus;
  date: string;
}

export interface TrafficSource {
  source: string;
  visits: number;
  pct: number;
  change: number;
  trend: 'up' | 'down';
}
