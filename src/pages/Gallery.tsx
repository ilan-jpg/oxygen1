import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    title: 'Weight Training Area'
  },
  {
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop',
    title: 'Cardio Zone'
  },
  {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop',
    title: 'Free Weights Section'
  },
  {
    url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&h=400&fit=crop',
    title: 'Training Session'
  },
  {
    url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    title: 'Personal Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop',
    title: 'Group Classes'
  },
  {
    url: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600&h=400&fit=crop',
    title: 'Boxing Area'
  },
  {
    url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop',
    title: 'Modern Equipment'
  },
  {
    url: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=600&h=400&fit=crop',
    title: 'Gym Interior'
  },
];

const LazyImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      />
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl tracking-wider mb-6">
            OUR <span className="text-primary">GALLERY</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art facility and see where transformation happens every day.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              >
                <LazyImage
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl tracking-wider text-foreground">
                      {image.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-lg transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
