"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Filter, ZoomIn, Play, Activity, Calendar, User,
    ArrowRight, Sparkles, CheckCircle2, TrendingUp, Instagram
} from "lucide-react";

export default function PortfolioPage() {
    const [filter, setFilter] = useState("all");

    const categories = [
        { id: "all", label: "Todos os Resultados" },
        { id: "facial", label: "Facial" },
        { id: "corporal", label: "Corporal" },
        { id: "intimo", label: "Íntimo/Ginecológico" },
    ];

    const cases = [
        {
            id: 1,
            category: "facial",
            title: "Harmonização de Mandíbula",
            desc: "Definição do contorno mandibular e projeção do mento, trazendo mais força e elegância ao perfil.",
            procedure: "Preenchimento com Ácido Hialurônico",
            sessions: "1 Sessão",
            recovery: "3 dias",
            age: "34 anos",
            imageBefore: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
            imageAfter: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 2,
            category: "corporal",
            title: "Protocolo CrioSculpt",
            desc: "Redução significativa de gordura abdominal e flancos após ciclo completo de criolipólise.",
            procedure: "Criolipólise 360º + Drenagem",
            sessions: "2 Sessões",
            recovery: "Imediata",
            age: "41 anos",
            imageBefore: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop",
            imageAfter: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 3,
            category: "facial",
            title: "Rejuvenescimento Olhar",
            desc: "Tratamento de olheiras profundas e pés de galinha, devolvendo o aspecto descansado.",
            procedure: "Preenchimento + Botox",
            sessions: "1 Sessão",
            recovery: "2 dias",
            age: "45 anos",
            imageBefore: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?q=80&w=2670&auto=format&fit=crop",
            imageAfter: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=2695&auto=format&fit=crop"
        },
        {
            id: 4,
            category: "facial",
            title: "Rinomodelação",
            desc: "Correção de giba nasal e elevação da ponta sem cirurgia.",
            procedure: "Ácido Hialurônico de Alta Densidade",
            sessions: "1 Sessão",
            recovery: "5 dias",
            age: "29 anos",
            imageBefore: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2664&auto=format&fit=crop",
            imageAfter: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop"
        },
        {
            id: 5,
            category: "corporal",
            title: "Tratamento de Celulite",
            desc: "Melhora visível da textura da pele e redução dos 'furinhos' nos glúteos e coxas.",
            procedure: "Bioestimulador + Subcision",
            sessions: "3 Sessões",
            recovery: "3 dias",
            age: "38 anos",
            imageBefore: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop",
            imageAfter: "https://images.unsplash.com/photo-1516549655169-df83dc53650d?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    const filteredCases = filter === "all" ? cases : cases.filter(c => c.category === filter);

    return (
        <div className="bg-neutral-50 overflow-hidden">

            {/* 1. HERO PORTFÓLIO */}
            <section className="relative py-24 bg-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop"
                        alt="Resultados"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center max-w-4xl">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in">Galeria de Transformações</span>
                    <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8 animate-fade-in-up">
                        Resultados que Falam <br /><span className="text-rose-400">Por Si Mesmos</span>
                    </h1>
                    <p className="text-xl text-neutral-300 font-light leading-relaxed mb-8 animate-fade-in-up delay-100">
                        Veja casos reais de pacientes que confiaram em nossa expertise para realçar sua beleza natural.
                    </p>
                    <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-xs text-neutral-400 animate-fade-in delay-200">
                        *As imagens são meramente ilustrativas e os resultados podem variar de acordo com as características individuais de cada paciente.
                    </div>
                </div>
            </section>

            {/* 2. FILTROS E GALERIA */}
            <section className="py-24 bg-white min-h-screen">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 text-sm ${filter === cat.id
                                        ? "bg-neutral-900 text-white shadow-lg"
                                        : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100"
                                    }`}
                            >
                                {filter === cat.id && <CheckCircle2 size={16} />}
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {filteredCases.map((item) => (
                            <div key={item.id} className="bg-neutral-50 rounded-[3rem] p-8 hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-rose-100">
                                <div className="relative h-[400px] rounded-[2rem] overflow-hidden mb-8 grid grid-cols-2 gap-1">
                                    <div className="relative h-full">
                                        <Image src={item.imageBefore} alt="Antes" fill className="object-cover" />
                                        <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Antes</div>
                                    </div>
                                    <div className="relative h-full">
                                        <Image src={item.imageAfter} alt="Depois" fill className="object-cover" />
                                        <div className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Depois</div>
                                    </div>
                                </div>

                                <div className="px-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-rose-500 text-xs font-bold uppercase tracking-widest mb-1 block">{item.procedure}</span>
                                            <h3 className="font-serif text-3xl font-bold text-neutral-900">{item.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-neutral-500 mb-8 leading-relaxed font-light">
                                        {item.desc}
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 py-6 border-t border-neutral-200">
                                        <div>
                                            <p className="text-xs text-neutral-400 uppercase font-bold mb-1">Cura</p>
                                            <p className="text-neutral-800 font-bold">{item.recovery}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-400 uppercase font-bold mb-1">Sessões</p>
                                            <p className="text-neutral-800 font-bold">{item.sessions}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-400 uppercase font-bold mb-1">Idade</p>
                                            <p className="text-neutral-800 font-bold">{item.age}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CASE STUDY DETALHADO */}
            <section className="py-24 bg-rose-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 relative bg-neutral-900 h-[600px] lg:h-auto">
                            <Image
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                                alt="Case Study"
                                fill
                                className="object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <p className="text-white font-serif text-4xl mb-2">Rejuvenescimento Global</p>
                                <p className="text-rose-300">Paciente 52 anos • Protocolo 6 meses</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                            <h3 className="text-rose-600 font-bold uppercase tracking-widest mb-6">Estudo de Caso</h3>
                            <h2 className="font-serif text-4xl text-neutral-900 mb-8">A Jornada da Transformação</h2>
                            <div className="space-y-6 text-neutral-600 leading-relaxed font-light">
                                <p>
                                    A paciente chegou à clínica com queixa de "rosto cansado" e perda de contorno. Após avaliação tridimensional, elaboramos um protocolo combinando Ultraformer III para lifting muscular e Bioestimuladores para qualidade de pele.
                                </p>
                                <p>
                                    Ao longo de 6 meses, realizamos 3 sessões. O resultado foi uma reestruturação completa da face, com elevação das sobrancelhas, definição da mandíbula e melhora da papada, sem perder a naturalidade.
                                </p>
                            </div>
                            <div className="mt-12 flex items-center gap-6">
                                <div className="flex -space-x-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-neutral-200"></div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-neutral-300"></div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-neutral-400 flex items-center justify-center text-xs font-bold">+50</div>
                                </div>
                                <Link href="/sites-institucionais/premium/clinica-estetica-avancada/contato" className="text-rose-600 font-bold hover:text-rose-700 flex items-center gap-2">
                                    Quero uma avaliação similar <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. INSTAGRAM FEED */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
                    <h2 className="font-serif text-4xl text-neutral-900 mb-4">Siga @LumiereEsthetique</h2>
                    <p className="text-neutral-500 mb-12">Bastidores, dicas e mais resultados diários em nosso Instagram.</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative aspect-square group overflow-hidden rounded-2xl cursor-pointer">
                                <Image
                                    src={`https://source.unsplash.com/random/400x400/?aesthetic,skin,beauty,${i}`}
                                    alt="Instagram"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-rose-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                                    <Instagram size={32} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link href="https://instagram.com" className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <Instagram size={20} /> Seguir no Instagram
                    </Link>
                </div>
            </section>

        </div>
    );
}
