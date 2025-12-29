'use client';

import { theme } from '../theme';
import { ArrowRight } from 'lucide-react';

export default function Servicos() {
    const treatments = [
        {
            step: "01",
            title: "Harmonização Facial",
            desc: "Preenchimento estratégico com ácido hialurônico para equilibrar proporções, sempre respeitando seus traços naturais.",
            tags: ["Botox", "Preenchimento", "Fios de PDO"]
        },
        {
            step: "02",
            title: "Bioestimuladores",
            desc: "O segredo da pele firme. Sculptra e Radiesse para estimular a produção natural de colágeno e recuperar a vitalidade.",
            tags: ["Collagen", "Firmness", "Glow"]
        },
        {
            step: "03",
            title: "Tecnologias a Laser",
            desc: "Lavieen e Ultraformer III para tratamento de manchas, poros dilatados e lifting facial não cirúrgico.",
            tags: ["Laser", "Lifting", "Peeling"]
        },
        {
            step: "04",
            title: "Estética Corporal",
            desc: "Protocolos combinados para gordura localizada, celulite e flacidez. Criolipólise, Radiofrequência e Enzimas.",
            tags: ["Body", "Shape", "Detox"]
        }
    ];

    return (
        <section id="procedimentos" className="py-32 bg-stone-50">
            <div className={theme.layout.container}>
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-xl">
                        <h2 className="font-serif text-5xl text-stone-900 mb-6">Nossos Protocolos</h2>
                        <p className="text-stone-500 font-light">Ciência e arte se encontram em tratamentos personalizados para sua pele.</p>
                    </div>
                    <a href="#agendar" className="hidden md:flex items-center gap-2 text-stone-900 uppercase tracking-widest text-xs border-b border-stone-900 pb-1 hover:text-rose-900 hover:border-rose-900 transition-colors">
                        Ver Menu Completo <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
                    {treatments.map((t, i) => (
                        <div key={i} className="bg-white p-10 hover:bg-[#FAF9F6] transition-colors duration-500 group min-h-[400px] flex flex-col justify-between">
                            <div>
                                <span className="text-stone-300 font-serif text-2xl mb-8 block">{t.step}</span>
                                <h3 className="font-serif text-2xl text-stone-800 mb-4 group-hover:text-rose-950 transition-colors">{t.title}</h3>
                                <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">{t.desc}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {t.tags.map((tag, idx) => (
                                    <span key={idx} className="text-[10px] uppercase tracking-wider border border-stone-100 px-2 py-1 text-stone-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
