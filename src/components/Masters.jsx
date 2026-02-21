import React from 'react';
import { ShieldCheck, Truck, Users } from 'lucide-react';

const masters = [
    {
        image: '/assets/expert-1.png',
        role: 'Специалист по качеству состава',
        name: 'Айдос Н.',
        description: 'Лично отсеивает поставщиков, использующих скрытую патоку вместо меда и сухое молоко. Благодаря его контролю в нашем ассортименте нет продуктов, вызывающих скачки сахара.'
    },
    {
        image: '/assets/expert-2.png',
        role: 'Менеджер фермерских связей',
        name: 'Елена К.',
        description: 'Находит производителей, которые используют традиционные рецепты без консервантов и искусственных добавок. Обеспечивает наличие свежего кролика и домашнего масла даже в периоды дефицита.'
    },
    {
        image: '/assets/expert-3.png',
        role: 'Руководитель логистической службы',
        name: 'Марат Ж.',
        description: 'Оптимизировал сборку заказов так, чтобы исключить ошибки в комплектации и задержки. Гарантирует доставку продуктов бережно упакованными прямо к вашей двери.'
    }
];

export default function Masters() {
    return (
        <section id="masters" className="py-24 bg-primary relative overflow-hidden">
            {/* Subtle decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4">
                            <span className="text-accent italic">Мастера</span> своего дела
                        </h2>
                        <p className="text-dark/60 text-lg">
                            Команда экспертов, чьи реальные результаты стоят за каждой качественной доставкой на ваш стол.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {masters.map((master, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-[2.5rem] p-6 shadow-lg shadow-dark/5 hover:shadow-2xl hover:shadow-accent/10 border border-transparent hover:border-accent/20 transition-all duration-500 overflow-hidden flex flex-col"
                        >
                            {/* Expert Image */}
                            <div className="relative h-64 w-full mb-6 rounded-3xl overflow-hidden bg-primary">
                                <img
                                    src={master.image}
                                    alt={master.name}
                                    className="w-full h-full object-cover object-top filter contrast-105 transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="font-serif font-semibold text-2xl drop-shadow-md">
                                        {master.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Expert Info */}
                            <div className="flex-1 flex flex-col">
                                <div className="inline-flex items-center gap-2 mb-4">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                    <p className="text-sm text-accent-dark font-semibold tracking-wide uppercase">
                                        {master.role}
                                    </p>
                                </div>
                                <p className="text-dark/80 leading-relaxed text-[15px] flex-grow">
                                    {master.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
