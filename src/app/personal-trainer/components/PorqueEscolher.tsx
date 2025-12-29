'use client';

import { theme } from '../theme';
import { ShieldCheck, Zap, Activity, Brain } from 'lucide-react';

export default function PorqueEscolher() {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background Element */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-900/50 to-transparent" />

            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    <div>
                        <span className={`text-sm font-bold uppercase tracking-wider ${theme.colors.accent}`}>Diferenciais</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8 leading-tight">
                            Por que meu método <br /> <span className="text-orange-500">funciona?</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-12">
                            Não te entrego apenas uma ficha de treino. Te entrego um manual de uso do seu próprio corpo.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <Brain />, title: "Inteligência de Treino", desc: "Periodização ondulatória para evitar estagnação (platô)." },
                                { icon: <ShieldCheck />, title: "Segurança Articular", desc: "Ênfase total na técnica para prevenir lesões crônicas." },
                                { icon: <Activity />, title: "Avaliação Constante", desc: "Métricas de progresso semanais baseadas em carga e volume." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0 border border-orange-500/20">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-amber-500 rounded-2xl transform rotate-3 opacity-20 blur-lg" />
                        <img
                            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop"
                            alt="Resultado de treino"
                            className="relative rounded-2xl shadow-2xl w-full object-cover z-10"
                        />
                        <div className="absolute -bottom-6 -left-6 z-20 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl max-w-xs">
                            <p className="text-orange-500 font-bold text-4xl mb-1">98%</p>
                            <p className="text-slate-300 text-sm">De taxa de renovação entre alunos de consultoria online.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
