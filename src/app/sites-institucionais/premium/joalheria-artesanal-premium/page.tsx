"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight, ShieldCheck, Gem, PenTool,
    Star, Clock, ChevronDown, Play, Microscope
} from "lucide-react";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    return (
        <div className="font-sans text-stone-800 bg-zinc-50 overflow-x-hidden">

            {/* 1. HERO IMPACTANTE */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                {/* Background Video/Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2675&auto=format&fit=crop"
                        alt="Macro Diamante"
                        fill
                        className="object-cover animate-slow-zoom"
                        priority
                    />
                    <div className="absolute inset-0 bg-stone-950/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center pb-20">
                    <span className="inline-block animate-fade-in-up text-amber-300 text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-6 backdrop-blur-sm bg-white/5 py-2 px-6 rounded-full border border-white/10">
                        Atelier Haute Joaillerie
                    </span>
                    <h1 className="animate-fade-in-up delay-200 font-playfair italic text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
                        Eternize o <span className="text-amber-400 not-italic font-light">Sublime</span>
                    </h1>
                    <p className="animate-fade-in-up delay-300 text-stone-200 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                        Joias criadas manualmente, uma a uma, para celebrar histórias únicas. O encontro perfeito entre a tradição dos mestres e a pureza das gemas.
                    </p>
                    <div className="animate-fade-in-up delay-500 flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/colecoes" className="bg-white text-stone-950 px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-amber-500 hover:text-white transition-all duration-500 min-w-[200px]">
                            Explorar Coleções
                        </Link>
                        <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/contato" className="text-white border border-white/30 px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-stone-950 transition-all duration-500 min-w-[200px] backdrop-blur-sm">
                            Design Bespoke
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[9px] uppercase tracking-widest">Descubra</span>
                        <ChevronDown size={20} />
                    </div>
                </div>
            </section>

            {/* 2. NÚMEROS DE PRESTÍGIO */}
            <section className="bg-stone-950 text-amber-500 py-16 border-b border-stone-900">
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-stone-900/50">
                    {[
                        { val: "38", label: "Anos de Tradição" },
                        { val: "12k", label: "Quilates Cravados" },
                        { val: "5.4k", label: "Peças Exclusivas" },
                        { val: "100%", label: "Gemas Naturais" }
                    ].map((stat, i) => (
                        <div key={i} className="group">
                            <span className="font-playfair text-4xl md:text-5xl text-white block mb-2 group-hover:text-amber-500 transition-colors duration-500">{stat.val}</span>
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 group-hover:text-stone-300 transition-colors">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. COLEÇÕES EM DESTAQUE */}
            <section className="py-24 bg-zinc-50">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-playfair italic text-4xl md:text-5xl text-stone-900 mb-4">Coleções Icônicas</h2>
                        <div className="w-24 h-px bg-amber-600 mx-auto mb-6" />
                        <p className="text-stone-500 font-light leading-relaxed">
                            Cada coleção nasce de uma inspiração profunda na natureza, na arte e nas emoções humanas. Descubra peças que transcendem o tempo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Nocturne", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2670&auto=format&fit=crop", desc: "A elegância dos diamantes negros com ouro branco." },
                            { title: "Solaris", img: "https://images.unsplash.com/photo-1617038220319-88af152841b6?q=80&w=2670&auto=format&fit=crop", desc: "Citrinos e Topázios Imperiais em ouro amarelo 18k." },
                            { title: "Jardin Secret", img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2574&auto=format&fit=crop", desc: "Esmeraldas e Rubis em designs florais orgânicos." }
                        ].map((col, i) => (
                            <Link key={i} href="/sites-institucionais/premium/joalheria-artesanal-premium/colecoes" className="group relative block aspect-[3/4] overflow-hidden bg-stone-100">
                                <Image src={col.img} alt={col.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors duration-500" />
                                <div className="absolute bottom-0 inset-x-0 p-8 text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="font-playfair text-3xl italic mb-2">{col.title}</h3>
                                    <p className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4 text-stone-200">{col.desc}</p>
                                    <span className="inline-block border-b border-amber-500 pb-1 text-xs uppercase tracking-widest font-bold text-amber-400">Ver Peças</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. O ATELIER (Marca) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative h-[600px] w-full">
                        <div className="absolute top-0 right-0 w-[80%] h-[90%] z-10">
                            <Image src="https://images.unsplash.com/photo-1565514020176-db8b3234d7d6?q=80&w=2670&auto=format&fit=crop" alt="Mestre Joalheiro" fill className="object-cover" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] z-20 border-8 border-white shadow-2xl">
                            <Image src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2574&auto=format&fit=crop" alt="Detalhe Anel" fill className="object-cover" />
                        </div>
                        <div className="absolute top-10 left-10 w-32 h-32 border border-amber-600/30 z-0" />
                    </div>
                    <div className="lg:w-1/2">
                        <span className="text-amber-700 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Savoir-Faire</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
                            A Arte da <span className="italic text-amber-700">Alta Joalheria</span> Feita à Mão
                        </h2>
                        <p className="text-stone-600 font-light text-lg mb-6 leading-relaxed">
                            Em um mundo de produção em massa, nosso atelier preserva a alma da manufatura artesanal. Cada peça começa com um esboço a lápis, evolui para a fundição do ouro 18k e culmina na cravação microscópica de gemas selecionadas.
                        </p>
                        <p className="text-stone-600 font-light text-lg mb-10 leading-relaxed">
                            Não seguimos tendências passageiras. Criamos heranças familiares destinadas a atravessar gerações.
                        </p>
                        <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/sobre" className="inline-flex items-center gap-4 text-stone-900 font-bold uppercase tracking-widest text-xs hover:gap-6 transition-all border-b border-stone-300 pb-2 hover:border-amber-600 hover:text-amber-700">
                            Conheça nossa História <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. CATEGORIAS DE JOIAS */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Anéis", icon: "https://images.unsplash.com/photo-1603974372039-adc49044bcae?q=80&w=2574&auto=format&fit=crop" },
                            { name: "Colares", icon: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2574&auto=format&fit=crop" },
                            { name: "Brincos", icon: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2670&auto=format&fit=crop" },
                            { name: "Alianças", icon: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2670&auto=format&fit=crop" }
                        ].map((cat, idx) => (
                            <Link key={idx} href="/sites-institucionais/premium/joalheria-artesanal-premium/colecoes" className="group relative h-48 md:h-64 overflow-hidden rounded-sm">
                                <Image src={cat.icon} alt={cat.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center">
                                    <span className="text-white font-playfair italic text-2xl md:text-3xl border border-white/30 px-6 py-3 bg-white/5 backdrop-blur-sm group-hover:bg-white group-hover:text-stone-900 transition-all duration-500">
                                        {cat.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. JORNADA BESPOKE */}
            <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20" />
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Exclusividade Absoluta</span>
                            <h2 className="font-playfair text-4xl md:text-5xl mb-8 leading-tight">
                                Sua História, <span className="italic text-amber-500">Desenhada</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "A Conversa", desc: "Um café com nosso designer para entender seus desejos e inspirações." },
                                    { step: "02", title: "O Esboço", desc: "Apresentação de sketches exclusivos e seleção das gemas perfeitas." },
                                    { step: "03", title: "A Criação", desc: "Nossos artesãos dão vida à peça em nossa oficina visível." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group hover:pl-4 transition-all duration-300 pointer-events-none md:pointer-events-auto">
                                        <span className="font-playfair italic text-4xl text-stone-700 group-hover:text-amber-600 transition-colors">{item.step}</span>
                                        <div className="border-b border-stone-800 pb-6 w-full group-hover:border-amber-900">
                                            <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                                            <p className="text-stone-400 font-light text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/contato" className="bg-amber-700 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-all shadow-[0_0_30px_rgba(180,83,9,0.2)]">
                                    Habilitar Concierge Bespoke
                                </Link>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[500px]">
                            <Image src="https://images.unsplash.com/photo-1589126292398-385208f87db7?q=80&w=2670&auto=format&fit=crop" alt="Desenho de Joia" fill className="object-cover shadow-2xl sepia-[0.3]" />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-xs hidden md:block">
                                <p className="font-playfair italic text-stone-900 text-lg">"O verdadeiro luxo é possuir algo que não existe em nenhum outro lugar do mundo."</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mt-2">— Jean-Pierre, Mestre Artesão</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. GARANTIA / TRUST */}
            <section className="py-20 bg-white border-b border-stone-100">
                <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12 text-center">
                    {[
                        { icon: Gem, title: "Gemas Certificadas", desc: "Diamantes GIA e pedras coloridas com laudo gemológico de procedência." },
                        { icon: ShieldCheck, title: "Garantia Vitalícia", desc: "Manutenção, limpeza e polimento gratuitos para sempre em nosso atelier." },
                        { icon: Star, title: "Ouro 18k Puro", desc: "Trabalhamos exclusivamente com Ouro 18k e Platina 950 com liga própria." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center text-amber-700 mb-6 group hover:bg-amber-700 hover:text-white transition-all duration-500">
                                <item.icon size={28} strokeWidth={1} />
                            </div>
                            <h3 className="font-playfair font-bold text-xl text-stone-900 mb-3">{item.title}</h3>
                            <p className="text-stone-500 font-light text-sm max-w-xs">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. BASTIDORES / IMAGEM FULL */}
            <section className="relative h-[600px] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2670&auto=format&fit=crop')" }}>
                <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center">
                    <div className="text-center group cursor-pointer">
                        <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-white group-hover:text-stone-900 transition-all duration-500 text-white">
                            <Play size={32} fill="currentColor" className="ml-1" />
                        </div>
                        <h2 className="font-playfair text-white text-4xl italic mb-2">Por Dentro do Atelier</h2>
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Assista ao Filme (02:45)</span>
                    </div>
                </div>
            </section>

            {/* 9. DEPOIMENTOS */}
            <section className="py-24 bg-zinc-50">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <Gem className="mx-auto text-amber-600 mb-6" size={32} />
                    <h2 className="font-playfair text-4xl text-stone-900 mb-16">Histórias Eternizadas</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { text: "Eles conseguiram capturar a essência da minha avó em um anel que agora passará para minha filha. Emocionante.", name: "Beatriz S.", city: "São Paulo" },
                            { text: "O anel de noivado superou qualquer expectativa. O diamante brilha de uma forma que nunca vi em joalherias de shopping.", name: "Ricardo M.", city: "Rio de Janeiro" },
                            { text: "O atendimento via concierge foi impecável. Recebi a peça em Londres com segurança total e embalagem incrível.", name: "Sophia L.", city: "Londres" }
                        ].map((dep, i) => (
                            <div key={i} className="bg-white p-10 shadow-sm border border-stone-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 text-left relative">
                                <span className="text-6xl font-playfair text-stone-100 absolute top-4 left-4">"</span>
                                <p className="text-stone-600 font-light italic mb-6 relative z-10">{dep.text}</p>
                                <div>
                                    <p className="font-bold text-stone-900 text-sm">{dep.name}</p>
                                    <p className="text-xs text-amber-700 uppercase tracking-widest">{dep.city}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. JOURNAL / BLOG */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-amber-700 text-xs font-bold uppercase tracking-[0.2em] mb-2 block">L'Art d'Or Journal</span>
                        <h2 className="font-playfair text-4xl text-stone-900">O Universo da Joalheria</h2>
                    </div>
                    <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/journal" className="text-stone-500 hover:text-amber-700 font-bold uppercase text-xs tracking-widest border-b border-stone-200 hover:border-amber-700 pb-1 mt-6 md:mt-0 transition-all">
                        Ler todos os artigos
                    </Link>
                </div>
                <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Os 4 C's do Diamante: Um Guia para Investidores", img: "https://images.unsplash.com/photo-1618403088890-3d130f065e90?q=80&w=2574&auto=format&fit=crop" },
                        { title: "Turmalina Paraíba: O Tesouro Brasileiro", img: "https://images.unsplash.com/photo-1590549247076-0bf170ee400e?q=80&w=2670&auto=format&fit=crop" },
                        { title: "Como cuidar de suas joias de Ouro e Pérolas", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2670&auto=format&fit=crop" }
                    ].map((post, i) => (
                        <Link key={i} href="#" className="group block">
                            <div className="aspect-[3/2] overflow-hidden mb-6 bg-stone-100 relative">
                                <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                            </div>
                            <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest mb-2 block">Curadoria</span>
                            <h3 className="font-playfair text-xl text-stone-900 group-hover:text-amber-700 transition-colors max-w-xs">{post.title}</h3>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 11. FAQ */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <h2 className="font-playfair text-3xl text-center mb-12">Dúvidas Frequentes</h2>
                    <div className="space-y-4">
                        {[
                            "Como descubro a medida do meu dedo?",
                            "As joias possuem certificado de garantia?",
                            "Fazem peças personalizadas a partir de ouro antigo?",
                            "Qual o prazo de entrega para peças sob medida?"
                        ].map((q, i) => (
                            <div key={i} className="bg-white border border-stone-200 p-6 cursor-pointer hover:border-amber-300 transition-colors" onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}>
                                <div className="flex justify-between items-center">
                                    <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wide">{q}</h4>
                                    <ChevronDown size={16} className={`text-stone-400 transition-transform ${activeAccordion === i ? "rotate-180" : ""}`} />
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === i ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <p className="text-stone-500 text-sm font-light leading-relaxed">
                                        Nossas consultoras auxiliam em todo o processo. Enviamos medidores para sua casa ou você pode agendar uma visita ao atelier para medição precisa. Todas as peças acompanham certificado vitalício.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 12. CTA FINAL */}
            <section className="py-32 bg-stone-950 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-pulse" />
                <div className="container mx-auto px-6 py-12 relative z-10 border border-amber-500/30 max-w-4xl backdrop-blur-sm bg-stone-900/50">
                    <h2 className="font-playfair text-5xl italic text-white mb-6">Comece sua Coleção</h2>
                    <p className="text-stone-300 text-lg font-light mb-10 max-w-xl mx-auto">
                        Permita-se viver a experiência de possuir uma obra de arte usável, criada exclusivamente para você.
                    </p>
                    <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/colecoes" className="bg-white text-stone-950 px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-amber-500 hover:text-white transition-all duration-500">
                        Ver Catálogo Completo
                    </Link>
                </div>
            </section>

        </div>
    );
}
