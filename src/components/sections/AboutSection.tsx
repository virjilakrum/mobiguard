import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Award, Users, Globe, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration, start]);

  return { count, ref };
}

// Animated counter component
function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: string; suffix?: string; duration?: number }) {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const { count, ref } = useCountUp(numericValue, duration);
  
  return (
    <div ref={ref} className="text-3xl font-bold text-[#313a6f] mb-2 transition-all duration-300">
      {count}{suffix}
    </div>
  );
}

const stats = [
  { number: '10', suffix: '+', label: 'Yıllık Deneyim', duration: 1500 },
  { number: '1000', suffix: '+', label: 'Tamamlanan Uygulama', duration: 2500 },
  { number: '50', suffix: '+', label: 'Mutlu Müşteri', duration: 2000 },
  { number: '3', suffix: '', label: 'Ana Ürün Kategorisi', duration: 1800 },
];

const values = [
  {
    icon: Award,
    title: 'Teknoloji Odaklı',
    description: 'TPH, TPU ve 3M PPF teknolojileriyle çalışıyoruz'
  },
  {
    icon: Users,
    title: 'Uzman Ekip',
    description: 'Koruma filmi konusunda uzman profesyonel ekibimiz'
  },
  {
    icon: Globe,
    title: 'Global Markalar',
    description: '3M gibi dünya çapında tanınan marklarla çalışıyoruz'
  },
  {
    icon: Sparkles,
    title: 'Özel Çözümler',
    description: 'Her koruma ihtiyacına özel çözümler geliştiriyoruz'
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className={cn(
        "absolute top-[20%] left-[-200px] w-[400px] h-[400px] rounded-full",
        "bg-[#313a6f]/10 blur-[100px] z-0"
      )} />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="border-[#313a6f] text-[#313a6f] px-4 py-1">
            Hakkımızda
          </Badge>
          <div className="flex items-center justify-center space-x-4">
            <img
              src="/src/images/mobiguard_logo.png"
              alt="MOBIGUARD Logo"
              className="h-64 w-64 object-contain animate-pulse"
            />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              ile Tanışın
            </h2>
          </div>
          <p className="text-muted-foreground">
            Koruma filmi sektöründe uzmanlaşmış ekibimizle, TPH, TPU ve 3M PPF teknolojilerinde öncü çözümler sunuyoruz. 
            Kalite, güvenilirlik ve müşteri memnuniyeti odaklı yaklaşımımızla sektörde güvenilir partner konumdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-muted-foreground leading-relaxed">
                Koruma filmi sektöründe Türkiye'nin en güvenilir ve yenilikçi markası olmak. 
                TPH, TPU ve 3M PPF teknolojileriyle müşterilerimizin koruma ihtiyaçlarını karşılamak için 
                en kaliteli malzemeler ve en son teknolojileri kullanıyoruz.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-muted-foreground leading-relaxed">
                Her projede mükemmellik standardını yakalamak, müşteri beklentilerini aşmak ve 
                sürdürülebilir kalite anlayışıyla sektöre değer katmak. Uzman ekibimiz ve TPH, TPU, 3M PPF 
                ürün gamımızla her koruma ihtiyacına uygun çözümler sunuyoruz.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-3 text-[#313a6f]" />
                <span className="text-sm">Profesyonel Uygulama Tekniği</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-3 text-[#313a6f]" />
                <span className="text-sm">UV Dayanımı Garantisi</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-3 text-[#313a6f]" />
                <span className="text-sm">7/24 Müşteri Destek Hizmeti</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-3 text-[#313a6f]" />
                <span className="text-sm">Türkiye Geneli Hızlı Teslimat</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/src/images/Mobiguard PP.jpg"
              alt="MOBIGUARD Koruma Filmi Uygulaması"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#313a6f]/20 to-transparent rounded-lg" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fadeIn">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={cn(
                "bg-background/50 backdrop-blur-sm border border-white/10 text-center",
                "transform transition-all duration-500 hover:scale-105 hover:border-[#313a6f]/40",
                "hover:shadow-lg hover:shadow-[#313a6f]/20 group cursor-pointer",
                "animate-slideUp"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6 relative overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#313a6f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <AnimatedCounter 
                    value={stat.number} 
                    suffix={stat.suffix} 
                    duration={stat.duration}
                  />
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
                
                {/* Sparkle effect on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <Sparkles className="h-4 w-4 text-[#313a6f]/60" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className={cn(
                "bg-background/50 backdrop-blur-sm border border-white/10 text-center group",
                "hover:border-[#313a6f]/30 transition-all duration-500 transform hover:scale-105",
                "hover:shadow-lg hover:shadow-[#313a6f]/10 animate-slideUp"
              )}
              style={{ animationDelay: `${(index + 4) * 150}ms` }}
            >
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-[#313a6f]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#313a6f]/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <value.icon className="h-6 w-6 text-[#313a6f] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-lg group-hover:text-[#313a6f] transition-colors duration-300">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="premium" 
            size="lg"
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                const headerHeight = 80;
                const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: elementPosition - headerHeight,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Bizimle Çalışın
          </Button>
        </div>
      </div>
    </section>
  );
}