<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $category = $this->faker->randomElement(['tudung', 'hats']);
        
        return [
            'name' => $category === 'tudung' 
                ? $this->faker->randomElement([
                    'Premium Silk Tudung',
                    'Cotton Blend Tudung',
                    'Luxury Chiffon Tudung',
                    'Traditional Batik Tudung',
                    'Modern Square Tudung'
                ])
                : $this->faker->randomElement([
                    'Traditional Songkok',
                    'Modern Fedora Hat',
                    'Classic Beret',
                    'Summer Sun Hat',
                    'Winter Wool Hat'
                ]),
            'description' => $this->faker->paragraphs(3, true),
            'sku' => 'KT-' . strtoupper($this->faker->unique()->bothify('??###')),
            'category' => $category,
            'images' => [
                'products/sample-1.jpg',
                'products/sample-2.jpg',
                'products/sample-3.jpg'
            ],
            'featured' => $this->faker->boolean(20), // 20% chance of being featured
            'sort_order' => $this->faker->numberBetween(1, 100),
        ];
    }

    /**
     * Indicate that the product is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'featured' => true,
        ]);
    }

    /**
     * Indicate that the product is a tudung.
     */
    public function tudung(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'tudung',
            'name' => $this->faker->randomElement([
                'Premium Silk Tudung',
                'Cotton Blend Tudung',
                'Luxury Chiffon Tudung',
                'Traditional Batik Tudung',
                'Modern Square Tudung'
            ]),
        ]);
    }

    /**
     * Indicate that the product is a hat.
     */
    public function hat(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'hats',
            'name' => $this->faker->randomElement([
                'Traditional Songkok',
                'Modern Fedora Hat',
                'Classic Beret',
                'Summer Sun Hat',
                'Winter Wool Hat'
            ]),
        ]);
    }
}