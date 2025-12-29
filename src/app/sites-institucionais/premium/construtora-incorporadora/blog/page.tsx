"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Calendar, User, Clock,
    ArrowRight, Tag, BookOpen
} from "lucide-react";

export default function BlogPage() {
    const posts = [
        {
            title: "Como usar o FGTS na compra do seu primeiro imóvel",
            category: "Financiamento",
            date: "12 Dez 2024",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2671&auto=format&fit=crop",
            excerpt: "Entenda as regras atuais da Caixa Econômica Federal e saiba se você se enquadra nos requisitos para saque."
        },
        {
            title: "Tendências de Decoração para Apartamentos Compactos",
            category: "Decoração",
            date: "08 Dez 2024",
            readTime: "4 min",
            image: "https://images.unsplash.com/photo-1502005229762-cf1afd38088d?q=80&w=2574&auto=format&fit=crop",
            excerpt: "Dicas de arquitetos para ampliar ambientes e trazer funcionalidade para espaços menores com muito estilo."
        },
        {
            title: "Jardins: Por que investir no bairro mais nobre?",
            category: "Mercado",
            date: "01 Dez 2024",
            readTime: "6 min",
            image: "https://images.unsplash.com/photo-1449824913929-2b3a3e308f16?q=80&w=2670&auto=format&fit=crop",
            excerpt: "Análise de valorização do metro quadrado e infraestrutura de uma das regiões mais desejadas da cidade."
        },
        {
            title: "Comprar na planta ou pronto: Qual a melhor opção?",
            category: "Dicas de Compra",
            date: "28 Nov 2024",
            readTime: "8 min",
            image: "https://images.unsplash.com/photo-1560518883-ce09059ee971?q=80&w=2573&auto=format&fit=crop",
            excerpt: "Comparativo completo de vantagens, desvantagens e fluxo de pagamento para cada modalidade."
        },
        {
            title: "Taxa Selic e Financiamento: O que muda?",
            category: "Economia",
            date: "15 Nov 2024",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2670&auto=format&fit=crop",
            excerpt: "Como as oscilações da taxa básica de juros impactam as parcelas do seu financiamento imobiliário."
        },
        {
            title: "Áreas de lazer que valorizam o condomínio",
            category: "Tendências",
            date: "10 Nov 2024",
            readTime: "4 min",
            image: "https://images.unsplash.com/photo-1572331165267-854da2b00cc6?q=80&w=2670&auto=format&fit=crop",
            excerpt: "Coworking, Pet Place e Mini Market: os novos itens indispensáveis nos empreendimentos modernos."
        }
    ];

    return (
        <div className="bg-white font-sans text-slate-700">

            {/* 1. HERO BLOG */}
            <section className="bg-slate-900 text-white py-24 border-b-4 border-teal-600">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 text-center">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Blog Imobiliário</span>
                    <h1 className="font-montserrat font-bold text-5xl mb-6">Dicas, Mercado e <span className="text-teal-500">Inspiração</span></h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">Conteúdo exclusivo preparado por nossos especialistas para te ajudar na jornada da casa própria.</p>
                </div>
            </section>

            {/* 2. CATEGORIAS */}
            <section className="border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur z-20">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <div className="flex overflow-x-auto py-4 gap-6 no-scrollbar">
                        {["Todos", "Financiamento", "Decoração", "Mercado Imobiliário", "Dicas de Compra", "Leis e Documentação"].map((cat, i) => (
                            <button key={i} className={`whitespace-nowrap text-sm font-bold ${i === 0 ? "text-teal-700 bg-teal-50 px-4 py-2 rounded-full" : "text-slate-500 hover:text-teal-600"}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. GRID CONTENT */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">

                    {/* Destaque */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-16 grid md:grid-cols-2 group hover:shadow-2xl transition-all duration-500">
                        <div className="relative min-h-[300px] md:h-full overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2573&auto=format&fit=crop" alt="Destaque" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-6 left-6 bg-orange-600 text-white px-3 py-1 rounded text-xs font-bold uppercase">
                                Destaque
                            </div>
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase mb-4">
                                <span className="flex items-center gap-1"><Calendar size={14} /> 15 Dez 2024</span>
                                <span className="flex items-center gap-1"><Clock size={14} /> 10 min leitura</span>
                            </div>
                            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-slate-900 mb-6 group-hover:text-teal-700 transition-colors">
                                Guia Definitivo 2025: Passo a passo para comprar seu primeiro imóvel sem erros
                            </h2>
                            <p className="text-slate-500 mb-8 leading-relaxed">
                                Preparamos um material completo com checklist de documentos, dicas para aprovação de crédito e os pontos de atenção na vistoria de entrega das chaves.
                            </p>
                            <Link href="#" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all">
                                Ler Artigo Completo <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Listagem */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-slate-100 group">
                                <div className="relative h-56 overflow-hidden">
                                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase text-slate-800 tracking-wide">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase mb-3">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="font-montserrat font-bold text-xl text-slate-900 mb-3 group-hover:text-teal-700 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <Link href="#" className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-orange-600 transition-colors border-t border-slate-100 pt-4">
                                        Ler Mais <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. NEWSLETTER */}
            <section className="py-20 bg-teal-800 text-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-teal-700 p-8 md:p-12 rounded-3xl shadow-2xl border border-teal-600">
                        <div className="md:w-1/2">
                            <div className="w-16 h-16 bg-teal-800 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                <BookOpen size={30} className="text-orange-400" />
                            </div>
                            <h2 className="font-montserrat font-bold text-3xl mb-4">Baixe nosso E-book Grátis</h2>
                            <p className="text-teal-100 text-lg leading-relaxed">
                                "Manual do Primeiro Imóvel: Tudo que você precisa saber antes de assinar o contrato". Mais de 50 páginas de conteúdo exclusivo.
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <form className="bg-white p-6 rounded-2xl shadow-xl">
                                <p className="text-slate-800 font-bold mb-4 text-center">Preencha para receber no email:</p>
                                <div className="space-y-4">
                                    <input type="text" placeholder="Seu nome" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-800 focus:outline-none focus:border-teal-500" />
                                    <input type="email" placeholder="Seu melhor email" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-800 focus:outline-none focus:border-teal-500" />
                                    <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg shadow-lg transition-colors">
                                        Baixar E-book Agora
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
