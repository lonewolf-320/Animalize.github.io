import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Search, CheckCircle2, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { pets } from '../data/pets';

const categories = ['All Pets', 'Mammals', 'Birds', 'Reptiles'];

const PetListings = () => {
    const [activeCategory, setActiveCategory] = useState('All Pets');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredPets = pets.filter(pet => {
        const matchesCategory = activeCategory === 'All Pets' || pet.category === activeCategory;
        const matchesSearch = pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pet.breed.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="adoption" className="py-24 bg-background-off dark:bg-background-dark transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-6">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-2 rounded-full bg-accent-sage/20 text-primary-dark dark:text-accent-sage font-bold text-xs tracking-widest uppercase">
                            Living Catalog
                        </span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-serif font-bold text-secondary dark:text-white"
                        >
                            Meet Our Available <br />Companions
                        </motion.h2>
                    </div>

                    {/* Application Controls */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        {/* Search Bar */}
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search breed, name..."
                                className="w-full sm:w-64 pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-secondary dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3 mb-12 pb-4 border-b border-gray-200 dark:border-gray-800">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                ? 'bg-secondary dark:bg-white text-white dark:text-secondary shadow-lg shadow-secondary/20'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPets.map((pet) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={pet.id}
                                onClick={() => navigate(`/adoption/${pet.id}`)}
                                className="group bg-white dark:bg-background-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800 cursor-pointer relative"
                            >
                                {/* Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={pet.image}
                                        alt={pet.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Hover Reveal: Badges */}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        {pet.badges.map((badge, idx) => (
                                            <span key={idx} className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-secondary flex items-center gap-2 shadow-sm">
                                                <CheckCircle2 size={12} className="text-primary" />
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Like Button */}
                                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all shadow-lg">
                                        <Heart size={20} />
                                    </button>

                                    {/* Hover Reveal: Inquire Button */}
                                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <button className="w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/30 hover:bg-primary-dark">
                                            <span>View Details</span>
                                            <ArrowUpRight size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-serif font-bold text-secondary dark:text-white mb-1 transition-colors">{pet.name}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{pet.breed} • <span className="text-primary">{pet.subcategory}</span></p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-primary font-bold text-lg">PKR {pet.price}</p>
                                            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mt-1">{pet.age}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default PetListings;
