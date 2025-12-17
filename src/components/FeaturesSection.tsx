import { Dumbbell, Users, Clock, Trophy, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Premium Equipment',
    description: 'World-class machines and free weights from top brands like Technogym and Life Fitness.',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Certified professionals with years of experience to guide your fitness journey.',
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Train on your schedule with round-the-clock gym access for all members.',
  },
  {
    icon: Trophy,
    title: 'Personal Training',
    description: 'Customized workout plans and one-on-one coaching for maximum results.',
  },
  {
    icon: Heart,
    title: 'Cardio Zone',
    description: 'Dedicated cardio area with treadmills, bikes, and rowing machines.',
  },
  {
    icon: Zap,
    title: 'Functional Training',
    description: 'Modern functional fitness area for CrossFit-style workouts.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Why Choose Us</p>
          <h2 className="section-title text-foreground mb-6">
            BUILT FOR <span className="text-gradient">CHAMPIONS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience fitness like never before with our premium facilities and dedicated team in the heart of Kannur.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-glass p-8 rounded-lg group hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
