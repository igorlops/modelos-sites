"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Search, Calendar, User,
    ArrowRight, Tag, BookOpen,
    Download, Mail
} from "lucide-react";

export default function BlogPage() {
    const categories = ["Todos", "Tributário", "Trabalhista", "Societário", "Compliance"];

    const featuredPost = {
        title: "Reforma Tributária 2024: Impactos no Setor de Serviços",
        category: "Tributário",
        date: "28 Dez, 2024",
        author: "Dra. Ana Paula Torres",
        excerpt: "Análise detalhada das principais mudanças na legislação fiscal e como preparar sua empresa para o novo sistema IVA dual.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2671&auto=format&fit=crop"
    };

    const posts = [
        {
            title: "Responsabilidade dos Sócios na Execução Trabalhista",
            category: "Trabalhista",
            date: "15 Dez, 2024",
            author: "Dr. Carlos Mendes",
            image: "https://images.unsplash.com/photo-1505664194779-8beaceb930b5?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Cláusulas de Non-Compete em Contratos de Executivos",
            category: "Societário",
            date: "10 Dez, 2024",
            author: "Dr. Roberto Campos",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop"
        },
        {
            title: "Privacidade de Dados e LGPD: Multas Recentes",
            category: "Compliance",
            date: "05 Dez, 2024",
            author: "Dra. Ana Paula Torres",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Planejamento Sucessório em Empresas Familiares",
            category: "Societário",
            date: "01 Dez, 2024",
            author: "Dr. Carlos Mendes",
            image: "https://images.unsplash.com/photo-1534320309096-17ce09d2f4d5?q=80&w=2669&auto=format&fit=crop"
        },
        {
            title: "Recuperação Judicial do Produtor Rural",
            category: "Cível",
            date: "25 Nov, 2024",
            author: "Dr. Roberto Campos",
            image: "https://images.unsplash.com/photo-1625246333195-f81961856126?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Novas Regras para Trabalho Remoto",
            category: "Trabalhista",
            date: "20 Nov, 2024",
            author: "Dra. Ana Paula Torres",
            image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-stone-50 overflow-hidden font-sans">

            {/* 1. HERO BLOG */}
            <section className="bg-slate-900 text-white py-20 border-b-4 border-amber-800">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 text-center">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Imperium Insights</span>
                    <h1 className="font-serif text-5xl font-bold mb-6">Inteligência Jurídica ao Seu Alcance</h1>
                    <p className="text-lg text-stone-300 font-light max-w-2xl mx-auto">
                        Acompanhe nossas análises sobre as principais tendências do direito empresarial e mantenha seu negócio atualizado.
                    </p>
                </div>
            </section>

            {/* 2. BARRA DE PESQUISA E CATEGORIAS */}
            <section className="border-b border-slate-200 bg-white sticky top-20 z-30 shadow-sm">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto no-scrollbar py-2">
                            {categories.map((cat, idx) => (
                                <button key={idx} className={`text-sm font-bold px-4 py-2 rounded-full transition-colors whitespace-nowrap ${idx === 0 ? "bg-amber-700 text-white" : "text-slate-500 hover:bg-stone-100"}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-64">
                            <input
                                type="text"
                                placeholder="Buscar artigo..."
                                className="w-full bg-stone-100 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-amber-500 text-slate-800"
                            />
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. DESTAQUE */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-stone-50 rounded-2xl overflow-hidden border border-slate-200 group cursor-pointer hover:shadow-xl transition-shadow">
                        <div className="relative h-64 md:h-[400px] w-full overflow-hidden">
                            <Image src={featuredPost.image} alt="Destaque" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8 md:pr-12">
                            <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-wider">
                                <span className="text-amber-700 bg-amber-50 px-2 py-1 rounded">{featuredPost.category}</span>
                                <span className="text-slate-400 flex items-center gap-1"><Calendar size={12} /> {featuredPost.date}</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6 group-hover:text-amber-700 transition-colors">
                                {featuredPost.title}
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-300 relative overflow-hidden">
                                        <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" alt="Autor" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900">Por {featuredPost.author}</p>
                                        <p className="text-[10px] text-slate-500 uppercase">Sócia Tributária</p>
                                    </div>
                                </div>
                                <span className="text-amber-700 font-bold flex items-center gap-2 text-sm hover:underline">Ler Artigo <ArrowRight size={16} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. LISTA DE ARTIGOS */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-10">Últimas Publicações</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <div key={idx} className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-all group">
                                <div className="relative h-48 overflow-hidden">
                                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 contrast-[0.9] group-hover:contrast-100" />
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase text-slate-900 tracking-wide">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3 text-slate-400 text-xs font-medium">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><User size={12} /> {post.author.split(' ').slice(0, 2).join(' ')}</span>
                                    </div>
                                    <h4 className="font-serif text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors line-clamp-2">
                                        {post.title}
                                    </h4>
                                    <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 group-hover:text-amber-700 transition-colors">
                                        Ler Mais <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. NEWSLETTER E EBOOKS */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="bg-slate-800 p-10 rounded-xl border border-slate-700">
                            <Mail className="text-amber-500 mb-6" size={40} />
                            <h3 className="font-serif text-2xl font-bold mb-4">Newsletter Jurídica</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                                Receba quinzenalmente nossa curadoria de notícias, análises legislativas e convites para eventos exclusivos do escritório.
                            </p>
                            <form className="flex gap-4">
                                <input type="email" placeholder="Seu e-mail corporativo" className="flex-1 bg-slate-900 border border-slate-600 rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
                                <button className="bg-amber-700 hover:bg-amber-600 text-white px-6 rounded font-bold transition-colors">
                                    Assinar
                                </button>
                            </form>
                        </div>

                        <div className="flex flex-col justify-center">
                            <h3 className="font-serif text-2xl font-bold mb-8">Materiais Ricos (Whitepapers)</h3>
                            <div className="space-y-6">
                                {[
                                    "Guia Completo da Reforma Tributária 2024",
                                    "Compliance Trabalhista: Manual de Boas Práticas",
                                    "Holding Familiar: Vantagens e Riscos"
                                ].map((ebook, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/50 rounded hover:bg-slate-800 transition-colors cursor-pointer border border-transparent hover:border-slate-600 group">
                                        <div className="flex items-center gap-4">
                                            <BookOpen className="text-amber-700" size={24} />
                                            <span className="font-bold text-stone-200 text-sm group-hover:text-white">{ebook}</span>
                                        </div>
                                        <Download className="text-slate-500 group-hover:text-amber-500 transition-colors" size={20} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
