'use client';

import { theme } from '../theme';
import { Smile, Sparkles, ScanFace, Activity, ArrowRight } from 'lucide-react';

export default function Servicos() {
    const services = [
        {
            icon: <Smile className="w-10 h-10 text-white" />,
            title: "Implantes Dentários",
            desc: "Recupere a mastigação e autoestima com implantes suíços de carga imediata. Dentes fixos em até 72 horas.",
            highlight: true
        },
        {
            icon: <Sparkles className="w-10 h-10 text-cyan-500" />,
            title: "Lentes de Contato",
            desc: "Lâminas ultrafinas de porcelana para corrigir cor, formato e tamanho dos dentes. O sorriso das celebridades.",
            highlight: false
        },
        {
            icon: <Activity className="w-10 h-10 text-cyan-500" />,
            title: "Invisalign",
            desc: "Alinhe seus dentes com placas transparentes e removíveis. Muito mais conforto e higiene que o aparelho fixo.",
            highlight: false
        },
        {
            icon: <ScanFace className="w-10 h-10 text-cyan-500" />,
            title: "Harmonização Facial",
            desc: "Procedimentos estéticos (Botox, Preenchimento) que complementam o sorriso e equilibram as proporções do rosto.",
            highlight: false
        }
    ];

    return (
        <section id="servicos" className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">Tratamentos</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                        Odontologia Integrada
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Todas as especialidades em um só lugar, para otimizar seu tempo e garantir a excelência do começo ao fim.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, i) => (
                        <div
                            key={i}
                            className={`p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full ${item.highlight ? 'bg-cyan-600 text-white shadow-2xl shadow-cyan-200' : 'bg-slate-50 text-slate-900 hover:bg-white hover:shadow-xl'}`}
                        >
                            <div>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${item.highlight ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className={`text-sm leading-relaxed mb-8 ${item.highlight ? 'text-cyan-50' : 'text-slate-500'}`}>
                                    {item.desc}
                                </p>
                            </div>

                            <a href="#contato" className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wide group ${item.highlight ? 'text-white' : 'text-cyan-600'}`}>
                                Saiba Mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
