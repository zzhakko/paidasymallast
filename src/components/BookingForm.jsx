import React, { useState } from 'react';
import { ArrowRight, Lock, CheckCircle2, Loader2, PartyPopper } from 'lucide-react';

export default function BookingForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const chat_id = import.meta.env.VITE_TELEGRAM_CHAT_ID;

        // Fallback for when env variables aren't configured yet so the site doesn't crash on testing
        if (!token || !chat_id) {
            console.error("Telegram Bot Token or Chat ID is missing. Check your .env.local file.");
            alert("Ошибка конфигурации бота. Пожалуйста, сообщите администратору.");
            setIsSubmitting(false);
            return;
        }

        const text = `🚀 *Новая заявка!*\n\n*Имя:* ${name}\n*Телефон:* ${phone}\n*Детали:* ${message || 'Нет'}`;
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}&parse_mode=Markdown`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.");
            }
        } catch (error) {
            console.error("Failed to send booking:", error);
            alert("Произошла сетевая ошибка. Проверьте подключение к интернету.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="booking" className="py-24 bg-primary relative">
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-accent/10 relative overflow-hidden transition-all duration-500 min-h-[500px] flex flex-col justify-center">
                    {/* Decorative abstract shape inside the card */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 max-w-2xl mx-auto w-full">

                        {!isSuccess ? (
                            <div className="animate-fade-in-up">
                                <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6">
                                    Получите доступ к <br className="hidden md:block" />
                                    <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-4">Лаборатории честности</span>
                                </h2>

                                <p className="text-dark/70 text-lg mb-12">
                                    Оставьте контактные данные, чтобы получить первый заказ с бесплатной доставкой от 15 000 тенге.
                                    Мы пришлем вам ссылку на видео с наших ферм и актуальные результаты лабораторных проверок.
                                </p>

                                <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Ваше имя"
                                            className="w-full px-6 py-4 rounded-2xl bg-primary border border-transparent focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all text-dark placeholder:text-dark/40"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Номер телефона"
                                            className="w-full px-6 py-4 rounded-2xl bg-primary border border-transparent focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all text-dark placeholder:text-dark/40"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="relative group">
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Детали заказа (опционально)"
                                            rows="3"
                                            className="w-full px-6 py-4 rounded-2xl bg-primary border border-transparent focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all text-dark placeholder:text-dark/40 resize-none"
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full relative group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-2xl font-medium transition-all duration-300 shadow-md shadow-accent/20 mt-4 overflow-hidden ${isSubmitting ? 'opacity-80 cursor-wait' : ''}`}
                                    >
                                        <span className="relative z-10 flex items-center gap-2 text-lg">
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Отправка...
                                                </>
                                            ) : (
                                                <>
                                                    Получить доступ
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </span>
                                        {!isSubmitting && <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>}
                                    </button>
                                </form>

                                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-dark/50 font-medium">
                                    <span className="flex items-center gap-2">
                                        <Lock className="w-4 h-4 text-accent" /> Конфиденциально
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-accent" /> Без спама
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="py-10 animate-fade-in-up text-center">
                                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 text-accent">
                                    <PartyPopper className="w-12 h-12" />
                                </div>
                                <h2 className="text-4xl font-serif text-dark mb-4">
                                    Заявка <span className="text-accent italic">принята!</span>
                                </h2>
                                <p className="text-dark/70 text-lg max-w-md mx-auto">
                                    Спасибо, <strong>{name}</strong>! Мы скоро свяжемся с вами по номеру <strong>{phone}</strong> для уточнения деталей вашего заказа.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSuccess(false);
                                        setName('');
                                        setPhone('');
                                        setMessage('');
                                    }}
                                    className="mt-10 px-8 py-3 text-accent font-medium hover:bg-accent/5 rounded-full transition-colors"
                                >
                                    Отправить новую заявку
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}
