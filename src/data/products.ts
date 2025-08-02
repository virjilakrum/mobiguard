import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'TPH (Thermoplastic Hybrid)',
    category: 'Hibrit Kaplama',
    description: 'Düşük yoğunlukta poliüretan ve polivinil klorür (PVC) karışımı içeren hibrit yapı. Uygun maliyetli çözümler için ideal seçim.',
    price: 'Fiyat için iletişime geçin',
    image: '/src/images/tph.webp',
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
    image: '/src/images/tpu.jpg',
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
    image: '/src/images/WhatsApp Image 2025-08-02 at 12.31.36 (1).jpeg',
    features: [
      'Global 3M markası güvencesi',
      'İleri teknoloji yapısı',
      'Endüstride kanıtlanmış performans',
      'Dünya çapında kabul gören kalite'
    ]
  }
];