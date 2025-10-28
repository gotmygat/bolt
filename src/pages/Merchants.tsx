import AppLayout from '../components/AppLayout';
import { Store, Plus, Search, MoreVertical } from 'lucide-react';

export default function Merchants() {
  const merchants = [
    {
      name: 'Acme Corporation',
      id: 'MCH-001',
      status: 'active',
      revenue: '$45,230',
      transactions: 1234,
      joined: 'Jan 15, 2024',
    },
    {
      name: 'Tech Solutions Inc',
      id: 'MCH-002',
      status: 'active',
      revenue: '$32,100',
      transactions: 890,
      joined: 'Feb 3, 2024',
    },
    {
      name: 'Global Traders',
      id: 'MCH-003',
      status: 'pending',
      revenue: '$12,450',
      transactions: 234,
      joined: 'Mar 12, 2024',
    },
    {
      name: 'Digital Services Co',
      id: 'MCH-004',
      status: 'active',
      revenue: '$28,900',
      transactions: 567,
      joined: 'Jan 28, 2024',
    },
  ];

  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Merchants</h1>
            <p className="text-gray-600">Manage your merchant accounts</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Add Merchant
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search merchants..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Merchant
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Merchant ID
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Revenue
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Transactions
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Joined
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {merchants.map((merchant) => (
                  <tr key={merchant.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center">
                          <Store className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{merchant.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-mono text-sm text-gray-600">{merchant.id}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          merchant.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {merchant.status.charAt(0).toUpperCase() + merchant.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-gray-900">{merchant.revenue}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-900">{merchant.transactions}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-600 text-sm">{merchant.joined}</span>
                    </td>
                    <td className="py-4 px-6">
                      <button className="text-gray-600 hover:text-gray-900">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
