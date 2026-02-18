export interface Medication {
  id: string;
  name: string;
  nameAr: string;
  genericName: string;
  category: string;
  price: number;
  availability: 'in-stock' | 'low-stock' | 'out-of-stock';
  pharmacyId: string;
  pharmacyName: string;
  distance?: number;
  requires_prescription: boolean;
  dosage?: string;
}

export const medications: Medication[] = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    nameAr: 'باراسيتامول 500 ملغ',
    genericName: 'Acetaminophen',
    category: 'Pain Relief',
    price: 3.5,
    availability: 'in-stock',
    pharmacyId: '1',
    pharmacyName: 'Pharmacie Centrale',
    distance: 0.5,
    requires_prescription: false,
    dosage: '500mg tablets',
  },
  {
    id: '2',
    name: 'Amoxicillin 500mg',
    nameAr: 'أموكسيسيلين 500 ملغ',
    genericName: 'Amoxicillin',
    category: 'Antibiotics',
    price: 12.0,
    availability: 'in-stock',
    pharmacyId: '2',
    pharmacyName: 'Pharmacie du Lac',
    distance: 1.2,
    requires_prescription: true,
    dosage: '500mg capsules',
  },
  {
    id: '3',
    name: 'Insulin Glargine 100U/ml',
    nameAr: 'أنسولين جلارجين 100 وحدة/مل',
    genericName: 'Insulin Glargine',
    category: 'Diabetes',
    price: 45.0,
    availability: 'in-stock',
    pharmacyId: '1',
    pharmacyName: 'Pharmacie Centrale',
    distance: 0.5,
    requires_prescription: true,
    dosage: '100U/ml injection',
  },
  {
    id: '4',
    name: 'Omeprazole 20mg',
    nameAr: 'أوميبرازول 20 ملغ',
    genericName: 'Omeprazole',
    category: 'Digestive Health',
    price: 8.5,
    availability: 'low-stock',
    pharmacyId: '3',
    pharmacyName: 'Pharmacie de la Médina',
    distance: 2.0,
    requires_prescription: false,
    dosage: '20mg capsules',
  },
  {
    id: '5',
    name: 'Ventolin Inhaler',
    nameAr: 'بخاخ فينتولين',
    genericName: 'Salbutamol',
    category: 'Respiratory',
    price: 18.0,
    availability: 'in-stock',
    pharmacyId: '4',
    pharmacyName: 'Pharmacie Mongi Slim',
    distance: 3.5,
    requires_prescription: true,
    dosage: '100mcg inhaler',
  },
  {
    id: '6',
    name: 'Aspirin 100mg',
    nameAr: 'أسبرين 100 ملغ',
    genericName: 'Acetylsalicylic Acid',
    category: 'Cardiovascular',
    price: 4.0,
    availability: 'in-stock',
    pharmacyId: '2',
    pharmacyName: 'Pharmacie du Lac',
    distance: 1.2,
    requires_prescription: false,
    dosage: '100mg tablets',
  },
  {
    id: '7',
    name: 'Metformin 850mg',
    nameAr: 'ميتفورمين 850 ملغ',
    genericName: 'Metformin',
    category: 'Diabetes',
    price: 15.0,
    availability: 'in-stock',
    pharmacyId: '5',
    pharmacyName: 'Pharmacie de Carthage',
    distance: 5.0,
    requires_prescription: true,
    dosage: '850mg tablets',
  },
  {
    id: '8',
    name: 'Cetirizine 10mg',
    nameAr: 'سيتيريزين 10 ملغ',
    genericName: 'Cetirizine',
    category: 'Allergy',
    price: 6.5,
    availability: 'in-stock',
    pharmacyId: '1',
    pharmacyName: 'Pharmacie Centrale',
    distance: 0.5,
    requires_prescription: false,
    dosage: '10mg tablets',
  },
];

export const medicationCategories = [
  'All',
  'Pain Relief',
  'Antibiotics',
  'Diabetes',
  'Cardiovascular',
  'Respiratory',
  'Digestive Health',
  'Allergy',
];
