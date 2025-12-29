'use client';
import { theme } from '../theme';
import { useState } from 'react';

export default function FAQ() {
    const [active, setActive] = useState(0);
    const faqs = [
        { q: "Trabalham com imóveis abaixo de R$ 2Mi?", a: "Sim, mas nosso foco é alto padrão (R$ 2Mi+). Abaixo disso, indicamos corretores parceiros." },
        { q: "Cobram exclusividade?", a: "Sim, contrato de 90 dias. Isso garante dedicação total e estratégia assertiva de venda." },
        { q: "Qual a comissão?", a: "5-6% sobre valor de venda. Negociável conforme ticket. Incluímos fotografia profissional e tour virtual 3D." },
        { q: "Fazem avaliação do imóvel?", a: "Sim, gratuita. Análise comparativa de mercado com laudo técnico detalhado." },
        { q: "Quanto tempo para vender?", a: "Média de 90-120 dias para imóveis de alto padrão bem precificados. Temos buyers qualificados em carteira." }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((f, i) => (
                        <div
                            key={i}
                            onClick={() => setActive(active === i ? -1 : i)}
                            className={`mb-4 cursor-pointer transition-all ${active === i ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-slate-800'} rounded-2xl overflow-hidden`}
                        >
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{f.q}</h3>
                                {active === i && <p className="text-amber-100 leading-relaxed mt-4">{f.a}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
