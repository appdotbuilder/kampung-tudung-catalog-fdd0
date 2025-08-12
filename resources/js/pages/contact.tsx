import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Contact() {
    const { data, setData, post, processing, errors, wasSuccessful } = useForm({
        name: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        product_interest: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact.store'));
    };

    if (wasSuccessful) {
        return (
            <>
                <Head title="Thank You - Kampung Tudung" />
                
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
                        <div className="text-6xl mb-4">✅</div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Thank You!
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Your inquiry has been received. We'll get back to you within 24 hours.
                        </p>
                        <Link 
                            href={route('home')} 
                            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            Back to Catalog
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Head title="Contact Us - Kampung Tudung">
                <meta name="description" content="Contact Kampung Tudung for wholesale inquiries, product information, and international shipping details." />
            </Head>
            
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <Link href={route('home')} className="flex items-center text-indigo-600 hover:text-indigo-700">
                                ← Back to Catalog
                            </Link>
                            <div className="flex items-center">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    🏕️ Kampung Tudung
                                </h1>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </header>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            📧 Contact Us
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ready to place an order or have questions about our products? 
                            We'd love to hear from international buyers and wholesale partners.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                Send us a message
                            </h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder="Your full name"
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            value={data.company}
                                            onChange={(e) => setData('company', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="Your company name"
                                        />
                                        {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                                            Country *
                                        </label>
                                        <input
                                            type="text"
                                            id="country"
                                            value={data.country}
                                            onChange={(e) => setData('country', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="Your country"
                                        />
                                        {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder="+1 234 567 8900"
                                    />
                                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label htmlFor="product_interest" className="block text-sm font-medium text-gray-700 mb-2">
                                        Product Interest
                                    </label>
                                    <select
                                        id="product_interest"
                                        value={data.product_interest}
                                        onChange={(e) => setData('product_interest', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    >
                                        <option value="">Select your interest</option>
                                        <option value="tudung">Tudung (Headscarves)</option>
                                        <option value="hats">Hats</option>
                                        <option value="both">Both Categories</option>
                                    </select>
                                    {errors.product_interest && <p className="mt-1 text-sm text-red-600">{errors.product_interest}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder="Tell us about your requirements, quantity needed, or any questions you have..."
                                    />
                                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {processing ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                    Why Choose Kampung Tudung?
                                </h3>
                                
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="text-2xl mr-4">✨</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Premium Quality</h4>
                                            <p className="text-gray-600 text-sm">Handcrafted with finest materials and traditional techniques</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="text-2xl mr-4">🌍</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">International Shipping</h4>
                                            <p className="text-gray-600 text-sm">Worldwide delivery with secure packaging</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="text-2xl mr-4">📦</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Wholesale Orders</h4>
                                            <p className="text-gray-600 text-sm">Competitive pricing for bulk purchases</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="text-2xl mr-4">🤝</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Reliable Partnership</h4>
                                            <p className="text-gray-600 text-sm">Trusted by international buyers worldwide</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    🚀 Quick Response Promise
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    We understand the importance of timely communication in international business. 
                                    Our team responds to all inquiries within 24 hours.
                                </p>
                                <div className="text-sm text-gray-500">
                                    Business hours: Monday - Friday, 9 AM - 6 PM (GMT+8)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h4 className="text-xl font-bold mb-4">🏕️ Kampung Tudung</h4>
                        <p className="text-gray-400 mb-4">
                            Premium quality headscarves and hats for international buyers
                        </p>
                        <p className="text-sm text-gray-500">
                            © 2024 Kampung Tudung. Handcrafted with ❤️ in Malaysia.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}