import { Building2, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 mr-2 text-accent" />
              <h3 className="text-2xl font-bold">Prime Crest Construction</h3>
            </div>
            <p className="text-white/80 mb-4">
              Leading building and civil engineering contractor delivering innovative, 
              sustainable infrastructure solutions across Tanzania.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">Mbeya, Tanzania</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">+255 XXX XXX XXX</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">info@primecrest.co.tz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Prime Crest Construction Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
