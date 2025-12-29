'use client';
import { theme } from '../theme';
import { Code, DollarSign, Users, Rocket } from 'lucide-react';

const faqs = [
    { icon: <Code className="w-10 h-10 text-cyan-600" />, q: "Quais tecnologias dominam?", a: "React/Next.js, Node.js, Python/Django, PostgreSQL, MongoDB, AWS, GCP, Kubernetes. Stack moderna e escalável." },
    { icon: <DollarSign className="w-10 h-10 text-blue-600" />, q: "Como funciona o modelo de equity?", a: "Entramos com 15-25% equity em troca de toda stack tech. Você mantém maioria acionária e controle." },
    { icon: <Users className="w-10 h-10 text-purple-600" />, q: "Quantos devs trabalham no projeto?", a: "Time dedicado de 3-5 pessoas: tech lead, 2 full-stack devs, designer UI/UX e product manager." },
    { icon: <Rocket className="w-10 h-10 text-pink-600" />, q: "Ajudam na captação de investimento?", a: "Sim. Preparamos pitch deck técnico, projeções financeiras e introduzimos aos VCs da nossa rede." },
    { icon: <Code className="w-10 h-10 text-cyan-600" />, q: "Fazem manutenção após MVP?", a: "Sim. Suporte contínuo por 12 meses incluído. Depois, ou continuamos como CTO as-a-service ou você internaliza team." },
    { icon: <DollarSign className="w-10 h-10 text-blue-600" />, q: "Qual investimento inicial mínimo?", a: "R$ 150k capital inicial para 90 dias de desenvolvimento. Ou 100% equity sem cash se ideia validada." }
];

export default function FAQ() {
    return (
        <section className="py-32 bg-slate-50">
            <div className={theme.layout.container}>
                <h2 className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">FAQ Técnico</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-cyan-200 group">
                            <div className="mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
                            <h3 className="text-xl font-black text-slate-900 mb-5">{f.q}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
