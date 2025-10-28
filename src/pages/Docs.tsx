import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Book, Code, Zap, Shield, Globe, Terminal, Layers, ArrowRight, Cpu, Wallet } from 'lucide-react';

export default function Docs() {
  const sections = [
    {
      title: 'Getting Started',
      icon: Zap,
      color: 'from-primary-900 to-primary-600',
      items: [
        { name: 'Introduction', href: '#intro', desc: 'Learn about CloudChain Pay' },
        { name: 'Quick Start', href: '#quickstart', desc: 'Get started in minutes' },
        { name: 'Installation', href: '#installation', desc: 'Install and configure' },
        { name: 'Authentication', href: '#auth', desc: 'API key management' },
      ],
    },
    {
      title: 'Integration Guides',
      icon: Code,
      color: 'from-teal-600 to-teal-400',
      items: [
        { name: 'WooCommerce', href: '#woocommerce', desc: 'WordPress plugin' },
        { name: 'Shopify', href: '#shopify', desc: 'Shopify app' },
        { name: 'Custom Integration', href: '#custom', desc: 'Build your own' },
        { name: 'Webhooks', href: '#webhooks', desc: 'Event notifications' },
      ],
    },
    {
      title: 'API Reference',
      icon: Terminal,
      color: 'from-primary-700 to-teal-500',
      items: [
        { name: 'Payments', href: '#payments', desc: 'Create and manage payments' },
        { name: 'Customers', href: '#customers', desc: 'Customer management' },
        { name: 'Transactions', href: '#transactions', desc: 'Transaction history' },
        { name: 'Wallets', href: '#wallets', desc: 'Wallet operations' },
      ],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Bank-level encryption and security practices',
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Accept payments from anywhere in the world',
    },
    {
      icon: Cpu,
      title: 'Custom Nodes',
      description: 'Use your own blockchain nodes',
    },
    {
      icon: Wallet,
      title: 'Direct Payments',
      description: 'Funds go directly to your wallet',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-16">
        <div className="bg-gradient-to-br from-primary-900 to-teal-700 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <Book className="w-10 h-10" />
              <h1 className="text-4xl font-bold">Documentation</h1>
            </div>
            <p className="text-xl text-primary-100 max-w-3xl">
              Everything you need to integrate CloudChain Pay into your application
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-primary-100 p-6 sticky top-24 shadow-lg">
                <h2 className="font-semibold text-gray-900 mb-4">Navigation</h2>
                <nav className="space-y-6">
                  {sections.map((section) => (
                    <div key={section.title}>
                      <div className="flex items-center space-x-2 text-gray-900 font-medium mb-2">
                        <section.icon className="w-4 h-4" />
                        <span>{section.title}</span>
                      </div>
                      <ul className="space-y-2 ml-6">
                        {section.items.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-sm text-gray-600 hover:text-primary-900 transition-colors block"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    to="/docs/api"
                    className="text-sm font-medium text-primary-900 hover:text-teal-600 transition-colors flex items-center"
                  >
                    Full API Reference
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div className="bg-white rounded-xl border border-primary-100 p-8 shadow-lg" id="intro">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  CloudChain Pay provides a modern, secure, and decentralized payment infrastructure for
                  accepting cryptocurrency payments. Our system is designed to be simple yet powerful,
                  allowing you to integrate payments in minutes while maintaining full control over your funds.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.title} className="p-4 bg-gradient-to-br from-primary-50 to-teal-50 rounded-lg">
                        <Icon className="w-8 h-8 text-primary-900 mb-2" />
                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-primary-100 p-8 shadow-lg" id="quickstart">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Get started with CloudChain Pay in just a few steps:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                  <li>Create your account at CloudChain Pay</li>
                  <li>Generate your API keys from the dashboard</li>
                  <li>Install the appropriate plugin or use our API</li>
                  <li>Configure your cryptocurrency wallets</li>
                  <li>Start accepting payments</li>
                </ol>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm text-gray-100 font-mono">
                    <code>{`// Initialize CloudChain Pay
const cloudchain = new CloudChainPay({
  apiKey: 'your_api_key_here',
  network: 'mainnet'
});

// Create a payment
const payment = await cloudchain.payments.create({
  amount: '0.001',
  currency: 'BTC',
  description: 'Product purchase',
  callbackUrl: 'https://yoursite.com/callback'
});

console.log(payment.address); // Bitcoin address
console.log(payment.qrCode); // QR code URL`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-primary-100 p-8 shadow-lg" id="payments">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payments API</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Payments API allows you to create, retrieve, and manage payment transactions.
                </p>
                <div className="space-y-4">
                  <div className="border border-primary-200 rounded-lg p-4 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">Create a Payment</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-mono rounded-full">
                        POST
                      </span>
                    </div>
                    <code className="text-sm text-primary-900 font-mono">/v1/payments</code>
                    <p className="text-sm text-gray-600 mt-2">
                      Create a new payment request with specified amount and cryptocurrency
                    </p>
                  </div>
                  <div className="border border-primary-200 rounded-lg p-4 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">Retrieve a Payment</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded-full">
                        GET
                      </span>
                    </div>
                    <code className="text-sm text-primary-900 font-mono">/v1/payments/:id</code>
                    <p className="text-sm text-gray-600 mt-2">
                      Get details of a specific payment by ID
                    </p>
                  </div>
                  <div className="border border-primary-200 rounded-lg p-4 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">List all Payments</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded-full">
                        GET
                      </span>
                    </div>
                    <code className="text-sm text-primary-900 font-mono">/v1/payments</code>
                    <p className="text-sm text-gray-600 mt-2">
                      Retrieve a list of all payments with optional filters
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-900 to-teal-700 border border-primary-200 rounded-xl p-6 text-white">
                <h3 className="font-semibold text-xl mb-2">Need More Help?</h3>
                <p className="text-primary-100 mb-4">
                  Our support team is here to help you integrate CloudChain Pay.
                </p>
                <div className="flex gap-3">
                  <Link
                    to="/docs/api"
                    className="bg-white text-primary-900 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors"
                  >
                    Full API Docs
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/30"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
