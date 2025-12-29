import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, Users, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

const eventTypes = ['Birthday Party', 'Wedding', 'Corporate Event', 'School Visit', 'Private Meet & Greet', 'Other'];

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        type: 'Birthday Party',
        guests: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdj1wyuvlGxmbeiJ9usVEwSZushCtNJFiOzMMemLgAbVBPMZA/viewform";
        const params = new URLSearchParams();

        // Mapping form data to Google Form Entry IDs
        params.append('entry.1959578824', formData.name);
        params.append('entry.557857093', formData.phone);
        params.append('entry.660299607', formData.date);
        params.append('entry.692619589', formData.type);
        params.append('entry.283410676', formData.guests);
        params.append('entry.1694878998', formData.message);
        params.append('usp', 'pp_url');

        window.open(`${baseUrl}?${params.toString()}`, '_blank');
    };

    return (
        <section id="booking" className="py-24 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-bold tracking-wider text-sm uppercase">Book an Experience</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary dark:text-white mt-2 mb-6">
                                Lets Plan Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-gold">Wild Adventure.</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                                Fill out the form to inquire about our event services. Whether it's a birthday bash or an educational school visit, we'll tailor the experience to your needs.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary dark:text-white">Expert Handlers</h4>
                                    <p className="text-sm text-gray-400">Trained professionals ensure safety and fun.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary dark:text-white">Custom Packages</h4>
                                    <p className="text-sm text-gray-400"> tailored experiences for any age group.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary dark:text-white ml-1">Your Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary dark:text-white ml-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="0300 1234567"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary dark:text-white ml-1">Event Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary dark:text-white ml-1">Event Type</label>
                                    <div className="relative">
                                        <select
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            className="w-full pl-4 pr-10 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none dark:text-white"
                                        >
                                            {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary dark:text-white ml-1">Guest Count (Approx)</label>
                                <div className="relative">
                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="number"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        placeholder="e.g., 50"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary dark:text-white ml-1">Message / Details</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Tell us about your event requirements..."
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none dark:text-white"
                                    ></textarea>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2 transition-all"
                            >
                                <Send size={20} />
                                Submit Inquiry
                            </motion.button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Booking;
