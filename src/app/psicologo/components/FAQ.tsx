'use client';

import { theme } from '../theme';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    const faqs = [
        { q: "Com que frequência devo fazer terapia?", a: "O ideal é semanalmente, para manter continuidade e aprofundamento do trabalho. Mas podemos adaptar à sua realidade financeira." },
        { q: "Quanto tempo dura o tratamento?", a: "Varia muito. Questões pontuais podem ser resolvidas em 3-6 meses. Processos mais profundos levam 1-2 anos. Sempre com avaliações trimestrais." },
        { q: "A terapia online funciona?", a: "Sim, estudos mostram eficácia similar à presencial. A única diferença é que você não está fisicamente no consultório, mas o vínculo terapêutico é o mesmo." },
        { q: "Posso desmarcar sessão?", a: "Sim, com antecedência mínima de 24h. Desmarcações de última hora são cobradas 50% do valor." },
        { q: "Você prescreve remédios?", a: "Não, psicólogos não prescrevem medicações. Se necessário, faço encaminhamento para psiquiatra parceiro." }
    ];

    return (
        <section className="py-24 bg-[#FDFBF7]">
            <div className={theme.layout.container}>
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-stone-800 mb-4">Dúvidas Comuns</h2>
                    <p className="text-stone-500 font-light">Transparência é parte do processo terapêutico.</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white rounded-xl border border-stone-100 overflow-hidden">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                            >
                                <span className={`font-semibold ${open === i ? 'text-teal-700' : 'text-stone-700'}`}>{f.q}</span>
                                <ChevronDown className={`text-stone-400 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`transition-all duration-300 px-6 ${open === i ? 'max-h-32 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-stone-600 font-light leading-relaxed">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
