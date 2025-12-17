import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What are the gym operating hours?',
    answer: 'We are open Monday to Saturday from 5:00 AM to 10:00 PM, and Sunday from 6:00 AM to 8:00 PM. Our early morning and late evening hours ensure you can fit your workout into any schedule.'
  },
  {
    question: 'Do you offer personal training sessions?',
    answer: 'Yes! We have certified personal trainers available for one-on-one sessions. Personal training is included in our Premium and Elite memberships, or can be added to any plan for an additional fee. Our trainers specialize in weight loss, muscle building, sports conditioning, and rehabilitation.'
  },
  {
    question: 'Can I try the gym before committing to a membership?',
    answer: 'Absolutely! We offer a complimentary one-day trial pass for first-time visitors. Simply visit us with a valid ID, and our staff will give you a tour of our facilities and let you experience a full day at Oxygen Gym.'
  },
  {
    question: 'What amenities are included with membership?',
    answer: 'All memberships include access to our state-of-the-art equipment, locker rooms with showers, free Wi-Fi, and drinking water stations. Premium and Elite members also get access to group classes, sauna, steam room, and towel service.'
  },
  {
    question: 'Is there parking available?',
    answer: 'Yes, we have free parking available for all members. Our facility has a dedicated parking area that can accommodate over 50 vehicles, with additional two-wheeler parking space.'
  },
  {
    question: 'Can I freeze my membership if I travel?',
    answer: 'Yes, we understand life happens. Premium and Elite members can freeze their membership for up to 30 days per year at no additional cost. Basic members can freeze for up to 14 days. Just inform our front desk at least 3 days in advance.'
  },
  {
    question: 'Do you have separate areas for women?',
    answer: 'Yes, we have a dedicated women-only workout zone with cardio equipment, strength machines, and free weights. We also offer women-only group classes and have female trainers available upon request.'
  },
  {
    question: 'What payment options do you accept?',
    answer: 'We accept cash, all major credit/debit cards, UPI payments, and net banking. We also offer EMI options for annual memberships through select banks. Monthly auto-debit facility is available for hassle-free renewals.'
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">
            FREQUENTLY <span className="text-primary">ASKED</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We have answers. Find everything you need to know about Oxygen Gym.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
