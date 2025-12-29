import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Shield, Star, Users, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-24 pb-16 bg-white dark:bg-black min-h-screen text-secondary dark:text-gray-200 transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-6">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-8 text-secondary dark:text-white"
                    >
                        Passionate About <span className="text-primary italic">Pets.</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                        "We strive to enhance the lives of pets and their owners through quality products, expert advice, and exceptional service."
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-[3rem] overflow-hidden h-[600px] relative">
                        <img
                            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop"
                            alt="Pet Store Interior"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <span className="text-accent-gold font-bold tracking-widest uppercase text-sm">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary dark:text-white">A Decade of Trust</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Founded in 2010, Animalize began with a simple mission: to create a destination where pet lovers could find not just supplies, but a community. Over the last decade, we have grown into a trusted name nationwide, known for our ethical standards and passion for animal welfare.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Carefully selected, quality-assured pets",
                                "Professional event planning services",
                                "Dedicated customer support team",
                                "Unwavering commitment to animal welfare"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <span className="bg-primary/10 text-primary p-1 rounded-full"><CheckCircle size={16} /></span>
                                    <span className="text-secondary dark:text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="bg-secondary dark:bg-gray-900 rounded-[3rem] p-12 md:p-24 text-center mb-32 relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-16 relative z-10">What Sets Us Apart</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {[
                            { icon: Shield, title: "Ethical Sourcing", desc: "Every animal in our care comes from trusted, ethical breeders who prioritize health and temperament." },
                            { icon: Star, title: "Expert Care", desc: "Our team consists of certified animal specialists, ensuring you get the best advice for your new companion." },
                            { icon: Globe, title: "Community First", desc: "We are more than a store; we are a hub for pet lovers, hosting events and workshops." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
                            >
                                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team / Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-100 dark:border-gray-800 pt-16">
                    {[
                        { val: "2010", label: "Founded" },
                        { val: "10k+", label: "Happy Adoptions" },
                        { val: "50+", label: "Exotic Species" },
                        { val: "4.9", label: "Customer Rating" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-4xl md:text-6xl font-serif font-bold text-primary mb-2 opacity-80">{stat.val}</div>
                            <div className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide text-xs md:text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default About;
