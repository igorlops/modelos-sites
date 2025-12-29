'use client';

import { theme } from '../theme';
import { Calendar } from 'lucide-react';

export default function CTA() {
    return (
        <section id="agendar" className="py-32 bg-white text-center">
            <div className={theme.layout.container}>
                <h2 className="font-serif text-5xl text-stone-800 mb-8">
                    Dê o primeiro passo rumo <br className="hidden md:block" />ao seu bem-estar.
                </h2>
                <p className="text-stone-600 font-light text-lg mb-12 max-w-2xl mx-auto">
                    A primeira sessão é dedicada a entender sua história e desenhar um plano terapêutico personalizado. Sem compromisso.
                </p>

                <a
                    href="https://wa.me/..."
                    className="inline-flex items-center gap-3 bg-teal-700 text-white px-10 py-5 rounded-lg font-semibold hover:bg-teal-800 transition-all shadow-lg shadow-teal-100 hover:-translate-y-1"
                >
                    <Calendar className="w-5 h-5" />
                    Agendar Primeira Sessão
                </a>

                <p className="text-stone-400 text-sm mt-6">Valor da sessão: R$ 250 (individual) | R$ 350 (casal)</p>
            </div>
        </section>
    );
}
