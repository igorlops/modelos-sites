'use client';

import { theme } from '../theme';
import { Apple, Dumbbell, TestTube2, ArrowRight } from 'lucide-react';

export default function Servicos() {
    const services = [
        {
            icon: <Dumbbell className="w-8 h-8 text-white" />,
            title: "Nutrição Esportiva",
            desc: "Adequação de macronutrientes para maximizar sua performance, recuperação muscular e composição corporal. Ideal para Crossfit, Musculação e Endurace.",
            color: "bg-slate-900 text-white"
        },
        {
            icon: <Apple className="w-8 h-8 text-emerald-600" />,
            title: "Reeducação Alimentar",
            desc: "Aprenda a fazer escolhas inteligentes. Um plano flexível para quem busca emagrecimento sustentável ou controle de patologias.",
            color: "bg-white text-slate-900 border border-slate-200"
        },
        {
            icon: <TestTube2 className="w-8 h-8 text-emerald-600" />,
            title: "Exames & Suplementação",
            desc: "Análise detalhada de exames bioquímicos para identificar carências e prescrição de suplementação assertiva (apenas o necessário).",
            color: "bg-white text-slate-900 border border-slate-200"
        }
    ];

    return (
        <section id="servicos" className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Áreas de Atuação</span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-4">Como posso te ajudar hoje?</h2>
                    <p className="text-slate-600">Tratamentos personalizados para cada fase da sua vida.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((item, i) => (
                        <div key={i} className={`p-8 rounded-3xl transition-all hover:-translate-y-2 duration-300 shadow-xl shadow-slate-200/50 flex flex-col justify-between h-full ${item.color}`}>
                            <div>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${i === 0 ? 'bg-emerald-500' : 'bg-emerald-50'}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className={`leading-relaxed mb-6 ${i === 0 ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {item.desc}
                                </p>
                            </div>
                            <a href="#contato" className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wide ${i === 0 ? 'text-emerald-400' : 'text-emerald-600'}`}>
                                Saber mais <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
