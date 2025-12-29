'use client';

import { theme } from '../theme';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    const faqs = [
        { q: "O Botox deixa o rosto sem expressão?", a: "Não na nossa clínica. A técnica 'Baby Botox' e a aplicação estratégica garantem que você continue se expressando, apenas suavizando as rugas estáticas e prevenindo novas." },
        { q: "Quanto tempo dura o preenchimento labial?", a: "Utilizamos ácidos hialurônicos de alta reticulação que duram entre 12 a 18 meses, dependendo do metabolismo de cada paciente." },
        { q: "Os procedimentos doem?", a: "O conforto é prioridade. Utilizamos anestésicos tópicos potentes e, para procedimentos injetáveis, os produtos já contém lidocaína na fórmula, tornando a aplicação praticamente indolor." },
        { q: "Posso voltar ao trabalho no mesmo dia?", a: "Para a grande maioria dos procedimentos (Botox, Preenchimentos, Bioestimuladores), sim. Pode haver leve inchaço, mas nada que impeça sua rotina social." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="font-serif text-4xl text-stone-900 mb-6">Perguntas <br /> Frequentes</h2>
                        <p className="font-light text-stone-500 max-w-sm">
                            Acreditamos que a informação é o primeiro passo para um procedimento seguro e satisfatório.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {faqs.map((f, i) => (
                            <div key={i} className="border-b border-stone-200 pb-8 cursor-pointer group" onClick={() => setOpen(open === i ? null : i)}>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-serif text-xl text-stone-700 group-hover:text-rose-950 transition-colors">{f.q}</h3>
                                    <Plus className={`text-stone-300 font-thin transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
                                </div>
                                <div className={`overflow-hidden transition-all duration-500 ${open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-stone-500 font-light leading-relaxed">{f.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
