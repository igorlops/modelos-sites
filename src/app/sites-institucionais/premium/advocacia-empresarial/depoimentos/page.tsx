"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Quote, Star, Building,
    Award, Globe, Newspaper,
    MonitorPlay, CheckCircle
} from "lucide-react";

export default function DepoimentosPage() {
    const testimonials = [
        {
            name: "Roberto Almeida",
            role: "CEO",
            company: "Grupo Industrial Alpha",
            text: "A capacidade técnica e a visão estratégica da Imperium foram fundamentais para a nossa reestruturação societária. É raro encontrar advogados que entendam tão bem de negócios quanto de leis.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Fernanda Costa",
            role: "Diretora Jurídica",
            company: "TechSolutions Global",
            text: "Nossa operação de M&A foi conduzida com perfeição. O due diligence foi minucioso e nos poupou milhões em passivos ocultos. A equipe é incansável e extremamente competente.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Carlos Eduardo",
            role: "CFO",
            company: "Varejo Nacional S.A.",
            text: "No contencioso tributário, eles reverteram um cenário que parecia impossível. A tese desenvolvida foi brilhante e aceita integralmente pelo CARF.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-stone-50 overflow-hidden font-sans">

            {/* 1. HERO DEPOIMENTOS */}
            <section className="bg-slate-900 text-white py-24 relative border-b-4 border-amber-800">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2674&auto=format&fit=crop"
                        alt="Reunião Executiva"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-transparent" />
                </div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center max-w-4xl">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Reconhecimento de Mercado</span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">A Confiança de Grandes Líderes</h1>
                    <p className="text-xl text-stone-300 font-light leading-relaxed mb-12">
                        Nossa reputação é construída sobre resultados sólidos e relacionamentos de longo prazo com as principais empresas do país.
                    </p>
                </div>
            </section>

            {/* 2. RECONHECIMENTO DA MÍDIA & RANKINGS */}
            <section className="py-16 bg-white border-b border-stone-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <p className="text-center text-slate-400 font-bold text-xs uppercase tracking-widest mb-10">Reconhecido Pelos Principais Guias Legais</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="text-center group">
                            <div className="text-2xl font-serif font-bold text-slate-800 mb-1 group-hover:text-amber-700">Chambers</div>
                            <p className="text-[10px] font-bold uppercase text-slate-500">& Partners</p>
                        </div>
                        <div className="text-center group">
                            <div className="text-2xl font-serif font-bold text-slate-800 mb-1 group-hover:text-amber-700">The Legal 500</div>
                            <p className="text-[10px] font-bold uppercase text-slate-500">Latin America</p>
                        </div>
                        <div className="text-center group">
                            <div className="text-2xl font-serif font-bold text-slate-800 mb-1 group-hover:text-amber-700">Latin Lawyer</div>
                            <p className="text-[10px] font-bold uppercase text-slate-500">250</p>
                        </div>
                        <div className="text-center group">
                            <div className="text-2xl font-serif font-bold text-slate-800 mb-1 group-hover:text-amber-700">Análise</div>
                            <p className="text-[10px] font-bold uppercase text-slate-500">Advocacia 500</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TESTIMONIALS SLIDER (SIMULATED) */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {testimonials.map((testim, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-xl border border-stone-200 shadow-lg relative group hover:-translate-y-2 transition-transform duration-500">
                                <Quote size={40} className="text-amber-700/20 absolute top-8 right-8" />

                                <div className="flex items-center gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="text-amber-500 fill-amber-500" />)}
                                </div>

                                <p className="text-slate-600 leading-relaxed mb-8 italic relative z-10">"{testim.text}"</p>

                                <div className="flex items-center gap-4 border-t border-stone-100 pt-6">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                                        <Image src={testim.image} alt={testim.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">{testim.name}</p>
                                        <p className="text-xs text-slate-500 font-bold uppercase">{testim.role}</p>
                                        <p className="text-xs text-amber-700 font-medium">{testim.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. VÍDEO TESTIMONIAL */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Case em Vídeo</span>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">"Eles salvaram nossa operação no Brasil"</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
                                Confira o relato do Country Manager da Global Tech Inc. sobre como a Imperium conduziu a defesa regulatória que permitiu a continuidade dos negócios da multinacional no país.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">L</div>
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-slate-400">+150 Clientes Satisfeitos este ano</span>
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full">
                            <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700 group cursor-pointer">
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                                    alt="Video Thumbnail"
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-amber-600/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-amber-600 transition-colors shadow-lg shadow-amber-900/40">
                                        <MonitorPlay size={32} className="text-white ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. NA IMPRENSA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-12 text-center">Imperium na Mídia</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { outlet: "Valor Econômico", title: "Escritório Imperium lidera ranking de M&A no setor de infraestrutura", date: "12/11/2024" },
                            { outlet: "Estadão", title: "Nova tese tributária desenvolvida por sócios da Imperium economiza R$ 500mi para o varejo", date: "05/10/2024" },
                            { outlet: "Exame", title: "Compliance: Imperium alerta para novas regras da CVM em 2025", date: "22/09/2024" },
                            { outlet: "ConJur", title: "Dr. Carlos Mendes é eleito para a presidência da Comissão de Direito Societário", date: "15/08/2024" }
                        ].map((news, idx) => (
                            <div key={idx} className="flex gap-6 items-start p-6 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-300 transition-colors group cursor-pointer">
                                <div className="w-12 h-12 bg-white rounded border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-amber-700 transition-colors shadow-sm shrink-0">
                                    <Newspaper size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">{news.outlet}</span>
                                        <span className="text-xs text-slate-400">• {news.date}</span>
                                    </div>
                                    <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug group-hover:text-amber-800 transition-colors">{news.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA FINAL */}
            <section className="bg-amber-700 py-16 text-white text-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="font-serif text-3xl font-bold mb-6">Excelência Comprovada</h2>
                    <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                        Junte-se ao grupo de empresas que confiam a segurança de seus negócios à Imperium.
                    </p>
                    <Link href="/sites-institucionais/premium/advocacia-empresarial/contato" className="inline-block bg-slate-900 px-8 py-4 rounded font-bold hover:bg-slate-800 transition-colors shadow-xl">
                        Solicitar Credenciais Completas
                    </Link>
                </div>
            </section>

        </div>
    );
}
