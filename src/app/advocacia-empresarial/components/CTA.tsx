'use client';

import { theme } from '../theme';
import { Phone } from 'lucide-react';

export default function CTA() {
    return (
        <section id="consulta" className="py-32 bg-neutral-900 text-white text-center">
            <div className={theme.layout.container}>
                <h2 className="font-serif text-5xl mb-8">
                    Proteja sua empresa hoje.
                </h2>
                <p className="text-neutral-300 text-lg mb-12 max-w-2xl mx-auto">
                    Agende uma consulta inicial sem compromisso. Analisaremos seu caso e apresentaremos a melhor estratégia jurídica.
                </p>

                <a
                    href="#contato"
                    className="inline-flex items-center gap-3 bg-amber-600 text-white px-10 py-5 rounded-lg font-bold hover:bg-amber-700 transition-all shadow-xl"
                >
                    <Phone className="w-5 h-5" />
                    Falar com Advogado
                </a>

                <p className="text-neutral-500 text-sm mt-6">Consulta inicial: R$ 800 (descontados ao fechar contrato)</p>
            </div>
        </section>
    );
}
