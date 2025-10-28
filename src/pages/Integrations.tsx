import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package, Store, Server, Code2, ArrowRight, Check } from 'lucide-react';

export default function Integrations() {
  const platforms = [
    {
      name: 'WooCommerce',
      icon: ShoppingCart,
      description: 'WordPress eCommerce platform with millions of users worldwide',
      features: [
        'One-click installation',
        'Multilingual support (WPML & Polylang)',
        'Custom checkout branding',
        'Automatic order updates',
      ],
      color: 'from-primary-900 to-primary-600',
    },
    {
      name: 'Easy Digital Downloads',
      icon: Package,
      description: 'Leading WordPress plugin for selling digital products',
      features: [
        'Seamless integration',
        'Digital product support',
        'License key management',
        'Instant downloads',
      ],
      color: 'from-teal-600 to-teal-400',
    },
    {
      name: 'Shopify',
      icon: Store,
      description: 'Leading eCommerce platform trusted by millions of businesses',
      features: [
        'Easy app installation',
        'Real-time synchronization',
        'Inventory management',
        'Multi-currency support',
      ],
      color: 'from-primary-700 to-teal-500',
    },
    {
      name: 'WHMCS',
      icon: Server,
      description: 'Web hosting automation platform for billing and support',
      features: [
        'Automated billing',
        'Service provisioning',
        'Client management',
        'Invoice generation',
      ],
      color: 'from-teal-500 to-primary-600',
    },
    {
      name: 'OpenCart',
      icon: ShoppingCart,
      description: 'Open-source eCommerce platform with extensive customization',
      features: [
        'Module installation',
        'Multi-store support',
        'Product management',
        'Order tracking',
      ],
      color: 'from-primary-800 to-teal-600',
    },
    {
      name: 'Custom Integration',
      icon: Code2,
      description: 'Build custom integrations using our comprehensive API',
      features: [
        'RESTful API',
        'Webhook support',
        'Full documentation',
        'Developer support',
      ],
      color: 'from-teal-600 to-primary-900',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full mb-6">
              <Code2 className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-900">
                Seamless Integration
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-900 to-teal-600 mb-6">
              Connect CloudChain Pay to Your Platform
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Easy-to-install plugins and modules for popular eCommerce platforms, or build custom
              integrations with our API
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-glow transition-all duration-300 border border-primary-100"
                >
                  <div
                    className={`bg-gradient-to-br ${platform.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{platform.description}</p>
                  <ul className="space-y-3 mb-6">
                    {platform.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/docs"
                    className="inline-flex items-center text-primary-900 hover:text-teal-600 font-semibold transition-colors"
                  >
                    View Documentation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-primary-900 to-teal-700 rounded-3xl p-12 text-white shadow-glow">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need a Custom Integration?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Our API provides everything you need to build custom integrations for any platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/docs/api"
                  className="group bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
                >
                  API Documentation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
