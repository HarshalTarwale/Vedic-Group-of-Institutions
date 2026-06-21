import React, { useState, useEffect } from 'react';
import { GraduationCap, Users, Award, BookOpen, ArrowRight, CheckCircle, Menu, X, Phone, MapPin, Mail } from 'lucide-react';

const VedicLandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-text">
            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center space-x-3 cursor-pointer">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                                <GraduationCap size={24} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-navy leading-none">VEDIC</span>
                                <span className="text-xs font-semibold text-gray-text tracking-wider">GROUP OF INSTITUTIONS</span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'Colleges', 'Admissions', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${item === 'Home' ? 'text-primary' : 'text-navy'
                                        }`}
                                >
                                    {item}
                                </a>
                            ))}
                            <button className="bg-green hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                                Apply Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-navy hover:text-primary transition-colors"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 border-t border-gray-100 animate-in slide-in-from-top-5">
                        <div className="flex flex-col space-y-4 px-6">
                            {['Home', 'Colleges', 'Admissions', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-navy hover:text-primary font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <button className="bg-green text-white px-6 py-3 rounded-md font-medium w-full">
                                Apply Now
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 bg-navy overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Welcome to <br />
                                <span className="text-primary">Vedic Group of Institutions</span>
                            </h1>
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Empowering minds, shaping futures. Join our prestigious network of colleges offering B.Ed, D.El.Ed (BTC), and D.Pharm programs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <button className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-md font-semibold transition-all shadow-lg hover:shadow-orange-500/30">
                                    <span>Explore Colleges</span>
                                    <ArrowRight size={20} />
                                </button>
                                <button className="px-8 py-3.5 rounded-md font-semibold bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all">
                                    Admission Process
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent z-10"></div>
                                {/* Fallback image using unsplash source */}
                                <img
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Students Graduating"
                                    className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Decorative circle */}
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green/20 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-gray-light -mt-8 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: BookOpen, number: '6+', label: 'Colleges' },
                            { icon: Users, number: '1000+', label: 'Students' },
                            { icon: Award, number: '10+', label: 'Years Experience' },
                            { icon: GraduationCap, number: '3', label: 'Courses' },
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <stat.icon size={24} />
                                </div>
                                <h3 className="text-3xl font-bold text-navy mb-1">{stat.number}</h3>
                                <p className="text-gray-500 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="colleges" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full">
                                ABOUT US
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight">
                                Excellence in Education <br />Since Inception
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Vedic Group of Institutions is dedicated to cultivating the next generation of leaders.
                                With a focus on holistic development, academic rigor, and practical skills, we ensure our
                                students are industry-ready. Our campuses in Meerut provide a serene, conducive environment for learning.
                            </p>

                            <div className="pt-4 space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <span className="w-1.5 h-12 bg-primary rounded-full block mr-4"></span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-navy">Premier Campuses in Meerut</h4>
                                        <p className="text-gray-500 text-sm mt-1">State-of-the-art facilities designed to foster growth and innovation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                                    Learn More
                                    <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Right Features */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                'Experienced Faculty',
                                'Modern Infrastructure',
                                'Industry Partnerships',
                                'Placement Assistance',
                                'Scholarship Programs',
                                'Research Opportunities'
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center p-4 bg-gray-50 border border-gray-100 rounded-lg hover:border-green/30 transition-colors">
                                    <CheckCircle size={20} className="text-green flex-shrink-0 mr-3" />
                                    <span className="font-semibold text-navy">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="admissions" className="py-20 bg-primary">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                        Join thousands of students who have trusted Vedic Group of Institutions for their professional education.
                        Apply now for the 2025-26 academic year.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-primary hover:bg-gray-50 px-8 py-3.5 rounded-md font-bold shadow-lg hover:shadow-xl transition-all">
                            Apply Now
                        </button>
                        <button className="bg-primary-dark text-white hover:bg-black/10 px-8 py-3.5 rounded-md font-bold transition-all border border-transparent hover:border-white/20">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-navy text-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <GraduationCap className="text-primary" size={28} />
                                <h3 className="text-2xl font-bold text-primary">VEDIC Group</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Committed to delivering quality education and shaping the future of our students through academic excellence.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Our Colleges', 'Admissions', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Info</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start text-gray-400">
                                    <MapPin size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                                    <span>Meerut, Uttar Pradesh, IN</span>
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <Phone size={20} className="text-primary mr-3 flex-shrink-0" />
                                    <span>+91 98765 43210</span>
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <Mail size={20} className="text-primary mr-3 flex-shrink-0" />
                                    <span>info@vedicinstitutions.edu</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p className="text-center md:text-left mb-4 md:mb-0">
                            &copy; 2025 Vedic Group of Institutions. All rights reserved.
                        </p>
                        <p className="font-bold tracking-widest text-green">
                            LEARN . ACHIEVE . BELIEVE
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default VedicLandingPage;
