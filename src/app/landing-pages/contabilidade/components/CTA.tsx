'use client';
import { theme } from '../theme';
import { Rocket } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-32 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
            <div className={theme.layout.container}>
                <h2 className="text-5xl font-bold mb-8">Migre para a Contabiliza+ hoje.</h2>
                <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Primeiro mês grátis + migração sem custo. Sem burocracias, sem taxas escondidas.</p>
                <a href="#contato" className="inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-2xl"><Rocket className="w-5 h-5" />Solicitar Proposta</a>
                <p className="text-sm text-blue-200 mt-6">A partir de R$ 249/mês • Cancele quando quiser</p>
            </div>
        </section>
    );
}
