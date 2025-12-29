import Header from "../components/Header";
import Footer from "../components/Footer";
import { Target, Eye, Gem, CheckCircle, Award, Scale, Users } from "lucide-react";

export default function SobrePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50 border-b border-amber-100">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Excelência Jurídica a Serviço do Seu Negócio</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Há mais de 20 anos defendendo empresários e empresas com ética, expertise e visão estratégica de mercado
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa Trajetória de Compromisso e Resultados</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Martins & Associados nasceu em 2003 da união de três advogados visionários: Dr. Roberto Martins (OAB/SP 150.000), Dra. Fernanda Costa (OAB/SP 160.000) e Dr. Carlos Eduardo Silva (OAB/SP 170.000). Todos com formação pela Universidade de São Paulo (USP) e especializações nas melhores instituições do país e exterior.
                                </p>
                                <p>
                                    O escritório foi fundado com uma proposta diferenciada: unir a excelência técnica jurídica com profunda compreensão de negócios. Não queríamos ser apenas advogados que interpretam leis, mas consultores estratégicos que ajudam empresas a crescer de forma segura e sustentável.
                                </p>
                                <p>
                                    O que começou com três sócios e uma secretária em uma sala comercial de 40m² na região da Paulista, hoje é um escritório consolidado de 600m² na Av. Brigadeiro Faria Lima, com equipe de 25 profissionais altamente qualificados atendendo empresas de pequeno, médio e grande porte em todo território nacional.
                                </p>
                                <p className="font-bold text-amber-800">
                                    Já assessoramos mais de 300 empresas em constituição, recuperação, fusões, aquisições e litígios complexos, com índice de êxito superior a 85% em causas judiciais e redução média de 70% em passivos quando atuamos preventivamente.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-200 h-[500px] rounded-lg overflow-hidden relative shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-slate-200 flex items-center justify-center text-slate-500 flex-col">
                                <div className="text-8xl mb-4">⚖️</div>
                                <p className="font-bold text-xl">Escritório Martins & Associados</p>
                                <p className="text-sm">Av. Brig. Faria Lima - São Paulo</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 bg-amber-50 rounded-lg border border-amber-100">
                            <div className="text-4xl font-bold text-amber-700 mb-2">20+</div>
                            <div className="text-sm text-slate-600">Anos de Atuação</div>
                        </div>
                        <div className="p-6 bg-amber-50 rounded-lg border border-amber-100">
                            <div className="text-4xl font-bold text-amber-700 mb-2">300+</div>
                            <div className="text-sm text-slate-600">Empresas Assessoradas</div>
                        </div>
                        <div className="p-6 bg-amber-50 rounded-lg border border-amber-100">
                            <div className="text-4xl font-bold text-amber-700 mb-2">85%</div>
                            <div className="text-sm text-slate-600">Taxa de Êxito</div>
                        </div>
                        <div className="p-6 bg-amber-50 rounded-lg border border-amber-100">
                            <div className="text-4xl font-bold text-amber-700 mb-2">25</div>
                            <div className="text-sm text-slate-600">Profissionais</div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                    <Target className="text-amber-700" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Missão</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Oferecer assessoria jurídica empresarial de excelência, combinando profundo conhecimento técnico com visão estratégica de negócios, protegendo empresas e viabilizando seu crescimento sustentável através de soluções jurídicas inovadoras e éticas.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                    <Eye className="text-amber-700" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Visão</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Ser reconhecido nacionalmente até 2030 como escritório referência em direito empresarial, conhecido pela excelência técnica, inovação jurídica e capacidade de entregar soluções que realmente transformam a realidade dos negócios dos nossos clientes.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                    <Gem className="text-amber-700" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossos Valores</h3>
                                <ul className="text-slate-600 space-y-2">
                                    {["Excelência técnica", "Ética inquestionável", "Visão de negócios", "Inovação jurídica", "Compromisso com resultados"].map((v, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-amber-600 flex-shrink-0" />
                                            <span>{v}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Diferenciais Competitivos</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">O que nos torna únicos no mercado jurídico empresarial</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: "🎓",
                                    title: "Qualificação Acadêmica Superior",
                                    desc: "100% da equipe de advogados possui pós-graduação lato ou stricto sensu. Mestres, doutores e especialistas certificados pelas melhores instituições (USP, FGV, Mackenzie, Harvard)."
                                },
                                {
                                    icon: "💼",
                                    title: "Experiência Multissetorial",
                                    desc: "Atuamos em diversos segmentos: tecnologia, indústria, varejo, saúde, educação e serviços. Essa diversidade nos permite trazer insights valiosos entre mercados."
                                },
                                {
                                    icon: "🤝",
                                    title: "Relacionamento Institucional",
                                    desc: "Forte network com associações empresariais, tribunais superiores e órgãos reguladores, facilitando a defesa de interesses e antecipação de mudanças regulatórias."
                                },
                                {
                                    icon: "⚡",
                                    title: "Agilidade Estratégica",
                                    desc: "Estrutura enxuta que permite tomada de decisão rápida e atendimento personalizado. Você fala diretamente com sócios, não apenas com associados juniores."
                                },
                                {
                                    icon: "🔍",
                                    title: "Due Diligence Especializada",
                                    desc: "Expertise consolidada em análises profundas para M&A, investimentos e reestruturações societárias com metodologia proprietária testada em dezenas de operações."
                                },
                                {
                                    icon: "📈",
                                    title: "Mentalidade de Resultados",
                                    desc: "Não medimos sucesso apenas por processos ganhos, mas pelo impacto real nos negócios: redução de passivos, viabilização de expansões, proteção patrimonial efetiva."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça Nossos Sócios Fundadores</h2>
                            <p className="text-slate-300">Liderança técnica e visão estratégica</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    nome: "Dr. Roberto Martins",
                                    cargo: "Sócio-Fundador | Direito Societário",
                                    oab: "OAB/SP 150.000",
                                    bio: "Mestre em Direito Comercial pela USP. Especialista em fusões, aquisições e governança corporativa. Mais de 50 operações de M&A assessoradas."
                                },
                                {
                                    nome: "Dra. Fernanda Costa",
                                    cargo: "Sócia-Fundadora | Direito Tributário",
                                    oab: "OAB/SP 160.000",
                                    bio: "Doutora em Direito Tributário pela PUC-SP. Professora convidada da FGV. Recuperou mais de R$ 30 milhões em créditos tributários para clientes."
                                },
                                {
                                    nome: "Dr. Carlos Eduardo Silva",
                                    cargo: "Sócio-Fundador | Direito Trabalhista",
                                    oab: "OAB/SP 170.000",
                                    bio: "Especialista em Direito do Trabalho pela Mackenzie. LLM em Employment Law pela NYU. Referência em compliance trabalhista preventivo."
                                }
                            ].map((socio, i) => (
                                <div key={i} className="bg-slate-800 p-8 rounded-2xl text-center border border-slate-700">
                                    <div className="w-32 h-32 bg-amber-700 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                                        👤
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{socio.nome}</h3>
                                    <p className="text-amber-400 font-semibold mb-2 text-sm">{socio.cargo}</p>
                                    <p className="text-xs text-slate-400 mb-4">{socio.oab}</p>
                                    <p className="text-sm text-slate-300 leading-relaxed">{socio.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Conheça Pessoalmente Nossa Estrutura</h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                            Agende uma visita ao escritório e conheça nossa equipe e metodologia de trabalho
                        </p>
                        <a
                            href="/sites-institucionais/simples/advocacia-empresarial/contato"
                            className="inline-block bg-amber-700 text-white px-10 py-4 rounded text-lg font-bold hover:bg-amber-800 transition-all shadow-lg"
                        >
                            Agendar Reunião
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
