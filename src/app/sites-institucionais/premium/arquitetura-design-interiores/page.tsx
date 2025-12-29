import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, DraftingCompass, LayoutDashboard, Ruler, CheckCircle2, Building2, Home, Sofa, Paintbrush, ArrowUpRight, Award, ChevronDown } from "lucide-react";

export default function HomePage() {
    return (
        <div className="flex flex-col w-full">
            {/* 1. HERO CINEMATOGRÁFICO */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop"
                        alt="Interior de luxo minimalista"
                        fill
                        className="object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900 z-10" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-10" />

                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 pt-20 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-stone-200 text-sm font-medium mb-8 animate-[fadeInDown_1s_ease-out]">
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <span>Escritório Premiado de Arquitetura & Design</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tight max-w-5xl animate-[fadeInUp_1s_ease-out_0.2s]">
                        Transformamos Visões em <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">Obras de Arte Habitáveis</span>
                    </h1>

                    <p className="text-lg md:text-xl text-stone-300 max-w-2xl mb-12 leading-relaxed font-light animate-[fadeInUp_1s_ease-out_0.4s]">
                        Especialistas em arquitetura de alto padrão e design de interiores. Criamos espaços que unem funcionalidade, estética refinada e a essência única de cada cliente.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 animate-[fadeInUp_1s_ease-out_0.6s]">
                        <Link
                            href="/sites-institucionais/premium/arquitetura-design-interiores/contato"
                            className="px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-600/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group"
                        >
                            Iniciar Meu Projeto
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/sites-institucionais/premium/arquitetura-design-interiores/portfolio"
                            className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
                        >
                            Ver Portfólio
                        </Link>
                    </div>

                    <div className="mt-20 flex items-center gap-12 text-stone-400 opacity-80 animate-[fadeIn_1.5s_ease-out_1s]">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-white mb-1">150+</span>
                            <span className="text-xs uppercase tracking-widest">Projetos Entregues</span>
                        </div>
                        <div className="w-px h-12 bg-stone-700" />
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-white mb-1">15</span>
                            <span className="text-xs uppercase tracking-widest">Anos de Mercado</span>
                        </div>
                        <div className="w-px h-12 bg-stone-700" />
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-white mb-1">12</span>
                            <span className="text-xs uppercase tracking-widest">Prêmios Nacionais</span>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                        <ChevronDown size={32} className="text-white" />
                    </div>
                </div>
            </section>

            {/* 2. LOGOS DE PARCEIROS */}
            <section className="py-12 bg-stone-50 border-b border-stone-200">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <p className="text-center text-stone-500 text-sm font-semibold uppercase tracking-widest mb-8">Parceiros Premium & Fornecedores Exclusivos</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {['Portobello', 'Deca', 'Suvinil', 'HunterDouglas', 'Artefacto', 'Ornare'].map((partner) => (
                            <span key={partner} className="text-2xl md:text-3xl font-serif font-bold text-stone-400 hover:text-stone-800 cursor-default transition-colors">
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PROPOSTA DE VALOR */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="relative">
                            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
                                    alt="Arquiteta trabalhando"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-stone-900 p-10 rounded-2xl shadow-xl max-w-xs hidden md:block">
                                <p className="text-amber-500 text-6xl font-serif font-bold mb-2">“</p>
                                <p className="text-stone-300 italic mb-4">A verdadeira arquitetura não busca apenas abrigar, mas emocionar profundamente quem a habita.</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-amber-600" />
                                    <div>
                                        <p className="text-white font-bold">Fernanda Lins</p>
                                        <p className="text-stone-500 text-xs">Arquiteta Principal</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">Manifesto ArchPremium</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                                Design que transcende o óbvio e o comum.
                            </h2>
                            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                                <p>
                                    Muitos espaços são construídos, poucos são realmente projetados para contar uma história. O problema comum no mercado é a padronização excessiva que ignora a alma do cliente e as nuances do ambiente.
                                </p>
                                <p>
                                    Nossa abordagem é diametralmente oposta. Começamos pelo &apos;porquê&apos;. Entendemos profundamente sua rotina, seus desejos não ditos e o potencial oculto de cada metro quadrado. Utilizamos tecnologia BIM avançada e curadoria de materiais nobres para entregar não apenas um projeto, mas um legado.
                                </p>
                                <p>
                                    <strong className="text-stone-900">O resultado?</strong> Ambientes que não apenas impressionam visualmente, mas que abraçam, acolhem e elevam sua qualidade de vida diária a um novo patamar de excelência.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link href="/sites-institucionais/premium/arquitetura-design-interiores/sobre" className="text-amber-600 font-bold hover:text-amber-800 transition-colors flex items-center gap-2 group">
                                    Conheça nossa filosofia <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SERVIÇOS EM DESTAQUE */}
            <section className="py-24 md:py-32 bg-stone-100">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">Nossa Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Soluções Completas de A a Z</h2>
                        <p className="text-stone-600 text-lg">Do primeiro esboço à entrega das chaves, cuidamos de cada detalhe com rigor técnico e sensibilidade artística.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Home,
                                title: "Arquitetura Residencial",
                                desc: "Projetos de casas de alto padrão que integram paisagem, conforto térmico e design arrojado.",
                                benefits: ["Estudo de viabilidade", "Projeto executivo detalhado", "Aprovação legal"]
                            },
                            {
                                icon: Sofa,
                                title: "Design de Interiores",
                                desc: "Ambientação sofisticada com curadoria de mobiliário, obras de arte e marcenaria exclusiva.",
                                benefits: ["Curadoria de mobiliário", "Memorial descritivo", "Produção final"]
                            },
                            {
                                icon: Building2,
                                title: "Projetos Corporativos",
                                desc: "Espaços de trabalho que reforçam a identidade da marca e impulsionam a produtividade da equipe.",
                                benefits: ["Ergonomia e Normas", "Acústica avançada", "Branding aplicado"]
                            },
                            {
                                icon: LayoutDashboard,
                                title: "Gestão de Obras",
                                desc: "Acompanhamento rigoroso da execução para garantir fidelidade ao projeto, prazo e orçamento.",
                                benefits: ["Cronograma físico-financeiro", "Gestão de fornecedores", "Relatórios semanais"]
                            },
                            {
                                icon: Paintbrush,
                                title: "Consultoria Decorativa",
                                desc: "Assessoria pontual para renovar ambientes através de cores, texturas e objetos de design.",
                                benefits: ["Mudança rápida", "Investimento otimizado", "Toque profissional"]
                            },
                            {
                                icon: Ruler,
                                title: "Reformas de Luxo",
                                desc: "Transformação completa de apartamentos e coberturas, do layout estrutural aos acabamentos.",
                                benefits: ["Demolição e construção", "Infraestrutura moderna", "Valorização do imóvel"]
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-2xl shadow-lg border border-stone-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer h-full flex flex-col">
                                <div className="w-16 h-16 bg-stone-50 rounded-xl flex items-center justify-center text-stone-700 mb-8 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                                    <service.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4">{service.title}</h3>
                                <p className="text-stone-600 mb-8 leading-relaxed flex-grow">{service.desc}</p>
                                <div className="space-y-3 mb-8">
                                    {service.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-stone-500">
                                            <CheckCircle2 size={16} className="text-emerald-600" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link href="/sites-institucionais/premium/arquitetura-design-interiores/servicos" className="text-amber-600 font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Saiba mais <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/sites-institucionais/premium/arquitetura-design-interiores/servicos"
                            className="inline-block px-10 py-4 border-2 border-stone-900 text-stone-900 rounded-full font-bold hover:bg-stone-900 hover:text-white transition-all duration-300"
                        >
                            Ver Detalhes dos Serviços
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. POR QUE ESCOLHER */}
            <section className="py-24 md:py-32 bg-stone-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-800 skew-x-12 translate-x-32 md:block hidden" />

                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div>
                            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Diferenciais ArchPremium</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8">
                                Por que somos a escolha da elite paulistana?
                            </h2>
                            <p className="text-stone-300 text-lg mb-12 leading-relaxed">
                                Não vendemos apenas projetos, entregamos tranquilidade, prestígio e valorização patrimonial. Nossa metodologia blindada elimina os riscos comuns de obras e reformas.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { title: "Personalização Extrema", text: "Projetos 100% únicos, sem templates." },
                                    { title: "Transparência Financeira", text: "Orçamentos abertos, sem surpresas." },
                                    { title: "Tecnologia BIM", text: "Visualização 3D realista e precisão técnica." },
                                    { title: "Fornecedores Homologados", text: "Acesso à rede exclusiva de parceiros." },
                                    { title: "Cronograma Garantido", text: "Compromisso contratual com prazos." },
                                    { title: "Pós-Entrega Vitalício", text: "Suporte contínuo para sua obra." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-stone-700">
                                            <Star size={20} className="text-amber-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-stone-400 text-sm">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-stone-700">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687644-c7f32e85f557?q=80&w=2666&auto=format&fit=crop"
                                alt="Detalhe arquitetônico de luxo"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <Award size={40} className="text-amber-500" />
                                    <span className="text-2xl font-serif font-bold">Prêmio Arquitetura 2024</span>
                                </div>
                                <p className="text-stone-300">Vencedores na categoria Residencial Luxo pela revista ArchDaily Brasil.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PORTFÓLIO PREVIEW */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">Obras Primas</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Projetos Recentes</h2>
                        </div>
                        <Link href="/sites-institucionais/premium/arquitetura-design-interiores/portfolio" className="flex items-center gap-2 text-stone-900 font-bold border-b-2 border-amber-500 pb-1 hover:text-amber-600 transition-colors">
                            Ver todos os projetos <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Casa Morumbi", cat: "Residencial", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=2670&auto=format&fit=crop" },
                            { title: "Penthouse Jardins", cat: "Interiores", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop" },
                            { title: "Office Berrini", cat: "Corporativo", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" },
                            { title: "Loft Industrial", cat: "Reforma", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop" },
                            { title: "Villa no Campo", cat: "Residencial", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" },
                            { title: "Restaurante Fusion", cat: "Comercial", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" }
                        ].map((project, idx) => (
                            <Link key={idx} href="/sites-institucionais/premium/arquitetura-design-interiores/portfolio" className="group relative block aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{project.cat}</p>
                                    <h3 className="text-3xl font-serif font-bold text-white mb-2">{project.title}</h3>
                                    <div className="flex items-center gap-2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity delay-200 text-sm">
                                        Ver projeto <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. DEPOIMENTOS */}
            <section className="py-24 md:py-32 bg-stone-100 relative overflow-hidden">
                <div className="absolute -left-20 top-20 text-[20rem] text-stone-200/50 font-serif leading-none select-none pointer-events-none">❝</div>
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">A Voz da Experiência</h2>
                        <p className="text-stone-600 text-lg">O que nossos clientes dizem sobre viver e trabalhar em espaços ArchPremium.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                text: "A equipe captou exatamente a essência que buscávamos. Não foi apenas uma reforma, foi uma ressignificação do nosso lar. O nível de detalhe impressiona.",
                                author: "Ricardo Almeida",
                                role: "CEO, TechSolutions",
                                img: "https://randomuser.me/api/portraits/men/32.jpg"
                            },
                            {
                                text: "Profissionalismo impecável. O cronograma foi seguido à risca e a gestão do orçamento foi transparente do início ao fim. Recomendo de olhos fechados.",
                                author: "Patrícia Souza",
                                role: "Advogada",
                                img: "https://randomuser.me/api/portraits/women/44.jpg"
                            },
                            {
                                text: "O escritório novo transformou a cultura da nossa empresa. Ambientes que estimulam a criatividade e o bem-estar. O ROI desse projeto é incalculável.",
                                author: "Marcelo Vivara",
                                role: "Diretor Criativo",
                                img: "https://randomuser.me/api/portraits/men/85.jpg"
                            }
                        ].map((depo, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-2xl shadow-lg relative">
                                <div className="flex gap-1 text-amber-500 mb-6">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-stone-600 italic mb-8 leading-relaxed">"{depo.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image src={depo.img} alt={depo.author} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">{depo.author}</h4>
                                        <p className="text-xs text-stone-500 uppercase tracking-wide">{depo.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CTA FINAL */}
            <section className="py-24 md:py-32 bg-stone-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-amber-900/20 to-transparent" />

                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
                        Pronto para materializar o <br />
                        <span className="text-amber-500">espaço dos seus sonhos?</span>
                    </h2>
                    <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-12">
                        Agende uma reunião inicial sem compromisso. Vamos entender suas necessidades e apresentar como podemos elevar seu projeto ao próximo nível.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/sites-institucionais/premium/arquitetura-design-interiores/contato"
                            className="px-12 py-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-amber-600/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            Agendar Consultoria
                        </Link>
                        <Link
                            href="https://wa.me/5511999999999"
                            className="px-12 py-6 bg-transparent border-2 border-stone-700 text-white rounded-full font-bold text-xl hover:bg-stone-800 hover:border-stone-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            Conversar no WhatsApp
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
