'use client';
import { theme } from '../theme';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);
    const faqs = [
        { q: "Qual o investimento em um projeto?", a: "Entre R$ 80k e R$ 500k dependendo do escopo. Oferecemos modelos success fee para projetos de turnaround." },
        { q: "Atendem PMEs ou só grandes empresas?", a: "Atendemos empresas a partir de R$ 10Mi de receita anual. Abaixo disso, oferecemos mentoria executiva (modelo diferente)." },
        { q: "Quanto tempo dura um projeto?", a: "Diagnóstico: 2-4 semanas. Implementação: 4-6 meses com acompanhamento mensal nos 6 meses seguintes." },
        { q: "Como garantem resultado?", a: "Definimos KPIs claros no kick-off. Parte do fee é atrelada ao atingimento dessas metas. Assumimos risco junto com o cliente." },
        { q: "Trabalham presencial ou remoto?", a: "Híbrido. Workshops presenciais quinzenais + acompanhamento remoto semanal. Flexível conforme localização do cliente." }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-900 pr-4">{f.q}</span>
                                <ChevronRight className={`text-slate-400 transition-transform flex-shrink-0 ${open === i ? 'rotate-90' : ''}`} />
                            </button>
                            {open === i && (
                                <div className="px-6 pb-6 pt-2">
                                    <p className="text-slate-600 leading-relaxed border-l-4 border-slate-200 pl-4">{f.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
