import AppLayout from '../components/AppLayout';
import { TrendingUp, DollarSign, Users, CreditCard, ArrowUp } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign,
      iconBg: 'bg-gradient-to-br from-green-100 to-teal-100',
      iconColor: 'text-green-700',
    },
    {
      title: 'Transactions',
      value: '2,345',
      change: '+15.3%',
      trend: 'up',
      icon: CreditCard,
      iconBg: 'bg-gradient-to-br from-primary-100 to-primary-200',
      iconColor: 'text-primary-700',
    },
    {
      title: 'Active Customers',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      iconBg: 'bg-gradient-to-br from-teal-100 to-teal-200',
      iconColor: 'text-teal-700',
    },
    {
      title: 'Success Rate',
      value: '98.5%',
      change: '+2.4%',
      trend: 'up',
      icon: TrendingUp,
      iconBg: 'bg-gradient-to-br from-orange-100 to-orange-200',
      iconColor: 'text-orange-700',
    },
  ];

  const recentTransactions = [
    { id: 'TXN-001', customer: 'John Doe', amount: '$250.00', status: 'completed', time: '2 min ago' },
    { id: 'TXN-002', customer: 'Jane Smith', amount: '$1,200.00', status: 'completed', time: '15 min ago' },
    { id: 'TXN-003', customer: 'Bob Johnson', amount: '$450.00', status: 'pending', time: '1 hour ago' },
    { id: 'TXN-004', customer: 'Alice Williams', amount: '$890.00', status: 'completed', time: '2 hours ago' },
    { id: 'TXN-005', customer: 'Charlie Brown', amount: '$125.00', status: 'failed', time: '3 hours ago' },
  ];

  const paymentMethods = [
    { name: 'Bitcoin', percentage: 45, color: 'bg-gradient-to-r from-primary-900 to-primary-600' },
    { name: 'Ethereum', percentage: 30, color: 'bg-gradient-to-r from-teal-600 to-teal-400' },
    { name: 'USDT', percentage: 15, color: 'bg-gradient-to-r from-green-600 to-green-400' },
    { name: 'Others', percentage: 10, color: 'bg-gradient-to-r from-gray-600 to-gray-400' },
  ];

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your crypto payment overview.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.title} className="bg-white rounded-xl border border-primary-100 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.iconBg} p-3 rounded-lg shadow-sm`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div className="flex items-center text-sm font-medium text-green-600">
                    <ArrowUp className="w-4 h-4 mr-1" />
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl border border-primary-100 p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Transactions</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-mono text-sm text-gray-600">{transaction.id}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-900">{transaction.customer}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-semibold text-gray-900">{transaction.amount}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            transaction.status === 'completed'
                              ? 'bg-green-100 text-green-700'
                              : transaction.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-gray-600">{transaction.time}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-primary-100 p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment Methods</h2>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{method.name}</span>
                    <span className="text-sm font-semibold text-gray-900">{method.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`${method.color} h-2 rounded-full transition-all duration-500 shadow-inner`}
                      style={{ width: `${method.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-br from-primary-50 to-teal-50 rounded-lg">
              <h3 className="font-semibold text-primary-900 mb-2">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm text-primary-700 hover:text-primary-900 py-2 transition-colors">
                  Create Invoice
                </button>
                <button className="w-full text-left text-sm text-primary-700 hover:text-primary-900 py-2 transition-colors">
                  View Reports
                </button>
                <button className="w-full text-left text-sm text-primary-700 hover:text-primary-900 py-2 transition-colors">
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
