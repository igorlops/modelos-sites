"use client";

import Image from "next/image";
import Link from "next/link";
import {
    CheckCircle2, MapPin, Calendar,
    ArrowRight, Award, TrendingUp
} from "lucide-react";

export default function PortfolioPage() {
    const delivered = [
        {
            name: "Residencial Jardins",
            bairro: "Bela Vista",
            year: "2023",
            units: "120",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop",
            desc: "Um marco na arquitetura da região com fachada ativa."
        },
        {
            name: "Torres da Praça",
            bairro: "Pinheiros",
            year: "2022",
            units: "180",
            image: "https://images.unsplash.com/photo-1460317442991-0ec2aa247f7b?q=80&w=2688&auto=format&fit=crop",
            desc: "Sucesso absoluto de vendas, 100% vendido no lançamento."
        },
        {
            name: "Essência Home",
            bairro: "Moema",
            year: "2021",
            units: "80",
            image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2670&auto=format&fit=crop",
            desc: "Alto padrão com certificação LEED de sustentabilidade."
        },
        {
            name: "Urban Life",
            bairro: "Centro",
            year: "2020",
            units: "240",
            image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop",
            desc: "Compactos inteligentes para o novo estilo de morar."
        },
        {
            name: "Vila Germânica",
            bairro: "Brooklin",
            year: "2019",
            units: "150",
            image: "https://images.unsplash.com/photo-1574362848149-11496d97a7bc?q=80&w=2569&auto=format&fit=crop",
            desc: "Inspirado na arquitetura europeia, entregue antecipadamente."
        },
        {
            name: "Horizonte Sul",
            bairro: "Vila Mariana",
            year: "2018",
            units: "90",
            image: "https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=2670&auto=format&fit=crop",
            desc: "Varandas gourmet em todas as unidades."
        }
    ];

    return (
        <div className="bg-slate-50 font-sans text-slate-700">

            {/* 1. HERO PORTFOLIO */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 relative z-10 text-center">
                    <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">Nosso <span className="text-teal-500">Legado</span></h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                        35 empreendimentos entregues rigorosamente no prazo. Mais de 12.000 sonhos realizados.
                    </p>
                    <div className="flex justify-center gap-8 text-center">
                        <div>
                            <span className="block text-4xl font-bold text-orange-500">100%</span>
                            <span className="text-xs uppercase tracking-widest text-slate-500">No Prazo</span>
                        </div>
                        <div className="w-px bg-slate-700" />
                        <div>
                            <span className="block text-4xl font-bold text-teal-500">500K</span>
                            <span className="text-xs uppercase tracking-widest text-slate-500">m² Construídos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. GRID OBRAS ENTREGUES */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">

                    {/* Filter Tabs Mockup */}
                    <div className="flex justify-center mb-16">
                        <div className="inline-flex bg-white p-1 rounded-xl shadow-md border border-slate-100 overflow-hidden">
                            {["Todos", "2023", "2022", "2021", "Anteriores"].map((tab, i) => (
                                <button key={i} className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${i === 0 ? "bg-slate-900 text-white shadow-lg" : "text-slate-500 hover:bg-slate-50"}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {delivered.map((item, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative h-80 rounded-2xl overflow-hidden mb-6 shadow-lg">
                                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                                    <div className="absolute inset-0 bg-slate-900/50 group-hover:opacity-0 transition-opacity duration-500" />

                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase text-slate-900 flex items-center gap-1 shadow-lg">
                                        <CheckCircle2 size={14} className="text-green-600" /> Entregue {item.year}
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-montserrat font-bold text-2xl text-slate-900 group-hover:text-teal-700 transition-colors">{item.name}</h3>
                                        <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-bold uppercase">{item.units} Units</span>
                                    </div>
                                    <p className="flex items-center gap-1 text-sm font-bold text-orange-600 mb-3">
                                        <MapPin size={14} /> {item.bairro}
                                    </p>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                                    <div className="flex items-center gap-2 text-xs font-bold text-teal-700 group-hover:underline decoration-teal-700/30 underline-offset-4">
                                        Ver Detalhes do Projeto <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="border-2 border-slate-200 text-slate-400 font-bold px-8 py-3 rounded-xl hover:border-slate-400 hover:text-slate-600 transition-colors">
                            Carregar Projetos Anteriores
                        </button>
                    </div>
                </div>
            </section>

            {/* 3. VALORIZAÇÃO & ROI */}
            <section className="bg-teal-900 py-24 text-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">Investimento Seguro</span>
                            <h2 className="font-montserrat font-bold text-4xl mb-6">Valorização Consistente</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Historicamente, nossos empreendimentos apresentam uma valorização média de <span className="text-white font-bold">40% entre o lançamento e a entrega das chaves</span>. Isso demonstra não apenas a qualidade do produto, mas nossa expertise em selecionar as melhores localizações.
                            </p>
                            <Link href="/sites-institucionais/premium/construtora-incorporadora/contato" className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-900/40 transition-all">
                                Quero Investir com Segurança
                            </Link>
                        </div>
                        <div className="md:w-1/2 relative">
                            {/* Gráfico Abstrato */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative z-10">
                                <div className="flex justify-between items-end h-64 gap-4">
                                    <div className="w-full bg-teal-500/30 rounded-t-lg h-[40%] relative group cursor-pointer hover:bg-teal-500 transition-colors">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Lançamento</div>
                                    </div>
                                    <div className="w-full bg-teal-500/50 rounded-t-lg h-[60%] relative group cursor-pointer hover:bg-teal-500 transition-colors">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Obras</div>
                                    </div>
                                    <div className="w-full bg-teal-500/70 rounded-t-lg h-[80%] relative group cursor-pointer hover:bg-teal-500 transition-colors">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Entrega</div>
                                    </div>
                                    <div className="w-full bg-orange-500 rounded-t-lg h-full relative shadow-lg shadow-orange-500/20">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-orange-600 px-2 py-1 rounded text-xs font-bold shadow">+40%</div>
                                    </div>
                                </div>
                                <div className="border-t border-white/20 mt-4 flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wide">
                                    <span>Ano 1</span>
                                    <span>Ano 2</span>
                                    <span>Ano 3</span>
                                    <span>Entrega</span>
                                </div>
                            </div>
                            <TrendingUp className="absolute -top-8 -right-8 text-white/5 w-64 h-64" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
