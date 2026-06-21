import React from 'react';
import { CheckCircle, Award, MapPin, Monitor, Heart, Users } from 'lucide-react';
import sanjeevTomar from '../assets/Sanjeev Tomar.jpeg';
import neetuTomar from '../assets/Neetu Tomar.jpeg';
import aryanTomar from '../assets/Aryan Tomar.png';
import homepageBanner from '../assets/homepage_banner.jpg';

const About = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy to-slate-900 py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${homepageBanner})` }}></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Vedic Group of Institutions</h1>
                    <p className="text-xl text-primary font-medium tracking-wide bg-white/10 inline-block px-6 py-2 rounded-full backdrop-blur-sm">
                        Empowering Minds, Enriching Lives Since 2009
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-navy">About Vedic Group of Institutions</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Founded in 2009, the Vedic Group of Institutions was established with a visionary goal: to bridge the gap between traditional values and modern professional excellence. With two strategically located campuses in the spiritual and educational hubs of Meerut and Haridwar, we have spent over a decade nurturing the next generation of educators and healthcare professionals.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                At Vedic, we believe that education is the most powerful tool for social transformation. Our institutions are more than just buildings; they are centers of innovation where students are equipped with the skills, ethics, and practical knowledge required to excel in the competitive global landscape.
                            </p>
                        </div>
                        <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-primary">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-navy mb-2">Our Vision</h3>
                                <p className="text-gray-600">
                                    To be a premier global destination for professional education, recognized for creating leaders who contribute to a healthier and more enlightened society.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-navy mb-2">Our Mission</h3>
                                <p className="text-gray-600">
                                    To provide affordable, high-quality professional education by integrating innovative teaching methods with rigorous practical training, ensuring our students are "industry-ready" from day one.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Disciplines */}
            <section className="py-20 bg-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-navy mb-4">Our Core Disciplines</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We specialize in high-impact professional courses that form the backbone of society—Education and Healthcare.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-primary/20 group">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <Monitor size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">Faculty of Education</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Shaping future mentors through our B.Ed and D.El.Ed programs, focusing on modern pedagogy and child psychology.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-green/20 group">
                            <div className="w-14 h-14 bg-green/10 rounded-full flex items-center justify-center text-green mb-6 group-hover:scale-110 transition-transform">
                                <Monitor size={28} /> {/* Using Monitor as placeholder, consider replacing with Pill/Flask */}
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">Faculty of Pharmacy</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Advancing pharmaceutical sciences with our D.Pharma course, backed by state-of-the-art laboratories.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-blue-500/20 group">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">Faculty of Nursing</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Cultivating compassion and clinical expertise through B.Sc Nursing and GNM programs to meet the rising global demand for healthcare heroes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-navy mb-4">Our Leadership</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Guided by visionaries dedicated to educational excellence.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Sanjeev Tomar */}
                        <div className="group text-center">
                            <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md aspect-[3/4]">
                                <img
                                    src={sanjeevTomar}
                                    alt="Sanjeev Tomar"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-medium">Founder / Chairman</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy">Sanjeev Tomar</h3>
                            <p className="text-primary font-medium">Founder / Chairman</p>
                        </div>

                        {/* Neetu Tomar */}
                        <div className="group text-center">
                            <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md aspect-[3/4]">
                                <img
                                    src={neetuTomar}
                                    alt="Neetu Tomar"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-medium">Co-Founder / Chairperson</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy">Neetu Tomar</h3>
                            <p className="text-primary font-medium">Co-Founder / Chairperson</p>
                        </div>

                        {/* Aryan Tomar */}
                        <div className="group text-center">
                            <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md aspect-[3/4]">
                                <img
                                    src={aryanTomar}
                                    alt="Aryan Tomar"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-medium">Managing Director</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy">Aryan Tomar</h3>
                            <p className="text-primary font-medium">Managing Director</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Vedic */}
            <section className="py-20 bg-navy text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Why Choose Vedic Group?</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-primary">Legacy of Excellence</h3>
                                        <p className="text-gray-400">Over 15 years of experience in academic administration and student success.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-primary">Dual-City Presence</h3>
                                        <p className="text-gray-400">Access to diverse clinical exposures and teaching internships across Uttar Pradesh and Uttarakhand.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                                        <Monitor size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-primary">Modern Infrastructure</h3>
                                        <p className="text-gray-400">Smart classrooms, well-stocked libraries, and advanced labs designed for hands-on learning.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-primary">Holistic Development</h3>
                                        <p className="text-gray-400">We don’t just produce graduates; we produce responsible citizens grounded in the "Vedic" philosophy of selfless service and integrity.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            
                            <div className="absolute inset-0 bg-primary/20 rounded-2xl mix-blend-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
