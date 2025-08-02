import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Ana Sayfa', href: '#' },
  { name: 'Ürünler', href: '#products' },
  { name: 'Galeri', href: '#gallery' },
  { name: 'Hakkımızda', href: '#about' },
  { name: 'İletişim', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const handleQuoteRequest = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const headerHeight = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
      
      // Switch to quote tab after scrolling
      setTimeout(() => {
        const quoteTab = document.querySelector('[data-value="quote"]') as HTMLElement;
        if (quoteTab) {
          quoteTab.click();
        }
      }, 800);
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const headerHeight = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 min-w-0 cursor-pointer" onClick={() => handleNavClick('#hero')}>
            <div className="flex items-center space-x-2">
              <img
                src="/images/mobiguard_logo.png"
                alt="MOBIGUARD Logo"
                className="h-48 w-48 flex-shrink-0 object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="relative text-sm font-medium tracking-wide text-foreground/80 hover:text-[#313a6f] transition-all duration-300 group py-2"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#313a6f] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 min-w-0">
            <Button variant="minimal" size="sm" className="font-medium" onClick={handleQuoteRequest}>
              Teklif Al
            </Button>
            <Button variant="premium" size="sm" className="font-medium" onClick={handleContactClick}>
              İletişime Geç
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:w-[400px] bg-background/95 backdrop-blur-lg border-l border-white/10">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 cursor-pointer" onClick={() => handleNavClick('#hero')}>
                  <div className="flex items-center space-x-2">
                    <img 
                      src="/assets/mobiguard_logo.png" 
                      alt="MOBIGUARD Logo" 
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Menüyü kapat</span>
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-1 flex-1">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center px-4 py-3 text-base font-medium rounded-lg hover:bg-white/5 hover:text-[#313a6f] transition-all duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
                
                <div className="pt-6 mt-auto border-t border-white/10 space-y-3">
                  <Button 
                    variant="minimal" 
                    className="w-full justify-center font-medium" 
                    onClick={handleQuoteRequest}
                  >
                    Teklif Al
                  </Button>
                  <Button 
                    variant="premium" 
                    className="w-full justify-center font-medium" 
                    onClick={handleContactClick}
                  >
                    İletişime Geç
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}