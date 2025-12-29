'use client';

import { theme } from '../theme';
import { Dumbbell, Laptop, Users, Check } from 'lucide-react';

export default function Servicos() {
    const plans = [
        {
            icon: <Laptop className="w-10 h-10 text-orange-500" />,
            title: "Consultoria Online",
            price: "R$ 197",
            period: "/mês",
            features: ["Treino via App", "Videos explicativos", "Suporte WhatsApp", "Ajustes mensais"],
            highlight: false
        },
        {
            icon: <Users className="w-10 h-10 text-white" />,
            title: "Mentoria BLACK",
            price: "R$ 497",
            period: "/trimestre",
            features: ["Tudo da consultoria", "Chamada de vídeo mensal", "Análise de dieta", "Correção por vídeo"],
            highlight: true
        },
        {
            icon: <Dumbbell className="w-10 h-10 text-orange-500" />,
            title: "Personal Presencial",
            price: "Sob Consulta",
            period: "",
            features: ["Atendimento VIP", "Correção em tempo real", "Motivação total", "Academias parceiras"],
            highlight: false
        }
    ];

    return (
        <section id="servicos" className={theme.layout.section}>
            <div className={theme.layout.container}>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className={`text-sm font-bold uppercase tracking-wider ${theme.colors.accent}`}>Planos</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">Escolha sua evolução</h2>
                    <p className="text-slate-400 text-lg">
                        Não importa se você treina em casa, no parque ou na academia. Tenho a estratégia certa para você.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <div key={i} className={`relative p-8 rounded-2xl border ${plan.highlight ? 'border-orange-500 bg-slate-900' : 'border-slate-800 bg-slate-900/50'} flex flex-col`}>
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                    MAIS VENDIDO
                                </div>
                            )}
                            <div className="mb-6">{plan.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-3xl font-bold text-white">{plan.price}</span>
                                <span className="text-sm text-slate-500 ml-1">{plan.period}</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-orange-500" />
                                        <span className="text-slate-300 text-sm">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#contato" className={`w-full py-4 rounded-lg font-bold text-center transition-all ${plan.highlight ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}>
                                Selecionar Plano
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
