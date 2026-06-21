import React, { useState } from 'react';
import { GraduationCap, Pill, MapPin, Phone, CheckCircle, Hash } from 'lucide-react';

// Import local images
import img1 from '../assets/IMG_7642.jpeg';
import img2 from '../assets/IMG_7698.jpeg';
import img3 from '../assets/IMG_7704.jpeg';
import img4 from '../assets/IMG_7706.jpeg';
import img5 from '../assets/IMG_7710.jpeg';

const Colleges = () => {
    const [filter, setFilter] = useState('All Colleges');

    const colleges = [
        {
            id: 1,
            name: "Mairashtra Institute of Global Education",
            type: "Education",
            icon: GraduationCap,
            image: img1,
            programs: [
                { name: "B.Ed", code: "College Code:1080" }
            ],
        },
        {
            id: 2,
            name: "Meerut College of Professional Education",
            type: "Education",
            icon: GraduationCap,
            image: img2,
            programs: [
                { name: "B.Ed", code: "College Code:0556" },
                { name: "D.El.Ed (BTC)", code: "College Code:220113" }
            ],
        },
        {
            id: 3,
            name: "Shiv Narayan College of Education",
            type: "Education",
            icon: GraduationCap,
            image: img3,
            programs: [
                { name: "D.El.Ed (BTC)", code: "College Code:220026" }
            ],
        },
        {
            id: 4,
            name: "Aryan College of Professional Education",
            type: "Education",
            icon: GraduationCap,
            image: img4,
            programs: [
                { name: "D.El.Ed (BTC)", code: "College Code:220041" }
            ],
        },
        {
            id: 5,
            name: "Shiv Narayan College of Pharmacy",
            type: "Pharmacy",
            icon: Pill,
            image: img5,
            programs: [
                { name: "D.Pharm", code: "College Code:1967" }
            ],
        },
        {
            id: 6,
            name: "Meerut College of Pharmacy",
            type: "Pharmacy",
            icon: Pill,
            image: img1, // Reusing first image
            programs: [
                { name: "D.Pharm", code: "College Code:1676" }
            ],
        }
    ];

    const filteredColleges = filter === 'All Colleges'
        ? colleges
        : colleges.filter(college => college.type === filter);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-white py-16 text-center border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Colleges</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover our network of premier institutions offering quality education in teacher training and pharmacy
                    </p>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="bg-gray-light py-8 sticky top-20 z-40 shadow-sm transition-all">
                <div className="max-w-7xl mx-auto px-4 flex justify-center">
                    <div className="bg-white p-1 rounded-lg border border-gray-200 inline-flex shadow-sm">
                        {['All Colleges', 'Education', 'Pharmacy'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-6 py-2 rounded-md font-medium transition-all ${filter === tab
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'text-gray-500 hover:text-navy hover:bg-gray-50'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* College Grid */}
            <section className="py-16 bg-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredColleges.map((college) => (
                            <div key={college.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-amber-200 flex flex-col h-full overflow-hidden">
                                {/* College Image */}
                                <div className="h-48 w-full overflow-hidden relative">
                                    <img
                                        src={college.image}
                                        alt={college.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold shadow ${college.type === 'Pharmacy'
                                            ? 'bg-green-500 text-white border-green-600'
                                            : 'bg-amber-500 text-white border-amber-600'
                                            }`}>
                                            {college.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-2 rounded-lg ${college.type === 'Pharmacy' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                                            }`}>
                                            <college.icon size={20} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                                        {college.name}
                                    </h3>

                                    <div className="space-y-3 mt-auto">
                                        {college.programs.map((prog, i) => (
                                            <div key={i} className="flex flex-col p-3 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors border border-slate-100">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="font-semibold text-sm text-slate-800">{prog.name}</span>
                                                </div>
                                                <div className="inline-flex items-center text-xs text-slate-500 font-mono">
                                                    <Hash size={10} className="mr-1 text-slate-400" />
                                                    {prog.code}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Why Choose Vedic Group?</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white shadow-lg shadow-amber-500/30">
                                    <GraduationCap size={24} />
                                </div>
                                <h4 className="font-semibold text-slate-900 mb-2">Recognized Programs</h4>
                                <p className="text-sm text-slate-600">All our colleges are recognized by relevant authorities</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white shadow-lg shadow-amber-500/30">
                                    <MapPin size={24} />
                                </div>
                                <h4 className="font-semibold text-slate-900 mb-2">Strategic Location</h4>
                                <p className="text-sm text-slate-600">Conveniently located in Meerut with excellent connectivity</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white shadow-lg shadow-amber-500/30">
                                    <Phone size={24} />
                                </div>
                                <h4 className="font-semibold text-slate-900 mb-2">Support & Guidance</h4>
                                <p className="text-sm text-slate-600">Dedicated support team to help you throughout your journey</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Colleges;
