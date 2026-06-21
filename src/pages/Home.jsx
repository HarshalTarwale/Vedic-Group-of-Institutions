import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import homepageBanner from '../assets/homepage_banner.jpg';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Welcome to
                                <span className="block text-amber-400">Vedic Group of Institutions</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                                Empowering minds, shaping futures. Join our prestigious network of colleges offering B.Ed, D.El.Ed (BTC), and D.Pharm programs.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-amber-500/50 transition-all flex items-center gap-2"
                                    to="/colleges"
                                >
                                    Explore Colleges
                                    <ArrowRight size={20} />
                                </Link>
                                <Link
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur text-white rounded-lg font-semibold border border-white/20 transition-all"
                                    to="/admissions"
                                >
                                    Admission Process
                                </Link>
                                <a
                                    href="https://updeled.gov.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-amber-500/50 transition-all flex items-center gap-2"
                                >
                                    Apply for D.El.Ed
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="relative">
                                <div className="absolute inset-0 bg-amber-500/20 rounded-3xl blur-3xl"></div>
                                <img
                                    src={homepageBanner}
                                    alt="Students"
                                    className="relative rounded-3xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/50 border border-slate-200 hover:shadow-lg transition-shadow">
                            <GraduationCap className="w-10 h-10 mx-auto mb-3 text-amber-600" />
                            <div className="text-3xl font-bold text-slate-900 mb-1">6+</div>
                            <div className="text-sm text-slate-600 font-medium">Colleges</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/50 border border-slate-200 hover:shadow-lg transition-shadow">
                            <Users className="w-10 h-10 mx-auto mb-3 text-amber-600" />
                            <div className="text-3xl font-bold text-slate-900 mb-1">1000+</div>
                            <div className="text-sm text-slate-600 font-medium">Students</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/50 border border-slate-200 hover:shadow-lg transition-shadow">
                            <Award className="w-10 h-10 mx-auto mb-3 text-amber-600" />
                            <div className="text-3xl font-bold text-slate-900 mb-1">10+</div>
                            <div className="text-sm text-slate-600 font-medium">Years Experience</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/50 border border-slate-200 hover:shadow-lg transition-shadow">
                            <BookOpen className="w-10 h-10 mx-auto mb-3 text-amber-600" />
                            <div className="text-3xl font-bold text-slate-900 mb-1">3</div>
                            <div className="text-sm text-slate-600 font-medium">Courses</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase">About Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">Empowering Minds, Enriching Lives</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Founded in 2009, the Vedic Group of Institutions was established with a visionary goal: to bridge the gap between traditional values and modern professional excellence. With two strategically located campuses in the spiritual and educational hubs of Meerut and Haridwar, we have spent over a decade nurturing the next generation of educators and healthcare professionals.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                At Vedic, we believe that education is the most powerful tool for social transformation. Our institutions are more than just buildings; they are centers of innovation where students are equipped with the skills, ethics, and practical knowledge required to excel in the competitive global landscape.
                            </p>
                            <Link className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all" to="/about">
                                Learn More
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                'Experienced Faculty',
                                'Modern Infrastructure',
                                'Industry Partnerships',
                                'Placement Assistance',
                                'Scholarship Programs',
                                'Research Opportunities'
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-sm font-medium text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section (Preserved) */}
            <section className="py-20 bg-primary">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                        Join thousands of students who have trusted Vedic Group of Institutions for their professional education.
                        Apply now for the 2025-26 academic year.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/admissions" className="bg-white text-primary hover:bg-gray-50 px-8 py-3.5 rounded-md font-bold shadow-lg hover:shadow-xl transition-all">
                            Apply Now
                        </Link>
                        <Link to="/contact" className="bg-primary-dark text-white hover:bg-black/10 px-8 py-3.5 rounded-md font-bold transition-all border border-transparent hover:border-white/20">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
