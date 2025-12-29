"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Search, ArrowRight, Bed, Car, Ruler,
    MapPin, Calendar, CheckCircle2, Building2,
    Home, Key, ShieldCheck, Play, Leaf,
    Wallet, Award, Users, AlertCircle
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
    const [searchFilter, setSearchFilter] = useState({ type: "", rooms: "", budget: "" });

    const stats = [
        { label: "Anos de Tradição", value: "25", icon: Building2 },
        { label: "Famílias Realizadas", value: "12K+", icon: Users },
        { label: "Empreendimentos", value: "35", icon: Home },
        { label: "Satisfação", value: "98%", icon: Award },
        { label: "Bairros Nobres", value: "15", icon: MapPin },
        { label: "m² Construídos", value: "500K", icon: Ruler },
        { label: "Unidades Entregues", value: "8K+", icon: Key },
        { label: "VGV Realizado", value: "2B+", icon: Wallet }
    ];

    const differentials = [
        { title: "Tradição e Solidez", desc: "25 anos de história sem nenhum atraso na entrega.", icon: ShieldCheck },
        { title: "Localização Premium", desc: "Terrenos escolhidos a dedo nos melhores bairros.", icon: MapPin },
        { title: "Qualidade PBQP-H A", desc: "Certificação máxima de qualidade construtiva.", icon: Award },
        { title: "Plantas Inteligentes", desc: "Estratégias de arquitetura para ampliação de espaços.", icon: Ruler },
        { title: "Lazer de Resort", desc: "Piscinas, academias e espaços gourmet equipados.", icon: Home },
        { title: "Financiamento Fácil", desc: "Parceria direta com CEF, Itaú e Bradesco.", icon: Wallet },
        { title: "Pós-Venda Dedicado", desc: "Equipe exclusiva para assistência técnica.", icon: Users },
        { title: "Valorização Garantida", desc: "Histórico de valorização de 40% na entrega.", icon: Building2 }
    ];

    return (
        <div className="font-sans text-slate-700 overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Video/Image Parallax */}
                <div className="absolute inset-0 z-0 select-none">
                    <Image
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
                        alt="Luxury Home"
                        fill
                        className="object-cover animate-pan-slow"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-slate-900/60 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 relative z-10 pt-20">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-600/20 border border-orange-500 text-orange-400 text-sm font-bold tracking-wider mb-6 animate-fade-in-up">
                            25 ANOS CONSTRUINDO SONHOS
                        </span>
                        <h1 className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 animate-fade-in-up delay-100">
                            Seu Novo Lar <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Está Aqui.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light animate-fade-in-up delay-200 border-l-4 border-orange-600 pl-6">
                            Descubra empreendimentos com arquitetura moderna, lazer completo e localizações que valorizam a sua vida e o seu investimento.
                        </p>

                        {/* Quick Search Box */}
                        <div className="bg-white p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center animate-fade-in-up delay-300 border border-teal-100/20 backdrop-blur-sm bg-white/95">
                            <div className="flex-1 w-full relative group">
                                <Building2 size={18} className="absolute left-4 top-3.5 text-teal-600 group-focus-within:text-orange-600 transition-colors" />
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none font-medium cursor-pointer hover:bg-white transition-colors">
                                    <option value="">Tipo de Imóvel</option>
                                    <option value="apto">Apartamento</option>
                                    <option value="casa">Casa em Condomínio</option>
                                    <option value="studio">Studio</option>
                                </select>
                            </div>
                            <div className="flex-1 w-full relative group">
                                <Bed size={18} className="absolute left-4 top-3.5 text-teal-600 group-focus-within:text-orange-600 transition-colors" />
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none font-medium cursor-pointer hover:bg-white transition-colors">
                                    <option value="">Dormitórios</option>
                                    <option value="2">2 Quartos</option>
                                    <option value="3">3 Quartos</option>
                                    <option value="4">4+ Quartos</option>
                                </select>
                            </div>
                            <button className="w-full md:w-auto bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                <Search size={20} /> Buscar
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up delay-500">
                            <Link href="/sites-institucionais/premium/construtora-incorporadora/servicos" className="text-white font-bold text-sm border-b border-orange-500 pb-1 hover:text-orange-400 transition-colors">
                                Ver Lançamentos
                            </Link>
                            <Link href="/sites-institucionais/premium/construtora-incorporadora/contato" className="text-white font-bold text-sm border-b border-transparent hover:border-white pb-1 transition-colors">
                                Simular Financiamento
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Trust Bar Bottom */}
                <div className="absolute bottom-0 w-full bg-slate-900/80 backdrop-blur border-t border-slate-800 py-6 z-20 hidden md:block">
                    <div className="container mx-auto px-6 md:px-16 flex justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-2"><Award size={16} className="text-teal-500" /> PBQP-H Nível A</span>
                        <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500" /> ISO 9001:2015</span>
                        <span className="flex items-center gap-2"><Home size={16} className="text-teal-500" /> Programa MCMV</span>
                        <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-teal-500" /> Registro CRECI-J</span>
                    </div>
                </div>
            </section>

            {/* 2. LANÇAMENTOS EM DESTAQUE */}
            <section className="py-24 bg-zinc-50 relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 -z-0 hidden lg:block" />
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 relative z-10">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-slate-900 mb-4">Lançamentos <span className="text-teal-700">Exclusivos</span></h2>
                            <p className="text-lg text-slate-500 max-w-xl">Oportunidades únicas de investimento e moradia nos bairros que mais valorizam na cidade.</p>
                        </div>
                        <Link href="/sites-institucionais/premium/construtora-incorporadora/servicos" className="hidden md:flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all">
                            Ver Todos os Imóveis <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Reserva Imperial", bairro: "Jardins", type: "Alto Padrão", status: "LANÇAMENTO", price: "980.000", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop" },
                            { name: "Vila Verde", bairro: "Zona Sul", type: "Condomínio Clube", status: "EM OBRAS", price: "450.000", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" },
                            { name: "Skyline Tower", bairro: "Centro", type: "Studios & 1 Dorm", status: "ÚLTIMAS UNIDADES", price: "280.000", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(15,118,110,0.15)] hover:-translate-y-2 transition-all duration-500 group">
                                {/* Image */}
                                <div className="relative h-72 overflow-hidden">
                                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4 bg-teal-700 text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wide shadow-lg">
                                        {item.status}
                                    </div>
                                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-900/90 to-transparent p-6 flex flex-col justify-end">
                                        <h3 className="text-white font-montserrat font-bold text-xl">{item.name}</h3>
                                        <div className="flex items-center gap-1 text-slate-300 text-xs mt-1">
                                            <MapPin size={12} /> {item.bairro}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-6">
                                        <div className="flex flex-col items-center gap-1">
                                            <Bed className="text-teal-600" size={20} />
                                            <span className="text-xs font-bold text-slate-600">2-3 Dorms</span>
                                        </div>
                                        <div className="w-px h-8 bg-slate-100" />
                                        <div className="flex flex-col items-center gap-1">
                                            <Car className="text-teal-600" size={20} />
                                            <span className="text-xs font-bold text-slate-600">1-2 Vagas</span>
                                        </div>
                                        <div className="w-px h-8 bg-slate-100" />
                                        <div className="flex flex-col items-center gap-1">
                                            <Ruler className="text-teal-600" size={20} />
                                            <span className="text-xs font-bold text-slate-600">55-89m²</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <p className="text-sm text-slate-500 line-clamp-2">Um projeto exclusivo com lazer completo e acabamento de alto padrão. Perfeito para sua família.</p>
                                        <ul className="space-y-2">
                                            {["Piscina Semiolímpica", "Coworking", "Pet Place"].map((feat, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                                    <CheckCircle2 size={14} className="text-orange-500" /> {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-xs text-slate-400 font-medium">A partir de</p>
                                            <p className="font-montserrat font-bold text-2xl text-teal-700">R$ {item.price}</p>
                                        </div>
                                        <Link href="/sites-institucionais/premium/construtora-incorporadora/servicos" className="bg-slate-900 text-white p-3 rounded-xl hover:bg-orange-600 transition-colors shadow-lg">
                                            <ArrowRight size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link href="/sites-institucionais/premium/construtora-incorporadora/servicos" className="inline-flex items-center gap-2 text-orange-600 font-bold">
                            Ver Todos os Imóveis <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. NÚMEROS IMPRESSIONANTES */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2609&auto=format&fit=crop" fill alt="Background" className="object-cover grayscale" />
                </div>
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-teal-500 mb-6 group-hover:scale-110 group-hover:bg-teal-700 group-hover:text-white transition-all duration-500 shadow-xl border border-slate-700">
                                    <stat.icon size={32} />
                                </div>
                                <h3 className="font-montserrat font-black text-5xl md:text-6xl text-white mb-2">{stat.value}</h3>
                                <p className="text-slate-400 font-medium tracking-wider text-sm uppercase">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. DIFERENCIAIS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2 block">Por que escolher a Construtora Incorporadora?</span>
                        <h2 className="font-montserrat font-bold text-4xl text-slate-900">Diferenciais que constroem a <span className="text-orange-600 underline decoration-4 decoration-orange-200">sua confiança</span>.</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {differentials.map((dif, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm text-slate-700 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                    <dif.icon size={28} />
                                </div>
                                <h4 className="font-montserrat font-bold text-xl text-slate-800 mb-3">{dif.title}</h4>
                                <p className="text-slate-500 leading-relaxed text-sm">{dif.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PROCESSO DE COMPRA */}
            <section className="py-24 bg-teal-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <h2 className="font-montserrat font-bold text-center text-3xl md:text-4xl text-slate-900 mb-16">Do Sonho à Chave em <span className="text-teal-700">6 Passos</span></h2>

                    <div className="relative">
                        {/* Linha Connector Desktop */}
                        <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-teal-200 -z-0" />

                        <div className="grid lg:grid-cols-6 gap-8">
                            {[
                                { step: 1, title: "Visita", text: "Conheça o decorado" },
                                { step: 2, title: "Escolha", text: "Defina sua unidade" },
                                { step: 3, title: "Simulação", text: "Aprovação de crédito" },
                                { step: 4, title: "Proposta", text: "Reserva da unidade" },
                                { step: 5, title: "Contrato", text: "Vire proprietário" },
                                { step: 6, title: "Chaves", text: "Mude para seu lar" }
                            ].map((item, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                                    <div className="w-24 h-24 bg-white border-4 border-teal-100 rounded-full flex items-center justify-center font-black text-3xl text-teal-300 mb-6 shadow-lg group-hover:border-orange-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300">
                                        {item.step}
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                                    <p className="text-sm text-slate-500 font-medium">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/sites-institucionais/premium/construtora-incorporadora/processo" className="inline-block border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-colors">
                            Ver Detalhes do Processo
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. REGIÕES / MAPA */}
            <section className="h-[500px] relative bg-slate-800 flex items-center justify-center">
                <div className="absolute inset-0 opacity-40">
                    <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" fill alt="Map Background" className="object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="font-montserrat font-bold text-4xl text-white mb-6">Presentes nos <span className="text-yellow-400">Melhores Bairros</span></h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">Selecionamos regiões com alto potencial de valorização e infraestrutura completa de serviços, comércio e transporte.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Jardins", "Bela Vista", "Pinheiros", "Moema", "Vila Madalena", "Itaim Bibi"].map((bairro, idx) => (
                            <span key={idx} className="bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-2 rounded-full font-bold hover:bg-teal-600 hover:border-teal-500 hover:scale-105 transition-all cursor-default">
                                📍 {bairro}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CTA ESPECIAL / URGÊNCIA */}
            <section className="bg-gradient-to-r from-orange-600 to-amber-600 py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:w-1/2">
                        <span className="bg-white/20 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 inline-block">Última Chance</span>
                        <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 leading-tight">Condições Especiais de Lançamento</h2>
                        <p className="text-orange-100 text-lg mb-8">Garanta preços de tabela zero e benefícios exclusivos para os primeiros compradores do **Reserva Imperial**.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/sites-institucionais/premium/construtora-incorporadora/contato" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-slate-100 transition-colors text-center">
                                Falar com Consultor Agora
                            </Link>
                            <p className="text-xs text-orange-100 max-w-xs pt-2">*Condições válidas até o final do mês. Consulte regulamento.</p>
                        </div>
                    </div>

                    {/* Countdown / Form Placeholder */}
                    <div className="md:w-1/3 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-white text-orange-600 w-12 h-12 rounded-lg flex flex-col items-center justify-center font-bold">
                                <span className="text-xl leading-none">05</span>
                                <span className="text-[8px] uppercase">Dias</span>
                            </div>
                            <div className="text-2xl font-bold">:</div>
                            <div className="bg-white text-orange-600 w-12 h-12 rounded-lg flex flex-col items-center justify-center font-bold">
                                <span className="text-xl leading-none">12</span>
                                <span className="text-[8px] uppercase">Hrs</span>
                            </div>
                            <div className="text-2xl font-bold">:</div>
                            <div className="bg-white text-orange-600 w-12 h-12 rounded-lg flex flex-col items-center justify-center font-bold">
                                <span className="text-xl leading-none">30</span>
                                <span className="text-[8px] uppercase">Min</span>
                            </div>
                        </div>
                        <p className="font-bold text-xl mb-2">Cadastre-se para a Tabela Promocional</p>
                        <input type="email" placeholder="Seu melhor email" className="w-full p-3 rounded-lg bg-white/90 text-slate-800 placeholder:text-slate-500 focus:outline-none mb-3" />
                        <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg transition-colors shadow-lg">Receber Tabela</button>
                    </div>
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 max-w-4xl">
                    <h2 className="font-montserrat font-bold text-3xl text-center mb-12 text-slate-900">Dúvidas Frequentes</h2>
                    <div className="space-y-4">
                        {[
                            "Como funciona o financiamento na planta?",
                            "Posso usar meu FGTS como entrada?",
                            "Quais são os índices de correção durante a obra?",
                            "A construtora aceita permuta?",
                            "É possível personalizar a planta do apartamento?"
                        ].map((q, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden group">
                                <button className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors">
                                    {q} <ArrowRight size={18} className="text-slate-400 group-hover:rotate-90 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/sites-institucionais/premium/construtora-incorporadora/contato" className="text-teal-700 font-bold hover:underline">Ver todas as perguntas</Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
