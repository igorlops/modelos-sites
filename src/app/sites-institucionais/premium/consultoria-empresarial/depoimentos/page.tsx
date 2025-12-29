"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Star, Quote, Building2, MapPin, CheckCircle2,
    ArrowRight, MessageSquare, ThumbsUp
} from "lucide-react";

export default function DepoimentosPage() {
    const testimonials = [
        {
            name: "Carlos Ferreira",
            role: "CEO",
            company: "Indústrias Metalúrgicas S.A.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
            text: "A Strategic foi o divisor de águas na nossa história. Estávamos com margens decrescentes há 5 anos. Em 12 meses de projeto de eficiência operacional, recuperamos a rentabilidade histórica e preparamos a empresa para o IPO.",
            rating: 5,
            sector: "Indústria"
        },
        {
            name: "Mariana Costa",
            role: "Diretora de RH e Cultura",
            company: "TechFin Solutions",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
            text: "A fusão de duas culturas corporativas fortes é sempre um desafio. A equipe de People da Strategic conduziu o processo com uma sensibilidade e técnica impressionantes. Retivemos 98% dos talentos chave.",
            rating: 5,
            sector: "Finanças"
        },
        {
            name: "Eduardo Santos",
            role: "Vice-Presidente de Operações",
            company: "Logística Nacional",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
            text: "O projeto de redesenho da malha logística se pagou em 4 meses. A profundidade técnica dos consultores e a capacidade de implementação 'hands-on' foram os diferenciais. Não ficaram apenas no PowerPoint.",
            rating: 5,
            sector: "Logística"
        },
        {
            name: "Fernanda Lima",
            role: "Founder & CEO",
            company: "Retail Innovators",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
            text: "Precisávamos pivotar nosso modelo de negócio para o digital. A Strategic trouxe benchmarks internacionais e nos ajudou a construir uma nova unidade de negócios que hoje representa 40% do faturamento.",
            rating: 5,
            sector: "Varejo"
        },
        {
            name: "Roberto Almeida",
            role: "CFO",
            company: "Grupo Farmacêutico Global",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
            text: "O trabalho de ZBB (Orçamento Base Zero) foi executado com maestria. Conseguimos liberar caixa para investir em R&D sem prejudicar a operação. Recomendo fortemente para qualquer CFO que precise de eficiência.",
            rating: 5,
            sector: "Saúde"
        },
        {
            name: "Patricia Silva",
            role: "Diretora de Inovação",
            company: "Energy Co.",
            image: "https://images.unsplash.com/photo-1598550874175-4d7112ee5370?q=80&w=1000&auto=format&fit=crop",
            text: "Montaram nosso programa de Corporate Venture Capital do zero. Hoje temos 5 startups investidas gerando valor estratégico real para a holding. Expertise de ponta a ponta.",
            rating: 5,
            sector: "Energia"
        }
    ];

    return (
        <div className="bg-slate-50 overflow-hidden font-sans">

            {/* 1. HERO DEPOIMENTOS */}
            <section className="bg-slate-900 text-white py-24 text-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-8 text-blue-400">
                        <Star size={14} className="fill-current" /> Excelência Reconhecida
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">O Que Nossos Clientes Dizem</h1>
                    <p className="text-xl text-slate-400 font-light mb-12">
                        A satisfação de quem confiou o futuro de seus negócios à nossa expertise.
                    </p>

                    <div className="flex flex-wrap justify-center gap-12 border-t border-slate-800 pt-12">
                        <div>
                            <p className="text-4xl font-bold text-white mb-2">4.9/5</p>
                            <div className="flex text-amber-500 gap-1 justify-center mb-2">
                                <Star className="fill-current" size={16} />
                                <Star className="fill-current" size={16} />
                                <Star className="fill-current" size={16} />
                                <Star className="fill-current" size={16} />
                                <Star className="fill-current" size={16} />
                            </div>
                            <p className="text-xs text-slate-500 uppercase font-bold">Média de Satisfação</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-white mb-2">+85</p>
                            <p className="text-blue-500 text-sm font-bold mb-2">NPS Score</p>
                            <p className="text-xs text-slate-500 uppercase font-bold">Zona de Excelência</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-white mb-2">92%</p>
                            <p className="text-green-500 text-sm font-bold mb-2">Retenção</p>
                            <p className="text-xs text-slate-500 uppercase font-bold">Recontratação</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. VIDEO DESTAQUE (CASE C-LEVEL) */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-12 flex flex-col justify-center">
                            <Quote size={48} className="text-blue-500 opacity-50 mb-6" />
                            <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight mb-8">
                                "Não contratamos apenas uma consultoria, ganhamos parceiros de negócio que vestiram a camisa e não descansaram até atingirmos a meta agressiva de EBITDA."
                            </blockquote>
                            <div>
                                <p className="text-white font-bold text-lg">Ricardo Goulart</p>
                                <p className="text-slate-400">CEO, Grupo Transnacional</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative min-h-[400px]">
                            <Image
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
                                alt="CEO Testimonial"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
                            <button className="absolute inset-0 flex items-center justify-center group">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/50">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. GRID DE DEPOIMENTOS */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-slate-100">
                                        <Image src={t.image} alt={t.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                                        <p className="text-xs text-slate-500">{t.role}</p>
                                        <p className="text-xs text-blue-600 font-bold uppercase mt-0.5">{t.company}</p>
                                    </div>
                                </div>
                                <div className="mb-6 grow">
                                    <div className="flex text-amber-400 gap-0.5 mb-3 text-xs">
                                        {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                                    </div>
                                    <p className="text-slate-600 text-sm italic leading-relaxed">"{t.text}"</p>
                                </div>
                                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.sector}</span>
                                    <Building2 size={16} className="text-slate-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WALL OF LOVE SIMULATION (COMPANIES) */}
            <section className="py-24 bg-white border-t border-slate-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-12 uppercase tracking-widest opacity-80">Empresas que confiam na Strategic</h2>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400 text-xs">
                                PARTNER {i}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA AGENDAMENTO */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center max-w-3xl">
                    <h2 className="text-4xl font-bold mb-8">Faça Parte Deste Grupo de Líderes</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Junte-se às empresas que estão redefinindo seus setores. Agende uma conversa exploratória sem compromisso.
                    </p>
                    <Link href="/sites-institucionais/premium/consultoria-empresarial/contato" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center gap-3">
                        <MessageSquare size={20} /> Falar com um Sócio
                    </Link>
                </div>
            </section>

        </div>
    );
}
