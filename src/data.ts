import type { Stat, DataPoint, Transaction } from './types';

export const stats: Stat[] = [
  { id: '1', label: 'Total Revenue', value: '$2,418,300', change: 12.5, trend: 'up', color: '#6366f1', bg: 'rgba(99,102,241,0.1)', icon: '💰' },
  { id: '2', label: 'Active Users', value: '14,832', change: 8.3, trend: 'up', color: '#10b981', bg: 'rgba(16,185,129,0.1)', icon: '👥' },
  { id: '3', label: 'Orders Today', value: '247', change: 23.1, trend: 'up', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', icon: '📦' },
  { id: '4', label: 'Conversion Rate', value: '3.28%', change: 0.4, trend: 'down', color: '#ef4444', bg: 'rgba(239,68,68,0.1)', icon: '📉' },
];

export const revenueData: DataPoint[] = [
  { label: 'Mar', value: 145000 },
  { label: 'Apr', value: 162000 },
  { label: 'May', value: 158000 },
  { label: 'Jun', value: 198000 },
  { label: 'Jul', value: 203000 },
  { label: 'Aug', value: 241000 },
];

export const salesData: DataPoint[] = [
  { label: 'Mon', value: 32 },
  { label: 'Tue', value: 47 },
  { label: 'Wed', value: 38 },
  { label: 'Thu', value: 61 },
  { label: 'Fri', value: 55 },
  { label: 'Sat', value: 29 },
  { label: 'Sun', value: 18 },
];

export const transactions: Transaction[] = [
  { id: 't1', user: 'Aarav Shah', email: 'aarav@example.com', amount: 4200, status: 'completed', method: 'Visa •• 4242', date: 'Aug 31, 2026' },
  { id: 't2', user: 'Priya Mehra', email: 'priya@techcorp.io', amount: 8900, status: 'completed', method: 'PayPal', date: 'Aug 31, 2026' },
  { id: 't3', user: 'Rohit Kapoor', email: 'rohit@startup.dev', amount: 1500, status: 'pending', method: 'Stripe', date: 'Aug 30, 2026' },
  { id: 't4', user: 'Sneha Patel', email: 'sneha@gmail.com', amount: 2700, status: 'completed', method: 'Mastercard •• 9900', date: 'Aug 30, 2026' },
  { id: 't5', user: 'Vikram Nair', email: 'vikram@enterprise.com', amount: 12400, status: 'completed', method: 'Bank Transfer', date: 'Aug 29, 2026' },
  { id: 't6', user: 'Ananya Singh', email: 'ananya@agency.in', amount: 650, status: 'failed', method: 'Visa •• 1234', date: 'Aug 29, 2026' },
  { id: 't7', user: 'Dev Choudhary', email: 'dev@saas.co', amount: 5500, status: 'completed', method: 'Stripe', date: 'Aug 28, 2026' },
  { id: 't8', user: 'Meera Iyer', email: 'meera@consulting.net', amount: 3300, status: 'pending', method: 'PayPal', date: 'Aug 28, 2026' },
  { id: 't9', user: 'Arjun Verma', email: 'arjun@freelance.dev', amount: 900, status: 'completed', method: 'Visa •• 5566', date: 'Aug 27, 2026' },
  { id: 't10', user: 'Kavita Reddy', email: 'kavita@fintech.io', amount: 18200, status: 'completed', method: 'Bank Transfer', date: 'Aug 27, 2026' },
  { id: 't11', user: 'Sanjay Gupta', email: 'sanjay@retail.com', amount: 760, status: 'failed', method: 'Mastercard •• 3344', date: 'Aug 26, 2026' },
  { id: 't12', user: 'Ishaan Bhatt', email: 'ishaan@cloudco.io', amount: 6800, status: 'completed', method: 'Stripe', date: 'Aug 26, 2026' },
];
