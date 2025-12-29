'use client';
import { theme } from '../theme';
import { Search } from 'lucide-react';
export default function CTA() {
    return (
        <section className="py-32 bg-stone-900 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070')] bg-cover bg-center opacity-20" />
            <div className={`relative z-10 ${theme.layout.container}`}>
                <h2 className="text-5xl md:text-6xl font-bold mb-8">Encontre seu próximo endereço.</h2>
                <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto">Cadastre-se e receba oportunidades exclusivas antes de irem ao mercado.</p>
                <a href="#contato" className="inline-flex items-center gap-3 bg-emerald-700 px-12 py-5 rounded-lg font-bold hover:bg-emerald-800 text-white transition-all shadow-2xl"><Search className="w-5 h-5" />Buscar Imóveis</a>
            </div>
        </section>
    );
}
