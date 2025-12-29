"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FileSearch, PenTool, Wrench, CheckCircle2,
    Smartphone, ShieldCheck, ClipboardCheck, HardHat,
    Truck, Zap, ArrowDown, ChevronRight
} from "lucide-react";

export default function ProcessoPage() {
    const steps = [
        {
            num: "01",
            title: "Consultoria & Viabilidade",
            icon: FileSearch,
            desc: "Entendemos seu consumo e projetamos a economia.",
            details: [
                "Análise da conta de energia (12 meses)",
                "Estudo de irradiação solar do local",
                "Vistoria técnica preliminar (Drone)",
                "Apresentação do Payback e ROI"
            ]
        },
        {
            num: "02",
            title: "Engenharia & Aprovação",
            icon: PenTool,
            desc: "Projeto técnico detalhado e trâmites legais.",
            details: [
                "Dimensionamento final do sistema",
                "Emissão de ART (Engenharia)",
                "Protocolo na Concessionária",
                "Planejamento logístico da obra"
            ]
        },
        {
            num: "03",
            title: "Logística & Instalação",
            icon: Wrench,
            desc: "Execução rápida, limpa e segura.",
            details: [
                "Transporte segurado dos equipamentos",
                "Instalação de estrutura e módulos",
                "Passagem de cabos e proteção (String Box)",
                "Comissionamento e testes de segurança"
            ]
        },
        {
            num: "04",
            title: "Homologação & Ativação",
            icon: CheckCircle2,
            desc: "Troca do medidor e início da economia.",
            details: [
                "Vistoria final da concessionária",
                "Troca do medidor (Bidirecional)",
                "Ativação do sistema no app",
                "Entrega técnica e treinamento"
            ]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">

            {/* 1. HERO METODOLOGIA */}
            <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop"
                        alt="Engenharia Solar"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in">Excelência Operacional</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 animate-fade-in-up">Metodologia <br /><span className="text-sky-400">SolarPro 360º</span></h1>
                    <p className="text-xl text-slate-300 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
                        Não improvisamos. Seguimos um roteiro rigoroso de 4 etapas para garantir que seu sistema funcione perfeitamente pelos próximos 25 anos.
                    </p>
                </div>
            </section>

            {/* 2. VISÃO GERAL (STEPPER) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">

                    <div className="hidden lg:flex justify-between items-center mb-24 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2" />

                        {steps.map((step, idx) => (
                            <div key={idx} className="bg-white p-4">
                                <div className="w-20 h-20 rounded-full bg-sky-50 border-4 border-sky-100 flex items-center justify-center text-sky-600 font-bold text-2xl mb-4 mx-auto hover:scale-110 transition-transform hover:bg-sky-600 hover:text-white shadow-lg">
                                    {step.num}
                                </div>
                                <p className="text-center font-bold text-slate-800 w-32 mx-auto text-sm">{step.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-32">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                                <div className="flex-1 space-y-8">
                                    <div className="flex items-center gap-4">
                                        <span className="text-6xl font-black text-slate-100">{step.num}</span>
                                        <h2 className="text-3xl font-bold text-slate-900">{step.title}</h2>
                                    </div>
                                    <p className="text-xl text-sky-700 font-medium">{step.desc}</p>

                                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                                        <ul className="space-y-4">
                                            {step.details.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-slate-600">
                                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                                        <CheckCircle2 size={14} className="text-emerald-600" />
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex-1 relative">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-sky-100 to-amber-100 rounded-3xl blur-2xl opacity-50" />
                                    <div className="relative bg-white p-2 rounded-3xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                                            {/* Placeholder images based on step */}
                                            <Image
                                                src={`https://images.unsplash.com/photo-${idx === 0 ? '1454165804606-c3d57bc86b40' : // Consultoria
                                                        idx === 1 ? '1581093458791-9f3c3900df4b' : // Engenharia
                                                            idx === 2 ? '1632064998835-244304859a5d' : // Instalação
                                                                '1518458028785-8fbcd101ebb9'             // Homologação
                                                    }?q=80&w=2670&auto=format&fit=crop`}
                                                alt={step.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. MONITORAMENTO */}
            <section className="py-24 bg-sky-950 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-20 opacity-10 rotate-12">
                    <Smartphone size={400} />
                </div>

                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Controle Total na Palma da Mão</h2>
                            <p className="text-lg text-sky-200 mb-8 leading-relaxed">
                                Após a ativação, você recebe acesso ao nosso aplicativo exclusivo para monitorar sua produção em tempo real, economia acumulada e impacto ambiental.
                            </p>

                            <div className="grid gap-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-sky-800 rounded-xl flex items-center justify-center shrink-0">
                                        <Zap size={24} className="text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Dados em Tempo Real</h4>
                                        <p className="text-sm text-sky-300">Acompanhe quanto seu sistema está gerando agora.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-sky-800 rounded-xl flex items-center justify-center shrink-0">
                                        <ShieldCheck size={24} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Alertas Inteligentes</h4>
                                        <p className="text-sm text-sky-300">Notificações automáticas se a performance cair.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 border-4 border-slate-800 rounded-[3rem] p-4 max-w-sm mx-auto shadow-2xl relative">
                            <div className="bg-sky-950 rounded-[2.5rem] overflow-hidden h-full relative aspect-[9/19]">
                                {/* Fake App UI */}
                                <div className="p-6 text-white text-center pt-12">
                                    <p className="text-xs text-sky-300 mb-1">Geração Hoje</p>
                                    <h3 className="text-4xl font-bold mb-8">45.2 kWh</h3>

                                    <div className="w-48 h-48 mx-auto rounded-full border-8 border-amber-500 flex items-center justify-center relative mb-8">
                                        <Zap size={40} className="text-amber-500 animate-pulse" />
                                        <div className="absolute inset-0 border-8 border-sky-800 rounded-full border-t-transparent animate-spin-slow" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-left">
                                        <div className="bg-sky-900/50 p-4 rounded-xl">
                                            <p className="text-[10px] uppercase text-sky-400">Economia</p>
                                            <p className="font-bold">R$ 42,50</p>
                                        </div>
                                        <div className="bg-sky-900/50 p-4 rounded-xl">
                                            <p className="text-[10px] uppercase text-sky-400">Ambiente</p>
                                            <p className="font-bold text-emerald-400">-4kg CO₂</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. GARANTIAS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Segurança para uma Vida Toda</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-amber-400 transition-colors">
                            <ShieldCheck size={48} className="text-sky-600 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">25 Anos de Performance</h3>
                            <p className="text-slate-500 text-sm">Garantia que seus módulos produzirão pelo menos 80% da potência original após 25 anos.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-amber-400 transition-colors">
                            <Wrench size={48} className="text-sky-600 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">12 Anos de Equipamento</h3>
                            <p className="text-slate-500 text-sm">Garantia contra defeitos de fabricação dos painéis e inversores.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-amber-400 transition-colors">
                            <HardHat size={48} className="text-sky-600 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Seguro Instalação</h3>
                            <p className="text-slate-500 text-sm">Seguro de responsabilidade civil e riscos de engenharia durante toda a obra.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA PÁGINA */}
            <section className="bg-amber-500 py-16">
                <div className="container mx-auto px-6 md:px-10 lg:px-20 text-center">
                    <h2 className="text-3xl font-bold text-sky-950 mb-6">Pronto para dar o primeiro passo?</h2>
                    <Link href="/sites-institucionais/premium/energia-solar/contato" className="inline-flex items-center gap-2 bg-sky-950 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-900 transition-colors shadow-lg">
                        Solicitar Análise Gratuita <ChevronRight />
                    </Link>
                </div>
            </section>

        </div>
    );
}
