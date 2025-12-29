import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'Pet Parent',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
        quote: "Animalize made our charity gala absolutely magical. The 'Exotic Birds' show was educational and handled with such professionalism.",
        rating: 5
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Pet Parent',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
        quote: "The adoption process was seamless. I appreciated the health guarantee and the starter kit. Luna has settled in perfectly!",
        rating: 5
    },
    {
        id: 3,
        name: 'Ayesha Khan',
        role: 'Pet Parent',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
        quote: "The quality of accessories here is unmatched. My cats love the scratching tower, and delivery was super fast.",
        rating: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((curr) => (curr + 1) % testimonials.length);
    const prev = () => setCurrentIndex((curr) => (curr - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-background-off dark:bg-black relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                <div className="max-w-6xl mx-auto">
                    <div className="bg-white dark:bg-background-card rounded-[2rem] p-8 md:p-16 shadow-xl relative overflow-hidden transition-colors duration-300">
                        <Quote size={80} className="text-gray-100 dark:text-gray-800 absolute top-8 right-8 rotate-180" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col md:flex-row items-center gap-12"
                            >
                                {/* Avatar */}
                                <div className="relative shrink-0">
                                    <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-50 dark:border-gray-700 shadow-inner">
                                        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-1.5 rounded-full shadow-md whitespace-nowrap border border-gray-100 dark:border-gray-700">
                                        <span className="text-secondary dark:text-white font-bold text-sm tracking-wide">Pet Parent</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left space-y-6">
                                    <div className="flex justify-center md:justify-start gap-1 text-accent-gold">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={20} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-2xl md:text-3xl font-serif text-secondary dark:text-white leading-normal">
                                        "{testimonials[currentIndex].quote}"
                                    </p>
                                    <div>
                                        <h4 className="font-bold text-secondary dark:text-white text-xl">{testimonials[currentIndex].name}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex justify-center md:justify-end gap-4 mt-12 md:absolute md:bottom-12 md:right-12 z-20">
                            <button onClick={prev} className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-secondary dark:text-white hover:bg-secondary hover:text-white dark:hover:bg-gray-700 transition-all">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={next} className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-secondary dark:text-white hover:bg-secondary hover:text-white dark:hover:bg-gray-700 transition-all">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
