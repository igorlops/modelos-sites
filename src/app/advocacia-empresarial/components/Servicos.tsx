'use client';

import { theme } from '../theme';
import { Building2, FileText, Shield, TrendingUp, Gavel, Users2 } from 'lucide-react';

export default function Servicos() {
    const areas = [
        {
            icon: <Building2 className="w-10 h-10 text-amber-600" />,
            title: "Direito Societário",
            desc: "Constituição de empresas, reestruturações, fusões e aquisições (M&A), governança corporativa e planejamento sucessório familiar."
        },
        {
            icon: <FileText className="w-10 h-10 text-amber-600" />,
            title: "Contratos Empresariais",
            desc: "Elaboração, revisão e negociação de contratos complexos. Due diligence jurídica para operações estratégicas."
        },
        {
            icon: <Shield className="w-10 h-10 text-amber-600" />,
            title: "Compliance & LGPD",
            desc: "Implementação de programas de conformidade, políticas de integridade, adequação à LGPD e investigações internas."
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-amber-600" />,
            title: "Recuperação Judicial",
            desc: "Assessoria a credores e devedores em processos de recuperação judicial e extrajudicial. Reestruturação de dívidas."
        },
        {
            icon: <Gavel className="w-10 h-10 text-amber-600" />,
            title: "Litígios Empresariais",
            desc: "Contencioso cível e arbitragem em disputas societárias, contratuais e de responsabilidade civil corporativa."
        },
        {
            icon: <Users2 className="w-10 h-10 text-amber-600" />,
            title: "Trabalhista Empresarial",
            desc: "Consultoria preventiva, due diligence trabalhista e defesa em reclamações individuais e coletivas."
        }
    ];

    return (
        <section id="areas" className="py-24 bg-neutral-50">
            <div className={theme.layout.container}>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-4xl text-neutral-900 mb-6">Áreas de Atuação</h2>
                    <p className="text-neutral-600">Expertise multidisciplinar para atender todas as demandas jurídicas da sua empresa.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {areas.map((area, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-lg hover:border-amber-200 transition-all">
                            <div className="mb-6">{area.icon}</div>
                            <h3 className="font-bold text-xl text-neutral-900 mb-4">{area.title}</h3>
                            <p className="text-neutral-600 leading-relaxed">{area.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
