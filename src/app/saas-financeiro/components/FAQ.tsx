'use client';
import { theme } from '../theme';
import { CreditCard, Lock, Smartphone, Users, Check, TrendingUp } from 'lucide-react';

const faqs = [
    { icon: <CreditCard className="w-8 h-8 text-purple-600" />, q: "Quais taxas cobram?", a: "1.99% crédito à vista, 2.99% parcelado. Zero mensalidade, zero adesão. Você só paga sobre vendas." },
    { icon: <Smartphone className="w-8 h-8 text-purple-600" />, q: "Tem app mobile?", a: "Sim! iOS e Android. Controle completo na palma da mão com notificações em tempo real." },
    { icon: <Lock className="w-8 h-8 text-purple-600" />, q: "É seguro?", a: "100%. Certificação PCI-DSS nível 1, criptografia de ponta e compliance total com LGPD." },
    { icon: <Users className="w-8 h-8 text-purple-600" />, q: "Integra com meu ERP?", a: "Sim. API REST documentada + plugins prontos para TOTVS, SAP, Omie e principais ERPs." },
    { icon: <TrendingUp className="w-8 h-8 text-purple-600" />, q: "Tem limite de transações?", a: "Não. Processe quantas vendas quiser. Infraestrutura escalável que aguenta picos." },
    { icon: <Check className="w-8 h-8 text-purple-600" />, q: "Período de teste?", a: "14 dias grátis sem pedir cartão. Acesso completo a todos os recursos." }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-purple-50">
            <div className={theme.layout.container}>
                <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Perguntas Frequentes</h2>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-purple-100 hover:border-purple-300 group">
                            <div className="mb-6 inline-block p-4 bg-purple-100 rounded-2xl group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-4">{f.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
