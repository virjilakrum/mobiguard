import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className={cn(
        "absolute bottom-0 left-[-150px] w-[300px] h-[300px] rounded-full",
        "bg-[#313a6f]/10 blur-[100px] z-0"
      )} />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Müşterilerimiz Ne Diyor
            </h2>
            <p className="text-muted-foreground">
              Koruma filmlerimizle projelerini güvenli hale getiren profesyonellerden dinleyin.
            </p>
          </div>
          
          <div className="relative">
            <Card className="bg-background/30 backdrop-blur-sm border border-white/10 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-[#313a6f]/20">
                <Quote className="h-24 w-24 rotate-180" />
              </div>
              
              <CardContent className="pt-10 px-6 md:px-10 pb-10 relative z-10">
                <div className="space-y-6 text-center">
                  <blockquote className="text-lg md:text-xl italic font-medium leading-relaxed text-foreground">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div className="flex flex-col items-center space-y-3 pt-4">
                    <Avatar className="h-14 w-14 border-2 border-[#313a6f]/20">
                      <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                      <AvatarFallback className="bg-[#313a6f]/10">
                        {testimonials[activeIndex].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonials[activeIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-8 space-x-2">
              <Button 
                variant="minimal" 
                size="icon"
                onClick={handlePrev}
                className="h-10 w-10 rounded-full border border-white/10"
              >
                ←
              </Button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-colors",
                      index === activeIndex ? "bg-[#313a6f]" : "bg-white/20"
                    )}
                  />
                ))}
              </div>
              <Button 
                variant="minimal" 
                size="icon"
                onClick={handleNext}
                className="h-10 w-10 rounded-full border border-white/10"
              >
                →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}