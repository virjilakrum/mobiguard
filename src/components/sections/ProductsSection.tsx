import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/types';
import { cn } from '@/lib/utils';

const slideImages = [
  {
    id: 1,
    src: "/src/images/mobiguard 9.jpg",
    title: "Profesyonel Koruma Filmi Uygulaması",
    description: "Uzman ekibimiz tarafından titizlikle uygulanan koruma filmleri, yüzeylerinizi mükemmel şekilde korur."
  },
  {
    id: 2,
    src: "/src/images/mobiguard mokap.jpg",
    title: "MOBIGUARD Kalite Standardı",
    description: "TPH, TPU ve 3M PPF teknolojileriyle üretilen filmlerimiz, en yüksek kalite standartlarını karşılar."
  },
  {
    id: 3,
    src: "/src/images/mobiguard post 2.jpg",
    title: "Detaylı İşçilik",
    description: "Her detayın özenle işlendiği uygulama sürecimizde, mükemmel sonuçlar elde ediyoruz."
  },
  {
    id: 4,
    src: "/src/images/mobiguard post 3.jpg",
    title: "Teknoloji ve Deneyim",
    description: "Modern teknoloji ile birleşen deneyimimiz, size en iyi koruma çözümlerini sunar."
  },
  {
    id: 5,
    src: "/src/images/mobiguard post 4.jpg",
    title: "Dayanıklı Koruma",
    description: "Uzun ömürlü koruma sağlayan filmlerimiz, yatırımınızı yıllarca güvende tutar."
  },
  {
    id: 6,
    src: "/src/images/mobiguard post 5.jpg",
    title: "Estetik ve Fonksiyonellik",
    description: "Görünümü bozmadan maksimum koruma sağlayan şeffaf filmlerimiz."
  },
  {
    id: 7,
    src: "/src/images/mobiguard post 6.jpg",
    title: "Çevre Dostu Çözümler",
    description: "Çevre dostu malzemelerle üretilen filmlerimiz, sürdürülebilir koruma sağlar."
  },
  {
    id: 8,
    src: "/src/images/mobiguard post 7.jpg",
    title: "Özel Tasarım Uygulamaları",
    description: "Her projeye özel tasarlanan koruma çözümleri ile benzersiz sonuçlar."
  },
  {
    id: 9,
    src: "/src/images/mobiguard post 8.jpg",
    title: "Mükemmel Finish",
    description: "Profesyonel finish ile tamamlanan projelerimiz, beklentilerinizi aşar."
  }
];

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background to-background/95 relative">
      {/* Decorative elements */}
      <div className={cn(
        "absolute top-[-150px] left-[-150px] w-[300px] h-[300px] rounded-full",
        "bg-[#313a6f]/10 blur-[100px] z-0"
      )} />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="border-[#313a6f] text-[#313a6f] px-4 py-1">
            Ürün Gamımız
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Yüksek Performanslı Koruma Filmleri
          </h2>
          <p className="text-muted-foreground">
            TPH, TPU ve 3M PPF teknolojileriyle üretilen profesyonel koruma filmlerimizi keşfedin.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-background/50 backdrop-blur-sm">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={slideImages[currentSlide].src}
                alt={slideImages[currentSlide].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Slide Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Badge className="mb-3 bg-[#313a6f]/80 hover:bg-[#313a6f] border-none">
                  {currentSlide + 1} / {slideImages.length}
                </Badge>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {slideImages[currentSlide].title}
                </h3>
                <p className="text-sm md:text-base text-white/90">
                  {slideImages[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="minimal"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border-none h-10 w-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="minimal"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border-none h-10 w-10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {slideImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentSlide
                    ? "bg-[#313a6f] scale-110"
                    : "bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="bg-background/50 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#313a6f]/30 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              
              <CardHeader className="pt-6">
                <div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="mt-1">{product.category}</CardDescription>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center pt-0">
                <Button 
                  variant="minimal" 
                  size="sm"
                  onClick={() => setSelectedProduct(product)}
                >
                  Detayları Gör
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Product Details Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-3xl bg-background/95 backdrop-blur-lg border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center">
              {selectedProduct?.name || 'Product Details'}
              {selectedProduct?.category === 'Exotic' && (
                <Sparkles className="h-5 w-5 ml-2 text-[#313a6f]" />
              )}
            </DialogTitle>
            <DialogDescription>
              {selectedProduct ? `Lüks mobilyalar için premium ${selectedProduct.category.toLowerCase()} kaplama` : 'Ürün bilgileri yükleniyor...'}
            </DialogDescription>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="aspect-square overflow-hidden rounded-md border border-white/10">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-[#313a6f] mb-2">Açıklama</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProduct.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-[#313a6f] mb-2">Özellikler</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-[#313a6f]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button variant="premium" className="w-full sm:w-auto">
                    Teklif İste
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}