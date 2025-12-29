'use client';

import { theme } from '../theme';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-32 relative overflow-hidden flex items-center justify-center bg-slate-950">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />

            <div className={`relative z-10 ${theme.layout.container} text-center`}>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
                    Comece sua <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Transformação</span>
                </h2>

                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                    As vagas para consultoria personalizada são limitadas para garantir a qualidade do atendimento. Garanta a sua agora.
                </p>

                <a
                    href="https://wa.me/..."
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-orange-600 rounded-full hover:bg-orange-700 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)]"
                >
                    QUERO MUDAR DE VIDA
                    <ArrowRight className="ml-2 w-6 h-6" />
                </a>
            </div>
        </section>
    );
}
