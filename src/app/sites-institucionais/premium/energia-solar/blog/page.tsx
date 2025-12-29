"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar, User, ArrowRight, Search, Tag, Mail,
    ChevronRight, TrendingUp, Sun, FileText
} from "lucide-react";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = [
        { id: "all", label: "Todos" },
        { id: "tecnologia", label: "Tecnologia e Inovação" },
        { id: "legislacao", label: "Lei 14.300 (Taxação)" },
        { id: "economia", label: "Economia e Payback" },
        { id: "sustentabilidade", label: "Sustentabilidade" },
    ];

    const posts = [
        {
            id: 1,
            title: "Lei 14.300: O que mudou na taxação solar em 2024?",
            excerpt: "Entenda em detalhes como funciona a cobrança do fio B e porque a energia solar continua sendo um excelente investimento mesmo com as novas regras.",
            category: "legislacao",
            date: "15 Dez, 2024",
            author: "Eng. Ricardo Paiva",
            image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=2574&auto=format&fit=crop",
            featured: true
        },
        {
            id: 2,
            title: "Payback da Energia Solar: Como calcular o retorno?",
            excerpt: "Um guia completo para você entender em quanto tempo seu sistema se paga e como calcular a Taxa Interna de Retorno (TIR).",
            category: "economia",
            date: "12 Dez, 2024",
            author: "Juliana Costa",
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2671&auto=format&fit=crop",
            featured: false
        },
        {
            id: 3,
            title: "Baterias de Armazenamento: Vale a pena investir?",
            excerpt: "Os sistemas híbridos estão ganhando força. Descubra se já é a hora de investir em autonomia total com bancos de baterias.",
            category: "tecnologia",
            date: "08 Dez, 2024",
            author: "Eng. Ana Souza",
            image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2671&auto=format&fit=crop",
            featured: false
        },
        {
            id: 4,
            title: "Carro Elétrico e Energia Solar: O combo perfeito",
            excerpt: "Como dimensionar seu sistema fotovoltaico para abastecer seu veículo elétrico em casa com custo praticamente zero.",
            category: "tecnologia",
            date: "05 Dez, 2024",
            author: "Eng. Ricardo Paiva",
            image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2672&auto=format&fit=crop",
            featured: false
        },
        {
            id: 5,
            title: "Energia Solar por Assinatura vs Instalação Própria",
            excerpt: "Comparativo detalhado entre alugar uma cota em uma fazenda solar remota ou instalar painéis no seu próprio telhado.",
            category: "economia",
            date: "01 Dez, 2024",
            author: "Juliana Costa",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
            featured: false
        },
        {
            id: 6,
            title: "Impacto da Energia Solar na Valorização Imobiliária",
            excerpt: "Estudos mostram que imóveis com geração própria podem valorizar até 10% na hora da venda. Veja os dados.",
            category: "economia",
            date: "28 Nov, 2024",
            author: "Carlos Mendes",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop",
            featured: false
        }
    ];

    const featuredPost = posts.find(p => p.featured);
    const regularPosts = activeCategory === "all"
        ? posts.filter(p => !p.featured)
        : posts.filter(p => p.category === activeCategory && !p.featured);

    return (
        <div className="bg-slate-50 min-h-screen">

            {/* 1. HERO BLOG */}
            <section className="relative py-24 bg-sky-950 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2670&auto=format&fit=crop"
                        alt="Blog Solar"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-950/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 text-center max-w-4xl">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block inline-flex items-center gap-2 animate-fade-in"><Sun size={16} /> Central de Conteúdo</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-display mb-8 animate-fade-in-up">Notícias, Dicas e <span className="text-emerald-400">Tendências do Setor</span></h1>
                    <p className="text-xl text-sky-200 leading-relaxed mb-10 animate-fade-in-up delay-100">
                        Mantenha-se informado sobre as últimas novidades do mercado de energia solar, legislação e dicas para maximizar sua economia.
                    </p>

                    <div className="bg-white/10 backdrop-blur rounded-full p-2 flex items-center max-w-lg mx-auto border border-white/20 focus-within:bg-white/20 transition-colors animate-fade-in-up delay-200">
                        <Search className="text-sky-300 ml-4" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar artigos..."
                            className="bg-transparent border-none outline-none text-white placeholder-sky-300 w-full px-4 py-2"
                        />
                        <button className="bg-amber-500 text-sky-950 font-bold px-6 py-2 rounded-full hover:bg-amber-400 transition-colors">
                            Buscar
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. POST EM DESTAQUE */}
            {featuredPost && activeCategory === "all" && (
                <section className="py-20 -mt-20 relative z-20">
                    <div className="container mx-auto px-6 md:px-10 lg:px-20">
                        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 flex flex-col md:flex-row gap-10 group border-b-4 border-amber-500">
                            <div className="md:w-1/2 relative min-h-[300px] rounded-2xl overflow-hidden">
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-amber-500 text-sky-950 text-xs font-bold uppercase px-3 py-1 rounded-full">
                                    Destaque
                                </div>
                            </div>
                            <div className="md:w-1/2 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
                                    <span className="flex items-center gap-1"><User size={14} /> {featuredPost.author}</span>
                                    <span className="text-sky-600 font-bold uppercase text-[10px] bg-sky-50 px-2 py-1 rounded">{featuredPost.category}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 group-hover:text-amber-600 transition-colors leading-tight">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <Link href="#" className="inline-flex items-center gap-2 text-sky-700 font-bold text-lg hover:gap-4 transition-all">
                                    Ler Artigo Completo <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 3. LISTAGEM DE ARTIGOS */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">

                    <div className="flex flex-wrap gap-4 justify-center mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${activeCategory === cat.id
                                        ? "bg-sky-600 text-white shadow-lg"
                                        : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-100"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <article key={post.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-slate-100">
                                <div className="relative h-60 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-sky-950/80 backdrop-blur text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors flex-grow">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Link href="#" className="flex items-center gap-2 text-sky-600 font-bold text-sm mt-auto hover:text-amber-500 transition-colors">
                                        Continuar Lendo <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Paginação Fake */}
                    <div className="mt-16 text-center">
                        <button className="px-8 py-3 bg-white border border-slate-200 rounded-full text-slate-600 font-bold hover:bg-sky-50 transition-colors">
                            Carregar Mais Artigos
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. NEWSLETTER */}
            <section className="py-24 bg-sky-100">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="bg-sky-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-xl text-center">
                        <div className="absolute top-0 right-0 p-20 opacity-10">
                            <Mail size={300} className="text-white transform rotate-12" />
                        </div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="bg-emerald-500 text-sky-950 text-xs font-bold uppercase px-3 py-1 rounded-full mb-6 inline-block">
                                SolarPro News
                            </span>
                            <h2 className="text-4xl font-bold text-white mb-6">Receba conteúdos exclusivos</h2>
                            <p className="text-lg text-sky-200 mb-10">
                                Não enviamos spam. Apenas notícias relevantes sobre o setor solar, atualizações legislativas e dicas de manutenção para seu sistema.
                            </p>

                            <form className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Seu e-mail corporativo"
                                    className="flex-1 px-6 py-4 rounded-xl bg-sky-950/50 border border-sky-700 text-white placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                                <button className="px-8 py-4 bg-amber-500 text-sky-950 font-bold rounded-xl hover:bg-amber-400 transition-colors shadow-lg">
                                    Inscrever-se
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
