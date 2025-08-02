import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Ad en az 2 karakter olmalıdır.",
  }),
  email: z.string().email({
    message: "Lütfen geçerli bir e-posta adresi girin.",
  }),
  subject: z.string().min(2, {
    message: "Konu gereklidir.",
  }),
  message: z.string().min(10, {
    message: "Mesaj en az 10 karakter olmalıdır.",
  }),
});

const quoteSchema = z.object({
  company: z.string().min(2, {
    message: "Şirket adı en az 2 karakter olmalıdır.",
  }),
  contact: z.string().min(2, {
    message: "İletişim kişisi adı gereklidir.",
  }),
  email: z.string().email({
    message: "Lütfen geçerli bir e-posta adresi girin.",
  }),
  phone: z.string().min(5, {
    message: "Telefon numarası gereklidir.",
  }),
  furnitureType: z.string({
    required_error: "Lütfen mobilya türü seçin.",
  }),
  roomType: z.string({
    required_error: "Lütfen mekan türü seçin.",
  }),
  veneerType: z.string().min(2, {
    message: "Kaplama türü gereklidir.",
  }),
  veneerFinish: z.string().min(2, {
    message: "Yüzey işlemi gereklidir.",
  }),
  dimensions: z.string().min(1, {
    message: "Ölçüler gereklidir.",
  }),
  quantity: z.string().min(1, {
    message: "Miktar gereklidir.",
  }),
  budget: z.string().optional(),
  timeline: z.string({
    required_error: "Lütfen teslim süresi seçin.",
  }),
  project: z.string().min(10, {
    message: "Proje açıklaması en az 10 karakter olmalıdır.",
  }),
});

export function ContactSection() {
  const contactForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  const quoteForm = useForm<z.infer<typeof quoteSchema>>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      company: "",
      contact: "",
      email: "",
      phone: "",
      furnitureType: "",
      roomType: "",
      veneerType: "",
      veneerFinish: "",
      dimensions: "",
      quantity: "",
      budget: "",
      timeline: "",
      project: "",
    },
  });
  
  function onContactSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Implementation would go here
  }
  
  function onQuoteSubmit(values: z.infer<typeof quoteSchema>) {
    // Create email content
    const subject = `Koruma Filmi Teklif Talebi - ${values.company}`;
    const body = `
Koruma Filmi Teklif Talebi

Şirket Bilgileri:
- Şirket: ${values.company}
- İletişim Kişisi: ${values.contact}
- E-posta: ${values.email}
- Telefon: ${values.phone}

Proje Detayları:
- Uygulama Alanı: ${values.furnitureType}
- Kullanım Alanı: ${values.roomType}
- Film Türü: ${values.veneerType}
- Yüzey Tipi: ${values.veneerFinish}
- Ölçüler: ${values.dimensions}
- Miktar: ${values.quantity} m²
- Bütçe: ${values.budget || 'Belirtilmedi'}
- Teslim Süresi: ${values.timeline}

Proje Açıklaması:
${values.project}

Bu talep ${new Date().toLocaleDateString('tr-TR')} tarihinde gönderilmiştir.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@mobiguards.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  }
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className={cn(
        "absolute top-[-150px] right-[-150px] w-[300px] h-[300px] rounded-full",
        "bg-[#313a6f]/10 blur-[100px] z-0"
      )} />
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            İletişime Geçin
          </h2>
          <p className="text-muted-foreground">
            Koruma filmi ihtiyaçlarınız için kişiselleştirilmiş yardım almak üzere uzman ekibimizle iletişime geçin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <Card className="bg-background/50 backdrop-blur-sm border border-white/10 lg:col-span-2">
            <CardHeader>
              <CardTitle>Bizimle İletişime Geçin</CardTitle>
              <CardDescription>
                Aşağıdaki formu doldurun, 24 saat içinde size geri döneceğiz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="message" className="w-full">
                <TabsList className="grid grid-cols-2 w-full mb-6">
                  <TabsTrigger value="message" data-value="message">Mesaj Gönder</TabsTrigger>
                  <TabsTrigger value="quote" data-value="quote">Teklif İste</TabsTrigger>
                </TabsList>
                
                <TabsContent value="message">
                  <Form {...contactForm}>
                    <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={contactForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ad</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Adınız" 
                                  {...field} 
                                  className="bg-background/30 border-white/10"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={contactForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-posta</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="E-posta adresiniz" 
                                  type="email" 
                                  {...field} 
                                  className="bg-background/30 border-white/10"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={contactForm.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Konu</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Mesajınızın konusu" 
                                {...field} 
                                className="bg-background/30 border-white/10"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={contactForm.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mesaj</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Mesajınız" 
                                {...field} 
                                className="min-h-[120px] bg-background/30 border-white/10"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" variant="premium" className="w-full">
                        Mesaj Gönder
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
                
                <TabsContent value="quote">
                  <Form {...quoteForm}>
                    <form onSubmit={quoteForm.handleSubmit(onQuoteSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Şirket</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Şirketiniz" 
                                  {...field} 
                                  className="bg-background/30 border-white/10"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={quoteForm.control}
                          name="contact"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>İletişim Kişisi</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="İletişim kişisi adı" 
                                  {...field} 
                                  className="bg-background/30 border-white/10"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-posta</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="E-posta adresiniz" 
                                  type="email" 
                                  {...field} 
                                  className="bg-background/30 border-white/10"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={quoteForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefon</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Telefon numaranız" 
                                  {...field} 
                                  className="bg-background/30 border-white/10"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="furnitureType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Uygulama Alanı</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/30 border-white/10">
                                    <SelectValue placeholder="Uygulama alanı seçin" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="mobilya-yuzey">Mobilya Yüzeyi</SelectItem>
                                  <SelectItem value="kapak-panel">Kapak/Panel</SelectItem>
                                  <SelectItem value="mutfak-tezgah">Mutfak Tezgahı</SelectItem>
                                  <SelectItem value="banyo-dolap">Banyo Dolabı</SelectItem>
                                  <SelectItem value="ofis-mobilya">Ofis Mobilyası</SelectItem>
                                  <SelectItem value="dekoratif-panel">Dekoratif Panel</SelectItem>
                                  <SelectItem value="ahsap-yuzey">Ahşap Yüzey</SelectItem>
                                  <SelectItem value="laminat-yuzey">Laminat Yüzey</SelectItem>
                                  <SelectItem value="diger">Diğer</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={quoteForm.control}
                          name="roomType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Kullanım Alanı</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/30 border-white/10">
                                    <SelectValue placeholder="Kullanım alanı seçin" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="ev">Ev</SelectItem>
                                  <SelectItem value="yatak-odasi">Yatak Odası</SelectItem>
                                  <SelectItem value="salon">Salon</SelectItem>
                                  <SelectItem value="yemek-odasi">Yemek Odası</SelectItem>
                                  <SelectItem value="mutfak">Mutfak</SelectItem>
                                  <SelectItem value="banyo">Banyo</SelectItem>
                                  <SelectItem value="ofis">Ofis</SelectItem>
                                  <SelectItem value="ticari-alan">Ticari Alan</SelectItem>
                                  <SelectItem value="otel">Otel</SelectItem>
                                  <SelectItem value="restoran">Restoran</SelectItem>
                                  <SelectItem value="magaza">Mağaza</SelectItem>
                                  <SelectItem value="hastane">Hastane</SelectItem>
                                  <SelectItem value="diger">Diğer</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="veneerType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Film Türü</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Örn: TPH, TPU, 3M PPF" 
                                  {...field} 
                                  className="bg-background/30 border-white/10"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={quoteForm.control}
                          name="veneerFinish"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Yüzey Tipi</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Örn: Mat, Parlak, Şeffaf" 
                                  {...field} 
                                  className="bg-background/30 border-white/10"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="dimensions"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ölçüler</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Örn: 200x100x5 cm" 
                                  {...field} 
                                  className="bg-background/30 border-white/10"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={quoteForm.control}
                          name="quantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Miktar (m²)</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="İhtiyaç duyulan miktar" 
                                  {...field} 
                                  className="bg-background/30 border-white/10"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Bütçe (Opsiyonel)</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Örn: 10.000 TL" 
                                  {...field} 
                                  className="bg-background/30 border-white/10"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={quoteForm.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Teslim Süresi</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/30 border-white/10">
                                    <SelectValue placeholder="Teslim süresi seçin" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="acil">Acil (1-2 hafta)</SelectItem>
                                  <SelectItem value="normal">Normal (3-4 hafta)</SelectItem>
                                  <SelectItem value="esnek">Esnek (1-2 ay)</SelectItem>
                                  <SelectItem value="planlama">Planlama Aşamasında</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={quoteForm.control}
                        name="project"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Proje Açıklaması</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Projenizi detaylı olarak açıklayın, özel istekleriniz varsa belirtin" 
                                {...field} 
                                className="min-h-[120px] bg-background/30 border-white/10"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" variant="premium" className="w-full" size="lg">
                        Teklif İste
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-background/50 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle>İletişim Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-[#313a6f]">📍</span>
                  <div>
                    <p className="font-medium">Adres</p>
                    <p className="text-sm text-muted-foreground">Horozluhan mah. Şenyurt sok. No 22</p>
                    <p className="text-sm text-muted-foreground">Selçuklu / Konya</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-[#313a6f]">📞</span>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-sm text-muted-foreground">+90 534 237 22 22</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-[#313a6f]">✉️</span>
                  <div>
                    <p className="font-medium">E-posta</p>
                    <p className="text-sm text-muted-foreground">info@mobiguards.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>
    </section>
  );
}