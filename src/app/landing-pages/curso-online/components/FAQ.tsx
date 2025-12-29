'use client';
import { theme } from '../theme';
import { useState } from 'react';

export default function FAQ() {
    const [activeTab, setActiveTab] = useState(0);
    const categories = [
        {
            tab: "Iniciantes",
            faqs: [
                { q: "Preciso saber programar antes?", a: "Não! Nossas trilhas começam do zero absoluto. Primeira aula ensina o que é variável." },
                { q: "Quanto tempo por dia preciso estudar?", a: "Mínimo 1h/dia para trilha de 9 meses. Mas flexível - você controla seu ritmo." }
            ]
        },
        {
            tab: "Pagamento",
            faqs: [
                { q: "Posso parcelar?", a: "Sim, até 12x no cartão ou à vista com 15% de desconto via boleto/Pix." },
                { q: "Tem reembolso?", a: "7 dias grátis + garantia de 30 dias se não gostar. Devolvemos 100%." }
            ]
        },
        {
            tab: "Certificado",
            faqs: [
                { q: "O certificado é reconhecido?", a: "Sim, blockchain-verified e aceito por empresas parceiras como Nubank, iFood, Mercado Livre." },
                { q: "Quando recebo?", a: "Ao completar trilha com nota mínima 70% nos projetos. Emitido na hora." }
            ]
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="flex gap-4 mb-8 border-b border-slate-200 overflow-x-auto">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`px-6 py-4 font-bold whitespace-nowrap transition-all ${activeTab === i
                                        ? 'text-purple-600 border-b-4 border-purple-600'
                                        : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                {cat.tab}
                            </button>
                        ))}
                    </div>
                    <div className="space-y-6">
                        {categories[activeTab].faqs.map((f, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{f.q}</h3>
                                <p className="text-slate-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
