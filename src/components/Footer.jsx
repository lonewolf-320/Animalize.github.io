import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, MessageCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const galleryImages = [
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=200&auto=format&fit=crop',
    ];

    return (
        <footer className="bg-secondary dark:bg-black text-gray-400 pt-24 border-t border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-6">

                {/* Instagram Feed */}
                <div className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-serif font-bold text-white">Follow @animalize.site</h3>
                        <a href="https://www.instagram.com/animalize.site/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-white transition-colors">
                            <Instagram size={18} /> View Profile
                        </a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        {galleryImages.map((img, i) => (
                            <div key={i} className="aspect-square rounded-xl overflow-hidden group">
                                <img src={img} alt="Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-gray-800">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-white">
                            <img src="/logo.png" alt="Logo" className="w-10 h-auto object-contain" />
                            <span className="font-serif text-2xl font-bold">Animalize</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Passionate about pets, dedicated to their well-being. Founded in 2010, Animalize has grown into a trusted destination for pet lovers nationwide.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/Animalize.site/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></a>
                            <a href="https://www.instagram.com/animalize.site/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/adoption" className="hover:text-primary transition-colors">Adopt a Pet</Link></li>
                            <li><Link to="/events" className="hover:text-primary transition-colors">Exotic Events</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><a href="https://wa.me/923333737391" className="hover:text-primary transition-colors">Contact</a></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <Phone size={24} className="text-primary" />
                                <a href="tel:+923333737391" className="hover:text-primary transition-colors">+92 333 3737391</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={24} className="text-primary" />
                                <a href="mailto:animalized6@gmail.com" className="hover:text-primary transition-colors">animalized6@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold">Ready to Adopt?</h4>
                        <p className="text-sm">Have questions about the process? Talk to our adoption specialists.</p>
                        <a href="https://wa.me/923333737391" target="_blank" rel="noopener noreferrer" className="w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-primary/25">
                            <MessageCircle size={20} />
                            <span>Chat on WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; 2024 Animalize.site. All rights reserved.</p>
                    <div className="flex items-center gap-2 text-gray-500">
                        <span>Made with</span>
                        <Heart size={14} className="text-red-500 fill-current" />
                        <span>for animal lovers</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
