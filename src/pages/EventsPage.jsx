import React from 'react';
import Booking from '../components/Booking';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Users, ArrowRight } from 'lucide-react';

const eventsData = [
    {
        title: "Exotic Animal Shows",
        desc: "Experience the thrill of interacting with snakes, iguanas, and other exotic reptiles under expert supervision. Perfect for educational events and parties.",
        image: "https://images.unsplash.com/photo-1543329124-b152778da141?q=80&w=1200&auto=format&fit=crop",
        features: ["Hands-on interaction", "Educational talk", "Photo opportunities"]
    },
    {
        title: "Big Cat Experiences",
        desc: "Witness the majesty of nature's most powerful felines. Our safely managed big cat encounters allow you to get closer to these magnificent creatures.",
        image: "https://images.unsplash.com/photo-1579782550186-b484ea890918?q=80&w=1200&auto=format&fit=crop", // Changed to a more reliable Tiger image
        features: ["Safety briefing", "Trained handlers", "Unforgettable memories"]
    },
    {
        title: "Bird of Prey Shows",
        desc: "Watch eagles, hawks, and owls soar. Our falconry displays showcase the agility and power of these incredible hunters.",
        image: "https://images.unsplash.com/photo-1628173491959-17ce21c27702?q=80&w=1200&auto=format&fit=crop", // Changed to a specific Bird of Prey image
        features: ["Flight domonstrations", "Species facts", "Close-up viewing"]
    }
];

const EventsPage = () => {
    return (
        <div className="pt-20 bg-background dark:bg-black transition-colors duration-300">

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-secondary dark:bg-gray-900">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-accent-gold font-bold text-sm tracking-wider mb-6 border border-white/10">
                            <Sparkles size={16} />
                            <span>PREMIUM ENTERTAINMENT</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Event Planning</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Make your next gathering unforgettable. From corporate functions to private parties, we bring the wild to you with safety and professionalism.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24">
                <div className="container mx-auto px-4 lg:px-6 space-y-32">
                    {eventsData.map((event, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>

                            {/* Image */}
                            <div className="lg:w-1/2">
                                <motion.div
                                    whileHover={{ scale: 0.98 }}
                                    className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]"
                                >
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary dark:text-white">{event.title}</h2>
                                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {event.desc}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {event.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-secondary dark:text-gray-300 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <button
                                        onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                                    >
                                        Book this Experience <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Safety Banner */}
            <section className="bg-primary/5 dark:bg-gray-900 border-y border-primary/10 py-16">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h3 className="text-2xl font-serif font-bold text-secondary dark:text-white mb-4">Safety & Professionalism First</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        "All our animals are vaccinated and trained for social events. We provide experienced staff to ensure smooth operations and prioritize our animals' well-being and comfort at all times."
                    </p>
                </div>
            </section>

            {/* Booking Widget */}
            <Booking />
        </div>
    );
};

export default EventsPage;
