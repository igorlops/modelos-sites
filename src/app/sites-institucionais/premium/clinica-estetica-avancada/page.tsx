"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight, Star, Heart, Flower2, Sparkles, CheckCircle2,
    Clock, ShieldCheck, Microscope, User, Calendar, Play
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
    const [activeTab, setActiveTab] = useState("facial");

    const treatments = {
        facial: [
            { id: 1, title: "Harmonização Facial", desc: "Equilíbrio e simetria para realçar seus traços naturais com preenchimentos e toxina botulínica.", icon: Sparkles },
            { id: 2, title: "Laser Lavieen", desc: "O famoso 'BB Cream' a laser. Melhora textura, poros e manchas em uma única sessão.", icon: Sun },
            { id: 3, title: "Ultraformer III", desc: "Lifting não cirúrgico que estimula colágeno profundo e define o contorno facial.", icon: Zap },
        ],
        corporal: [
            { id: 4, title: "Criolipólise 360º", desc: "Eliminação definitiva de gordura localizada com tecnologia de congelamento avançada.", icon: ThermometerSnowflake },
            { id: 5, title: "Bioestimuladores", desc: "Sculptra e Radiesse para combater flacidez e celulite, devolvendo firmeza à pele.", icon: Activity },
            { id: 6, title: "Morpheus 8", desc: "Radiofrequência microagulhada para retração de pele e tratamento de estrias.", icon: Layers },
        ],
        intimo: [
            { id: 7, title: "Rejuvenescimento Íntimo", desc: "Laser CO2 e radiofrequência para funcionalidade e estética da região íntima.", icon: Flower2 },
            { id: 8, title: "Clareamento Íntimo", desc: "Protocolos específicos para uniformização do tom da pele em áreas delicadas.", icon: Sparkles },
        ],
        capilar: [
            { id: 9, title: "MMP Capilar", desc: "Microinfusão de Medicamentos na Pele para calvície e fortalecimento dos fios.", icon: Microscope },
            { id: 10, title: "Transplante FUE", desc: "Técnica fio a fio sem cicatriz linear, com resultado natural e definitivo.", icon: User },
        ]
    };

    // Helper icons for the object above (simulated imports for this scope)
    function Sun(props: any) { return <Flower2 {...props} /> } // Placeholder
    function Zap(props: any) { return <Sparkles {...props} /> } // Placeholder
    function ThermometerSnowflake(props: any) { return <Clock {...props} /> } // Placeholder
    function Activity(props: any) { return <Heart {...props} /> } // Placeholder
    function Layers(props: any) { return <ShieldCheck {...props} /> } // Placeholder

    return (
        <div className="bg-neutral-50 overflow-hidden">

            {/* 1. HERO LUXUOSO */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax Effect */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop"
                        alt="Spa de Luxo"
                        fill
                        className="object-cover object-center scale-105 animate-slow-zoom"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-950/80 via-neutral-900/40 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 pt-20">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white mb-8 animate-fade-in-up">
                            <Sparkles size={16} className="text-amber-400" />
                            <span className="text-sm font-medium tracking-widest uppercase">Tecnologia Suíça & Resultados Reais</span>
                        </div>

                        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white font-medium leading-tight mb-8 animate-fade-in-up delay-100">
                            Revele Sua <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-100 to-white">
                                Melhor Versão
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-rose-100/90 font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-up delay-200">
                            Uma abordagem integrada entre ciência, arte e bem-estar.
                            Descubra protocolos exclusivos desenhados para realçar sua beleza natural.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-300">
                            <Link href="/sites-institucionais/premium/clinica-estetica-avancada/contato" className="group relative px-10 py-5 bg-rose-600 text-white rounded-full font-bold text-lg overflow-hidden shadow-xl shadow-rose-900/30 hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="relative flex items-center gap-3">
                                    Agendar Avaliação <ArrowRight size={20} />
                                </span>
                            </Link>
                            <Link href="/sites-institucionais/premium/clinica-estetica-avancada/servicos" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50">
                                Conhecer Tratamentos
                            </Link>
                        </div>
                    </div>

                    <div className="absolute bottom-10 right-10 lg:right-24 flex flex-col gap-6 animate-fade-in delay-500">
                        <div className="text-white/80 text-right">
                            <p className="text-3xl font-serif font-bold text-amber-400">15+</p>
                            <p className="text-xs tracking-widest uppercase">Anos de Excelência</p>
                        </div>
                        <div className="text-white/80 text-right">
                            <p className="text-3xl font-serif font-bold text-amber-400">12k+</p>
                            <p className="text-xs tracking-widest uppercase">Pacientes Felizes</p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto mb-2" />
                    <p className="text-[10px] tracking-[0.3em] uppercase">Scroll</p>
                </div>
            </section>

            {/* 2. LOGOS CREDIBILIDADE */}
            <section className="py-12 bg-white border-b border-rose-50">
                <div className="container mx-auto px-6 overflow-hidden">
                    <p className="text-center text-rose-900/40 text-sm font-bold tracking-widest uppercase mb-8">Clínica Aprovada e Certificada</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                        {['ANVISA', 'SBCD', 'ABEST', 'FDA Approved', 'CE Medical'].map((cert) => (
                            <div key={cert} className="flex items-center gap-2 group cursor-default">
                                <ShieldCheck size={24} className="text-amber-500" />
                                <span className="font-serif font-bold text-xl text-neutral-800">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. EXPERIÊNCIA TRANSFORMADORA */}
            <section className="py-24 md:py-32 lg:py-40 bg-neutral-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-50/50 -skew-x-12 translate-x-32" />

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 relative group">
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-rose-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop"
                                    alt="Tratamento Facial"
                                    width={600}
                                    height={800}
                                    className="object-cover w-full h-[600px] transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-xl max-w-xs animate-float">
                                <p className="font-serif text-3xl font-bold text-rose-600 mb-2">98%</p>
                                <p className="text-neutral-600 leading-relaxed text-sm">das pacientes relatam aumento imediato na autoestima após o primeiro procedimento.</p>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50" />
                            <div className="absolute bottom-10 -left-20 w-60 h-60 bg-rose-100 rounded-full blur-3xl opacity-50" />
                        </div>

                        <div className="lg:w-1/2">
                            <span className="text-rose-600 font-bold tracking-widest uppercase text-sm mb-4 block">Sua Jornada de Beleza</span>
                            <h2 className="font-serif text-5xl md:text-6xl text-neutral-900 mb-8 leading-tight">
                                Beleza Natural, <br />
                                <span className="italic text-rose-500">Tecnologia Avançada</span>
                            </h2>
                            <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
                                <p>
                                    Acreditamos que a verdadeira estética não é sobre transformar quem você é, mas sobre revelar sua versão mais confiante e radiante.
                                </p>
                                <p>
                                    Nossa clínica combina a precisão da tecnologia médica suíça com o acolhimento de um spa de luxo. Cada protocolo é desenhado exclusivamente para sua anatomia e objetivos.
                                </p>
                                <p>
                                    Esqueça os padrões inatingíveis. Aqui, celebramos sua individualidade com tratamentos que priorizam a saúde da sua pele e a naturalidade dos resultados.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-col sm:flex-row gap-8 items-center">
                                <Link href="/sites-institucionais/premium/clinica-estetica-avancada/sobre" className="px-8 py-4 bg-neutral-900 text-white rounded-full font-bold hover:bg-rose-600 transition-colors shadow-lg">
                                    Conheça Nossa História
                                </Link>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-neutral-200" />
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-neutral-300" />
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-neutral-400 flex items-center justify-center text-xs font-bold">+2k</div>
                                    </div>
                                    <span className="text-sm font-bold text-neutral-900">Pacientes este mês</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TRATAMENTOS POR CATEGORIA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="font-serif text-5xl text-neutral-900 mb-6">Menu de Tratamentos</h2>
                        <p className="text-neutral-500 text-lg">Soluções completas para face, corpo e bem-estar íntimo.</p>

                        <div className="flex flex-wrap justify-center gap-4 mt-10">
                            {Object.keys(treatments).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 uppercase ${activeTab === key
                                            ? "bg-rose-600 text-white shadow-lg shadow-rose-200 transform scale-105"
                                            : "bg-neutral-100 text-neutral-500 hover:bg-rose-50 hover:text-rose-500"
                                        }`}
                                >
                                    {key}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {treatments[activeTab as keyof typeof treatments].map((item: any) => (
                            <div key={item.id} className="group bg-neutral-50 rounded-[2.5rem] p-10 border border-transparent hover:border-rose-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(225,29,72,0.1)] transition-all duration-500">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm text-rose-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500">
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-rose-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-500 mb-8 leading-relaxed">
                                    {item.desc}
                                </p>
                                <Link href="/sites-institucionais/premium/clinica-estetica-avancada/servicos" className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 group-hover:text-rose-600 transition-colors uppercase tracking-widest">
                                    Saiba Mais <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/sites-institucionais/premium/clinica-estetica-avancada/servicos" className="inline-block border-b-2 border-neutral-900 text-neutral-900 font-bold hover:text-rose-600 hover:border-rose-600 transition-colors pb-1 text-lg">
                            Ver Menu Completo de Tratamentos
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. ANTES & DEPOIS (SLIDER PLACEHOLDER) */}
            <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block">Resultados Reais</span>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                                Transformações que <br />
                                <span className="text-rose-500 italic">Inspiram</span>
                            </h2>
                        </div>
                        <p className="text-neutral-400 max-w-md text-right md:text-left text-sm">
                            *Os resultados podem variar de acordo com o organismo de cada paciente. Imagens autorizadas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative group cursor-pointer overflow-hidden rounded-[2rem] h-[400px]">
                                <Image
                                    src={`https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop`}
                                    alt="Resultado"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="bg-rose-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full inline-block mb-3">
                                        Harmonização
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">Caso Clínica #{i}</h4>
                                    <p className="text-sm text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                                        Paciente de 35 anos, queixa de olheiras profundas e perda de volume malar.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/sites-institucionais/premium/clinica-estetica-avancada/portfolio" className="px-10 py-4 border border-white/30 rounded-full text-white font-bold hover:bg-white hover:text-neutral-900 transition-all">
                            Ver Galeria Completa
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. VÍDEO TESTIMONIALS */}
            <section className="py-24 bg-rose-50 relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">Elas Recomendam</h2>
                        <p className="text-neutral-500">Histórias reais de quem recuperou a autoestima.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white rounded-[2rem] p-4 shadow-xl shadow-rose-100">
                                <div className="relative aspect-[9/16] rounded-[1.5rem] overflow-hidden bg-neutral-900 group cursor-pointer">
                                    <Image
                                        src={`https://images.unsplash.com/photo-${item === 1 ? '1609505848946-32910c6344ed' : item === 2 ? '1535295972055-1c762f4483e5' : '1544005313-94ddf0286df2'}?q=80&w=1000&auto=format&fit=crop`}
                                        alt="Depoimento video"
                                        fill
                                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                                            <Play size={24} className="ml-1 text-white fill-current" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <p className="font-bold text-lg">Ana Clara, 28</p>
                                        <p className="text-xs text-rose-200">Preenchimento Labial</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. DIFERENCIAIS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="font-serif text-5xl text-neutral-900 mb-10 leading-tight">
                                Por Que Somos Referência em <span className="text-rose-600">Estética Avançada</span>
                            </h2>
                            <div className="grid gap-8">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 shrink-0">
                                        <Microscope size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-neutral-900 mb-2">Tecnologia de Ponta</h4>
                                        <p className="text-neutral-500 leading-relaxed">Investimos constantemente nos equipamentos mais modernos do mercado mundial (FDA Approved).</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 shrink-0">
                                        <User size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-neutral-900 mb-2">Profissionais Especialistas</h4>
                                        <p className="text-neutral-500 leading-relaxed">Equipe formada por médicos dermatologistas e biomédicos estetas com pós-graduação.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                                        <Heart size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-neutral-900 mb-2">Atendimento Humanizado</h4>
                                        <p className="text-neutral-500 leading-relaxed">Acreditamos que ouvir você é o primeiro passo para o sucesso de qualquer tratamento.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-20">
                                <Image src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2670&auto=format&fit=crop" alt="Clínica Interior" width={600} height={800} className="object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-rose-200 rounded-[3rem] z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. CTA FINAL */}
            <section className="py-32 bg-gradient-to-br from-rose-900 via-rose-800 to-purple-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <Sparkles size={48} className="mx-auto mb-8 text-amber-400 animate-pulse" />
                    <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8">Sua Transformação Começa Aqui</h2>
                    <p className="text-xl text-rose-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Agende sua avaliação gratuita e ganhe 20% OFF na primeira sessão de qualquer tratamento.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/sites-institucionais/premium/clinica-estetica-avancada/contato" className="px-12 py-6 bg-white text-rose-900 font-bold rounded-full text-xl shadow-2xl hover:scale-105 transition-all">
                            Agendar pelo WhatsApp
                        </Link>
                    </div>

                    <p className="mt-8 text-sm opacity-60 font-medium">
                        Atendemos de Segunda a Sábado. Estacionamento gratuito.
                    </p>
                </div>
            </section>

        </div>
    );
}
