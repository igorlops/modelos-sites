import Image from "next/image";
import Link from "next/link";
import { ClipboardList, PenTool, Ruler, HardHat, Key, MessageSquare, Check, ArrowRight, LayoutTemplate, Clock } from "lucide-react";

export default function ProcessoPage() {
    const steps = [
        {
            id: 1,
            icon: MessageSquare,
            title: "Briefing & Imersão",
            desc: "Nossa primeira etapa é ouvir. Realizamos reuniões profundas para entender suas necessidades, rotina, gostos e orçamento. Visitamos o local para análise técnica do terreno ou imóvel.",
            delivery: "Relatório de Programa de Necessidades e Estudo de Viabilidade.",
            duration: "1 a 2 semanas"
        },
        {
            id: 2,
            icon: PenTool,
            title: "Estudo Preliminar (3D)",
            desc: "Traduzimos o briefing em conceito. Desenvolvemos o layout (planta baixa humanizada) e maquetes eletrônicas 3D fotorrealistas para você visualizar exatamente como o espaço ficará.",
            delivery: "Apresentação com imagens 3D, moodboard e plantas esquemáticas.",
            duration: "3 a 4 semanas"
        },
        {
            id: 3,
            icon: ClipboardList,
            title: "Anteprojeto & Legal",
            desc: "Após aprovação do conceito, definimos medidas finais e preparamos a documentação para aprovação nos órgãos competentes (Prefeitura, Condomínio, Vigilância Sanitária).",
            delivery: "Projeto Legal completo e protocolos de aprovação.",
            duration: "2 a 4 semanas (tempo de aprovação não incluso)"
        },
        {
            id: 4,
            icon: Ruler,
            title: "Projeto Executivo",
            desc: "A etapa mais técnica. Detalhamos tudo: elétrica, hidráulica, marcenaria, paginas de piso, forro, iluminação. Um manual completo para a obra não ter dúvidas.",
            delivery: "Caderno Técnico Executivo (PDF e Plotado) + Memorial Descritivo.",
            duration: "4 a 6 semanas"
        },
        {
            id: 5,
            icon: HardHat,
            title: "Acompanhamento de Obra",
            desc: "Não te deixamos sozinho na obra. Realizamos visitas técnicas periódicas para verificar se a execução está fiel ao projeto e auxiliar na resolução de imprevistos.",
            delivery: "Relatórios de visita técnica com fotos e apontamentos.",
            duration: "Durante toda a obra"
        },
        {
            id: 6,
            icon: Key,
            title: "Produção & Entrega",
            desc: "A cereja do bolo. Acompanhamos a instalação do mobiliário, cortinas e objetos de decoração. Deixamos tudo pronto para você entrar e viver.",
            delivery: "Entrega oficial das chaves e Manual do Proprietário.",
            duration: "1 semana final"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* 1. Hero Processo */}
            <section className="relative py-20 bg-stone-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop"
                        alt="Processo criativo"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Metodologia Exclusiva</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Como Transformamos Sonhos em Realidade</h1>
                    <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Um processo estruturado, transparente e previsível. Eliminamos a incerteza da obra com planejamento rigoroso e comunicação constante.
                    </p>
                </div>
            </section>

            {/* 2. Etapas Detalhadas */}
            <section className="py-24 md:py-32 bg-white relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 -z-10 hidden md:block"></div>
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <div key={step.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <div className="relative w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-stone-100 z-10 hover:border-amber-500 transition-colors duration-300 group">
                                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-amber-600 transition-colors">
                                            {step.id}
                                        </div>
                                        <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <step.icon size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-stone-900 mb-4">{step.title}</h3>
                                        <p className="text-stone-600 leading-relaxed mb-6">{step.desc}</p>

                                        <div className="space-y-3 bg-stone-50 p-4 rounded-xl text-sm">
                                            <div className="flex gap-2">
                                                <LayoutTemplate size={16} className="text-amber-600 shrink-0 mt-1" />
                                                <span className="text-stone-700"><strong>Entregável:</strong> {step.delivery}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <Clock size={16} className="text-amber-600 shrink-0 mt-1" />
                                                <span className="text-stone-700"><strong>Duração:</strong> {step.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex justify-center md:block hidden">
                                    {/* Espaço vazio para manter o flow alternado no desktop */}
                                    <div className="w-8 h-8 bg-stone-200 rounded-full border-4 border-white mx-auto relative z-10"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Garantia de Qualidade */}
            <section className="py-24 bg-stone-100">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Nosso Compromisso com a Excelência</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">
                            Utilizamos as melhores ferramentas e práticas do mercado para garantir que seu projeto seja executado com perfeição.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-amber-600">
                            <h3 className="text-xl font-bold text-stone-900 mb-4">BIM (Building Information Modeling)</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                Modelamos sua obra inteira virtualmente antes de assentar o primeiro tijolo. Isso previne incompatibilidades entre estrutura, elétrica e arquitetura, economizando tempo e dinheiro.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-amber-600">
                            <h3 className="text-xl font-bold text-stone-900 mb-4">Realidade Virtual</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                Você passeia pelo seu futuro imóvel com óculos VR. Sinta os espaços, confira alturas e acabamentos. O que você vê é o que será construído.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-amber-600">
                            <h3 className="text-xl font-bold text-stone-900 mb-4">Gestão Transparente</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                Acesso 24/7 a uma plataforma online onde você visualiza o cronograma, faz aprovações de materiais e acompanha o fluxo financeiro da obra.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-24 bg-stone-900 text-white relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="relative z-10 text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Vamos dar o primeiro passo?</h2>
                    <p className="text-stone-300 text-lg mb-12 max-w-xl mx-auto">
                        A etapa de Briefing é gratuita e sem compromisso. Agende uma conversa para nos contar sobre o seu sonho.
                    </p>
                    <Link
                        href="/sites-institucionais/premium/arquitetura-design-interiores/contato"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        Agendar Reunião de Briefing <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
