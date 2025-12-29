'use client';

import { theme } from '../theme';
import { Smartphone, Clock, Database, HeartHandshake } from 'lucide-react';

export default function PorqueEscolher() {
    return (
        <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3" />

            <div className={`relative z-10 ${theme.layout.container}`}>
                <div className="flex flex-col lg:flex-row gap-20">

                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            A nutrição <br />
                            que <span className="text-emerald-400">funciona.</span>
                        </h2>
                        <p className="text-emerald-100 text-lg leading-relaxed">
                            Esqueça o papel impresso que vai para a gaveta. Minha metodologia envolve acompanhamento real e ferramentas tecnológicas para garantir sua adesão.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                            {[
                                { icon: <Smartphone />, title: "App Exclusivo", desc: "Diário alimentar, chat e evolução na palma da mão." },
                                { icon: <Database />, title: "Bioimpedância", desc: "Acompanhamento preciso de % de gordura e massa magra em toda consulta." },
                                { icon: <HeartHandshake />, title: "Empatia", desc: "Entendo suas dificuldades e ajustamos a rota juntos, sem julgamentos." },
                                { icon: <Clock />, title: "Pontualidade", desc: "Respeito total ao seu tempo. Consultas com 1h de duração." },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="text-emerald-400 mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                    <p className="text-emerald-200/70 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative flex items-center justify-center">
                        <div className="relative w-full max-w-md aspect-[3/4] rounded-[3rem] overflow-hidden border-8 border-emerald-800/50 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                                alt="Alimentação saudável"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-8 left-8 right-8 text-center">
                                <p className="text-2xl font-bold italic mb-2">"Mudou minha relação com a comida."</p>
                                <p className="text-sm text-emerald-300">Amanda S., via Doctoralia</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
