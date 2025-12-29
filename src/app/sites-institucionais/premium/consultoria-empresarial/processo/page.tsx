"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ClipboardList, Search, Settings, BarChart, RefreshCw,
    CheckCircle2, ArrowRight, ShieldCheck, Clock, Brain,
    FileText, Users, Target, Database, Laptop
} from "lucide-react";
import { useState } from "react";

export default function ProcessoPage() {
    const [activePhase, setActivePhase] = useState("01");

    const phases = [
        {
            id: "01",
            title: "Diagnóstico & Imersão",
            icon: Search,
            duration: "2-4 Semanas",
            desc: "Mergulhamos nos dados e na cultura da empresa para entender a raiz dos problemas, não apenas os sintomas.",
            deliverables: ["Relatório de Gaps", "Mapeamento de Processos", "Matriz SWOT Avançada", "Entrevistas com Stakeholders"]
        },
        {
            id: "02",
            title: "Desenho da Estratégia",
            icon: Brain,
            duration: "4-6 Semanas",
            desc: "Co-criação de soluções personalizadas que sejam ambiciosas financeiramente, mas viáveis operacionalmente.",
            deliverables: ["Plano Estratégico", "Modelagem Financeira", "Roadmap de Iniciativas", "Definição de KPIs"]
        },
        {
            id: "03",
            title: "Planejamento Tático",
            icon: ClipboardList,
            duration: "3-4 Semanas",
            desc: "Detalhamento do plano de ação, definição de responsabilidades, orçamento e cronograma de implementação.",
            deliverables: ["Planos de Ação (5W2H)", "Governança do Projeto", "Matriz de Riscos", "Setup do PMO"]
        },
        {
            id: "04",
            title: "Implementação Assistida",
            icon: Settings,
            duration: "3-12 Meses",
            desc: "Não entregamos apenas o plano. Acompanhamos a execução lado a lado com sua equipe para garantir tração.",
            deliverables: ["Gestão de Mudança (GMO)", "Treinamentos", "Sprints de Execução", "Resolução de Gargalos"]
        },
        {
            id: "05",
            title: "Monitoramento & Sustentação",
            icon: RefreshCw,
            duration: "Contínuo",
            desc: "Estabelecimento de ciclos de controle para garantir que os resultados se mantenham após nossa saída.",
            deliverables: ["Dashboards de Controle", "Procedimentos Padrão (SOPs)", "Transferência de Conhecimento", "Auditoria de Resultados"]
        }
    ];

    return (
        <div className="bg-slate-50 overflow-hidden font-sans">

            {/* 1. HERO METODOLOGIA */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
                        alt="Metodologia"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center max-w-4xl">
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Nossa Metodologia</span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">O Caminho Seguro do <br /><span className="text-blue-500">Ponto A ao Ponto B</span></h1>
                    <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                        Nossa abordagem proprietária, o <strong>Strategic Value Loop™</strong>, garante consistência na entrega e mitigação de riscos em projetos complexos de transformação.
                    </p>
                </div>
            </section>

            {/* 2. VISÃO GERAL (CIRCULAR LOOP) - SIMULATED WITH GRID */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Value Loop™</h2>
                        <p className="text-slate-600">Um processo cíclico e iterativo focado na melhoria contínua e geração de valor.</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-4 relative">
                        {/* Connecting Line for Desktop */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />

                        {phases.map((phase, idx) => (
                            <div key={idx} className="relative z-10 bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group flex flex-col items-center text-center h-full">
                                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-200">
                                    <span className="font-bold text-lg">{phase.id}</span>
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-2">{phase.title}</h3>
                                <p className="text-xs text-slate-500">{phase.duration}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. DETALHAMENTO DE FASES (INTERACTIVE) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
                        {/* Sidebar Selection */}
                        <div className="lg:w-1/3 space-y-2">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 px-4">Etapas do Processo</h3>
                            {phases.map((phase) => (
                                <button
                                    key={phase.id}
                                    onClick={() => setActivePhase(phase.id)}
                                    className={`w-full text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-all ${activePhase === phase.id
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                                            : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                        }`}
                                >
                                    <phase.icon size={20} className={activePhase === phase.id ? "text-blue-200" : "text-slate-400"} />
                                    <span className="font-bold">{phase.id}. {phase.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Detail View */}
                        <div className="lg:w-2/3">
                            {phases.map((phase) => (
                                activePhase === phase.id && (
                                    <div key={phase.id} className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 h-full animate-fade-in-up">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                                <phase.icon size={32} />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-bold text-slate-900">{phase.title}</h2>
                                                <p className="text-blue-600 font-bold uppercase text-xs tracking-widest mt-1"><Clock size={12} className="inline mr-1" /> Duração Estimada: {phase.duration}</p>
                                            </div>
                                        </div>

                                        <h4 className="font-bold text-lg text-slate-900 mb-4">O que fazemos nesta etapa:</h4>
                                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                            {phase.desc}
                                        </p>

                                        <h4 className="font-bold text-lg text-slate-900 mb-6 border-t border-slate-100 pt-6">Entregáveis Principais:</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {phase.deliverables.map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                                    <span className="font-medium text-slate-700 text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FERRAMENTAS PROPRIETÁRIAS */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold mb-4">Ferramentas & Tecnologias</h2>
                            <p className="text-slate-400">
                                Não confiamos apenas na intuição. Utilizamos um stack tecnológico avançado e ferramentas proprietárias para embasar nossas recomendações com dados.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Strategic Analyzer™", icon: Database, desc: "Algoritmo de análise de dados massivos para identificar correlações não óbvias e oportunidades de receita." },
                            { name: "Ops Excellence App", icon: Laptop, desc: "Plataforma digital para gestão de chão de fábrica e monitoramento de eficiência operacional em tempo real." },
                            { name: "Culture Pulse", icon: Users, desc: "Ferramenta de diagnóstico de clima e cultura organizacional baseada em análise de rede organizacional (ONA)." }
                        ].map((tool, i) => (
                            <div key={i} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:bg-slate-750 transition-colors">
                                <tool.icon size={32} className="text-blue-500 mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3">{tool.name}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{tool.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. GESTÃO DE RISCOS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                            <Image
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"
                                alt="Gestão de Riscos"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-bold text-2xl mb-1">Risk Mitigation Protocol</p>
                                <p className="text-sm opacity-80">Segurança em primeiro lugar.</p>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600"><ShieldCheck size={28} /></div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Mitigação de Riscos de Projeto</h2>
                            <p className="text-slate-600 text-lg mb-8">
                                Sabemos que 70% das transformações falham. Nossa metodologia foi desenhada para blindar seu projeto contra as causas mais comuns de falha.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1"><CheckCircle2 size={14} /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Alinhamento Executivo</h4>
                                        <p className="text-sm text-slate-500">Workshops de alinhamento quinzenais com sponsors.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1"><CheckCircle2 size={14} /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Gestão de Mudança (GMO)</h4>
                                        <p className="text-sm text-slate-500">Comunicação e treinamento contínuos para reduzir resistência.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1"><CheckCircle2 size={14} /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Quick Wins</h4>
                                        <p className="text-sm text-slate-500">Resultados rápidos para gerar autofinanciamento e moral.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA FINAL */}
            <section className="py-24 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-4xl">
                    <h2 className="text-4xl font-bold mb-8">Pronto para Iniciar sua Jornada?</h2>
                    <Link href="/sites-institucionais/premium/consultoria-empresarial/contato" className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
                        Solicitar Proposta Comercial <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}
