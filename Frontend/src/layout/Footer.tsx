import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Pill } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/pharmacies', label: t.nav.pharmacies },
    { path: '/search', label: t.nav.searchMeds },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Pill className="h-8 w-8 text-[#007BFF]" />
              <span className="text-xl font-bold text-white">Pharmalovo</span>
            </div>
            <p className="text-sm mb-4">{t.footer.aboutDesc}</p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#007BFF] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[#007BFF] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#007BFF] transition-colors duration-200 text-sm"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#007BFF] transition-colors duration-200 text-sm"
                >
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 rtl:space-x-reverse text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Avenue Habib Bourguiba, Tunis 1000, Tunisia</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+21671123456" className="hover:text-[#007BFF] transition-colors duration-200">
                  +216 71 123 456
                </a>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:contact@pharmalovo.tn" className="hover:text-[#007BFF] transition-colors duration-200">
                  contact@pharmalovo.tn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse mb-4">
            <img
              src="https://images.pexels.com/lib/api/pexels-white.png"
              alt="Secured"
              className="h-8 opacity-50"
            />
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-400">
              <span>Secured Payment</span>
              <span>|</span>
              <span>SSL Encrypted</span>
            </div>
          </div>
          <p className="text-sm text-gray-400">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
