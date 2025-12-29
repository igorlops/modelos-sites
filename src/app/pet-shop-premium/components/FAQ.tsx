'use client';
import { theme } from '../theme';
import { HelpCircle } from 'lucide-react';

const faqs = [
    { q: "Fazem banho em gatos?", a: "Sim! Temos equipe especializada em felinos. Ambiente separado para evitar estresse.", emoji: "🐱" },
    { q: "Aceitam todos os portes?", a: "Sim, de Chihuahua a São Bernardo. Banheiras adaptadas para cada tamanho.", emoji: "🐕" },
    { q: "Vendem ração a granel?", a: "Não. Só vendemos em embalagens lacradas para garantir qualidade e validade.", emoji: "🍖" },
    { q: "Hotel aceita pets não vacinados?", a: "Não. Exigimos carteira de vacinação em dia para proteção de todos os hóspedes.", emoji: "💉" },
    { q: "Tem veterinário na loja?", a: "Temos parceria com clínica ao lado. Indicamos e agendamos consultas.", emoji: "🩺" },
    { q: "Entregam à noite?", a: "Delivery até 20h. Após esse horário, só retirada na loja (24h com agendamento).", emoji: "🚚" }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="text-center mb-16">
                    <HelpCircle className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold">Dúvidas Comuns</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-orange-50 p-8 rounded-2xl hover:bg-orange-100 transition-colors border-2 border-orange-100">
                            <div className="text-5xl mb-4">{f.emoji}</div>
                            <h3 className="text-lg font-bold text-orange-600 mb-3">{f.q}</h3>
                            <p className="text-slate-700 leading-relaxed">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
