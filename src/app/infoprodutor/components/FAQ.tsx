'use client';
import { theme } from '../theme';
import { CheckCircle, XCircle } from 'lucide-react';

const faqs = [
    { q: "Preciso ser expert reconhecido?", a: "Não. Se você tem experiência prática e pode ensinar algo útil, serve. Já lançamos desde nutricionistas a copywriters.", ok: true },
    { q: "Quanto tempo para criar o curso?", a: "45-60 dias. 15 dias de roteiro, 20 dias de gravação/edição, 10 dias de setup plataforma/vendas.", ok: true },
    { q: "Cobram mensalidade da plataforma?", a: "Não. Zero custo fixo. Cobramos apenas % sobre vendas efetivas (15-25% conforme plano).", ok: true },
    { q: "Posso usar minha própria marca?", a: "Sim! White-label total. Curso fica sob sua marca, não aparecemos para o cliente final.", ok: true },
    { q: "E se eu não vender nada?", a: "Você não nos paga nada. Modelo 100% performance. Risco zero.", ok: false },
    { q: "Trabalham com afiliados?", a: "Sim. Configuramos programa de afiliados, criamos materiais e gerenciamos comissões.", ok: true }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Perguntas Frequentes</h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-teal-500 hover:shadow-lg transition-all">
                            <div className="flex items-start gap-6">
                                <div className={`mt-1 ${f.ok ? 'text-teal-600' : 'text-slate-400'}`}>
                                    {f.ok ? <CheckCircle className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{f.q}</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">{f.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
