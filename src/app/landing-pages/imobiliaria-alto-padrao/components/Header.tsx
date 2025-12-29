'use client';
import { theme } from '../theme';
import { Home, ArrowRight } from 'lucide-react';
export default function Header() {
    return (
        <header className="relative min-h-screen flex items-center bg-stone-900 text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075')] bg-cover bg-center opacity-30" />
            <div className={`relative z-10 ${theme.layout.container}`}>
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-emerald-800/30 border border-emerald-700/40 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                        <Home className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">Imóveis de Luxo</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8">Viva no <br /><span className="text-emerald-400">extraordinário.</span></h1>
                    <p className="text-xl text-stone-300 mb-12 leading-relaxed">Portfólio exclusivo de apartamentos e casas em bairros nobres de São Paulo. Assessoria completa da visita à escritura.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#imoveis" className="bg-emerald-700 px-8 py-4 rounded-lg font-bold hover:bg-emerald-800 inline-flex items-center justify-center">Ver Imóveis <ArrowRight className="ml-2 w-5 h-5" /></a>
                        <a href="#contato" className="border-2 border-white/40 px-8 py-4 rounded-lg font-bold hover:bg-white/10 inline-flex items-center justify-center">Falar com Corretor</a>
                    </div>
                    <div className="flex gap-12 mt-16 pt-8 border-t border-white/10">
                        <div><p className="text-4xl font-bold text-emerald-400">R$ 2.8Bi+</p><p className="text-sm text-stone-400">Em transações</p></div>
                        <div><p className="text-4xl font-bold text-emerald-400">500+</p><p className="text-sm text-stone-400">Imóveis vendidos</p></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
