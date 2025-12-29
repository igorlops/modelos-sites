'use client';

import { theme } from '../theme';
import { Sofa, Clock, Microscope, Award } from 'lucide-react';

export default function PorqueEscolher() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

            <div className={`relative z-10 ${theme.layout.container}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="space-y-12">
                        <div>
                            <span className="text-cyan-400 font-bold uppercase tracking-wider text-sm">Diferenciais</span>
                            <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">
                                Por que somos <br /> referência?
                            </h2>
                            <p className="text-slate-400 text-lg">
                                Investimos pesado em estrutura e capacitação para que sua única preocupação seja sorrir.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { icon: <Sofa />, title: "Conforto VIP", desc: "Sala de espera com café gourmet, massagem e TV." },
                                { icon: <Microscope />, title: "Microscopia", desc: "Tratamentos de canal com precisão microscópica." },
                                { icon: <Clock />, title: "Day Clinic", desc: "Realize todo seu tratamento em um único dia intenso." },
                                { icon: <Award />, title: "Garantia", desc: "Certificado de garantia em todas as próteses e implantes." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400 border border-white/10">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-30" />
                        <div className="relative bg-white rounded-3xl p-2 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f72?q=80&w=1974&auto=format&fit=crop"
                                alt="Tecnologia Odontológica"
                                className="rounded-2xl w-full"
                            />
                            <div className="absolute bottom-8 right-8 bg-slate-900 text-white p-4 rounded-xl shadow-lg border border-slate-700">
                                <p className="font-bold text-cyan-400">Scanner iTero 5D</p>
                                <p className="text-xs">Precisão digital sem moldagens.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
