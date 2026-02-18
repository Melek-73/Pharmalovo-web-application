import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      value: 'Avenue Habib Bourguiba, Tunis 1000, Tunisia',
    },
    {
      icon: Phone,
      title: t.contact.phone,
      value: '+216 71 123 456',
      link: 'tel:+21671123456',
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: 'contact@pharmalovo.tn',
      link: 'mailto:contact@pharmalovo.tn',
    },
    {
      icon: Clock,
      title: t.contact.hours,
      value: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#007BFF] to-[#0056b3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Get in Touch
              </h2>

              <form className="space-y-6">
                <Input label={t.contact.name} placeholder="Your full name" required />
                <Input
                  type="email"
                  label={t.contact.email}
                  placeholder="your.email@example.com"
                  required
                />
                <Input
                  type="tel"
                  label={t.contact.phone}
                  placeholder="+216 XX XXX XXX"
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t.contact.message}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" fullWidth>
                  {t.contact.send}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#007BFF]/10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-[#007BFF]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 dark:text-gray-400 hover:text-[#007BFF] transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 bg-gradient-to-br from-[#28A745] to-[#218838] text-white">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp Support</h3>
                    <p className="text-sm opacity-90 mb-3">Get instant help via WhatsApp</p>
                    <a
                      href="https://wa.me/21671123456"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" size="sm">
                        Chat Now
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Our Location
          </h2>

          <Card>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-[#007BFF]" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Avenue Habib Bourguiba, Tunis 1000, Tunisia
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  (Google Maps integration ready for backend)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
