export interface Pharmacy {
  id: string;
  name: string;
  nameAr: string;
  address: string;
  addressAr: string;
  phone: string;
  location: {
    lat: number;
    lng: number;
  };
  distance?: number;
  isOpen: boolean;
  is24Hours: boolean;
  rating: number;
  reviews: number;
  hours?: {
    open: string;
    close: string;
  };
  services: string[];
}

export const pharmacies: Pharmacy[] = [
  {
    id: '1',
    name: 'Pharmacie Centrale',
    nameAr: 'الصيدلية المركزية',
    address: 'Avenue Habib Bourguiba, Tunis 1000',
    addressAr: 'شارع الحبيب بورقيبة، تونس 1000',
    phone: '+216 71 123 456',
    location: {
      lat: 36.8065,
      lng: 10.1815,
    },
    distance: 0.5,
    isOpen: true,
    is24Hours: false,
    rating: 4.8,
    reviews: 156,
    hours: {
      open: '08:00',
      close: '22:00',
    },
    services: ['Delivery', 'Online Orders', 'Consultation'],
  },
  {
    id: '2',
    name: 'Pharmacie du Lac',
    nameAr: 'صيدلية البحيرة',
    address: 'Les Berges du Lac, Tunis 1053',
    addressAr: 'ضفاف البحيرة، تونس 1053',
    phone: '+216 71 234 567',
    location: {
      lat: 36.8399,
      lng: 10.2429,
    },
    distance: 1.2,
    isOpen: true,
    is24Hours: true,
    rating: 4.9,
    reviews: 243,
    services: ['24/7 Service', 'Delivery', 'Online Orders', 'Drive-Through'],
  },
  {
    id: '3',
    name: 'Pharmacie de la Médina',
    nameAr: 'صيدلية المدينة',
    address: 'Rue de la Kasbah, Tunis 1008',
    addressAr: 'نهج القصبة، تونس 1008',
    phone: '+216 71 345 678',
    location: {
      lat: 36.7973,
      lng: 10.1715,
    },
    distance: 2.0,
    isOpen: false,
    is24Hours: false,
    rating: 4.5,
    reviews: 89,
    hours: {
      open: '09:00',
      close: '19:00',
    },
    services: ['Consultation', 'Online Orders'],
  },
  {
    id: '4',
    name: 'Pharmacie Mongi Slim',
    nameAr: 'صيدلية منجي سليم',
    address: 'Avenue Mongi Slim, La Marsa 2078',
    addressAr: 'شارع منجي سليم، المرسى 2078',
    phone: '+216 71 456 789',
    location: {
      lat: 36.8781,
      lng: 10.3248,
    },
    distance: 3.5,
    isOpen: true,
    is24Hours: false,
    rating: 4.7,
    reviews: 134,
    hours: {
      open: '08:30',
      close: '21:00',
    },
    services: ['Delivery', 'Online Orders', 'Home Testing'],
  },
  {
    id: '5',
    name: 'Pharmacie de Carthage',
    nameAr: 'صيدلية قرطاج',
    address: 'Avenue de Carthage, Carthage 2016',
    addressAr: 'شارع قرطاج، قرطاج 2016',
    phone: '+216 71 567 890',
    location: {
      lat: 36.8529,
      lng: 10.3233,
    },
    distance: 5.0,
    isOpen: true,
    is24Hours: false,
    rating: 4.6,
    reviews: 178,
    hours: {
      open: '08:00',
      close: '20:00',
    },
    services: ['Delivery', 'Online Orders', 'Consultation', 'Vaccination'],
  },
  {
    id: '6',
    name: 'Pharmacie Ennasr',
    nameAr: 'صيدلية النصر',
    address: 'Cité Ennasr 2, Ariana 2037',
    addressAr: 'مدينة النصر 2، أريانة 2037',
    phone: '+216 71 678 901',
    location: {
      lat: 36.8619,
      lng: 10.1869,
    },
    distance: 4.5,
    isOpen: true,
    is24Hours: true,
    rating: 4.9,
    reviews: 312,
    services: ['24/7 Service', 'Delivery', 'Online Orders', 'Emergency Care'],
  },
];

export const tunisiaGovernorates = [
  'Tunis',
  'Ariana',
  'Ben Arous',
  'Manouba',
  'Nabeul',
  'Zaghouan',
  'Bizerte',
  'Béja',
  'Jendouba',
  'Kef',
  'Siliana',
  'Sousse',
  'Monastir',
  'Mahdia',
  'Sfax',
  'Kairouan',
  'Kasserine',
  'Sidi Bouzid',
  'Gabès',
  'Médenine',
  'Tataouine',
  'Gafsa',
  'Tozeur',
  'Kebili',
];
