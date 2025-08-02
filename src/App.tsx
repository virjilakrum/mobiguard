import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AboutSection } from '@/components/sections/AboutSection';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Header />
        <main>
          <HeroSection />
          <ProductsSection />
          <GallerySection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;