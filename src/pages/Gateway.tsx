import AppLayout from '../components/AppLayout';
import { Copy, Key, Code, CheckCircle } from 'lucide-react';

export default function Gateway() {
  return (
    <AppLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Gateway</h1>
          <p className="text-gray-600">Integrate payments into your application</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Key className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">API Keys</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Public Key
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value="pk_live_51H..."
                    readOnly
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
                  />
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secret Key
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="password"
                    value="sk_live_51H..."
                    readOnly
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
                  />
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Generate New Keys
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Gateway Status</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">API Status</span>
                <span className="text-sm font-semibold text-green-600">Operational</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Response Time</span>
                <span className="text-sm font-semibold text-gray-900">45ms</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Uptime</span>
                <span className="text-sm font-semibold text-gray-900">99.99%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Requests Today</span>
                <span className="text-sm font-semibold text-gray-900">12,456</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Quick Start</h2>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-gray-100 font-mono">
              <code>{`// Initialize CloudChain Pay
import CloudChainPay from 'cloudchain-pay';

const cloudchain = new CloudChainPay('pk_live_51H...');

// Create a payment
const payment = await cloudchain.payments.create({
  amount: 1999,
  currency: 'usd',
  description: 'Example payment'
});

// Handle the payment
console.log(payment);`}</code>
            </pre>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
