const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-display text-2xl tracking-wider text-foreground">
            OXY<span className="text-primary">GEN</span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#classes" className="hover:text-foreground transition-colors">Classes</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Oxygen Gym Kannur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
