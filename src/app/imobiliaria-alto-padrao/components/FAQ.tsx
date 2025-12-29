'use client';
import { theme } from '../theme';
import { useState } from 'react';
import { Plus } from 'lucide-react';
export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);
    const faqs = [
        { q: "Cobram taxa do comprador?", a: "Não. Nossa comissão é paga exclusivamente pelo vendedor (3% sobre o valor da transação)." },
        { q: "Posso visitar o imóvel fora do horário comercial?", a: "Sim. Agendamos visitas conforme sua disponibilidade, inclusive finais de semana e após às 18h." },
        { q: "Fazem permuta?", a: "Sim. Avaliamos seu imóvel atual e estruturamos a permuta com ou sem torna, dependendo dos valores." },
        { q: "Trabalham com financiamento?", a: "Temos parceria com os principais bancos. Ajudamos em todo o processo, desde simulação até aprovação do crédito." }
    ];
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center text-stone-900 mb-16">Dúvidas Comuns</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="border border-stone-200 rounded-xl overflow-hidden">
                            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between p-6 text-left hover:bg-stone-50">
                                <span className={`font-bold ${open === i ? 'text-emerald-700' : 'text-stone-900'}`}>{f.q}</span>
                                <Plus className={`text-stone-400 transition-transform ${open === i ? 'rotate-45' : ''}`} />
                            </button>
                            <div className={`px-6 transition-all ${open === i ? 'max-h-24 pb-6' : 'max-h-0 opacity-0'}`}><p className="text-stone-600">{f.a}</p></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
