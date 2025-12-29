"use client";

import Image from "next/image";
import Link from "next/link";
import {
    PenTool, Monitor, Hammer, Sparkles,
    Search, ArrowRight, MessageSquare,
    Award,
    Gem,
    Lock
} from "lucide-react";

export default function ProcessoPage() {
    const steps = [
        {
            num: "01",
            title: "Briefing & Inspiração",
            icon: MessageSquare,
            desc: "Tudo começa com uma conversa. Seja em nosso atelier ou via vídeochamada, queremos ouvir sua história. Fotos, referências de arte, memórias afetivas... tudo serve de matéria-prima para a criação.",
            time: "1 Semana"
        },
        {
            num: "02",
            title: "Design & Esboços",
            icon: PenTool,
            desc: "Nosso designer chefe cria 3 opções de esboços manuais (gouache) exclusivos para você. Nesta etapa, selecionamos as gemas que serão protagonistas da peça.",
            time: "2 Semanas"
        },
        {
            num: "03",
            title: "Modelagem 3D",
            icon: Monitor,
            desc: "Após a aprovação do desenho, criamos um modelo digital tridimensional. Isso permite que você visualize a peça de todos os ângulos e faça ajustes finos antes da produção.",
            time: "1 Semana"
        },
        {
            num: "04",
            title: "A Bancada",
            icon: Hammer,
            desc: "O momento da alquimia. Fundição do ouro 18k, forja, limagem e pré-polimento. Nossos mestres ourives trabalham com precisão cirúrgica.",
            time: "3-5 Semanas"
        },
        {
            num: "05",
            title: "Cravação",
            icon: Sparkles,
            desc: "A etapa mais delicada. Sob microscópio, cada gema é fixada permanentemente no metal. É a segurança e o brilho eterno sendo garantidos.",
            time: "1 Semana"
        },
        {
            num: "06",
            title: "Entrega Solene",
            icon: Award, // Replacing 'Gift' with 'Award' as it's more premium
            desc: "Sua joia é entregue em nosso estojo de madeira nobre, acompanhada dos certificados GIA e termos de garantia vitalícia. Um momento de celebração.",
            time: "Conclusão"
        }
    ];

    return (
        <div className="bg-white font-sans text-stone-800">

            {/* 1. HERO PROCESSO */}
            <section className="bg-stone-50 py-32 text-center border-b border-stone-200">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Bespoke Experience</span>
                    <h1 className="font-playfair text-5xl md:text-6xl text-stone-900 mb-8 italic">A Anatomia de um Sonho</h1>
                    <p className="text-stone-500 font-light text-xl leading-relaxed">
                        Entenda como transformamos ideias abstratas e sentimentos em metais nobres e pedras preciosas. Um processo transparente, colaborativo e fascinante.
                    </p>
                </div>
            </section>

            {/* 2. STEPS TIMELINE */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 md:px-12 relative z-10">

                    {/* Linha Conectora Vertical */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-stone-200 -z-10" />

                    <div className="space-y-24">
                        {steps.map((step, i) => (
                            <div key={i} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Texto */}
                                <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 !== 0 ? "md:text-left" : "md:text-right"}`}>
                                    <h3 className="font-playfair text-3xl mb-4 text-stone-900">{step.title}</h3>
                                    <p className="font-light text-stone-600 leading-relaxed mb-6">{step.desc}</p>
                                    <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-4 py-2 rounded-full ${i % 2 !== 0 ? "flex-row" : "md:flex-row-reverse"}`}>
                                        <Clock size={14} /> Duração: {step.time}
                                    </div>
                                </div>

                                {/* Icone Central */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 bg-white p-4 border border-stone-200 rounded-full shadow-lg group hover:border-amber-500 transition-colors z-20">
                                    <step.icon size={24} className="text-stone-400 group-hover:text-amber-600 transition-colors" />
                                </div>

                                {/* Espaço Vazio para Grid Alternado */}
                                <div className="md:w-1/2 hidden md:block opacity-20 hover:opacity-100 transition-opacity duration-500">
                                    <span className="font-playfair text-9xl text-stone-200 block text-center select-none">{step.num}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. GEMSTONE SELECTION GUIDE */}
            <section className="bg-stone-900 text-white py-24">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="md:w-1/2">
                            <h2 className="font-playfair text-4xl mb-6">A Curadoria das Gemas</h2>
                            <p className="font-light text-stone-400 text-lg leading-relaxed mb-6">
                                Nem todo diamante é igual. Viajamos para Antuérpia e, através de contatos locais em Minas Gerais, selecionamos pessoalmente pedras que possuem "fogo" e vida. Não compramos lotes fechados.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 font-bold text-sm uppercase tracking-wide text-amber-500">
                                    <Search size={16} /> Inspeção Lupa 10x
                                </li>
                                <li className="flex items-center gap-3 font-bold text-sm uppercase tracking-wide text-amber-500">
                                    <Gem size={16} /> Certificado de Origem
                                </li>
                                <li className="flex items-center gap-3 font-bold text-sm uppercase tracking-wide text-amber-500">
                                    <Lock size={16} /> Rastreabilidade Total
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 relative h-[400px] w-full border border-stone-700">
                            <Image src="https://images.unsplash.com/photo-1617038220319-88af152841b6?q=80&w=2670&auto=format&fit=crop" fill alt="Gemas" className="object-cover opacity-80" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA START */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="font-playfair text-4xl text-stone-900 mb-8">Pronto para começar sua jornada?</h2>
                    <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/contato" className="inline-flex items-center gap-4 bg-stone-900 text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors shadow-xl">
                        Agendar Reunião de Briefing <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

        </div>
    );
}

// Helper component for lucide icons
function Clock({ size, className }: { size: number, className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
