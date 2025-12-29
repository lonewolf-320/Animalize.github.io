import React, { useState, useEffect } from 'react';
import { MessageCircle, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';

    // Scroll logic
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Force solid background on non-home pages
    const showSolidNav = isScrolled || !isHome;

    // Dark Mode Logic
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${showSolidNav ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800' : 'bg-gradient-to-b from-black/50 to-transparent'
            }`}>
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="/logo.png" alt="Animalize" className="h-16 w-auto object-contain" />
                </Link>

                {/* Desktop Links */}
                <div className={`hidden md:flex items-center gap-8 font-medium transition-colors ${showSolidNav ? 'text-secondary dark:text-white' : 'text-white/90'
                    }`}>

                    <Link to="/" className="hover:text-primary dark:hover:text-primary-light transition-colors">Home</Link>

                    <Link to="/adoption" className="hover:text-primary dark:hover:text-primary-light transition-colors">Adoption</Link>
                    <Link to="/events" className="hover:text-primary dark:hover:text-primary-light transition-colors">Events</Link>
                    <Link to="/about" className="hover:text-primary dark:hover:text-primary-light transition-colors">About</Link>
                </div>

                {/* Actions & Mobile Toggle */}
                <div className="flex items-center gap-4">

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className={`p-2 rounded-full transition-colors ${showSolidNav ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-secondary dark:text-white' : 'text-white/80 hover:bg-white/10'
                            }`}
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <a href="https://wa.me/923333737391" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-primary/30">
                        <MessageCircle size={18} />
                        <span>Quick Inquiry</span>
                    </a>

                    {/* Mobile Hamburger */}
                    <button
                        className={`md:hidden p-2 ${showSolidNav ? 'text-secondary dark:text-white' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-6 text-lg font-medium text-secondary dark:text-white">
                            <Link to="/" className="hover:text-primary">Home</Link>
                            <Link to="/adoption" className="hover:text-primary">Adoption</Link>
                            <Link to="/events" className="hover:text-primary">Events</Link>
                            <Link to="/about" className="hover:text-primary">About</Link>

                            <hr className="border-gray-100 dark:border-gray-800" />

                            <a href="https://wa.me/923333737391" className="flex items-center gap-2 text-primary font-bold">
                                <MessageCircle size={20} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
