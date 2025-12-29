"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight, Gavel, Scale, FileText,
    BarChart, Calendar, ChevronDown, CheckCircle2,
    Filter
} from "lucide-react";
import { useState } from "react";
import TrendingUp from "lucide-react";

export default function PortfolioPage() {
    const [filter, setFilter] = useState("all");

    const categories = [
        { id: "all", label: "Todos os Casos" },
        { id: "recuperacao", label: "Recuperação Judicial" },
        { id: "tributario", label: "Tributário" },
        { id: "societario", label: "Societário & M&A" },
        { id: "civel", label: "Cível Estratégico" }
    ];

    const cases = [
        {
            id: 1,
            title: "Reestruturação de Passivo Industrial",
            client: "Indústria Metalúrgica (Médio Porte)",
            category: "recuperacao",
            year: "2023",
            tribunal: "TJSP - 1ª Câmara Reservada",
            value: "R$ 85 Milhões",
            description: "Empresa enfrentava grave crise de liquidez com dívidas trabalhistas e bancárias. Atuamos no pedido de RJ e negociação com credores.",
            result: "Plano aprovado com deságio de 60% e carência de 24 meses.",
            image: "https://images.unsplash.com/photo-1565514020176-6c2235c8e899?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Anulação de Auto de Infração ICMS",
            client: "Varejista Nacional",
            category: "tributario",
            year: "2022",
            tribunal: "TIT/SP e TJSP",
            value: "R$ 42 Milhões",
            description: "Fiscalização estadual autuou a empresa por suposto crédito indevido de ICMS em operações interestaduais.",
            result: "Autuação cancelada integralmente após demonstração pericial da regularidade.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Venda de Controle Acionário",
            client: "Tech Startup (Logística)",
            category: "societario",
            year: "2024",
            tribunal: "N/A (CADE)",
            value: "R$ 120 Milhões",
            description: "Assessoria aos founders na venda total do equity para player estratégico internacional.",
            result: "Deal fechado em 6 meses com cláusulas de earn-out favoráveis.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Defesa em Ação Civil Pública Ambiental",
            client: "Construtora",
            category: "civel",
            year: "2023",
            tribunal: "TRF-3",
            value: "R$ 200 Milhões (Risco)",
            description: "MPF ajuizou ação alegando danos ambientais em empreendimento imobiliário de grande porte.",
            result: "Improcedência da ação mantida no Tribunal, liberando o empreendimento.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "Recuperação de Créditos PIS/COFINS",
            client: "Rede de Supermercados",
            category: "tributario",
            year: "2023",
            tribunal: "RFB (Administrativo)",
            value: "R$ 15 Milhões",
            description: "Revisão fiscal dos últimos 5 anos identificou créditos não apropriados na base de cálculo.",
            result: "Homologação dos créditos e compensação imediata com tributos correntes.",
            image: "https://images.unsplash.com/photo-1554224154-260327c00c4c?q=80&w=2669&auto=format&fit=crop"
        },
        {
            id: 6,
            title: "Dissolução Parcial de Sociedade",
            client: "Grupo Familiar (Agro)",
            category: "societario",
            year: "2022",
            tribunal: "Arbitragem (CAM-CCBC)",
            value: "Sigiloso",
            description: "Disputa complexa entre herdeiros envolvendo avaliação de ativos biológicos e terras.",
            result: "Acordo celebrado preservando a unidade produtiva e o patrimônio.",
            image: "https://images.unsplash.com/photo-1625246333195-f81961856126?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    const filteredCases = filter === "all" ? cases : cases.filter(c => c.category === filter);

    return (
        <div className="bg-stone-50 overflow-hidden font-sans">

            {/* 1. HERO PORTFOLIO */}
            <section className="bg-slate-900 text-white py-24 border-b-4 border-amber-800">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 text-center max-w-4xl">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Casos de Sucesso</span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Histórico de Vitórias e <br /><span className="text-amber-500 italic">Resultados Expressivos</span></h1>
                    <p className="text-xl text-stone-300 font-light mb-8">
                        Conheça alguns dos desafios jurídicos complexos que solucionamos. Respeitando o sigilo profissional, os nomes dos clientes foram preservados ou anonimizados.
                    </p>
                </div>
            </section>

            {/* 2. FILTROS E ESTATÍSTICAS */}
            <section className="bg-white border-b border-stone-200 sticky top-20 z-30 shadow-sm">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id)}
                                    className={`whitespace-nowrap px-6 py-2 rounded-full font-bold text-sm transition-all border ${filter === cat.id
                                            ? "bg-amber-700 text-white border-amber-700 shadow-lg"
                                            : "bg-white text-slate-500 border-slate-200 hover:border-amber-400 hover:text-amber-700"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                        <div className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-500">
                            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> +500 Causas</span>
                            <span className="flex items-center gap-2"><BarChart size={16} className="text-amber-500" /> R$ 100M+ Recuperados</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. GRID DE CASES */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="grid md:grid-cols-2 gap-12">
                        {filteredCases.map((caza) => (
                            <div key={caza.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                                <div className="relative h-64 overflow-hidden border-b border-slate-100">
                                    <Image src={caza.image} alt={caza.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.8] group-hover:saturate-100" />
                                    <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-xs font-bold uppercase px-3 py-1 rounded backdrop-blur border border-slate-700">
                                        {categories.find(c => c.id === caza.category)?.label}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col grow">
                                    <div className="mb-6 pb-6 border-b border-stone-100">
                                        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">{caza.title}</h3>
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-wide">{caza.client}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase font-bold mb-1">Valor Envolvido</p>
                                            <p className="font-serif font-bold text-slate-800 text-lg">{caza.value}</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase font-bold mb-1">Tribunal/Fórum</p>
                                            <p className="font-serif font-bold text-slate-800 text-lg">{caza.tribunal}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8 grow">
                                        <div>
                                            <p className="flex items-center gap-2 font-bold text-slate-700 text-sm mb-1">
                                                <FileText size={14} className="text-amber-600" /> O Desafio:
                                            </p>
                                            <p className="text-slate-600 text-sm leading-relaxed">{caza.description}</p>
                                        </div>
                                        <div>
                                            <p className="flex items-center gap-2 font-bold text-slate-700 text-sm mb-1">
                                                <Gavel size={14} className="text-green-600" /> O Resultado:
                                            </p>
                                            <p className="text-slate-600 text-sm leading-relaxed">{caza.result}</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Ano: {caza.year}</span>
                                        <button className="text-amber-700 font-bold text-sm flex items-center gap-2 hover:underline">
                                            Ver Detalhes do Caso <ArrowUpRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PRÓXIMO CASO */}
            <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')] opacity-10" />
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 max-w-4xl">
                    <h2 className="font-serif text-4xl font-bold mb-8">Seu Negócio Pode Ser Nosso Próximo Case de Sucesso</h2>
                    <p className="text-xl text-slate-300 mb-12 font-light">
                        Não deixe que questões jurídicas limitem o crescimento da sua empresa. Nossa equipe está pronta para atuar.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/sites-institucionais/premium/advocacia-empresarial/contato" className="bg-amber-700 hover:bg-amber-600 text-white px-10 py-4 rounded font-bold text-lg shadow-lg transition-transform hover:-translate-y-1">
                            Agendar Reunião
                        </Link>
                        <Link href="/sites-institucionais/premium/advocacia-empresarial/servicos" className="bg-transparent border border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 rounded font-bold text-lg transition-colors">
                            Ver Todas as Áreas
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
