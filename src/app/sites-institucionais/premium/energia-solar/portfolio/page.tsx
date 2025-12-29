"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    MapPin, Zap, TrendingUp, Calendar, ArrowUpRight,
    Filter, Play, CheckCircle2, Factory, Home, Building2, Tractor
} from "lucide-react";

export default function PortfolioPage() {
    const [filter, setFilter] = useState("all");

    const projects = [
        {
            id: 1,
            title: "Residencial Jardins",
            location: "São Paulo, SP",
            type: "residential",
            power: "12.4 kWp",
            savings: "R$ 1.250/mês",
            roi: "3.2 Anos",
            image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2670&auto=format&fit=crop",
            desc: "Instalação premium em telhado cerâmico com microinversores para contornar sombreamento parcial."
        },
        {
            id: 2,
            title: "Indústria Metalúrgica",
            location: "Guarulhos, SP",
            type: "industrial",
            power: "450 kWp",
            savings: "R$ 42.000/mês",
            roi: "2.8 Anos",
            image: "https://images.unsplash.com/photo-1545208942-e42152648d68?q=80&w=2574&auto=format&fit=crop",
            desc: "Usina de solo com trackers para maximização de geração. Redução de 85% no custo energético da fábrica."
        },
        {
            id: 3,
            title: "Shopping Center Open",
            location: "Campinas, SP",
            type: "commercial",
            power: "200 kWp",
            savings: "R$ 18.500/mês",
            roi: "3.5 Anos",
            image: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?q=80&w=2574&auto=format&fit=crop",
            desc: "Carport solar cobrindo 150 vagas de estacionamento. Energia limpa e sombra para os clientes."
        },
        {
            id: 4,
            title: "Fazenda Santa Rita",
            location: "Ribeirão Preto, SP",
            type: "rural",
            power: "75 kWp",
            savings: "R$ 6.800/mês",
            roi: "3.0 Anos",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop",
            desc: "Sistema off-grid para alimentação de bombas de irrigação e pivô central. Autonomia total da rede."
        },
        {
            id: 5,
            title: "Condomínio Solar",
            location: "Sorocaba, SP",
            type: "residential",
            power: "50 kWp",
            savings: "R$ 4.500/mês",
            roi: "3.4 Anos",
            image: "https://images.unsplash.com/photo-1592833159057-65a2845730ce?q=80&w=2670&auto=format&fit=crop",
            desc: "Geração compartilhada para áreas comuns do condomínio. Piscina aquecida e iluminação externa com custo zero."
        },
        {
            id: 6,
            title: "Supermercado Extra",
            location: "Osasco, SP",
            type: "commercial",
            power: "120 kWp",
            savings: "R$ 11.000/mês",
            roi: "3.1 Anos",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop",
            desc: "Retrofit em telhado metálico. Instalação realizada em período noturno para não impactar a operação."
        }
    ];

    const filteredProjects = filter === "all" ? projects : projects.filter(p => p.type === filter);

    return (
        <div className="bg-slate-50 min-h-screen">

            {/* 1. HERO PROJETOS REALIZADOS */}
            <section className="relative py-24 bg-sky-950 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-sky-900 to-slate-900" />
                </div>
                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 text-center">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in">Obras que Falam por Si</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 animate-fade-in-up">Galeria de <span className="text-amber-500">Sucesso</span></h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
                        {[
                            { label: "Projetos Residenciais", val: "8.500+" },
                            { label: "Usinas Comerciais", val: "3.200+" },
                            { label: "Obras Industriais", val: "450+" },
                            { label: "Sistemas Rurais", val: "1.100+" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur hover:bg-white/10 transition-colors">
                                <div className="text-3xl font-bold text-white mb-2">{stat.val}</div>
                                <div className="text-xs text-sky-200 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. MAPA INTERATIVO (Visual Placeholder) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Presença Nacional</h2>
                            <p className="text-slate-500 max-w-xl">
                                Nossas equipes de instalação e manutenção cobrem 8 estados brasileiros, garantindo atendimento rápido onde você estiver.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-[500px] w-full bg-slate-100 rounded-[3rem] overflow-hidden shadow-inner border border-slate-200">
                        <Image
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
                            alt="Mapa de Atuação"
                            fill
                            className="object-cover opacity-50 grayscale"
                        />

                        {/* Pins */}
                        {[
                            { top: "60%", left: "60%", label: "SP - Matriz" },
                            { top: "50%", left: "55%", label: "MG" },
                            { top: "70%", left: "50%", label: "PR" },
                            { top: "40%", left: "50%", label: "GO" },
                        ].map((pin, i) => (
                            <div key={i} className="absolute group cursor-pointer" style={{ top: pin.top, left: pin.left }}>
                                <div className="relative">
                                    <div className="w-4 h-4 bg-amber-500 rounded-full animate-ping absolute top-0 left-0" />
                                    <div className="w-4 h-4 bg-amber-500 rounded-full border-2 border-white shadow-lg relative z-10" />
                                </div>
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-xl text-xs font-bold text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {pin.label}
                                </div>
                            </div>
                        ))}

                        <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl max-w-xs">
                            <h4 className="font-bold text-slate-900 mb-2">Central de Operações</h4>
                            <p className="text-xs text-slate-500 mb-4">Monitoramos 450MW de potência instalada em tempo real 24/7.</p>
                            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Sistema Operante Normal
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FILTROS E GRID DE PROJETOS */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">

                    {/* Filtros */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {[
                            { id: "all", label: "Todos", icon: Filter },
                            { id: "residential", label: "Residencial", icon: Home },
                            { id: "commercial", label: "Comercial", icon: Building2 },
                            { id: "industrial", label: "Industrial", icon: Factory },
                            { id: "rural", label: "Rural", icon: Tractor },
                        ].map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${filter === cat.id
                                        ? "bg-sky-600 text-white shadow-lg scale-105"
                                        : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-100"
                                    }`}
                            >
                                <cat.icon size={16} /> {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col h-full">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-sky-900 shadow-sm">
                                        {project.type}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-amber-500 transition-colors">{project.title}</h3>
                                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                                        <MapPin size={14} /> {project.location}
                                    </div>

                                    <p className="text-slate-600 text-sm mb-8 leading-relaxed flex-grow">
                                        {project.desc}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-8 bg-slate-50 p-4 rounded-xl">
                                        <div>
                                            <p className="text-[10px] uppercase text-slate-400 font-bold">Potência</p>
                                            <p className="font-bold text-sky-700">{project.power}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase text-slate-400 font-bold">Economia</p>
                                            <p className="font-bold text-emerald-600">{project.savings}</p>
                                        </div>
                                    </div>

                                    <button className="w-full py-3 border-2 border-slate-100 rounded-xl font-bold text-slate-600 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-50 transition-all flex items-center justify-center gap-2">
                                        Ver Detalhes <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CASES DE SUCESSO DESTACADOS (LAYOUT REVISTA) */}
            <section className="py-24 bg-sky-900 text-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-8 block">Case Study</span>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">Hotel Solar das Águas</h2>
                            <p className="text-xl text-sky-200 mb-8 leading-relaxed">
                                Como um resort de luxo tornou-se 100% autossuficiente energeticamente, eliminando uma conta de R$ 85.000,00 mensais e atraindo hóspedes eco-conscientes.
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-center gap-4 border-b border-sky-700 pb-4">
                                    <div className="text-4xl font-bold text-emerald-400">1.2 MW</div>
                                    <div className="text-sm uppercase text-sky-300">Potência Instalada <br />(Maior da região)</div>
                                </div>
                                <div className="flex items-center gap-4 border-b border-sky-700 pb-4">
                                    <div className="text-4xl font-bold text-emerald-400">R$ 1.5Mi</div>
                                    <div className="text-sm uppercase text-sky-300">Economia no <br />Primeiro Ano</div>
                                </div>
                            </div>

                            <button className="px-8 py-4 bg-white text-sky-950 font-bold rounded-xl hover:bg-amber-400 transition-colors">
                                Ler História Completa
                            </button>
                        </div>

                        <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-sky-700 group">
                            <Image
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop"
                                alt="Hotel Solar"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-8 right-8 w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                                <Play size={24} className="text-sky-950 ml-1" fill="currentColor" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. VÍDEOS DE PROJETOS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Bastidores da Instalação</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((v) => (
                            <div key={v} className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all">
                                <Image
                                    src={`https://images.unsplash.com/photo-1508514177221-188b1cf2f24f?q=80&w=2670&auto=format&fit=crop`}
                                    alt="Video Thumbnail"
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                                    <Play size={24} className="text-white ml-1" fill="currentColor" />
                                </div>
                                <div className="absolute bottom-4 left-4 text-white font-bold text-sm drop-shadow-md">
                                    Timelapse: Instalação 500 placas em 48h
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA FINAL */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-sky-950 mb-8">Seu telhado é o próximo?</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Não deixe seu dinheiro ir embora pela fiação. Transforme seu imóvel em um ativo gerador de renda.
                    </p>
                    <Link href="/sites-institucionais/premium/energia-solar/contato" className="inline-block px-12 py-5 bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold rounded-xl text-lg shadow-xl shadow-sky-200 hover:shadow-sky-300 hover:-translate-y-1 transition-all">
                        Solicitar Estudo de Viabilidade
                    </Link>
                </div>
            </section>

        </div>
    );
}
