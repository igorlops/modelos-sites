'use client';

import { theme } from '../theme';
import { Sparkles } from 'lucide-react';

export default function Header() {
    return (
        <header className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF9F6]">
            <div className={theme.layout.container}>
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-20">

                    <div className="mb-6 animate-fade-in">
                        <span className="tracking-[0.3em] uppercase text-xs font-bold text-stone-500 border-b border-stone-300 pb-2">Estética Avançada & Bem-estar</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-serif text-stone-800 mb-8 leading-none tracking-tight">
                        Revele a sua <br />
                        <span className="italic text-rose-950/80">beleza real.</span>
                    </h1>

                    <p className="text-xl text-stone-600 max-w-2xl mb-10 font-light leading-relaxed">
                        Protocolos exclusivos que unem tecnologia e sensibilidade artística para resultados naturais e duradouros.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <a href="#agendar" className="bg-stone-900 text-stone-50 px-10 py-4 text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors duration-500">
                            Agendar Avaliação
                        </a>
                        <a href="#procedimentos" className="border border-stone-300 text-stone-600 px-10 py-4 text-sm tracking-widest uppercase hover:border-stone-900 transition-colors duration-500">
                            Nossos Tratamentos
                        </a>
                    </div>

                </div>
            </div>

            {/* Decorative Images */}
            <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FAF9F6] z-10" />
                <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
                    alt="Mulher pele radiante"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FAF9F6] z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
                    alt="Detalhe skincare"
                    className="w-full h-full object-cover opacity-60 grayscale"
                />
            </div>

        </header>
    );
}
