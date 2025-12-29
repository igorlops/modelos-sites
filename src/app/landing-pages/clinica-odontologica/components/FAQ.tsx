'use client';
import { theme } from '../theme';

const faqs = [
    { q: "Sentem dor durante procedimento?", a: "Não. Usamos anestesia local eficiente. Desconforto zero durante tratamento." },
    { q: "Quantas sessões de clareamento?", a: "1-3 sessões dependendo do tom desejado. Cada sessão 40min com laser de alta potência." },
    { q: "Implante dói?", a: "Não. Cirurgia com sedação consciente opcional. Pós-operatório tranquilo com analgésicos." },
    { q: "Quanto tempo dura faceta?", a: "15-20 anos com manutenção adequada. Garantia de 5 anos contra quebra/descolagem." },
    { q: "Aceitam convênio?", a: "Não trabalhamos com convênio, mas emitimos recibo para reembolso." }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Dúvidas Comuns</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        {faqs.map((f, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-l-4 border-cyan-500 group">
                                <div className="flex items-start gap-4">
                                    <div className="bg-cyan-100 text-cyan-700 rounded-full w-10 h-10 flex items-center justify-center font-black text-lg shrink-0 group-hover:scale-110 transition-transform">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 mb-3">{f.q}</h3>
                                        <p className="text-slate-600 leading-relaxed">{f.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
