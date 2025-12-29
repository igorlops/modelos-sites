"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Search, Filter, MapPin, Bed, Car, Ruler,
    ArrowRight, Heart, X, ChevronDown
} from "lucide-react";
import { useState } from "react";

export default function EmpreendimentosPage() {
    const [filterOpen, setFilterOpen] = useState(false);

    const projects = [
        {
            id: 1,
            name: "Reserva Imperial",
            bairro: "Jardins",
            status: "LANÇAMENTO",
            price: "980.000",
            dorms: "3-4",
            vagas: "2-3",
            area: "120-180",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop",
            tags: ["Alto Padrão", "Piscina Coberta"]
        },
        {
            id: 2,
            name: "Vila Verde",
            bairro: "Zona Sul",
            status: "EM OBRAS",
            price: "450.000",
            dorms: "2-3",
            vagas: "1",
            area: "55-70",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
            tags: ["MCMV", "Lazer Completo"]
        },
        {
            id: 3,
            name: "Skyline Tower",
            bairro: "Centro",
            status: "PRONTO",
            price: "320.000",
            dorms: "1",
            vagas: "0-1",
            area: "35-45",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
            tags: ["Investimento", "Metrô Próximo"]
        },
        {
            id: 4,
            name: "Horizonte Azul",
            bairro: "Barra Funda",
            status: "EM OBRAS",
            price: "650.000",
            dorms: "2-3",
            vagas: "2",
            area: "75-90",
            image: "https://images.unsplash.com/photo-1574362848149-11496d97a7bc?q=80&w=2569&auto=format&fit=crop",
            tags: ["Varanda Gourmet", "Pet Friendly"]
        },
        {
            id: 5,
            name: "Grand Palace",
            bairro: "Moema",
            status: "ÚLTIMAS UNIDADES",
            price: "1.250.000",
            dorms: "4",
            vagas: "3",
            area: "150-200",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
            tags: ["Luxo", "Exclusividade"]
        },
        {
            id: 6,
            name: "Connect Smart",
            bairro: "Vila Madalena",
            status: "LANÇAMENTO",
            price: "480.000",
            dorms: "1-2",
            vagas: "1",
            area: "40-60",
            image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b921?q=80&w=2574&auto=format&fit=crop",
            tags: ["Automação", "Coworking"]
        }
    ];

    return (
        <div className="bg-zinc-50 font-sans text-slate-700">

            {/* 1. HEADER PAGE */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">Nossos <span className="text-teal-500">Empreendimentos</span></h1>
                    <p className="text-slate-400 text-lg">Encontre o imóvel perfeito para seu estilo de vida e investimento.</p>
                </div>
            </section>

            {/* 2. FILTROS AVANÇADOS */}
            <section className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-sm transition-all">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-4">
                    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">

                        {/* Quick Filters */}
                        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
                            {["Todos", "Lançamentos", "Em Obras", "Prontos"].map((tab, i) => (
                                <button key={i} className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${i === 0 ? "bg-teal-700 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Advanced Toggle */}
                        <div className="flex items-center gap-4 w-full lg:w-auto">
                            <div className="relative flex-1 lg:w-64">
                                <input type="text" placeholder="Buscar por nome ou bairro..." className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
                                <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
                            </div>
                            <button
                                onClick={() => setFilterOpen(!filterOpen)}
                                className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg font-bold text-sm text-slate-700 hover:bg-slate-200 transition-colors"
                            >
                                <Filter size={16} /> Filtros <ChevronDown size={14} className={`transition-transform ${filterOpen ? "rotate-180" : ""}`} />
                            </button>
                        </div>

                    </div>

                    {/* Expandable Filter Area */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${filterOpen ? "max-h-[500px] opacity-100 mt-6 pb-6 border-t border-slate-100 pt-6" : "max-h-0 opacity-0"}`}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-2">Dormitórios</label>
                                <div className="flex flex-wrap gap-2">
                                    {["1", "2", "3", "4+"].map(n => <button key={n} className="w-8 h-8 rounded border border-slate-200 text-sm font-bold hover:border-teal-500 hover:text-teal-700">{n}</button>)}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-2">Faixa de Preço</label>
                                <input type="range" className="w-full accent-teal-600 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
                                <div className="flex justify-between text-xs text-slate-500 mt-1"><span>200k</span><span>2M+</span></div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-2">Bairros</label>
                                <select className="w-full border border-slate-200 rounded p-2 text-sm bg-white"><option>Selecione...</option><option>Jardins</option><option>Centro</option></select>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-2">Área (m²)</label>
                                <div className="flex gap-2 items-center">
                                    <input type="number" placeholder="Min" className="w-20 border border-slate-200 rounded p-1 text-sm pl-2" />
                                    <span className="text-slate-400">-</span>
                                    <input type="number" placeholder="Max" className="w-20 border border-slate-200 rounded p-1 text-sm pl-2" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="text-orange-600 font-bold text-sm hover:underline">Limpar filtros</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. GRID OF PROJECTS */}
            <section className="py-16 bg-zinc-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <h2 className="text-sm font-bold text-slate-500 mb-8">{projects.length} resultados encontrados</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-slate-100 group flex flex-col h-full">
                                {/* Imagem */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />

                                    <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                                        <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wide shadow-lg text-white ${project.status === "LANÇAMENTO" ? "bg-teal-600" :
                                                project.status === "EM OBRAS" ? "bg-orange-500" :
                                                    project.status === "ÚLTIMAS UNIDADES" ? "bg-red-500" : "bg-slate-700"
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>

                                    <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full text-slate-400 hover:text-red-500 transition-colors shadow-lg">
                                        <Heart size={18} />
                                    </button>
                                </div>

                                {/* Info */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold font-montserrat text-xl text-slate-900 group-hover:text-teal-700 transition-colors">{project.name}</h3>
                                    </div>
                                    <p className="flex items-center gap-1 text-slate-500 text-xs font-medium mb-6">
                                        <MapPin size={14} className="text-orange-500" /> {project.bairro}, São Paulo
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 border-y border-slate-100 py-4 mb-6">
                                        <div className="text-center">
                                            <Bed className="mx-auto text-slate-400 mb-1" size={18} />
                                            <span className="block font-bold text-slate-800 text-sm">{project.dorms}</span>
                                            <span className="text-[10px] text-slate-400 uppercase">Dorms</span>
                                        </div>
                                        <div className="text-center border-x border-slate-100">
                                            <Car className="mx-auto text-slate-400 mb-1" size={18} />
                                            <span className="block font-bold text-slate-800 text-sm">{project.vagas}</span>
                                            <span className="text-[10px] text-slate-400 uppercase">Vagas</span>
                                        </div>
                                        <div className="text-center">
                                            <Ruler className="mx-auto text-slate-400 mb-1" size={18} />
                                            <span className="block font-bold text-slate-800 text-sm">{project.area}m²</span>
                                            <span className="text-[10px] text-slate-400 uppercase">Área</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] text-slate-400">A partir de</p>
                                            <p className="font-bold text-xl text-slate-900">R$ {project.price}</p>
                                        </div>
                                        <Link href="#" className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors shadow-md">
                                            Detalhes
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination / Load More */}
                    <div className="mt-16 text-center">
                        <button className="inline-flex items-center gap-2 border-2 border-slate-200 px-8 py-3 rounded-xl font-bold text-slate-600 hover:border-teal-600 hover:text-teal-700 transition-colors">
                            Carregar Mais Imóveis <ChevronDown size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. NEWSLETTER ALERT */}
            <section className="bg-teal-700 py-16 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="font-montserrat font-bold text-3xl mb-4">Seja o primeiro a saber</h2>
                    <p className="text-teal-100 mb-8 max-w-xl mx-auto">Cadastre-se para receber alertas de novos lançamentos no seu bairro de interesse.</p>
                    <form className="max-w-md mx-auto flex gap-2">
                        <input type="email" placeholder="Seu e-mail" className="flex-1 rounded-lg px-4 py-3 text-slate-900 focus:outline-none" />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                            Cadastrar
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
}
