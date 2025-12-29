'use client';

import { theme } from '../theme';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    const faqs = [
        { q: "O implante dói?", a: "Absolutamente não. O procedimento é realizado com anestesia local de alta eficácia. Em casos de fobia, oferecemos sedação com óxido nitroso para relaxamento total." },
        { q: "Quanto custa um tratamento de lentes?", a: "O valor varia conforme a complexidade e número de dentes. Por isso, a avaliação inicial é fundamental para um orçamento preciso e personalizado." },
        { q: "Aceitam convênios?", a: "Atendemos na modalidade livre escolha (reembolso), que permite que você escolha seu dentista de confiança e receba o valor do seu plano de volta." },
        { q: "Invisalign é mais rápido que aparelho comum?", a: "Sim, em média 50% mais rápido devido à tecnologia SmartTrack que aplica força constante e suave nos dentes." },
        { q: "Crianças podem fazer tratamento aqui?", a: "Sim! Temos uma sala temática e especialistas em Odontopediatria para que a primeira experiência dentária do seu filho seja mágica." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Dúvidas Frequentes</h2>
                        <p className="text-slate-600 mb-8">
                            Separamos as principais perguntas de nossos pacientes. Se tiver outra dúvida, nossa equipe de atendimento está pronta para ajudar.
                        </p>
                        <a href="#contato" className="text-cyan-600 font-bold hover:underline">Fale com o Concierge →</a>
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                        {faqs.map((f, i) => (
                            <div key={i} className="border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`font-bold text-lg ${open === i ? 'text-cyan-700' : 'text-slate-700'}`}>{f.q}</span>
                                    <div className={`p-2 rounded-full ${open === i ? 'bg-cyan-100 text-cyan-700' : 'bg-white text-slate-400'}`}>
                                        {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 px-6 ${open === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-slate-600 leading-relaxed max-w-2xl">{f.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
