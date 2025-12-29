'use client';

import { theme } from '../theme';
import { CheckCircle2, ClipboardList, Sparkles, Clock } from 'lucide-react';

export default function PorqueEscolher() {
    return (
        <section className="py-24 bg-teal-900 text-white">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-10">
                        <h2 className="font-serif text-4xl leading-tight">
                            Por que escolher minha abordagem terapêutica?
                        </h2>

                        <div className="space-y-8">
                            {[
                                { icon: <CheckCircle2 />, title: "Flexibilidade", desc: "Horários estendidos até 21h e aos sábados. Emergências atendidas em 24h." },
                                { icon: <ClipboardList />, title: "Estrutura", desc: "Cada sessão tem início, meio e fim. Você sai com tarefas práticas para a semana." },
                                { icon: <Sparkles />, title: "Abordagem Integrativa", desc: "TCC como base, mas uso técnicas de ACT, Mindfulness e Gestalt quando necessário." },
                                { icon: <Clock />, title: "Compromisso Real", desc: "Não faço terapia infinita. Trabalhamos com objetivos claros e prazos realistas." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="text-teal-300 shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                                        <p className="text-teal-100/80 font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                            <p className="font-serif text-2xl italic mb-6">"Após 6 meses de terapia, finalmente consegui controlar meus ataques de pânico."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-teal-700" />
                                <div>
                                    <p className="font-semibold">Mariana L.</p>
                                    <p className="text-sm text-teal-200">Paciente desde 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
