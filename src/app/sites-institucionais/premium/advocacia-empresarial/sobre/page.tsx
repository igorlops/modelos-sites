"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Building2, Scale, Target,
    Award, Sliders, Users,
    MapPin, CheckCircle2, TrendingUp,
    Landmark, ArrowRight, Gavel
} from "lucide-react";

export default function SobrePage() {
    const history = [
        { year: "1995", title: "Fundação", desc: "O escritório nasce com foco exclusivo em Direito Comercial no centro de São Paulo." },
        { year: "2002", title: "Expansão da Banca", desc: "Entrada de novos sócios e abertura das áreas Trabalhista e Tributária." },
        { year: "2010", title: "Sede Própria", desc: "Mudança para a Avenida Paulista, consolidando a estrutura física premium." },
        { year: "2018", title: "Internacionalização", desc: "Parcerias estratégicas com escritórios em NY e Lisboa para atender clientes globais." },
        { year: "2023", title: "Reconhecimento", desc: "Eleito entre os 50 escritórios mais admirados do Brasil pela Análise Advocacia." }
    ];

    return (
        <div className="bg-stone-50 overflow-hidden font-sans">

            {/* 1. HERO INSTITUCIONAL */}
            <section className="bg-slate-900 text-white py-24 relative border-b-4 border-amber-800">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop"
                        alt="Escritório"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
                </div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Nossa História</span>
                        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Tradição e Ética na Defesa do <span className="text-amber-500 italic">Seu Legado</span>
                        </h1>
                        <p className="text-xl text-stone-300 font-light leading-relaxed mb-8">
                            Há três décadas construindo soluções jurídicas sólidas para empresas que moldam o futuro do Brasil.
                        </p>
                    </div>
                    <div className="hidden md:block relative h-full min-h-[300px]">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 border-[20px] border-amber-800/20 rounded-full" />
                        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-96 h-96 border-[1px] border-slate-700 rounded-full" />
                    </div>
                </div>
            </section>

            {/* 2. MISSÃO VISÃO VALORES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-stone-50 p-8 rounded-lg border-t-4 border-amber-700 shadow-sm">
                            <Target className="text-amber-700 mb-6" size={40} strokeWidth={1.5} />
                            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Missão</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Prover segurança jurídica e soluções estratégicas para o crescimento sustentável de nossos clientes, atuando com excelência técnica, ética inegociável e compromisso com resultados.
                            </p>
                        </div>
                        <div className="bg-stone-50 p-8 rounded-lg border-t-4 border-slate-900 shadow-sm">
                            <TrendingUp className="text-slate-900 mb-6" size={40} strokeWidth={1.5} />
                            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Visão</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Ser reconhecido nacionalmente como o parceiro jurídico mais confiável para grandes corporações, liderando pela inovação no direito e pela formação de talentos excepcionais.
                            </p>
                        </div>
                        <div className="bg-stone-50 p-8 rounded-lg border-t-4 border-amber-600 shadow-sm">
                            <Scale className="text-amber-600 mb-6" size={40} strokeWidth={1.5} />
                            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Valores</h3>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-600" /> Ética e Transparência</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-600" /> Excelência Técnica</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-600" /> Comprometimento</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-600" /> Sigilo Profissional</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HISTÓRIA (TIMELINE) */}
            <section className="py-24 bg-stone-100 relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Nossa Trajetória</h2>
                        <div className="w-24 h-1 bg-amber-700 mx-auto" />
                    </div>

                    <div className="relative">
                        {/* Central Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 w-0.5 h-full bg-slate-300 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {history.map((item, idx) => (
                                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                                    <div className="w-full md:w-[45%] mb-4 md:mb-0">
                                        <div className={`bg-white p-8 rounded-lg shadow-md border border-slate-200 text-left ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                            <span className="text-4xl font-serif font-bold text-amber-700/20 block mb-2">{item.year}</span>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-amber-700 rounded-full border-4 border-stone-100 md:-translate-x-1/2 shadow-lg" />
                                    <div className="w-full md:w-[45%]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SÓCIOS FUNDADORES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="font-serif text-4xl font-bold text-slate-900 mb-16 text-center">Sócios Fundadores</h2>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {[
                            {
                                name: "Dr. Carlos Mendes",
                                role: "Sócio Sênior | Direito Empresarial",
                                oab: "OAB/SP 12.345",
                                bio: "Doutor em Direito Comercial pela USP e Mestre pela Harvard Law School. Com mais de 35 anos de experiência, liderou algumas das maiores operações de M&A do país nos últimos anos.",
                                areas: ["M&A", "Societário", "Governança"],
                                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
                            },
                            {
                                name: "Dra. Ana Paula Torres",
                                role: "Sócia Sênior | Direito Tributário",
                                oab: "OAB/SP 67.890",
                                bio: "Ex-Conselheira do CARF e Professora Titular da PUC-SP. Especialista em contencioso tributário estratégico e planejamento fiscal para multinacionais.",
                                areas: ["Tributário", "Planejamento Fiscal", "Contencioso"],
                                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                            }
                        ].map((partner, idx) => (
                            <div key={idx} className="flex flex-col lg:flex-row gap-8 items-start bg-stone-50 p-8 rounded-xl border border-stone-200 hover:shadow-xl transition-shadow">
                                <div className="w-full lg:w-48 h-64 lg:h-48 relative rounded-lg overflow-hidden shrink-0 border border-slate-200">
                                    <Image src={partner.img} alt={partner.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">{partner.name}</h3>
                                    <p className="text-amber-700 font-bold text-xs uppercase tracking-wider mb-1">{partner.role}</p>
                                    <p className="text-slate-400 text-xs font-mono mb-4">{partner.oab}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 italic border-l-2 border-amber-200 pl-4">"{partner.bio}"</p>

                                    <div className="flex flex-wrap gap-2">
                                        {partner.areas.map((area, i) => (
                                            <span key={i} className="bg-slate-200 text-slate-600 px-3 py-1 rounded text-[10px] font-bold uppercase">{area}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. INFRAESTRUTURA & ESCRITÓRIOS */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 text-center">
                    <h2 className="font-serif text-3xl font-bold mb-12">Estrutura de Excelência</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-2 row-span-2 relative h-[500px] rounded-lg overflow-hidden border border-slate-700 group">
                            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop" alt="Recepção" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-left">
                                <p className="font-bold text-lg">Sede São Paulo - Av. Paulista</p>
                                <p className="text-sm text-slate-300">Infraestrutura completa com 1.200m²</p>
                            </div>
                        </div>
                        <div className="relative h-60 rounded-lg overflow-hidden border border-slate-700 group">
                            <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2670&auto=format&fit=crop" alt="Sala de Reunião" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-left">
                                <p className="font-bold text-sm">Salas de Conferência</p>
                            </div>
                        </div>
                        <div className="relative h-60 rounded-lg overflow-hidden border border-slate-700 group">
                            <Image src="https://images.unsplash.com/photo-1419641423869-fcc6f0872852?q=80&w=2670&auto=format&fit=crop" alt="Biblioteca" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-left">
                                <p className="font-bold text-sm">Biblioteca Jurídica</p>
                            </div>
                        </div>
                        <div className="col-span-2 h-60 bg-slate-800 rounded-lg p-8 text-left flex flex-col justify-center border border-slate-700">
                            <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3"><Landmark className="text-amber-500" /> Presença Global</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Além da nossa sede em São Paulo, mantemos correspondentes e parcerias estratégicas nas principais capitais do Brasil e nos centros financeiros de Nova York, Londres e Lisboa.
                            </p>
                            <Link href="/sites-institucionais/premium/advocacia-empresarial/contato" className="text-amber-500 font-bold text-sm hover:text-white transition-colors flex items-center gap-2">
                                Ver Endereços <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CERTIFICAÇÕES */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <p className="text-center text-slate-400 font-bold text-xs uppercase tracking-widest mb-8">Filiações e Reconhecimentos</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-2 flex items-center justify-center font-serif font-bold text-slate-400">OAB</div>
                            <p className="text-[10px] font-bold">Ordem dos Advogados</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-2 flex items-center justify-center font-serif font-bold text-slate-400">AASP</div>
                            <p className="text-[10px] font-bold">Assoc. dos Advogados</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-2 flex items-center justify-center font-serif font-bold text-slate-400 text-xs text-center p-1">Análise<br />Advocacia</div>
                            <p className="text-[10px] font-bold">Ranking Top 50</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-2 flex items-center justify-center font-serif font-bold text-slate-400">CESA</div>
                            <p className="text-[10px] font-bold">C. Estudos S. Adv.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
