"use client";

import Image from "next/image";
import Link from "next/link";
import {
    BookOpen, Calendar, Tag, ArrowUpRight,
    Mail, Instagram, Share2,
    Lock
} from "lucide-react";

export default function JournalPage() {
    const articles = [
        {
            title: "Pedras Preciosas de Investimento: O Guia Definitivo",
            category: "Investimento & Arte",
            date: "10 Jan 2025",
            excerpt: "Por que rubis birmaneses e safiras da Caxemira continuam valorizando acima da inflação global.",
            img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2574&auto=format&fit=crop"
        },
        {
            title: "Haute Joaillerie: Os Bastidores da Semana de Moda de Paris",
            category: "Tendências",
            date: "05 Jan 2025",
            excerpt: "Nossa diretora criativa conta tudo o que viu nos showrooms da Place Vendôme.",
            img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2675&auto=format&fit=crop"
        },
        {
            title: "Como Limpar suas Joias em Casa (Sem Danificá-las)",
            category: "Cuidados & Manutenção",
            date: "28 Dez 2024",
            excerpt: "Mitos e verdades sobre limpeza caseira. O que pode e o que JAMAIS deve ser feito com esmeraldas e pérolas.",
            img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "A Simbologia dos Anéis de Noivado através da História",
            category: "História",
            date: "15 Dez 2024",
            excerpt: "Dos romanos aos tempos modernos: como o costume de usar o anel no dedo anelar esquerdo surgiu.",
            img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Ouro Fairmined vs. Ouro Reciclado: Entenda a Diferença",
            category: "Sustentabilidade",
            date: "01 Dez 2024",
            excerpt: "Aprofundamos na cadeia de suprimentos para explicar qual escolha tem o maior impacto socioambiental.",
            img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-zinc-50 font-sans text-stone-800">

            {/* 1. HERO JOURNAL */}
            <section className="bg-white pt-32 pb-20 text-center border-b border-stone-100">
                <div className="container mx-auto px-6 md:px-12">
                    <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Editorial</span>
                    <h1 className="font-playfair italic text-5xl md:text-7xl mb-8">L'Art d'Or Journal</h1>
                    <p className="font-light text-stone-500 text-lg max-w-2xl mx-auto">
                        Ensaios sobre arte, cultura, gemologia e o estilo de vida que envolve a alta joalheria.
                    </p>
                </div>
            </section>

            {/* 2. CATEGORY NAV */}
            <section className="border-b border-stone-200 bg-white sticky top-20 z-20 shadow-sm">
                <div className="container mx-auto px-6 md:px-12 py-4 flex gap-8 overflow-x-auto no-scrollbar justify-center">
                    {["Todos", "Investimento", "Tendências", "História", "Sustentabilidade", "Cuidados"].map((cat, i) => (
                        <button key={i} className={`text-xs font-bold uppercase tracking-widest whitespace-nowrap hover:text-amber-600 transition-colors ${i === 0 ? "text-amber-600 border-b border-amber-600 pb-1" : "text-stone-400"}`}>
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* 3. FEATURED POST */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <Link href="#" className="group grid md:grid-cols-2 gap-0 overflow-hidden bg-white shadow-xl">
                        <div className="relative h-[400px] md:h-auto overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1547555999-14eaf186f633?q=80&w=2670&auto=format&fit=crop" fill alt="Destaque" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1 text-xs font-bold uppercase tracking-widest text-stone-900">
                                Destaque
                            </div>
                        </div>
                        <div className="p-12 md:p-16 flex flex-col justify-center">
                            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-6">
                                <span className="flex items-center gap-1"><Calendar size={12} /> 20 Jan 2025</span>
                                <span className="flex items-center gap-1"><Tag size={12} /> Estilo</span>
                            </div>
                            <h2 className="font-playfair text-3xl md:text-4xl text-stone-900 mb-6 leading-tight group-hover:text-amber-700 transition-colors">
                                O Renascimento do Broche na Joalheria Contemporânea
                            </h2>
                            <p className="font-light text-stone-500 leading-relaxed mb-8">
                                Considerado por muito tempo antiquado, o broche volta com força total nos tapetes vermelhos, usado agora de formas inusitadas: em cintos, cabelos e até sapatos.
                            </p>
                            <span className="inline-flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-amber-700 pb-1 transition-all w-fit">
                                Ler Artigo <ArrowUpRight size={14} />
                            </span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* 4. POST GRID */}
            <section className="pb-24">
                <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((post, i) => (
                        <article key={i} className="flex flex-col group cursor-pointer bg-white border border-transparent hover:border-stone-100 hover:shadow-lg transition-all p-4 pb-8">
                            <div className="relative aspect-[3/2] overflow-hidden mb-6 bg-stone-100">
                                <Image src={post.img} fill alt={post.title} className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                            </div>
                            <div className="flex gap-3 text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-3">
                                <span>{post.category}</span>
                                <span className="text-stone-300">•</span>
                                <span className="text-stone-400">{post.date}</span>
                            </div>
                            <h3 className="font-playfair text-xl text-stone-900 mb-3 leading-snug group-hover:text-amber-700 transition-colors">
                                {post.title}
                            </h3>
                            <p className="font-light text-sm text-stone-500 line-clamp-3 mb-4">
                                {post.excerpt}
                            </p>
                            <span className="mt-auto text-xs font-bold uppercase tracking-widest text-stone-300 group-hover:text-stone-900 flex items-center gap-2">
                                Ler <ArrowUpRight size={12} />
                            </span>
                        </article>
                    ))}
                </div>
            </section>

            {/* 5. NEWSLETTER LUXE */}
            <section className="py-24 bg-stone-900 text-stone-300">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 border-t border-b border-stone-800 py-12">
                    <div className="md:w-1/2">
                        <BookOpen size={32} className="text-amber-600 mb-6" />
                        <h2 className="font-playfair text-3xl text-white mb-4">The L'Art d'Or Monthly</h2>
                        <p className="font-light text-stone-400">
                            Junte-se à nossa lista exclusiva de colecionadores. Receba convites para vernissages, pré-lançamentos de coleções e artigos de gemologia. Sem spam, apenas arte.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <form className="flex flex-col gap-4">
                            <div className="flex">
                                <input type="email" placeholder="Seu e-mail pessoal" className="flex-1 bg-stone-950 border border-stone-700 text-white px-6 py-4 focus:outline-none focus:border-amber-600 transition-colors placeholder:text-stone-600" />
                                <button type="submit" className="bg-amber-700 text-white px-8 font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors">
                                    Assinar
                                </button>
                            </div>
                            <p className="text-[10px] text-stone-600 uppercase tracking-wide flex items-center gap-1">
                                <Lock size={10} /> Seus dados estão seguros conosco.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}
