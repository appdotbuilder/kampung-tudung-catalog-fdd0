<?php

use App\Models\Product;

it('displays products on catalog page', function () {
    // Create test products
    $tudungProduct = Product::factory()->tudung()->featured()->create([
        'name' => 'Test Tudung',
        'sku' => 'KT-TUD001'
    ]);
    
    $hatProduct = Product::factory()->hat()->create([
        'name' => 'Test Hat',
        'sku' => 'KT-HAT001'
    ]);

    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('catalog/index')
        ->has('tudungProducts', 1)
        ->has('hatProducts', 1)
        ->has('featuredProducts', 1)
        ->where('tudungProducts.0.name', 'Test Tudung')
        ->where('hatProducts.0.name', 'Test Hat')
    );
});

it('shows product information on detail page', function () {
    $product = Product::factory()->create([
        'name' => 'Premium Silk Tudung',
        'description' => 'Beautiful handcrafted tudung',
        'sku' => 'KT-SLK001'
    ]);

    $response = $this->get("/products/{$product->id}");

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('catalog/product')
        ->where('product.name', 'Premium Silk Tudung')
        ->where('product.sku', 'KT-SLK001')
        ->where('product.description', 'Beautiful handcrafted tudung')
    );
});

it('displays contact form', function () {
    $response = $this->get('/contact');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('contact')
    );
});

it('handles contact form submission', function () {
    $contactData = [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'company' => 'Test Company',
        'country' => 'United States',
        'phone' => '+1234567890',
        'product_interest' => 'both',
        'message' => 'I am interested in wholesale pricing for your tudung collection.'
    ];

    $response = $this->post('/contact', $contactData);

    $response->assertRedirect();
    $response->assertSessionHas('success');
});

it('validates contact form data', function () {
    $response = $this->post('/contact', []);

    $response->assertSessionHasErrors(['name', 'email', 'country', 'message']);
});