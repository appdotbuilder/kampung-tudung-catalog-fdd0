import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ProductCard } from '@/components/product-card';

interface Product {
    id: number;
    name: string;
    description: string;
    sku: string;
    category: string;
    images: string[];
    featured: boolean;
    sort_order: number;
}

interface Props {
    tudungProducts: Product[];
    hatProducts: Product[];
    featuredProducts: Product[];
    [key: string]: unknown;
}

export default function CatalogIndex({ tudungProducts, hatProducts, featuredProducts }: Props) {
    return (
        <>
            <Head title="Kampung Tudung - Premium Headscarves & Hats">
                <meta name="description" content="Discover premium quality tudung and hats from Kampung Tudung. Handcrafted pieces for international buyers featuring traditional Malaysian craftsmanship." />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    🏕️ Kampung Tudung
                                </h1>
                            </div>
                            <nav className="flex space-x-6">
                                <a href="#tudung" className="text-gray-600 hover:text-gray-900 font-medium">
                                    Tudung
                                </a>
                                <a href="#hats" className="text-gray-600 hover:text-gray-900 font-medium">
                                    Hats
                                </a>
                                <Link 
                                    href={route('contact.create')} 
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-4">
                            Premium Quality Tudung & Hats
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Handcrafted with traditional Malaysian excellence for international buyers
                        </p>
                        <div className="flex justify-center space-x-8 text-lg">
                            <div className="flex items-center">
                                ✨ Premium Materials
                            </div>
                            <div className="flex items-center">
                                🌍 International Shipping
                            </div>
                            <div className="flex items-center">
                                🤝 Wholesale Inquiries Welcome
                            </div>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Featured Products */}
                    {featuredProducts.length > 0 && (
                        <section className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                    ⭐ Featured Products
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Our most popular and premium selections
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Tudung Section */}
                    <section id="tudung" className="mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                🧕 Tudung Collection
                            </h3>
                            <p className="text-lg text-gray-600">
                                Premium headscarves crafted with traditional techniques
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {tudungProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>

                    {/* Hats Section */}
                    <section id="hats" className="mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                👒 Hats Collection
                            </h3>
                            <p className="text-lg text-gray-600">
                                Traditional and modern hats for every occasion
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {hatProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="bg-white rounded-2xl p-8 shadow-lg text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            🌟 Ready to Place an Order?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Contact us for wholesale inquiries, custom orders, or any questions about our products. 
                            We work with international buyers and offer competitive pricing for bulk orders.
                        </p>
                        <Link 
                            href={route('contact.create')} 
                            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            Get In Touch
                        </Link>
                    </section>
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