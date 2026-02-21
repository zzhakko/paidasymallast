import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'О нас', id: 'services' },
        { name: 'Команда', id: 'masters' },
        { name: 'Отзывы', id: 'reviews' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img
                            src="/assets/logo.jpg"
                            alt="Paidasymall Logo"
                            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                        />
                        <span className="font-serif font-bold text-2xl text-dark tracking-tight">
                            Paidasymall
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-dark/70 hover:text-accent font-medium text-sm lg:text-base transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        ))}

                        <button
                            onClick={() => scrollToSection('booking')}
                            className="px-6 py-2.5 bg-dark text-white rounded-full text-sm font-medium hover:bg-accent transition-colors shadow-lg shadow-dark/10"
                        >
                            Сделать заказ
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-dark"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="py-4 px-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-left py-2 text-dark font-medium border-b border-gray-50 last:border-0"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('booking')}
                        className="w-full mt-2 px-6 py-3 bg-accent text-white rounded-xl font-medium shadow-md"
                    >
                        Сделать заказ
                    </button>
                </div>
            </div>
        </header>
    );
}
