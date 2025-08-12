import React from 'react';
import { Link } from '@inertiajs/react';

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
}

export function ProductCard({ product }: Props) {
    const truncatedDescription = product.description.length > 120 
        ? product.description.substring(0, 120) + '...' 
        : product.description;

    return (
        <Link 
            href={route('products.show', product.id)}
            className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
            <div className="relative">
                {/* Product Image */}
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                    <img 
                        src={product.images[0] || '/images/placeholder-product.svg'} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                            e.currentTarget.src = '/images/placeholder-product.svg';
                        }}
                    />
                </div>
                
                {/* Featured Badge */}
                {product.featured && (
                    <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                        ⭐ Featured
                    </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {product.category}
                </div>
            </div>
            
            <div className="p-6">
                {/* Product Name */}
                <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                </h4>
                
                {/* SKU */}
                <p className="text-sm text-gray-500 mb-3 font-mono">
                    SKU: {product.sku}
                </p>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {truncatedDescription}
                </p>
                
                {/* View Details */}
                <div className="flex items-center justify-between">
                    <span className="text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                        View Details →
                    </span>
                    <div className="flex space-x-1">
                        {product.images.length > 1 && (
                            <span className="text-xs text-gray-400">
                                📸 {product.images.length} photos
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}