import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  Zap,
  Shield,
  Wallet,
  TrendingDown,
  Globe,
  Coins,
  Lock,
  Cpu,
  Layers,
  Code,
  ArrowRight,
  Check,
  Bitcoin,
} from 'lucide-react';

export default function Home() {
  const cryptocurrencies = [
    { name: 'Bitcoin', symbol: 'BTC' },
    { name: 'Ethereum', symbol: 'ETH' },
    { name: 'Dogecoin', symbol: 'DOGE' },
  ];

  const keyFeatures = [
    {
      icon: Shield,
      title: 'Decentralized Payment Gateway',
      description: 'No 3rd-party services. No KYC process. Direct wallet payments.',
      gradient: 'from-primary-900 to-primary-600',
    },
    {
      icon: TrendingDown,
      title: 'Low Transaction Fees',
      description: '0.8% fee on payments. No hidden transaction costs.',
      gradient: 'from-teal-600 to-teal-400',
    },
    {
      icon: Wallet,
      title: 'Direct to Your Wallet',
      description: 'Receive payments instantly without intermediaries.',
      gradient: 'from-primary-700 to-teal-500',
    },
  ];

  const allFeatures = [
    {
      icon: Cpu,
      title: 'Optional Custom Node Monitoring',
      description: 'Use your own Bitcoin and Ethereum nodes for complete control.',
    },
    {
      icon: Coins,
      title: 'Multi-Token Support',
      description: 'Accept ERC-20 and BEP-20 tokens with easy configuration.',
    },
    {
      icon: Zap,
      title: 'Lightning Network',
      description: 'Ultra-fast Bitcoin payments with near-zero transaction fees.',
    },
    {
      icon: Lock,
      title: 'Bank-Level Security',
      description: 'Encryption, address whitelisting, and secure payment processing.',
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Available in 41 languages for global accessibility.',
    },
    {
      icon: Layers,
      title: 'Platform Integrations',
      description: 'WooCommerce, Shopify, OpenCart, WHMCS, and more.',
    },
    {
      icon: Code,
      title: 'Payment Address Generation',
      description: 'Automatic blockchain payment address generation for each transaction.',
    },
    {
      icon: Shield,
      title: 'VAT & Invoicing',
      description: 'Built-in VAT support and professional invoicing system.',
    },
  ];

  const integrations = [
    'WooCommerce',
    'Easy Digital Downloads',
    'Shopify',
    'WHMCS',
    'OpenCart',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
      <Navbar />

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-teal-600 opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-900">
                Decentralized Crypto Payments
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-900 to-teal-600 mb-6 leading-tight">
              Accept Cryptocurrency Payments Within Minutes
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              The most secure and decentralized payment gateway. No KYC, no intermediaries,
              payments go directly to your wallet with just 0.8% fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/app/signup"
                className="group bg-gradient-to-r from-primary-900 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 flex items-center justify-center"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/docs"
                className="bg-white text-primary-900 border-2 border-primary-300 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 hover:border-primary-500 transition-all duration-300"
              >
                View Documentation
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-teal-500 mr-2" />
                <span>First $125 Free</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-teal-500 mr-2" />
                <span>No KYC Required</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-teal-500 mr-2" />
                <span>0.8% Fee Only</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {keyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-glow transition-all duration-300 border border-primary-100"
                >
                  <div
                    className={`bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-100">
            <h3 className="text-center text-lg font-semibold text-gray-700 mb-6">
              Supported Cryptocurrencies
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {cryptocurrencies.map((crypto) => (
                <div
                  key={crypto.symbol}
                  className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary-50 to-teal-50 rounded-xl"
                >
                  <Bitcoin className="w-6 h-6 text-primary-700" />
                  <div>
                    <div className="font-bold text-gray-900">{crypto.name}</div>
                    <div className="text-sm text-gray-600">{crypto.symbol}</div>
                  </div>
                </div>
              ))}
              <div className="text-sm text-gray-600 font-medium">+ ERC-20 & BEP-20 Tokens</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-900 to-teal-600 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed for businesses of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-6 bg-gradient-to-br from-white to-primary-50 rounded-xl border border-primary-100 hover:shadow-lg hover:border-primary-300 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-primary-900 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary-900 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">WooCommerce Integration</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              One-click crypto payments for your WooCommerce store
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-500 p-2 rounded-lg flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
                  <p className="text-primary-100">
                    Install the plugin and start accepting crypto payments in minutes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-teal-500 p-2 rounded-lg flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multilingual Support</h3>
                  <p className="text-primary-100">
                    WPML and Polylang compatible for international stores
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-teal-500 p-2 rounded-lg flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Custom Branding</h3>
                  <p className="text-primary-100">
                    Brand checkout pages with your logo and colors
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Supported Platforms</h3>
              <div className="grid grid-cols-2 gap-3">
                {integrations.map((integration) => (
                  <div
                    key={integration}
                    className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center font-medium"
                  >
                    {integration}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-900 to-teal-600 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses accepting cryptocurrency payments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/app/signup"
              className="group bg-gradient-to-r from-primary-900 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 flex items-center justify-center"
            >
              Create Free Account
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="bg-white text-primary-900 border-2 border-primary-300 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 hover:border-primary-500 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            First $125 in transactions are free. No credit card required.
          </p>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-br from-primary-600 to-teal-500 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">CloudChain Pay</span>
              </div>
              <p className="text-gray-400 mb-4">
                Decentralized cryptocurrency payment gateway with the lowest fees.
              </p>
              <p className="text-sm text-gray-500">© 2024 CloudChain Pay</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/features" className="hover:text-teal-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-teal-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="hover:text-teal-400 transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/docs" className="hover:text-teal-400 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/docs/api" className="hover:text-teal-400 transition-colors">
                    API Docs
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="hover:text-teal-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              Contact: support@cloudchainpay.com | Mon - Sat, 9AM - 11PM
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
