'use client';

import { theme } from '../theme';
import { Award, Users, Globe } from 'lucide-react';

export default function Sobre() {
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="space-y-8">
                        <span className="text-amber-700 font-bold uppercase tracking-wider text-sm">Sobre o Escritório</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 leading-tight">
                            Excelência jurídica com visão de negócios.
                        </h2>

                        <p className="text-neutral-700 text-lg leading-relaxed">
                            Fundado em 1998 pelo Dr. Ricardo Lima, o escritório consolidou-se como referência em direito empresarial.
                            Nossa abordagem combina profundo conhecimento técnico com entendimento das dinâmicas de mercado.
                        </p>

                        <p className="text-neutral-600 leading-relaxed">
                            Não somos apenas advogados reativos — somos consultores proativos. Antecipamos riscos, estruturamos
                            operações complexas e defendemos seus interesses com estratégia e firmeza. Atendemos desde startups disruptivas
                            até multinacionais consolidadas.
                        </p>

                        <div className="grid grid-cols-3 gap-8 pt-8">
                            {[
                                { icon: <Award />, label: "Top 10", sub: "Chambers & Partners" },
                                { icon: <Users />, label: "40+", sub: "Advogados" },
                                { icon: <Globe />, label: "Global", sub: "Network" }
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-amber-600 mb-3 flex justify-center">{item.icon}</div>
                                    <p className="font-bold text-neutral-900 text-lg">{item.label}</p>
                                    <p className="text-xs text-neutral-500">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-amber-100 rounded-2xl -z-10 rotate-3" />
                        <img
                            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071"
                            alt="Equipe jurídica"
                            className="rounded-2xl shadow-2xl w-full"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
