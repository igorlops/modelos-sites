'use client';
import { theme } from '../theme';
import { Scale, FileText, Clock, DollarSign, Users, Shield } from 'lucide-react';

const faqs = [
    { icon: <Scale className="w-8 h-8 text-slate-700" />, q: "Quais áreas do direito atendem?", a: "Empresarial, tributário, trabalhista, contratos, M&A e compliance corporativo." },
    { icon: <DollarSign className="w-8 h-8 text-slate-700" />, q: "Como funcionam os honorários?", a: "Hora técnica, success fee ou mensalidade conforme complexidade. Orçamento sem compromisso." },
    { icon: <Clock className="w-8 h-8 text-slate-700" />, q: "Quanto tempo demora uma consultoria?", a: "Parecer simples: 5-7 dias. Contratos complexos: 15-20 dias. Urgências acomodamos." },
    { icon: <FileText className="w-8 h-8 text-slate-700" />, q: "Fazem revisão de contratos?", a: "Sim. Analise técnica completa com redline de alterações sugeridas." },
    { icon: <Users className="w-8 h-8 text-slate-700" />, q: "Atendem startups/PMEs?", a: "Sim! Pacotes especiais para empresas em crescimento. A partir de R$ 3k/mês." },
    { icon: <Shield className="w-8 h-8 text-slate-700" />, q: "Sigilo garantido?", a: "Absoluto. NDA padrão + código de ética OAB. Seus dados jamais são compartilhados." }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-200">
                            <div className="mb-6">{f.icon}</div>
                            <h3 className="font-bold text-lg text-slate-900 mb-4">{f.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
