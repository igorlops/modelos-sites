"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock, Search, ChevronRight, Hash, ArrowUpRight } from "lucide-react";

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const featuredPost = {
        title: "Tendências de Design Biofílico para 2025",
        desc: "Como a integração profunda com a natureza está redefinindo o luxo na arquitetura residencial e corporativa. Analisamos os materiais, vegetação e layouts que promovem bem-estar real.",
        author: "Fernanda Lins",
        date: "15 Out 2024",
        readTime: "8 min de leitura",
        category: "Tendências",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
    };

    const posts = [
        {
            id: 1,
            title: "Iluminação: O Segredo Invisível da Decoração",
            excerpt: "A temperatura de cor e o índice de reprodução (IRC) podem mudar completamente a percepção de um ambiente. Aprenda a especificar luz.",
            author: "Juliana Costa",
            date: "10 Out 2024",
            category: "Interiores",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2535&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Pedras Naturais vs. Sintéticas: Guia Completo",
            excerpt: "Mármore, granito, quartzo ou lâmina sintetizada? Comparamos durabilidade, estética e manutenção para bancadas de cozinha.",
            author: "Carlos Mendes",
            date: "05 Out 2024",
            category: "Materiais",
            image: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Como Preparar seu Imóvel para Valorização",
            excerpt: "Pequenas intervenções de arquitetura que podem aumentar em até 20% o valor de venda do seu apartamento de luxo.",
            author: "Fernanda Lins",
            date: "28 Set 2024",
            category: "Mercado",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Home Office Definitivo: Ergonomia e Estilo",
            excerpt: "O trabalho híbrido veio para ficar. Veja projetos que integram o escritório à casa sem parecer um ambiente corporativo frio.",
            author: "Roberto Silva",
            date: "20 Set 2024",
            category: "Dicas",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "Sustentabilidade em Obras Residenciais",
            excerpt: "Reuso de água, painéis solares e automação. O que realmente vale a pena investir para ter uma casa eco-eficiente.",
            author: "Carlos Mendes",
            date: "15 Set 2024",
            category: "Tecnologia",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 6,
            title: "Cores da Estação: Tons Terrosos e Naturais",
            excerpt: "Paletas que aquecem e acolhem. Como usar terracota, bege e verde musgo para criar ambientes sofisticados.",
            author: "Juliana Costa",
            date: "10 Set 2024",
            category: "Tendências",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    const categories = ["Todos", "Tendências", "Interiores", "Arquitetura", "Tecnologia", "Materiais", "Mercado Imobiliário"];

    return (
        <div className="pt-24 min-h-screen bg-stone-50">
            {/* 1. Hero Blog */}
            <section className="py-20 bg-white border-b border-stone-200">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">Journal</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Notícias & Inspirações</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                        Artigos técnicos, tendências de design e insights sobre o mercado de arquitetura de alto padrão.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Featured Post */}
                        <div className="relative rounded-3xl overflow-hidden group shadow-xl">
                            <div className="aspect-[16/9] relative">
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                                <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                                    <span className="bg-amber-600 px-3 py-1 rounded-full">{featuredPost.category}</span>
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {featuredPost.readTime}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight group-hover:text-amber-400 transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-stone-300 text-lg mb-6 line-clamp-2 md:line-clamp-none max-w-2xl">
                                    {featuredPost.desc}
                                </p>
                                <Link href="#" className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all">
                                    Ler Artigo Completo <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </div>

                        {/* Post Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {posts.map((post) => (
                                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col group">
                                    <div className="aspect-[3/2] relative overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-stone-900">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-xs text-stone-400 mb-3">
                                            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                            <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-stone-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <Link href="#" className="text-stone-900 font-bold text-sm inline-flex items-center gap-1 hover:text-amber-600 transition-colors self-start">
                                            Ler mais <ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Pagination Placeholder */}
                        <div className="flex justify-center gap-2 pt-8">
                            <button className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold">1</button>
                            <button className="w-10 h-10 rounded-full bg-stone-200 text-stone-600 hover:bg-stone-300 flex items-center justify-center font-bold">2</button>
                            <button className="w-10 h-10 rounded-full bg-stone-200 text-stone-600 hover:bg-stone-300 flex items-center justify-center font-bold">3</button>
                            <span className="w-10 h-10 flex items-center justify-center text-stone-400">...</span>
                            <button className="w-10 h-10 rounded-full bg-stone-200 text-stone-600 hover:bg-stone-300 flex items-center justify-center font-bold"><ChevronRight size={18} /></button>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-12">
                        {/* Search */}
                        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                            <h3 className="text-lg font-bold text-stone-900 mb-6 font-serif">Buscar</h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Pesquisar artigos..."
                                    className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                            <h3 className="text-lg font-bold text-stone-900 mb-6 font-serif">Categorias</h3>
                            <ul className="space-y-3">
                                {categories.map((cat, i) => (
                                    <li key={i}>
                                        <button className="w-full flex justify-between items-center text-stone-600 hover:text-amber-600 transition-colors group">
                                            <span className="flex items-center gap-2">
                                                <Hash size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500" />
                                                {cat}
                                            </span>
                                            <span className="bg-stone-100 text-stone-400 px-2 py-1 rounded text-xs group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
                                                {Math.floor(Math.random() * 20) + 1}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-stone-900 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-20 bg-amber-600 blur-3xl opacity-20 hover:opacity-30 transition-opacity" />
                            <h3 className="text-xl font-bold font-serif mb-2 relative z-10">ArchNews Weekly</h3>
                            <p className="text-stone-400 text-sm mb-6 relative z-10">Receba curadoria de design, tendências e nossos melhores artigos toda semana.</p>
                            <form className="space-y-3 relative z-10">
                                <input
                                    type="email"
                                    placeholder="Seu melhor e-mail"
                                    className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-stone-500"
                                />
                                <button className="w-full py-3 bg-amber-600 rounded-xl font-bold hover:bg-amber-700 transition-colors shadow-lg shadow-amber-900/50">
                                    Inscrever-se
                                </button>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
