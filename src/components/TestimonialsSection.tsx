import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Menon',
    role: 'Lost 25kg in 8 months',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    quote: "Oxygen Gym changed my life. I walked in overweight and unmotivated, and the trainers here helped me discover strength I never knew I had. The community pushes you to be better every single day."
  },
  {
    name: 'Priya Nair',
    role: 'Fitness enthusiast for 2 years',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    quote: "As a working mother, finding time for fitness was hard. The flexible hours and supportive environment at Oxygen made it possible. I feel stronger, healthier, and more confident than ever."
  },
  {
    name: 'Rahul Krishnan',
    role: 'Gained 12kg muscle mass',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    quote: "The personal training here is top-notch. My trainer created a program specifically for my goals, and the results speak for themselves. Best investment I have ever made in myself."
  },
  {
    name: 'Anjali Thomas',
    role: 'Marathon runner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    quote: "Training at Oxygen prepared me to complete my first marathon. The cardio equipment and endurance programs here are exceptional. The staff genuinely cares about your success."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">
            SUCCESS <span className="text-primary">STORIES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real transformations from real members who made the commitment to change their lives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 relative group hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
