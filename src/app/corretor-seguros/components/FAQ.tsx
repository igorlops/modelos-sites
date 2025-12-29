'use client';
import { theme } from '../theme';

const faqs = [
    { categoria: "Coberturas", q: "Cobre desastres naturais?", a: "Sim, dependendo da apólice. Enchente, vendaval e granizo geralmente inclusos." },
    { categoria: "Coberturas", q: "E roubo/furto?", a: "Sim, com ou sem violência. Precisa B.O em até 24h da ocorrência." },
    { categoria: "Pagamento", q: "Posso parcelar?", a: "Sim, até 12x no cartão ou boleto sem juros. À vista tem 10% desconto." },
    { categoria: "Sinistro", q: "Prazo para indenização?", a: "15-30 dias após análise completa e aprovação do sinistro." },
    { categoria: "Geral", q: "Carro velho tem seguro?", a: "Sim! Até 20 anos. Preço compatível conforme valor FIPE." }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16">Dúvidas sobre Seguros</h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all">
                            <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">{f.categoria}</span>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">{f.q}</h3>
                            <p className="text-slate-700 leading-relaxed">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
