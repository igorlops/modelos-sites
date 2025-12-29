import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { Heart, User, Coffee, Smile, Brain, Users as UsersIcon, Shield, Award } from "lucide-react";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow">
                {/* Hero */}
                <section className="min-h-[85vh] flex items-center bg-[#FDFBF7] relative">
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-teal-50 hidden md:block rounded-l-full opacity-50"></div>
                    <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="max-w-xl">
                            <span className="text-teal-600 font-semibold tracking-wider text-sm mb-4 block uppercase">Psicologia Clínica</span>
                            <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-8 leading-[1.1]">
                                Um espaço seguro para sua <span className="text-teal-700 italic">jornada interior</span>
                            </h1>
                            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                                A terapia é um ato de coragem e autocuidado. Através da Terapia Cognitivo-Comportamental baseada em evidências científicas, ajudo você a ressignificar experiências, compreender padrões e construir uma vida com mais leveza, propósito e bem-estar emocional.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/sites-institucionais/simples/psicologo/contato" className="px-8 py-4 bg-teal-700 text-white rounded-md font-medium hover:bg-teal-800 transition-all shadow-lg shadow-teal-700/20">
                                    Agendar Primeira Sessão
                                </Link>
                                <Link href="/sites-institucionais/simples/psicologo/sobre" className="px-8 py-4 bg-transparent border border-stone-300 text-stone-700 rounded-md font-medium hover:bg-white transition-all">
                                    Conhecer Abordagem
                                </Link>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="w-full h-[600px] bg-stone-200 rounded-t-[100px] rounded-b-[40px] relative overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-stone-300 flex items-center justify-center text-stone-500 flex-col">
                                    <div className="text-8xl mb-4">🌿</div>
                                    <p className="font-semibold text-lg">Consultório Acolhedor</p>
                                    <p className="text-sm">Espaço terapêutico</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Proposta de Valor */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">O Sofrimento</h3>
                                <p className="text-stone-600 leading-relaxed">
                                    Ansiedade que paralisa, pensamentos que não param, dificuldade em lidar com emoções e a sensação de estar preso em padrões que causam sofrimento repetitivo.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">O Caminho</h3>
                                <p className="text-stone-600 leading-relaxed">
                                    Escuta ativa e acolhedora, comb inada com ferramentas práticas da TCC para ressignificar pensamentos, regular emoções e construir novos comportamentos mais adaptativos.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">A Transformação</h3>
                                <p className="text-stone-600 leading-relaxed">
                                    Mais de 10 anos acompanhando jornadas de autoconhecimento e mudança. Abordagem baseada em evidências científicas com foco em resultados mensuráveis e duradouros.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Areas */}
                <section className="py-24 bg-[#F5F2EA]">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-4">Como Posso Ajudar Você?</h2>
                            <p className="text-stone-600 text-lg">Trabalho com foco no acolhimento genuíno e em ferramentas práticas validadas cientificamente para lidar com:</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Coffee,
                                    title: "Ansiedade e Estresse",
                                    desc: "Aprenda a gerenciar pensamentos acelerados, preocupação excessiva, crises de ansiedade e sintomas físicos através de técnicas de regulação emocional e reestruturação cognitiva."
                                },
                                {
                                    icon: Brain,
                                    title: "Depressão e Tristeza",
                                    desc: "Compreenda os padrões de pensamento negativo, desenvolva estratégias de enfrentamento e resgate o prazer e motivação para atividades que você ama."
                                },
                                {
                                    icon: User,
                                    title: "Autoconhecimento",
                                    desc: "Entenda seus padrões de comportamento, crenças limitantes, gatilhos emocionais e desenvolva maior consciência sobre si mesmo para escolhas mais alinhadas."
                                },
                                {
                                    icon: Heart,
                                    title: "Relacionamentos",
                                    desc: "Melhore sua comunicação assertiva, estabeleça limites saudáveis, compreenda dinâmicas relacionais e fortaleça vínculos afetivos autênticos."
                                },
                                {
                                    icon: Shield,
                                    title: "Traumas e Luto",
                                    desc: "Processe experiências dolorosas do passado, ressignifique perdas e desenvolva resiliência emocional para seguir em frente com mais leveza."
                                },
                                {
                                    icon: UsersIcon,
                                    title: "Desenvolvimento Pessoal",
                                    desc: "Defina objetivos claros, desenvolva autoconfiança, supere procrastinação e construa uma vida mais alinhada com seus valores e propósito."
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-10 rounded-xl bg-white hover:shadow-lg transition-shadow border border-stone-100">
                                    <item.icon size={32} className="text-teal-600 mb-6" strokeWidth={1.5} />
                                    <h3 className="text-xl font-serif text-stone-800 mb-3">{item.title}</h3>
                                    <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Por Que Escolher */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">Por Que Iniciar Terapia Comigo?</h2>
                            <p className="text-stone-600 max-w-2xl mx-auto">Compromisso com sua evolução através de uma abordagem ética, acolhedora e cientificamente fundamentada.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-stone-900 mb-2">10+ Anos de Experiência</h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        Mais de uma década acompanhando pessoas em suas jornadas de autoconhecimento e transformação emocional, com centenas de casos atendidos com sucesso.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <Award size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-stone-900 mb-2">Formação Sólida</h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        Psicóloga CRP 06/12345, graduada pela USP com especialização em TCC pela UNIFESP. Formação continuada em Terapia do Esquema e Mindfulness.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">🔒</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-stone-900 mb-2">Sigilo Absoluto</h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        Ética profissional rigorosa garantindo total privacidade e confidencialidade. Seu processo terapêutico é sagrado e protegido pelo código de ét ica do CFP.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <Heart size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-stone-900 mb-2">Escuta Sem Julgamentos</h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        Ambiente seguro, acolhedor e livre de julgamentos onde você pode ser autêntico e vulnerável. Sua história merece ser ouvida com empatia e respeito.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">🧠</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-stone-900 mb-2">Baseada em Evidências</h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        Utilizo técnicas e protocolos validados científicamente pela psicologia moderna, garantindo eficácia comprovada no tratamento de diversos transtornos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-stone-900 mb-2">Foco em Autonomia</h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        Meu objetivo é te dar ferramentas para que você seja capaz de lidar com desafios de forma independente, desenvolvendo recursos internos duradouros.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Depoimento */}
                <section className="py-24 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif mb-4">Transformações Reais</h2>
                            <p className="text-teal-100">Relatos anônimos de pacientes que passaram pelo processo terapêutico</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-teal-800/50 p-8 rounded-2xl backdrop-blur-sm">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center text-teal-900 font-bold mr-4">
                                        AP
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Paciente Anônimo</h4>
                                        <p className="text-sm text-teal-200">Ansiedade Generalizada</p>
                                    </div>
                                </div>
                                <div className="text-yellow-300 mb-4">★★★★★</div>
                                <p className="italic text-teal-50 leading-relaxed">
                                    "A terapia me ajudou a enxergar saídas onde eu só via problemas. Ana me ensinou técnicas práticas que uso até hoje para lidar com a ansiedade. Foi fundamental para minha mudança de carreira e vida pessoal."
                                </p>
                            </div>

                            <div className="bg-teal-800/50 p-8 rounded-2xl backdrop-blur-sm">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center text-teal-900 font-bold mr-4">
                                        LC
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Paciente Anônimo</h4>
                                        <p className="text-sm text-teal-200">Depressão e Luto</p>
                                    </div>
                                </div>
                                <div className="text-yellow-300 mb-4">★★★★★</div>
                                <p className="italic text-teal-50 leading-relaxed">
                                    "Estava perdida após uma perda significativa. O espaço de escuta e acolhimento que encontrei foi essencial para processar o luto de forma saudável. Hoje consigo honrar memórias sem tanto sofrimento."
                                </p>
                            </div>

                            <div className="bg-teal-800/50 p-8 rounded-2xl backdrop-blur-sm">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center text-teal-900 font-bold mr-4">
                                        RM
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Paciente Anônimo</h4>
                                        <p className="text-sm text-teal-200">Autoconhecimento</p>
                                    </div>
                                </div>
                                <div className="text-yellow-300 mb-4">★★★★★</div>
                                <p className="italic text-teal-50 leading-relaxed">
                                    "Iniciei a terapia sem saber o que esperar. Hoje me entendo melhor, reconheço padrões e faço escolhas mais conscientes. A TCC me deu ferramentas práticas que transformaram minha relação comigo mesmo."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-[#F5F2EA] text-center">
                    <div className="container mx-auto px-6">
                        <Smile size={50} className="mx-auto text-teal-600 mb-8" strokeWidth={1} />
                        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">Cuide de Quem Mais Importa: Você</h2>
                        <p className="text-lg text-stone-600 mb-3 max-w-2xl mx-auto">
                            Dar o primeiro passo pode parecer difícil, mas é o mais importante de todos.
                        </p>
                        <p className="text-stone-500 mb-8 max-w-2xl mx-auto">
                            Entre em contato para agendar sua primeira sessão. Vamos conversar sobre como a terapia pode ajudar você.
                        </p>
                        <Link href="/sites-institucionais/simples/psicologo/contato" className="inline-block px-10 py-4 bg-teal-700 text-white rounded-md font-medium hover:bg-teal-800 transition-all shadow-lg">
                            Agendar Primeira Sessão
                        </Link>
                        <p className="mt-6 text-stone-500 text-sm">
                            📞 WhatsApp: (11) 98888-8888 | 📧 contato@psi.com.br
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
