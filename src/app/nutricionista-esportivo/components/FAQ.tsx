'use client';
import { theme } from '../theme';
import { useState } from 'react';

export default function FAQ() {
    const [activeTab, setActiveTab] = useState(0);
    const categories = [
        {
            tab: "Consultas",
            faqs: [
                { q: "Como funciona a primeira consulta?", a: "Anamnese completa de 60min, avaliação antropométrica e plano alimentar personalizado entregue em 3 dias." },
                { q: "Atende presencial ou online?", a: "Ambos! Presencial em SP ou consultoria online via videochamada com mesmo nível de detalhamento." }
            ]
        },
        {
            tab: "Alimentação",
            faqs: [
                { q: "Pode montar dieta vegana/vegetariana?", a: "Sim! Trabalho com todas as abordagens: vegana, vegetariana, low-carb, cetogênica, jejum intermitente." },
                { q: "Preciso comer de 3 em 3 horas?", a: "Não! Isso é mito. Ajust​o frequência de refeições conforme sua rotina e preferências." }
            ]
        },
        {
            tab: "Investimento",
            faqs: [
                { q: "Qual o valor da consulta?", a: "Primeira consulta R$ 350. Retornos mensais R$ 250. Pacotes promocionais disponíveis." },
                { q: "Aceita convênio?", a: "Sim, Unimed, Bradesco Saúde e SulAmérica. Solicitamos reembolso ao convênio." }
            ]
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`px-8 py-4 font-bold rounded-full whitespace-nowrap transition-all ${activeTab === i
                                        ? 'bg-emerald-600 text-white shadow-lg'
                                        : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                                    }`}
                            >
                                {cat.tab}
                            </button>
                        ))}
                    </div>
                    <div className="space-y-6">
                        {categories[activeTab].faqs.map((f, i) => (
                            <div key={i} className="bg-emerald-50 p-8 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                                <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-start gap-3">
                                    <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 mt-0.5">{i + 1}</span>
                                    {f.q}
                                </h3>
                                <p className="text-slate-700 leading-relaxed pl-11">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
