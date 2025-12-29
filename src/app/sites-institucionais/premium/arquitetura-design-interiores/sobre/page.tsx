import Image from "next/image";
import Link from "next/link";
import { Award, Users, Target, Heart, CheckCircle2, ArrowRight } from "lucide-react";

export default function SobrePage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* 1. Hero Sobre */}
            <section className="relative py-24 md:py-32 bg-stone-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop"
                        alt="Escritório de arquitetura"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent z-10" />

                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20">
                    <div className="max-w-3xl">
                        <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Nossa Essência</span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
                            Mais que arquitetos,<br />somos contadores de <span className="text-amber-500">histórias espaciais.</span>
                        </h1>
                        <p className="text-xl text-stone-300 leading-relaxed font-light">
                            Fundada em 2009, a ArchPremium nasceu com o propósito de desafiar o status quo da arquitetura de luxo, trazendo humanidade e personalização radical para cada traço.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. História - Timeline */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/3 sticky top-32">
                            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Nossa Trajetória</h2>
                            <p className="text-stone-600 mb-8 leading-relaxed">
                                De um pequeno estúdio na Vila Madalena a uma referência internacional em design de interiores e arquitetura corporativa. Uma jornada pautada pela excelência.
                            </p>
                            <Link href="/sites-institucionais/premium/arquitetura-design-interiores/portfolio" className="text-amber-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                Ver Projetos Premiados <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="md:w-2/3 border-l-2 border-stone-200 pl-8 md:pl-16 space-y-20 relative">
                            {[
                                { year: "2009", title: "A Fundação", text: "Iniciamos nossas atividades com foco em reformas residenciais de alto padrão, buscando trazer o conceito de 'boutique de arquitetura'." },
                                { year: "2012", title: "Expansão Corporativa", text: "Abrimos nossa divisão B2B, atendendo grandes empresas de tecnologia que buscavam escritórios inovadores no Brasil." },
                                { year: "2015", title: "Primeiro Prêmio Internacional", text: "Vencedores do iF Design Award com o projeto 'Casa Suspensa', consolidando nossa assinatura estética no mercado." },
                                { year: "2019", title: "Tecnologia BIM", text: "Implementação total da metodologia BIM (Building Information Modeling), reduzindo em 40% os erros de obra e retrabalhos." },
                                { year: "2024", title: "Expansão Global", text: "Inauguração do nosso escritório em Lisboa e Miami, levando o design brasileiro para novos horizontes." }
                            ].map((item, idx) => (
                                <div key={idx} className="relative group">
                                    <span className="absolute -left-[41px] md:-left-[73px] top-0 w-5 h-5 rounded-full bg-stone-300 border-4 border-white group-hover:bg-amber-600 group-hover:scale-125 transition-all duration-300" />
                                    <span className="text-6xl font-serif font-bold text-stone-100 absolute -top-10 -left-4 -z-10 group-hover:text-amber-500/10 transition-colors">{item.year}</span>
                                    <h3 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
                                    <p className="text-stone-600 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Missão, Visão, Valores */}
            <section className="py-24 bg-stone-100">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Nossa Missão</h3>
                            <p className="text-stone-600 leading-relaxed">
                                Transformar a relação das pessoas com o espaço construído, criando ambientes que não apenas funcionam, mas inspiram, acolhem e elevam o espírito humano através do design consciente e atemporal.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Nossa Visão</h3>
                            <p className="text-stone-600 leading-relaxed">
                                Ser reconhecido globalmente como o escritório brasileiro que melhor traduz a sofisticação tropical contemporânea, liderando a inovação em sustentabilidade e tecnologia aplicada à arquitetura.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Nossos Valores</h3>
                            <ul className="space-y-3 text-stone-600">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Excelência Obsessiva</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Transparência Radical</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Sustentabilidade Real</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Empatia no Design</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Inovação Contínua</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Equipe */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">Quem Faz Acontecer</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Mentes Brilhantes, Projetos Únicos</h2>
                        <p className="text-stone-600">Uma equipe multidisciplinar formada por arquitetos, designers, engenheiros e paisagistas apaixonados pelo detalhe.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Fernanda Lins", role: "Sócia Fundadora & Diretora Criativa", img: "https://randomuser.me/api/portraits/women/65.jpg", bio: "Arquiteta pela FAU-USP com mestrado em Design de Interiores em Milão. 15 anos de experiência liderando projetos de alto padrão." },
                            { name: "Carlos Mendes", role: "Sócio & Diretor de Engenharia", img: "https://randomuser.me/api/portraits/men/32.jpg", bio: "Engenheiro Civil especialista em estruturas complexas e gestão de obras. Garante que a visão criativa se torne realidade segura." },
                            { name: "Juliana Costa", role: "Head de Interiores", img: "https://randomuser.me/api/portraits/women/44.jpg", bio: "Designer premiada com foco em mobiliário brasileiro e arte contemporânea. Responsável pela curadoria final de cada projeto." },
                            { name: "Roberto Silva", role: "Arquiteto Sênior", img: "https://randomuser.me/api/portraits/men/86.jpg", bio: "Especialista em BIM e sustentabilidade. Lidera a implementação de soluções eco-eficientes em nossos projetos residenciais." }
                        ].map((member, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">{member.name}</h3>
                                <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">{member.role}</p>
                                <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA e Números */}
            <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-stone-800/50 skew-x-12 translate-x-32" />
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                            Vamos construir o próximo <br /><span className="text-amber-500">capítulo da sua história?</span>
                        </h2>
                        <p className="text-stone-300 text-lg mb-10 leading-relaxed">
                            Cada projeto é uma oportunidade única de inovação. Estamos prontos para ouvir suas ideias e transformá-las em algo extraordinário.
                        </p>
                        <Link
                            href="/sites-institucionais/premium/arquitetura-design-interiores/contato"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 hover:shadow-lg hover:shadow-amber-600/20 transition-all duration-300"
                        >
                            Iniciar Conversa <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">15+</div>
                            <p className="text-stone-400 uppercase tracking-widest text-sm">Anos de Experiência</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">150+</div>
                            <p className="text-stone-400 uppercase tracking-widest text-sm">Projetos Entregues</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">12</div>
                            <p className="text-stone-400 uppercase tracking-widest text-sm">Prêmios Nacionais</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">100%</div>
                            <p className="text-stone-400 uppercase tracking-widest text-sm">Prazos Cumpridos</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
