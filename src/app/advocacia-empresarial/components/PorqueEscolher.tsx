'use client';

import { theme } from '../theme';
import { Target, Clock, Handshake, BookOpen } from 'lucide-react';

export default function PorqueEscolher() {
    return (
        <section className="py-24 bg-amber-900 text-white">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div>
                        <h2 className="font-serif text-4xl mb-12">Nossos Diferenciais</h2>

                        <div className="space-y-10">
                            {[
                                { icon: <Target />, title: "Abordagem Estratégica", desc: "Não entregamos apenas pareceres — entregamos soluções alinhadas aos seus objetivos de negócio." },
                                { icon: <Clock />, title: "Agilidade", desc: "Prazos apertados são realidade corporativa. Estrutura preparada para respostas rápidas sem perda de qualidade." },
                                { icon: <Handshake />, title: "Relacionamento Próximo", desc: "Sócios envolvidos diretamente. Você não é apenas um número, é um parceiro estratégico." },
                                { icon: <BookOpen />, title: "Atualização Constante", desc: "Publicações, palestras e participação ativa em entidades de classe mantêm nossa expertise afiada." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="text-amber-300 shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                        <p className="text-amber-100/80 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20">
                            <p className="font-serif text-2xl italic mb-6">"A assessoria jurídica foi fundamental para estruturarmos nossa rodada Série B sem atrasos."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-amber-700" />
                                <div>
                                    <p className="font-bold">Carlos Henrique</p>
                                    <p className="text-sm text-amber-200">CEO, TechCorp Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
