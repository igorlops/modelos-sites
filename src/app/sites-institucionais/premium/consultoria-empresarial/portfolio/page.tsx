"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight, TrendingUp, DollarSign,
    Activity, Play,
    Users
} from "lucide-react";
import { useState } from "react";

export default function PortfolioPage() {
    const [filter, setFilter] = useState("all");

    const categories = [
        { id: "all", label: "Todos os Cases" },
        { id: "strategy", label: "Estratégia" },
        { id: "ops", label: "Operações" },
        { id: "tech", label: "Tecnologia" },
    ];

    const cases = [
        {
            id: 1,
            category: "strategy",
            client: "Multinacional de Bebidas",
            industry: "Bens de Consumo",
            title: "Expansão para Mercado Asiático",
            desc: "Desenvolvimento da estratégia de Go-to-Market para entrada na China e Sudeste Asiático, incluindo adaptação de portfólio e parcerias locais.",
            metrics: [
                { label: "Market Share", value: "15% em 2 anos" },
                { label: "Receita Nova", value: "+$450M" },
                { label: "ROI Projeto", value: "12x" }
            ],
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 2,
            category: "ops",
            client: "Grupo Siderúrgico",
            industry: "Indústria Pesada",
            title: "Otimização Energética e Operacional",
            desc: "Implementação de Industry 4.0 e reengenharia de processos para redução de consumo energético e aumento de OEE.",
            metrics: [
                { label: "Economia Anual", value: "R$ 85M" },
                { label: "Redução CO2", value: "-30%" },
                { label: "OEE", value: "+12 p.p." }
            ],
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 3,
            category: "tech",
            client: "Banco Digital",
            industry: "Serviços Financeiros",
            title: "Reestruturação Pós-Fusão",
            desc: "PMI (Post-Merger Integration) de dois grandes bancos digitais, unificando plataformas tecnológicas e culturas organizacionais.",
            metrics: [
                { label: "Sinergias", value: "R$ 120M" },
                { label: "Churn Rate", value: "< 2%" },
                { label: "Prazo", value: "9 Meses" }
            ],
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop"
        },
        {
            id: 4,
            category: "strategy",
            client: "Rede de Varejo",
            industry: "Varejo & E-commerce",
            title: "Turnaround Estratégico",
            desc: "Revisão completa do modelo de negócios de uma rede varejista tradicional para o modelo omnichannel.",
            metrics: [
                { label: "E-commerce", value: "0% -> 35%" },
                { label: "EBITDA", value: "+150%" },
                { label: "Lojas Físicas", value: "Otimizadas" }
            ],
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 5,
            category: "ops",
            client: "Operadora Logística",
            industry: "Logística",
            title: "Redesenho de Malha",
            desc: "Otimização da malha logística nacional utilizando algoritmos avançados para definição de novos CDs.",
            metrics: [
                { label: "Frete", value: "-18%" },
                { label: "SLA Entrega", value: "+25%" },
                { label: "Inventário", value: "-20%" }
            ],
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    const filteredCases = filter === "all" ? cases : cases.filter(c => c.category === filter);

    return (
        <div className="bg-slate-50 overflow-hidden font-sans">

            {/* 1. HERO PORTFOLIO */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 skew-x-12" />
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 text-center max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Transformações Comprovadas</h1>
                    <p className="text-xl text-slate-400 font-light">
                        Nossa reputação é construída sobre resultados reais. Navegue por nossos casos de sucesso e veja o impacto que geramos.
                    </p>
                    <div className="mt-8 inline-block px-4 py-2 bg-slate-800 rounded-lg text-xs font-mono text-slate-400 border border-slate-700">
                        * Alguns nomes de clientes foram omitidos por acordos de confidencialidade (NDA).
                    </div>
                </div>
            </section>

            {/* 2. FILTROS E GRID */}
            <section className="py-24 bg-white min-h-[800px]">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 text-sm border ${filter === cat.id
                                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-16">
                        {filteredCases.map((project, idx) => (
                            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-500 group flex flex-col lg:flex-row">
                                <div className="lg:w-5/12 relative h-64 lg:h-auto min-h-[300px] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply opacity-60 group-hover:opacity-20 transition-opacity" />
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-slate-900">
                                        {project.industry}
                                    </div>
                                </div>

                                <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">Cliente: {project.client}</p>
                                            <h3 className="text-3xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed mb-10 border-l-4 border-slate-200 pl-6 group-hover:border-blue-500 transition-colors">
                                        {project.desc}
                                    </p>

                                    <div className="grid grid-cols-3 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                        {project.metrics.map((m, i) => (
                                            <div key={i}>
                                                <p className="text-xl lg:text-2xl font-bold text-slate-900">{m.value}</p>
                                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mt-1">{m.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. VÍDEO CASE EM DESTAQUE */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Case em Vídeo</span>
                            <h2 className="text-4xl font-bold mb-6">A Transformação Digital da <span className="text-white">FinanceCorp</span></h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Assista como ajudamos uma instituição financeira de 50 anos a se reinventar digitalmente em apenas 18 meses, resultando em um IPO bem-sucedido na Nasdaq.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-700"></div>
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-600"></div>
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-500 flex items-center justify-center text-xs font-bold">+5</div>
                                </div>
                                <p className="text-sm font-bold text-slate-300">Envolvidos no projeto</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group cursor-pointer w-full">
                            <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop" fill className="object-cover opacity-60 transition-opacity group-hover:opacity-40" alt="Video" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform">
                                    <Play size={32} className="ml-1 text-white fill-current" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. RESULTADOS AGREGADOS */}
            <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-12">Impacto Cumulativo (Últimos 12 Meses)</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                            <TrendingUp className="mx-auto mb-4 text-blue-200" size={32} />
                            <p className="text-4xl font-bold mb-1">R$ 540M</p>
                            <p className="text-xs uppercase font-bold text-blue-100">Crescimento de Receita</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                            <DollarSign className="mx-auto mb-4 text-blue-200" size={32} />
                            <p className="text-4xl font-bold mb-1">R$ 120M</p>
                            <p className="text-xs uppercase font-bold text-blue-100">Redução de Custos</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                            <Activity className="mx-auto mb-4 text-blue-200" size={32} />
                            <p className="text-4xl font-bold mb-1">85</p>
                            <p className="text-xs uppercase font-bold text-blue-100">NPS Médio</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                            <Users className="mx-auto mb-4 text-blue-200" size={32} />
                            <p className="text-4xl font-bold mb-1">45</p>
                            <p className="text-xs uppercase font-bold text-blue-100">Projetos Concluídos</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA PRÓXIMO CASE */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-4xl">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Sua Empresa Pode Ser o Próximo Case de Sucesso</h2>
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                        Não acreditamos em fórmulas mágicas, mas acreditamos em método e trabalho duro. Vamos diagnosticar suas oportunidades juntos?
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/sites-institucionais/premium/consultoria-empresarial/contato" className="bg-slate-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-slate-800 transition shadow-lg">
                            Agendar Reunião de Diagnóstico
                        </Link>
                        <Link href="#" className="bg-white text-slate-900 border border-slate-300 px-10 py-4 rounded-lg font-bold hover:bg-slate-50 transition">
                            Baixar Apresentação Institucional
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
