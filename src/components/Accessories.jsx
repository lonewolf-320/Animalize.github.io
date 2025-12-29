import React from 'react';
import { ShoppingBag, Star, Plus } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Orthopedic Dog Bed',
        price: '3,900',
        rating: 4.8,
        category: 'Bedding',
        image: 'https://images.unsplash.com/photo-1627913317772-2cc3514a3666?q=80&w=800&auto=format&fit=crop',
        tag: 'Best Seller',
        tagColor: 'bg-accent-gold'
    },
    {
        id: 2,
        name: 'Smart Pet Feeder',
        price: '12,500',
        rating: 4.9,
        category: 'Tech',
        image: 'https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=800&auto=format&fit=crop',
        tag: 'New',
        tagColor: 'bg-primary'
    },
    {
        id: 3,
        name: 'Luxury Leather Collar',
        price: '2,500',
        rating: 4.6,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1554693190-3838b5377280?q=80&w=800&auto=format&fit=crop',
        tag: 'Sale',
        tagColor: 'bg-red-500'
    }
];

const Accessories = () => {
    return (
        <section className="py-24 bg-white dark:bg-background-card transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-6">

                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-secondary dark:text-white">Premium Essentials</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Curated products for your furry friends.</p>
                    </div>
                    <a href="#" className="flex items-center gap-2 font-bold text-primary dark:text-primary-light hover:underline">
                        View Shop <ShoppingBag size={18} />
                    </a>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative h-96 bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden mb-6">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-700" />

                                {/* Tag */}
                                {product.tag && (
                                    <span className={`absolute top-4 left-4 ${product.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg`}>
                                        {product.tag}
                                    </span>
                                )}

                                {/* Floating Add Button */}
                                <button className="absolute bottom-4 right-4 bg-white text-secondary hover:bg-secondary hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl transform translate-y-20 group-hover:translate-y-0 transition-all duration-300">
                                    <Plus size={24} />
                                </button>
                            </div>

                            {/* Info */}
                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{product.category}</span>
                                <h3 className="text-xl font-serif font-bold text-secondary dark:text-white mt-1 mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-secondary dark:text-white text-lg">PKR {product.price}</span>
                                    <div className="flex items-center gap-1 text-accent-gold text-sm font-bold">
                                        <Star size={14} fill="currentColor" />
                                        <span>{product.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Accessories;
