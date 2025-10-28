import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import {
  Shield,
  TrendingDown,
  Cpu,
  Coins,
  Zap,
  CreditCard,
  Globe,
  FileText,
  Lock,
  BarChart3,
  Palette,
  Layers,
  Network,
  Wallet,
  ArrowRight,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Decentralized Payment System',
      description: 'No third-party services, full user control of funds, no registration or KYC required.',
      color: 'from-primary-900 to-primary-600',
    },
    {
      icon: TrendingDown,
      title: 'Low Fees',
      description: '0.8% transaction fee with no hidden fees and no recurring payments.',
      color: 'from-teal-600 to-teal-400',
    },
    {
      icon: Cpu,
      title: 'Node Integration',
      description: 'Use your own Bitcoin and Ethereum nodes with automatic address generation and cryptocurrency conversion.',
      color: 'from-primary-700 to-teal-500',
    },
    {
      icon: Coins,
      title: 'Token Support',
      description: 'Accept ERC-20 and BEP-20 token payments with easy token configuration.',
      color: 'from-teal-500 to-primary-600',
    },
    {
      icon: Zap,
      title: 'Lightning Network',
      description: 'Ultra-fast Bitcoin payments with near-zero transaction fees.',
      color: 'from-primary-800 to-teal-600',
    },
    {
      icon: CreditCard,
      title: 'Payment Methods',
      description: 'Credit/debit card payments, PayPal and Google Pay support, unique address generation per transaction.',
      color: 'from-teal-600 to-primary-700',
    },
    {
      icon: Globe,
      title: 'Multilingual (41 Languages)',
      description: 'Full support for 41 languages to reach customers worldwide.',
      color: 'from-primary-900 to-teal-500',
    },
    {
      icon: FileText,
      title: 'VAT & Invoicing',
      description: 'Built-in VAT support and professional invoicing system.',
      color: 'from-teal-500 to-primary-800',
    },
    {
      icon: Lock,
      title: 'Security Features',
      description: 'Encryption, address whitelisting, and transaction reporting.',
      color: 'from-primary-700 to-teal-600',
    },
    {
      icon: Palette,
      title: 'Customizable Checkout',
      description: 'Multiple checkout designs available with full CSS customization.',
      color: 'from-teal-600 to-primary-900',
    },
    {
      icon: BarChart3,
      title: 'Transaction Reporting',
      description: 'Export all transaction activity with advanced filtering options.',
      color: 'from-primary-800 to-teal-500',
    },
    {
      icon: Network,
      title: 'Redundant Explorers',
      description: 'Powered by 3-5 redundant blockchain explorers for maximum reliability.',
      color: 'from-teal-500 to-primary-700',
    },
  ];

  const integrations = [
    { name: 'WooCommerce', desc: 'WordPress eCommerce platform' },
    { name: 'Easy Digital Downloads', desc: 'Digital product marketplace' },
    { name: 'Shopify', desc: 'Leading eCommerce platform' },
    { name: 'WHMCS', desc: 'Web hosting automation' },
    { name: 'OpenCart', desc: 'Open-source eCommerce' },
  ];

  const cryptocurrencies = [
    'Bitcoin (BTC)',
    'Ethereum (ETH)',
    'USDT (Multiple Chains)',
    'XRP',
    'BNB',
    'USDC',
    'Dogecoin (DOGE)',
    'ERC-20 Tokens',
    'BEP-20 Tokens',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full mb-6">
              <Layers className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-900">
                Comprehensive Features
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-900 to-teal-600 mb-6">
              Everything You Need to Accept Crypto Payments
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              CloudChain Pay provides all the tools and features you need to accept cryptocurrency
              payments securely and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-glow transition-all duration-300 border border-primary-100"
                >
                  <div
                    className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-primary-900 to-teal-600 p-3 rounded-xl">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Platform Integrations</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Seamlessly integrate with your existing eCommerce platform
              </p>
              <div className="space-y-4">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-primary-50 to-teal-50 rounded-xl"
                  >
                    <div className="bg-primary-900 p-2 rounded-lg flex-shrink-0">
                      <Layers className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{integration.name}</div>
                      <div className="text-sm text-gray-600">{integration.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-teal-600 to-primary-900 p-3 rounded-xl">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Supported Cryptocurrencies</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Accept a wide range of cryptocurrencies and tokens
              </p>
              <div className="grid grid-cols-2 gap-3">
                {cryptocurrencies.map((crypto) => (
                  <div
                    key={crypto}
                    className="flex items-center space-x-2 p-3 bg-gradient-to-r from-primary-50 to-teal-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-gradient-to-br from-primary-600 to-teal-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">{crypto}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-900 to-teal-700 rounded-3xl p-12 text-center text-white shadow-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Accepting Crypto Payments?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using CloudChain Pay for secure, decentralized payments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/app/signup"
                className="group bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/docs"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
