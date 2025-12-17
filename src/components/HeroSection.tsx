import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-gym.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fitness training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <p className="text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-in font-medium">
            Premium Fitness in Kannur
          </p>
          
          <h1 className="section-title text-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            TRANSFORM<br />
            YOUR <span className="text-gradient">LIMITS</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Kerala's most advanced fitness destination. State-of-the-art equipment, 
            expert trainers, and a community dedicated to excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="#pricing" className="btn-primary inline-flex items-center justify-center gap-2 group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="btn-outline inline-flex items-center justify-center">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
