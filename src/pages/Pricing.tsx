import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Check, X, TrendingDown, Shield, Zap, Wallet, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const advantages = [
    {
      title: 'Lowest Transaction Fee',
      description: 'Just 0.8% vs industry standard 1.5%+',
      icon: TrendingDown,
    },
    {
      title: 'No Withdrawal Fees',
      description: 'Payments go directly to your wallet',
      icon: Wallet,
    },
    {
      title: 'Decentralized System',
      description: 'No intermediaries, full control',
      icon: Shield,
    },
    {
      title: 'Instant Payments',
      description: 'Receive payments immediately',
      icon: Zap,
    },
  ];

  const comparison = {
    cloudchain: [
      '0.8% transaction fee',
      'No withdrawal fees',
      'Direct wallet payments',
      'Decentralized system',
      'No KYC required',
      'No volume limits',
      'Custom branding',
      'Instant payments',
    ],
    others: [
      '1.5%+ transaction fees',
      'Additional withdrawal fees',
      'Centralized payment holding',
      'Require KYC verification',
      'Volume restrictions',
      'Account suspension risk',
      'Hidden fees',
      'Delayed payments',
    ],
  };

  const features = [
    'Accept Bitcoin, Ethereum, and 50+ cryptocurrencies',
    'ERC-20 and BEP-20 token support',
    'Lightning Network integration',
    'WooCommerce, Shopify, OpenCart plugins',
    'Custom checkout branding',
    'Multilingual support (41 languages)',
    'VAT & invoicing system',
    'Transaction reporting & export',
    'Email notifications',
    'Redundant blockchain explorers',
    'Address whitelisting',
    'API access',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full mb-6">
              <TrendingDown className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-900">
                Simple, Transparent Pricing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-900 to-teal-600 mb-6">
              The Lowest Fees in the Industry
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Pay only 0.8% per transaction. No hidden fees, no monthly charges, no surprises.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-3xl shadow-glow border border-primary-200 overflow-hidden">
              <div className="bg-gradient-to-br from-primary-900 to-teal-700 p-12 text-center text-white">
                <div className="text-6xl font-bold mb-4">0.8%</div>
                <div className="text-2xl font-semibold mb-2">Transaction Fee</div>
                <p className="text-primary-100 text-lg mb-6">
                  Only pay when you get paid
                </p>
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <Check className="w-5 h-5 text-teal-300" />
                  <span className="font-semibold">First $125 in transactions FREE</span>
                </div>
              </div>

              <div className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works:</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">
                          1. Add Credit Balance
                        </div>
                        <p className="text-sm text-gray-600">
                          Minimum $10 deposit to cover transaction fees
                        </p>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">
                          2. Start Accepting Payments
                        </div>
                        <p className="text-sm text-gray-600">
                          Payments go directly to your wallet
                        </p>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">
                          3. 0.8% Fee Deducted
                        </div>
                        <p className="text-sm text-gray-600">
                          Fee automatically deducted from credit balance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/app/signup"
                  className="group w-full bg-gradient-to-r from-primary-900 to-teal-700 text-white py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose CloudChain Pay?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage) => {
                const Icon = advantage.icon;
                return (
                  <div
                    key={advantage.title}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 text-center hover:shadow-glow transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-primary-900 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-primary-100 overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-primary-900 to-teal-700">
              <h2 className="text-3xl font-bold text-white text-center">
                CloudChain Pay vs Others
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-gradient-to-br from-teal-50 to-primary-50">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-teal-500 p-2 rounded-lg">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">CloudChain Pay</h3>
                </div>
                <ul className="space-y-4">
                  {comparison.cloudchain.map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-gray-50">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gray-400 p-2 rounded-lg">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Other Providers</h3>
                </div>
                <ul className="space-y-4">
                  {comparison.others.map((item) => (
                    <li key={item} className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Save on Fees?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already saving with CloudChain Pay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/app/signup"
                className="group bg-gradient-to-r from-primary-900 to-teal-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 flex items-center justify-center"
              >
                Get Started Free
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
              No credit card required. First $125 in transactions are free.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
