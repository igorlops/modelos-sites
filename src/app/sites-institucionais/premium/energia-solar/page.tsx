"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Sun, Zap, TrendingUp, DollarSign, Calculator, ArrowRight, CheckCircle2,
    Battery, Leaf, ShieldCheck, Play, MousePointerClick, BarChart3,
    Smartphone, Award, Users, Lightbulb, Home, Building2, Factory, Tractor,
    ArrowUpRight, ChevronDown, Search, Filter, Phone, Map
} from "lucide-react";

export default function HomePage() {
    const [activeCalculatorTab, setActiveCalculatorTab] = useState("residencial");
    const [billValue, setBillValue] = useState(500);
    const [activeFaq, setActiveFaq] = useState<number | null>(0);

    // Calculator Logic Simple
    const calculateSavings = (bill: number) => {
        const monthlySavings = bill * 0.95;
        const annualSavings = monthlySavings * 12;
        const co2 = (annualSavings / 200).toFixed(1); // Fake logic for immediate visual
        return { monthly: monthlySavings.toFixed(2), annual: annualSavings.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), co2 };
    };

    const savings = calculateSavings(billValue);

    return (
        <div className="bg-slate-50 overflow-hidden">

            {/* 1. HERO IMPACTO SOLAR */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Background Video/Image Placeholder */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop"
                        alt="Painéis solares ao amanhecer"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-950/80 via-sky-900/40 to-amber-500/10" />
                </div>

                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 text-white">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8 animate-fade-in-up">
                            <Sun size={18} className="text-amber-400 animate-spin-slow" />
                            <span className="text-sm font-bold tracking-wider uppercase text-amber-300">Energia Limpa & Renovável</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-tight animate-fade-in-up delay-100">
                            Transforme Luz Solar em <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">Economia Real</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl leading-relaxed font-light animate-fade-in-up delay-200">
                            Reduza sua conta de luz em até <strong className="text-emerald-400">95%</strong> com tecnologia de ponta. ROI garantido e retorno do investimento em média de 3 anos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-300">
                            <button className="group relative px-8 py-5 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-amber-500 text-white font-bold text-lg shadow-[0_20px_50px_rgba(14,165,233,0.3)] hover:shadow-[0_20px_60px_rgba(14,165,233,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-3">
                                    Simular Economia <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </button>

                            <button className="px-8 py-5 rounded-2xl bg-white/5 backdrop-blur border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3 group">
                                <Play size={20} className="fill-current" /> Ver Cases de Sucesso
                            </button>
                        </div>

                        <div className="mt-16 flex items-center gap-8 animate-fade-in-up delay-500 opacity-80 hover:opacity-100 transition-opacity">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-sky-900 bg-slate-200 relative overflow-hidden">
                                        <Image src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="Cliente" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex gap-1 text-amber-400 mb-1">
                                    <Sun className="fill-current w-5 h-5" />
                                    <Sun className="fill-current w-5 h-5" />
                                    <Sun className="fill-current w-5 h-5" />
                                    <Sun className="fill-current w-5 h-5" />
                                    <Sun className="fill-current w-5 h-5" />
                                </div>
                                <p className="text-sm font-medium text-slate-300"><strong className="text-white">12.000+</strong> famílias economizando</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute right-10 bottom-32 hidden xl:flex flex-col gap-4 animate-float">
                    <div className="bg-sky-950/80 backdrop-blur p-4 rounded-xl border border-sky-500/30 flex items-center gap-3">
                        <CheckCircle2 className="text-emerald-400" />
                        <span className="text-sm font-bold text-white">Homologado ANEEL</span>
                    </div>
                    <div className="bg-sky-950/80 backdrop-blur p-4 rounded-xl border border-sky-500/30 flex items-center gap-3">
                        <ShieldCheck className="text-emerald-400" />
                        <span className="text-sm font-bold text-white">25 Anos de Garantia</span>
                    </div>
                </div>
            </section>

            {/* 2. CALCULADORA INTERATIVA DESTAQUE */}
            <section className="py-20 -mt-20 relative z-20">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-sky-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />

                        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                            <div>
                                <span className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-2 block">Simulador Inteligente 2.0</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Descubra quanto você vai <span className="text-amber-500">deixar de gastar</span></h2>
                                <p className="text-slate-600 mb-8 text-lg">
                                    Insira o valor médio da sua conta de luz atual e veja a mágica acontecer. Nossos sistemas se pagam sozinhos com a economia gerada.
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Valor da Conta de Luz (Mensal)</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">R$</span>
                                            <input
                                                type="range"
                                                min="200"
                                                max="5000"
                                                step="50"
                                                value={billValue}
                                                onChange={(e) => setBillValue(Number(e.target.value))}
                                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600 mb-4"
                                            />
                                            <input
                                                type="number"
                                                value={billValue}
                                                onChange={(e) => setBillValue(Number(e.target.value))}
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-sky-950 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div>
                                    <h3 className="text-xl font-medium text-sky-200 mb-8">Sua Economia Projetada</h3>
                                    <div className="grid gap-6">
                                        <div>
                                            <p className="text-sm text-sky-300 uppercase tracking-wider mb-1">Economia Anual Estimada</p>
                                            <p className="text-5xl font-bold text-emerald-400">{savings.annual}</p>
                                        </div>
                                        <div className="flex gap-8">
                                            <div>
                                                <p className="text-xs text-sky-300 uppercase mb-1">Payback Estimado</p>
                                                <p className="text-2xl font-bold text-white">3.5 Anos</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-sky-300 uppercase mb-1">CO₂ Evitado/Ano</p>
                                                <p className="text-2xl font-bold text-white">{savings.co2} Ton</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="mt-8 w-full py-4 bg-amber-500 hover:bg-amber-400 text-sky-950 font-bold rounded-xl text-lg shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                                    Receber Proposta Detalhada <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. NÚMEROS IMPRESSIONANTES */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "450+", label: "MW Instalados", icon: Zap },
                            { number: "12k+", label: "Clientes Felizes", icon: Users },
                            { number: "R$ 80Mi", label: "Economizados", icon: DollarSign },
                            { number: "150k", label: "Ton CO₂ Evitadas", icon: Leaf }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="inline-flex p-4 bg-sky-100 rounded-2xl text-sky-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                    <stat.icon size={32} />
                                </div>
                                <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2">{stat.number}</h3>
                                <p className="text-slate-500 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. COMO FUNCIONA - VISUAL */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block">Tecnologia Simplificada</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Como a mágica acontece?</h2>
                        <p className="text-xl text-slate-600">Um sistema autônomo, silencioso e durável. Entenda o caminho da energia do sol até a sua tomada.</p>
                    </div>

                    <div className="relative">
                        {/* Desktop Workflow Visual */}
                        <div className="hidden lg:grid grid-cols-5 items-center gap-4 relative z-10">
                            {[
                                { title: "Captação", desc: "Painéis convertem sol em energia DC", icon: Sun, color: "amber" },
                                { title: "Conversão", desc: "Inversor transforma em energia AC", icon: Zap, color: "sky" },
                                { title: "Distribuição", desc: "Quadro alimenta sua casa/empresa", icon: Home, color: "emerald" },
                                { title: "Consumo", desc: "Você usa seus equipamentos normalmente", icon: Lightbulb, color: "amber" },
                                { title: "Compensação", desc: "Excedente vira crédito na rede", icon: ArrowUpRight, color: "sky" },
                            ].map((step, idx) => (
                                <div key={idx} className="relative group text-center">
                                    <div className={`w-24 h-24 mx-auto bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-${step.color}-100 z-10 relative group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon size={32} className={`text-${step.color}-500`} />
                                    </div>
                                    <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg border border-slate-100 h-40">
                                        <h4 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                                    </div>

                                    {/* Connector Line */}
                                    {idx < 4 && (
                                        <div className="absolute top-12 left-1/2 w-full h-1 bg-slate-200 -z-10">
                                            <div className="h-full bg-amber-400 w-0 group-hover:w-full transition-all duration-1000 origin-left" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile steps */}
                        <div className="lg:hidden space-y-8">
                            {[
                                { title: "Captação", desc: "Painéis convertem sol em energia contínua", icon: Sun },
                                { title: "Conversão", desc: "Inversor transforma em energia alternada", icon: Zap },
                                { title: "Consumo", desc: "Energia pronta para usar em casa", icon: Home },
                                { title: "Créditos", desc: "Sobra vira desconto na conta", icon: DollarSign },
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md">
                                    <div className="shrink-0 w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center text-sky-600">
                                        <step.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">{step.title}</h4>
                                        <p className="text-slate-500 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TIPOS DE SISTEMAS */}
            <section className="py-24 bg-sky-950 text-white relative overflow-hidden">
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Soluções para Todos os Tamanhos</h2>
                        <p className="text-xl text-sky-200 max-w-2xl mx-auto">Não importa se é para sua casa ou indústria, temos o projeto ideal com o melhor custo-benefício do mercado.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Residencial", icon: Home, desc: "Elimine a conta de luz da sua casa e valorize seu imóvel em até 10%.", benefits: ["Instalação em 2 dias", "Monitoramento via App", "Payback acelerado"] },
                            { title: "Comercial", icon: Building2, desc: "Reduza o custo fixo do seu negócio e aumente sua margem de lucro.", benefits: ["Marketing Verde", "Dedução Fiscal", "Proteção inflacionária"] },
                            { title: "Rural / Agro", icon: Tractor, desc: "Autonomia energética para o campo. Bombeamento e irrigação solar.", benefits: ["Linhas de crédito Agro", "Energia onde a rede não chega", "Robustez garantida"] },
                        ].map((type, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 group">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-amber-500/30">
                                    <type.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                                <p className="text-sky-100 mb-8 leading-relaxed h-20">{type.desc}</p>
                                <ul className="space-y-3 mb-8">
                                    {type.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-sky-200">
                                            <CheckCircle2 size={16} className="text-emerald-400 shrink-0" /> {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/sites-institucionais/premium/energia-solar/servicos" className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors">
                                    Saiba mais <ArrowRight size={18} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. ANTES VS DEPOIS VISUAL */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 lg:p-20 flex flex-col justify-center">
                                <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Realidade Financeira</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sua conta de luz pode cair de <span className="text-red-400 decoration-red-400 line-through">R$ 800</span> para <span className="text-emerald-400">R$ 80</span></h2>
                                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                    A taxa mínima da concessionária é inevitável, mas todo o resto do seu consumo pode ser abatido pelos créditos gerados pelo sol. É liberdade financeira imediata.
                                </p>
                                <div className="flex gap-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white mb-1">95%</div>
                                        <div className="text-xs uppercase text-slate-500 tracking-wider">Redução Máxima</div>
                                    </div>
                                    <div className="w-px bg-slate-700 h-14 mx-4"></div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white mb-1">25 Anos</div>
                                        <div className="text-xs uppercase text-slate-500 tracking-wider">Vida Útil</div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[400px] lg:h-auto bg-slate-800">
                                <Image
                                    src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2670&auto=format&fit=crop"
                                    alt="Comparativo Conta"
                                    fill
                                    className="object-cover opacity-80"
                                />
                                {/* Visual Invoice Overlay */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full -rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <div className="flex justify-between border-b pb-4 mb-4">
                                        <span className="font-bold text-slate-900">Total a Pagar</span>
                                        <span className="font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">R$ 85,90</span>
                                    </div>
                                    <div className="space-y-2 text-xs text-slate-500">
                                        <div className="flex justify-between"><span>Consumo</span> <span>R$ 0,00</span></div>
                                        <div className="flex justify-between"><span>Energia Injetada</span> <span className="text-emerald-500">- R$ 750,00</span></div>
                                        <div className="flex justify-between"><span>Ilum. Pública</span> <span>R$ 35,00</span></div>
                                        <div className="flex justify-between"><span>Taxa Mínima</span> <span>R$ 50,90</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. PROCESSO SIMPLIFICADO */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Do Orçamento à Economia em 45 Dias</h2>
                    </div>

                    <div className="relative">
                        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-200" />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "01", title: "Análise Gratuita", desc: "Avaliamos sua conta e telhado sem custo." },
                                { step: "02", title: "Projeto Técnico", desc: "Engenharia dimensiona o sistema ideal." },
                                { step: "03", title: "Instalação", desc: "Equipe certificada instala em 2-3 dias." },
                                { step: "04", title: "Homologação", desc: "Cuidamos de toda burocracia com a rede." },
                            ].map((stage, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-sky-500/30">
                                        {stage.step}
                                    </div>
                                    <h3 className="font-bold text-xl text-slate-900 mb-3">{stage.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-sm">{stage.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. PORTFÓLIO GRID */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-2 block">Nosso Portfólio</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Obras Recentes</h2>
                        </div>
                        <Link href="/sites-institucionais/premium/energia-solar/portfolio" className="text-sky-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                            Ver todos os projetos <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                                <Image
                                    src={`https://images.unsplash.com/photo-1592833159057-65a2845730ce?q=80&w=2670&auto=format&fit=crop`} // random placeholder
                                    alt="Projeto Solar"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="bg-amber-500 text-sky-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 inline-block">Residencial</span>
                                    <h3 className="text-2xl font-bold text-white mb-1">Residência Alphaville</h3>
                                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Economia estimada: R$ 1.200/mês</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FINANCIAMENTO & PAGAMENTO */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Energia Solar cabe no seu bolso</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Troque o valor que você já paga na conta de luz pela parcela do seu sistema. Em poucos anos, você não paga mais nada.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                                        <DollarSign size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Financiamento em até 120x</h4>
                                        <p className="text-slate-500">Parceria com bancos Santander, BV e Solfácil. Carência de até 120 dias.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-1">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Desconto à vista</h4>
                                        <p className="text-slate-500">Condições especiais para pagamento via PIX ou transferência.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 relative">
                            <div className="absolute top-0 right-0 p-8 scale-110 opacity-10">
                                <DollarSign size={100} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Simulação de Troca Inteligente</h3>
                            <div className="flex items-end justify-between mb-2">
                                <div className="w-1/2 bg-red-100 h-32 rounded-t-xl relative group flex items-end justify-center pb-4">
                                    <span className="font-bold text-red-600">R$ 500</span>
                                    <div className="absolute bottom-full mb-2 text-xs font-bold text-red-400 uppercase">Conta Luz</div>
                                </div>
                                <div className="w-1/2 bg-emerald-100 h-32 rounded-t-xl mx-2 relative group flex items-end justify-center pb-4 border-2 border-emerald-500">
                                    <span className="font-bold text-emerald-700">R$ 480</span>
                                    <div className="absolute bottom-full mb-2 text-xs font-bold text-emerald-600 uppercase">Parcela Solar</div>
                                </div>
                            </div>
                            <p className="text-center text-sm text-slate-500 mt-4">
                                Pague a parcela com a economia gerada. Após quitar, é <strong>lucro puro por +20 anos</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. GARANTIAS & CERTIFICAÇÕES */}
            <section className="py-16 bg-gradient-to-r from-sky-900 to-sky-800 text-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Fake Logos for certifications */}
                        <div className="flex items-center gap-3 font-bold text-xl"><ShieldCheck size={40} className="text-amber-400" /> ANEEL</div>
                        <div className="flex items-center gap-3 font-bold text-xl"><CheckCircle2 size={40} className="text-amber-400" /> INMETRO</div>
                        <div className="flex items-center gap-3 font-bold text-xl"><Award size={40} className="text-amber-400" /> ISO 9001</div>
                        <div className="flex items-center gap-3 font-bold text-xl"><Leaf size={40} className="text-amber-400" /> ABGD</div>
                    </div>
                </div>
            </section>

            {/* 11. DEPOIMENTOS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Quem investiu comprova</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Carlos Eduardo", role: "Proprietário Residencial", text: "Melhor investimento que fiz na casa. A instalação foi super rápida e limpa. Minha conta veio R$ 60,00 no primeiro mês.", city: "São Paulo, SP" },
                            { name: "Mariana Silva", role: "Diretora Comercial", text: "Colocamos na nossa fábrica e o retorno superou as expectativas. O suporte da SolarPro é diferenciado.", city: "Campinas, SP" },
                            { name: "Dr. Roberto", role: "Clínica Médica", text: "Sustentabilidade é valor para meus pacientes. Além da economia, trouxe uma imagem moderna para a clínica.", city: "Jundiaí, SP" },
                        ].map((dep, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
                                <div className="text-amber-500 flex gap-1 mb-4">
                                    <Sun size={16} fill="currentColor" />
                                    <Sun size={16} fill="currentColor" />
                                    <Sun size={16} fill="currentColor" />
                                    <Sun size={16} fill="currentColor" />
                                    <Sun size={16} fill="currentColor" />
                                </div>
                                <p className="text-slate-600 mb-6 italic">"{dep.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-sky-200 rounded-full flex items-center justify-center font-bold text-sky-700">
                                        {dep.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">{dep.name}</h4>
                                        <p className="text-xs text-slate-500">{dep.city}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 12. FAQ COMPLETO */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Dúvidas Frequentes</h2>

                    <div className="space-y-4">
                        {[
                            "A energia solar funciona em dias nublados?",
                            "Quanto tempo duram os painéis?",
                            "Preciso de baterias?",
                            "O que acontece se acabar a luz da rua?"
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:text-sky-600 transition-colors"
                                >
                                    {faq}
                                    <ChevronDown className={`transition-transform duration-300 ${activeFaq === idx ? "rotate-180" : ""}`} />
                                </button>
                                <div className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ${activeFaq === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                                    Sim, o sistema fotovoltaico funciona com a radiação solar, não apenas com o sol direto. Porém, em dias nublados a produção é menor do que em dias de céu limpo. O sistema é dimensionado considerando a média anual de irradiação da sua região.
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 13. CTA FINAL URGÊNCIA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-emerald-600" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />

                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Pare de pagar caro na conta de luz</h2>
                    <p className="text-xl md:text-2xl text-sky-100 mb-12 max-w-3xl mx-auto">
                        Junte-se a mais de 12.000 famílias que já conquistaram a independência energética. Solicite seu estudo gratuito hoje.
                    </p>

                    <form className="max-w-xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="flex-1 px-6 py-4 rounded-xl text-slate-800 bg-slate-50 border-none outline-none focus:ring-2 focus:ring-sky-500"
                        />
                        <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-sky-950 font-bold rounded-xl transition-colors whitespace-nowrap shadow-lg">
                            Quero Economizar
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-sky-200 opacity-80">
                        < ShieldCheck size={14} className="inline mr-1" /> Seus dados estão 100% seguros.
                    </p>
                </div>
            </section>

        </div>
    );
}
