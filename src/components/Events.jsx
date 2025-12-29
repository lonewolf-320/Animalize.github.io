import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, PawPrint, Trophy, ArrowRight } from 'lucide-react';

const events = [
    { title: "Birthday Parties", image: "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=800&auto=format&fit=crop" },
    { title: "Corporate Retreats", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" },
    { title: "School Visits", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop" },
    { title: "Weddings", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop" }
];

const Events = () => {
    return (
        <section id="events" className="py-24 bg-secondary text-white relative overflow-hidden">

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-white/10 pb-12">
                    {[
                        { label: "Events Hosted", val: "200+" },
                        { label: "Exotic Animals", val: "50+" },
                        { label: "Happy Guests", val: "15K+" },
                        { label: "Star Rating", val: "4.9" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left">
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-accent-gold mb-2">{stat.val}</h3>
                            <p className="text-gray-400 font-medium text-sm tracking-wide uppercase">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-end justify-between mb-12">
                    <div>
                        <span className="text-accent-coral font-bold tracking-wider text-sm">EXCLUSIVE SERVICES</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Curated Animal Experiences</h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-white hover:text-accent-gold transition-colors">
                        View All Services <ArrowRight size={18} />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {events.map((evt, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-secondary-light"
                        >
                            <img
                                src={evt.image}
                                alt={evt.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex items-end">
                                <div>
                                    <h4 className="text-xl font-bold font-serif mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">{evt.title}</h4>
                                    <div className="h-0.5 w-0 bg-accent-gold group-hover:w-full transition-all duration-500"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Events;
