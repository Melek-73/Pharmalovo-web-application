import { Target, Eye, Users, TrendingUp, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/Card';

export function About() {
  const { t } = useLanguage();

  const timeline = [
    { year: '2025', event: 'Pharmalovo concept developed', milestone: 'Initial planning and research' },
    { year: 'Q1 2026', event: 'Platform launch in Tunis', milestone: '50 partner pharmacies' },
    { year: 'Q2 2026', event: 'Expansion to major cities', milestone: '200+ pharmacies nationwide' },
    { year: 'Q3 2026', event: 'Mobile app release', milestone: 'iOS and Android platforms' },
    { year: 'Q4 2026', event: 'Premium features rollout', milestone: 'AI-powered recommendations' },
  ];

  const team = [
    { name: 'Dr. Amira Mansour', role: 'CEO & Founder', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Mohamed Trabelsi', role: 'CTO', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Leila Karoui', role: 'Head of Partnerships', image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Karim Ben Ali', role: 'Head of Operations', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const comparisons = [
    { feature: 'Real-time stock visibility', traditional: '✗', pharmalovo: '✓' },
    { feature: 'Price comparison', traditional: '✗', pharmalovo: '✓' },
    { feature: 'Online ordering', traditional: '✗', pharmalovo: '✓' },
    { feature: 'Home delivery', traditional: 'Limited', pharmalovo: '✓' },
    { feature: '24/7 availability info', traditional: '✗', pharmalovo: '✓' },
    { feature: 'Digital payments', traditional: '✗', pharmalovo: '✓' },
    { feature: 'Order tracking', traditional: '✗', pharmalovo: '✓' },
  ];

  const impact = [
    { icon: Users, value: '10,000+', label: 'Active Users' },
    { icon: Heart, value: '50+', label: 'Partner Pharmacies' },
    { icon: TrendingUp, value: '30%', label: 'Time Saved' },
    { icon: Award, value: '4.9/5', label: 'User Rating' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#007BFF] to-[#0056b3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            Bridging the gap between pharmacies and patients through innovative technology
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="flex flex-col items-center text-center">
              <Target className="h-16 w-16 text-[#007BFF] mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t.about.mission}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t.about.missionText}
              </p>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <Eye className="h-16 w-16 text-[#28A745] mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t.about.vision}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t.about.visionText}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.about.timeline}
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#007BFF] hidden md:block"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <Card className={`${index % 2 === 0 ? 'md:text-right rtl:md:text-left' : 'md:text-left rtl:md:text-right'}`}>
                      <h3 className="text-xl font-bold text-[#007BFF] mb-2">{item.year}</h3>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.event}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.milestone}</p>
                    </Card>
                  </div>

                  <div className="hidden md:flex w-4 h-4 rounded-full bg-[#007BFF] border-4 border-white dark:border-gray-900 z-10"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.about.team}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} hover className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Pharmalovo vs Traditional Pharmacies
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            See how we're transforming medication access in Tunisia
          </p>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left rtl:text-right py-4 px-6 text-gray-900 dark:text-white font-semibold">
                      Feature
                    </th>
                    <th className="text-center py-4 px-6 text-gray-900 dark:text-white font-semibold">
                      Traditional
                    </th>
                    <th className="text-center py-4 px-6 text-[#007BFF] font-semibold">
                      Pharmalovo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                        {row.feature}
                      </td>
                      <td className="text-center py-4 px-6 text-gray-600 dark:text-gray-400">
                        {row.traditional}
                      </td>
                      <td className="text-center py-4 px-6 text-[#28A745] font-semibold">
                        {row.pharmalovo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.about.impact}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((item, index) => (
              <Card key={index} className="text-center">
                <item.icon className="h-12 w-12 mx-auto mb-4 text-[#007BFF]" />
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Watch Our Story (Coming Soon)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
