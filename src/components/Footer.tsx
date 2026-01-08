import { Link } from "react-router-dom";
import { Diamond, Facebook, Instagram, Twitter, Youtube, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Diamond className="w-8 h-8 text-primary" />
              <span className="font-display text-2xl font-semibold text-gold-gradient">
                Lumière Jewels
              </span>
            </Link>
            <p className="font-body text-cream/80 leading-relaxed max-w-md">
              Crafting timeless elegance since 1985. Each piece tells a story of 
              artistry, passion, and uncompromising quality. Experience the luxury 
              you deserve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Gallery", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Contact Us" ? "/contact" : link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="font-body text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-6">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-cream/70">
              <li>123 Diamond Street</li>
              <li>Mumbai, India 400001</li>
              <li>+91 98765 43210</li>
              <li>hello@lumierejewels.com</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-6 flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              Working Hours
            </h4>
            <ul className="space-y-3 font-body text-cream/70">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>11:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-sm text-cream/60">
            © 2024 Lumière Jewels. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-cream/70 hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="Social media"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
