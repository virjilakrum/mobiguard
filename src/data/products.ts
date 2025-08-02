import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'TPH (Thermoplastic Hybrid)',
    category: 'Hibrit Kaplama',
    description: 'Düşük yoğunlukta poliüretan ve polivinil klorür (PVC) karışımı içeren hibrit yapı. Uygun maliyetli çözümler için ideal seçim.',
    price: 'Fiyat için iletişime geçin',
    image: 'https://images.pexels.com/photos/6077120/pexels-photo-6077120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Poliüretan ve PVC karışımı yapı',
      'Orta seviye yüzey koruma performansı',
      'Uygun maliyet avantajı',
      'Temel koruma çözümü'
    ]
  },
  {
    id: '2',
    name: 'TPU (Thermoplastic Polyurethane)',
    category: 'Premium Kaplama',
    description: '%100 saf poliüretan yapısıyla üretilen premium koruma filmi. Geri dönüştürülmüş hammadde içermez.',
    price: 'Fiyat için iletişime geçin',
    image: 'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      '%100 saf poliüretan yapısı',
      'Yüksek UV direnci ve uzun ömür',
      'Kendini yenileyebilme özelliği',
      'Parlak yüzey seçeneği'
    ]
  },
  {
    id: '3',
    name: '3M PPF (Paint Protection Film)',
    category: 'Premium Marka',
    description: 'Global ölçekte tanınan 3M markasının ileri teknolojiye sahip koruma filmi. Endüstri standardında mükemmellik.',
    price: 'Fiyat için iletişime geçin',
    image: 'https://images.pexels.com/photos/5691530/pexels-photo-5691530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Global 3M markası güvencesi',
      'İleri teknoloji yapısı',
      'Endüstride kanıtlanmış performans',
      'Dünya çapında kabul gören kalite'
    ]
  }
];