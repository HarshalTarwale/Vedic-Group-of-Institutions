import React, { useState } from 'react';
import { FileText, Users, Calendar, CheckCircle, UserCheck, Phone, X, Send, Upload, Loader2 } from 'lucide-react';

const Admissions = () => {
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initial State matching the detailed form structure
    const [formData, setFormData] = useState({
        collegeChoice: '',
        registrationNo: '',
        rollNo: '',
        stateRank: '',
        categoryRank: '',
        personal: {
            name: '',
            fatherName: '',
            motherName: '',
            dob: '',
            aadhar: '',
            nationality: 'Indian',
            sex: '',
            category: '',
            subCategory: '',
            caste: '',
            guardianOccupation: '',
            guardianIncome: ''
        },
        address: {
            permanent: '',
            correspondence: '',
            pin: '',
            phone: '',
            mobile: ''
        },
        academic: {
            highSchool: { year: '', division: '', percentage: '', subject: '', board: '' },
            intermediate: { year: '', division: '', percentage: '', subject: '', board: '' },
            graduation: { year: '', division: '', percentage: '', subject: '', board: '' }
        },
        punished: {
            isPunished: 'No',
            details: ''
        },
        resultDeclared: false,
        undertakingAgreed: false,
        photo: null
    });

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            personal: { ...prev.personal, [name]: value }
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            address: { ...prev.address, [name]: value }
        }));
    };

    const handleAcademicChange = (level, field, value) => {
        setFormData(prev => ({
            ...prev,
            academic: {
                ...prev.academic,
                [level]: { ...prev.academic[level], [field]: value }
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            access_key: "",
            subject: "New Admission Application - " + formData.personal.name,
            from_name: "Vedic Group of Institutions Admissions Portal",

            "College Choice": formData.collegeChoice,
            "Registration No": formData.registrationNo,
            "Roll No": formData.rollNo,
            "State Rank": formData.stateRank,
            "Category Rank": formData.categoryRank,

            // Personal
            "Candidate Name": formData.personal.name,
            "Father's Name": formData.personal.fatherName,
            "Mother's Name": formData.personal.motherName,
            "DOB": formData.personal.dob,
            "Aadhar No": formData.personal.aadhar,
            "Nationality": formData.personal.nationality,
            "Gender": formData.personal.sex,
            "Category": formData.personal.category,
            "Sub Category": formData.personal.subCategory,
            "Caste": formData.personal.caste,
            "Guardian Occupation": formData.personal.guardianOccupation,
            "Guardian Income": formData.personal.guardianIncome,

            // Address
            "Permanent Address": formData.address.permanent,
            "Correspondence Address": formData.address.correspondence,
            "Pin Code": formData.address.pin,
            "Phone": formData.address.phone,
            "Mobile": formData.address.mobile,

            // Academic - High School
            "High School Year": formData.academic.highSchool.year,
            "High School Division": formData.academic.highSchool.division,
            "High School %": formData.academic.highSchool.percentage,
            "High School Subject": formData.academic.highSchool.subject,
            "High School Board": formData.academic.highSchool.board,

            // Academic - Intermediate
            "Intermediate Year": formData.academic.intermediate.year,
            "Intermediate Division": formData.academic.intermediate.division,
            "Intermediate %": formData.academic.intermediate.percentage,
            "Intermediate Subject": formData.academic.intermediate.subject,
            "Intermediate Board": formData.academic.intermediate.board,
            
            // Academic - Graduation
            "Graduation Year": formData.academic.graduation.year,
            "Graduation Division": formData.academic.graduation.division,
            "Graduation %": formData.academic.graduation.percentage,
            "Graduation Subject": formData.academic.graduation.subject,
            "Graduation Board": formData.academic.graduation.board,
            // photo
            "Photo": formData.photo,
            // Extra
            "Punished?": formData.punished.isPunished,
            "Punishment Details": formData.punished.details,
            "Results Declared?": formData.resultDeclared ? "Yes" : "No",
            "Undertaking Agreed": formData.undertakingAgreed ? "Yes" : "No"
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                alert("Application Submitted Successfully! We have received your details.");
                setShowForm(false);
                // Optional: Reset form here if needed
            } else {
                alert("Submission failed: " + result.message);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            alert("Something went wrong. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="pt-20">
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header - Unchanged */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Admissions 2025-26</h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">Begin your journey with Vedic Group of Institutions. Follow our simple admission process.</p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 rounded-full font-semibold animate-pulse">
                            <CheckCircle className="w-5 h-5" />
                            Admissions Open Now!
                        </div>
                    </div>

                    {/* Admission Process - Unchanged */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Admission Process</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "STEP 1",
                                    title: "Submit Application",
                                    desc: "Fill out the online application form with your details",
                                    icon: FileText
                                },
                                {
                                    step: "STEP 2",
                                    title: "Document Verification",
                                    desc: "Our team will verify your documents and eligibility",
                                    icon: UserCheck
                                },
                                {
                                    step: "STEP 3",
                                    title: "Counseling",
                                    desc: "Attend counseling session and select your course",
                                    icon: Calendar
                                },
                                {
                                    step: "STEP 4",
                                    title: "Admission Confirmation",
                                    desc: "Complete fee payment and secure your seat",
                                    icon: CheckCircle
                                }
                            ].map((item, index) => (
                                <div key={index} className="rounded-xl border bg-white text-slate-900 shadow text-center h-full hover:shadow-lg transition-all hover:-translate-y-1">
                                    <div className="flex flex-col space-y-1.5 p-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-md">
                                            <item.icon className="w-8 h-8" />
                                        </div>
                                        <div className="text-sm font-bold text-amber-600 mb-2">{item.step}</div>
                                        <div className="font-semibold tracking-tight text-lg">{item.title}</div>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Eligibility Criteria - SAME AS BEFORE */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Eligibility Criteria</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    course: "B.Ed",
                                    criteria: [
                                        "Bachelor's degree in any discipline with minimum 50% marks",
                                        "Relaxation of 5% for reserved categories",
                                        "Age limit as per university norms"
                                    ]
                                },
                                {
                                    course: "D.El.Ed (BTC)",
                                    criteria: [
                                        "Bachelor's degree in any discipline with minimum 50% marks",
                                        "Relaxation of 5% for reserved categories",
                                        "Must be 35 years of age for General Category and 40 years of age for reserved categories"
                                    ]
                                },
                                {
                                    course: "D.Pharm",
                                    criteria: [
                                        "10+2 with Physics, Chemistry, and Biology/Mathematics",
                                        "Minimum 50% marks in qualifying examination",
                                        "Must be 17 years of age"
                                    ]
                                }
                            ].map((item, index) => (
                                <div key={index} className="rounded-xl bg-white text-slate-900 shadow border-2 border-transparent hover:border-amber-300 transition-colors">
                                    <div className="flex flex-col space-y-1.5 p-6 border-b border-gray-100">
                                        <div className="font-semibold tracking-tight text-xl text-amber-600">{item.course}</div>
                                    </div>
                                    <div className="p-6">
                                        <ul className="space-y-3">
                                            {item.criteria.map((criterion, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm text-slate-600">{criterion}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Required Documents - SAME AS BEFORE */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Required Documents</h2>
                        <div className="rounded-xl border bg-white text-slate-900 shadow max-w-4xl mx-auto">
                            <div className="p-6 md:p-8">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "10th & 12th Mark sheets and Certificates",
                                        "Graduation Mark sheets (for B.Ed)",
                                        "Transfer Certificate",
                                        "Migration Certificate",
                                        "Aadhar Card",
                                        "Passport size photographs",
                                        "Caste Certificate (if applicable)",
                                        "Income Certificate (for scholarship)"
                                    ].map((doc, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                                            <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-700 font-medium">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12 border border-amber-200">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Apply?</h2>
                        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Start your application today or get in touch with our admissions team for guidance</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => setShowForm(true)}
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white shadow h-10 rounded-md px-8 bg-amber-500 hover:bg-amber-600"
                            >
                                Start Application
                            </button>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input bg-white shadow-sm hover:bg-slate-50 hover:text-accent-foreground h-10 rounded-md px-8 border border-slate-200 text-slate-900"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Contact Admissions
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Form Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 selection:bg-amber-100">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl my-8 relative animate-in zoom-in-95 duration-200 flex flex-col">

                        {/* Modal Close Button */}
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors z-20"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12 space-y-8">

                            {/* Form Header */}
                            <div className="text-center border-b-2 border-slate-800 pb-6">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">VEDIC GROUP OF INSTITUTIONS</h1>
                                <p className="text-slate-600 font-medium mt-2">Address: Vill.- Khirwa Jalalpur, Teh.- Sardhana, Distt.- Meerut</p>
                                <p className="text-slate-600 font-medium">Mob: 9412061077, 9411094203</p>
                                <div className="mt-4 inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded font-bold border border-amber-200">Course: D.El.Ed (B.T.C)</div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">

                                {/* Section 1: College Choice */}
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-navy mb-4 border-b border-slate-200 pb-2">College Choice</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Shiv Narayan College of Education",
                                            "Aryan College of Professional Education",
                                            "Meerut College of Professional Education"
                                        ].map((college, idx) => (
                                            <label key={idx} className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200 hover:border-amber-400 cursor-pointer transition-colors">
                                                <input
                                                    type="radio"
                                                    name="collegeChoice"
                                                    value={college}
                                                    required
                                                    className="w-5 h-5 text-amber-600 focus:ring-amber-500 border-gray-300"
                                                    onChange={(e) => setFormData(prev => ({ ...prev, collegeChoice: e.target.value }))}
                                                />
                                                <span className="font-medium text-slate-700">{college}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Registration Details */}
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-navy mb-4 border-b border-slate-200 pb-2">Registration Details</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Registration No</label>
                                            <input type="text" name="registrationNo" className="input-field" onChange={(e) => setFormData(prev => ({ ...prev, registrationNo: e.target.value }))} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Roll No</label>
                                            <input type="text" name="rollNo" className="input-field" onChange={(e) => setFormData(prev => ({ ...prev, rollNo: e.target.value }))} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">State Rank</label>
                                            <input type="text" name="stateRank" className="input-field" onChange={(e) => setFormData(prev => ({ ...prev, stateRank: e.target.value }))} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Category Rank</label>
                                            <input type="text" name="categoryRank" className="input-field" onChange={(e) => setFormData(prev => ({ ...prev, categoryRank: e.target.value }))} />
                                        </div>
                                    </div>
                                </div>

                                {/* Section A: Personal Details */}
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-navy mb-4 border-b border-slate-200 pb-2">Section A – Personal Details</h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        <div className="lg:col-span-1">
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Name of Candidate *</label>
                                            <input type="text" name="name" required className="input-field" onChange={handlePersonalChange} />
                                        </div>
                                        <div className="lg:col-span-1">
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Father’s Name *</label>
                                            <input type="text" name="fatherName" required className="input-field" onChange={handlePersonalChange} />
                                        </div>
                                        <div className="lg:col-span-1">
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Mother’s Name *</label>
                                            <input type="text" name="motherName" required className="input-field" onChange={handlePersonalChange} />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Date of Birth *</label>
                                            <input type="date" name="dob" required className="input-field" onChange={handlePersonalChange} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Aadhar No *</label>
                                            <input type="text" name="aadhar" maxLength="12" required className="input-field" onChange={handlePersonalChange} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Nationality *</label>
                                            <input type="text" name="nationality" defaultValue="Indian" required className="input-field" onChange={handlePersonalChange} />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Sex *</label>
                                            <select name="sex" required className="input-field" onChange={handlePersonalChange}>
                                                <option value="">Select</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Category *</label>
                                            <select name="category" required className="input-field" onChange={handlePersonalChange}>
                                                <option value="">Select</option>
                                                <option value="Gen">Gen</option>
                                                <option value="OBC">OBC</option>
                                                <option value="SC">SC</option>
                                                <option value="ST">ST</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Sub-Category</label>
                                            <select name="subCategory" className="input-field" onChange={handlePersonalChange}>
                                                <option value="">Select (Optional)</option>
                                                <option value="PH">PH</option>
                                                <option value="Ex-Serviceman">Ex-Serviceman</option>
                                                <option value="FF">Freedom Fighter</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Caste</label>
                                            <input type="text" name="caste" className="input-field" onChange={handlePersonalChange} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Guardian Occupation</label>
                                            <input type="text" name="guardianOccupation" className="input-field" onChange={handlePersonalChange} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Guardian Income (p.a)</label>
                                            <input type="text" name="guardianIncome" className="input-field" onChange={handlePersonalChange} />
                                        </div>
                                    </div>
                                </div>

                                {/* Section B: Address */}
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-navy mb-4 border-b border-slate-200 pb-2">Section B – Address</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1">Permanent Address *</label>
                                                <textarea name="permanent" required rows="3" className="input-field" onChange={handleAddressChange}></textarea>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1">Correspondence Address</label>
                                                <textarea name="correspondence" rows="3" className="input-field" onChange={handleAddressChange}></textarea>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Pin Code *</label>
                                            <input type="text" name="pin" required className="input-field" onChange={handleAddressChange} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Phone</label>
                                            <input type="text" name="phone" className="input-field" onChange={handleAddressChange} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Mobile *</label>
                                            <input type="text" name="mobile" required className="input-field" onChange={handleAddressChange} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Photograph Upload</label>
                                            <div className="flex items-center gap-2">
                                                <label className="flex-1 cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-slate-600 hover:bg-gray-50 flex items-center justify-center gap-2">
                                                    <Upload size={16} />
                                                    <span>Choose File</span>
                                                    <input type="file" accept="image/*" className="hidden" onChange={(e) => setFormData(prev => ({ ...prev, photo: e.target.files[0] }))} />
                                                </label>
                                                {formData.photo && <span className="text-xs text-green-600 font-medium">Selected</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section C: Academic Record */}
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 overflow-x-auto">
                                    <h3 className="text-lg font-bold text-navy mb-4 border-b border-slate-200 pb-2">Section C – Academic Record</h3>
                                    <table className="w-full min-w-[700px] text-sm text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-200 text-slate-700">
                                                <th className="p-3 border border-slate-300 rounded-tl-md">Examination</th>
                                                <th className="p-3 border border-slate-300">Year</th>
                                                <th className="p-3 border border-slate-300">Division</th>
                                                <th className="p-3 border border-slate-300">% Marks</th>
                                                <th className="p-3 border border-slate-300">Subject</th>
                                                <th className="p-3 border border-slate-300 rounded-tr-md">Board/University</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {['High School', 'Intermediate', 'Graduation'].map((level, idx) => {
                                                const key = level.toLowerCase().replace(' ', '');
                                                return (
                                                    <tr key={idx} className="bg-white">
                                                        <td className="p-3 border border-slate-300 font-medium">{level}</td>
                                                        <td className="p-2 border border-slate-300"><input type="text" className="w-full table-input" onChange={(e) => handleAcademicChange(key, 'year', e.target.value)} /></td>
                                                        <td className="p-2 border border-slate-300"><input type="text" className="w-full table-input" onChange={(e) => handleAcademicChange(key, 'division', e.target.value)} /></td>
                                                        <td className="p-2 border border-slate-300"><input type="text" className="w-full table-input" onChange={(e) => handleAcademicChange(key, 'percentage', e.target.value)} /></td>
                                                        <td className="p-2 border border-slate-300"><input type="text" className="w-full table-input" onChange={(e) => handleAcademicChange(key, 'subject', e.target.value)} /></td>
                                                        <td className="p-2 border border-slate-300"><input type="text" className="w-full table-input" onChange={(e) => handleAcademicChange(key, 'board', e.target.value)} /></td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Additional Questions */}
                                <div className="space-y-6">
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                        <p className="font-semibold text-slate-800 text-sm mb-3">14. Whether you are punished for any offence/unfair means committed by you in the previously attended or the present institution.</p>
                                        <div className="flex gap-4 mb-3">
                                            <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="punished" value="No" defaultChecked onChange={(e) => setFormData(prev => ({ ...prev, punished: { ...prev.punished, isPunished: e.target.value } }))} /> No</label>
                                            <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="punished" value="Yes" onChange={(e) => setFormData(prev => ({ ...prev, punished: { ...prev.punished, isPunished: e.target.value } }))} /> Yes</label>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="If yes, Give details..."
                                            className="input-field"
                                            disabled={formData.punished.isPunished === 'No'}
                                            onChange={(e) => setFormData(prev => ({ ...prev, punished: { ...prev.punished, details: e.target.value } }))}
                                        />
                                    </div>

                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                        <label className="flex items-start gap-3 cursor-pointer">
                                            <input type="checkbox" className="mt-1 w-4 h-4 text-amber-600 rounded" onChange={(e) => setFormData(prev => ({ ...prev, resultDeclared: e.target.checked }))} />
                                            <span className="text-sm text-slate-700 font-medium">15. If the result of the qualifying examination is not yet declared, submit a certificate from the Head of the institution to the effect that the candidate has appeared in all theory/practical papers of the qualifying examination.</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Undertaking */}
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-navy mb-4 border-b border-slate-200 pb-2">Undertaking</h3>
                                    <ol className="list-decimal pl-5 space-y-3 text-sm text-slate-700">
                                        <li>I shall always obey on letter and spirit the rules and regulations formulated by the University and the College and shall be personally responsible for obeying the same.</li>
                                        <li>That I shall not indulge in any activity that comes under indiscipline nor shall be involved in any action that has been declared against the conduct rules.</li>
                                        <li>That at no stage I shall be involved in ragging and shall also co-operate in reporting any such matter to authorities if I come to know about this.</li>
                                        <li>That I shall be personally responsible to complete my assignments and submit them in time for assessment and evaluation.</li>
                                        <li>That I shall ensure that I am regular and punctual in my classes and attempt to complete 100% attendance but not less than 75% under any circumstance.</li>
                                        <li>That I am at present not a student of any other College/University and shall not be appearing at any other examination leading to a degree.</li>
                                    </ol>
                                </div>

                                {/* Declaration */}
                                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input type="checkbox" required className="mt-1 w-5 h-5 text-amber-600 rounded border-gray-300 focus:ring-amber-500" onChange={(e) => setFormData(prev => ({ ...prev, undertakingAgreed: e.target.checked }))} />
                                        <span className="text-sm text-slate-800 font-medium leading-relaxed">
                                            I have read the above points carefully and shall be responsible for following them. I hereby declare that the information given in this application form is true to best of my knowledge and belief. In case any information is found untrue, the University/College can cancel my admission; for that no claim for refund of fee would be raised by me nor challenge in my court of law.
                                        </span>
                                    </label>
                                </div>

                                {/* Notes */}
                                <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                                    <h4 className="font-bold text-navy mb-3 text-lg">Note: -</h4>
                                    <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
                                        <li>No other person is allowed to sign on behalf of the applicant.</li>
                                        <li>The applicant is required to enclose self attested photocopy of every relevant information related to academic record, age, reserve category, Weight ages etc.</li>
                                        <li>The applicant is also required to enclose any identity proof such as photocopy of I card/Exam Admit card of last exam passed/D.L./Pan card/Bank Account Pass Book with photo.</li>
                                    </ol>
                                </div>

                                {/* Form Actions */}
                                <div className="flex gap-4 pt-4 border-t border-gray-200">
                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-6 py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-colors shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <Send size={18} />
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .input-field {
                    width: 100%;
                    padding: 0.5rem 0.75rem;
                    border-radius: 0.375rem;
                    border: 1px solid #d1d5db;
                    outline: none;
                    transition: all 0.2s;
                    font-size: 0.875rem;
                }
                .input-field:focus {
                    border-color: #d97706; /* amber-600 */
                    box-shadow: 0 0 0 2px rgba(217, 119, 6, 0.2);
                }
                .table-input {
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.25rem;
                    border: 1px solid transparent;
                    outline: none;
                    font-size: 0.875rem;
                    width: 100%;
                }
                .table-input:focus {
                    background-color: #fef3c7; /* amber-50 */
                }
            `}</style>
        </main>
    );
};

export default Admissions;
