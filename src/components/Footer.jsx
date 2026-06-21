import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-navy text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <img src={logo} alt="Vedic Group Logo" className="w-10 h-10 rounded-full object-cover" />
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
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Colleges', path: '/colleges' },
                                { name: 'Admissions', path: '/admissions' },
                                { name: 'Contact', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-gray-400 hover:text-primary transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        {item.name}
                                    </Link>
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
                                <span>Vill.- Khirwa Jalalpur, Teh.- Sardhana, Distt.- Meerut</span>
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
    );
};

export default Footer;
