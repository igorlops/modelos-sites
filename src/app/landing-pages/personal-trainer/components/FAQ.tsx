'use client';
import { theme } from '../theme';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);
    const faqs = [
        { q: "Preciso ter experiência prévia em musculação?", a: "Não! Atendo de iniciantes totais a atletas avançados. Adapto treino ao seu nível e evoluo progressivamente." },
        { q: "Quantas vezes por semana preciso treinar?", a: "Mínimo 3x/semana para hipertrofia. Ideal é 4-5x. Monto periodização realista pro seu dia a dia." },
        { q: "Fornece dieta também?", a: "Sim, protocolo nutricional básico incluso. Para acompanhamento detalhado, indico nutricionista parceira." },
        { q: "Treino online funciona mesmo?", a: "Sim! Correções via vídeo, planilha atualizada semanalmente e suporte diário por WhatsApp." },
        { q: "Quanto tempo para ver resultados?", a: "Primeiras mudanças em 30 dias. Hipertrofia visível em 8-12 semanas com constância." }
    ];

    return (
        <section className="py-24 bg-slate-950">
            <div className={theme.layout.container}>
                <h2 className="text-5xl font-bold text-center mb-16 text-white">Dúvidas Frequentes</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((f, i) => (
                        <div
                            key={i}
                            className={`bg-gradient-to-r ${open === i ? 'from-orange-600 to-red-600' : 'from-slate-900 to-slate-800'} rounded-2xl overflow-hidden transition-all duration-300 border-2 ${open === i ? 'border-orange-500' : 'border-slate-800'}`}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 text-left group"
                            >
                                <span className="font-bold text-white text-lg pr-4">{f.q}</span>
                                <div className="bg-white/10 rounded-full p-2 group-hover:bg-white/20 transition-colors">
                                    {open === i ?
                                        <Minus className="w-5 h-5 text-white" /> :
                                        <Plus className="w-5 h-5 text-white" />
                                    }
                                </div>
                            </button>
                            <div className={`px-6 transition-all duration-300 ${open === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                                <p className="text-orange-100 leading-relaxed">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
