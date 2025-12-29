'use client';

import { theme } from '../theme';
import { Scale, ArrowRight } from 'lucide-react';

export default function Header() {
    return (
        <header className="relative min-h-[90vh] flex items-center bg-neutral-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')] bg-cover bg-center opacity-20" />

            <div className={`relative z-10 ${theme.layout.container}`}>
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-amber-700/20 border border-amber-700/30 px-4 py-2 rounded-full mb-8">
                        <Scale className="w-4 h-4 text-amber-400" />
                        <span className="text-sm font-semibold text-amber-300 uppercase tracking-wider">Advocacia Empresarial</span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8">
                        Protegemos seus <br />
                        <span className="text-amber-400">interesses corporativos.</span>
                    </h1>

                    <p className="text-xl text-neutral-300 mb-12 max-w-2xl leading-relaxed">
                        Escritório boutique com 25 anos de experiência em direito societário, contratos empresariais e litígios estratégicos.
                        Atuação nacional e internacional.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#consulta" className="inline-flex items-center justify-center bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition-all shadow-xl">
                            Agendar Consulta
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a href="#areas" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
                            Áreas de Atuação
                        </a>
                    </div>

                    <div className="flex items-center gap-12 mt-16 pt-8 border-t border-white/10">
                        <div>
                            <p className="text-3xl font-bold text-amber-400">R$ 2.5Bi+</p>
                            <p className="text-sm text-neutral-400">Em causas vencidas</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-amber-400">300+</p>
                            <p className="text-sm text-neutral-400">Empresas atendidas</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
