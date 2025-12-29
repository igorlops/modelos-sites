import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, ShieldCheck, Heart, Award, Users } from "lucide-react";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {/* Hero */}
                <section className="relative h-[600px] flex items-center justify-center bg-rose-50 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-6 tracking-wide">
                            ESTÉTICA AVANÇADA
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
                            Revele sua <span className="text-rose-500 italic">melhor versão</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Tratamentos personalizados que unem tecnologia de ponta e arte médica para realçar sua beleza natural com segurança, resultados visíveis e acompanhamento dedicado em cada etapa da sua transformação.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link href="/sites-institucionais/simples/clinica-estetica/contato" className="px-8 py-4 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-200">
                                Agendar Avaliação Gratuita
                            </Link>
                            <Link href="/sites-institucionais/simples/clinica-estetica/servicos" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all">
                                Conhecer Tratamentos
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Proposta de Valor */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">O Problema</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Insegurança com a aparência, sinais de envelhecimento precoce e a dificuldade de encontrar profissionais que realmente se importam com resultados naturais e seguros.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Nossa Solução</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Protocolos personalizados com tecnologia aprovada pela Anvisa, priorizando naturalidade e harmonia. Cada tratamento é único, pensado exclusivamente para você.
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
                                    Mais de 8 anos transformando autoestimas, equipe especializada continuamente atualizada e acompanhamento pós-procedimento que garante resultados duradouros.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Highlight */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Procedimentos em Destaque</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">Descubra os tratamentos mais procurados que transformam a autoestima das nossas pacientes</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Harmonização Facial",
                                    desc: "Equilíbrio perfeito entre traços naturais e técnica avançada para um rosto mais harmônico e rejuvenescido.",
                                    icon: "✨"
                                },
                                {
                                    title: "Botox Preventivo",
                                    desc: "Suavize linhas de expressão e previna rugas profundas com aplicações precisas e resultados ultra-naturais.",
                                    icon: "💆"
                                },
                                {
                                    title: "Protocolos Corporais",
                                    desc: "Redução de medidas, tratamento de celulite e flacidez com tecnologias não-invasivas de última geração.",
                                    icon: "🌟"
                                },
                                {
                                    title: "Preenchimento Labial",
                                    desc: "Volume e hidratação natural para lábios mais definidos, respeitando sua identidade facial única.",
                                    icon: "💋"
                                },
                                {
                                    title: "Bioestimuladores",
                                    desc: "Estímulo natural de colágeno para firmeza e sustentação da pele com efeito progressivo e duradouro.",
                                    icon: "🧬"
                                },
                                {
                                    title: "Peelings Médicos",
                                    desc: "Renovação celular profunda para tratar manchas, acne e melhorar textura e luminosidade da pele.",
                                    icon: "✨"
                                }
                            ].map((service, i) => (
                                <div key={i} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-8 border border-slate-100">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-serif text-slate-800 mb-3">{service.title}</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                                    <Link href="/sites-institucionais/simples/clinica-estetica/servicos" className="inline-flex items-center text-rose-500 font-medium group-hover:gap-2 transition-all">
                                        Saiba mais <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Por Que Escolher */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
                                Por Que Escolher a Lumina Estética?
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">Compromisso com excelência em cada detalhe do seu atendimento</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                                    <Award size={24} className="text-rose-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">8+ Anos de Excelência</h3>
                                    <p className="text-slate-600">
                                        Mais de uma década dedicados ao bem-estar e beleza das nossas pacientes, com milhares de procedimentos realizados com sucesso.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                                    <Users size={24} className="text-rose-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Especialistas Certificados</h3>
                                    <p className="text-slate-600">
                                        Equipe formada por biomédicos, esteticistas e enfermeiros com especialização avançada e formação internacional.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                                    <Sparkles size={24} className="text-rose-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Tecnologia de Ponta</h3>
                                    <p className="text-slate-600">
                                        Equipamentos de última geração: laser fracionado, radiofrequência microagulhada e ultrassom microfocado.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                                    <Heart size={24} className="text-rose-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Atendimento Personalizado</h3>
                                    <p className="text-slate-600">
                                        Cada paciente é única. Realizamos avaliação completa e criamos protocolos exclusivos adaptados ao seu biotipo e objetivos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                                    <ShieldCheck size={24} className="text-rose-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Segurança Máxima</h3>
                                    <p className="text-slate-600">
                                        Ambiente esterilizado, produtos de procedência certificada e protocolos rigorosos seguindo normas da Anvisa e vigilância sanitária.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                                    <Star size={24} className="text-rose-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Resultado Natural</h3>
                                    <p className="text-slate-600">
                                        Nossa filosofia é realçar sua beleza, nunca modificar sua identidade. Priorizamos harmonia e naturalidade em todos os procedimentos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Proof */}
                <section className="py-20 bg-rose-500 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-serif mb-4">Histórias de Transformação</h2>
                        <p className="text-rose-100 mb-12 max-w-2xl mx-auto">Veja o que nossas clientes dizem sobre a experiência na Lumina</p>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-rose-600/50 p-8 rounded-2xl backdrop-blur-sm">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-rose-300 rounded-full flex items-center justify-center text-rose-900 font-bold mr-4">
                                        AS
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold">Amanda Silva</h4>
                                        <p className="text-sm text-rose-100">Harmonização Facial</p>
                                    </div>
                                </div>
                                <div className="text-yellow-300 mb-4">★★★★★</div>
                                <p className="italic text-lg mb-6">"Fiquei impressionada com o profissionalismo e atenção da equipe. O resultado do meu tratamento ficou super natural, exatamente como eu queria! A Dra. Camila é incrível e explica cada etapa com muito cuidado."</p>
                            </div>
                            <div className="bg-rose-600/50 p-8 rounded-2xl backdrop-blur-sm">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-rose-300 rounded-full flex items-center justify-center text-rose-900 font-bold mr-4">
                                        CM
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold">Carla Martins</h4>
                                        <p className="text-sm text-rose-100">Botox Preventivo</p>
                                    </div>
                                </div>
                                <div className="text-yellow-300 mb-4">★★★★★</div>
                                <p className="italic text-lg mb-6">"Ambiente acolhedor e equipe maravilhosa. Me senti segura desde a avaliação até o pós-procedimento. O resultado ficou tão natural que as pessoas perguntam qual é o meu segredo para estar radiante!"</p>
                            </div>
                            <div className="bg-rose-600/50 p-8 rounded-2xl backdrop-blur-sm">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-rose-300 rounded-full flex items-center justify-center text-rose-900 font-bold mr-4">
                                        RF
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold">Renata Fernandes</h4>
                                        <p className="text-sm text-rose-100">Bioestimulador</p>
                                    </div>
                                </div>
                                <div className="text-yellow-300 mb-4">★★★★★</div>
                                <p className="italic text-lg mb-6">"A Lumina mudou minha vida! Sempre tive receio de procedimentos estéticos, mas a equipe me deixou super confortável. O acompanhamento é impecável e os resultados superaram minhas expectativas."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Pronta para transformar sua autoestima?</h2>
                        <p className="text-lg text-slate-600 mb-3 max-w-2xl mx-auto">
                            Agende sua avaliação gratuita e descubra o tratamento ideal para você.
                        </p>
                        <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
                            Sem compromisso, sem custo. Apenas uma conversa sincera sobre seus sonhos e como podemos ajudar.
                        </p>
                        <Link href="/sites-institucionais/simples/clinica-estetica/contato" className="inline-block px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg">
                            Quero Minha Avaliação Gratuita
                        </Link>
                        <p className="mt-6 text-slate-500 text-sm">
                            📞 Ligue agora: (11) 99999-9999 | 📱 WhatsApp: (11) 98888-8888
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
