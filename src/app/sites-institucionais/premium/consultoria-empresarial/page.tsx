"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight, CheckCircle2, TrendingUp, BarChart3, Users,
    Lightbulb, Shield, Target, Award, Briefcase,
    ChevronRight, Building2, Globe, Clock, Quote,
    FileText, Play
} from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState("strategy");

    const challenges = [
        { icon: TrendingUp, title: "Crescimento Estagnado", desc: "Sua receita atingiu um platô e as estratégias atuais não geram mais o mesmo ROI." },
        { icon: Clock, title: "Baixa Produtividade", desc: "Processos manuais e burocracia excessiva consomem o tempo valioso da sua equipe." },
        { icon: Target, title: "Custos Elevados", desc: "Despesas operacionais crescentes corroem suas margens de lucro ano após ano." },
        { icon: Lightbulb, title: "Falta de Inovação", desc: "Concorrentes digitais e startups estão capturando sua participação de mercado." },
        { icon: Users, title: "Gestão de Talentos", desc: "Dificuldade em atrair, reter e desenvolver lideranças de alta performance." },
        { icon: Shield, title: "Riscos não Gerenciados", desc: "Vulnerabilidades regulatórias, financeiras ou cibernéticas ameaçam a continuidade." },
        { icon: Building2, title: "Dificuldade de Escala", desc: "Sua estrutura atual não suporta o próximo nível de crescimento da empresa." },
        { icon: Globe, title: "Expansão Internacional", desc: "Desafios complexos na entrada em novos mercados e geografias." },
    ];

    const solutions = [
        {
            id: "strategy",
            icon: Target,
            title: "Planejamento Estratégico",
            desc: "Definição clara de visão, objetivos de longo prazo e roadmap de execução para garantir liderança de mercado sustentável.",
            benefits: ["Visão de 5 anos", "Roadmap executável", "KPIs definidos", "Alinhamento C-level"]
        },
        {
            id: "ops",
            icon: BarChart3,
            title: "Excelência Operacional",
            desc: "Otimização de processos ponta a ponta utilizando Lean Six Sigma e automação para maximizar eficiência e reduzir desperdícios.",
            benefits: ["Redução de custos", "Aumento de qualidade", "Agilidade processual", "Padronização"]
        },
        {
            id: "digital",
            icon: Lightbulb,
            title: "Transformação Digital",
            desc: "Modernização tecnológica e cultural para colocar sua empresa na vanguarda da economia digital e inovação.",
            benefits: ["Novos modelos de negócio", "Digitalização", "Cultura ágil", "Data-driven decision"]
        }
    ];

    return (
        <div className="bg-slate-50 overflow-hidden font-sans">

            {/* 1. HERO EXECUTIVO */}
            <section className="relative min-h-screen flex items-center bg-slate-900 text-white overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
                        alt="Escritório Corporativo"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 pt-20">
                    <div className="flex flex-col gap-6 max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 rounded-full px-4 py-1 w-fit backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Consultoria Estratégica Premium</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                            Transformamos Desafios em <span className="text-blue-500">Oportunidades de Crescimento</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl border-l-4 border-blue-600 pl-6">
                            Parceiros estratégicos para empresas Fortune 500 e líderes de mercado.
                            Entregamos mais de <strong>R$ 2 Bilhões</strong> em valor gerado através de reestruturação, inovação e eficiência operacional.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link href="/sites-institucionais/premium/consultoria-empresarial/contato" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-blue-900/50 flex items-center justify-center gap-2 group">
                                Solicitar Diagnóstico <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/sites-institucionais/premium/consultoria-empresarial/portfolio" className="px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-white text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                                Ver Cases de Sucesso
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-slate-800 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-white mb-1">20+</p>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Anos de Mercado</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white mb-1">500+</p>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Projetos Entregues</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white mb-1">95%</p>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Taxa de Sucesso</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white mb-1">ISO</p>
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Certificação 9001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. LOGOS CLIENTES */}
            <section className="bg-white py-12 border-b border-slate-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <p className="text-center text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">
                        Empresas que Confiam em Nossa Expertise
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                            <div key={i} className="flex justify-center items-center">
                                <div className="h-12 w-32 bg-slate-100 rounded flex items-center justify-center font-bold text-slate-400 text-xs shadow-sm">
                                    Enterprise {i}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. DESAFIOS EMPRESARIAIS */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-3xl">
                            <h2 className="text-slate-900 text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                                Sua Empresa Enfrenta <span className="text-blue-600">Estes Desafios?</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Identificar o problema corretamente é 50% da solução. Nossa experiência nos permite diagnosticar rapidamente os gargalos que impedem seu crescimento.
                            </p>
                        </div>
                        <Link href="/sites-institucionais/premium/consultoria-empresarial/contato" className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
                            Falar com um Consultor <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {challenges.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 group">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link href="/sites-institucionais/premium/consultoria-empresarial/contato" className="inline-flex items-center gap-2 text-blue-600 font-bold">
                            Vamos Resolver Juntos <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. SOLUÇÕES ESTRATÉGICAS */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50" />

                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Nossa Expertise</span>
                        <h2 className="text-slate-900 text-4xl lg:text-5xl font-bold mb-6">Soluções Corporativas Integradas</h2>
                        <p className="text-slate-600 text-lg">
                            Combinamos estratégia, operações e tecnologia para entregar resultados tangíveis e sustentáveis.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            { ...solutions[0], bg: "bg-slate-900 text-white", iconBg: "bg-blue-600", text: "text-slate-300", titleCol: "text-white" },
                            { ...solutions[1], bg: "bg-white border border-slate-200", iconBg: "bg-blue-100 text-blue-600", text: "text-slate-600", titleCol: "text-slate-900" },
                            { ...solutions[2], bg: "bg-white border border-slate-200", iconBg: "bg-cyan-100 text-cyan-600", text: "text-slate-600", titleCol: "text-slate-900" },
                        ].map((sol, idx) => (
                            <div key={idx} className={`p-10 rounded-2xl shadow-xl flex flex-col ${sol.bg}`}>
                                <div className={`w-14 h-14 ${sol.iconBg} rounded-xl flex items-center justify-center mb-8 shadow-md`}>
                                    <sol.icon size={28} />
                                </div>
                                <h3 className={`text-2xl font-bold mb-4 ${sol.titleCol}`}>{sol.title}</h3>
                                <p className={`mb-8 leading-relaxed ${sol.text}`}>{sol.desc}</p>

                                <div className="mt-auto">
                                    <ul className="space-y-3 mb-8">
                                        {sol.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                                <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                                                <span className={sol.text}>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/sites-institucionais/premium/consultoria-empresarial/servicos#${sol.id}`} className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all text-blue-500">
                                        Saiba Mais <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {/* Additional smaller service cards could go here to match the 9 solutions requirement */}
                        {/* For brevity in strict 600lines constraint, we keep the main 3 detailed and list others */}
                        {[
                            "Inovação e R&D", "Gestão de Mudanças", "M&A Advisory",
                            "Desenvolvimento de Liderança", "Reestruturação Organizacional", "Gestão de Performance"
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                                    <span className="font-bold text-slate-700 group-hover:text-blue-700">{item}</span>
                                </div>
                                <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. METODOLOGIA (TIMELINE) */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/3">
                            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Nossa Abordagem</span>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Metodologia Comprovada</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Refinada em mais de 20 anos de projetos, nossa metodologia proprietária garante consistência, agilidade e resultados previsíveis.
                            </p>
                            <Link href="/sites-institucionais/premium/consultoria-empresarial/processo" className="text-blue-400 font-bold hover:text-white transition-colors flex items-center gap-2">
                                Ver Detalhes do Processo <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="md:w-2/3">
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                                {[
                                    { step: "01", title: "Diagnóstico 360º", desc: "Varredura completa para identificar gaps e oportunidades reais." },
                                    { step: "02", title: "Desenho Estratégico", desc: "Co-criação de soluções personalizadas alinhadas aos objetivos." },
                                    { step: "03", title: "Implementação Ágil", desc: "Execução hands-on com sprints quinzenais e quick wins." },
                                    { step: "04", title: "Monitoramento", desc: "Dashboards em tempo real para garantia de KPIs." },
                                    { step: "05", title: "Otimização Contínua", desc: "Ciclos de melhoria para sustentabilidade dos resultados." }
                                ].map((phase, idx) => (
                                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-600 bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-blue-500 group-hover:bg-blue-600 transition-colors z-10 text-xs font-bold">
                                            {phase.step}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg group-hover:border-blue-500/50 transition-all">
                                            <h3 className="font-bold text-lg mb-2 text-white">{phase.title}</h3>
                                            <p className="text-slate-400 text-sm">{phase.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. NÚMEROS KPI */}
            <section className="py-20 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                        <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                            <p className="text-5xl font-bold mb-2">R$ 2B+</p>
                            <p className="text-blue-200 uppercase tracking-widest text-xs font-bold">Valor Gerado</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                            <p className="text-5xl font-bold mb-2">15+</p>
                            <p className="text-blue-200 uppercase tracking-widest text-xs font-bold">Setores Atendidos</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                            <p className="text-5xl font-bold mb-2">80+</p>
                            <p className="text-blue-200 uppercase tracking-widest text-xs font-bold">Consultores Sênior</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                            <p className="text-5xl font-bold mb-2">4.9</p>
                            <div className="flex justify-center gap-1 text-amber-400 mb-2 mt-[-5px]">
                                <span className="w-2 h-2 rounded-full bg-amber-400"></span><span className="w-2 h-2 rounded-full bg-amber-400"></span><span className="w-2 h-2 rounded-full bg-amber-400"></span><span className="w-2 h-2 rounded-full bg-amber-400"></span><span className="w-2 h-2 rounded-full bg-amber-400"></span>
                            </div>
                            <p className="text-blue-200 uppercase tracking-widest text-xs font-bold">Satisfação Clientes</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CASES DE SUCESSO */}
            <section className="py-24 bg-white px-6 md:px-12 lg:px-20 xl:px-32">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-slate-900 text-4xl font-bold mb-4">Resultados Que Falam Por Si</h2>
                            <p className="text-slate-500 max-w-xl">Veja como apoiamos empresas líderes a superarem seus maiores desafios.</p>
                        </div>
                        <Link href="/sites-institucionais/premium/consultoria-empresarial/portfolio" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors">
                            Ver Todos os Cases
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { sector: "Manufatura", title: "Otimização de Supply Chain Global", result: "+28% Margem EBITDA", roi: "6 Meses" },
                            { sector: "Varejo", title: "Transformação Digital Omnichannel", result: "200% Crescimento E-commerce", roi: "8 Meses" },
                            { sector: "Finanças", title: "Reestruturação Organizacional Pós-Fusão", result: "-15% Custos Operacionais", roi: "4 Meses" }
                        ].map((cajse, i) => (
                            <div key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                                <div className="h-48 bg-slate-200 relative">
                                    <Image
                                        src={`https://images.unsplash.com/photo-1542744173-8e7e5341c447?q=80&w=1000&auto=format&fit=crop`}
                                        alt="Case"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-slate-900">
                                        {cajse.sector}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                        {cajse.title}
                                    </h3>
                                    <div className="flex gap-4 mb-6">
                                        <div className="bg-green-50 px-3 py-2 rounded border border-green-100">
                                            <p className="text-[10px] text-green-600 uppercase font-bold">Resultado</p>
                                            <p className="font-bold text-green-800">{cajse.result}</p>
                                        </div>
                                        <div className="bg-blue-50 px-3 py-2 rounded border border-blue-100">
                                            <p className="text-[10px] text-blue-600 uppercase font-bold">ROI</p>
                                            <p className="font-bold text-blue-800">{cajse.roi}</p>
                                        </div>
                                    </div>
                                    <Link href="/sites-institucionais/premium/consultoria-empresarial/portfolio" className="text-sm font-bold text-slate-900 flex items-center gap-2 group/link">
                                        Ler Estudo Completo <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. INDÚSTRIAS */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="text-center text-4xl font-bold text-slate-900 mb-16">Expertise Setorial Profunda</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {[
                            "Tecnologia & Software", "Manufatura & Indústria", "Serviços Financeiros",
                            "Varejo & E-commerce", "Saúde & Farmacêutica", "Energia & Utilities",
                            "Agronegócio", "Logística", "Telecomunicações"
                        ].map((ind, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Briefcase size={20} />
                                </div>
                                <span className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{ind}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. DIFERENCIAIS COMPETITIVOS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Por Que Escolher a Strategic</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center mb-4"><Award size={24} /></div>
                            <h3 className="text-xl font-bold text-slate-900">Senioridade Garantida</h3>
                            <p className="text-slate-600 leading-relaxed">Não delegamos seu projeto para juniores. Nossa equipe é formada 100% por consultores sêniores com experiência executiva prévia em grandes corporações.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4"><Target size={24} /></div>
                            <h3 className="text-xl font-bold text-slate-900">Foco em ROI</h3>
                            <p className="text-slate-600 leading-relaxed">Nossa remuneração pode ser atrelada aos resultados (Success Fee). Se você não ganha, nós não ganhamos. Alinhamento total de interesses.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center mb-4"><Shield size={24} /></div>
                            <h3 className="text-xl font-bold text-slate-900">Implementação Hands-On</h3>
                            <p className="text-slate-600 leading-relaxed">Não entregamos apenas relatórios em PowerPoint. Trabalhamos lado a lado com sua equipe na execução até que os resultados sejam atingidos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. DEPOIMENTOS C-LEVEL */}
            <section className="py-24 bg-slate-900 text-white border-y border-slate-800">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="text-center text-4xl font-bold mb-16">A Voz da Liderança Executiva</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Roberto Alves", role: "CEO, TechFin Global", quote: "A Strategic não apenas desenhou o plano, mas foi fundamental na execução da nossa expansão internacional. O nível de senioridade da equipe é incomparável." },
                            { name: "Carla Mendez", role: "COO, PetroLink Energia", quote: "Conseguiram identificar ineficiências operacionais que estávamos ignorando há anos. O projeto se pagou em 3 meses com as economias geradas." },
                            { name: "André Santos", role: "Director, Retail Group", quote: "A transformação digital que conduziram mudou nossa cultura. Saímos de uma empresa tradicional para um player ágil em menos de um ano." }
                        ].map((testim, i) => (
                            <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
                                <Quote className="absolute top-8 right-8 text-slate-600 opacity-20" size={48} />
                                <p className="text-slate-300 italic mb-8 leading-relaxed relative z-10">"{testim.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-600 rounded-full"></div>
                                    <div>
                                        <p className="font-bold text-white">{testim.name}</p>
                                        <p className="text-xs text-slate-400 uppercase tracking-wide">{testim.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. THOUGHT LEADERSHIP (INSIGHTS) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Insights Estratégicos</h2>
                        <Link href="/sites-institucionais/premium/consultoria-empresarial/blog" className="text-blue-600 font-bold hover:underline">Ver Todos</Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="h-60 bg-slate-200 rounded-xl mb-6 relative overflow-hidden">
                                    <Image src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" alt="Post" />
                                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase rounded text-slate-900">Whitepaper</div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Tendências de M&A para o Próximo Ciclo Econômico</h3>
                                <p className="text-slate-500 text-sm mb-4">Análise detalhada das oportunidades de consolidação de mercado no setor industrial.</p>
                                <span className="text-blue-600 font-bold text-sm flex items-center gap-2">Ler Artigo <ArrowRight size={16} /></span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 12. FAQ ESTRATÉGICO */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-5xl">
                    <h2 className="text-center text-4xl font-bold text-slate-900 mb-16">Perguntas Frequentes</h2>
                    <div className="grid gap-6">
                        {[
                            { q: "Qual o investimento médio de um projeto?", a: "Nossos projetos são sob medida. Trabalhamos com modelos de escopo fechado, retainer mensal ou success fee. O investimento varia conforme a complexidade, mas tipicamente inicia em R$ 50k para diagnósticos e pode escalar para grandes transformações." },
                            { q: "Em quanto tempo verei resultados?", a: "Focamos em Quick Wins nas primeiras 4 semanas para gerar caixa imediato. Projetos estruturais geralmente apresentam ROI consolidado entre 3 a 6 meses após o início da implementação." },
                            { q: "Vocês atendem empresas de qual porte?", a: "Nosso foco são médias e grandes empresas (faturamento acima de R$ 50M/ano) que buscam profissionalização, escala ou reestruturação. Também atendemos startups em estágio scale-up com Series B+." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                                <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">?</div>
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 pl-9">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 13. CTA FINAL EXECUTIVO */}
            <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos Discutir os Desafios da Sua Empresa?</h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
                        Agende uma conversa confidencial com um de nossos sócios e receba um pré-diagnóstico sem compromisso.
                    </p>

                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl max-w-4xl mx-auto border border-white/20">
                        <form className="grid md:grid-cols-3 gap-4">
                            <input type="text" placeholder="Seu Nome" className="bg-white/90 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                            <input type="email" placeholder="E-mail Corporativo" className="bg-white/90 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                            <button className="bg-white text-blue-600 font-bold rounded-lg px-4 py-3 hover:bg-slate-100 transition-colors shadow-lg">
                                Agendar Reunião
                            </button>
                        </form>
                        <p className="text-xs text-blue-200 mt-4 flex items-center justify-center gap-4">
                            <span className="flex items-center gap-1"><Shield size={12} /> 100% Confidencial</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> Resposta em 24h</span>
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
