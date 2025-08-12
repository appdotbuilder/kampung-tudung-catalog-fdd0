<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create featured tudung products
        Product::factory()->tudung()->featured()->createMany([
            [
                'name' => 'Premium Silk Tudung - Royal Blue',
                'description' => 'Exquisite handcrafted silk tudung featuring premium quality materials and elegant draping. This luxurious piece combines traditional Malaysian craftsmanship with modern sophistication. The silk fabric provides excellent breathability while maintaining an elegant appearance throughout the day. Perfect for special occasions and formal events.',
                'sku' => 'KT-SLK001',
                'images' => ['products/tudung-silk-blue.jpg', 'products/tudung-silk-blue-2.jpg', 'products/tudung-silk-blue-3.jpg'],
                'sort_order' => 1,
            ],
            [
                'name' => 'Cotton Blend Tudung - Emerald Green',
                'description' => 'Comfortable daily wear tudung made from high-quality cotton blend fabric. Offers perfect balance between comfort and elegance. The breathable material makes it ideal for tropical climates while maintaining a professional appearance. Features reinforced edges for durability and easy care instructions.',
                'sku' => 'KT-CTN002',
                'images' => ['products/tudung-cotton-green.jpg', 'products/tudung-cotton-green-2.jpg'],
                'sort_order' => 2,
            ]
        ]);

        // Create regular tudung products
        Product::factory()->tudung()->createMany([
            [
                'name' => 'Chiffon Tudung - Dusty Rose',
                'description' => 'Lightweight chiffon tudung perfect for everyday wear. The soft, flowing fabric creates beautiful draping while remaining comfortable throughout the day. Available in a variety of colors to match any outfit.',
                'sku' => 'KT-CHF003',
                'images' => ['products/tudung-chiffon-rose.jpg', 'products/tudung-chiffon-rose-2.jpg'],
                'sort_order' => 3,
            ],
            [
                'name' => 'Batik Tudung - Traditional Pattern',
                'description' => 'Authentic Malaysian batik tudung featuring traditional motifs and patterns. Each piece is carefully crafted by skilled artisans, making every tudung unique. The vibrant colors and intricate designs celebrate Malaysian heritage.',
                'sku' => 'KT-BTK004',
                'images' => ['products/tudung-batik-traditional.jpg', 'products/tudung-batik-traditional-2.jpg'],
                'sort_order' => 4,
            ],
            [
                'name' => 'Instant Tudung - Navy Blue',
                'description' => 'Convenient instant tudung for busy lifestyles. Pre-styled for quick and easy wearing while maintaining an elegant appearance. Perfect for work, travel, and daily activities.',
                'sku' => 'KT-INS005',
                'images' => ['products/tudung-instant-navy.jpg'],
                'sort_order' => 5,
            ]
        ]);

        // Create featured hat products
        Product::factory()->hat()->featured()->createMany([
            [
                'name' => 'Traditional Songkok - Black Velvet',
                'description' => 'Authentic Malaysian songkok made from premium black velvet. Meticulously crafted following traditional methods passed down through generations. Features perfect proportions and comfortable fit for formal occasions and cultural ceremonies.',
                'sku' => 'KT-SGK006',
                'images' => ['products/songkok-black-velvet.jpg', 'products/songkok-black-velvet-2.jpg'],
                'sort_order' => 6,
            ]
        ]);

        // Create regular hat products
        Product::factory()->hat()->createMany([
            [
                'name' => 'Modern Fedora - Charcoal Gray',
                'description' => 'Contemporary fedora hat combining classic style with modern aesthetics. Made from high-quality felt material with excellent shape retention. Perfect for both casual and semi-formal occasions.',
                'sku' => 'KT-FED007',
                'images' => ['products/fedora-charcoal.jpg', 'products/fedora-charcoal-2.jpg'],
                'sort_order' => 7,
            ],
            [
                'name' => 'Classic Beret - Burgundy',
                'description' => 'Elegant beret hat crafted from soft wool blend. Features traditional beret styling with modern comfort. Available in rich burgundy color that complements various outfits and occasions.',
                'sku' => 'KT-BRT008',
                'images' => ['products/beret-burgundy.jpg'],
                'sort_order' => 8,
            ],
            [
                'name' => 'Sun Hat - Natural Straw',
                'description' => 'Handwoven sun hat made from natural straw materials. Provides excellent sun protection while maintaining breathability. Perfect for outdoor activities and tropical climates.',
                'sku' => 'KT-SUN009',
                'images' => ['products/sunhat-straw.jpg', 'products/sunhat-straw-2.jpg'],
                'sort_order' => 9,
            ],
            [
                'name' => 'Winter Beanie - Merino Wool',
                'description' => 'Warm and comfortable beanie made from premium merino wool. Features superior insulation properties while remaining lightweight. Perfect for cooler climates and winter seasons.',
                'sku' => 'KT-BEN010',
                'images' => ['products/beanie-merino.jpg'],
                'sort_order' => 10,
            ]
        ]);
    }
}