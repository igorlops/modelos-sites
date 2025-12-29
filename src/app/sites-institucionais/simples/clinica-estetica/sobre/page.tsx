import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle2, Target, Eye, Gem, Users, Award } from "lucide-react";

export default function SobrePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Nossa História de Dedicação à Beleza</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">Há mais de 8 anos transformando autoestimas através da estética avançada e cuidado humanizado</p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-slate-200 flex items-center justify-center text-slate-400">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">📸</div>
                                    <p className="font-semibold">Nossa Clínica</p>
                                    <p className="text-sm">Lumina Estética Avançada</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif text-slate-900 mb-6">Como Tudo Começou</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    A Lumina Estética nasceu em 2016 do sonho de três profissionais visionárias: Dra. Camila Rodrigues (biomédica esteta), Enf. Juliana Costa (enfermeira estética) e a gestora empresarial Marina Alves. Unidas pela mesma filosofia de que a beleza vai muito além da aparência física.
                                </p>
                                <p>
                                    Começamos em uma pequena sala comercial na Vila Madalena, com apenas duas macas e um grande propósito: devolver a confiança das mulheres através de procedimentos estéticos seguros e naturais. Cada cliente era tratado como única, e esse cuidado personalizado nos fez crescer organicamente.
                                </p>
                                <p>
                                    Hoje, ocupamos uma clínica de 300m² na Avenida Faria Lima, com 6 salas de atendimento equipadas com tecnologia de última geração importada. Nossa equipe cresceu para mais de 15 profissionais especializados em diferentes áreas da estética facial e corporal, mas nosso propósito permanece o mesmo.
                                </p>
                                <p className="font-semibold text-rose-600">
                                    Já cuidamos de mais de 12.000 pacientes e continuamos com a mesma paixão e dedicação do primeiro dia, priorizando sempre resultados naturais e seguros.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-rose-50 to-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100">
                                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                                    <Target className="text-rose-600" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Missão</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Proporcionar tratamentos estéticos de excelência que realçam a beleza natural de cada pessoa, combinando tecnologia avançada com atendimento humanizado e ético, respeitando a individualidade e promovendo autoestima saudável.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100">
                                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                                    <Eye className="text-rose-600" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Visão</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Ser referência nacional em estética avançada até 2028, reconhecida pela excelência técnica, inovação constante em protocolos e pelo impacto positivo transformador na vida e autoestima das nossas clientes.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100">
                                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                                    <Gem className="text-rose-600" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossos Valores</h3>
                                <ul className="text-slate-600 space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-rose-500 mr-2 flex-shrink-0 mt-1" size={18} />
                                        Excelência em resultados
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-rose-500 mr-2 flex-shrink-0 mt-1" size={18} />
                                        Ética e transparência
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-rose-500 mr-2 flex-shrink-0 mt-1" size={18} />
                                        Empatia e acolhimento
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-rose-500 mr-2 flex-shrink-0 mt-1" size={18} />
                                        Inovação contínua
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-rose-500 mr-2 flex-shrink-0 mt-1" size={18} />
                                        Naturalidade nos resultados
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">O Que Nos Torna Únicos</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Não é só sobre procedimentos. É sobre transformar vidas com cuidado genuíno e técnica impecável.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🏥</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Estrutura Premium</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Clínica com 6 salas de atendimento modernas, equipadas com ar-condicionado, iluminação especial e mobiliário ergonômico. Ambiente aromaterápico e recepção acolhedora. Tudo pensado no seu conforto absoluto.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                                <Users size={24} className="text-rose-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Equipe Multidisciplinar</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Biomédicos estetas, enfermeiros especializados, fisioterapeutas dermatofuncionais e nutricionistas em um só lugar. Atendimento integrado para resultados superiores e acompanhamento holístico.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🔬</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Tecnologia Importada</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Laser fracionado CO2, radiofrequência microagulhada Morpheus8, ultrassom microfocado Ultraformer III e criolipólise de última geração. Equipamentos aprovados pela Anvisa e certificados internacionalmente.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">📱</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Gestão Personalizada</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Agendamento online 24h, lembretes automáticos via WhatsApp, prontuário digital com fotos de evolução e acompanhamento pós-procedimento com protocolo de homecare personalizado para cada cliente.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-slate-50 to-rose-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Conheça Nossa Equipe</h2>
                            <p className="text-xl text-slate-600">Profissionais altamente qualificados que se importam de verdade com seu bem-estar</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-rose-100">
                                <div className="w-32 h-32 bg-gradient-to-br from-rose-200 to-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                                    👩‍⚕️
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Dra. Camila Rodrigues</h3>
                                <p className="text-rose-600 font-semibold mb-3">Biomédica Esteta</p>
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                    Pós-graduada em Estética Avançada pela FMABC. Especialista em harmonização facial orofacial com formação internacional em Los Angeles. Mais de 5.000 procedimentos realizados.
                                </p>
                                <p className="text-xs text-slate-500">CRBM 12345</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-rose-100">
                                <div className="w-32 h-32 bg-gradient-to-br from-rose-200 to-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                                    👩‍⚕️
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Enf. Juliana Costa</h3>
                                <p className="text-rose-600 font-semibold mb-3">Enfermeira Estética</p>
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                    Especialista em Dermatologia Estética pela UNIFESP. Certificada em aplicação de toxina botulínica e preenchimentos faciais. Referência em protocolos de rejuvenescimento não-invasivo.
                                </p>
                                <p className="text-xs text-slate-500">COREN-SP 234567</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-rose-100">
                                <div className="w-32 h-32 bg-gradient-to-br from-rose-200 to-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                                    👩
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Dra. Fernanda Lima</h3>
                                <p className="text-rose-600 font-semibold mb-3">Fisioterapeuta Dermatofuncional</p>
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                    Doutora em Ciências da Saúde pela UNICAMP. Especialista em tratamentos corporais e drenagem linfática. Expertise em reabilitação pós-cirúrgica e modelagem corporal avançada.
                                </p>
                                <p className="text-xs text-slate-500">CREFITO-3 345678</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Venha Conhecer Nossa Estrutura</h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Agende sua avaliação gratuita e conheça pessoalmente nossa clínica, equipe e metodologia de trabalho
                    </p>
                    <Link href="/sites-institucionais/simples/clinica-estetica/contato" className="inline-block bg-rose-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-rose-600 transition-all duration-200 shadow-lg">
                        Agendar Visita Gratuita
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function Link({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
    return <a href={href} className={className}>{children}</a>;
}
