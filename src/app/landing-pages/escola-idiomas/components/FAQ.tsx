'use client';
import { theme } from '../theme';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQ() {
    const [o, setO] = useState<number | null>(0);
    const faqs = [
        { q: "Quanto tempo para ficar fluente?", a: "Depende da dedicação. Alunos que fazem lição de casa e praticam 30min/dia atingem conversação intermediária em 12-18 meses." },
        { q: "Tem aula de reposição?", a: "Sim. Se faltar, pode repor na semana seguinte em outra turma do mesmo nível (sujeito a disponibilidade)." },
        { q: "O certificado é reconhecido?", a: "Sim. Somos credenciados MEC e centro aplicador oficial Cambridge/TOEFL. Nosso certificado vale para universidades e processos seletivos." },
        { q: "Posso trancar o curso?", a: "Sim, até 2 meses no ano sem perder a vaga. Ideal para viagens ou alta temporada de trabalho." },
        { q: "Turmas são misturadas (adultos+crianças)?", a: "Não. Temos turmas kids (7-12), teens (13-17) e adultos (18+). Cada faixa etária tem dinâmicas específicas." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <h2 className="text-4xl font-bold text-center mb-16">Dúvidas Comuns</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setO(o === i ? null : i)}
                                className="w-full flex justify-between p-6 text-left hover:bg-slate-50"
                            >
                                <span className={`font-bold ${o === i ? 'text-amber-600' : 'text-slate-900'}`}>{f.q}</span>
                                <Plus className={`transition-transform ${o === i ? 'rotate-45' : ''}`} />
                            </button>
                            <div className={`px-6 transition-all ${o === i ? 'max-h-32 pb-6' : 'max-h-0 opacity-0'}`}>
                                <p className="text-slate-600">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
