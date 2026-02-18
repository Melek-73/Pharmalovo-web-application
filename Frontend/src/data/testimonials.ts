export interface Testimonial {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  content: string;
  contentAr: string;
  rating: number;
  location: string;
  locationAr: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Amira Ben Salem',
    nameAr: 'أميرة بن سالم',
    role: 'Customer',
    roleAr: 'عميلة',
    content: 'I found my diabetic medication in minutes when my usual pharmacy was out of stock. Pharmalovo saved me hours of phone calls!',
    contentAr: 'وجدت دواء السكري الخاص بي في دقائق عندما كانت صيدليتي المعتادة خارج المخزون. أنقذني فارمالوفو ساعات من المكالمات الهاتفية!',
    rating: 5,
    location: 'Tunis',
    locationAr: 'تونس',
  },
  {
    id: '2',
    name: 'Mohamed Trabelsi',
    nameAr: 'محمد الطرابلسي',
    role: 'Pharmacy Owner',
    roleAr: 'صاحب صيدلية',
    content: 'Since joining Pharmalovo, our customer base has grown by 40%. The digital inventory system is incredibly efficient.',
    contentAr: 'منذ انضمامنا إلى فارمالوفو، نمت قاعدة عملائنا بنسبة 40٪. نظام المخزون الرقمي فعال للغاية.',
    rating: 5,
    location: 'Sfax',
    locationAr: 'صفاقس',
  },
  {
    id: '3',
    name: 'Leila Karoui',
    nameAr: 'ليلى الكروي',
    role: 'Customer',
    roleAr: 'عميلة',
    content: 'The price comparison feature helped me save 25% on my monthly prescriptions. Highly recommend!',
    contentAr: 'ساعدتني ميزة مقارنة الأسعار في توفير 25٪ على وصفاتي الشهرية. أوصي بشدة!',
    rating: 5,
    location: 'Sousse',
    locationAr: 'سوسة',
  },
  {
    id: '4',
    name: 'Karim Mansour',
    nameAr: 'كريم منصور',
    role: 'Customer',
    roleAr: 'عميل',
    content: 'As a senior citizen, I appreciate the simple interface and home delivery option. Makes healthcare accessible!',
    contentAr: 'كمواطن كبير في السن، أقدر الواجهة البسيطة وخيار التوصيل للمنزل. يجعل الرعاية الصحية في متناول اليد!',
    rating: 5,
    location: 'Nabeul',
    locationAr: 'نابل',
  },
  {
    id: '5',
    name: 'Sarra Hamdi',
    nameAr: 'سارة الحمدي',
    role: 'Pharmacy Manager',
    roleAr: 'مديرة صيدلية',
    content: 'The analytics dashboard gives us real insights into demand patterns. We reduced stockouts by 60%!',
    contentAr: 'توفر لوحة التحليلات رؤى حقيقية حول أنماط الطلب. خفضنا نفاد المخزون بنسبة 60٪!',
    rating: 5,
    location: 'Bizerte',
    locationAr: 'بنزرت',
  },
  {
    id: '6',
    name: 'Yassine Cherif',
    nameAr: 'ياسين الشريف',
    role: 'Customer',
    roleAr: 'عميل',
    content: 'Emergency at 2 AM? No problem! Found an open 24h pharmacy with the exact medication I needed.',
    contentAr: 'حالة طارئة في الساعة 2 صباحاً؟ لا مشكلة! وجدت صيدلية مفتوحة 24 ساعة مع الدواء الذي أحتاجه بالضبط.',
    rating: 5,
    location: 'Ariana',
    locationAr: 'أريانة',
  },
];
