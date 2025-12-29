"use client";

import Image from "next/image";
import Link from "next/link";
import {
    History, Users, Target, Award, Globe, Building2,
    Briefcase, CheckCircle2, TrendingUp, Handshake,
    MapPin, GraduationCap, Linkedin, ArrowRight
} from "lucide-react";

export default function SobrePage() {
    const years = [
        { year: "2005", title: "Fundação", desc: "Início das operações focadas em M&A e reestruturação em São Paulo." },
        { year: "2010", title: "Expansão Nacional", desc: "Abertura dos escritórios no Rio de Janeiro e atendimento a grandes indústrias." },
        { year: "2015", title: "Certificação ISO", desc: "Reconhecimento internacional dos nossos processos de gestão da qualidade." },
        { year: "2020", title: "Transformação Digital", desc: "Lançamento da vertical de tecnologia e inovação corporativa." },
        { year: "2023", title: "Liderança Regional", desc: "+500 projetos entregues e reconhecimento como Consultoria do Ano." }
    ];

    const partners = [
        {
            name: "Carlos Mendes, MBA",
            role: "Senior Managing Partner",
            bio: "25+ anos de experiência liderando transformações em empresas Fortune 500. Ex-Partner na McKinsey. Especialista em Estratégia Corporativa e M&A.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Ana Paula Torres, PhD",
            role: "Partner, Head of Innovation",
            bio: "Doutora em Economia pela FGV. Liderou projetos de inovação digital em 5 países. Autora do livro 'O Futuro da Gestão Ágil'.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Ricardo Silva, PMP",
            role: "Partner, Operations",
            bio: "Engenheiro com certificação Six Sigma Black Belt. Expertise em otimização de supply chain e excelência operacional industrial.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-slate-50 overflow-hidden font-sans">

            {/* 1. HERO INSTITUCIONAL */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                        alt="Sede Corporativa"
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
                </div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Nossa História de <br /><span className="text-blue-500">Excelência</span></h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Há duas décadas, construímos pontes entre o potencial e o resultado. <br />Conheça a essência da consultoria que está redefinindo o mercado.
                    </p>
                </div>
            </section>

            {/* 2. PROPOSTA DE VALOR */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Quem Somos</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Mais que Consultores, somos <span className="text-blue-600">Arquitetos de Negócios</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                                <p>
                                    A Strategic nasceu da convicção de que o modelo tradicional de consultoria estava desconectado das necessidades reais das empresas modernas. O mercado não precisava de mais relatórios teóricos; precisava de ação e impacto.
                                </p>
                                <p>
                                    Nossa abordagem combina o rigor analítico das grandes firmas globais com a agilidade e o pragmatismo necessários para navegar o complexo ambiente de negócios brasileiro.
                                </p>
                                <p className="font-medium text-slate-900 border-l-4 border-blue-600 pl-4 italic">
                                    "Não medimos nosso sucesso pelo número de horas vendidas, mas pelo valor financeiro real adicionado ao balanço de nossos clientes."
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            <div className="space-y-6 mt-12">
                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg">
                                    <Target className="text-blue-600 mb-4" size={32} />
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Foco em Resultado</h3>
                                    <p className="text-slate-500 text-sm">Compromisso contratual com métricas de sucesso.</p>
                                </div>
                                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-lg text-white">
                                    <Users className="text-blue-400 mb-4" size={32} />
                                    <h3 className="font-bold text-white text-xl mb-2">Time Sênior</h3>
                                    <p className="text-slate-400 text-sm">Apenas consultores com vivência executiva real.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-blue-600 p-8 rounded-2xl border border-blue-500 shadow-lg text-white">
                                    <Handshake className="text-white mb-4" size={32} />
                                    <h3 className="font-bold text-white text-xl mb-2">Parceria Real</h3>
                                    <p className="text-blue-100 text-sm">Imersão profunda na cultura do cliente.</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg">
                                    <Globe className="text-cyan-600 mb-4" size={32} />
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Visão Global</h3>
                                    <p className="text-slate-500 text-sm">Melhores práticas mundiais aplicadas localmente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TIMELINE HISTÓRICA */}
            <section className="py-24 bg-slate-900 text-white relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="text-center text-4xl font-bold mb-16">Nossa Trajetória</h2>
                    <div className="relative border-l-2 border-slate-700 ml-4 md:ml-1/2 md:-translate-x-px space-y-12">
                        {years.map((year, idx) => (
                            <div key={idx} className={`relative flex items-center md:justify-between group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block w-5/12" /> {/* Espaçador */}

                                <div className="absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-slate-900 border-4 border-blue-600 z-10" />

                                <div className="ml-10 md:ml-0 md:w-5/12 bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors shadow-xl">
                                    <span className="text-blue-400 font-bold text-2xl block mb-2">{year.year}</span>
                                    <h3 className="text-xl font-bold mb-2">{year.title}</h3>
                                    <p className="text-slate-400 text-sm">{year.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SÓCIOS E LIDERANÇA */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Liderança</span>
                        <h2 className="text-4xl font-bold text-slate-900">Conheça Nossos Partners</h2>
                        <p className="text-slate-500 mt-4">A excelência começa pela governança.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {partners.map((partner, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 group hover:shadow-2xl transition-all hover:-translate-y-1">
                                <div className="h-80 relative overflow-hidden bg-slate-200">
                                    <Image src={partner.image} alt={partner.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 to-transparent p-6 pt-24 text-white">
                                        <h3 className="text-xl font-bold">{partner.name}</h3>
                                        <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">{partner.role}</p>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {partner.bio}
                                    </p>
                                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                        <Link href="#" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 text-sm font-bold transition-colors">
                                            <Linkedin size={18} /> LinkedIn Profile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. MISSÃO, VISÃO, VALORES */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 opacity-50 z-0" />
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <Target className="text-blue-600" /> Nossa Missão
                                </h3>
                                <p className="text-slate-600 leading-relaxed border-l-2 border-blue-200 pl-4">
                                    Capacitar organizações a alcançarem seu potencial máximo através de estratégias inovadoras e execução disciplinada, gerando valor sustentável para acionistas, colaboradores e sociedade.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <Globe className="text-blue-600" /> Nossa Visão
                                </h3>
                                <p className="text-slate-600 leading-relaxed border-l-2 border-blue-200 pl-4">
                                    Ser a referência incontestável em consultoria estratégica de alto impacto na América Latina, reconhecida pela senioridade de nossos talentos e pela capacidade de transformar negócios.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-10 rounded-2xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Award className="text-blue-500" /> Nossos Valores
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    "Excelência Absoluta", "Integridade Inegociável",
                                    "Foco no Cliente", "Inovação Pragmática",
                                    "Meritocracia", "Confidencialidade"
                                ].map((val, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                                        <span className="font-medium text-sm">{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. EQUIPE (SUMMARY) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-12">Nossa Estrutura de Talentos</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="bg-white p-8 rounded-xl shadow w-64 border-t-4 border-blue-600">
                            <h3 className="font-bold text-2xl text-slate-900 mb-2">12</h3>
                            <p className="text-slate-500 uppercase text-xs font-bold">Partners</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow w-64 border-t-4 border-cyan-500">
                            <h3 className="font-bold text-2xl text-slate-900 mb-2">28</h3>
                            <p className="text-slate-500 uppercase text-xs font-bold">Senior Consultants</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow w-64 border-t-4 border-slate-600">
                            <h3 className="font-bold text-2xl text-slate-900 mb-2">45</h3>
                            <p className="text-slate-500 uppercase text-xs font-bold">Specialists</p>
                        </div>
                    </div>
                    <p className="mt-8 text-slate-500 text-sm">
                        Ao contrário de outras firmas, mantemos uma proporção de 1 Partner para cada 4 Consultores, <br />garantindo atenção sênior em todos os projetos.
                    </p>
                </div>
            </section>

            {/* 7. CERTIFICAÇÕES */}
            <section className="py-20 bg-white border-y border-slate-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="text-center text-slate-900 text-2xl font-bold mb-10">Qualidade Certificada & Reconhecimentos</h2>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
                        <div className="text-center">
                            <div className="h-20 w-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4"><Award size={40} className="text-slate-400" /></div>
                            <p className="font-bold text-slate-600 text-sm">ISO 9001:2015</p>
                        </div>
                        <div className="text-center">
                            <div className="h-20 w-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4"><Award size={40} className="text-slate-400" /></div>
                            <p className="font-bold text-slate-600 text-sm">Great Place to Work</p>
                        </div>
                        <div className="text-center">
                            <div className="h-20 w-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4"><Award size={40} className="text-slate-400" /></div>
                            <p className="font-bold text-slate-600 text-sm">PMI R.E.P.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. ESCRITÓRIOS */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
                        <div className="md:w-1/3">
                            <h2 className="text-4xl font-bold mb-6">Nossos Escritórios</h2>
                            <p className="text-slate-400 mb-8">
                                Localizados estrategicamente nos principais centros econômicos do país para melhor atender nossos clientes.
                            </p>
                            <Link href="/sites-institucionais/premium/consultoria-empresarial/contato" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition inline-block">
                                Agendar Visita
                            </Link>
                        </div>
                        <div className="md:w-2/3 grid md:grid-cols-3 gap-6">
                            {[
                                { city: "São Paulo", address: "Av. Berrini, 1000", type: "Headquarters" },
                                { city: "Rio de Janeiro", address: "Av. Rio Branco, 500", type: "Regional Office" },
                                { city: "Belo Horizonte", address: "Savassi Center", type: "Regional Office" }
                            ].map((office, i) => (
                                <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
                                    <MapPin size={24} className="text-blue-500 mb-4 mx-auto md:mx-0" />
                                    <h3 className="text-xl font-bold mb-1">{office.city}</h3>
                                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">{office.type}</p>
                                    <p className="text-slate-400 text-sm">{office.address}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CAREERS CTA */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" fill className="object-cover grayscale" alt="Team" />
                </div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Talentos Excepcionais Constroem Empresas Excepcionais</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                        Buscamos mentes brilhantes que queiram resolver os problemas mais complexos do mercado. Se você tem paixão por excelência, seu lugar é aqui.
                    </p>
                    <Link href="#" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl inline-flex items-center gap-3">
                        <GraduationCap size={24} /> Ver Oportunidades de Carreira
                    </Link>
                </div>
            </section>

        </div>
    );
}
