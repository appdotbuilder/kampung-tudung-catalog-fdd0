<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactInquiryRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    /**
     * Show the form for creating a new contact inquiry.
     */
    public function create()
    {
        return Inertia::render('contact');
    }

    /**
     * Store a newly created contact inquiry.
     */
    public function store(StoreContactInquiryRequest $request)
    {
        // Log the inquiry for now (in a real app, you'd save to database or send email)
        Log::info('Contact inquiry received', $request->validated());

        return redirect()->back()->with('success', 'Thank you for your inquiry! We will get back to you soon.');
    }
}