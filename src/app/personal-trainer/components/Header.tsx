'use client';

import { ArrowRight } from 'lucide-react';
import { theme } from '../theme';

export default function Header() {
    return (
        <header className={`relative min-h-[90vh] flex items-center overflow-hidden ${theme.colors.background}`}>
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                    alt="Treinamento funcional intenso"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-[20s]"
                />
            </div>

            <div className={`relative z-20 w-full ${theme.layout.container}`}>
                <div className="max-w-3xl space-y-8 animate-fade-in">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm">
                        <span className={`text-sm font-semibold tracking-wider uppercase ${theme.colors.accent}`}>
                            Treinamento de Alta Performance
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight">
                        Não é sobre sorte. <br />
                        É sobre <span className={theme.colors.accent}>método.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
                        Pare de perder tempo com treinos genéricos. Tenha um planejamento periodizado para hipertrofia e definição real.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="#contato"
                            className={`group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 rounded-lg ${theme.colors.primary} ${theme.colors.primaryHover} shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40`}
                        >
                            Começar Agora
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#servicos"
                            className={`inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 rounded-lg border-2 ${theme.colors.border} hover:border-orange-500 text-white hover:bg-slate-800`}
                        >
                            Ver Planos
                        </a>
                    </div>

                    <div className="pt-12 flex items-center gap-8 text-slate-400">
                        <div>
                            <span className={`block text-3xl font-bold ${theme.colors.accent}`}>+800</span>
                            <span className="text-sm">Alunos Ativos</span>
                        </div>
                        <div className="w-px h-10 bg-slate-800" />
                        <div>
                            <span className={`block text-3xl font-bold ${theme.colors.accent}`}>15</span>
                            <span className="text-sm">Anos de Carreira</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
