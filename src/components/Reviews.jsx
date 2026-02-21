import React from 'react';
import { MessageCircleHeart, Star } from 'lucide-react';

const reviews = [
    {
        name: 'Жамиля К.',
        image: '/assets/avatar-1.png',
        text: 'Наконец-то нашла масло с тем самым домашним вкусом, который невозможно подделать. Раньше закупалась на ярмарках, но там каждый раз лотерея, а здесь всё стабильно и с сертификатами.',
        tag: 'Постоянный клиент'
    },
    {
        name: 'Данияр Л.',
        image: '/assets/avatar-2.png',
        text: 'Имею проблемы со здоровьем, поэтому состав для меня критичен. Ваши продукты без глютена реально выручают — после них нет тяжести, как от магазинных «ЗОЖ»-подделок.',
        tag: 'Ценитель ЗОЖ'
    },
    {
        name: 'Карим Б.',
        image: '/assets/avatar-3.png',
        text: 'Заказываю даже в воскресенье, когда остальные магазины в Астане отдыхают. Мясо приехало свежим, нежным и вовремя, жена очень довольна качеством крольчатины.',
        tag: 'Семьянин'
    }
];

export default function Reviews() {
    return (
        <section id="reviews" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent-dark text-sm font-medium mb-4">
                        <MessageCircleHeart className="w-4 h-4" />
                        <span>Живой формат</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4">
                        Отзывы без <span className="text-accent italic">фильтров</span>
                    </h2>
                    <p className="text-dark/60 text-lg max-w-xl mx-auto">
                        Опыт тех, кто уже перестал тратить время на поиски и выбрал честные продукты.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-primary hover:bg-white rounded-3xl p-8 transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-dark/5 flex flex-col"
                        >
                            <div className="flex text-accent mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-dark/80 italic text-lg leading-relaxed mb-8 flex-grow">
                                «{review.text}»
                            </p>

                            <div className="flex items-center gap-4 mt-auto border-t border-gray-200/60 pt-6">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                    onError={(e) => {
                                        // Fallback to initial display if image fails to load (since we only generated 2 avatars)
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />

                                {/* Fallback initial avatar container */}
                                <div className="w-14 h-14 rounded-full bg-accent/20 text-accent-dark hidden items-center justify-center font-serif text-xl font-bold border-2 border-white shadow-sm">
                                    {review.name[0]}
                                </div>

                                <div>
                                    <h4 className="font-serif font-bold text-dark text-lg leading-none mb-1">
                                        {review.name}
                                    </h4>
                                    <span className="text-xs font-semibold px-2.5 py-1 bg-white rounded-md text-dark/50 border border-gray-100 uppercase tracking-wider">
                                        {review.tag}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
