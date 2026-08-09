import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="mb-4">
              <span className="block font-heading font-bold text-2xl">ABHAYA</span>
              <span className="block text-xs uppercase tracking-widest text-soft">Homoeopathic Center</span>
            </div>
            <p className="text-soft text-sm leading-relaxed mb-6">
              Healing From Within. We provide patient-focused care for allergic rhinitis, adenoid concerns, asthma, eczema, urticaria, and respiratory wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-soft hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/drvarunvaaz" target="_blank" rel="noreferrer" className="text-soft hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@drvarunvasudev" target="_blank" rel="noreferrer" className="text-soft hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-leaf">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about-dr-varun" className="text-soft hover:text-white transition-colors text-sm">About Dr Varun</Link></li>
              <li><Link to="/allergy-conditions" className="text-soft hover:text-white transition-colors text-sm">Conditions We Treat</Link></li>
              <li><Link to="/blog" className="text-soft hover:text-white transition-colors text-sm">Health Blog</Link></li>
              <li><Link to="/gallery" className="text-soft hover:text-white transition-colors text-sm">Patient Gallery</Link></li>
              <li><Link to="/testimonials" className="text-soft hover:text-white transition-colors text-sm">Patient Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-leaf">Conditions</h3>
            <ul className="space-y-3">
              <li><Link to="/allergic-rhinitis" className="text-soft hover:text-white transition-colors text-sm">Allergic Rhinitis</Link></li>
              <li><Link to="/adenoid-enlargement" className="text-soft hover:text-white transition-colors text-sm">Adenoid Enlargement</Link></li>
              <li><Link to="/asthma-wheezing" className="text-soft hover:text-white transition-colors text-sm">Asthma & Wheezing</Link></li>
              <li><Link to="/eczema" className="text-soft hover:text-white transition-colors text-sm">Eczema</Link></li>
              <li><Link to="/urticaria" className="text-soft hover:text-white transition-colors text-sm">Urticaria</Link></li>
              <li><Link to="/sinus-allergy" className="text-soft hover:text-white transition-colors text-sm">Sinus Allergy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-leaf">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-leaf shrink-0 mt-0.5" />
                <span className="text-soft text-sm">Nilambur, Kerala<br />India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-leaf shrink-0" />
                <a href="tel:+919188240272" className="text-soft hover:text-white transition-colors text-sm">+91 91882 40272</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-leaf shrink-0" />
                <a href="mailto:info@drvarunvasudev.com" className="text-soft hover:text-white transition-colors text-sm">info@drvarunvasudev.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-soft text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Abhaya Homoeopathic Medical Center. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-soft hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/disclaimer" className="text-soft hover:text-white transition-colors">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
