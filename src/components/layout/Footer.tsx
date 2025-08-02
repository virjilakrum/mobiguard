import { Layers, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Music2 } from 'lucide-react'; // TikTok icon
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/src/images/mobiguard_logo.png"
                alt="MOBIGUARD Logo"
                className="h-48 w-48 object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Profesyonel koruma filmleri ile yüzeylerinizi koruyun. TPH, TPU ve 3M PPF teknolojileriyle uzun ömürlü çözümler.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/mobiguardtr?igsh=MW0yNTFnZ28yZHg1aw%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#313a6f] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/mobiguardtr?s=11&t=kUTgNKTRXIAiLJdMr2OtMA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#313a6f] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@mobiguardtr?_t=ZS-8yXbG0eWOmK&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#313a6f] transition-colors"
              >
                <Music2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-[#313a6f]">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#313a6f] transition-colors">Ürünler</a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#313a6f] transition-colors">Galeri</a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#313a6f] transition-colors">Hakkımızda</a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#313a6f] transition-colors">Referanslar</a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#313a6f] transition-colors">İletişim</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-[#313a6f]">İletişim</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-[#313a6f]" />
                <span>Horozluhan mah. Şenyurt sok. No 22, Selçuklu / Konya</span>
              </li>
              <li className="text-sm text-muted-foreground flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#313a6f]" />
                <span>+90 538 644 03 39</span>
              </li>
              <li className="text-sm text-muted-foreground flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#313a6f]" />
                <span>info@mobiguards.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-[#313a6f]">Bülten</h3>
            <p className="text-sm text-muted-foreground">
              Yeni ürünler ve özel teklifler hakkında güncellemeler almak için abone olun.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-white/5" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2025 MOBIGUARD. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-[#313a6f]">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-[#313a6f]">
              Hizmet Şartları
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-[#313a6f]">
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}