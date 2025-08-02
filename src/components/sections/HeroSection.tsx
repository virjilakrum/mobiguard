import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Spline from '@splinetool/react-spline';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background overlay with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 z-10" 
        style={{backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(49, 58, 111, 0.4) 0%, rgba(10, 10, 15, 0.9) 100%)'}}
      />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/WhatsApp Image 2025-08-02 at 12.31.35.jpeg)',
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Decorative elements */}
      <div className={cn(
        "absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full",
        "bg-[#313a6f]/20 blur-[100px] z-0"
      )} />
      
      <div className="container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="block text-[#313a6f]">Profesyonel Yüzey</span>
                <span className="block">Koruma Sistemleri</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4">
                Mobiguard, konut, ofis ve ticari alanlarda;<br />
                <span className="inline-flex items-center gap-3 mt-2">
                  <span className="text-[#313a6f]">✦</span> Mermer
                  <span className="text-[#313a6f]">✦</span> Cam
                  <span className="text-[#313a6f]">✦</span> Ahşap
                  <span className="text-[#313a6f]">✦</span> Lake
                  <span className="text-[#313a6f]">✦</span> Tezgâh
                </span><br />
                yüzeylerine profesyonel kaplama hizmeti sunar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="premium" size="xl" className="group" onClick={() => {
                const productsSection = document.getElementById('products');
                if (productsSection) {
                  const headerHeight = 80;
                  const elementPosition = productsSection.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: elementPosition - headerHeight,
                    behavior: 'smooth'
                  });
                }
              }}>
                Ürün Gamını Keşfet
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-4 pt-8 text-sm text-muted-foreground animate-fadeIn">
              <div className="flex items-center group cursor-pointer animate-slideUp hover:text-foreground transition-all duration-500 transform hover:scale-105" style={{ animationDelay: '0.8s' }}>
                <div className="w-1 h-1 rounded-full bg-[#313a6f] mr-2 animate-pulse-glow group-hover:w-2 group-hover:h-2 group-hover:shadow-lg group-hover:shadow-[#313a6f]/50 transition-all duration-300" />
                <span>TPH & TPU Teknolojisi</span>
              </div>
              <div className="flex items-center group cursor-pointer animate-slideUp hover:text-foreground transition-all duration-500 transform hover:scale-105" style={{ animationDelay: '1s' }}>
                <div className="w-1 h-1 rounded-full bg-[#313a6f] mr-2 animate-pulse-glow group-hover:w-2 group-hover:h-2 group-hover:shadow-lg group-hover:shadow-[#313a6f]/50 transition-all duration-300" />
                <span>3M PPF Markası</span>
              </div>
              <div className="flex items-center group cursor-pointer animate-slideUp hover:text-foreground transition-all duration-500 transform hover:scale-105" style={{ animationDelay: '1.2s' }}>
                <div className="w-1 h-1 rounded-full bg-[#313a6f] mr-2 animate-pulse-glow group-hover:w-2 group-hover:h-2 group-hover:shadow-lg group-hover:shadow-[#313a6f]/50 transition-all duration-300" />
                <span>UV Dayanımı</span>
              </div>
              <div className="flex items-center group cursor-pointer animate-slideUp hover:text-foreground transition-all duration-500 transform hover:scale-105" style={{ animationDelay: '1.4s' }}>
                <div className="w-1 h-1 rounded-full bg-[#313a6f] mr-2 animate-pulse-glow group-hover:w-2 group-hover:h-2 group-hover:shadow-lg group-hover:shadow-[#313a6f]/50 transition-all duration-300" />
                <span>Kendini Yenileme</span>
              </div>
            </div>
          </div>

          {/* Right Spline Animation */}
          <div className="relative h-[500px] lg:h-[600px] w-full">
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#313a6f]/10 to-transparent backdrop-blur-sm border border-white/10">
              <Spline
                scene="https://prod.spline.design/ygyPt6lnebhqVV2J/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* Hide "Build with Spline" watermark - Larger coverage */}
            <div className="absolute bottom-0 right-0 w-48 h-20 bg-gradient-to-tl from-background/95 via-background/60 to-transparent z-10 rounded-br-2xl" />

            {/* MOBIGUARD Logo Overlay - Much Bigger Logo */}
            <div className="absolute bottom-6 right-6 z-20">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                <img
                  src="/images/mobiguard_logo.png"
                  alt="MOBIGUARD Logo"
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>

            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}