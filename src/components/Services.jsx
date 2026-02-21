import React from 'react';
import { Search, Scale, Leaf } from 'lucide-react';

const services = [
    {
        icon: Search,
        title: 'Проверка органичности без маркетинга',
        pain: 'Вместо сомнительных этикеток «ЭКО» вы получаете доступ к видео с ферм и актуальным протоколам испытаний.',
        result: 'вы уверены в качестве каждой калории без переплат за пустые обещания.',
        delay: '0'
    },
    {
        icon: Scale,
        title: 'Точное взвешивание и фиксация цены',
        pain: 'Убираем страх «накруток» на кассе и обмана с весом — цена в корзине фиксируется до тиына.',
        result: 'вы платите ровно столько, сколько видели на сайте, без неприятных сюрпризов при доставке.',
        delay: '150'
    },
    {
        icon: Leaf,
        title: 'ЗОЖ-продукты с научным подходом',
        pain: 'Подбираем товары без глютена и лактозы, которые реально улучшают метаболизм, а не вызывают вздутие.',
        result: 'легкость и энергия после еды, подтвержденная нутрициологами.',
        delay: '300'
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4">
                        Почему нам <span className="text-accent italic">доверяют</span>
                    </h2>
                    <p className="text-dark/60 text-lg max-w-xl mx-auto">
                        Мы решаем главные проблемы покупки фермерских продуктов, превращая боль в уверенность.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-primary rounded-3xl p-8 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 border border-transparent hover:border-accent/20 flex flex-col h-full"
                            style={{ animationDelay: `${service.delay}ms` }}
                        >
                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-serif font-semibold text-dark mb-4 leading-tight">
                                {service.title}
                            </h3>

                            <div className="space-y-4 flex-grow text-sm md:text-base">
                                <p className="text-dark/70 leading-relaxed">
                                    <span className="font-semibold text-dark">Проблема:</span> {service.pain}
                                </p>
                                <div className="h-px w-full bg-gradient-to-r from-accent/20 to-transparent my-4"></div>
                                <p className="text-dark leading-relaxed font-medium">
                                    <span className="text-accent">Результат:</span> {service.result}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
