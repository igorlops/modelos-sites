'use client';
import { theme } from '../theme';

const faqs = [
    { q: "Quanto custa?", a: "Investimento mínimo R$ 5k/mês (fee agência + verba mídia). Personalizado conforme escopo.", cat: "Comercial" },
    { q: "Tem contrato de fidelidade?", a: "Não. Trabalho mês a mês. Se não entregar resultado, você cancela sem multa.", cat: "Comercial" },
    { q: "Quanto tempo para ver resultado?", a: "Primeiros insights em 30 dias. ROI positivo tipicamente em 60-90 dias.", cat: "Performance" },
    { q: "Atendem pequenas empresas?", a: "Sim! Desde que tenham budget mínimo de R$ 3k/mês para mídia paga.", cat: "Perfil Cliente" },
    { q: "Fazem inbound/SEO?", a: "Sim, temos vertical especializada. SEO técnico, link building e content marketing.", cat: "Serviços" },
    { q: "Relatórios são mensais?", a: "Semanais! Dashboard live 24/7 + call de alinhamento quinzenal.", cat: "Performance" }
];

const categorias = [...new Set(faqs.map(f => f.cat))];

export default function FAQ() {
    return (
        <section className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100">
                            <span className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                                {f.cat}
                            </span>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{f.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
