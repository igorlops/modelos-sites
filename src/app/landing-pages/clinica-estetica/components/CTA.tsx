'use client';

import { theme } from '../theme';

export default function CTA() {
    return (
        <section id="agendar" className="py-32 bg-stone-100 flex items-center justify-center text-center">
            <div className={theme.layout.container}>
                <p className="text-xs font-bold tracking-[0.3em] text-rose-900 mb-6 uppercase">Exclusive Care</p>
                <h2 className="font-serif text-5xl md:text-7xl text-stone-900 mb-8">
                    Permita-se viver essa experiência.
                </h2>
                <p className="text-stone-500 font-light text-lg mb-12 max-w-xl mx-auto">
                    Vagas limitadas para avaliação este mês. Garanta seu horário exclusivo.
                </p>

                <a
                    href="https:wa.me/..."
                    className="inline-block bg-rose-950 text-white px-12 py-5 text-sm tracking-[0.2em] font-bold uppercase hover:bg-stone-900 transition-all duration-500"
                >
                    Reservar Horário
                </a>
            </div>
        </section>
    );
}
