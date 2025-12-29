"use client";

import Image from "next/image";
import Link from "next/link";
import {
    History, Award, Users, Target,
    MapPin, CheckCircle2, Building2, HardHat
} from "lucide-react";

export default function SobrePage() {
    const timeline = [
        { year: "1999", title: "Fundação", desc: "Início das atividades com foco em sobrados de alto padrão." },
        { year: "2005", title: "Primeiro Edifício", desc: "Entrega do Residencial Alvorada, marco na zona sul." },
        { year: "2010", title: "Certificação ISO", desc: "Conquista da ISO 9001 e PBQP-H Nível A." },
        { year: "2015", title: "Expansão", desc: "Abertura de novos escritórios e expansão para cidades vizinhas." },
        { year: "2020", title: "10 Mil Lares", desc: "Marca histórica de 10.000 unidades entregues." },
        { year: "2024", title: "Inovação", desc: "Lançamento da linha Smart Living com automação residencial." },
    ];

    return (
        <div className="font-sans text-slate-700 bg-white overflow-hidden">

            {/* 1. HERO INSTITUCIONAL */}
            <section className="relative py-32 bg-slate-900 text-white mb-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop"
                        alt="Arquitetura"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
                </div>
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 relative z-10 text-center">
                    <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">25 Anos Construindo <span className="text-orange-500">Histórias</span></h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Mais do que concreto e aço, nossa matéria-prima é o sonho de milhares de famílias brasileiras. Conheça nossa trajetória de solidez e inovação.
                    </p>
                </div>
            </section>

            {/* 2. MISSÃO / VISÃO / VALORES */}
            <section className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 mb-32">
                <div className="grid lg:grid-cols-3 gap-12">
                    {[
                        { icon: Target, title: "Missão", desc: "Desenvolver empreendimentos que transformem a qualidade de vida, com excelência construtiva e respeito ao meio ambiente." },
                        { icon: CheckCircle2, title: "Visão", desc: "Ser reconhecida como a construtora mais confiável e inovadora da região, referência em pontualidade e acabamento." },
                        { icon: Award, title: "Valores", desc: "Ética inegociável, transparência total, segurança em primeiro lugar e compromisso absoluto com o cliente." }
                    ].map((item, i) => (
                        <div key={i} className="text-center p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-6 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                                <item.icon size={36} />
                            </div>
                            <h3 className="font-montserrat font-bold text-2xl text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. TIMELINE */}
            <section className="mb-32 bg-slate-50 py-24 overflow-hidden">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <h2 className="font-montserrat font-bold text-4xl text-center text-slate-900 mb-20">Nossa Jornada</h2>
                    <div className="relative">
                        {/* Linha Central */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-teal-200 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-12 md:space-y-0">
                            {timeline.map((item, i) => (
                                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                    <div className="w-full md:w-1/2 p-4 md:pl-16 md:pr-0 md:text-left text-center">
                                        {/* Espaço Vazio para alinhamento reverso */}
                                        {i % 2 === 0 && <div className="hidden md:block" />}
                                        {/* Conteúdo Real */}
                                        {i % 2 !== 0 && (
                                            <div className="md:text-right md:pr-16">
                                                <span className="font-black text-6xl text-teal-100 block mb-2">{item.year}</span>
                                                <h4 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-500">{item.desc}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative z-10 w-12 h-12 rounded-full bg-teal-600 border-4 border-white shadow-lg flex items-center justify-center shrink-0">
                                        <div className="w-3 h-3 bg-white rounded-full" />
                                    </div>

                                    <div className="w-full md:w-1/2 p-4 text-center md:text-left">
                                        {i % 2 === 0 ? (
                                            <div className="md:pl-16">
                                                <span className="font-black text-6xl text-teal-100 block mb-2">{item.year}</span>
                                                <h4 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-500">{item.desc}</p>
                                            </div>
                                        ) : (
                                            <div className="hidden md:block" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TEAM / LIDERANÇA */}
            <section className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 mb-32">
                <h2 className="font-montserrat font-bold text-4xl text-center text-slate-900 mb-16">Liderança que Inspira</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Carlos Andrade", role: "CEO & Fundador", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" },
                        { name: "Mariana Silva", role: "Diretora de Engenharia", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
                        { name: "Roberto Costa", role: "Diretor Comercial", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" }
                    ].map((person, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg">
                            <div className="aspect-[3/4] relative">
                                <Image src={person.img} alt={person.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                                <div className="absolute bottom-0 p-8 text-white">
                                    <h4 className="font-montserrat font-bold text-2xl mb-1">{person.name}</h4>
                                    <p className="text-teal-400 font-medium uppercase tracking-wider text-xs">{person.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. INFRAESTRUTURA / NUMEROS BIG */}
            <section className="py-24 bg-teal-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-montserrat font-bold text-4xl mb-6">Estrutura Sólida</h2>
                            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                                Contamos com uma equipe de mais de 500 colaboradores diretos, frota própria de maquinário pesado e um escritório central de 2.000m² no coração da cidade. Nossa capacidade produtiva nos permite gerir até 10 canteiros de obra simultâneos.
                            </p>
                            <ul className="space-y-4">
                                {["Maquinário de última geração", "Equipe de engenharia própria", "Laboratório de controle tecnológico", "Logística integrada"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold">
                                        <CheckCircle2 className="text-orange-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur text-center">
                                <Building2 size={40} className="mx-auto mb-4 text-orange-500" />
                                <span className="block text-4xl font-bold mb-1">2.000m²</span>
                                <span className="text-sm text-teal-200">Sede Própria</span>
                            </div>
                            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur text-center">
                                <Users size={40} className="mx-auto mb-4 text-orange-500" />
                                <span className="block text-4xl font-bold mb-1">500+</span>
                                <span className="text-sm text-teal-200">Colaboradores</span>
                            </div>
                            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur text-center">
                                <HardHat size={40} className="mx-auto mb-4 text-orange-500" />
                                <span className="block text-4xl font-bold mb-1">10</span>
                                <span className="text-sm text-teal-200">Obras Simultâneas</span>
                            </div>
                            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur text-center">
                                <MapPin size={40} className="mx-auto mb-4 text-orange-500" />
                                <span className="block text-4xl font-bold mb-1">5</span>
                                <span className="text-sm text-teal-200">Estados Atendidos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
