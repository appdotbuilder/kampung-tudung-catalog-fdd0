<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->string('sku')->unique()->comment('Product code/SKU');
            $table->enum('category', ['tudung', 'hats'])->comment('Product category: tudung or hats');
            $table->json('images')->comment('Array of image paths');
            $table->boolean('featured')->default(false)->comment('Whether product is featured');
            $table->integer('sort_order')->default(0)->comment('Order for displaying products');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('category');
            $table->index('featured');
            $table->index(['category', 'sort_order']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};