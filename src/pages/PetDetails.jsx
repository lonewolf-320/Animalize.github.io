import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { pets } from '../data/pets';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Heart, Share2, MessageCircle } from 'lucide-react';

const PetDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const pet = pets.find(p => p.id === parseInt(id));

    if (!pet) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background dark:bg-black text-secondary dark:text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Pet Not Found</h2>
                    <button onClick={() => navigate('/adoption')} className="text-primary hover:underline">Back to Adoption</button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-16 min-h-screen bg-background dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-6">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back to listings
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl"
                    >
                        <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />

                        <div className="absolute top-6 right-6 flex flex-col gap-4">
                            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
                                <Heart size={24} />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-blue-500 transition-all">
                                <Share2 size={24} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                {pet.category}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-500 dark:text-gray-400 font-medium">{pet.subcategory}</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary dark:text-white mb-2">{pet.name}</h1>
                        <p className="text-2xl text-gray-400 font-light mb-8">{pet.breed}</p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            {pet.badges.map((badge, idx) => (
                                <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 text-secondary dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700">
                                    <CheckCircle2 size={16} className="text-primary" />
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-8 border-y border-gray-100 dark:border-gray-800 py-8">
                            <div>
                                <span className="block text-gray-400 text-sm mb-1 uppercase tracking-wide">Age</span>
                                <span className="text-xl font-bold text-secondary dark:text-white">{pet.age}</span>
                            </div>
                            <div>
                                <span className="block text-gray-400 text-sm mb-1 uppercase tracking-wide">Gender</span>
                                <span className="text-xl font-bold text-secondary dark:text-white">{pet.gender}</span>
                            </div>
                            <div>
                                <span className="block text-gray-400 text-sm mb-1 uppercase tracking-wide">Color</span>
                                <span className="text-xl font-bold text-secondary dark:text-white">{pet.color}</span>
                            </div>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">About {pet.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                {pet.description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mt-auto">
                            <div className="text-center sm:text-left">
                                <span className="block text-gray-400 text-sm mb-1">Adoption Fee</span>
                                <span className="text-3xl font-bold text-primary">PKR {pet.price}</span>
                            </div>
                            <a
                                href={`https://wa.me/923333737391?text=Hi, I am interested in adopting ${pet.name} (${pet.breed}).`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex-1 bg-primary hover:bg-primary-dark text-white py-4 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-xl shadow-primary/20"
                            >
                                <MessageCircle size={24} />
                                Inquire about {pet.name}
                            </a>
                        </div>

                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default PetDetails;
