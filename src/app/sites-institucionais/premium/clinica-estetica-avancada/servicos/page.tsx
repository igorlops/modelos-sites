"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Sparkles, Flower2, Zap, Thermometer, User, Clock,
    CheckCircle2, AlertTriangle, ArrowRight, HeartPulse,
    HelpCircle, ChevronDown, ChevronUp
} from "lucide-react";

export default function ServicosPage() {
    const [activeCategory, setActiveCategory] = useState("facial");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const categories = [
        { id: "facial", label: "Facial", icon: Sparkles },
        { id: "corporal", label: "Corporal", icon: HeartPulse },
        { id: "intimo", label: "Íntimo", icon: Flower2 },
        { id: "capilar", label: "Capilar", icon: User },
    ];

    const treatments = {
        facial: [
            {
                title: "Harmonização Facial Full Face",
                desc: "Protocolo completo que avalia o rosto como um todo, utilizando preenchimentos de ácido hialurônico para repor volumes perdidos, definir contornos (mandíbula, queixo) e suavizar sulcos, sempre respeitando as proporções naturais.",
                tech: "Ácido Hialurônico Premium (Restylane/Juvéderm)",
                duration: "60 a 90 min",
                recovery: "2 a 3 dias (edema leve)",
                benefits: ["Rejuvenescimento global", "Definição de contorno", "Melhora da simetria"],
                price: "Sob avaliação"
            },
            {
                title: "Toxina Botulínica (Botox)",
                desc: "O padrão ouro para prevenção e tratamento de rugas dinâmicas. Atua relaxando a musculatura facial, prevenindo a formação de vincos na testa, glabela e 'pés de galinha', além de poder ser usado para afinar o rosto (efeito Nefertiti).",
                tech: "Toxina Botulínica A (Botox/Dysport)",
                duration: "30 min",
                recovery: "Imediata",
                benefits: ["Suavização de rugas", "Prevenção do envelhecimento", "Olhar mais descansado"],
                price: "A partir de R$ 1.200"
            },
            {
                title: "Ultraformer III",
                desc: "Tecnologia de ultrassom micro e macrofocado que realiza um lifting facial não cirúrgico. Estimula a produção de colágeno profundo, melhorando a flacidez da pele e a ancoragem muscular, além de reduzir a gordura da papada.",
                tech: "Ultrassom Microfocado",
                duration: "45 a 60 min",
                recovery: "Imediata (leve rubor)",
                benefits: ["Efeito lifting", "Melhora do contorno", "Redução da papada"],
                price: "A partir de R$ 2.500"
            },
            {
                title: "Laser Lavieen",
                desc: "Conhecido como o 'efeito BB Cream' duradouro. Laser de Thulium que trata a camada superficial da pele, melhorando textura, fechando poros dilatados, clareando manchas e dando um glow instantâneo.",
                tech: "Laser de Thulium 1927nm",
                duration: "30 min",
                recovery: "1 dia (vermelhidão leve)",
                benefits: ["Redução de poros", "Clareamento de melasma", "Glow instantâneo"],
                price: "A partir de R$ 800"
            }
        ],
        corporal: [
            {
                title: "CM Slim (Estimulação Muscular)",
                desc: "Tecnologia de campo eletromagnético (HI-EMT) que realiza 20.000 contrações supramáximas em 30 minutos. Equivale a 20.000 abdominais, promovendo hipertrofia muscular e queima de gordura simultânea.",
                tech: "HI-EMT (High Intensity Electromagnetic Muscle Trainer)",
                duration: "30 min",
                recovery: "Imediata",
                benefits: ["Definição muscular", "Levantamento de glúteos", "Redução de gordura"],
                price: "Pacotes sob consulta"
            },
            {
                title: "Criolipólise de Placas",
                desc: "Evolução da criolipólise tradicional. Utiliza placas de congelamento que cobrem uma área maior sem sucção, eliminando o risco de hematomas e flacidez. Elimina até 30% da gordura localizada na área tratada.",
                tech: "Criosculpt",
                duration: "45 a 60 min",
                recovery: "Imediata",
                benefits: ["Redução de medidas", "Sem dor/hematomas", "Trata grandes áreas"],
                price: "A partir de R$ 600/área"
            },
            {
                title: "Bioestimulador Corporal",
                desc: "Aplicação de Sculptra ou Radiesse no corpo (bumbum, coxas, braços, abdômen) para combater a flacidez e melhorar a celulite. Estimula o próprio corpo a produzir colágeno novo, firmando a pele.",
                tech: "Ácido Polilático ou Hidroxiapatita de Cálcio",
                duration: "45 min",
                recovery: "Imediata",
                benefits: ["Melhora da celulite", "Firmeza da pele", "Efeito 'empina bumbum'"],
                price: "Sob avaliação"
            }
        ],
        intimo: [
            {
                title: "Rejuvenescimento Íntimo a Laser",
                desc: "Tratamento revolucionário com laser de CO2 ou Erbium para melhora da funcionalidade e estética vaginal. Trata flacidez, atrofia, ressecamento e incontinência urinária leve.",
                tech: "Laser Íntimo (Monalisa Touch/Feminine)",
                duration: "20 min",
                recovery: "3 a 5 dias (abstinência sexual)",
                benefits: ["Melhora lubrificação", "Clareamento", "Trata incontinência leve"],
                price: "Sob avaliação"
            },
            {
                title: "Preenchimento de Grandes Lábios",
                desc: "Devolve o volume perdido com o envelhecimento na região íntima, melhorando a estética e a proteção da região. Realizado com ácido hialurônico específico para a área.",
                tech: "Ácido Hialurônico",
                duration: "30 min",
                recovery: "2 dias",
                benefits: ["Rejuvenescimento estético", "Melhora funcional", "Conforto"],
                price: "Sob avaliação"
            }
        ],
        capilar: [
            {
                title: "MMP Capilar",
                desc: "Microinfusão de Medicamentos na Pele. Técnica que utiliza microagulhamento para injetar fatores de crescimento, vitaminas e bloqueadores enzimáticos diretamente no folículo capilar.",
                tech: "MMP®",
                duration: "30 min",
                recovery: "Imediata",
                benefits: ["Redução da queda", "Engrossamento dos fios", "Estímulo de crescimento"],
                price: "A partir de R$ 450/sessão"
            },
            {
                title: "LEDterapia Capilar",
                desc: "Uso de luzes de baixa potência (vermelha e infravermelha) para aumentar a oxigenação e nutrição dos folículos, acelerando o crescimento e reduzindo a inflamação do couro cabeludo.",
                tech: "Capellux / LED Médico",
                duration: "20 min",
                recovery: "Imediata",
                benefits: ["Ação anti-inflamatória", "Fortalecimento", "Indolor"],
                price: "Incluso nos protocolos"
            }
        ]
    };

    const faqs = [
        { q: "Os procedimentos são dolorosos?", a: "Prezamos pelo conforto absoluto. Utilizamos anestésicos tópicos de alta potência e, em alguns casos, bloqueios anestésicos locais para garantir que a experiência seja praticamente indolor." },
        { q: "Como sei qual tratamento é ideal para mim?", a: "Todos os nossos tratamentos começam com uma avaliação detalhada onde analisamos sua anatomia, qualidade da pele e objetivos. O plano de tratamento é 100% personalizado." },
        { q: "Posso parcelar os tratamentos?", a: "Sim, oferecemos parcelamento em até 12x no cartão de crédito para a maioria dos procedimentos e pacotes." },
        { q: "Quanto tempo duram os resultados da Harmonização?", a: "Varia de acordo com o produto e organismo, mas geralmente de 12 a 18 meses. O ácido hialurônico é reabsorvível e seguro." },
        { q: "Existe idade mínima para começar?", a: "Não existe regra rígida. Focamos na necessidade. Muitos pacientes iniciam o 'Prejuvenation' (prevenção) a partir dos 25 anos com Botox e estímulo de colágeno." }
    ];

    return (
        <div className="bg-neutral-50 overflow-hidden">

            {/* 1. HERO SERVIÇOS */}
            <section className="relative py-24 bg-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 to-purple-900/30 mix-blend-overlay z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop"
                        alt="Tratamentos Premium"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 text-center max-w-4xl">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in">Menu de Excelência</span>
                    <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8 animate-fade-in-up">
                        Soluções Avançadas para <br /><span className="text-rose-400">Cada Necessidade</span>
                    </h1>
                    <p className="text-xl text-neutral-300 font-light leading-relaxed animate-fade-in-up delay-100">
                        Navegue por nossas categorias e descubra o protocolo ideal para revelar sua melhor versão, com segurança e resultados naturais.
                    </p>
                </div>
            </section>

            {/* 2. NAVEGAÇÃO DE CATEGORIAS */}
            <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-rose-100 py-4 shadow-sm">
                <div className="container mx-auto px-6 overflow-x-auto">
                    <div className="flex justify-center min-w-max gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeCategory === cat.id
                                        ? "bg-rose-600 text-white shadow-lg scale-105"
                                        : "bg-neutral-50 text-neutral-500 hover:bg-rose-50 hover:text-rose-500"
                                    }`}
                            >
                                <cat.icon size={18} />
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. LISTA DE TRATAMENTOS */}
            <section className="py-24 bg-white min-h-screen">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="space-y-24">
                        {treatments[activeCategory as keyof typeof treatments].map((item, idx) => (
                            <div key={idx} className="flex flex-col lg:flex-row gap-12 items-start border-b border-neutral-100 pb-16 last:border-0 animation-fade-in-up">
                                <div className="lg:w-1/3">
                                    <div className="sticky top-40">
                                        <span className="text-9xl font-serif text-rose-50 font-bold absolute -top-16 -left-10 -z-10">0{idx + 1}</span>
                                        <h3 className="font-serif text-3xl font-bold text-neutral-900 mb-6">{item.title}</h3>
                                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl mb-6">
                                            <Image
                                                src={`https://source.unsplash.com/random/800x600/?spa,${activeCategory},${idx}`}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Link href="/sites-institucionais/premium/clinica-estetica-avancada/contato" className="w-full btn-primary py-4 rounded-xl flex items-center justify-center gap-2 bg-rose-600 text-white font-bold shadow-lg shadow-rose-200 hover:bg-rose-700 transition-colors">
                                            Agendar Avaliação <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>

                                <div className="lg:w-2/3 space-y-8 pt-4">
                                    <div>
                                        <h4 className="flex items-center gap-2 text-rose-600 font-bold mb-3 uppercase tracking-wider text-sm">
                                            <Sparkles size={16} /> O que é
                                        </h4>
                                        <p className="text-lg text-neutral-600 font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="bg-neutral-50 p-6 rounded-2xl">
                                            <h4 className="flex items-center gap-2 text-rose-600 font-bold mb-3 uppercase tracking-wider text-sm">
                                                <Zap size={16} /> Tecnologia
                                            </h4>
                                            <p className="text-neutral-700 font-medium">{item.tech}</p>
                                        </div>
                                        <div className="bg-neutral-50 p-6 rounded-2xl">
                                            <h4 className="flex items-center gap-2 text-rose-600 font-bold mb-3 uppercase tracking-wider text-sm">
                                                <Clock size={16} /> Duração e Recuperação
                                            </h4>
                                            <p className="text-neutral-700 font-medium">Sessão: {item.duration}</p>
                                            <p className="text-neutral-500 text-sm mt-1">Recuperação: {item.recovery}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="flex items-center gap-2 text-rose-600 font-bold mb-4 uppercase tracking-wider text-sm">
                                            <CheckCircle2 size={16} /> Principais Benefícios
                                        </h4>
                                        <ul className="space-y-3">
                                            {item.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-3 text-neutral-600">
                                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                                        <CheckCircle2 size={14} />
                                                    </div>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-6 border border-amber-200 bg-amber-50 rounded-2xl flex items-start gap-4">
                                        <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="font-bold text-amber-800 text-sm mb-1">Investimento Estimado</p>
                                            <p className="text-amber-900 font-serif text-lg">{item.price}</p>
                                            <p className="text-[10px] text-amber-700/70 mt-1 uppercase tracking-wider">*Valores sujeitos a alteração após avaliação médica presencial.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. HARMONIZAÇÃO SPECIAL */}
            <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block">Especialidade da Casa</span>
                            <h2 className="font-serif text-5xl mb-6">Harmonização Facial <br /><i>Full Face</i></h2>
                            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                                Nossa abordagem não é sobre transformar você em outra pessoa, mas sim gerenciar o envelhecimento com elegância. Repomos estruturas ósseas e de gordura perdidas com o tempo, devolvendo a sustentação e o contorno jovial.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="border border-white/20 p-6 rounded-2xl">
                                    <p className="text-3xl font-serif text-rose-400 mb-2">MD Codes™</p>
                                    <p className="text-sm text-neutral-400">Técnica de mapeamento facial para lifting não cirúrgico.</p>
                                </div>
                                <div className="border border-white/20 p-6 rounded-2xl">
                                    <p className="text-3xl font-serif text-rose-400 mb-2">Delta V</p>
                                    <p className="text-sm text-neutral-400">Trigonometria facial para recuperação do triângulo da juventude.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative aspect-square rounded-full border-2 border-rose-500/30 p-4 animate-spin-slow">
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
                                        alt="Harmonização"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
                                <p className="text-4xl font-bold font-serif">10+</p>
                                <p className="text-xs uppercase tracking-widest">Anos Mais Jovem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ */}
            <section className="py-24 bg-rose-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="font-serif text-4xl text-center text-neutral-900 mb-16">Dúvidas Frequentes</h2>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-bold text-neutral-900 text-lg pr-4">{faq.q}</span>
                                    {openFaq === idx ? <ChevronUp className="text-rose-600 shrink-0" /> : <ChevronDown className="text-neutral-400 shrink-0" />}
                                </button>
                                <div className={`px-6 pb-6 text-neutral-600 leading-relaxed font-light ${openFaq === idx ? 'block' : 'hidden'}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
