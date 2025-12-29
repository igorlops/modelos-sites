"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, MapPin } from "lucide-react";

export default function PortfolioPage() {
    const [filter, setFilter] = useState("Todos");

    const projects = [
        {
            id: 1,
            title: "Residência Alto da Boa Vista",
            category: "Residencial",
            location: "São Paulo, SP",
            year: "2023",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
            desc: "Uma casa de 800m² integrada à natureza, com uso extensivo de concreto aparente e madeira. O projeto prioriza a privacidade da família sem abrir mão da luminosidade natural."
        },
        {
            id: 2,
            title: "Penthouse Jardins",
            category: "Interiores",
            location: "São Paulo, SP",
            year: "2022",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
            desc: "Reforma completa de cobertura triplex. O conceito 'galeria habitável' guiou a escolha de materiais neutros para destacar a coleção de arte contemporânea dos proprietários."
        },
        {
            id: 3,
            title: "Sede TechSolutions",
            category: "Corporativo",
            location: "Barueri, SP",
            year: "2023",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
            desc: "Espaço de 2.000m² projetado para fomentar a colaboração. Áreas de descompressão, cabines de foco e um auditório modular definem a nova cultura da empresa."
        },
        {
            id: 4,
            title: "Loft Vila Madalena",
            category: "Reforma",
            location: "São Paulo, SP",
            year: "2021",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop",
            desc: "Transformação de antigo galpão industrial em loft residencial. As vigas metálicas originais foram restauradas e contrastam com o mobiliário de design italiano."
        },
        {
            id: 5,
            title: "Casa de Campo",
            category: "Residencial",
            location: "Itu, SP",
            year: "2022",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
            desc: "Refúgio de fim de semana com arquitetura vernacular contemporânea. Telhado verde, captação de água pluvial e energia solar tornam a casa autossuficiente."
        },
        {
            id: 6,
            title: "Restaurante Origem",
            category: "Comercial",
            location: "Pinheiros, SP",
            year: "2023",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
            desc: "Projeto sensorial onde a arquitetura complementa a gastronomia. Iluminação dramática e texturas naturais criam uma atmosfera intimista e sofisticada."
        },
        {
            id: 7,
            title: "Apartamento Itaim",
            category: "Interiores",
            location: "São Paulo, SP",
            year: "2021",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop",
            desc: "Maximização de espaço em apartamento compacto de luxo. Marcenaria inteligente e paredes móveis permitem múltiplas configurações de uso."
        },
        {
            id: 8,
            title: "Clínica Dermatológica",
            category: "Comercial",
            location: "Moema, SP",
            year: "2022",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2670&auto=format&fit=crop",
            desc: "Ambiente que transmite pureza e tecnologia. A paleta branca e off-white, combinada com formas orgânicas, acolhe os pacientes com elegância."
        },
        {
            id: 9,
            title: "Fazenda Histórica",
            category: "Reforma",
            location: "Campinas, SP",
            year: "2020",
            image: "https://images.unsplash.com/photo-1505691938895-1758d7bab58d?q=80&w=2670&auto=format&fit=crop",
            desc: "Restauro e modernização de sede de fazenda do século XIX. Respeito ao patrimônio histórico com inserção de infraestrutura contemporânea invisível."
        }
    ];

    const categories = ["Todos", "Residencial", "Interiores", "Corporativo", "Comercial", "Reforma"];

    const filteredProjects = filter === "Todos"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="pt-24 min-h-screen bg-stone-50">
            {/* 1. Hero Portfolio */}
            <section className="py-20 bg-white border-b border-stone-200">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">Nosso Legado</span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-900 mb-8">Portfólio Selecionado</h1>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                        Uma curadoria dos projetos que melhor representam nossa filosofia de design: atemporalidade, funcionalidade e sofisticação.
                    </p>
                </div>
            </section>

            {/* 2. Filtros */}
            <section className="py-12 sticky top-24 z-30 bg-stone-50/95 backdrop-blur border-b border-stone-200 transition-all">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${filter === cat
                                        ? "bg-stone-900 text-white shadow-lg transform scale-105"
                                        : "bg-white text-stone-500 hover:bg-stone-200 hover:text-stone-800 border border-stone-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Grid de Projetos */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-all duration-500" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-stone-900">
                                        {project.category}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-1 group-hover:text-amber-600 transition-colors">{project.title}</h3>
                                            <div className="flex items-center gap-2 text-stone-500 text-sm">
                                                <MapPin size={14} /> {project.location} • {project.year}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-stone-600 mb-8 line-clamp-3 leading-relaxed flex-grow">
                                        {project.desc}
                                    </p>

                                    <Link href="#" className="inline-flex items-center gap-2 text-stone-900 font-bold border-b-2 border-stone-200 pb-1 hover:border-amber-600 hover:text-amber-600 transition-all self-start">
                                        Ver Case Completo <ArrowUpRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 text-stone-500">
                            <Filter size={48} className="mx-auto mb-4 opacity-50" />
                            <p className="text-xl">Nenhum projeto encontrado nesta categoria.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* 4. Case Destacado */}
            <section className="py-24 bg-stone-900 text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Case do Mês</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Casa Horizonte</h2>
                            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
                                Um desafio de engenharia e design: construir uma residência de 1.200m² em um terreno com 45 graus de inclinação, preservando 100% das árvores nativas existentes.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div>
                                    <div className="text-3xl font-bold text-amber-500 mb-1">1.200m²</div>
                                    <div className="text-stone-400 text-sm uppercase">Área Construída</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-amber-500 mb-1">18 Meses</div>
                                    <div className="text-stone-400 text-sm uppercase">Tempo de Obra</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-amber-500 mb-1">Design Biofílico</div>
                                    <div className="text-stone-400 text-sm uppercase">Conceito Central</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-amber-500 mb-1">LEED Gold</div>
                                    <div className="text-stone-400 text-sm uppercase">Certificação</div>
                                </div>
                            </div>

                            <button className="px-8 py-4 bg-white text-stone-900 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all duration-300">
                                Ler História Completa
                            </button>
                        </div>

                        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-stone-700 group">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop"
                                alt="Casa Horizonte"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8">Gostou do que viu?</h2>
                    <Link
                        href="/sites-institucionais/premium/arquitetura-design-interiores/contato"
                        className="inline-block px-12 py-6 bg-stone-900 text-white rounded-full font-bold text-xl hover:bg-amber-600 transition-all duration-300 shadow-xl"
                    >
                        Solicitar Proposta para Meu Projeto
                    </Link>
                </div>
            </section>
        </div>
    );
}
