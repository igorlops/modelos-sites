import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { Scale, Shield, FileText, Users, Award, TrendingUp, CheckCircle, Briefcase } from "lucide-react";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow">
                <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-white py-20 md:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <span className="inline-block py-2 px-4 rounded bg-amber-700 text-amber-100 text-sm font-bold mb-6 tracking-wide uppercase">
                                Advocacia Empresarial Estratégica
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Proteja seu negócio com <span className="text-amber-300">expertise jurídica de alto nível</span>
                            </h1>
                            <p className="text-lg text-amber-100 mb-8 max-w-2xl leading-relaxed">
                                Martins & Associados oferece assessoria jurídica completa para empresas que buscam segurança, compliance e crescimento sustentável. Mais de 20 anos defendendo os interesses de negócios como o seu.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/sites-institucionais/simples/advocacia-empresarial/contato" className="px-8 py-4 bg-white text-amber-900 rounded font-bold hover:bg-amber-50 transition-colors text-center shadow-lg">
                                    Agendar Consulta Estratégica
                                </Link>
                                <Link href="/sites-institucionais/simples/advocacia-empresarial/servicos" className="px-8 py-4 bg-transparent border-2 border-amber-300 rounded font-bold hover:bg-amber-800 transition-colors text-center">
                                    Conhecer Áreas de Atuação
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Os Riscos</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Contratos mal redigidos, litígios trabalhistas, questões fiscais complexas e falta de compliance que podem custar milhões e comprometer a continuidade do negócio.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Nossa Proteção</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Assessoria preventiva e contenciosa completa, estruturação jurídica sólida e acompanhamento estratégico que minimiza riscos e maximiza oportunidades de crescimento.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Nosso Diferencial</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Mais de 20 anos de experiência, equipe especializada em direito empresarial e visão estratégica de negócios que vai além do jurídico tradicional.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Áreas de Atuação Especializadas</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Expertise jurídica completa para todas as necessidades da sua empresa</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: FileText,
                                    title: "Direito Societário",
                                    desc: "Constituição de empresas, alterações contratuais, fusões, aquisições, governança corporativa e planejamento sucessório com assessoria completa."
                                },
                                {
                                    icon: Briefcase,
                                    title: "Direito Trabalhista",
                                    desc: "Consultoria preventiva, defesa em reclamações trabalhistas, elaboração de políticas internas e compliance trabalhista para evitar passivos."
                                },
                                {
                                    icon: Scale,
                                    title: "Direito Tributário",
                                    desc: "Planejamento tributário, defesas administrativas e judiciais, recuperação de créditos e estruturação fiscal otimizada."
                                },
                                {
                                    icon: FileText,
                                    title: "Contratos Empresariais",
                                    desc: "Elaboração, revisão e negociação de contratos complexos, acordos comerciais, parcerias estratégicas e documentos societários."
                                },
                                {
                                    icon: Shield,
                                    title: "Compliance e LGPD",
                                    desc: "Implementação de programas de conformidade, adequação à LGPD, políticas anticorrupção e gestão de riscos regulatórios."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Recuperação Judicial",
                                    desc: "Assessoria em processos de recuperação judicial e extrajudicial, reestruturação de dívidas e negociação com credores."
                                }
                            ].map((area, i) => (
                                <div key={i} className="p-8 rounded-xl bg-white hover:shadow-lg transition-shadow border border-slate-100">
                                    <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded flex items-center justify-center mb-6">
                                        <area.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">{area.desc}</p>
                                    <Link href="/sites-institucionais/simples/advocacia-empresarial/servicos" className="text-amber-700 font-semibold inline-flex items-center hover:text-amber-800">
                                        Saiba mais →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por Que Escolher Martins & Associados</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">Compromisso com excelência jurídica e visão estratégica de negócios</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "⚖️",
                                    title: "20+ Anos de Experiência",
                                    desc: "Mais de duas décadas assessorando empresas de diversos portes e segmentos com histórico comprovado de sucesso em causas complexas."
                                },
                                {
                                    icon: "👨‍⚖️",
                                    title: "Advogados Especializados",
                                    desc: "Equipe com mestrado, doutorado e especializações nas melhores instituições. Atualização constante sobre legislação e jurisprudência."
                                },
                                {
                                    icon: "🎯",
                                    title: "Visão Estratégica de Negócios",
                                    desc: "Não somos apenas advogados técnicos. Entendemos de business e pensamos soluções que fazem sentido para o crescimento da empresa."
                                },
                                {
                                    icon: "📊",
                                    title: "Assessoria Preventiva",
                                    desc: "Atuamos proativamente para evitar litígios, identificando riscos antes que se tornem processos caros e demorados."
                                },
                                {
                                    icon: "💼",
                                    title: "Atendimento Personalizado",
                                    desc: "Cada cliente tem um advogado sócio de referência que conhece profundamente seu negócio e está disponível quando você precisa."
                                },
                                {
                                    icon: "🔒",
                                    title: "Sigilo e Ética Absolutos",
                                    desc: "Confidencialidade rigorosa em todas as tratativas, códigos internos de ética mais rígidos que a OAB e compliance integral."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Casos de Sucesso</h2>
                            <p className="text-slate-600">Resultados que transformam empresas</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-xl font-bold text-amber-800">
                                        EC
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Empresa de Tecnologia</h4>
                                        <p className="text-sm text-slate-500">Direito Tributário</p>
                                    </div>
                                </div>
                                <div className="text-yellow-500 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed">
                                    "Recuperamos R$ 2,3 milhões em créditos tributários com a tese jurídica apresentada pela equipe. Além do valor, a segurança jurídica que temos hoje é inestimável."
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-xl font-bold text-amber-800">
                                        IM
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Indústria Metalúrgica</h4>
                                        <p className="text-sm text-slate-500">Recuperação Judicial</p>
                                    </div>
                                </div>
                                <div className="text-yellow-500 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed">
                                    "Estávamos à beira da falência. A estratégia de recuperação judicial elaborada salvou 200 empregos e hoje estamos crescendo 30% ao ano."
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-xl font-bold text-amber-800">
                                        RT
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Rede de Varejo</h4>
                                        <p className="text-sm text-slate-500">Trabalhista Preventivo</p>
                                    </div>
                                </div>
                                <div className="text-yellow-500 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed">
                                    "Com as políticas e treinamentos implementados, reduzimos 80% das reclamações trabalhistas. O passivo que existia simplesmente desapareceu."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gradient-to-r from-amber-900 to-yellow-900 text-white text-center">
                    <div className="container mx-auto px-4">
                        <Scale size={60} className="mx-auto mb-8 opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Proteja Seu Negócio com Quem Entende de Direito Empresarial</h2>
                        <p className="text-amber-100 mb-3 max-w-2xl mx-auto text-lg">
                            Agende uma consulta estratégica sem compromisso e entenda como podemos proteger e impulsionar sua empresa.
                        </p>
                        <p className="text-amber-200 mb-8 max-w-2xl mx-auto">
                            Primeira reunião sem custo para análise do seu caso.
                        </p>
                        <Link href="/sites-institucionais/simples/advocacia-empresarial/contato" className="inline-block px-10 py-5 bg-white text-amber-900 font-bold rounded hover:bg-amber-50 transition-colors shadow-2xl text-lg">
                            Agendar Consulta Gratuita
                        </Link>
                        <p className="mt-6 text-amber-200 text-sm">
                            📞 (11) 3030-3030 | 📱 WhatsApp: (11) 99999-0000
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
