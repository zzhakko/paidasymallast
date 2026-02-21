import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const scrollToBooking = () => {
        const bookingSection = document.getElementById('booking');
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 lg:py-0">
            {/* Background Graphic elements for minimal aesthetic */}
            <div className="absolute top-0 left-0 w-full h-full inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Content Block */}
                    <div className="flex-1 lg:max-w-xl text-center lg:text-left">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent-dark text-sm font-semibold mb-6 animate-fade-in-up">
                            Доставка за 120 минут
                        </span>

                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-dark mb-6 leading-[1.1] tracking-tight">
                            Фермерские продукты <br className="hidden md:block" />
                            <span className="text-accent relative inline-block">
                                без обмана
                                <svg className="absolute -bottom-2 lg:-bottom-3 left-0 w-full h-3 lg:h-4 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                            <br className="hidden md:block" /> с доставкой даже в воскресенье.
                        </h1>

                        <p className="text-lg lg:text-xl text-dark/70 mb-10 leading-relaxed text-balance mx-auto lg:mx-0">
                            Привозим честное мясо и органику с прозрачным составом за 120 минут.
                            Работаем без выходных, пока другие магазины в Астане закрыты.
                        </p>

                        <button
                            onClick={scrollToBooking}
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-semibold transition-all duration-300 shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/40 overflow-hidden transform hover:-translate-y-1"
                        >
                            <span className="relative z-10 flex items-center gap-2 text-lg">
                                Собрать корзину
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                            </span>
                            <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
                        </button>
                    </div>

                    {/* Hero Image Block */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-dark/5 aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3]">
                            <img
                                src="/assets/hero-img.png"
                                alt="Свежие фермерские продукты"
                                className="w-full h-full object-cover rounded-[2.5rem] transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 rounded-[2.5rem] shadow-inner border border-white/20 pointer-events-none"></div>
                        </div>

                        {/* Floating decorative elements */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl shadow-dark/5 flex items-center gap-4 animate-bounce-slow">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                                100%
                            </div>
                            <div className="text-sm font-medium text-dark">
                                Органический<br /><span className="text-dark/60 text-xs">состав</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
