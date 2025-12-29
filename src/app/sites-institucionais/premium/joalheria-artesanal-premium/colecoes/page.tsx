"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Filter, Search, Heart, ShoppingBag,
    ChevronDown, Ruler, Info, MapPin
} from "lucide-react";
import { useState } from "react";

export default function ColecoesPage() {
    const [activeFilter, setActiveFilter] = useState("Todos");

    const products = [
        { name: "Anel Solitário Éternité", price: "R$ 12.890", cat: "Anéis", metal: "Ouro Branco 18k", gem: "Diamante 50pt", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2670&auto=format&fit=crop" },
        { name: "Colar Rivière Diamond", price: "R$ 45.000", cat: "Colares", metal: "Platina 950", gem: "Diamantes", img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2574&auto=format&fit=crop" },
        { name: "Brincos Cascade Rubi", price: "R$ 18.500", cat: "Brincos", metal: "Ouro Rosé 18k", gem: "Rubis e Diamantes", img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2670&auto=format&fit=crop" },
        { name: "Aliança Classic 5mm", price: "R$ 4.200", cat: "Alianças", metal: "Ouro Amarelo 18k", gem: "Sem Gema", img: "https://images.unsplash.com/photo-1603974372039-adc49044bcae?q=80&w=2574&auto=format&fit=crop" },
        { name: "Pulseira Tennis Safira", price: "R$ 22.900", cat: "Pulseiras", metal: "Ouro Branco 18k", gem: "Safiras Azuis", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2670&auto=format&fit=crop" },
        { name: "Anel Cocktail Esmeralda", price: "R$ 35.800", cat: "Anéis", metal: "Ouro Amarelo 18k", gem: "Esmeralda Colombiana", img: "https://images.unsplash.com/photo-1598560976505-d41c19b671d1?q=80&w=2670&auto=format&fit=crop" },
    ];

    return (
        <div className="bg-zinc-50 font-sans text-stone-800">

            {/* 1. HERO COLEÇÕES */}
            <section className="bg-stone-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h1 className="font-playfair italic text-5xl md:text-6xl mb-4">Coleções Exclusivas</h1>
                    <p className="font-light text-stone-400 text-lg max-w-2xl mx-auto">
                        Navegue por nossas criações autorais. Cada peça é acompanhada de certificado de autenticidade e garantia vitalícia.
                    </p>
                </div>
            </section>

            {/* 2. BARRA DE FILTROS STICKY */}
            <section className="sticky top-20 z-30 bg-white border-b border-stone-200 shadow-sm py-4">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">

                    <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto no-scrollbar">
                        {["Todos", "Anéis", "Colares", "Brincos", "Pulseiras", "Alianças"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`uppercase text-xs font-bold tracking-widest px-4 py-2 whitespace-nowrap transition-colors ${activeFilter === cat ? "bg-stone-900 text-white" : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <input type="text" placeholder="Buscar joia..." className="w-full pl-10 pr-4 py-2 bg-stone-50 border-none text-xs uppercase tracking-wide focus:ring-1 focus:ring-amber-500 rounded-sm" />
                            <Search size={14} className="absolute left-3 top-2.5 text-stone-400" />
                        </div>
                        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-stone-100 px-4 py-2 hover:bg-stone-200 transition-colors">
                            <Filter size={14} /> Filtros
                        </button>
                    </div>

                </div>
            </section>

            {/* 3. GRID DE PRODUTOS */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {products.map((item, i) => (
                            <div key={i} className="group bg-white p-4 pb-8 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-stone-100 flex flex-col">
                                <div className="relative aspect-square overflow-hidden mb-6 bg-stone-100">
                                    <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:sepia-[0.2]" />
                                    <button className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur rounded-full text-stone-900 hover:bg-white hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                        <Heart size={18} />
                                    </button>
                                    <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
                                        <button className="text-[10px] font-bold uppercase tracking-widest text-stone-900 hover:text-amber-600">Quick View</button>
                                        <ShoppingBag size={16} className="text-stone-900 hover:text-amber-600 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="text-center flex-1 flex flex-col">
                                    <span className="text-[10px] text-stone-400 uppercase tracking-widest mb-2 block">{item.cat}</span>
                                    <h3 className="font-playfair text-xl text-stone-900 mb-2 truncate group-hover:text-amber-700 transition-colors">{item.name}</h3>
                                    <div className="flex justify-center gap-2 text-[10px] text-stone-500 border-t border-stone-100 py-3 mt-auto">
                                        <span>{item.metal}</span>•<span>{item.gem}</span>
                                    </div>
                                    <p className="font-bold text-stone-900 mt-2">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination CTA */}
                    <div className="mt-20 text-center">
                        <button className="inline-flex items-center gap-2 border-b border-stone-900 pb-1 text-xs font-bold uppercase tracking-widest hover:text-amber-700 hover:border-amber-700 transition-all">
                            Carregar Mais Peças <ChevronDown size={14} />
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. DESIGN BESPOKE BANNER */}
            <section className="py-24 bg-stone-200 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="font-playfair italic text-4xl md:text-5xl text-stone-900 mb-6">Não encontrou o que buscava?</h2>
                        <p className="font-light text-stone-600 text-lg mb-8 leading-relaxed">
                            Criar algo do zero permite que você escolha cada detalhe, desde o tom exato do ouro até o corte da pedra. Nossos designers estão prontos para traduzir sua visão.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/contato" className="bg-stone-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors">
                                Falar com Designer
                            </Link>
                            <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/processo" className="flex items-center gap-2 text-stone-900 text-xs font-bold uppercase tracking-widest hover:text-amber-700 transition-colors">
                                Entender Processo <Info size={16} />
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <Ruler size={120} className="text-stone-300 stroke-1" />
                    </div>
                </div>
            </section>

            {/* 5. LOCATOR / SHOWROOMS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-center mb-16">
                    <h2 className="font-playfair text-3xl text-stone-900 mb-4">Experimente Pessoalmente</h2>
                    <p className="text-stone-500 font-light">Agende uma visita privada em nossos showrooms para provar as peças.</p>
                </div>
                <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-6">
                    {["Jardins - SP", "Leblon - RJ", "Cidade Jardim - SP"].map((loc, i) => (
                        <div key={i} className="border border-stone-200 p-6 flex items-center gap-4 hover:border-amber-500 hover:shadow-lg transition-all cursor-pointer group">
                            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-500 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                <MapPin size={20} />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-stone-900 uppercase text-xs tracking-widest mb-1">{loc}</h4>
                                <p className="text-stone-500 text-xs">Agendar visita com horário</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
