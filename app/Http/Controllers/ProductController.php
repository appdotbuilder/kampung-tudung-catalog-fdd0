<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the products.
     */
    public function index()
    {
        $tudungProducts = Product::tudung()
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->get();

        $hatProducts = Product::hats()
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->get();

        $featuredProducts = Product::featured()
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->limit(6)
            ->get();

        return Inertia::render('catalog/index', [
            'tudungProducts' => $tudungProducts,
            'hatProducts' => $hatProducts,
            'featuredProducts' => $featuredProducts
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('catalog/product', [
            'product' => $product
        ]);
    }
}