"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Star, Quote, Play, MessageCircle,
    Instagram, Heart, User
} from "lucide-react";

export default function DepoimentosPage() {
    const testimonials = [
        {
            name: "Isabella Fiorentino",
            role: "Consultora de Moda",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
            text: "Eu já conhecia o trabalho do Jean-Pierre de Paris, mas ter o atelier aqui no Brasil facilitou tudo. A sensibilidade dele em entender que eu queria reformar uma joia de família sem perder a essência foi tocante. O resultado é uma peça de arte.",
            piece: "Reforma de Colar Art Déco"
        },
        {
            name: "Carlos & Fernanda",
            role: "Casal de Colecionadores",
            img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2670&auto=format&fit=crop",
            text: "Quando decidimos renovar nossos votos de 25 anos, queríamos algo que simbolizasse nossa trajetória. A equipe criou um par de alianças com diamantes brutos que é simplesmente a coisa mais linda que já vimos.",
            piece: "Alianças 'Raw Diamond'"
        },
        {
            name: "Juliana Paes",
            role: "Atriz",
            img: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=2670&auto=format&fit=crop",
            text: "Para o tapete vermelho de Cannes, eu precisava de impacto. O colar de esmeraldas que aluguei (e depois acabei comprando!) roubou a cena. O brilho dessas pedras é hipnotizante.",
            piece: "Colar Esmeralda Colombiana"
        }
    ];

    return (
        <div className="bg-white font-sans text-stone-800">

            {/* 1. HERO DEPOIMENTOS */}
            <section className="py-24 text-center bg-stone-50 border-b border-stone-200">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Heart size={32} className="text-amber-600 mx-auto mb-6 fill-stone-50" />
                    <h1 className="font-playfair italic text-5xl md:text-6xl text-stone-900 mb-6">Histórias de Amor & Arte</h1>
                    <p className="font-light text-stone-500 text-xl leading-relaxed">
                        Mais do que clientes, construímos relações duradouras com pessoas que compartilham nossa paixão pelo belo.
                        Cada joia carrega uma memória, um sentimento, um momento eterno.
                    </p>
                </div>
            </section>

            {/* 2. VÍDEO DEPOIMENTO */}
            <section className="py-24 bg-stone-900 overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2670&auto=format&fit=crop" fill alt="Video Cover" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/30 mb-8 group-hover:bg-white group-hover:text-stone-900 text-white transition-all duration-500">
                        <Play size={40} className="ml-2" />
                    </div>
                    <h2 className="font-playfair text-white text-4xl italic mb-4">"Não consegui segurar as lágrimas quando abri a caixa..."</h2>
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Assista à história de Marina Ruy Barbosa</span>
                </div>
            </section>

            {/* 3. TESTIMONIAL GRID */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="flex flex-col text-center items-center">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-amber-100 p-1">
                                <Image src={t.img} fill alt={t.name} className="object-cover rounded-full" />
                            </div>
                            <div className="flex gap-1 text-amber-500 mb-6">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                            </div>
                            <Quote size={32} className="text-stone-200 mb-6" />
                            <p className="font-light text-stone-600 text-lg leading-relaxed mb-8 italic">
                                "{t.text}"
                            </p>
                            <div>
                                <h4 className="font-playfair font-bold text-xl text-stone-900">{t.name}</h4>
                                <span className="text-xs font-bold uppercase tracking-widest text-stone-400 block mb-2">{t.role}</span>
                                <span className="text-amber-700 text-sm font-medium border-t border-stone-100 pt-2 inline-block">Peça: {t.piece}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. INSTAGRAM FEED SIMULATION */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-6 md:px-12 text-center mb-16">
                    <Instagram size={32} className="mx-auto text-stone-900 mb-4" />
                    <h2 className="font-playfair text-3xl mb-4">@LArtDorAtelier</h2>
                    <p className="text-stone-500 font-light">Marcados por nossos clientes em momentos inesquecíveis.</p>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2670&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=2574&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=2670&auto=format&fit=crop"
                        ].map((img, i) => (
                            <div key={i} className="aspect-square relative group overflow-hidden cursor-pointer">
                                <Image src={img} fill alt="Instagram" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-stone-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                    <Heart size={24} fill="currentColor" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA SHARE */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="font-playfair text-3xl text-stone-900 mb-8">Sua história também merece ser contada</h2>
                    <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/contato" className="inline-flex items-center gap-2 border-b-2 border-amber-600 pb-1 font-bold text-stone-900 uppercase tracking-widest hover:text-amber-700 transition-colors">
                        <MessageCircle size={18} /> Enviar meu depoimento
                    </Link>
                </div>
            </section>

        </div>
    );
}
