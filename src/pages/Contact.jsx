import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            access_key: "",
            subject: "New Contact Message - " + formData.name,
            from_name: "Vedic Contact Form",
            ...formData
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
                alert("Message Sent Successfully! We will get back to you soon.");
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                alert("Failed to send message: " + result.message);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            alert("Something went wrong. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-white py-16 text-center border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-navy mb-4">Get in Touch</h1>
                    <p className="text-lg text-gray-500">
                        Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="bg-gray-light py-12 -mt-8 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            {
                                icon: Phone,
                                title: 'Phone',
                                lines: ['+91 79-83283510'],
                                color: 'bg-blue-100 text-blue-600'
                            },
                            {
                                icon: MessageCircle,
                                title: 'WhatsApp',
                                lines: ['+91 79-83292859'],
                                color: 'bg-green-100 text-green-600'
                            },
                            {
                                icon: Mail,
                                title: 'Email',
                                lines: ['info@vedicinstitutions.edu'],
                                color: 'bg-green-100 text-green-600'
                            },
                            {
                                icon: MapPin,
                                title: 'Address',
                                lines: ['Vill.- Khirwa Jalalpur, Teh.- Sardhana, Distt.- Meerut'],
                                color: 'bg-yellow-100 text-yellow-600'
                            },
                            {
                                icon: Clock,
                                title: 'Office Hours',
                                lines: ['Mon - Sat: 9:00 AM - 5:00 PM', 'Sunday: Closed'],
                                color: 'bg-purple-100 text-purple-600'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-navy mb-3">{item.title}</h3>
                                {item.lines.map((line, i) => (
                                    <p key={i} className="text-gray-500 text-sm font-medium">{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Left: Form */}
                        <div className="lg:col-span-7">
                            <h2 className="text-2xl font-bold text-navy mb-8">Send us a Message</h2>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-navy mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="Rahul Kumar"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-navy mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-navy mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-navy mb-2">Subject *</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="What is this regarding?"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-navy mb-2">Message *</label>
                                    <textarea
                                        rows="6"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-bold shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="mr-2 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} className="mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Right: Map & Info */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Map Box */}
                            <div className="bg-yellow-50 p-8 rounded-xl text-center">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">Vill.- Khirwa Jalalpur, Teh.- Sardhana, Distt.- Meerut</h3>
                                <p className="text-gray-500 mb-6">Map integration available</p>
                                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 font-mono text-sm">
                                    [Google Map Placeholder]
                                </div>
                            </div>

                            {/* Visit Box
                            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
                                <h3 className="text-lg font-bold text-navy mb-4">Visit Our Campus</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                    Schedule a campus visit to explore our facilities, meet our faculty, and experience the Vedic Group environment firsthand.
                                </p>
                                <button className="w-full py-3 border border-navy text-navy font-semibold rounded hover:bg-navy hover:text-white transition-all">
                                    Schedule Campus Tour
                                </button>
                            </div> */}

                            {/* Helpline */}
                            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                <h3 className="text-lg font-bold text-navy mb-2">Admissions Helpline</h3>
                                <p className="text-gray-600 text-sm mb-4">For immediate assistance with admissions, please call our dedicated helpline.</p>
                                <div className="flex items-center font-bold text-primary text-xl">
                                    <Phone size={24} className="mr-3" />
                                    +91 79-83283510
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
