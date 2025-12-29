import Header from "../components/Header";
import Footer from "../components/Footer";
import { Target, Eye, Gem, CheckCircle, Shield, Award } from "lucide-react";

export default function SobrePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 border-b border-cyan-100">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Excelência Imobiliária há Mais de 25 Anos</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Conheça a história da imobiliária que conecta pessoas aos seus lares dos sonhos desde 1998
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa Trajetória de Confiança e Resultados</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    A Prime Negócios Imobiliários foi fundada em 1998 por Roberto Augusto Ferreira (CRECI 45678-F), corretor com 15 anos de experiência prévia em grandes imobiliárias paulistanas. Roberto identificou uma lacuna no mercado: faltavam imobiliárias que realmente se importassem com a jornada do cliente, não apenas com a comissão da venda.
                                </p>
                                <p>
                                    Começamos com um pequeno escritório de 40m² na Vila Mariana e uma filosofia clara: "Nenhuma negociação está completa até que o cliente esteja 100% satisfeito". Nos primeiros três anos, atendemos 87 famílias com taxa de satisfação de 96%, o que gerou um boca a boca poderoso na região.
                                </p>
                                <p>
                                    Em 2005, expandimos para um escritório de 200m² na Av. Berrini e incorporamos novos sócios: Mariana Costa (especialista em locação comercial) e Paulo Henrique (expert em administração de imóveis). Essa diversificação de expertise nos permitiu oferecer soluções completas para qualquer necessidade imobiliária.
                                </p>
                                <p>
                                    Hoje, em 2024, somos uma equipe de 25 profissionais altamente qualificados, com presença consolidada em toda região sul de São Paulo. Nosso portfólio atual conta com mais de 200 imóveis exclusivos e já ajudamos mais de 5.000 famílias a realizarem seus sonhos imobiliários.
                                </p>
                                <p className="font-bold text-cyan-700">
                                    Nosso orgulho? 78% dos nossos novos clientes vêm por indicação de clientes satisfeitos. Isso não é apenas uma métrica - é a validação de 25 anos de trabalho ético e comprometido.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-100 to-blue-100 h-[500px] rounded-2xl overflow-hidden relative shadow-lg">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col">
                                <div className="text-8xl mb-4">🏢</div>
                                <p className="font-bold text-xl text-cyan-800">Prime Negócios Imobiliários</p>
                                <p className="text-sm">Av. Berrini - São Paulo</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                            <div className="text-4xl font-bold text-cyan-700 mb-2">5.000+</div>
                            <div className="text-sm text-slate-600">Famílias Atendidas</div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                            <div className="text-4xl font-bold text-cyan-700 mb-2">200+</div>
                            <div className="text-sm text-slate-600">Imóveis Exclusivos</div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                            <div className="text-4xl font-bold text-cyan-700 mb-2">78%</div>
                            <div className="text-sm text-slate-600">Clientes por Indicação</div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                            <div className="text-4xl font-bold text-cyan-700 mb-2">25</div>
                            <div className="text-sm text-slate-600">Anos de Mercado</div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-cyan-100">
                                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                                    <Target className="text-cyan-700" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Missão</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Facilitar a realização dos sonhos imobiliários das pessoas através de atendimento personalizado, transparência total e expertise consolidada em 25 anos de mercado, transformando processos complexos em experiências positivas e memoráveis.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-cyan-100">
                                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                                    <Eye className="text-cyan-700" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Visão</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Ser reconhecida até 2030 como a imobiliária mais confiável e recomendada de São Paulo, referência em ética, inovação tecnológica e satisfação do cliente, expandindo nossa atuação mantendo os mesmos valores que nos trouxeram até aqui.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-cyan-100">
                                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                                    <Gem className="text-cyan-700" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossos Valores</h3>
                                <ul className="text-slate-600 space-y-2">
                                    {["Ética inquestionável", "Transparência radical", "Compromisso com resultados", "Inovação contínua", "Respeito ao cliente"].map((v, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-cyan-600 flex-shrink-0" />
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
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">O que nos torna únicos no mercado imobiliário paulistano</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: "📜",
                                    title: "CRECI Regularizado e SECOVI-SP",
                                    desc: "Imobiliária regularmente inscrita no CRECI-SP sob nº 12345-J e associada ao Sindicato das Empresas de Compra, Venda, Locação e Administração de Imóveis de São Paulo."
                                },
                                {
                                    icon: "👥",
                                    title: "Equipe Altamente Especializada",
                                    desc: "25 profissionais com CRECI ativo, média de 10 anos de experiência e capacitação contínua em negociação, legislação imobiliária e atendimento ao cliente."
                                },
                                {
                                    icon: "🏠",
                                    title: "Portfólio Exclusivo Diferenciado",
                                    desc: "Mais de 40% dos nossos imóveis são exclusivos, fruto de parcerias sólidas com proprietários e construtoras que confiam em nossa capacidade de venda."
                                },
                                {
                                    icon: "⚖️",
                                    title: "Assessoria Jurídica Integrada",
                                    desc: "Advogados especializados em direito imobiliário fazem parte da nossa equipe, analisando documentação e garantindo segurança em todas as transações."
                                },
                                {
                                    icon: "💻",
                                    title: "Tecnologia de Ponta",
                                    desc: "Plataforma própria para acompanhamento em tempo real do seu processo, tours virtuais 360°, assinatura digital de contratos e CRM integrado."
                                },
                                {
                                    icon: "🤝",
                                    title: "Relacionamento de Longo Prazo",
                                    desc: "Não vendemos apenas imóvel, construímos relacionamentos. 65% dos nossos clientes voltam para novas negociações ou nos indicam para conhecidos."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl border border-cyan-100">
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

                <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça Nossa Liderança</h2>
                            <p className="text-cyan-200">Sócios com expertise complementar e visão de excelência</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    nome: "Roberto Augusto Ferreira",
                                    cargo: "Fundador | Diretor Geral",
                                    creci: "CRECI 45678-F",
                                    bio: "40+ anos no mercado imobiliário. Fundou a Prime em 1998 com foco em ética e transparência. Especialista em compra e venda residencial."
                                },
                                {
                                    nome: "Mariana Costa Lima",
                                    cargo: "Sócia | Diretora Comercial",
                                    creci: "CRECI 67890-F",
                                    bio: "20 anos de experiência em locação comercial. Responsável por expandir portfolio de escritórios e lojas. MBA em Gestão Imobiliária pela FGV."
                                },
                                {
                                    nome: "Paulo Henrique Santos",
                                    cargo: "Sócio | Diretor de Administração",
                                    creci: "CRECI 54321-F",
                                    bio: "Especialista em administração de imóveis e gestão de carteira de locação. Implementou sistema digital de gestão que aumentou eficiência em 300%."
                                }
                            ].map((socio, i) => (
                                <div key={i} className="bg-blue-800/50 p-8 rounded-2xl text-center border border-cyan-700 backdrop-blur-sm">
                                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                                        👤
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{socio.nome}</h3>
                                    <p className="text-cyan-300 font-semibold mb-2 text-sm">{socio.cargo}</p>
                                    <p className="text-xs text-cyan-400 mb-4">{socio.creci}</p>
                                    <p className="text-sm text-cyan-100 leading-relaxed">{socio.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <Shield size={60} className="mx-auto text-cyan-600 mb-8" />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Venha Conhecer Nossa Estrutura</h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                            Agende uma visita ao escritório e conheça nossa equipe pessoalmente
                        </p>
                        <a
                            href="/sites-institucionais/simples/imobiliaria/contato"
                            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-4 rounded text-lg font-bold hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg"
                        >
                            Agendar Visita ao Escritório
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
