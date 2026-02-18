import { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Star,
  Navigation,
  Map as MapIcon,
  List,
  Filter,
  Upload,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { pharmacies, tunisiaGovernorates } from '../data/pharmacies';

export function Pharmacies() {
  const { t, isRTL } = useLanguage();
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list');
  const [showFilters, setShowFilters] = useState(false);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [filters, setFilters] = useState({
    open24: false,
    openNow: false,
    governorate: 'All',
  });

  const filteredPharmacies = pharmacies.filter((pharmacy) => {
    if (filters.open24 && !pharmacy.is24Hours) return false;
    if (filters.openNow && !pharmacy.isOpen) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#007BFF] to-[#0056b3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            {t.pharmacies.title}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            Find medications at nearby pharmacies with real-time availability
          </p>
        </div>
      </section>

      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'list' ? 'primary' : 'outline'}
                onClick={() => setViewMode('list')}
                className="flex items-center gap-2"
              >
                <List className="h-5 w-5" />
                {t.pharmacies.list}
              </Button>
              <Button
                variant={viewMode === 'map' ? 'primary' : 'outline'}
                onClick={() => setViewMode('map')}
                className="flex items-center gap-2"
              >
                <MapIcon className="h-5 w-5" />
                {t.pharmacies.map}
              </Button>
            </div>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-5 w-5" />
              {t.pharmacies.filters}
            </Button>
          </div>

          {showFilters && (
            <Card className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.open24}
                    onChange={(e) =>
                      setFilters({ ...filters, open24: e.target.checked })
                    }
                    className="w-5 h-5 text-[#007BFF] rounded"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.pharmacies.open24}
                  </span>
                </label>

                <label className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.openNow}
                    onChange={(e) =>
                      setFilters({ ...filters, openNow: e.target.checked })
                    }
                    className="w-5 h-5 text-[#007BFF] rounded"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.pharmacies.openNow}
                  </span>
                </label>

                <select
                  value={filters.governorate}
                  onChange={(e) =>
                    setFilters({ ...filters, governorate: e.target.value })
                  }
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                >
                  <option value="All">All Governorates</option>
                  {tunisiaGovernorates.map((gov) => (
                    <option key={gov} value={gov}>
                      {gov}
                    </option>
                  ))}
                </select>
              </div>
            </Card>
          )}

          {viewMode === 'map' ? (
            <Card className="mb-6">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-[#007BFF]" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tunisia-centered map showing all pharmacies
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    (Google Maps integration ready for backend)
                  </p>
                </div>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {filteredPharmacies.map((pharmacy) => (
                <Card key={pharmacy.id} hover>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {isRTL ? pharmacy.nameAr : pharmacy.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-[#FFC107] fill-current" />
                          <span className="ml-1">{pharmacy.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{pharmacy.reviews} reviews</span>
                      </div>
                    </div>
                    {pharmacy.is24Hours && (
                      <span className="bg-[#28A745] text-white text-xs font-semibold px-2 py-1 rounded">
                        24/7
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#007BFF]" />
                      <span>{isRTL ? pharmacy.addressAr : pharmacy.address}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <Phone className="h-4 w-4 flex-shrink-0 text-[#007BFF]" />
                      <a href={`tel:${pharmacy.phone}`} className="hover:text-[#007BFF]">
                        {pharmacy.phone}
                      </a>
                    </div>

                    {pharmacy.hours && (
                      <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Clock className="h-4 w-4 flex-shrink-0 text-[#007BFF]" />
                        <span>
                          {pharmacy.hours.open} - {pharmacy.hours.close}
                        </span>
                      </div>
                    )}

                    {pharmacy.distance && (
                      <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Navigation className="h-4 w-4 flex-shrink-0 text-[#007BFF]" />
                        <span>{pharmacy.distance} km away</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pharmacy.services.map((service) => (
                      <span
                        key={service}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={pharmacy.isOpen ? 'primary' : 'outline'}
                      fullWidth
                    >
                      {pharmacy.isOpen ? 'View Stock' : 'View Details'}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <Card className="bg-gradient-to-br from-[#007BFF] to-[#0056b3] text-white">
            <div className="text-center py-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {t.pharmacies.joinTitle}
              </h2>
              <p className="text-lg mb-6 opacity-90">{t.pharmacies.joinDesc}</p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setShowJoinForm(!showJoinForm)}
              >
                Join Now
              </Button>
            </div>
          </Card>

          {showJoinForm && (
            <Card className="mt-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Pharmacy Registration Form
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Pharmacy Name" placeholder="Enter pharmacy name" />
                  <Input label="License Number" placeholder="Enter license number" />
                  <Input label="Contact Person" placeholder="Enter contact person name" />
                  <Input type="tel" label="Phone Number" placeholder="+216 XX XXX XXX" />
                  <Input type="email" label="Email" placeholder="pharmacy@example.com" />
                  <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                    <option value="">Select Governorate</option>
                    {tunisiaGovernorates.map((gov) => (
                      <option key={gov} value={gov}>
                        {gov}
                      </option>
                    ))}
                  </select>
                </div>

                <Input label="Full Address" placeholder="Enter complete address" />

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Upload Logo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-[#007BFF] transition-colors duration-200">
                    <Upload className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      PNG, JPG up to 5MB
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 rtl:space-x-reverse">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-[#007BFF] rounded" />
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    I agree to the terms and conditions and confirm that all information provided
                    is accurate
                  </label>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" fullWidth>
                    Submit Application
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowJoinForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
