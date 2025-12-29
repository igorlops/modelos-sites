'use client';

import { theme } from '../theme';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    const faqs = [
        { q: "Como são calculados os honorários?", a: "Trabalhamos com hora técnica, valor fixo por projeto ou percentual sobre êxito (em litígios). Tudo transparente e acordado antes do início dos trabalhos." },
        { q: "Atendem empresas de todo o Brasil?", a: "Sim. Temos estrutura para atendimento remoto e parceiros em todos os estados para diligências presenciais quando necessário." },
        { q: "Quanto tempo leva uma consultoria preventiva?", a: "Análise inicial de contrato ou parecer jurídico: 5-7 dias úteis. Projetos de compliance podem levar de 30 a 90 dias dependendo do porte da empresa." },
        { q: "Fazem acompanhamento de litígios em outros estados?", a: "Sim, através de correspondentes jurídicos de nossa rede ou atuando diretamente com OAB suplementar." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-neutral-900 mb-4">Dúvidas Frequentes</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
                            >
                                <span className={`font-bold ${open === i ? 'text-amber-700' : 'text-neutral-900'}`}>{f.q}</span>
                                {open === i ? <Minus className="text-amber-600" /> : <Plus className="text-neutral-400" />}
                            </button>
                            <div className={`transition-all duration-300 px-6 ${open === i ? 'max-h-32 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-neutral-600 leading-relaxed">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
