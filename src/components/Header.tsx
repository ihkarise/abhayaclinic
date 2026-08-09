import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Conditions', href: '/allergy-conditions' },
  { label: 'About Dr Varun', href: '/about-dr-varun' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const headerBg = isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm border border-gray-200' : 'bg-transparent';
  const textColor = isScrolled || !isHome ? 'text-text-primary' : 'text-text-primary md:text-white';

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300`}>
      <div className={`w-full max-w-[1024px] h-16 rounded-2xl px-6 flex items-center justify-between transition-all duration-300 ${isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm' : 'bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm'}`}>
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-lg md:text-xl">A</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-sm md:text-base tracking-tight text-primary">ABHAYA</span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-text-secondary hidden sm:block">Homoeopathic Medical Center</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.filter(link => !['Contact', 'Gallery'].includes(link.label)).map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium hover:text-leaf transition-colors text-text-secondary`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="text-sm font-medium hover:text-leaf transition-colors text-text-secondary">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <a
            href="tel:+919188240272"
            className="px-4 py-2 bg-soft text-primary rounded-full text-xs font-semibold hover:bg-leaf hover:text-white transition-colors"
          >
            +91 91882 40272
          </a>
          <Link
            to="/book-appointment"
            className="px-5 py-2 bg-primary text-white text-xs font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-md"
          >
            Book Appointment
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 flex flex-col shadow-2xl"
            >
              <div className="p-4 flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-text-primary hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="flex-1 px-6 py-4 flex flex-col space-y-6 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-lg font-medium text-text-primary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="pt-8 flex flex-col space-y-4">
                  <a
                    href="tel:+919188240272"
                    className="flex justify-center items-center space-x-2 py-3 rounded-xl border border-gray-200 text-text-primary"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Call Us</span>
                  </a>
                  <a
                    href="https://wa.me/919188240272"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center space-x-2 py-3 rounded-xl bg-[#25D366] text-white"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">WhatsApp</span>
                  </a>
                  <Link
                    to="/book-appointment"
                    className="flex justify-center items-center space-x-2 py-3 rounded-xl bg-primary text-white shadow-md"
                  >
                    <span className="font-medium">Book Appointment</span>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
