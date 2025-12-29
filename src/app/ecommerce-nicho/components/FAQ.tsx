'use client';
import { theme } from '../theme';
import { Package, CreditCard, RotateCcw, Truck } from 'lucide-react';

const faqs = [
    { icon: <Package />, q: "Como funciona a entrega?", a: "Correios/transportadora. Rastreio por email. 7-10 dias úteis após postagem." },
    { icon: <CreditCard />, q: "Quais formas de pagamento?", a: "Pix (5% desconto), cartão de crédito (até 3x sem juros) ou boleto." },
    { icon: <RotateCcw />, q: "Posso trocar se não gostar?", a: "Sim! 7 dias para desistir. Devolvemos 100% do valor (frete por sua conta)." },
    { icon: <Truck />, q: "Cobram frete?", a: "Grátis acima de R$ 200. Abaixo disso, calculamos no CEP (R$ 15-35)." }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16">Dúvidas Comuns</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {faqs.map((f, i) => (
                        <div key={i} className="flex gap-6 p-8 bg-indigo-50 rounded-2xl hover:bg-indigo-100 transition-colors">
                            <div className="text-indigo-600 shrink-0">{f.icon}</div>
                            <div>
                                <h3 className="text-lg font-bold text-indigo-900 mb-3">{f.q}</h3>
                                <p className="text-slate-700 leading-relaxed">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
