"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Sun, Zap, Home, Building2, Factory, Tractor,
    CheckCircle2, ArrowRight, Settings, Wrench, BarChart3,
    ShieldCheck, HelpCircle, ChevronDown, DollarSign, Battery
} from "lucide-react";

export default function ServicosPage() {
    const [activeTab, setActiveTab] = useState("residential");

    return (
        <div className="bg-slate-50 min-h-screen">

            {/* 1. HERO SOLUÇÕES COMPLETAS */}
            <section className="relative py-24 bg-sky-950 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1548613053-220e753381fa?q=80&w=2670&auto=format&fit=crop"
                        alt="Painéis solares"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-950 via-sky-900/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block">Engenharia de Ponta</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">Soluções Energéticas <br />360 Graus</h1>
                    <p className="text-xl text-sky-200 max-w-2xl leading-relaxed">
                        Do projeto à manutenção, oferecemos o ciclo completo para você gerar sua própria energia com máxima eficiência e segurança.
                    </p>
                </div>
            </section>

            {/* 2. CATEGORIAS DE SISTEMAS PRIMEIRO */}
            <section className="py-12 bg-white sticky top-20 z-30 shadow-md">
                <div className="container mx-auto px-6 md:px-10 lg:px-20 overflow-x-auto">
                    <div className="flex gap-4 md:justify-center min-w-max">
                        {[
                            { id: "residential", label: "Residencial", icon: Home },
                            { id: "commercial", label: "Comercial", icon: Building2 },
                            { id: "industrial", label: "Industrial", icon: Factory },
                            { id: "rural", label: "Rural / Agro", icon: Tractor },
                        ].map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === cat.id
                                        ? "bg-sky-600 text-white shadow-lg scale-105"
                                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                                    }`}
                            >
                                <cat.icon size={20} /> {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CONTEÚDO DINÂMICO DOS SISTEMAS */}
            <div className="py-20">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">

                    {/* RESIDENCIAL */}
                    {activeTab === "residential" && (
                        <div className="animate-fade-in space-y-20">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <Image src="https://images.unsplash.com/photo-1624397640148-9491786aacd6?q=80&w=2671&auto=format&fit=crop" alt="Casa Solar" fill className="object-cover" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Autonomia para o seu Lar</h2>
                                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                        Transforme seu telhado em uma usina de força. Nossos sistemas residenciais são projetados para durar 25 anos e eliminam a preocupação com a conta de luz no final do mês.
                                    </p>

                                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 mb-8">
                                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Settings className="text-sky-600" /> O que está incluso:</h3>
                                        <ul className="grid grid-cols-2 gap-4">
                                            {["Projetos e Homologação", "Painéis Monocristalinos", "Inversor Wi-Fi", "Estrutura de Fixação", "Instalação Completa", "Monitoramento App"].map(item => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                                                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="p-4 bg-sky-50 rounded-xl">
                                            <div className="text-2xl font-bold text-sky-700">R$ 300+</div>
                                            <div className="text-xs text-slate-500 font-bold uppercase">Economia Mensal Mínima</div>
                                        </div>
                                        <div className="p-4 bg-amber-50 rounded-xl">
                                            <div className="text-2xl font-bold text-amber-600">3 Anos</div>
                                            <div className="text-xs text-slate-500 font-bold uppercase">Payback Médio</div>
                                        </div>
                                        <div className="p-4 bg-emerald-50 rounded-xl">
                                            <div className="text-2xl font-bold text-emerald-600">25 Anos</div>
                                            <div className="text-xs text-slate-500 font-bold uppercase">Garantia Performance</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* COMERCIAL */}
                    {activeTab === "commercial" && (
                        <div className="animate-fade-in space-y-20">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Competitividade para seu Negócio</h2>
                                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                        Reduza um dos maiores custos fixos da sua empresa. Energia solar comercial não é apenas economia, é posicionamento de marca e inteligência financeira.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start gap-4">
                                            <DollarSign className="text-emerald-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900">Benefícios Fiscais</h4>
                                                <p className="text-sm text-slate-500">Depreciação acelerada de ativos e linhas de crédito com juros baixos.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <Zap className="text-emerald-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900">Proteção contra Inflação Energética</h4>
                                                <p className="text-sm text-slate-500">Blinde seu fluxo de caixa contra os aumentos anuais da tarifa de energia.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <button className="px-8 py-4 bg-sky-600 text-white font-bold rounded-xl shadow-lg hover:bg-sky-500 transition-colors w-full md:w-auto">
                                        Consultoria Empresarial Gratuita
                                    </button>
                                </div>
                                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl order-first lg:order-last">
                                    <Image src="https://images.unsplash.com/photo-1632064998835-244304859a5d?q=80&w=2670&auto=format&fit=crop" alt="Empresa Solar" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* INDUSTRIAL */}
                    {activeTab === "industrial" && (
                        <div className="animate-fade-in">
                            <div className="bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1/2 h-full relative z-0 hidden lg:block">
                                    <Image src="https://images.unsplash.com/photo-1545208942-e42152648d68?q=80&w=2574&auto=format&fit=crop" alt="Industria Solar" fill className="object-cover opacity-30" />
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900" />
                                </div>

                                <div className="relative z-10 max-w-2xl">
                                    <h2 className="text-4xl font-bold mb-6">Usinas de Alta Performance</h2>
                                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                                        Projetos de engenharia complexa para indústrias que demandam alta carga. Soluções em Média Tensão (Grupo A) com foco em ROI e eficiência operacional.
                                    </p>
                                    <div className="grid grid-cols-2 gap-8 mb-10">
                                        <div>
                                            <div className="text-3xl font-bold text-amber-500">Peak Shaving</div>
                                            <p className="text-sm text-slate-400">Redução de demanda na ponta</p>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-amber-500">Carport Solar</div>
                                            <p className="text-sm text-slate-400">Cobertura de estacionamentos</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-xl hover:bg-amber-400">
                                            Solicitar Análise Técnica
                                        </button>
                                        <button className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 font-bold">
                                            Ver Cases Industriais
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* RURAL */}
                    {activeTab === "rural" && (
                        <div className="animate-fade-in space-y-20">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <Image src="https://images.unsplash.com/photo-1625246333195-584035694dc8?q=80&w=2670&auto=format&fit=crop" alt="Agro Solar" fill className="object-cover" />
                                </div>
                                <div>
                                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">Agro Tech</span>
                                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Energia para o Campo</h2>
                                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                        O agronegócio é o motor do Brasil e precisa de energia confiável. Nossos sistemas garantem a operação de pivôs, ordenhadeiras e silos, mesmo onde a rede não chega.
                                    </p>

                                    <div className="grid gap-6">
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 flex items-start gap-4 hover:border-emerald-400 transition-colors">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                                                <Tractor size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">Irrigação Solar</h4>
                                                <p className="text-sm text-slate-500">Bombeamento de água sem custos com diesel ou energia da concessionária.</p>
                                            </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 flex items-start gap-4 hover:border-emerald-400 transition-colors">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                                                <Battery size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">Sistemas Off-Grid</h4>
                                                <p className="text-sm text-slate-500">Baterias de alta capacidade para autonomia total em áreas remotas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* 7. SERVIÇOS COMPLEMENTARES */}
            <section className="py-24 bg-slate-100">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Além da Instalação</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                <Wrench size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Manutenção Preventiva</h3>
                            <p className="text-slate-500 leading-relaxed text-sm h-24">Inspeção térmica, reaperto de conexões e verificação de inversores para garantir a segurança elétrica do sistema por décadas.</p>
                            <Link href="#" className="flex items-center gap-2 text-sky-600 font-bold text-sm mt-4 hover:gap-3 transition-all">Saiba mais <ArrowRight size={16} /></Link>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                <Sun size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Limpeza Técnica</h3>
                            <p className="text-slate-500 leading-relaxed text-sm h-24">Painéis sujos perdem até 25% de eficiência. Utilizamos água desmineralizada e equipamentos robóticos para limpeza segura.</p>
                            <Link href="#" className="flex items-center gap-2 text-sky-600 font-bold text-sm mt-4 hover:gap-3 transition-all">Saiba mais <ArrowRight size={16} /></Link>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                <BarChart3 size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Monitoramento Ativo</h3>
                            <p className="text-slate-500 leading-relaxed text-sm h-24">CPO (Centro de Operações) acompanhando sua geração em tempo real para detectar falhas antes que você perceba.</p>
                            <Link href="#" className="flex items-center gap-2 text-sky-600 font-bold text-sm mt-4 hover:gap-3 transition-all">Saiba mais <ArrowRight size={16} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. COMPARATIVO DE INVESTIMENTO */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Por que Solar é o Melhor Investimento?</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left md:table-fixed">
                            <thead>
                                <tr className="border-b-2 border-slate-100">
                                    <th className="p-4 text-slate-400 font-medium w-1/4">Tipo de Investimento</th>
                                    <th className="p-4 text-slate-900 font-bold text-lg w-1/4">Poupança</th>
                                    <th className="p-4 text-slate-900 font-bold text-lg w-1/4">CDB / Tesouro</th>
                                    <th className="p-4 text-amber-600 font-bold text-xl w-1/4 bg-amber-50 rounded-t-xl">Energia Solar</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">Rentabilidade Média/Ano</td>
                                    <td className="p-4 text-slate-500">6% a.a.</td>
                                    <td className="p-4 text-slate-500">10% a.a.</td>
                                    <td className="p-4 font-bold text-emerald-600 bg-amber-50">25% a 35% a.a.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">Risco</td>
                                    <td className="p-4 text-slate-500">Baixíssimo</td>
                                    <td className="p-4 text-slate-500">Baixo</td>
                                    <td className="p-4 font-bold text-emerald-600 bg-amber-50">Baixo</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">Proteção Inflacionária</td>
                                    <td className="p-4 text-slate-500 text-red-400">Não</td>
                                    <td className="p-4 text-slate-500">Parcial</td>
                                    <td className="p-4 font-bold text-emerald-600 bg-amber-50">Total (IPCA Energético)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">Benefício Patrimonial</td>
                                    <td className="p-4 text-slate-500">Nenhum</td>
                                    <td className="p-4 text-slate-500">Nenhum</td>
                                    <td className="p-4 font-bold text-emerald-600 bg-amber-50">Valoriza o Imóvel (+10%)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 9. FAQ TÉCNICO */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Dúvidas Técnicas</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Qual a diferença entre inversores String e Microinversores?", a: "Inversores string centralizam a conversão, sendo mais econômicos para telhados sem sombra. Microinversores são instalados painel a painel, otimizando a produção em telhados complexos ou sombreados." },
                            { q: "O sistema precisa de manutenção frequente?", a: "Não. A principal manutenção é a limpeza dos módulos a cada 6 meses, que pode ser feita com água e sabão neutro. A parte elétrica é revisada anualmente." },
                            { q: "Qual a garantia dos equipamentos?", a: "Painéis têm garantia de performance de 25 anos (80% da eficiência). Inversores variam de 5 a 10 anos, extensíveis até 20 anos dependendo da marca." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-sky-600">
                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle size={18} className="text-sky-600" /> {faq.q}</h4>
                                <p className="text-slate-600 text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
