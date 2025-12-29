"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Search, Calendar, User, ArrowRight, Tag,
    BarChart2, Bookmark, Share2, Mail
} from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
    const [category, setCategory] = useState("all");

    const categories = [
        { id: "all", label: "Todos" },
        { id: "strategy", label: "Estratégia" },
        { id: "tech", label: "Tecnologia" },
        { id: "esg", label: "ESG & Sustentabilidade" },
        { id: "economy", label: "Economia & Mercados" }
    ];

    const posts = [
        {
            id: 1,
            title: "O Papel da IA Generativa na Redefinição da Eficiência Operacional",
            excerpt: "Como grandes corporações estão utilizando LLMs para automatizar processos complexos de decisão e reduzir custos em até 40%.",
            author: "Carlos Mendes",
            date: "14 Out 2024",
            category: "tech",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
            readTime: "8 min"
        },
        {
            id: 2,
            title: "M&A em 2025: Perspectivas para Consolidação no Varejo",
            excerpt: "Análise profunda dos movimentos de mercado esperados para o próximo ano e onde estão as oportunidades de valor.",
            author: "Ana Paula Torres",
            date: "02 Out 2024",
            category: "strategy",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop",
            readTime: "12 min"
        },
        {
            id: 3,
            title: "A Agenda ESG como Motor de Valor, não Apenas Compliance",
            excerpt: "Estudos de caso de empresas que transformaram suas iniciativas sustentáveis em novas linhas de receita lucrativas.",
            author: "Ricardo Silva",
            date: "28 Set 2024",
            category: "esg",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
            readTime: "6 min"
        },
        {
            id: 4,
            title: "Cultura Organizacional em Tempos de Trabalho Híbrido",
            excerpt: "Estratégias para manter o engajamento e a produtividade de equipes distribuídas geograficamente.",
            author: "Julia Santos",
            date: "15 Set 2024",
            category: "strategy",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
            readTime: "5 min"
        },
        {
            id: 5,
            title: "Inflação Global e Cadeias de Suprimento: O Novo Normal",
            excerpt: "Como navegar a incerteza macroeconômica e blindar sua operação contra choques de oferta.",
            author: "Roberto Campos",
            date: "10 Set 2024",
            category: "economy",
            image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2664&auto=format&fit=crop",
            readTime: "10 min"
        },
        {
            id: 6,
            title: "Blockchain na Logística: Da Teoria à Prática",
            excerpt: "Implementações reais de rastreabilidade e contratos inteligentes que estão revolucionando o setor portuário.",
            author: "Carlos Mendes",
            date: "05 Set 2024",
            category: "tech",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
            readTime: "7 min"
        }
    ];

    const filteredPosts = category === "all" ? posts : posts.filter(p => p.category === category);

    return (
        <div className="bg-slate-50 overflow-hidden font-sans">

            {/* 1. HERO BLOG */}
            <section className="bg-slate-900 text-white py-20 border-b border-slate-800">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h1 className="text-5xl font-bold mb-4">Strategic Insights</h1>
                            <p className="text-slate-400 text-lg max-w-xl">
                                Análises profundas, tendências de mercado e pensamento de liderança para executivos que tomam decisões complexas.
                            </p>
                        </div>

                        {/* Newsletter Signup (Hero) */}
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full md:w-auto max-w-md">
                            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                <Mail size={18} className="text-blue-500" />
                                Briefing Executivo Semanal
                            </h3>
                            <p className="text-xs text-slate-400 mb-4">Junte-se a 15.000+ C-levels que recebem nossa curadoria.</p>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Seu e-mail corporativo" className="bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-blue-500 text-white" />
                                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-bold transition-colors">Assinar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. DESTAQUE PRINCIPAL */}
            <section className="py-12 bg-white border-b border-slate-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <Link href="#" className="group grid lg:grid-cols-2 gap-8 items-center cursor-pointer">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
                                alt="Destaque"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">Editor's Pick</div>
                        </div>
                        <div className="lg:pr-12">
                            <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                                <span>Economia Global</span>
                                <span>•</span>
                                <span>20 Out 2024</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                                O Fim da Globalização Como Conhecemos? Impactos para o Supply Chain Brasileiro
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Em um mundo cada vez mais fragmentado geopoliticamente, as estratégias de sourcing precisam ser repensadas. Analisamos o movimento de nearshoring e o que ele significa para o Brasil.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" width={40} height={40} alt="Author" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">Carlos Mendes</p>
                                    <p className="text-xs text-slate-500">Senior Partner</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* 3. LISTAGEM E FILTROS */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">

                    {/* Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setCategory(cat.id)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold transition-colors ${category === cat.id ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-64">
                            <input type="text" placeholder="Buscar insights..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 text-sm" />
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
                                <div className="relative h-56 overflow-hidden">
                                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <span className="text-white text-[10px] font-bold uppercase bg-blue-600 px-2 py-1 rounded inline-block mb-1">
                                            {categories.find(c => c.id === post.category)?.label}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col grow">
                                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                                        <Calendar size={12} /> {post.date}
                                        <span className="px-1">•</span>
                                        <span className="flex items-center gap-1"><Bookmark size={12} /> {post.readTime}</span>
                                    </div>
                                    <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                                        <div className="flex items-center gap-2">
                                            <User size={14} className="text-slate-400" />
                                            <span className="text-xs font-bold text-slate-600">{post.author}</span>
                                        </div>
                                        <button className="text-slate-400 hover:text-blue-600 transition-colors">
                                            <Share2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-8 py-3 border border-slate-300 rounded-lg font-bold text-slate-600 hover:bg-slate-100 transition-colors text-sm">
                            Carregar Mais Artigos
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. DOWNLOAD WHITEPAPERS */}
            <section className="py-24 bg-white border-t border-slate-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Whitepapers & Relatórios Exclusivos</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-8 rounded-2xl flex gap-6 items-start border border-slate-200 hover:border-blue-400 transition-all cursor-pointer group">
                            <div className="w-16 h-20 bg-slate-200 shrink-0 shadow-md group-hover:shadow-xl transition-shadow relative">
                                <div className="absolute inset-0 flex items-center justify-center font-serif text-3xl text-slate-400 italic font-bold">PDF</div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2 truncate">State of Innovation 2025</h3>
                                <p className="text-sm text-slate-500 mb-4">Relatório completo sobre as tendências de inovação corporativa no Brasil.</p>
                                <span className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:underline">Download Gratuito <ArrowRight size={16} /></span>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl flex gap-6 items-start border border-slate-200 hover:border-blue-400 transition-all cursor-pointer group">
                            <div className="w-16 h-20 bg-slate-200 shrink-0 shadow-md group-hover:shadow-xl transition-shadow relative">
                                <div className="absolute inset-0 flex items-center justify-center font-serif text-3xl text-slate-400 italic font-bold">PDF</div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2 truncate">Guia de Eficiência Energética</h3>
                                <p className="text-sm text-slate-500 mb-4">Manual prático para redução de custos industriais através da sustentabilidade.</p>
                                <span className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:underline">Download Gratuito <ArrowRight size={16} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
