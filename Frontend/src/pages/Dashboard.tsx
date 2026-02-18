import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Package,
  Bell,
  User,
  Settings,
  LogOut,
  TrendingUp,
  ShoppingBag,
  Heart,
  BarChart3,
  Upload,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export function Dashboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [userType] = useState<'customer' | 'pharmacy'>('customer');

  const handleLogout = () => {
    navigate('/');
  };

  const recentSearches = [
    'Paracetamol 500mg',
    'Insulin Glargine',
    'Omeprazole 20mg',
  ];

  const orders = [
    {
      id: '#12345',
      medication: 'Paracetamol 500mg',
      pharmacy: 'Pharmacie Centrale',
      status: 'Delivered',
      date: '2026-02-15',
      price: 3.5,
    },
    {
      id: '#12344',
      medication: 'Insulin Glargine',
      pharmacy: 'Pharmacie du Lac',
      status: 'In Transit',
      date: '2026-02-18',
      price: 45.0,
    },
    {
      id: '#12343',
      medication: 'Amoxicillin 500mg',
      pharmacy: 'Pharmacie de la Médina',
      status: 'Processing',
      date: '2026-02-18',
      price: 12.0,
    },
  ];

  const notifications = [
    {
      id: 1,
      title: 'Order Delivered',
      message: 'Your order #12345 has been delivered',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      title: 'Price Drop Alert',
      message: 'Paracetamol is now 10% cheaper at Pharmacie Centrale',
      time: '1 day ago',
      read: true,
    },
  ];

  const stats = [
    { icon: ShoppingBag, label: 'Total Orders', value: '23', color: 'text-[#007BFF]' },
    { icon: Heart, label: 'Saved Medications', value: '8', color: 'text-red-500' },
    { icon: TrendingUp, label: 'Loyalty Points', value: '450', color: 'text-[#28A745]' },
    { icon: Package, label: 'Active Orders', value: '2', color: 'text-[#FFC107]' },
  ];

  const pharmacyStats = [
    { icon: ShoppingBag, label: 'Total Sales', value: '2,450 TND', color: 'text-[#007BFF]' },
    { icon: Package, label: 'Orders Today', value: '34', color: 'text-[#28A745]' },
    { icon: BarChart3, label: 'Items in Stock', value: '567', color: 'text-[#FFC107]' },
    { icon: TrendingUp, label: 'Growth', value: '+15%', color: 'text-[#17A2B8]' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t.dashboard.welcome}, User!
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {userType === 'customer' ? 'Manage your medications and orders' : 'Manage your pharmacy operations'}
            </p>
          </div>

          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-5 w-5" />
            {t.nav.logout}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {(userType === 'customer' ? stats : pharmacyStats).map((stat, index) => (
            <Card key={index}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {userType === 'customer' ? (
              <>
                <Card>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {t.dashboard.orders}
                    </h2>
                    <Button size="sm" variant="outline">
                      {t.common.viewMore}
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg gap-3"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                              {order.id}
                            </span>
                            <span
                              className={`text-xs font-semibold px-2 py-0.5 rounded ${
                                order.status === 'Delivered'
                                  ? 'bg-[#28A745] text-white'
                                  : order.status === 'In Transit'
                                  ? 'bg-[#007BFF] text-white'
                                  : 'bg-[#FFC107] text-gray-900'
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {order.medication}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            {order.pharmacy} • {order.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-[#007BFF]">
                            {order.price.toFixed(2)} {t.common.currency}
                          </p>
                          <Button size="sm" variant="ghost">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t.dashboard.searchHistory}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </Card>
              </>
            ) : (
              <>
                <Card>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t.dashboard.inventory}
                  </h2>
                  <div className="space-y-4">
                    <Button fullWidth className="flex items-center justify-center gap-2">
                      <Upload className="h-5 w-5" />
                      Upload Stock Update
                    </Button>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                      <BarChart3 className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Inventory management tools
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t.dashboard.analytics}
                  </h2>
                  <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-500">Sales Analytics Chart</p>
                  </div>
                </Card>
              </>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t.dashboard.notifications}
                </h2>
                <Bell className="h-5 w-5 text-gray-400" />
              </div>

              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg ${
                      notification.read
                        ? 'bg-gray-50 dark:bg-gray-800'
                        : 'bg-[#007BFF]/10 dark:bg-[#007BFF]/20'
                    }`}
                  >
                    <p className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                      {notification.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {notification.time}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t.dashboard.profile}
              </h2>

              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 text-left">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Edit Profile
                  </span>
                </button>

                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 text-left">
                  <Settings className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {t.dashboard.settings}
                  </span>
                </button>

                {userType === 'customer' && (
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 text-left">
                    <Heart className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Saved Medications
                    </span>
                  </button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
