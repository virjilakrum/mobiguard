import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const galleryImages = [
  {
    id: 1,
    src: "/src/images/WhatsApp Image 2025-08-02 at 12.30.15.jpeg",
    alt: "MOBIGUARD koruma filmi uygulaması",
    category: "Profesyonel Uygulama"
  },
  {
    id: 2,
    src: "/src/images/WhatsApp Image 2025-08-02 at 12.30.16 (1).jpeg",
    alt: "MOBIGUARD koruma filmi detayı",
    category: "Kalite Kontrol"
  },
  {
    id: 3,
    src: "/src/images/WhatsApp Image 2025-08-02 at 12.30.16.jpeg",
    alt: "MOBIGUARD koruma filmi işçiliği",
    category: "Uzman Uygulama"
  },
  {
    id: 4,
    src: "/src/images/WhatsApp Image 2025-08-02 at 12.31.35.jpeg",
    alt: "MOBIGUARD koruma filmi sonucu",
    category: "Tamamlanmış Proje"
  },
  {
    id: 5,
    src: "/src/images/WhatsApp Image 2025-08-02 at 12.31.36 (1).jpeg",
    alt: "MOBIGUARD koruma filmi kalitesi",
    category: "Premium Kalite"
  },
  {
    id: 6,
    src: "/src/images/WhatsApp Image 2025-08-02 at 12.31.36 (2).jpeg",
    alt: "MOBIGUARD koruma filmi mükemmelliği",
    category: "Mükemmel Finish"
  },
  {
    id: 7,
    src: "/src/images/WhatsApp Image 2025-08-02 at 12.31.36 (3).jpeg",
    alt: "MOBIGUARD koruma filmi detay çalışması",
    category: "Detay İşçiliği"
  },
  {
    id: 8,
    src: "/src/images/WhatsApp Image 2025-08-02 at 12.31.36.jpeg",
    alt: "MOBIGUARD koruma filmi profesyonel sonuç",
    category: "Profesyonel Sonuç"
  }
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className={cn(
        "absolute top-[30%] right-[-200px] w-[400px] h-[400px] rounded-full",
        "bg-[#313a6f]/10 blur-[100px] z-0"
      )} />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="border-[#313a6f] text-[#313a6f] px-4 py-1">
            Projelerimiz
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ekip Uygulama Galerisi
          </h2>
          <p className="text-muted-foreground">
            TPH, TPU ve 3M PPF filmlerimizin yüzeyleri nasıl mükemmel şekilde koruduğunu keşfedin. Tamamlanmış uygulama projelerimizi inceleyin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg border border-white/5 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <AspectRatio ratio={4/3} className="bg-muted">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <Badge className="self-start mb-2 bg-[#313a6f]/80 hover:bg-[#313a6f] border-none">
                    {image.category}
                  </Badge>
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Viewer Dialog */}
      <Dialog 
        open={selectedImage !== null} 
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="sm:max-w-4xl p-0 bg-background/90 backdrop-blur-lg border border-white/10 overflow-hidden" hideCloseButton>
          {selectedImage !== null && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{galleryImages[selectedImage].alt}</DialogTitle>
              </DialogHeader>
              <div className="relative">
                <img 
                  src={galleryImages[selectedImage].src} 
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <Badge className="mb-2 bg-[#313a6f]/80 border-none">
                    {galleryImages[selectedImage].category}
                  </Badge>
                  <p className="text-white text-sm md:text-base">
                    {galleryImages[selectedImage].alt}
                  </p>
                </div>
                <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between pointer-events-none">
                  <Button 
                    variant="minimal" 
                    size="icon" 
                    className="bg-black/20 backdrop-blur-sm h-10 w-10 pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
                    }}
                  >
                    ←
                  </Button>
                  <Button 
                    variant="minimal" 
                    size="icon" 
                    className="bg-black/20 backdrop-blur-sm h-10 w-10 pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((selectedImage + 1) % galleryImages.length);
                    }}
                  >
                    →
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}