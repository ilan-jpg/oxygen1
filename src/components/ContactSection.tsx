import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us today or reach out to learn more about our facilities and membership options.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">
                    MG Road, Near City Centre<br />
                    Kannur, Kerala 670001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">+91 497 123 4567</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">info@oxygengym.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    Mon - Sat: 5:00 AM - 10:00 PM<br />
                    Sunday: 6:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Follow us on social media</p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
