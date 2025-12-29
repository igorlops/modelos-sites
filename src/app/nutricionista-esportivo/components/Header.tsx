'use client';

import { ArrowRight, Leaf } from 'lucide-react';
import { theme } from '../theme';

export default function Header() {
    return (
        <header className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50 rounded-bl-full hidden lg:block" />

            <div className={`relative z-10 w-full ${theme.layout.container}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 font-medium text-sm backdrop-blur-sm">
                            <Leaf className="w-4 h-4" />
                            <span>Nutrição Funcional e Esportiva</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900 tracking-tight">
                            Alimente sua <br />
                            <span className="text-emerald-600">melhor versão.</span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                            Estratégias nutricionais individualizadas que respeitam sua rotina, seu paladar e seus objetivos. Sem dietas restritivas, com resultados reais.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#agendar"
                                className={`inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 rounded-2xl ${theme.colors.primary} ${theme.colors.primaryHover} shadow-xl shadow-emerald-200 hover:-translate-y-1`}
                            >
                                Agendar Consulta
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>

                            <a
                                href="#sobre"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all duration-300 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 hover:text-emerald-600 bg-white/50 backdrop-blur-sm"
                            >
                                Conhecer Método
                            </a>
                        </div>

                        <div className="flex items-center gap-4 text-sm font-medium text-slate-500 pt-8">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white" />)}
                            </div>
                            <p>Junte-se a +1.200 pacientes</p>
                        </div>
                    </div>

                    <div className="relative h-[650px] hidden lg:block">
                        <img
                            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
                            alt="Prato saudável equilibrado"
                            className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl shadow-emerald-100/50"
                        />
                        <div className="absolute bottom-10 -left-12 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-bounce-slow">
                            <div className="flex gap-4 items-center">
                                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 font-bold text-xl">100%</div>
                                <p className="text-slate-600 text-sm font-medium">Personalizado para o seu metabolismo.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}
