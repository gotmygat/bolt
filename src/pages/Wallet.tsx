import AppLayout from '../components/AppLayout';
import { Wallet as WalletIcon, Plus, Send, Download, TrendingUp, TrendingDown } from 'lucide-react';

export default function Wallet() {
  const balances = [
    { currency: 'USD', amount: '12,450.00', change: '+5.2%', trend: 'up', symbol: '$' },
    { currency: 'BTC', amount: '0.5432', change: '+12.4%', trend: 'up', symbol: '₿' },
    { currency: 'ETH', amount: '8.234', change: '-2.1%', trend: 'down', symbol: 'Ξ' },
    { currency: 'EUR', amount: '8,920.00', change: '+3.1%', trend: 'up', symbol: '€' },
  ];

  const transactions = [
    { type: 'receive', amount: '+$500.00', description: 'Payment received', time: '2 hours ago' },
    { type: 'send', amount: '-$150.00', description: 'Payment sent', time: '5 hours ago' },
    { type: 'receive', amount: '+$1,200.00', description: 'Invoice payment', time: '1 day ago' },
    { type: 'send', amount: '-$75.00', description: 'Withdrawal', time: '2 days ago' },
  ];

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Wallet</h1>
          <p className="text-gray-600">Manage your funds and view transaction history</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-blue-100 mb-2">Total Balance</p>
                  <h2 className="text-4xl font-bold">$21,370.00</h2>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <WalletIcon className="w-8 h-8" />
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Funds
                </button>
                <button className="flex-1 bg-white/20 backdrop-blur-sm py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send
                </button>
                <button className="flex-1 bg-white/20 backdrop-blur-sm py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Withdraw
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {transactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        transaction.type === 'receive' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transaction.type === 'receive' ? (
                          <Download className="w-5 h-5 text-green-600" />
                        ) : (
                          <Send className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{transaction.description}</div>
                        <div className="text-sm text-gray-600">{transaction.time}</div>
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      transaction.type === 'receive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Currency Balances</h2>
              <div className="space-y-4">
                {balances.map((balance) => (
                  <div key={balance.currency} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">{balance.currency}</span>
                      <span className={`text-sm flex items-center ${
                        balance.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {balance.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 mr-1" />
                        )}
                        {balance.change}
                      </span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      {balance.symbol}{balance.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
