import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

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
    product: Product;
    [key: string]: unknown;
}

export default function ProductShow({ product }: Props) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <>
            <Head title={`${product.name} - Kampung Tudung`}>
                <meta name="description" content={product.description.substring(0, 160)} />
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
                            <Link 
                                href={route('contact.create')} 
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Product Images */}
                            <div className="p-8">
                                {/* Main Image */}
                                <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden mb-4">
                                    <img 
                                        src={product.images[selectedImageIndex] || '/images/placeholder-product.svg'} 
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = '/images/placeholder-product.svg';
                                        }}
                                    />
                                </div>
                                
                                {/* Image Thumbnails */}
                                {product.images.length > 1 && (
                                    <div className="grid grid-cols-4 gap-2">
                                        {product.images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedImageIndex(index)}
                                                className={`aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 transition-colors ${
                                                    selectedImageIndex === index 
                                                        ? 'border-indigo-500' 
                                                        : 'border-transparent hover:border-gray-300'
                                                }`}
                                            >
                                                <img 
                                                    src={image} 
                                                    alt={`${product.name} - View ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.src = '/images/placeholder-product.svg';
                                                    }}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Product Details */}
                            <div className="p-8">
                                <div className="mb-6">
                                    {product.featured && (
                                        <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                            ⭐ Featured Product
                                        </span>
                                    )}
                                    
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                        {product.name}
                                    </h1>
                                    
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                                            {product.category === 'tudung' ? '🧕 Tudung' : '👒 Hat'}
                                        </span>
                                        <span className="text-gray-600 font-mono text-sm">
                                            SKU: {product.sku}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        Product Description
                                    </h3>
                                    <div className="prose prose-gray max-w-none">
                                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center">
                                            ✨ Premium quality materials
                                        </li>
                                        <li className="flex items-center">
                                            🧵 Handcrafted with traditional techniques
                                        </li>
                                        <li className="flex items-center">
                                            🌍 International shipping available
                                        </li>
                                        <li className="flex items-center">
                                            📦 Wholesale orders welcome
                                        </li>
                                    </ul>
                                </div>

                                {/* Contact CTA */}
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Interested in this product?
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Contact us for pricing, availability, and bulk order inquiries.
                                    </p>
                                    <Link 
                                        href={route('contact.create', { product_sku: product.sku })} 
                                        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                                    >
                                        Inquire About This Product
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products Section */}
                    <div className="mt-12 text-center">
                        <Link 
                            href={route('home')} 
                            className="inline-block bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-50 transition-colors"
                        >
                            ← View All Products
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8 mt-16">
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