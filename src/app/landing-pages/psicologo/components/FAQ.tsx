'use client';
import { theme } from '../theme';

const faqs = [
    { emoji: "🕐", q: "Quanto tempo dura cada sessão?", a: "50 minutos de terapia individual. Primeira consulta pode estender para 70min (anamnese completa)." },
    { emoji: "💰", q: "Qual o valor da sessão?", a: "R$ 200 sessão individual. Pacotes mensais com desconto disponíveis. Aceito PIX/cartão." },
    { emoji: "📱", q: "Atende online?", a: "Sim! Videochamada pelo Google Meet com mesma qualidade do presencial. Funciona muito bem." },
    { emoji: "🎯", q: "Quantas sessões vou precisar?", a: "Varia muito. Algumas pessoas sentem melhora em 8-10 sessões, outras precisam de acompanhamento mais longo." },
    { emoji: "🤐", q: "Fala sobre sigilo profissional?", a: "Absoluto. Tudo que conversamos fica entre nós. Código de ética é levado a sério aqui." },
    { emoji: "⏰", q: "Posso remarcar sessão?", a: "Sim, com 24h de antecedência. Avisos de última hora são cobrados (salvo emergências)." }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Dúvidas Frequentes</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-gradient-to-br from-sage-50 to-green-50 p-8 rounded-3xl hover:shadow-xl transition-all border-2 border-sage-100 hover:border-sage-300">
                            <div className="text-5xl mb-4">{f.emoji}</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{f.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
