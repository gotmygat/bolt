import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Book, Code, Zap, Shield, Globe, Terminal } from 'lucide-react';

export default function Docs() {
  const sections = [
    {
      title: 'Getting Started',
      icon: Zap,
      items: [
        { name: 'Introduction', href: '#intro' },
        { name: 'Quick Start', href: '#quickstart' },
        { name: 'Installation', href: '#installation' },
        { name: 'Authentication', href: '#auth' },
      ],
    },
    {
      title: 'API Reference',
      icon: Code,
      items: [
        { name: 'Payments', href: '#payments' },
        { name: 'Customers', href: '#customers' },
        { name: 'Invoices', href: '#invoices' },
        { name: 'Webhooks', href: '#webhooks' },
      ],
    },
    {
      title: 'Security',
      icon: Shield,
      items: [
        { name: 'API Keys', href: '#keys' },
        { name: 'Encryption', href: '#encryption' },
        { name: 'Best Practices', href: '#practices' },
        { name: 'Compliance', href: '#compliance' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-16">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <Book className="w-10 h-10" />
              <h1 className="text-4xl font-bold">Documentation</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl">
              Everything you need to integrate CloudChain Pay into your application
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
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
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 p-8" id="intro">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  CloudChain Pay provides a modern, secure payment infrastructure for accepting both
                  traditional and cryptocurrency payments. Our API is designed to be simple yet
                  powerful, allowing you to integrate payments in minutes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <Globe className="w-8 h-8 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-1">Global Coverage</h3>
                    <p className="text-sm text-gray-600">Accept payments from 190+ countries</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <Shield className="w-8 h-8 text-green-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-1">Bank-Level Security</h3>
                    <p className="text-sm text-gray-600">PCI DSS Level 1 certified</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <Terminal className="w-8 h-8 text-purple-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-1">Developer Friendly</h3>
                    <p className="text-sm text-gray-600">RESTful API with clear docs</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-8" id="quickstart">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Get started with CloudChain Pay in just a few steps:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                  <li>Create your account and get your API keys</li>
                  <li>Install the CloudChain Pay SDK</li>
                  <li>Initialize the client with your API key</li>
                  <li>Create your first payment</li>
                </ol>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm text-gray-100 font-mono">
                    <code>{`npm install cloudchain-pay

import CloudChainPay from 'cloudchain-pay';

const cloudchain = new CloudChainPay('pk_live_...');

const payment = await cloudchain.payments.create({
  amount: 1999,
  currency: 'usd',
  description: 'Product purchase'
});`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-8" id="payments">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payments API</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Payments API allows you to create, retrieve, and manage payment transactions.
                </p>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">Create a Payment</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-mono rounded">
                        POST
                      </span>
                    </div>
                    <code className="text-sm text-gray-600">/v1/payments</code>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">Retrieve a Payment</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded">
                        GET
                      </span>
                    </div>
                    <code className="text-sm text-gray-600">/v1/payments/:id</code>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">List all Payments</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded">
                        GET
                      </span>
                    </div>
                    <code className="text-sm text-gray-600">/v1/payments</code>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
                <p className="text-blue-800 mb-4">
                  Our support team is here to help you integrate CloudChain Pay.
                </p>
                <div className="flex gap-3">
                  <Link
                    to="/app/signup"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </Link>
                  <a
                    href="#"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
