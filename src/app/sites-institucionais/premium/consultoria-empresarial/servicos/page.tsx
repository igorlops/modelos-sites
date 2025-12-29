"use client";

import Image from "next/image";
import Link from "next/link";
import {
    BarChart3, Users, Lightbulb, Shield, Target,
    Settings, Zap, Search, PieChart, FileText,
    HelpCircle, Check, ArrowRight, Building
} from "lucide-react";
import { useState } from "react";

export default function ServicosPage() {
    const [activeTab, setActiveTab] = useState("strategy");

    return (
        <div className="bg-slate-50 overflow-hidden font-sans">

            {/* 1. HERO SERVIÇOS */}
            <section className="relative py-24 bg-slate-900 text-white">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                        alt="Consultoria Estratégica"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center max-w-4xl">
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in">Soluções Corporativas</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
                        Arquitetando o Futuro <br /><span className="text-blue-500">do Seu Negócio</span>
                    </h1>
                    <p className="text-xl text-slate-300 font-light leading-relaxed mb-8 animate-fade-in-up delay-100">
                        De reestruturações operacionais complexas a estratégias de crescimento digital.
                        Nossas soluções são desenhadas para gerar valor mensurável e sustentável.
                    </p>
                </div>
            </section>

            {/* 2. OVERVIEW DAS PRÁTICAS (TABS) */}
            <section className="py-24 bg-white sticky top-20 z-30 shadow-sm border-b border-slate-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { id: "strategy", label: "Estratégia & Crescimento" },
                            { id: "ops", label: "Operações & Performance" },
                            { id: "people", label: "Pessoas & Cultura" },
                            { id: "tech", label: "Tecnologia & Digital" }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-4 rounded-lg font-bold text-sm md:text-base transition-all ${activeTab === tab.id
                                        ? "bg-slate-900 text-white shadow-lg scale-105"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CONTEÚDO DETALHADO POR PILAR */}
            <div className="min-h-screen">

                {/* ESTRATÉGIA */}
                {activeTab === "strategy" && (
                    <div className="animate-fade-in">
                        <section id="strategy" className="py-24 bg-white">
                            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                                <div className="flex flex-col md:flex-row gap-16 mb-20">
                                    <div className="md:w-1/2">
                                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Estratégia & Crescimento</h2>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            Em um ambiente de negócios volátil, a clareza estratégica é a maior vantagem competitiva. Ajudamos C-levels a definirem onde jogar e como vencer.
                                        </p>
                                    </div>
                                    <div className="md:w-1/2 grid grid-cols-2 gap-6">
                                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                            <h4 className="font-bold text-blue-800 text-3xl mb-1">5-10x</h4>
                                            <p className="text-sm text-blue-600 font-medium">ROI Típico em 3 anos</p>
                                        </div>
                                        <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
                                            <h4 className="font-bold text-cyan-800 text-3xl mb-1">+28%</h4>
                                            <p className="text-sm text-cyan-600 font-medium">Crescimento Receita</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[
                                        {
                                            title: "Planejamento Estratégico",
                                            desc: "Definição de ambição de longo prazo, portfólio de iniciativas e alocação de capital.",
                                            items: ["Análise de Cenários", "Matriz de Priorização", "Roadmap 5 Anos"]
                                        },
                                        {
                                            title: "M&A Advisory",
                                            desc: "Suporte ponta a ponta em fusões e aquisições, do target screening à integração pós-deal (PMI).",
                                            items: ["Due Diligence Comercial", "Valuation", "Integração Cultural"]
                                        },
                                        {
                                            title: "Go-to-Market",
                                            desc: "Estratégias de entrada em novos mercados e lançamento de produtos de alto impacto.",
                                            items: ["Segmentação de Clientes", "Pricing", "Canais de Distribuição"]
                                        },
                                        {
                                            title: "Inovação Corporativa",
                                            desc: "Estruturação de veículos de CVC e laboratórios de inovação para novos revenue streams.",
                                            items: ["Corporate Venture Capital", "Open Innovation", "Venture Building"]
                                        },
                                        {
                                            title: "Sustentabilidade & ESG",
                                            desc: "Integração de práticas ESG à estratégia core do negócio para valorização de longo prazo.",
                                            items: ["Matriz de Materialidade", "Descarbonização", "Governança"]
                                        }
                                    ].map((srv, i) => (
                                        <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group">
                                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                <Target size={24} className="text-slate-700 group-hover:text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-4">{srv.title}</h3>
                                            <p className="text-slate-600 text-sm mb-6 min-h-[60px]">{srv.desc}</p>
                                            <ul className="space-y-2 border-t border-slate-200 pt-4">
                                                {srv.items.map((it, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
                                                        <Check size={14} className="text-blue-500" /> {it}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* OPERAÇÕES */}
                {activeTab === "ops" && (
                    <div className="animate-fade-in">
                        <section id="ops" className="py-24 bg-slate-50">
                            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                                <div className="mb-20 max-w-3xl">
                                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Operações & Performance</h2>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        Transformamos a eficiência operacional em alavanca de valor. Focamos na redução inteligente de custos e na otimização de processos sem comprometer a qualidade.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-12">
                                    {[
                                        {
                                            title: "Excelência Operacional (Lean/Six Sigma)",
                                            desc: "Implementação de cultura de melhoria contínua para eliminar desperdícios e variabilidade.",
                                            icon: Settings
                                        },
                                        {
                                            title: "Supply Chain 4.0",
                                            desc: "Digitalização e otimização da cadeia de suprimentos para maior resiliência e menor custo total.",
                                            icon: Building
                                        },
                                        {
                                            title: "Procurement Estratégico",
                                            desc: "Strategic sourcing e gestão de categorias para otimização da base de fornecedores.",
                                            icon: Search
                                        },
                                        {
                                            title: "Zero-Based Budgeting (ZBB)",
                                            desc: "Reconstrução da base de custos a partir do zero para alinhamento total com a estratégia.",
                                            icon: PieChart
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white p-10 rounded-2xl shadow-sm flex gap-6 items-start border border-slate-100 hover:border-blue-300 transition-colors">
                                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 text-blue-600">
                                                <item.icon size={32} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                                <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                                                <Link href="/sites-institucionais/premium/consultoria-empresarial/contato" className="text-blue-600 font-bold hover:underline flex items-center gap-2 text-sm uppercase tracking-wide">
                                                    Solicitar Diagnóstico <ArrowRight size={16} />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* Conteúdo similar para People e Tech simplificado para caber no limite mas mantendo estrutura */}
                {(activeTab === "people" || activeTab === "tech") && (
                    <div className="py-32 text-center container mx-auto">
                        <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                {activeTab === "people" ? <Users size={40} /> : <Zap size={40} />}
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                {activeTab === "people" ? "Transformação Cultural & Liderança" : "Tecnologia & Digitalização"}
                            </h2>
                            <p className="text-slate-600 mb-8">
                                {activeTab === "people"
                                    ? "Alinhamos estrutura, cultura e incentivos para criar organizações de alta performance."
                                    : "Modernizamos o core tecnológico e implementamos IA para escalar novos modelos de negócio."}
                            </p>
                            <Link href="/sites-institucionais/premium/consultoria-empresarial/contato" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition inline-block">
                                Falar com Especialista
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* 4. SOLUÇÕES P/ INDÚSTRIA */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="text-3xl font-bold mb-12">Expertise Vertical Profunda</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {["Financial Services", "Retail & Consumer", "Energy & Resources", "Healthcare", "Technology", "Manufacturing", "Agribusiness", "Public Sector"].map((ind, i) => (
                            <div key={i} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors cursor-pointer group border border-slate-700">
                                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">{ind}</h3>
                                <p className="text-xs text-slate-400">Cases e soluções específicas.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. ENGAGEMENT MODELS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="text-center text-4xl font-bold text-slate-900 mb-16">Como Trabalhamos</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Escopo Fechado (Project-Based)</h3>
                            <p className="text-slate-600 text-sm mb-6">Ideal para diagnósticos, planejamentos estratégicos e projetos com entregáveis claros e início/fim definidos.</p>
                            <ul className="space-y-2 text-xs font-medium text-slate-500">
                                <li className="flex gap-2"><Check size={14} className="text-green-500" /> Preço fixo</li>
                                <li className="flex gap-2"><Check size={14} className="text-green-500" /> Cronograma rígido</li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-2xl border-2 border-blue-600 bg-white shadow-xl relative transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Mais Comum</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Success Fee (Risco Compartilhado)</h3>
                            <p className="text-slate-600 text-sm mb-6">Parte fixa reduzida + variável atrelada a KPIs de resultado (EBITDA, Savings, Receita). Alinhamento total.</p>
                            <ul className="space-y-2 text-xs font-medium text-slate-500">
                                <li className="flex gap-2"><Check size={14} className="text-green-500" /> Foco em ROI</li>
                                <li className="flex gap-2"><Check size={14} className="text-green-500" /> Parceria real</li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Retainer / PMO</h3>
                            <p className="text-slate-600 text-sm mb-6">Suporte contínuo para implementação, gestão de mudanças ou advisory recorrente para a diretoria.</p>
                            <ul className="space-y-2 text-xs font-medium text-slate-500">
                                <li className="flex gap-2"><Check size={14} className="text-green-500" /> Flexibilidade</li>
                                <li className="flex gap-2"><Check size={14} className="text-green-500" /> Longo prazo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ SERVIÇOS */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Dúvidas Frequentes sobre Contratação</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Vocês trabalham com empresas menores?", a: "Nosso foco é Middle Market e Enterprise. Para empresas menores, sugerimos nossos workshops estratégicos de curta duração." },
                            { q: "Qual a disponibilidade da equipe?", a: "Alocamos equipes dedicadas. Um Partner supervisiona no máximo 3 projetos simultâneos para garantir qualidade." },
                            { q: "Como garantem a confidencialidade?", a: "Todos os consultores assinam NDAs rigorosos. Utilizamos servidores criptografados e processos auditados de segurança da informação." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 flex items-center gap-3 mb-2">
                                    <HelpCircle size={18} className="text-blue-500" /> {faq.q}
                                </h4>
                                <p className="text-slate-500 text-sm pl-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
