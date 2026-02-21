import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Masters from './components/Masters';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <Services />
            <Masters />
            <Reviews />
            <BookingForm />
        </div>
    );
}

export default App;
