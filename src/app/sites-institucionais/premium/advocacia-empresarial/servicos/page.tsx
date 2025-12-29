"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Building2, Scale, Target, Gavel,
    FileText, Shield, Users, BarChart,
    Globe, Briefcase, ChevronRight, HelpCircle,
    ArrowRight, CheckCircle2,
    TrendingUp
} from "lucide-react";
import { useState } from "react";

export default function ServicosPage() {
    const [activeTab, setActiveTab] = useState<"consultivo" | "contencioso">("consultivo");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const consultivoServices = [
        {
            id: "empresarial",
            icon: Building2,
            title: "Direito Empresarial e Societário",
            desc: "Assessoria completa na estruturação e reorganização de sociedades empresárias.",
            details: ["Constituição de Holdings", "Acordos de Sócios", "Dissolução Societária", "Planejamento Sucessório"]
        },
        {
            id: "contratos",
            icon: FileText,
            title: "Contratos Corporativos",
            desc: "Elaboração e revisão de instrumentos contratuais de alta complexidade.",
            details: ["Contratos Internacionais", "Distribuição e Representação", "Licenciamento de Software", "Prestação de Serviços"]
        },
        {
            id: "compliance",
            icon: Shield,
            title: "Compliance e Governança",
            desc: "Implementação de programas de integridade e adequação à Lei Anticorrupção.",
            details: ["Código de Conduta", "Canal de Denúncias", "Investigações Internas", "Due Diligence de Terceiros"]
        },
        {
            id: "ma",
            icon: TrendingUp,
            title: "Fusões e Aquisições (M&A)",
            desc: "Condução legal de operações de compra e venda de empresas e ativos.",
            details: ["Asset Purchase Agreement", "Share Purchase Agreement", "Auditoria Legal", "Concentreção no CADE"]
        }
    ];

    const contenciosoServices = [
        {
            id: "civel",
            icon: Gavel,
            title: "Contencioso Cível Estratégico",
            desc: "Atuação combatíva em disputas judiciais de alto valor econômico ou risco reputacional.",
            details: ["Ações Indenizatórias", "Disputas Contratuais", "Responsabilidade Civil", "Ações Possessórias"]
        },
        {
            id: "trabalhista",
            icon: Users,
            title: "Trabalhista Patronal",
            desc: "Defesa de empresas em reclamatórias trabalhistas e negociações sindicais.",
            details: ["Defesas Judiciais", "Sustentação Oral", "Negociação Coletiva", "Auditoria Trabalhista"]
        },
        {
            id: "recuperacao",
            icon: Scale,
            title: "Recuperação Judicial e Falências",
            desc: "Reestruturação de passivos e defesa de interesses de credores ou devedores.",
            details: ["Pedido de Recuperação", "Habilitação de Crédito", "Plano de Recuperação", "Administração Judicial"]
        },
        {
            id: "tributario",
            icon: BarChart,
            title: "Contencioso Tributário",
            desc: "Defesa em autuações fiscais federais, estaduais e municipais.",
            details: ["Execução Fiscal", "Mandado de Segurança", "Repetição de Indébito", "Defesas no CARF/TIT"]
        }
    ];

    return (
        <div className="bg-stone-50 overflow-hidden font-sans">

            {/* 1. HERO SERVIÇOS */}
            <section className="bg-slate-900 text-white py-24 relative border-b-4 border-amber-800">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop"
                        alt="Documentos Legais"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
                </div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center max-w-4xl">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Atuação Jurídica</span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Soluções Jurídicas Integrais para <br /> <span className="text-amber-500 italic">Desafios Corporativos</span></h1>
                    <p className="text-xl text-stone-300 font-light leading-relaxed mb-12">
                        Aliamos a técnica jurídica clássica à visão pragmática de negócios, atuando tanto na prevenção de riscos quanto na resolução de conflitos.
                    </p>
                </div>
            </section>

            {/* 2. TABS TYPE SELECTION */}
            <section className="sticky top-20 z-40 bg-white/95 backdrop-blur shadow-md border-b border-stone-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex justify-center">
                        <button
                            onClick={() => setActiveTab("consultivo")}
                            className={`flex-1 md:flex-none px-12 py-6 text-center text-lg font-bold font-serif transition-all border-b-4 ${activeTab === "consultivo" ? "border-amber-700 text-amber-700 bg-amber-50/10" : "border-transparent text-slate-400 hover:text-slate-600"}`}
                        >
                            Advocacia Consultiva
                        </button>
                        <button
                            onClick={() => setActiveTab("contencioso")}
                            className={`flex-1 md:flex-none px-12 py-6 text-center text-lg font-bold font-serif transition-all border-b-4 ${activeTab === "contencioso" ? "border-amber-700 text-amber-700 bg-amber-50/10" : "border-transparent text-slate-400 hover:text-slate-600"}`}
                        >
                            Advocacia Contenciosa
                        </button>
                    </div>
                </div>
            </section>

            {/* 3. CONTEÚDO SERVIÇOS */}
            <section className="py-24 bg-white min-h-screen">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">

                    {/* CONSULTIVO */}
                    {activeTab === "consultivo" && (
                        <div className="animate-fade-in space-y-24">
                            <div className="max-w-3xl mx-auto text-center mb-16">
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    Nossa atuação consultiva foca na prevenção de litígios e na estruturação segura dos negócios. Trabalhamos como verdadeiros arquitetos jurídicos para viabilizar seus projetos.
                                </p>
                            </div>

                            {consultivoServices.map((service, idx) => (
                                <div id={service.id} key={idx} className="flex flex-col md:flex-row gap-12 items-start pt-12 border-t border-stone-100 first:border-0 first:pt-0">
                                    <div className="md:w-1/3">
                                        <div className="w-16 h-16 bg-amber-700 text-white rounded-lg flex items-center justify-center mb-6 shadow-xl shadow-amber-900/20">
                                            <service.icon size={32} strokeWidth={1.5} />
                                        </div>
                                        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                                        <p className="text-slate-500 mb-6">{service.desc}</p>
                                        <Link href="/sites-institucionais/premium/advocacia-empresarial/contato" className="text-amber-700 font-bold uppercase text-xs tracking-wider flex items-center gap-2 hover:underline">
                                            Solicitar Proposta <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                    <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                                        {service.details.map((detail, i) => (
                                            <div key={i} className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                                                <h4 className="font-bold text-slate-800 mb-2">{detail}</h4>
                                                <p className="text-sm text-slate-500">Assessoria completa e personalizada.</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CONTENCIOSO */}
                    {activeTab === "contencioso" && (
                        <div className="animate-fade-in space-y-24">
                            <div className="max-w-3xl mx-auto text-center mb-16">
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    Quando o litígio é inevitável, atuamos com combatividade e técnica apurada. Nossa taxa de êxito de 95% reflete a preparação minuciosa para cada caso.
                                </p>
                            </div>

                            {contenciosoServices.map((service, idx) => (
                                <div id={service.id} key={idx} className="flex flex-col md:flex-row gap-12 items-start pt-12 border-t border-stone-100 first:border-0 first:pt-0">
                                    <div className="md:w-1/3">
                                        <div className="w-16 h-16 bg-slate-900 text-white rounded-lg flex items-center justify-center mb-6 shadow-xl shadow-slate-900/20">
                                            <service.icon size={32} strokeWidth={1.5} />
                                        </div>
                                        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                                        <p className="text-slate-500 mb-6">{service.desc}</p>
                                        <Link href="/sites-institucionais/premium/advocacia-empresarial/contato" className="text-slate-900 font-bold uppercase text-xs tracking-wider flex items-center gap-2 hover:underline">
                                            Análise de Risco <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                    <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                                        {service.details.map((detail, i) => (
                                            <div key={i} className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                                                <h4 className="font-bold text-slate-800 mb-2">{detail}</h4>
                                                <p className="text-sm text-slate-500">Defesa técnica em todas as instâncias.</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </section>

            {/* 4. SETORES DE ATUAÇÃO */}
            <section className="py-24 bg-slate-900 text-white relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">Expertise Setorial</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Indústria e Manufatura", "Tecnologia e Software", "Construção Civil",
                            "Serviços Financeiros", "Varejo e E-commerce", "Saúde e Hospitalar",
                            "Energia e Infraestrutura", "Agronegócio", "Logística e Transportes"
                        ].map((sector, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-slate-800 p-6 rounded border border-slate-700 hover:border-amber-600 transition-colors group">
                                <CheckCircle2 className="text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" size={20} />
                                <span className="font-bold text-stone-200">{sector}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FAQ SERVIÇOS */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-3xl">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Perguntas Comuns</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Qual a diferença entre advocacia consultiva e contenciosa?", a: "A consultiva foca na prevenção, elaboração de documentos e orientação para evitar problemas futuros. A contenciosa atua na defesa ou propositura de ações judiciais e administrativas quando o conflito já existe." },
                            { q: "Vocês realizam Due Diligence Legal?", a: "Sim, realizamos auditorias legais completas (Due Diligence) para operações de M&A, avaliando passivos trabalhistas, tributários, cíveis e regularidade contratual da empresa alvo." },
                            { q: "Como funciona a atuação nos Tribunais Superiores (STJ/STF)?", a: "Temos uma equipe especializada em Brasília dedicada exclusivamente ao acompanhamento de recursos nos Tribunais Superiores, realizando despachos com ministros e sustentações orais." },
                            { q: "O escritório atua com arbitragem?", a: "Sim, possuímos vasta experiência em arbitragens nacionais e internacionais, tanto atuando como advogados das partes quanto com sócios atuando como árbitros em câmaras renomadas." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                                >
                                    <span className="font-bold text-slate-800">{item.q}</span>
                                    {activeFaq === idx ? <ChevronRight size={20} className="rotate-90 transition-transform text-amber-700" /> : <ChevronRight size={20} className="text-slate-400" />}
                                </button>
                                {activeFaq === idx && (
                                    <div className="p-6 text-slate-600 leading-relaxed bg-stone-50 border-t border-slate-100">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA FINAL */}
            <section className="bg-amber-700 py-20 text-white text-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-4xl">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Precisa de Orientação Jurídica?</h2>
                    <p className="text-xl text-amber-100 mb-10">
                        Agende uma reunião inicial com um de nossos sócios para discutir as necessidades jurídicas da sua empresa.
                    </p>
                    <Link href="/sites-institucionais/premium/advocacia-empresarial/contato" className="inline-block bg-slate-900 text-white px-10 py-5 rounded font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl">
                        Falar com um Especialista
                    </Link>
                </div>
            </section>

        </div>
    );
}
