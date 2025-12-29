'use client';

import { theme } from '../theme';
import { Video, Users, Brain, Heart } from 'lucide-react';

export default function Servicos() {
    const services = [
        {
            icon: <Brain className="w-8 h-8 text-teal-600" />,
            title: "Terapia Individual",
            desc: "Sessões de 50 minutos focadas em ansiedade, depressão, transtornos de humor e desenvolvimento pessoal. Abordagem prática para resultados tangíveis.",
            modality: "Presencial ou Online"
        },
        {
            icon: <Users className="w-8 h-8 text-teal-600" />,
            title: "Terapia de Casal",
            desc: "Espaço neutro para diálogo construtivo. Trabalho com comunicação não-violenta, resolução de conflitos e fortalecimento do vínculo afetivo.",
            modality: "Presencial"
        },
        {
            icon: <Video className="w-8 h-8 text-teal-600" />,
            title: "Sessões Online",
            desc: "Mesma qualidade do atendimento presencial, com a comodidade de fazer terapia de onde estiver. Ideal para rotinas corridas ou quem mora longe.",
            modality: "Via Google Meet"
        },
        {
            icon: <Heart className="w-8 h-8 text-teal-600" />,
            title: "Plantão Emocional",
            desc: "Para momentos de crise aguda. Sessão emergencial em até 24h para acolhimento e estratégias de enfrentamento imediato.",
            modality: "Sob demanda"
        }
    ];

    return (
        <section id="servicos" className="py-24 bg-[#FDFBF7]">
            <div className={theme.layout.container}>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-serif text-4xl text-stone-800 mb-6">Como posso te ajudar?</h2>
                    <p className="text-stone-500 font-light">Diferentes formatos para atender suas necessidades específicas.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg hover:border-teal-200 transition-all">
                            <div className="mb-6">{s.icon}</div>
                            <h3 className="font-serif text-2xl text-stone-800 mb-3">{s.title}</h3>
                            <p className="text-stone-600 font-light leading-relaxed mb-4">{s.desc}</p>
                            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                                {s.modality}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
