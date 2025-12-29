import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { Home as HomeIcon, Key, Building2, FileText, Shield, TrendingUp, CheckCircle, Award } from "lucide-react";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow">
                <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white py-20 md:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <span className="inline-block py-2 px-4 rounded bg-cyan-500 text-white text-sm font-bold mb-6 tracking-wide uppercase">
                                25 Anos de Excelência
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Seu <span className="text-cyan-300">Lar dos Sonhos</span> Começa Aqui
                            </h1>
                            <p className="text-lg text-cyan-100 mb-8 max-w-2xl leading-relaxed">
                                Prime Negócios Imobiliários é referência em São Paulo na compra, venda, locação e administração de imóveis. Há mais de 25 anos ajudamos famílias e empresas a encontrarem o espaço perfeito para viver e prosperar.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/sites-institucionais/simples/imobiliaria/portfolio" className="px-8 py-4 bg-cyan-500 rounded font-bold hover:bg-cyan-600 transition-colors text-center shadow-lg">
                                    Ver Imóveis Disponíveis
                                </Link>
                                <Link href="/sites-institucionais/simples/imobiliaria/contato" className="px-8 py-4 bg-transparent border-2 border-cyan-300 rounded font-bold hover:bg-cyan-900 transition-colors text-center">
                                    Anunciar Meu Imóvel
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
                                <h3 className="text-xl font-bold text-slate-900 mb-3">O Desafio</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Encontrar o imóvel ideal é difícil. Processos burocráticos confusos, documentação complicada, medo de golpes, imobiliárias pouco transparentes e valores incompatíveis com o orçamento.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Nossa Solução</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Acompanhamento personalizado do primeiro contato até a assinatura do contrato. Corretores experientes, documentação facilitada, assessoria jurídica incluída e portfólio exclusivo.
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
                                    25 anos de mercado, mais de 5.000 famílias atendidas, portfólio com 200+ imóveis exclusivos e equipe com média de 10 anos de experiência no setor imobiliário.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Serviços Completos Para Todas as Necessidades</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Da busca à escritura, cuidamos de cada detalhe do seu processo imobiliário</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: HomeIcon,
                                    title: "Compra e Venda de Imóveis",
                                    desc: "Assessoria completa em negociações de compra e venda residenciais e comerciais. Avaliação de mercado, documentação e intermediação profissional."
                                },
                                {
                                    icon: Key,
                                    title: "Locação Residencial",
                                    desc: "Apartamentos, casas e coberturas para locação com análise de crédito, vistoria detalhada, contrato seguro e administração de contratos."
                                },
                                {
                                    icon: Building2,
                                    title: "Locação Comercial",
                                    desc: "Salas comerciais, lojas, galpões e escritórios ideais para seu negócio. Consultoria para escolha estratégica de localização."
                                },
                                {
                                    icon: FileText,
                                    title: "Administração de Imóveis",
                                    desc: "Gestão completa de aluguéis: cobrança, manutenção, repasse e relacionamento com inquilinos. Proprietário sem preocupações."
                                },
                                {
                                    icon: Shield,
                                    title: "Assessoria Jurídica Imobiliária",
                                    desc: "Suporte jurídico em toda transação: análise de documentação, regularizações, contratos blindados e resolução de pendências."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Consultoria em Investimentos",
                                    desc: "Análise de rentabilidade, valorização de área, ROI projetado e estratégias para investir em imóveis com segurança e lucro."
                                }
                            ].map((servico, i) => (
                                <div key={i} className="p-8 rounded-xl bg-white hover:shadow-lg transition-shadow border border-cyan-100">
                                    <div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded flex items-center justify-center mb-6">
                                        <servico.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{servico.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">{servico.desc}</p>
                                    <Link href="/sites-institucionais/simples/imobiliaria/servicos" className="text-cyan-600 font-semibold inline-flex items-center hover:text-cyan-700">
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
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por Que Mais de 5.000 Famílias Escolheram a Prime</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">Confiança, experiência e comprometimento com seu sucesso imobiliário</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "🏆",
                                    title: "25 Anos de Tradição e Credibilidade",
                                    desc: "Fundada em 1998, somos uma das imobiliárias mais respeitadas de São Paulo. Associados ao SECOVI-SP e com CRECI regularizado."
                                },
                                {
                                    icon: "👨‍💼",
                                    title: "Corretores Certificados e Experientes",
                                    desc: "Equipe com média de 10 anos de experiência, CRECI ativo e capacitação contínua em técnicas de negociação e mercado imobiliário."
                                },
                                {
                                    icon: "📋",
                                    title: "Portfólio Exclusivo com 200+ Imóveis",
                                    desc: "Acesso a imóveis que não estão em outras imobiliárias. Parcerias com construtoras e proprietários que confiam nossa expertise."
                                },
                                {
                                    icon: "⚖️",
                                    title: "Assessoria Jurídica Gratuita Incluída",
                                    desc: "Advogados especializados em direito imobiliário analisam contratos e documentação sem custo adicional em todas as negociações."
                                },
                                {
                                    icon: "🔍",
                                    title: "Transparência Total em Valores",
                                    desc: "Sem taxas escondidas. Valores claros de comissões, documentação e custos adicionais apresentados desde o primeiro contato."
                                },
                                {
                                    icon: "💻",
                                    title: "Tecnologia e Atendimento Humanizado",
                                    desc: "Plataforma digital para acompanhar seu processo + atendimento pessoal dedicado. O melhor dos dois mundos."
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

                <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Depoimentos de Clientes Satisfeitos</h2>
                            <p className="text-slate-600">Histórias reais de quem realizou o sonho da casa própria</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-cyan-200 rounded-full flex items-center justify-center text-xl font-bold text-cyan-700">
                                        JM
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">João Marcos Silva</h4>
                                        <p className="text-sm text-slate-500">Compra - Brooklin</p>
                                    </div>
                                </div>
                                <div className="text-yellow-400 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed">
                                    "Após 2 anos procurando, encontrei meu apartamento ideal em apenas 3 semanas com a Prime. O corretor entendeu exatamente o que eu precisava e facilitou toda documentação. Profissionalismo total!"
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-cyan-200 rounded-full flex items-center justify-center text-xl font-bold text-cyan-700">
                                        CM
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Carla Mendes</h4>
                                        <p className="text-sm text-slate-500">Locação - Vila Mariana</p>
                                    </div>
                                </div>
                                <div className="text-yellow-400 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed">
                                    "Moro há 4 anos em um apto administrado pela Prime. Zero dor de cabeça com manutenção ou pagamentos. Tudo resolvido rapidamente. Índico de olhos fechados!"
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-cyan-200 rounded-full flex items-center justify-center text-xl font-bold text-cyan-700">
                                        RF
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Roberto Ferreira</h4>
                                        <p className="text-sm text-slate-500">Venda - Moema</p>
                                    </div>
                                </div>
                                <div className="text-yellow-400 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed">
                                    "Vendi meu imóvel 8% acima do valor de mercado graças à estratégia de divulgação da Prime. Processo rápido, seguro e com total transparência. Excelente trabalho!"
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-800 text-white text-center">
                    <div className="container mx-auto px-4">
                        <HomeIcon size={60} className="mx-auto mb-8 opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Encontre Seu Próximo Lar ou Investimento</h2>
                        <p className="text-cyan-100 mb-3 max-w-2xl mx-auto text-lg">
                            Agende uma visita sem compromisso ou cadastre seu imóvel para venda/locação.
                        </p>
                        <p className="text-cyan-200 mb-8 max-w-2xl mx-auto">
                            Primeira consultoria totalmente gratuita.
                        </p>
                        <Link href="/sites-institucionais/simples/imobiliaria/contato" className="inline-block px-10 py-5 bg-cyan-500 text-white font-bold rounded hover:bg-cyan-600 transition-colors shadow-2xl text-lg">
                            Falar com Corretor Agora
                        </Link>
                        <p className="mt-6 text-cyan-200 text-sm">
                            📞 (11) 3500-3500 | 📱 WhatsApp: (11) 99999-3500
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
