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
