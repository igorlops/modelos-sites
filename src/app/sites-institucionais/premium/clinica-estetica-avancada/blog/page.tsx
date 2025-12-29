"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Search, Calendar, Clock, ArrowRight, Play, Heart,
    Share2, Bookmark, User, Tag,
    Sparkles
} from "lucide-react";

export default function BlogPage() {
    const categories = [
        { name: "Skincare", image: "https://images.unsplash.com/photo-1556228720-1957be9b9868?q=80&w=1000&auto=format&fit=crop" },
        { name: "Procedimentos", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop" },
        { name: "Bem-Estar", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop" },
        { name: "Nutrição", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2653&auto=format&fit=crop" },
    ];

    const featuredPost = {
        category: "Tendências 2024",
        title: "O Fim da Era 'Rosto de Filtro': A Ascensão da Beleza Natural",
        excerpt: "Porque os preenchimentos exagerados estão saindo de cena para dar lugar a protocolos que estimulam a qualidade da pele e respeitam a anatomia individual.",
        author: "Dra. Sofia Martini",
        date: "12 Mar 2024",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?q=80&w=2670&auto=format&fit=crop"
    };

    const posts = [
        {
            id: 1,
            category: "Skincare",
            title: "Vitamina C x Retinol: Qual a Melhor Ordem?",
            excerpt: "Guia definitivo para montar sua rotina de cuidados noturna e diurna sem erros.",
            image: "https://source.unsplash.com/random/800x600/?skincare,serum",
            date: "10 Mar",
            time: "5 min"
        },
        {
            id: 2,
            category: "Procedimentos",
            title: "Mito ou Verdade: Botox Preventivo",
            excerpt: "Entenda a partir de qual idade é recomendado iniciar as aplicações para prevenir rugas estáticas.",
            image: "https://source.unsplash.com/random/800x600/?botox,face",
            date: "08 Mar",
            time: "6 min"
        },
        {
            id: 3,
            category: "Bem-Estar",
            title: "Como o Estresse Afeta Sua Pele",
            excerpt: "A relação entre cortisol e acne adulta, e como gerenciar para ter uma pele radiante.",
            image: "https://source.unsplash.com/random/800x600/?stress,yoga",
            date: "05 Mar",
            time: "4 min"
        },
        {
            id: 4,
            category: "Corporal",
            title: "Preparando o Corpo para o Verão no Inverno",
            excerpt: "Por que começar os tratamentos corporais agora garante os melhores resultados na praia.",
            image: "https://source.unsplash.com/random/800x600/?body,summer",
            date: "01 Mar",
            time: "7 min"
        },
        {
            id: 5,
            category: "Tecnologia",
            title: "Laser Lavieen: O Efeito BB Cream",
            excerpt: "Tudo sobre o laser queridinho do momento que promete pele de porcelana sem downtime.",
            image: "https://source.unsplash.com/random/800x600/?laser,face",
            date: "28 Fev",
            time: "5 min"
        },
        {
            id: 6,
            category: "Nutrição",
            title: "Alimentos que Estimulam o Colágeno",
            excerpt: "O que incluir na dieta para potencializar os resultados dos seus bioestimuladores.",
            image: "https://source.unsplash.com/random/800x600/?food,healthy",
            date: "25 Fev",
            time: "4 min"
        }
    ];

    return (
        <div className="bg-neutral-50 overflow-hidden">

            {/* 1. HERO BLOG */}
            <section className="relative py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 animate-fade-in-up">
                        <div>
                            <span className="text-rose-600 font-bold uppercase tracking-widest text-sm mb-2 block">Lumière News</span>
                            <h1 className="font-serif text-5xl md:text-6xl text-neutral-900 leading-tight">
                                Conteúdo Expert em <br /> <span className="text-neutral-400 italic">Beleza e Ciência</span>
                            </h1>
                        </div>
                        <div className="w-full md:w-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar artigo..."
                                    className="pl-6 pr-12 py-4 rounded-full bg-neutral-100 border-none w-full md:w-80 focus:ring-2 focus:ring-rose-200"
                                />
                                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Categories Visual Nav */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up delay-100">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="relative h-40 rounded-3xl overflow-hidden cursor-pointer group">
                                <Image src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                                <span className="absolute bottom-4 left-4 text-white font-bold text-xl">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. EDITOR'S PICK (DESTAQUE) */}
            <section className="py-16 bg-neutral-50 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto">
                    <h2 className="font-serif text-3xl mb-8 flex items-center gap-4">
                        <Sparkles className="text-amber-500" /> Escolha da Editora
                    </h2>
                    <div className="bg-neutral-900 rounded-[3rem] overflow-hidden text-white shadow-2xl group flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 relative min-h-[400px]">
                            <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-8 left-8 bg-rose-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {featuredPost.category}
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                            <h3 className="font-serif text-3xl md:text-5xl font-medium mb-6 leading-tight group-hover:text-rose-200 transition-colors">
                                {featuredPost.title}
                            </h3>
                            <p className="text-neutral-300 text-lg mb-8 font-light leading-relaxed">
                                {featuredPost.excerpt}
                            </p>

                            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10" />
                                    <div className="text-sm">
                                        <p className="font-bold">{featuredPost.author}</p>
                                        <p className="text-neutral-400">{featuredPost.date} • {featuredPost.readTime} de leitura</p>
                                    </div>
                                </div>
                                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-all">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. LATEST POSTS GRID */}
            <section className="py-16 bg-white px-6 md:px-12 lg:px-24">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="font-serif text-4xl text-neutral-900">Últimas Publicações</h2>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 rounded-full bg-rose-50 text-rose-600 font-bold text-sm hover:bg-rose-100 transition">Ver Todos</button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <div key={post.id} className="group cursor-pointer">
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-neutral-900">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {post.time}</span>
                                </div>
                                <h3 className="font-serif text-2xl text-neutral-900 font-bold mb-3 group-hover:text-rose-600 transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <Link href="#" className="inline-flex items-center gap-2 text-rose-600 font-bold text-sm hover:gap-3 transition-all">
                                    Ler Artigo <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. NEWSLETTER LUXURY */}
            <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-rose-900/40 to-transparent" />
                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center max-w-2xl">
                    <Heart className="mx-auto text-rose-500 mb-6 animate-pulse" size={48} />
                    <h2 className="font-serif text-4xl md:text-5xl mb-6">Lumière VIP Club</h2>
                    <p className="text-neutral-300 mb-10 font-light text-lg">
                        Junte-se a nossa lista exclusiva e receba convites para eventos, lançamentos em primeira mão e dicas de beleza curadas por nossa diretoria médica.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Seu e-mail preferido"
                            className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-rose-500"
                        />
                        <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-rose-600/30">
                            Cadastrar Gratuitamente
                        </button>
                    </form>
                    <p className="text-xs text-neutral-500 mt-6">
                        Não enviamos spam. Apenas conteúdo de alto valor. Cancele quando quiser.
                    </p>
                </div>
            </section>

        </div>
    );
}
