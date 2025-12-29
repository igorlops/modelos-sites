'use client';
import { theme } from '../theme';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);
    const faqs = [
        { q: "Quanto custa para abrir uma empresa?", a: "Taxa governamental + nossos honorários: R$ 850 total. Inclui CNPJ, inscrição estadual/municipal e primeiro mês de contabilidade grátis." },
        { q: "Preciso ir até o escritório?", a: "Não. Tudo 100% online via assinatura digital. Você só precisa enviar documentos por email/WhatsApp." }, { q: "Como funciona a migração de contador?", a: "Solicitamos procuração digital, baixamos tudo do contador antigo e assumimos. Você não precisa fazer nada. Leva 3-5 dias." },
        { q: "Atendem qual tipo de empresa?", a: "MEI, ME, EPP e LTDA. Todos os CNAEs exceto bancos e seguradoras." }
    ];
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Dúvidas Frequentes</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between p-6 text-left hover:bg-slate-50">
                                <span className={`font-bold ${open === i ? 'text-blue-700' : 'text-slate-900'}`}>{f.q}</span>
                                <ChevronDown className={`text-slate-400 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`px-6 transition-all ${open === i ? 'max-h-32 pb-6' : 'max-h-0 opacity-0'}`}>
                                <p className="text-slate-600">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
