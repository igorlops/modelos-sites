'use client';
import { theme } from '../theme';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);
    const faqs = [
        { q: "Procedimentos doem?", a: "Não. Usamos anestésicos tópicos antes de qualquer procedimento invasivo. Conforto máximo garantido." },
        { q: "Quanto tempo dura cada sessão?", a: "Varia: limpeza de pele 60min, peeling 40min, laser 30min. Sempre com tempo para você relaxar." },
        { q: "Quantas sessões para ver resultado?", a: "Depende do tratamento. Harmonização: imediato. Laser: 6-8 sessões. Avaliamos caso a caso." },
        { q: "Tem restrição de idade?", a: "A partir de 18 anos para procedimentos estéticos. Menores só com autorização dos pais." },
        { q: "Posso fazer vários procedimentos no mesmo dia?", a: "Depende. Combinamos protocolos compatíveis. Avaliação prévia necessária." }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-amber-50">
            <div className={theme.layout.container}>
                <div className="text-center mb-16">
                    <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">FAQ</span>
                    <h2 className="text-4xl font-bold text-slate-900">Perguntas Frequentes</h2>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden hover:shadow-lg transition-all">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-amber-50 transition-colors"
                            >
                                <span className={`font-bold text-lg ${open === i ? 'text-amber-700' : 'text-slate-900'}`}>{f.q}</span>
                                <ChevronDown className={`w-6 h-6 text-amber-600 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                            </button>
                            {open === i && (
                                <div className="px-6 pb-6 pt-2 bg-amber-50">
                                    <p className="text-slate-700 leading-relaxed">{f.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
