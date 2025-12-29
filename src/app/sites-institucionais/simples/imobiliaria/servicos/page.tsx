import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { CheckCircle, ArrowRight, Home } from "lucide-react";

export default function ServicosPage() {
    const servicos = [
        {
            titulo: "Compra de Imóveis Residenciais e Comerciais",
            descricao: "Assessoria completa na busca, negociação e fechamento da compra do seu imóvel ideal.",
            detalhes: [
                "Consultoria personalizada para entender suas necessidades",
                "Seleção criteriosa de imóveis compatíveis com seu perfil",
                "Agendamento de visitas e tours presenciais ou virtuais",
                "Negociação de valores e condições de pagamento",
                "Análise de documentação e regularidade do imóvel",
                "Acompanhamento de financiamento bancário"
            ],
            beneficios: [
                "Acesso a imóveis exclusivos",
                "Economia de tempo e energia",
                "Segurança jurídica garantida",
                "Negociação profissional"
            ],
            icon: "🏠"
        },
        {
            titulo: "Venda de Imóveis com Estratégia de Marketing",
            descricao: "Divulgação estratégica e venda rápida do seu imóvel pelo melhor preço de mercado.",
            detalhes: [
                "Avaliação técnica e precificação estratégica",
                "Produção profissional de fotos e vídeos",
                "Tour virtual 360° do imóvel",
                "Divulgação em portais premium e redes sociais",
                "Seleção e qualificação de interessados",
                "Negociação e fechamento de propostas"
            ],
            beneficios: [
                "Venda até 30% mais rápida",
                "Valorização até 8% acima da média",
                "Exposição qualificada",
                "Menos visitas improdutivas"
            ],
            icon: "💰"
        },
        {
            titulo: "Locação Residencial Completa",
            descricao: "Encontre o imóvel perfeito para morar com contratos seguros e processos simplificados.",
            detalhes: [
                "Catálogo exclusivo de apartamentos e casas",
                "Análise de crédito e documentação do locatário",
                "Vistoria técnica detalhada de entrada",
                "Elaboração de contrato de locação blindado",
                "Orientação sobre garantias (fiador, seguro, caução)",
                "Suporte contínuo durante vigência do contrato"
            ],
            beneficios: [
                "Contratos juridicamente seguros",
                "Processos 100% transparentes",
                "Imóveis vistoriados e regulares",
                "Suporte pós-locação"
            ],
            icon: "🔑"
        },
        {
            titulo: "Locação Comercial e Corporativa",
            descricao: "Salas, lojas, galpões e escritórios estrategicamente localizados para seu negócio.",
            detalhes: [
                "Consultoria de localização baseada no seu negócio",
                "Portfólio de imóveis comerciais categorizados",
                "Análise de viabilidade e fluxo da região",
                "Negociação de carência e benfeitorias",
                "Contratos comerciais personalizados",
                "Assessoria em adequação e licenças"
            ],
            beneficios: [
                "Localização estratégica",
                "Negociação de condições especiais",
                "Contratos flexíveis",
                "Suporte em regularizações"
            ],
            icon: "🏢"
        },
        {
            titulo: "Administração de Imóveis e Carteira de Locação",
            descricao: "Gestão completa do seu imóvel alugado: cobrança, manutenção e relacionamento com inquilinos.",
            detalhes: [
                "Cobrança mensal de aluguéis e repasse pontual",
                "Gestão de inadimplência e negociação",
                "Coordenação de manutenções solicitadas",
                "Vistoria anual de conservação do imóvel",
                "Renovação de contratos e reajustes",
                "Relatórios mensais detalhados ao proprietário"
            ],
            beneficios: [
                "Proprietário sem preocupações",
                "Taxa de inadimplência inferior a 2%",
                "Relatórios transparentes",
                "Manutenção do valor do imóvel"
            ],
            icon: "📋"
        },
        {
            titulo: "Assessoria Jurídica Imobiliária Completa",
            descricao: "Suporte legal especializado em todas as etapas da transação imobiliária.",
            detalhes: [
                "Análise de documentação (matrícula, certidões, IPTU)",
                "Identificação e resolução de pendências",
                "Elaboração e revisão de contratos",
                "Acompanhamento de escritura e registro",
                "Consultoria em inventários e partilhas",
                "Defesa em questões judiciais imobiliárias"
            ],
            beneficios: [
                "Segurança jurídica total",
                "Prevenção de problemas futuros",
                "Contratos blindados",
                "Suporte gratuito em negociações Prime"
            ],
            icon: "⚖️"
        },
        {
            titulo: "Consultoria em Investimentos Imobiliários",
            descricao: "Análise técnica e estratégica para investir em imóveis com rentabilidade e segurança.",
            detalhes: [
                "Análise de valorização histórica de regiões",
                "Projeção de rentabilidade (aluguel e revenda)",
                "Comparação ROI entre diferentes oportunidades",
                "Identificação de imóveis com potencial subvalorizado",
                "Estratégia de portfólio diversificado",
                "Acompanhamento pós-investimento"
            ],
            beneficios: [
                "Decisões baseadas em dados",
                "ROI médio 12% ao ano",
                "Diversificação inteligente",
                "Minimização de riscos"
            ],
            icon: "📈"
        },
        {
            titulo: "Permuta Inteligente de Imóveis",
            descricao: "Facilitação de trocas de imóveis com ou sem torna para upgrade ou downsizing.",
            detalhes: [
                "Avaliação técnica dos dois imóveis envolvidos",
                "Cálculo preciso de valores de torna",
                "Intermediação de negociação entre partes",
                "Estruturação jurídica da permuta",
                "Regularização documentação de ambos imóveis",
                "Acompanhamento até escritura final"
            ],
            beneficios: [
                "Economia em ITBI (quando aplicável)",
                "Processo mais rápido que venda+compra",
                "Menor burocracia",
                "Transição facilitada"
            ],
            icon: "🔄"
        },
        {
            titulo: "Avaliação Técnica e Home Staging",
            descricao: "Serviços de avaliação profissional e preparação do imóvel para venda/locação rápida.",
            detalhes: [
                "Laudo de avaliação técnica conforme NBR 14653",
                "Análise comparativa de mercado (CMA)",
                "Consultoria de home staging para valorização",
                "Produção fotográfica profissional",
                "Tour virtual 360° imersivo",
                "Planta baixa humanizada e renderizações"
            ],
            beneficios: [
                "Precificação correta",
                "Venda até 40% mais rápida",
                "Valorização visual",
                "Material de divulgação premium"
            ],
            icon: "📸"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="bg-gradient-to-br from-blue-900 to-cyan-800 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Serviços Imobiliários Completos</h1>
                        <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
                            Da busca à escritura: soluções completas para todas as suas necessidades imobiliárias
                        </p>
                    </div>
                </section>

                <section className="py-12 bg-white container mx-auto px-4 text-center">
                    <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
                        Na Prime Negócios Imobiliários, oferecemos um ecossistema completo de serviços imobiliários. Seja você um comprador de primeira viagem, investidor experiente, proprietário que quer alugar ou empresa buscando ponto comercial, temos a solução certa com toda segurança e transparência que você merece.
                    </p>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="space-y-12 max-w-6xl mx-auto">
                            {servicos.map((servico, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 border border-cyan-100"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center text-3xl">
                                            {servico.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{servico.titulo}</h2>
                                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{servico.descricao}</p>

                                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                        <CheckCircle className="text-cyan-600" size={20} />
                                                        O que inclui:
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {servico.detalhes.map((detalhe, idx) => (
                                                            <li key={idx} className="flex items-start text-slate-700">
                                                                <span className="text-cyan-600 mr-2 flex-shrink-0">✓</span>
                                                                <span className="leading-relaxed">{detalhe}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                        <CheckCircle className="text-green-600" size={20} />
                                                        Benefícios:
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {servico.beneficios.map((beneficio, idx) => (
                                                            <li key={idx} className="flex items-start text-slate-700">
                                                                <span className="text-green-600 mr-2 flex-shrink-0">★</span>
                                                                <span className="leading-relaxed">{beneficio}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <Link
                                                href="/sites-institucionais/simples/imobiliaria/contato"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded hover:from-cyan-700 hover:to-blue-700 transition-colors font-semibold shadow-md"
                                            >
                                                Solicitar este Serviço <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como Funciona Nosso Atendimento</h2>
                            <p className="text-xl text-slate-600">Processo transparente e focado em você</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                { num: "1", title: "Primeiro Contato", desc: "Você entra em contato e agenda reunião presencial ou online com um de nossos corretores especializados." },
                                { num: "2", title: "Diagnóstico Personalizado", desc: "Entendemos profundamente suas necessidades, orçamento, prazos e preferências para criar estratégia customizada." },
                                { num: "3", title: "Execução Profissional", desc: "Buscamos imóveis, agendamos visitas, negociamos valores e cuidamos de toda documentação com transparência total." },
                                { num: "4", title: "Fechamento Seguro", desc: "Acompanhamos até assinatura do contrato/escritura e continuamos dando suporte mesmo após conclusão." }
                            ].map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                        {step.num}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4 text-center">
                    <Home size={60} className="mx-auto text-cyan-600 mb-8" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pronto Para Encontrar Seu Imóvel Ideal?</h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Fale com um corretor especializado e descubra como podemos ajudar
                    </p>
                    <Link
                        href="/sites-institucionais/simples/imobiliaria/contato"
                        className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-4 rounded text-lg font-bold hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg"
                    >
                        Falar com Corretor Agora
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
}
