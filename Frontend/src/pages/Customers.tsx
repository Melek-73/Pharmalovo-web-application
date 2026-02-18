import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Package,
  Heart,
  Clock,
  Gift,
  MapPin,
  ChevronDown,
  ChevronUp,
  Search,
  ShoppingCart,
  CreditCard,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export function Customers() {
  const { t } = useLanguage();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const features = [
    {
      icon: Package,
      title: 'Order History',
      desc: 'Track all your medication purchases in one place',
    },
    {
      icon: Heart,
      title: 'Saved Medications',
      desc: 'Quickly reorder your regular prescriptions',
    },
    {
      icon: Clock,
      title: 'Order Tracking',
      desc: 'Real-time updates on your delivery status',
    },
    {
      icon: Gift,
      title: 'Loyalty Points',
      desc: 'Earn rewards with every purchase',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      icon: Search,
      title: 'Search Medications',
      desc: 'Find your needed medication by name or scan prescription',
    },
    {
      step: '2',
      icon: MapPin,
      title: 'Check Availability',
      desc: 'See real-time stock at nearby pharmacies with prices',
    },
    {
      step: '3',
      icon: ShoppingCart,
      title: 'Place Order',
      desc: 'Order online for pickup or home delivery',
    },
    {
      step: '4',
      icon: CreditCard,
      title: 'Secure Payment',
      desc: 'Pay online or cash on delivery',
    },
  ];

  const faqs = [
    {
      question: 'How do I create an account?',
      answer:
        'Click on "Register" in the top menu, fill in your details, and verify your email. It takes less than 2 minutes!',
    },
    {
      question: 'Is prescription verification required?',
      answer:
        'Yes, for prescription medications. You can upload your prescription during checkout, and our pharmacists will verify it before processing your order.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept credit/debit cards, mobile money, and cash on delivery for your convenience.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Standard delivery takes 1-2 hours within city limits. Express delivery (30 minutes) is available for urgent orders at an additional fee.',
    },
    {
      question: 'Can I cancel or modify my order?',
      answer:
        'Yes, you can cancel or modify your order within 5 minutes of placement. After that, please contact the pharmacy directly.',
    },
    {
      question: 'How do loyalty points work?',
      answer:
        'Earn 1 point for every 10 TND spent. Accumulate points to redeem discounts on future purchases.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#007BFF] to-[#0056b3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            {t.customers.title}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            Everything you need to manage your medications efficiently
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.customers.dashboardPreview}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-[#007BFF]" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Recent Orders
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      id: '#12345',
                      medication: 'Paracetamol 500mg',
                      pharmacy: 'Pharmacie Centrale',
                      status: 'Delivered',
                      date: '2026-02-15',
                    },
                    {
                      id: '#12344',
                      medication: 'Insulin Glargine',
                      pharmacy: 'Pharmacie du Lac',
                      status: 'In Transit',
                      date: '2026-02-18',
                    },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="bg-white dark:bg-gray-900 p-4 rounded-lg flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {order.medication}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {order.pharmacy} • {order.date}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded ${
                          order.status === 'Delivered'
                            ? 'bg-[#28A745] text-white'
                            : 'bg-[#007BFF] text-white'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Loyalty Points
                </h3>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-[#007BFF] mb-2">450</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Available Points
                  </p>
                  <Button size="sm" fullWidth>
                    Redeem Points
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Link to="/register">
              <Button size="lg">{t.common.getStarted}</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.customers.guide}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <Card hover className="text-center h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#007BFF] text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <step.icon className="h-12 w-12 mx-auto mb-4 mt-4 text-[#007BFF]" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                </Card>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-[#007BFF]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.customers.faq}
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="cursor-pointer" hover>
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-[#007BFF] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <p className="mt-4 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
