'use client';
import { theme } from '../theme';
import { Calculator, TrendingUp, FileCheck, Clock, Shield, Users } from 'lucide-react';

const faqs = [
    { icon: <Calculator />, q: "Quanto custa contabilidade mensal?", a: "De R$ 500 a R$ 3k/mês conforme faturamento e complexidade. MEI: R$ 150/mês." },
    { icon: <TrendingUp />, q: "Ajudam a pagar menos impostos?", a: "Sim! Planejamento tributário legal para reduzir carga. Economia média de 30%." },
    { icon: <FileCheck />, q: "Fazem abertura de empresa?", a: "Sim. CNPJ em 7 dias úteis. Cuidamos de tudo: junta comercial, alvará, inscrições." },
    { icon: <Clock />, q: "Quando entregar documentos mensais?", a: "Até dia 10 de cada mês. Notas, extratos bancários e folha de ponto." },
    { icon: <Shield />, q: "E se cair na malha fina?", a: "Te defendemos! Retificação de declarações e recurso junto à Receita incluso." },
    { icon: <Users />, q: "Atendem pessoa física também?", a: "Sim. IRPF, carnê-leão e planejamento sucessório familiar." }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16">Dúvidas Comuns</h2>
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-4 text-slate-900">{f.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
