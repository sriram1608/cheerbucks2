import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Briefcase, Gift, Trophy, Camera, Users, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Wedding Events',
        desc: 'Magical ceremonies & elaborate receptions',
        icon: <Heart size={32} />,
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
        color: 'from-pink-500/20 to-rose-500/20',
        images: [
            '/assets/Star/WhatsApp%20Image%202026-02-23%20at%2011.14.25%20PM.jpeg',
            '/assets/Star/WhatsApp%20Image%202026-02-23%20at%2011.14.26%20PM.jpeg',
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80'
        ]
    },
    {
        title: 'Corporate Events',
        desc: 'Professional meets, conferences & seminars',
        icon: <Briefcase size={32} />,
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        color: 'from-blue-500/20 to-indigo-500/20',
        images: [
            '/assets/Star/star%2012.jpeg',
            '/assets/Star/star%203.jpeg',
            '/assets/Star/star%2021.jpeg',
            'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80'
        ]
    },
    {
        title: 'Birthday Celebrations',
        desc: 'Milestone birthdays made spectacular',
        icon: <Gift size={32} />,
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
        color: 'from-yellow-500/20 to-amber-500/20',
        images: [
            '/assets/Bithday/decoration/m%20birthday.jpeg',
            '/assets/Bithday/baby%201/2.jpg.jpeg',
            '/assets/Bithday/baby%203/b%20birthday.jpeg',
            '/assets/Bithday/baby%201/cake/1.jpg.jpeg',
            '/assets/Bithday/baby%202/6b.jpg.jpeg',
            '/assets/Bithday/baby%201/decoration/3.jpg.jpeg',
            '/assets/Bithday/cake/cake%202.jpeg'
        ]
    },
    {
        title: 'Sports Events',
        desc: 'Tournaments, marathons & sports days',
        icon: <Trophy size={32} />,
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
        color: 'from-purple-500/20 to-fuchsia-500/20',
        images: [
            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
            'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&q=80',
            'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80'
        ]
    },
    {
        title: 'Baby Photo Shoot',
        desc: 'Capturing the precious first moments of your little ones',
        icon: <Camera size={32} />,
        image: '/assets/Bithday/baby 1/2.jpg.jpeg',
        color: 'from-cyan-500/20 to-blue-500/20',
        images: [
            '/assets/Bithday/baby 1/2.jpg.jpeg',
            '/assets/Bithday/baby 1/3.jpg (1).jpeg',
            '/assets/Bithday/baby 1/4.jpg.jpeg',
            '/assets/Bithday/baby 1/4a.jpg.jpeg',
            '/assets/Bithday/baby 1/5.jpg.jpeg',
            '/assets/Bithday/baby 1/6a.jpg.jpeg',
            '/assets/Bithday/baby 1/7.jpg.jpeg'
        ]
    },
    {
        title: 'Anniversary',
        desc: 'Celebrating years of love and togetherness',
        icon: <Heart size={32} />,
        image: '/assets/Star/star%2012.jpeg',
        color: 'from-rose-500/20 to-orange-500/20',
        images: [
            '/assets/Star/star%2012.jpeg',
            '/assets/Star/star%204.jpeg',
            '/assets/Star/star%205.jpeg',
            '/assets/Star/star%206.jpeg',
            '/assets/Star/star%207.jpeg',
            '/assets/Star/star%208.jpeg',
            '/assets/Star/star%209.jpeg',
            '/assets/Star/star%2010.jpeg',
            '/assets/Star/star%2011.jpeg',
            '/assets/Star/star%2013.jpeg',
            '/assets/Star/star%2014.jpeg',
            '/assets/Star/star%2021.jpeg'
        ]
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const openGallery = (service) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden';
    };

    const closeGallery = () => {
        setSelectedService(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="services" className="section-padding bg-gray-50">
            <div className="container">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-4"
                    >
                        🎉 Our Services
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
                    >
                        Events We <span className="italic text-primary-600">Specialize In</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600"
                    >
                        From intimate family gatherings to massive corporate affairs, we handle every type of event with equal passion and professionalism.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-60`} />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-600 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {service.icon}
                                </div>
                            </div>

                            <div className="p-8 relative z-20 bg-white">
                                <div className="w-10 h-10 mb-4 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 line-clamp-2">{service.desc}</p>

                                <div
                                    onClick={() => openGallery(service)}
                                    className="mt-6 flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all cursor-pointer"
                                >
                                    <span>Learn more</span>
                                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Gallery Modal */}
                <AnimatePresence>
                    {selectedService && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                        >
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeGallery}
                                className="absolute inset-0 bg-gray-900/95 backdrop-blur-md"
                            />

                            {/* Content Container */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                            >
                                {/* Modal Header */}
                                <div className="p-6 md:p-8 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-20">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
                                            {selectedService.title.split(' ')[0]} <span className="text-primary-600 italic">{selectedService.title.split(' ').slice(1).join(' ')}</span>
                                        </h3>
                                        <p className="text-gray-600">{selectedService.desc}</p>
                                    </div>
                                    <button
                                        onClick={closeGallery}
                                        className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary-500 hover:text-white transition-all shadow-sm"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Modal Content - Scrollable Gallery */}
                                <div className="flex-grow overflow-y-auto p-6 md:p-8 bg-gray-50">
                                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                                        {selectedService.images.map((src, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="break-inside-avoid overflow-hidden rounded-2xl shadow-md group relative h-auto"
                                            >
                                                <img
                                                    src={src}
                                                    alt={`${selectedService.title} Moment ${idx + 1}`}
                                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 pointer-events-none" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-12 text-center pb-8">
                                        <Link
                                            to="/gallery"
                                            onClick={closeGallery}
                                            className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-800 transition-colors group"
                                        >
                                            View Full Gallery Folder
                                            <ArrowLeft size={20} className="rotate-180 transform group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CTA Banner integrated into services */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 rounded-full bg-primary-400/20 blur-2xl"></div>

                    <div className="max-w-2xl text-center md:text-left relative z-10 mb-8 md:mb-0">
                        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Dream Event?</h3>
                        <p className="text-primary-100 text-lg">Let us turn your vision into a spectacular reality. Contact us today!</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
                        <a href="https://wa.me/919176468656" target="_blank" rel="noreferrer" className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-full flex gap-2 items-center justify-center whitespace-nowrap">
                            <span className="text-xl">💬</span> Contact Us
                        </a>
                        <Link to="/contact" className="btn border border-white/30 hover:border-white text-white px-8 py-3 rounded-full flex items-center justify-center whitespace-nowrap">
                            Plan Your Event →
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Services;
