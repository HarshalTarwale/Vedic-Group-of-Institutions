import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Colleges', path: '/colleges' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center space-x-3 cursor-pointer group">
                        <img src={logo} alt="Vedic Group Logo" className="w-12 h-12 rounded-full object-cover group-hover:opacity-90 transition-opacity" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-navy leading-none">VEDIC</span>
                            <span className="text-xs font-semibold text-gray-text tracking-wider">GROUP OF INSTITUTIONS</span>
                        </div>
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) => `
                  px-4 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive
                                        ? 'bg-primary text-white'
                                        : 'text-navy hover:text-primary hover:bg-gray-50'
                                    }
                `}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <NavLink
                            to="/admissions"
                            className="ml-4 bg-green hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                        >
                            Apply Now
                        </NavLink>
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
                    <div className="flex flex-col space-y-2 px-4">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) => `
                  px-4 py-3 rounded-md font-medium transition-colors block
                  ${isActive
                                        ? 'bg-primary text-white'
                                        : 'text-navy hover:text-primary hover:bg-gray-50'
                                    }
                `}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <NavLink
                            to="/admissions"
                            className="mt-2 text-center bg-green text-white px-6 py-3 rounded-md font-medium w-full"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Apply Now
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
