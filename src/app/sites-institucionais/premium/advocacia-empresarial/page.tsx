"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Scale, Shield, Gavel, FileText, Building2, Users,
    ArrowRight, CheckCircle2, Award, BookOpen, Clock,
    ChevronDown, MessageSquare, ChevronRight, BarChart
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const practiceAreas = [
        {
            title: "Direito Empresarial",
            icon: Building2,
            desc: "Assessoria completa para constituição, estruturação e governança de sociedades.",
            items: ["Acordos de Sócios", "Planejamento Sucessório", "Governança Corporativa", "Compliance"]
        },
        {
            title: "Contratos Complexos",
            icon: FileText,
            desc: "Elaboração e revisão de instrumentos contratuais estratégicos para o negócio.",
            items: ["Contratos Internacionais", "Joint Ventures", "Licenciamentos", "Franquias"]
        },
        {
            title: "Recuperação Judicial",
            icon: Scale,
            desc: "Estratégias jurídicas para reestruturação de passivos e preservação da empresa.",
            items: ["Negociação com Credores", "Plano de Recuperação", "Proteção de Ativos", "Falências"]
        },
        {
            title: "Direito Tributário",
            icon: BarChart,
            desc: "Planejamento fiscal elisivo e defesa em autuações administrativas e judiciais.",
            items: ["Contencioso Tributário", "Recuperação de Créditos", "Planejamento Fiscal", "Teses Tributárias"]
        },
        {
            title: "Fusões e Aquisições (M&A)",
            icon: Users,
            desc: "Due diligence legal e estruturação de operações de compra e venda de empresas.",
            items: ["Due Diligence", "Valuation Legal", "Deal Making", "Integração Pós-Deal"]
        },
        {
            title: "Contencioso Estratégico",
            icon: Gavel,
            desc: "Atuação combatíva em disputas judiciais de alta complexidade e arbitragem.",
            items: ["Ações Cíveis", "Arbitragem", "Disputas Societárias", "Execuções"]
        }
    ];

    const stats = [
        { value: "30+", label: "Anos de Tradição" },
        { value: "500+", label: "Causas Vencidas" },
        { value: "R$ 100M+", label: "Recuperados" },
        { value: "95%", label: "Taxa de Êxito" }
    ];

    return (
        <div className="bg-stone-50 overflow-hidden font-sans">

            {/* 1. HERO IMPONENTE */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 border-b-4 border-amber-800">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2600&auto=format&fit=crop"
                        alt="Biblioteca Jurídica"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-900/30 border border-amber-700/50 rounded-full px-6 py-2 mb-8 animate-fade-in text-amber-500 font-bold tracking-widest text-xs uppercase backdrop-blur-sm">
                        <Scale size={14} className="mb-0.5" /> Escritório de Advocacia Empresarial
                    </div>

                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight max-w-5xl mx-auto shadow-black drop-shadow-lg">
                        Excelência Jurídica a Serviço da <span className="text-amber-500 italic">Sua Empresa</span>
                    </h1>

                    <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
                        Tradição, ética e resultados comprovados. Oferecemos assessoria jurídica estratégica para grandes corporações, focada na segurança do negócio e na mitigação de riscos.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up">
                        <Link href="/sites-institucionais/premium/advocacia-empresarial/contato" className="w-full md:w-auto bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white px-10 py-5 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-amber-900/50 flex items-center justify-center gap-3 transform hover:-translate-y-1">
                            <Gavel size={20} /> Agendar Consulta
                        </Link>
                        <Link href="/sites-institucionais/premium/advocacia-empresarial/sobre" className="w-full md:w-auto bg-transparent border-2 border-stone-400 hover:border-white text-stone-300 hover:text-white px-10 py-5 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-3">
                            Conheça o Escritório
                        </Link>
                    </div>

                    <div className="mt-20 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <p className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Registro na Ordem</p>
                            <p className="text-stone-300 font-serif font-bold text-lg">OAB/SP 12.345</p>
                        </div>
                        <div className="text-center">
                            <p className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Fundação</p>
                            <p className="text-stone-300 font-serif font-bold text-lg">Desde 1995</p>
                        </div>
                        <div className="text-center">
                            <p className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Certificação</p>
                            <p className="text-stone-300 font-serif font-bold text-lg">ISO 9001</p>
                        </div>
                        <div className="text-center">
                            <p className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Reconhecimento</p>
                            <p className="text-stone-300 font-serif font-bold text-lg">Análise Advocacia</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CITAÇÃO JURÍDICA */}
            <section className="py-20 bg-stone-100 border-b border-stone-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 text-center max-w-4xl">
                    <div className="text-amber-700 mb-6 flex justify-center opacity-30">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01699V21H14.017ZM16.017 21H21.017C21.5693 21 22.017 20.5523 22.017 20V4C22.017 3.44772 21.5693 3 21.017 3H3.01699C2.46471 3 2.01699 3.44772 2.01699 4V20C2.01699 20.5523 2.46471 21 3.01699 21H8.01699V10H16.017V21Z" /></svg>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-slate-800 italic leading-snug font-medium">
                        "A justiça é a primeira virtude das instituições sociais, como a verdade o é dos sistemas de pensamento."
                    </h2>
                    <p className="mt-6 text-amber-700 font-bold uppercase tracking-widest text-sm">— John Rawls</p>
                </div>
            </section>

            {/* 3. ÁREAS DE ATUAÇÃO */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="text-center mb-16">
                        <h3 className="text-amber-700 font-bold uppercase tracking-widest text-sm mb-3">Expertise Jurídica Completa</h3>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Atuação Consultiva e Contenciosa</h2>
                        <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full" />
                        <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
                            Nossa equipe multidisciplinar oferece soluções jurídicas integradas para os desafios mais complexos do ambiente empresarial.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {practiceAreas.map((area, idx) => (
                            <div key={idx} className="group bg-stone-50 p-10 rounded-lg border border-stone-200 hover:border-amber-700/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-0 bg-amber-700 group-hover:h-full transition-all duration-500" />
                                <div className="w-14 h-14 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-amber-700 group-hover:border-amber-700/20 transition-colors mb-6 shadow-sm">
                                    <area.icon size={26} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors">{area.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                    {area.desc}
                                </p>
                                <ul className="space-y-2 border-t border-slate-200 pt-4">
                                    {area.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-700/50" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/sites-institucionais/premium/advocacia-empresarial/servicos" className="inline-flex items-center gap-2 text-amber-700 font-bold tracking-wide hover:text-amber-800 transition-colors uppercase text-sm border-b-2 border-amber-700/20 hover:border-amber-700 pb-1">
                            Ver Todas as Áreas de Atuação <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. DIFERENCIAIS (WHY US) */}
            <section className="py-24 bg-slate-900 text-stone-200 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                </div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">Diferenciais que geram valor</h3>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Por que Grandes Empresas Escolhem a Imperium?</h2>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
                                Não somos apenas advogados; somos parceiros estratégicos de negócio. Entendemos que cada decisão jurídica impacta diretamente o resultado financeiro e a reputação da sua empresa.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { title: "Tradição e Experiência", desc: "Mais de 30 anos de atuação ininterrupta no mercado corporativo." },
                                    { title: "Equipe Sênior", desc: "Atendimento conduzido diretamente por sócios com mestrado e doutorado." },
                                    { title: "Visão de Negócio", desc: "Soluções jurídicas alinhadas aos objetivos estratégicos da empresa." },
                                    { title: "Ética e Sigilo", desc: "Rigoroso compliance e confidencialidade em todas as etapas." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="text-amber-500" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[600px] bg-slate-800 rounded-lg p-2 border border-slate-700">
                            <div className="absolute top-1/2 -left-8 md:-left-12 -translate-y-1/2 z-20 bg-amber-700 text-white p-6 rounded-lg shadow-xl shadow-black/30 max-w-[200px] hidden md:block">
                                <p className="font-serif text-4xl font-bold mb-1">98%</p>
                                <p className="text-xs uppercase tracking-wider font-medium">Recomendação dos Clientes</p>
                            </div>
                            <div className="h-full w-full relative rounded overflow-hidden filter sepia-[0.2]">
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                                    alt="Reunião de Sócios"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. NÚMEROS E CONQUISTAS */}
            <section className="bg-amber-700 py-16 text-white border-t border-amber-800">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <p className="font-serif text-4xl md:text-5xl font-bold mb-2 group-hover:-translate-y-1 transition-transform duration-300 drop-shadow-md">{stat.value}</p>
                                <p className="text-amber-200 text-xs md:text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. COMO ATUAMOS (TIMELINE) */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="text-center mb-16">
                        <h3 className="text-amber-700 font-bold uppercase tracking-widest text-sm mb-3">Metodologia Imperium</h3>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Do Primeiro Contato à Vitória</h2>
                    </div>

                    <div className="relative">
                        {/* Line */}
                        <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-slate-200 z-0" />

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "01", title: "Consulta Inicial", desc: "Análise preliminar do caso e avaliação de viabilidade jurídica." },
                                { step: "02", title: "Estudo Profundo", desc: "Pesquisa jurisprudencial e definição da melhor estratégia." },
                                { step: "03", title: "Atuação Técnica", desc: "Elaboração de petições robustas e acompanhamento diário." },
                                { step: "04", title: "Resultado", desc: "Execução da sentença e entrega de valor efetivo ao cliente." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm hover:shadow-xl transition-all group lg:mt-0">
                                    <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-full flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-amber-700 group-hover:text-white transition-colors border-4 border-stone-50 lg:mx-auto relative z-10">
                                        {item.step}
                                    </div>
                                    <div className="lg:text-center">
                                        <h4 className="font-serif text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. EQUIPE SÊNIOR (PREVIEW) */}
            <section className="py-24 bg-white border-y border-stone-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <h3 className="text-amber-700 font-bold uppercase tracking-widest text-sm mb-3">Nossos Sócios</h3>
                            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Advogados Especialistas</h2>
                            <p className="text-slate-500">
                                Uma equipe de juristas renomados, autores de obras jurídicas e professores em grandes universidades.
                            </p>
                        </div>
                        <Link href="/sites-institucionais/premium/advocacia-empresarial/sobre" className="hidden md:flex items-center gap-2 text-slate-900 font-bold hover:text-amber-700 transition-colors">
                            Conheça a Equipe Completa <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. Carlos Mendes", role: "Sócio Fundador", oab: "OAB/SP 12.345", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" },
                            { name: "Dra. Ana Paula Silva", role: "Sócia - Direito Tributário", oab: "OAB/SP 54.321", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
                            { name: "Dr. Roberto Campos", role: "Sócio - Contencioso Cível", oab: "OAB/SP 98.765", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" }
                        ].map((partner, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative h-[400px] mb-6 overflow-hidden rounded-lg bg-slate-200">
                                    <Image
                                        src={partner.img}
                                        alt={partner.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.8]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute bottom-4 left-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <Link href="#" className="flex items-center gap-2 text-sm font-bold hover:text-amber-400">Ver Perfil Completo <ChevronRight size={14} /></Link>
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{partner.name}</h3>
                                <p className="text-amber-700 font-bold text-sm uppercase tracking-wide mb-1">{partner.role}</p>
                                <p className="text-slate-500 text-xs font-mono">{partner.oab}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CASES DE SUCESSO (PREVIEW) */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">Resultados que Geram Impacto</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Recuperação Judicial Indústria Têxtil", result: "R$ 45M", badge: "Passivo Reestruturado", desc: "Aprovação do plano de recuperação com deságio de 60% e carência de 24 meses." },
                            { title: "Fusão de Redes de Varejo", result: "R$ 120M", badge: "Valor da Operação", desc: "Assessoria completa no M&A, due diligence e aprovação no CADE sem restrições." },
                            { title: "Anulação de Autuação Fiscal", result: "R$ 18M", badge: "Economia Gerada", desc: "Tese tributária inovadora aceita pelo CARF, cancelando multa indevida." }
                        ].map((caza, idx) => (
                            <div key={idx} className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-amber-600 transition-colors">
                                <span className="inline-block bg-amber-900/40 text-amber-500 text-[10px] font-bold px-2 py-1 rounded mb-4 border border-amber-900/60 uppercase">{caza.badge}</span>
                                <h3 className="font-serif text-2xl font-bold mb-2">{caza.result}</h3>
                                <h4 className="font-bold text-slate-300 text-lg mb-4">{caza.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 border-t border-slate-700 pt-4">
                                    {caza.desc}
                                </p>
                                <Link href="/sites-institucionais/premium/advocacia-empresarial/portfolio" className="text-amber-500 text-sm font-bold flex items-center gap-2 hover:text-white transition-colors">Ler Case Detalhado <ArrowRight size={14} /></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FAQ RÁPIDO */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-4xl">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Dúvidas Frequentes</h2>
                    <div className="space-y-4">
                        {[
                            { q: "O escritório atende em todo o Brasil?", a: "Sim. Embora nossa sede esteja em São Paulo, atuamos em tribunais de todo o país através de processo eletrônico e correspondentes, além de realizarmos consultoria remota para empresas de qualquer estado." },
                            { q: "Quais são as formas de cobrança de honorários?", a: "Trabalhamos com formatos flexíveis: valor fixo para atos específicos, 'retainer' mensal para assessoria continuada, horas técnicas ou honorários de êxito (ad exitum) dependendo da natureza da causa." },
                            { q: "Vocês atendem pessoas físicas?", a: "Nosso foco é primordialmente empresarial e societário. Atendemos pessoas físicas apenas em casos de alta complexidade ligados a questões patrimoniais, sucessórias ou de sócios/executivos." },
                            { q: "Como é garantido o sigilo das informações?", a: "O sigilo é a base da advocacia. Todos os nossos profissionais e colaboradores assinam termos rigorosos de confidencialidade (NDA), e nossos sistemas utilizam criptografia de ponta." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                                >
                                    <span className="font-bold text-slate-800 font-serif text-lg">{item.q}</span>
                                    <ChevronDown className={`text-slate-400 transition-transform duration-300 ${activeFaq === idx ? "rotate-180" : ""}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? "max-h-48 border-t border-slate-100" : "max-h-0"}`}>
                                    <div className="p-6 text-slate-600 leading-relaxed bg-stone-50/50">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. CTA FINAL */}
            <section className="py-24 relative overflow-hidden flex items-center bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
                        alt="Escritório"
                        fill
                        className="object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center max-w-3xl">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Proteja Seu Patrimônio e Sua Empresa</h2>
                    <p className="text-xl text-slate-300 mb-10 font-light">
                        Agende uma consulta para uma análise preliminar do seu caso. Garantimos total confidencialidade e atendimento por um sócio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/sites-institucionais/premium/advocacia-empresarial/contato" className="bg-amber-700 hover:bg-amber-600 text-white px-10 py-4 rounded-md font-bold text-lg shadow-xl shadow-amber-900/20 transition-all flex items-center justify-center gap-3">
                            <MessageSquare size={20} /> Solicitar Análise de Caso
                        </Link>
                        <div className="flex items-center justify-center gap-2 text-slate-400">
                            <Clock size={18} /> Resposta em até 24h
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
