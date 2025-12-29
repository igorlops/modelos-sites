'use client';
import { theme } from '../theme';

const faqs = [
    { q: "Quanto custa uma consulta?", a: "R$ 180 consulta geral. Especialidades R$ 280. Emergência noturna acréscimo de 50%." },
    { q: "Aceitam convênio?", a: "Sim. Porto Seguro Pet, Petlove, Sauvet. Apresente carteirinha no check-in." },
    { q: "Fazem atendimento domiciliar?", a: "Sim, para pets idosos ou com dificuldade de locomoção. Taxa de deslocamento R$ 150." },
    { q: "Tem estacionamento?", a: "Sim, gratuito para clientes. Entrada pela rua lateral." }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16">Dúvidas Comuns</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {faqs.map((f, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-green-300 transition-colors"
                        >
                            <h3 className="text-lg font-bold text-green-600 mb-3">{f.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
