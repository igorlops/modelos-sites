"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Award, Heart, PenTool, Globe,
    Users, Sparkles, Gem, Clock
} from "lucide-react";

export default function SobrePage() {
    const timeline = [
        { year: "1985", title: "Fundação em Paris", desc: "Jean-Pierre abre seu primeiro atelier no Marais, focado em restauração de joias antigas." },
        { year: "1992", title: "Primeira Coleção", desc: "Lançamento da linha 'Renaissance', misturando técnicas barrocas com design moderno." },
        { year: "2005", title: "Expansão Brasil", desc: "Abertura do atelier em São Paulo, trazendo opalas e turmalinas brasileiras para o design francês." },
        { year: "2010", title: "Selo GIA", desc: "Parceria oficial com o Gemological Institute of America para certificação de todos os diamantes." },
        { year: "2018", title: "Sustentabilidade", desc: "Transição para uso exclusivo de ouro reciclado e diamantes de zonas livres de conflito." },
        { year: "2024", title: "Novo Showroom", desc: "Inauguração do espaço conceito nos Jardins, integrando galeria de arte e manufatura." }
    ];

    return (
        <div className="bg-white font-sans text-stone-800">

            {/* 1. HERO INSTITUCIONAL */}
            <section className="relative h-[70vh] flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1565514020176-db8b3234d7d6?q=80&w=2670&auto=format&fit=crop"
                    alt="Bancada de Ourives"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-stone-900/60" />
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm animate-fade-in-up">Desde 1985</span>
                    <h1 className="font-playfair italic text-6xl md:text-7xl mb-6 animate-fade-in-up delay-100">L'Art de La Joaillerie</h1>
                    <p className="font-light text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        Onde a precisão técnica da engenharia encontra a fluidez poética da arte. Bem-vindo ao nosso mundo.
                    </p>
                </div>
            </section>

            {/* 2. MISSÃO / VISÃO / VALORES */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
                    {[
                        { title: "Missão", text: "Criar objetos de desejo que carreguem significado emocional eterno, respeitando a natureza e as pessoas." },
                        { title: "Visão", text: "Ser a referência global em joalheria ética e design autoral, redefinindo o luxo contemporâneo." },
                        { title: "Valores", text: "Excelência técnica, transparência radical, paixão pela arte e compromisso com a sustentabilidade." }
                    ].map((item, i) => (
                        <div key={i} className="text-center p-8 border border-stone-200 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                            <div className="w-12 h-1 bg-amber-600 mx-auto mb-6" />
                            <h3 className="font-playfair text-2xl text-stone-900 mb-4">{item.title}</h3>
                            <p className="font-light text-stone-600 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. O MESTRE JOALHEIRO */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 relative h-[600px] w-full bg-stone-100">
                        <Image
                            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2670&auto=format&fit=crop"
                            alt="Retrato Jean-Pierre"
                            fill
                            className="object-cover cursor-crosshair hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-2xl max-w-sm hidden md:block">
                            <p className="font-playfair italic text-stone-800 text-lg">"Uma joia sem alma é apenas metal frio. Nós sopramos vida no ouro."</p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">O Fundador</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-stone-900 mb-6">Jean-Pierre Dubois</h2>
                        <p className="font-light text-stone-600 text-lg mb-6 leading-relaxed">
                            Quarta geração de uma família de ourives de Lyon, Jean-Pierre cresceu entre cadinhos e limas. Após anos restaurando peças da coroa francesa, decidiu criar sua própria linguagem estética.
                        </p>
                        <p className="font-light text-stone-600 text-lg mb-8 leading-relaxed">
                            Hoje, lidera uma equipe de 15 artesãos em São Paulo, supervisionando pessoalmente cada cravação e acabamento, garantindo que a assinatura L'Art d'Or seja sinônimo de perfeição.
                        </p>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Assinatura" width={150} height={50} className="opacity-50" />
                    </div>
                </div>
            </section>

            {/* 4. TIMELINE */}
            <section className="py-24 bg-stone-900 text-stone-400 overflow-x-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="font-playfair italic text-4xl text-white text-center mb-20">Nossa Jornada no Tempo</h2>
                    <div className="relative border-l border-stone-700 ml-6 md:ml-[50%] md:border-l-0">
                        {/* Linha Central Desktop */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-700 -translate-x-1/2" />

                        {timeline.map((item, i) => (
                            <div key={i} className={`flex flex-col md:flex-row items-center mb-16 relative ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                                <div className="w-full md:w-1/2 p-6 md:p-12 text-left md:text-right">
                                    {i % 2 !== 0 ? (
                                        <>
                                            <span className="text-6xl font-playfair text-stone-800 absolute top-0 right-10 -z-10 md:static md:text-stone-800/50 md:text-8xl md:font-black">{item.year}</span>
                                            <div className="relative z-10 md:-mt-10">
                                                <h3 className="text-amber-500 font-bold text-xl mb-2 uppercase tracking-wide">{item.title}</h3>
                                                <p className="font-light leading-relaxed max-w-sm ml-auto">{item.desc}</p>
                                            </div>
                                        </>
                                    ) : (<div className="hidden md:block" />)}

                                    {/* Mobile view fix */}
                                    <div className="md:hidden">
                                        <span className="text-amber-500 font-bold text-xl mb-1 block">{item.year} - {item.title}</span>
                                        <p className="font-light">{item.desc}</p>
                                    </div>
                                </div>

                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-stone-900 z-20 md:block hidden" />

                                <div className="w-full md:w-1/2 p-6 md:p-12 text-left">
                                    {i % 2 === 0 ? (
                                        <>
                                            <span className="text-6xl font-playfair text-stone-800 md:text-stone-800/50 md:text-8xl md:font-black absolute top-0 left-10 -z-10 md:static">{item.year}</span>
                                            <div className="relative z-10 md:-mt-10">
                                                <h3 className="text-amber-500 font-bold text-xl mb-2 uppercase tracking-wide">{item.title}</h3>
                                                <p className="font-light leading-relaxed max-w-sm">{item.desc}</p>
                                            </div>
                                        </>
                                    ) : (<div className="hidden md:block" />)}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. DIFERENCIAIS TÉCNICOS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-center mb-16">
                    <h2 className="font-playfair text-4xl text-stone-900 mb-6">Manufatura de <span className="italic text-amber-600">Excelência</span></h2>
                    <p className="text-stone-500 font-light max-w-2xl mx-auto">Técnicas ancestrais combinadas com tecnologia de ponta para criar o impossível.</p>
                </div>
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { icon: PenTool, title: "Design 3D", desc: "Prototipagem digital para precisão milimétrica antes da fundição." },
                        { icon: Sparkles, title: "Cravação Microscópica", desc: "Pedras fixadas sob microscópio para brilho máximo e segurança total." },
                        { icon: Gem, title: "Gemologia Avançada", desc: "Espectrometria para garantir a autenticidade e origem de cada gema." },
                        { icon: Award, title: "Acabamento Manual", desc: "Polimento em 7 etapas para um brilho espelhado perfeito." }
                    ].map((item, i) => (
                        <div key={i} className="group p-6 bg-stone-50 border border-stone-100 hover:border-amber-200 transition-all text-center">
                            <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-stone-400 mb-4 shadow-sm group-hover:text-amber-600 group-hover:scale-110 transition-all">
                                <item.icon size={28} strokeWidth={1} />
                            </div>
                            <h4 className="font-bold text-stone-900 mb-2">{item.title}</h4>
                            <p className="text-xs text-stone-500 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. RESPONSABILIDADE AMBIENTAL */}
            <section className="py-24 relative overflow-hidden bg-stone-950 text-white">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="md:w-1/2">
                        <span className="text-green-500 text-xs font-bold uppercase tracking-widest mb-4 block flex items-center gap-2"><Globe size={14} /> Eco-Luxury</span>
                        <h2 className="font-playfair text-4xl mb-6">Ouro Verde & Ética</h2>
                        <p className="text-stone-300 font-light text-lg mb-6 leading-relaxed">
                            Sabemos que a beleza verdadeira não pode custar o bem-estar do planeta ou das pessoas. Por isso, 100% do nosso ouro provém de fontes certificadas de reciclagem ou mineração de baixo impacto.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-stone-400 font-light">
                                <div className="w-2 h-2 bg-green-500 rounded-full" /> Certificação Fairmined
                            </li>
                            <li className="flex items-center gap-4 text-stone-400 font-light">
                                <div className="w-2 h-2 bg-green-500 rounded-full" /> Processo Kimberley (Diamantes sem Conflito)
                            </li>
                            <li className="flex items-center gap-4 text-stone-400 font-light">
                                <div className="w-2 h-2 bg-green-500 rounded-full" /> Embalagens 100% Biodegradáveis
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 relative h-[500px] w-full border border-stone-800">
                        <Image src="https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2670&auto=format&fit=crop" alt="Ouro Bruto" fill className="object-cover opacity-80" />
                    </div>
                </div>
            </section>

        </div>
    );
}
