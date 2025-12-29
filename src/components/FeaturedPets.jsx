import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { pets } from '../data/pets';

const FeaturedPets = () => {
    const navigate = useNavigate();
    // Get first 3 pets for the featured section
    const featuredPets = pets.slice(0, 3);

    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-secondary dark:text-gray-400 font-bold tracking-widest uppercase text-sm mb-2 block">New Arrivals</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary dark:text-white">Featured Companions</h2>
                    </div>
                    <Link to="/adoption" className="group flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        View All Pets <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredPets.map((pet, idx) => (
                        <motion.div
                            key={pet.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => navigate(`/adoption/${pet.id}`)}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6">
                                <img src={pet.image} alt={pet.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                                    <Heart size={20} />
                                </div>

                                <div className="absolute bottom-4 left-4 flex gap-2">
                                    {pet.badges.map((badge, i) => (
                                        <span key={i} className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-secondary flex items-center gap-1 shadow-sm">
                                            <CheckCircle2 size={12} className="text-primary" />
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">{pet.name}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">{pet.breed}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-primary font-bold">PKR {pet.price}</p>
                                    <p className="text-gray-400 text-xs font-bold uppercase">{pet.age}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedPets;
