import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [hoveredSide, setHoveredSide] = useState(null); // 'left' | 'right' | null

    // Function to scroll to the next section (which differs depending on page context, but usually window height)
    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative h-screen flex flex-col md:flex-row pt-20 overflow-hidden bg-white dark:bg-black">

            {/* Scroll Indicator (Absolute Center) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                onClick={handleScrollDown}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/80 mix-blend-difference cursor-pointer hover:opacity-100 transition-opacity"
            >
                <span className="text-xs tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <ChevronDown size={20} />
                </motion.div>
            </motion.div>

            {/* Left: Adoption (Deep Forest Green) */}
            <motion.div
                layout
                className="relative h-full flex items-center justify-center p-8 md:p-16 overflow-hidden cursor-pointer border-r border-white/20"
                style={{ backgroundColor: '#1A2E26' }}
                animate={{
                    flex: hoveredSide === 'left' ? 1.5 : hoveredSide === 'right' ? 0.67 : 1
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                onHoverStart={() => setHoveredSide('left')}
                onHoverEnd={() => setHoveredSide(null)}
            >
                {/* Background Image (Subtle) */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450778865369-0994ca87d253?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay transition-opacity duration-700 hover:opacity-20"></div>

                <div className="relative z-10 max-w-xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 text-accent-sage font-bold tracking-wider text-sm"
                    >
                        <span className="p-1.5 rounded-full border border-accent-sage/30"><Star size={14} fill="currentColor" /></span>
                        <span>PREMIUM COMPANIONS</span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1]"
                        layout="position"
                    >
                        Find Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-400">New Family.</span>
                    </motion.h1>

                    <motion.p className="text-gray-300 text-lg md:text-xl font-light max-w-md">
                        Ethically bred, vet-checked companions waiting for a loving home.
                    </motion.p>

                    <Link to="/adoption">
                        <motion.button
                            whileHover={{ scale: 1.05, x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 transition-colors"
                        >
                            <span>Explore Pets</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </div>
            </motion.div>


            {/* Right: Events (Midnight Navy) */}
            <motion.div
                layout
                className="relative h-full flex items-center justify-center p-8 md:p-16 overflow-hidden cursor-pointer"
                style={{ backgroundColor: '#101828' }}
                animate={{
                    flex: hoveredSide === 'right' ? 1.5 : hoveredSide === 'left' ? 0.67 : 1
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                onHoverStart={() => setHoveredSide('right')}
                onHoverEnd={() => setHoveredSide(null)}
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534567176735-8463641bd19b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay transition-opacity duration-700 hover:opacity-20"></div>

                <div className="relative z-10 max-w-xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 text-accent-gold font-bold tracking-wider text-sm"
                    >
                        <span className="p-1.5 rounded-full border border-accent-gold/30"><Calendar size={14} /></span>
                        <span>UNFORGETTABLE MOMENTS</span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1]"
                        layout="position"
                    >
                        Exotic Animal <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-400">Experiences.</span>
                    </motion.h1>

                    <motion.p className="text-gray-400 text-lg md:text-xl font-light max-w-md">
                        Book adoption events and private meet-and-greets.
                    </motion.p>

                    <Link to="/events">
                        <motion.button
                            whileHover={{ scale: 1.05, x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-accent-gold hover:text-white text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 transition-colors"
                        >
                            <span>Book an Event</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </div>
            </motion.div>

        </div>
    );
};

export default Hero;
