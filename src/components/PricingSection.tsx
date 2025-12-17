import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '1,499',
    period: '/month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Full gym access',
      'Locker room access',
      'Basic equipment usage',
      'Open gym hours (6AM-10PM)',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '2,999',
    period: '/month',
    description: 'Our most popular plan for dedicated fitness enthusiasts',
    features: [
      'Everything in Basic',
      '24/7 gym access',
      'All group classes included',
      '2 personal training sessions',
      'Nutrition consultation',
      'Sauna & steam room',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '4,999',
    period: '/month',
    description: 'The ultimate fitness experience with exclusive perks',
    features: [
      'Everything in Premium',
      'Unlimited personal training',
      'Custom meal plans',
      'Priority class booking',
      'Guest passes (2/month)',
      'Premium locker',
      'Sports massage (monthly)',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Membership Plans</p>
          <h2 className="section-title text-foreground mb-6">
            INVEST IN <span className="text-gradient">YOURSELF</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your goals. All memberships include access to our premium facilities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg p-8 transition-all duration-500 ${
                plan.popular
                  ? 'card-glass border-primary/50 scale-105 shadow-[0_0_40px_hsl(0_84%_50%_/_0.2)]'
                  : 'card-glass hover:border-primary/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-foreground text-xs uppercase tracking-wider rounded-full font-semibold">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-foreground tracking-wide mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground">₹</span>
                  <span className="font-display text-5xl text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-3">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block text-center py-4 rounded-lg font-semibold uppercase tracking-wider transition-all duration-300 ${
                  plan.popular
                    ? 'btn-primary'
                    : 'border-2 border-border hover:border-primary hover:text-primary'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
