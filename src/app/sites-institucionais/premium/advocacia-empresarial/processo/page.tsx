"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ClipboardCheck, Search, Scale, FileText,
    ShieldCheck, ArrowRight, BrainCircuit,
    Database, Lock, BookOpen
} from "lucide-react";
import { useState } from "react";

export default function ProcessoPage() {
    const steps = [
        {
            id: 1,
            title: "Imersão e Diagnóstico",
            icon: Search,
            desc: "Análise profunda do negócio e do cenário fático-jurídico. Entrevistas com key-stakeholders e auditoria preliminar.",
            details: ["Mapeamento de Riscos", "Due Diligence Preliminar", "Entendimento do Negócio"]
        },
        {
            id: 2,
            title: "Definição Estratégica",
            icon: BrainCircuit,
            desc: "Elaboração de teses jurídicas e plano de ação personalizado, focado no resultado prático e na mitigação de passivos.",
            details: ["Pesquisa Jurisprudencial", "Benchmarking Legal", "Definição de Teses"]
        },
        {
            id: 3,
            title: "Execução Técnica",
            icon: Scale,
            desc: "Atuação combatíva ou negocial com rigor técnico absoluto. Elaboração de peças processuais e contratos com excelência.",
            details: ["Petições Estruturadas", "Negociação", "Sustentação Oral"]
        },
        {
            id: 4,
            title: "Monitoramento e Report",
            icon: ClipboardCheck,
            desc: "Acompanhamento processual em tempo real e relatórios gerenciais periódicos para a diretoria da empresa.",
            details: ["Dashboards Jurídicos", "Relatórios de Contingência", "Follow-up Semanal"]
        }
    ];

    return (
        <div className="bg-stone-50 overflow-hidden font-sans">

            {/* 1. HERO METODOLOGIA */}
            <section className="bg-slate-900 text-white py-24 relative border-b-4 border-amber-800">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
                        alt="Estratégia Legal"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-900/90 to-transparent" />
                </div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center max-w-4xl">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Nossa Metodologia</span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Rigor Técnico e <span className="text-amber-500 italic">Inteligência Jurídica</span></h1>
                    <p className="text-xl text-stone-300 font-light leading-relaxed mb-12">
                        Não acreditamos em soluções de prateleira. Cada caso é tratado como projeto único, com estratégia desenhada sob medida para o objetivo do cliente.
                    </p>
                </div>
            </section>

            {/* 2. ETAPAS DO PROCESSO (VERTICAL TIMELINE) */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Linha Vertical */}
                            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-slate-100" />

                            {steps.map((step, idx) => (
                                <div key={idx} className="relative flex gap-8 md:gap-12 mb-16 last:mb-0">
                                    {/* Ícone e Número */}
                                    <div className="shrink-0 relative z-10">
                                        <div className="w-16 h-16 md:w-24 md:h-24 bg-white border-4 border-amber-700 rounded-full flex items-center justify-center shadow-xl">
                                            <step.icon size={28} className="text-amber-700 md:w-10 md:h-10" strokeWidth={1.5} />
                                        </div>
                                        <div className="absolute -top-3 -right-3 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                                            {step.id}
                                        </div>
                                    </div>

                                    {/* Conteúdo */}
                                    <div className="bg-stone-50 rounded-xl p-8 border border-stone-200 grow hover:shadow-lg transition-all">
                                        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">{step.desc}</p>
                                        <div className="flex flex-wrap gap-3">
                                            {step.details.map((detail, i) => (
                                                <span key={i} className="bg-white border border-slate-200 text-slate-500 px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. LEGAL OPERATIONS & TECNOLOGIA */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Legal Operations</span>
                            <h2 className="font-serif text-4xl font-bold mb-6">Tecnologia Aplicada ao Direito</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
                                Utilizamos softwares de jurimetria e gestão processual de última geração para prever tendências de julgamento e garantir eficiência máxima.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Database className="text-amber-500 shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Jurimetria Preditiva</h4>
                                        <p className="text-sm text-slate-400">Análise de dados de decisões judiciais para traçar probabilidades de êxito.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Lock className="text-amber-500 shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Segurança da Informação</h4>
                                        <p className="text-sm text-slate-400">Dataroom virtual criptografado para compartilhamento seguro de documentos.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <BookOpen className="text-amber-500 shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Biblioteca Digital</h4>
                                        <p className="text-sm text-slate-400">Acervo jurisprudencial atualizado diariamente com os Tribunais Superiores.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg transform rotate-3 blur-md opacity-30" />
                            <div className="relative bg-slate-800 border border-slate-700 rounded-lg p-8 shadow-2xl">
                                <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <span className="text-xs text-slate-500 font-mono">dashboard_juridico_v2.0</span>
                                </div>
                                {/* Fake Dashboard UI */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-2">
                                            <div className="h-2 w-24 bg-slate-700 rounded" />
                                            <div className="h-8 w-48 bg-slate-600 rounded" />
                                        </div>
                                        <div className="h-10 w-10 bg-green-500/20 rounded flex items-center justify-center text-green-500 font-bold">+12%</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="h-24 bg-slate-700/50 rounded flex flex-col justify-end p-2"><div className="w-full bg-amber-600 h-[60%] rounded-sm" /></div>
                                        <div className="h-24 bg-slate-700/50 rounded flex flex-col justify-end p-2"><div className="w-full bg-amber-600 h-[80%] rounded-sm" /></div>
                                        <div className="h-24 bg-slate-700/50 rounded flex flex-col justify-end p-2"><div className="w-full bg-amber-600 h-[40%] rounded-sm" /></div>
                                    </div>
                                    <div className="h-2 w-full bg-slate-700 rounded mt-4" />
                                    <div className="h-2 w-[80%] bg-slate-700 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-20 bg-stone-100 text-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Quer entender como isso se aplica ao seu caso?</h2>
                    <Link href="/sites-institucionais/premium/advocacia-empresarial/contato" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-800 transition-colors shadow-lg">
                        Agendar Diagnóstico Gratuito <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

        </div>
    );
}
