'use client';

import { theme } from '../theme';
import { Target, Trophy, Clock } from 'lucide-react';

export default function Sobre() {
    return (
        <section id="sobre" className={theme.layout.sectionAlt}>
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="relative order-2 lg:order-1">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 rounded-full blur-3xl opacity-20" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                            <img
                                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
                                alt="Personal Trainer orientando"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-white font-medium italic">"Disciplina é fazer o que precisa ser feito, mesmo quando você não quer fazer."</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <span className={`text-sm font-bold uppercase tracking-wider ${theme.colors.accent}`}>Quem Sou Eu</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            Treinador <span className="text-orange-500">Ricardo Mendes.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Especialista em Fisiologia do Exercício pela USP e ex-atleta de fisiculturismo.
                            Minha missão é simplificar o processo de ganho de massa e perda de gordura através da ciência.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Esqueça dietas da moda e treinos "fofos". Aqui o trabalho é sério, focado em biomecânica correta
                            e progressão de carga constante. Se você quer resultado, eu tenho o caminho.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                            {[
                                { icon: <Trophy className="w-6 h-6" />, label: "Premiado", desc: "Top Trainer 2024" },
                                { icon: <Target className="w-6 h-6" />, label: "Foco", desc: "Resultados em 12 semanas" },
                                { icon: <Clock className="w-6 h-6" />, label: "Suporte", desc: "Atendimento 24h" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition-colors">
                                    <div className="text-orange-500 mb-2">{item.icon}</div>
                                    <h4 className="font-bold text-white">{item.label}</h4>
                                    <p className="text-xs text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
