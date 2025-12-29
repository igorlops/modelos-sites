"use client";

import Image from "next/image";
import {
    Leaf, Globe, Award, Users, Target, Zap, CheckCircle2,
    MapPin, Clock, ShieldCheck, Heart, TreeDeciduous, Factory,
    TrendingUp, Award as Trophy, ArrowRight,
    Home
} from "lucide-react";

export default function SobrePage() {
    const milestones = [
        { year: "2015", title: "Fundação", desc: "Início das operações focada em projetos residenciais." },
        { year: "2017", title: "Expansão Regional", desc: "Abertura de filiais em 3 estados vizinhos." },
        { year: "2019", title: "Homologação ANEEL", desc: "Reconhecimento oficial como integrador premium." },
        { year: "2021", title: "Divisão Industrial", desc: "Criação de equipe especializada em grandes usinas." },
        { year: "2023", title: "Marco de 10k Clientes", desc: "Celebração de 10.000 instalações bem sucedidas." }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">

            {/* 1. HERO IMPACTO SUSTENTÁVEL */}
            <section className="relative py-28 bg-emerald-950 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop"
                        alt="Natureza e Tecnologia"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 to-emerald-900/50" />
                </div>

                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 mb-8 backdrop-blur text-emerald-300 font-bold uppercase tracking-widest text-xs">
                        <Leaf size={14} /> Sustentabilidade Real
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-8">Energia Limpa que <br /><span className="text-emerald-400">Transforma o Brasil</span></h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Não vendemos apenas painéis solares. Entregamos independência energética e um legado ambiental positivo para as próximas gerações.
                    </p>
                </div>
            </section>

            {/* 2. IMPACTO AMBIENTAL (PRIMEIRO) */}
            <section className="py-20 -mt-16 relative z-20">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="bg-white rounded-3xl shadow-2xl p-12 border border-emerald-100 grid md:grid-cols-4 gap-8 divide-x divide-slate-100 text-center">
                        <div className="px-4">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                                <Globe size={32} />
                            </div>
                            <div className="text-4xl font-bold text-slate-900 mb-2">150k</div>
                            <p className="text-sm text-slate-500 uppercase tracking-wide">Ton/CO₂ Evitadas</p>
                        </div>
                        <div className="px-4">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                                <TreeDeciduous size={32} />
                            </div>
                            <div className="text-4xl font-bold text-slate-900 mb-2">500k</div>
                            <p className="text-sm text-slate-500 uppercase tracking-wide">Árvores Preservadas</p>
                        </div>
                        <div className="px-4">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                                <Home size={32} />
                            </div>
                            <div className="text-4xl font-bold text-slate-900 mb-2">12k+</div>
                            <p className="text-sm text-slate-500 uppercase tracking-wide">Lares Sustentáveis</p>
                        </div>
                        <div className="px-4 border-none">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                                <Zap size={32} />
                            </div>
                            <div className="text-4xl font-bold text-slate-900 mb-2">450 MW</div>
                            <p className="text-sm text-slate-500 uppercase tracking-wide">Potência Instalada</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. NOSSA MISSÃO SOLAR */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute top-0 -left-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl opacity-50" />
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-display">Democratizar o acesso à energia solar no Brasil</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Acreditamos que o sol é a maior riqueza natural do nosso país. Nossa missão é converter essa abundância em prosperidade econômica para famílias e empresas.
                                </p>
                                <p>
                                    Trabalhamos incansavelmente para reduzir as barreiras de entrada, oferecendo tecnologia de ponta, financiamento acessível e uma experiência livre de burocracia.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <div className="flex gap-4 items-start">
                                    <Target className="text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Visão</h4>
                                        <p className="text-sm text-slate-500">Ser a referência nº 1 em qualidade e confiança no setor fotovoltaico nacional até 2030.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <Heart className="text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Valores</h4>
                                        <p className="text-sm text-slate-500">Transparência radical, excelência técnica e obsessão pelo cliente.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group">
                            <Image
                                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop"
                                alt="Inovação Solar"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-sky-950/90 to-transparent text-white">
                                <p className="font-bold text-xl">Centro de Tecnologia & Inovação</p>
                                <p className="text-sm opacity-80">São Paulo, SP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. JORNADA DA EMPRESA (TIMELINE) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="text-center mb-16">
                        <span className="text-sky-600 font-bold uppercase tracking-widest text-sm block mb-2">Nossa História</span>
                        <h2 className="text-4xl font-bold text-slate-900">Uma década de inovação</h2>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-sky-200 -z-10 -translate-y-1/2 hidden md:block" />
                        <div className="grid md:grid-cols-5 gap-8">
                            {milestones.map((milestone, idx) => (
                                <div key={idx} className="relative pt-8 md:pt-0 group">
                                    <div className="w-4 h-4 bg-sky-600 rounded-full border-4 border-white shadow-lg mx-auto mb-8 relative z-10 group-hover:scale-150 transition-transform hidden md:block" />
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                                        <span className="text-4xl font-black text-slate-200 absolute top-4 right-4 group-hover:text-amber-100 transition-colors">{milestone.year}</span>
                                        <h4 className="font-bold text-lg text-slate-900 mb-2 relative z-10">{milestone.title}</h4>
                                        <p className="text-sm text-slate-500 relative z-10">{milestone.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CERTIFICAÇÕES E HOMOLOGAÇÕES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Qualidade Certificada</h2>
                        <p className="text-slate-500">
                            Segurança é inegociável. Por isso, mantemos as certificações mais rigorosas do mercado nacional e internacional.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { name: "ANEEL", desc: "Instalações homologadas e regularizadas conforme resolução 482/687." },
                            { name: "INMETRO", desc: "Equipamentos classe A em eficiência energética testados em laboratório." },
                            { name: "ABGD", desc: "Membro ativo da Associação Brasileira de Geração Distribuída." },
                            { name: "ISO 9001", desc: "Processos de gestão da qualidade auditados anualmente." }
                        ].map((cert, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-amber-500 transition-colors">
                                <div className="w-20 h-20 bg-white shadow-md rounded-full flex items-center justify-center mb-6 text-amber-500 font-black text-xs">
                                    <ShieldCheck size={40} />
                                </div>
                                <h4 className="font-bold text-xl text-slate-900 mb-3">{cert.name}</h4>
                                <p className="text-sm text-slate-500">{cert.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. EQUIPE ESPECIALIZADA */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Mentes Brilhantes</h2>
                            <p className="text-slate-500 max-w-xl">
                                Nossa equipe é formada por engenheiros seniores e técnicos com certificação NR-10 e NR-35.
                            </p>
                        </div>
                        <button className="text-sky-600 font-bold border-b-2 border-sky-600 pb-1 hover:text-sky-700 transition-colors">
                            Conheça o time completo
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Dr. Ricardo Paiva", role: "Diretor Técnico", bio: "Engenheiro Eletricista com PhD em Renováveis pela USP." },
                            { name: "Eng. Ana Souza", role: "Projetos", bio: "Especialista em grandes usinas e sistemas off-grid." },
                            { name: "Carlos Mendes", role: "Coord. Instalação", bio: "15 anos de experiência em gestão de obras complexas." },
                            { name: "Juliana Costa", role: "Atendimento", bio: "Focada em garantir a melhor experiência pós-venda." }
                        ].map((member, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
                                <div className="aspect-square relative bg-slate-200">
                                    <Image
                                        src={`https://randomuser.me/api/portraits/${idx % 2 === 0 ? 'men' : 'women'}/${40 + idx}.jpg`}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-lg text-slate-900">{member.name}</h4>
                                    <p className="text-sky-600 font-medium text-xs uppercase mb-3">{member.role}</p>
                                    <p className="text-slate-500 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. INFRAESTRUTURA E TECNOLOGIA */}
            <section className="py-24 bg-sky-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold">Infraestrutura Robusta</h2>
                            <p className="text-lg text-sky-200 opacity-90">
                                Possuímos estoque próprio com mais de R$ 10 milhões em equipamentos para garantir agilidade na entrega. Nossa frota própria conta com 20 veículos equipados para instalação e manutenção.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Centro de distribuição de 2.000m²",
                                    "Laboratório de testes e pré-montagem",
                                    "Frota monitorada via satélite",
                                    "Softwares de engenharia alemães (PVsol)"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                                        <CheckCircle2 className="text-emerald-400" />
                                        <span className="font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-8">
                                <div className="h-40 bg-slate-800 rounded-2xl relative overflow-hidden"><Image src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2670&auto=format&fit=crop" alt="Estoque" fill className="object-cover" /></div>
                                <div className="h-56 bg-slate-800 rounded-2xl relative overflow-hidden"><Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2540&auto=format&fit=crop" alt="Frota" fill className="object-cover" /></div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-56 bg-slate-800 rounded-2xl relative overflow-hidden"><Image src="https://images.unsplash.com/photo-1504384308090-c54be3855091?q=80&w=2574&auto=format&fit=crop" alt="Laboratorio" fill className="object-cover" /></div>
                                <div className="h-40 bg-slate-800 rounded-2xl relative overflow-hidden"><Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" alt="Equipamentos" fill className="object-cover" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. NÚMEROS DE EXCELÊNCIA */}
            <section className="py-20 bg-emerald-600 text-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20 text-center">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-emerald-500/30">
                        <div>
                            <div className="text-5xl font-black mb-2">450</div>
                            <div className="uppercase text-sm tracking-widest font-bold text-emerald-100">Megawatts Instalados</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2">12k</div>
                            <div className="uppercase text-sm tracking-widest font-bold text-emerald-100">Projetos Concluídos</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2">08</div>
                            <div className="uppercase text-sm tracking-widest font-bold text-emerald-100">Estados Atendidos</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2">4.9</div>
                            <div className="uppercase text-sm tracking-widest font-bold text-emerald-100">Nota Média (NPS)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. RESPONSABILIDADE SOCIAL */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative aspect-video rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2613&auto=format&fit=crop"
                                alt="Projeto Social"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">Solar Social</span>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Iluminando Comunidades</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Para cada 100kW instalados, doamos 1 sistema completo para uma instituição carente ou comunidade isolada.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Já beneficiamos mais de 50 ONGs e levamos luz para 200 famílias ribeirinhas na Amazônia através do projeto "Luz para Todos".
                            </p>
                            <button className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all">
                                Conheça nossas ações sociais <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. PRÊMIOS E RECONHECIMENTOS */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-20 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Excelência Reconhecida</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { year: "2023", name: "Melhor Integrador Regional", org: "Greener Awards" },
                            { year: "2022", name: "Destaque Sustentabilidade", org: "Prêmio Eco" },
                            { year: "2021", name: "Top 10 Qualidade", org: "Solar View" },
                        ].map((award, i) => (
                            <div key={i} className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                                    <Trophy size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-slate-400">{award.year}</p>
                                    <h4 className="font-bold text-slate-900">{award.name}</h4>
                                    <p className="text-xs text-slate-500">{award.org}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. CTA FINAL */}
            <section className="py-24 bg-gradient-to-br from-sky-900 to-sky-950 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Faça Parte dessa Revolução</h2>
                    <p className="text-xl text-sky-200 mb-12 max-w-2xl mx-auto">
                        Energia limpa, economia real e um futuro sustentável. Tudo isso começa com uma decisão sua hoje.
                    </p>
                    <button className="px-10 py-5 bg-amber-500 hover:bg-amber-400 text-sky-950 font-bold rounded-xl text-lg shadow-xl shadow-amber-900/20 hover:scale-105 transition-all duration-300">
                        Junte-se a Nós
                    </button>
                </div>
            </section>

        </div>
    );
}
