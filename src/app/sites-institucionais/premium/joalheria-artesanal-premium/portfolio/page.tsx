"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight, Camera, Gem, Award,
    MapPin, Calendar, Lock
} from "lucide-react";

export default function PortfolioPage() {
    const bespokeProjects = [
        {
            title: "Tiara Imperial",
            client: "Família Orleans",
            desc: "Releitura de uma joia do século XIX para um casamento real.",
            img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2670&auto=format&fit=crop",
            year: "2023"
        },
        {
            title: "Broche Phoenix",
            client: "Coleção Privada",
            desc: "Safira padparadscha de 5ct cercada de diamantes negros.",
            img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2574&auto=format&fit=crop",
            year: "2022"
        },
        {
            title: "Anel Eternity",
            client: "Bodas de Diamante",
            desc: "Platina maciça com gravação interna da história do casal.",
            img: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=2670&auto=format&fit=crop",
            year: "2024"
        },
        {
            title: "Colar Constelação",
            client: "Gala Beneficente",
            desc: "120 diamantes cravejados representando o mapa astral da cliente.",
            img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2670&auto=format&fit=crop",
            year: "2021"
        }
    ];

    return (
        <div className="bg-stone-950 font-sans text-stone-300">

            {/* 1. HERO PORTFOLIO */}
            <section className="relative py-32 border-b border-stone-900">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Haute Joaillerie</span>
                    <h1 className="font-playfair text-5xl md:text-7xl text-white mb-8 italic">Obras Primas <span className="not-italic text-stone-500">&</span> Provocações</h1>
                    <p className="text-xl font-light max-w-2xl mx-auto leading-relaxed text-stone-400">
                        Uma galeria de peças únicas que desafiaram nossos limites técnicos e artísticos. Joias que não se repetem.
                    </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-900 to-transparent opacity-50" />
            </section>

            {/* 2. PROJETOS EM DESTAQUE */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12 space-y-32">
                    {bespokeProjects.map((project, i) => (
                        <div key={i} className={`flex flex-col md:flex-row items-center gap-16 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>

                            <div className="md:w-1/2 relative group cursor-none">
                                <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                                    <Image src={project.img} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors pointer-events-none" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-difference hidden md:block">
                                    <span className="text-white font-bold uppercase tracking-widest text-lg">Ver Detalhes</span>
                                </div>
                            </div>

                            <div className="md:w-1/2 text-left">
                                <span className="font-mono text-amber-600 text-sm mb-4 block align-middle">
                                    <Calendar size={12} className="inline mr-2" /> {project.year}
                                </span>
                                <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6 group-hover:text-amber-500 transition-colors">{project.title}</h2>
                                <div className="w-12 h-px bg-stone-700 mb-8" />

                                <div className="space-y-6 mb-10">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-1">Cliente</span>
                                        <span className="text-stone-300 font-light text-lg">{project.client}</span>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-1">Desafio</span>
                                        <span className="text-stone-300 font-light text-lg leading-relaxed block max-w-md">{project.desc}</span>
                                    </div>
                                </div>

                                <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/contato" className="inline-flex items-center gap-3 text-white border border-stone-700 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:border-amber-600 hover:text-amber-500 transition-all">
                                    Encomendar Similar <ArrowRight size={14} />
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* 3. EXPERIENCE GALLERY */}
            <section className="py-24 bg-stone-900">
                <div className="container mx-auto px-6 md:px-12 text-center mb-16">
                    <h2 className="font-playfair text-3xl text-white mb-4">A Experiência de Entrega</h2>
                    <p className="text-stone-500 font-light">Não entregamos apenas uma caixa. Entregamos um momento.</p>
                </div>
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="relative aspect-square group overflow-hidden border border-stone-800">
                        <Image src="https://images.unsplash.com/photo-1512413344656-11f879657076?q=80&w=2670&auto=format&fit=crop" fill alt="Embalagem Luxo" className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                        <div className="absolute inset-x-0 bottom-0 py-6 bg-stone-950/80 backdrop-blur text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-xs uppercase font-bold tracking-widest text-amber-500">Packaging</span>
                        </div>
                    </div>
                    <div className="relative aspect-square group overflow-hidden border border-stone-800 border-l-0 border-r-0">
                        <Image src="https://images.unsplash.com/photo-1589126292398-385208f87db7?q=80&w=2670&auto=format&fit=crop" fill alt="Certificado" className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                        <div className="absolute inset-x-0 bottom-0 py-6 bg-stone-950/80 backdrop-blur text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-xs uppercase font-bold tracking-widest text-amber-500">Autenticidade</span>
                        </div>
                    </div>
                    <div className="relative aspect-square group overflow-hidden border border-stone-800">
                        <Image src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=2574&auto=format&fit=crop" fill alt="Entrega Luva Branca" className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                        <div className="absolute inset-x-0 bottom-0 py-6 bg-stone-950/80 backdrop-blur text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-xs uppercase font-bold tracking-widest text-amber-500">White Glove</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
