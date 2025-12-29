"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ClipboardCheck, Microscope, PenTool, Sparkles, HeartHandshake,
    CalendarCheck, MessageSquare, ArrowRight, User
} from "lucide-react";

export default function ProcessoPage() {
    const steps = [
        {
            id: 1,
            icon: MessageSquare,
            title: "Primeiro Contato",
            desc: "Seu primeiro passo é simples e acolhedor. Nossa equipe de concierges está pronta para ouvir suas queixas e agendar sua visita no melhor horário.",
            detail: "Agendamento via WhatsApp ou Telefone"
        },
        {
            id: 2,
            icon: ClipboardCheck,
            title: "Avaliação 360º",
            desc: "Uma consulta aprofundada de 1 hora onde analisamos sua anatomia, histórico de saúde e expectativas. Utilizamos fotografia 3D para diagnóstico preciso.",
            detail: "Anamnese Médica Detalhada"
        },
        {
            id: 3,
            icon: PenTool,
            title: "Plano Personalizado",
            desc: "Não vendemos procedimentos avulsos, criamos um cronograma de tratamento único para você, combinando tecnologias para potencializar resultados.",
            detail: "Orçamento Transparente"
        },
        {
            id: 4,
            icon: CalendarCheck,
            title: "Preparação",
            desc: "Você recebe todas as orientações pré-procedimento. No dia, preparamos sua pele e garantimos seu conforto com anestésicos potentes.",
            detail: "Ambiente Relaxante"
        },
        {
            id: 5,
            icon: Sparkles,
            title: "O Procedimento",
            desc: "Realizado com técnica asséptica rigorosa e mãos experientes. Durante todo o tempo, monitoramos seu bem-estar e garantimos a precisão artística.",
            detail: "Segurança Total"
        },
        {
            id: 6,
            icon: HeartHandshake,
            title: "Acompanhamento",
            desc: "O cuidado não acaba quando você sai da sala. Temos um canal exclusivo de pós-venda para tirar dúvidas e agendar retornos de avaliação.",
            detail: "Suporte Vitalício"
        }
    ];

    return (
        <div className="bg-neutral-50 overflow-hidden">

            {/* 1. HERO PROCESSO */}
            <section className="relative py-24 bg-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
                        alt="Cuidados Médicos"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-950 via-rose-900/50 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center max-w-4xl">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in">Metodologia Exclusiva</span>
                    <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8 animate-fade-in-up">
                        Cuidado Personalizado <br /><span className="text-rose-400">Do Início ao Fim</span>
                    </h1>
                    <p className="text-xl text-neutral-300 font-light leading-relaxed animate-fade-in-up delay-100">
                        Entenda como transformamos sua experiência estética em uma jornada segura, transparente e focada em resultados reais.
                    </p>
                </div>
            </section>

            {/* 2. FILOSOFIA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="font-serif text-5xl text-neutral-900 mb-8 leading-tight">
                                Não Tratamos Rostos, <span className="text-rose-600">Cuidamos de Pessoas</span>
                            </h2>
                            <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
                                <p>
                                    Em um mercado saturado de "procedimentos express" e padronizados, nós escolhemos o caminho oposto. Acreditamos que cada face é uma obra de arte única que merece ser estudada antes de qualquer intervenção.
                                </p>
                                <p>
                                    Nossa filosofia se baseia na honestidade: se um procedimento não for o ideal para você, nós não o faremos. Prezamos pela naturalidade e pelo gerenciamento do envelhecimento a longo prazo.
                                </p>
                                <div className="p-6 bg-rose-50 border-l-4 border-rose-500 rounded-r-xl mt-8">
                                    <p className="text-rose-900 italic font-serif text-xl">
                                        "A melhor intervenção estética é aquela que todos notam que você está melhor, mas ninguém sabe dizer exatamente o que você fez."
                                    </p>
                                    <p className="text-rose-600 font-bold mt-2 text-sm uppercase tracking-wide">— Dra. Sofia Martini</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] group">
                                <Image
                                    src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=2672&auto=format&fit=crop"
                                    alt="Consulta"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent" />
                                <div className="absolute bottom-10 left-10 text-white">
                                    <p className="font-serif text-3xl mb-2">Avaliação Premium</p>
                                    <p className="opacity-80">Onde tudo começa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FLUXO DETALHADO (VERTICAL TIMELINE) */}
            <section className="py-24 bg-rose-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <h2 className="font-serif text-4xl text-center text-neutral-900 mb-20">Sua Jornada em 6 Passos</h2>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Central Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-rose-200 -translate-x-1/2" />

                        {steps.map((step, idx) => (
                            <div key={step.id} className={`flex flex-col md:flex-row items-start mb-16 relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 bg-rose-600 rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10 flex items-center justify-center text-white font-bold text-sm">
                                    {step.id}
                                </div>

                                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-12 md:text-right group">
                                    {idx % 2 === 0 ? (
                                        <div className="md:pr-16 text-left md:text-right">
                                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-transparent group-hover:border-rose-200 group-hover:shadow-xl transition-all duration-300 relative">
                                                {/* Arrow */}
                                                <div className="absolute top-8 -right-3 w-6 h-6 bg-white rotate-45 hidden md:block" />

                                                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mb-4 ml-auto md:ml-auto shadow-inner">
                                                    <step.icon size={28} />
                                                </div>
                                                <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                                                <p className="text-neutral-500 mb-4 leading-relaxed">{step.desc}</p>
                                                <span className="inline-block px-4 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                                    {step.detail}
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        // Content for Odd items (Left Side on Desktop) - Actually this logic is reversed in the map due to flex-row-reverse
                                        // Let's simplify: 
                                        // If even index (0, 2, 4) -> flex-row-reverse -> Content is on Left
                                        // If odd index (1, 3, 5) -> normal -> Content is on Right (wait..)

                                        // Using simpler classes
                                        <div className="hidden" />
                                    )}
                                </div>

                                {/* Content for the other side to balance flex layout */}
                                <div className={`w-full md:w-1/2 pl-16 md:pl-12 ${idx % 2 === 0 ? 'hidden md:block' : ''}`}>
                                    {idx % 2 !== 0 && (
                                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-transparent group-hover:border-rose-200 group-hover:shadow-xl transition-all duration-300 relative">
                                            {/* Arrow */}
                                            <div className="absolute top-8 -left-3 w-6 h-6 bg-white rotate-45 hidden md:block" />

                                            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mb-4 shadow-inner">
                                                <step.icon size={28} />
                                            </div>
                                            <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                                            <p className="text-neutral-500 mb-4 leading-relaxed">{step.desc}</p>
                                            <span className="inline-block px-4 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                                {step.detail}
                                            </span>
                                        </div>
                                    )}
                                    {idx % 2 === 0 && (
                                        // This is actually content for the left side when reversed? No.
                                        // Let's just fix the visual structure manually
                                        <div className="md:pl-16 text-left">
                                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-transparent group-hover:border-rose-200 group-hover:shadow-xl transition-all duration-300 relative">
                                                {/* Arrow */}
                                                <div className="absolute top-8 -left-3 w-6 h-6 bg-white rotate-45 hidden md:block" />

                                                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mb-4 shadow-inner">
                                                    <step.icon size={28} />
                                                </div>
                                                <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                                                <p className="text-neutral-500 mb-4 leading-relaxed">{step.desc}</p>
                                                <span className="inline-block px-4 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                                    {step.detail}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <Link href="/sites-institucionais/premium/clinica-estetica-avancada/contato" className="px-12 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:bg-rose-600 transition-colors shadow-xl">
                            Iniciar Minha Jornada Agora
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
