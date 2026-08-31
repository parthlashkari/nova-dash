import type { Stat, DataPoint, Transaction, AppUser, Order, TrafficSource } from './types';

export const stats: Stat[] = [
  { id: '1', label: 'Total Revenue', value: '$2,418,300', change: 12.5, trend: 'up', color: '#6366f1', bg: 'rgba(99,102,241,0.1)', icon: '💰' },
  { id: '2', label: 'Active Users', value: '14,832', change: 8.3, trend: 'up', color: '#10b981', bg: 'rgba(16,185,129,0.1)', icon: '👥' },
  { id: '3', label: 'Orders Today', value: '247', change: 23.1, trend: 'up', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', icon: '📦' },
  { id: '4', label: 'Conversion Rate', value: '3.28%', change: 0.4, trend: 'down', color: '#ef4444', bg: 'rgba(239,68,68,0.1)', icon: '📉' },
];

export const analyticsStats: Stat[] = [
  { id: 'a1', label: 'Page Views', value: '1.24M', change: 22.3, trend: 'up', color: '#6366f1', bg: 'rgba(99,102,241,0.1)', icon: '👁' },
  { id: 'a2', label: 'Unique Visitors', value: '284,910', change: 14.7, trend: 'up', color: '#10b981', bg: 'rgba(16,185,129,0.1)', icon: '🧑' },
  { id: 'a3', label: 'Bounce Rate', value: '34.2%', change: 3.1, trend: 'down', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', icon: '↩' },
  { id: 'a4', label: 'Avg Session', value: '4m 12s', change: 8.6, trend: 'up', color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', icon: '⏱' },
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

export const trafficData: DataPoint[] = [
  { label: 'Mar', value: 82000 },
  { label: 'Apr', value: 94000 },
  { label: 'May', value: 101000 },
  { label: 'Jun', value: 118000 },
  { label: 'Jul', value: 124000 },
  { label: 'Aug', value: 138000 },
];

export const conversionData: DataPoint[] = [
  { label: 'Mon', value: 124 },
  { label: 'Tue', value: 189 },
  { label: 'Wed', value: 143 },
  { label: 'Thu', value: 221 },
  { label: 'Fri', value: 198 },
  { label: 'Sat', value: 87 },
  { label: 'Sun', value: 63 },
];

export const trafficSources: TrafficSource[] = [
  { source: 'Organic Search', visits: 512400, pct: 41, change: 12.1, trend: 'up' },
  { source: 'Direct', visits: 298100, pct: 24, change: 3.2, trend: 'up' },
  { source: 'Social Media', visits: 187200, pct: 15, change: 28.7, trend: 'up' },
  { source: 'Email Campaigns', visits: 142800, pct: 12, change: 5.4, trend: 'down' },
  { source: 'Paid Ads', visits: 98200, pct: 8, change: 18.3, trend: 'up' },
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

export const users: AppUser[] = [
  { id: 'u1', name: 'Parth Lashkari', email: 'parth@novadash.io', role: 'Admin', status: 'active', joined: 'Jan 12, 2024', lastActive: 'Just now' },
  { id: 'u2', name: 'Aarav Shah', email: 'aarav@novadash.io', role: 'Editor', status: 'active', joined: 'Feb 3, 2024', lastActive: '2h ago' },
  { id: 'u3', name: 'Priya Mehra', email: 'priya@techcorp.io', role: 'Viewer', status: 'active', joined: 'Mar 18, 2024', lastActive: '1d ago' },
  { id: 'u4', name: 'Rohit Kapoor', email: 'rohit@startup.dev', role: 'Editor', status: 'inactive', joined: 'Apr 7, 2024', lastActive: '2w ago' },
  { id: 'u5', name: 'Sneha Patel', email: 'sneha@gmail.com', role: 'Viewer', status: 'active', joined: 'May 22, 2024', lastActive: '3h ago' },
  { id: 'u6', name: 'Vikram Nair', email: 'vikram@enterprise.com', role: 'Admin', status: 'active', joined: 'Jun 1, 2024', lastActive: '5m ago' },
  { id: 'u7', name: 'Ananya Singh', email: 'ananya@agency.in', role: 'Editor', status: 'inactive', joined: 'Jun 14, 2024', lastActive: '1mo ago' },
  { id: 'u8', name: 'Dev Choudhary', email: 'dev@saas.co', role: 'Viewer', status: 'active', joined: 'Jul 9, 2024', lastActive: '6h ago' },
];

export const orders: Order[] = [
  { id: '#ORD-1201', customer: 'Aarav Shah', product: 'Pro Plan — Annual', qty: 1, total: 4200, status: 'delivered', date: 'Aug 31, 2026' },
  { id: '#ORD-1200', customer: 'Priya Mehra', product: 'Enterprise Suite', qty: 3, total: 8900, status: 'shipped', date: 'Aug 31, 2026' },
  { id: '#ORD-1199', customer: 'Rohit Kapoor', product: 'Starter Pack', qty: 1, total: 1500, status: 'processing', date: 'Aug 30, 2026' },
  { id: '#ORD-1198', customer: 'Sneha Patel', product: 'Pro Plan — Monthly', qty: 2, total: 2700, status: 'delivered', date: 'Aug 30, 2026' },
  { id: '#ORD-1197', customer: 'Vikram Nair', product: 'Enterprise Suite', qty: 5, total: 12400, status: 'delivered', date: 'Aug 29, 2026' },
  { id: '#ORD-1196', customer: 'Ananya Singh', product: 'Starter Pack', qty: 1, total: 650, status: 'cancelled', date: 'Aug 29, 2026' },
  { id: '#ORD-1195', customer: 'Dev Choudhary', product: 'Pro Plan — Annual', qty: 2, total: 5500, status: 'delivered', date: 'Aug 28, 2026' },
  { id: '#ORD-1194', customer: 'Meera Iyer', product: 'Pro Plan — Monthly', qty: 1, total: 3300, status: 'processing', date: 'Aug 28, 2026' },
  { id: '#ORD-1193', customer: 'Arjun Verma', product: 'Starter Pack', qty: 1, total: 900, status: 'delivered', date: 'Aug 27, 2026' },
  { id: '#ORD-1192', customer: 'Kavita Reddy', product: 'Enterprise Suite', qty: 4, total: 18200, status: 'shipped', date: 'Aug 27, 2026' },
  { id: '#ORD-1191', customer: 'Sanjay Gupta', product: 'Starter Pack', qty: 2, total: 760, status: 'cancelled', date: 'Aug 26, 2026' },
  { id: '#ORD-1190', customer: 'Ishaan Bhatt', product: 'Pro Plan — Annual', qty: 1, total: 6800, status: 'delivered', date: 'Aug 26, 2026' },
];
