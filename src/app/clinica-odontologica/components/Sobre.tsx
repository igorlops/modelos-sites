'use client';

import { theme } from '../theme';
import { ShieldCheck, HeartPulse, GraduationCap } from 'lucide-react';

export default function Sobre() {
    return (
        <section id="sobre" className={theme.layout.sectionAlt}>
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 relative">
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white p-4 shadow-xl rotate-2">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                                alt="Fachada Clínica Luminous"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">Sobre Nós</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Uma nova experiência em odontologia.
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Esqueça o cheiro de "dentista" e o barulho motorzinho. Na Luminous, criamos um ambiente de spa
                            para que seu tratamento seja relaxante. Nossa filosofia é tratar o ser humano por trás do sorriso.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            Liderada pela Dra. Renata Campos, especialista em Reabilitação Oral, nossa equipe multidisciplinar
                            discute cada caso em conjunto para oferecer a solução mais duradoura e estética possível.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {[
                                { icon: <ShieldCheck />, title: "Biossegurança", desc: "Protocolos rigorosos de esterilização hospitalar." },
                                { icon: <HeartPulse />, title: "Humanização", desc: "Anestesia computadorizada sem dor e sedação consciente." },
                                { icon: <GraduationCap />, title: "Expertise", desc: "Corpo clínico formado por mestres e doutores da USP." },
                            ].map((item, i) => (
                                <div key={i} className={`p-4 rounded-xl bg-white border border-slate-100 shadow-sm ${i === 2 ? 'sm:col-span-2' : ''}`}>
                                    <div className="text-cyan-500 mb-2">{item.icon}</div>
                                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
