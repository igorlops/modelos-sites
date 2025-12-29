import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { CheckCircle, ArrowRight, Scale } from "lucide-react";

export default function ServicosPage() {
    const servicos = [
        {
            titulo: "Direito Societário Completo",
            descricao: "Estruturação, governança e operações societárias para empresas de todos os portes.",
            detalhes: [
                "Constituição de sociedades limitadas, SAs e holdings patrimoniais",
                "Alterações contratuais, aumentos de capital e mudanças societárias",
                "Elaboração de acordos de sócios e quotistas",
                "Governança corporativa e compliance societário",
                "Planejamento sucessório empresarial",
                "Assessoria em assembleias e reuniões de sócios"
            ],
            beneficios: [
                "Estrutura societária blindada juridicamente",
                "Prevenção de conflitos entre sócios",
                "Continuidade do negócio garantida",
                "Proteção patrimonial efetiva"
            ],
            icon: "🏢"
        },
        {
            titulo: "Fusões e Aquisições (M&A)",
            descricao: "Assessoria completa em operações de compra, venda e fusão de empresas.",
            detalhes: [
                "Due diligence jurídica completa (legal, tributária, trabalhista)",
                "Estruturação da operação e escolha do melhor modelo",
                "Negociação e elaboração de contratos de compra e venda",
                "Assessoria em valuation e precificação de riscos jurídicos",
                "Aprovações regulatórias (CADE, BACEN, etc quando necessário)",
                "Acompanhamento pós-closing e integração jurídica"
            ],
            beneficios: [
                "Identificação de riscos ocultos antes da operação",
                "Proteção contra passivos inesperados",
                "Estrutura fiscal otimizada",
                "Segurança jurídica total na transação"
            ],
            icon: "🤝"
        },
        {
            titulo: "Direito Trabalhista Preventivo e Contencioso",
            descricao: "Consultoria para redução de passivos e defesa em reclamações trabalhistas.",
            detalhes: [
                "Elaboração de políticas internas e regulamentos",
                "Revisão de contratos de trabalho e acordos coletivos",
                "Auditorias trabalhistas preventivas",
                "Defesa em reclamações trabalhistas (1ª instância até TST)",
                "Assessoria em demissões de alto risco",
                "Implementação de compliance trabalhista (eSocial, etc)"
            ],
            beneficios: [
                "Redução de até 80% em passivos trabalhistas",
                "Cultura de compliance na empresa",
                "Defesas técnicas especializadas",
                "Previsibilidade de custos com pessoal"
            ],
            icon: "👥"
        },
        {
            titulo: "Direito Tributário e Planejamento Fiscal",
            descricao: "Redução lícita de carga tributária e defesa em questões fiscais.",
            detalhes: [
                "Planejamento tributário estratégico personalizado",
                "Revisão de regime tributário (Simples, Presumido, Real)",
                "Defesas administrativas (RFB, SEFAZ, Prefeitura)",
                "Ações judiciais tributárias e recuperação de créditos",
                "Estruturação de holdings e reorganizações societárias fiscais",
                "Compliance tributário e prevenção de autuações"
            ],
            beneficios: [
                "Economia média de 15-35% em tributos",
                "Recuperação de valores pagos indevidamente",
                "Segurança contra fiscalizações",
                "Otimização da estrutura fiscal"
            ],
            icon: "💰"
        },
        {
            titulo: "Contratos Empresariais",
            descricao: "Elaboração, revisão e negociação de contratos estratégicos para seu negócio.",
            detalhes: [
                "Contratos comerciais (distribuição, franquia, fornecimento)",
                "Contratos de prestação de serviços B2B",
                "Acordos de confidencialidade (NDA) e propriedade intelectual",
                "Contratos internacionais e operações de importação/exportação",
                "Termos de uso, políticas de privacidade e contratos digitais",
                "Revisão e negociação de contratos com terceiros"
            ],
            beneficios: [
                "Proteção contra riscos contratuais",
                "Clareza nas obrigações de cada parte",
                "Instrumentos jurídicos sólidos",
                "Prevenção de litígios futuros"
            ],
            icon: "📝"
        },
        {
            titulo: "Recuperação Judicial e Extrajudicial",
            descricao: "Assessoria em processos de reestruturação de dívidas e recuperação empresarial.",
            detalhes: [
                "Análise de viabilidade de recuperação judicial/extrajudicial",
                "Elaboração de plano de recuperação",
                "Negociação com credores e assembleiasProcessamento do pedido junto ao judiciário",
                "Acompanhamento durante todo o processo recuperacional",
                "Conversão de falência em recuperação quando possível"
            ],
            beneficios: [
                "Preservação da atividade empresarial",
                "Renegociação de dívidas com desconto",
                "Manutenção de empregos",
                "Renovação e crescimento pós-crise"
            ],
            icon: "🔄"
        },
        {
            titulo: "Compliance e Governança Corporativa",
            descricao: "Implantação de programas de integridade e conformidade legal.",
            detalhes: [
                "Programa de Compliance corporativo (Lei Anticorrupção)",
                "Adequação à LGPD e proteção de dados",
                "Código de ética e conduta empresarial",
                "Canal de denúncias e investigações internas",
                "Treinamentos e conscientização de colaboradores",
                "Políticas antissuborno e controles internos"
            ],
            beneficios: [
                "Proteção contra riscos regulatórios",
                "Redução de multas e sanções",
                "Reputação corporativa fortalecida",
                "Cultura ética consolidada"
            ],
            icon: "🛡️"
        },
        {
            titulo: "Propriedade Intelectual",
            descricao: "Proteção de marcas, patentes e ativos intangíveis da empresa.",
            detalhes: [
                "Registro de marcas no INPI",
                "Pedidos de patentes e desenhos industriais",
                "Proteção de software e direitos autorais",
                "Contratos de licenciamento e transferência de tecnologia",
                "Defesa contra uso indevido e concorrência desleal",
                "Due diligence de propriedade intelectual"
            ],
            beneficios: [
                "Ativos intangíveis protegidos",
                "Exclusividade de mercado garantida",
                "Valorização da empresa",
                "Impedimento de cópias e plágios"
            ],
            icon: "©️"
        },
        {
            titulo: "Litígios Empresariais",
            descricao: "Defesa judicial estratégica em causas complexas de alto valor.",
            detalhes: [
                "Ações cíveis empresariais (inadimplemento, rescisão contratual)",
                "Disputas societárias e dissolução de sociedades",
                "Arbitragem empresarial",
                "Mediação e conciliação estratégica",
                "Execuções e cobranças judiciais",
                "Defesa em ações regulatórias (PROCON, ANS, ANATEL, etc)"
            ],
            beneficios: [
                "Estratégia processual diferenciada",
                "Taxa de êxito superior a 85%",
                "Conhecimento multidisciplinar aplicado",
                "Soluções negociadas quando vantajosas"
            ],
            icon: "⚖️"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="bg-gradient-to-br from-amber-900 to-yellow-900 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Áreas de Atuação Especializadas</h1>
                        <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                            Assessoria jurídica empresarial completa para proteger, estruturar e impulsionar seu negócio
                        </p>
                    </div>
                </section>

                <section className="py-12 bg-white container mx-auto px-4 text-center">
                    <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
                        Martins & Associados oferece consultoria jurídica integral para empresas através de equipe multidisciplinar altamente qualificada. Nossa atuação vai além do jurídico tradicional: pensamos estrategicamente em soluções que fazem sentido para o negócio, não apenas para o processo.
                    </p>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="space-y-12 max-w-6xl mx-auto">
                            {servicos.map((servico, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-50 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 border border-amber-100"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center text-3xl">
                                            {servico.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{servico.titulo}</h2>
                                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{servico.descricao}</p>

                                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                        <CheckCircle className="text-amber-600" size={20} />
                                                        Nossos Serviços:
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {servico.detalhes.map((detalhe, idx) => (
                                                            <li key={idx} className="flex items-start text-slate-700">
                                                                <span className="text-amber-700 mr-2 flex-shrink-0">✓</span>
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
                                                href="/sites-institucionais/simples/advocacia-empresarial/contato"
                                                className="inline-flex items-center gap-2 bg-amber-700 text-white px-8 py-3 rounded hover:bg-amber-800 transition-colors font-semibold shadow-md"
                                            >
                                                Solicitar Consultoria <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossa Metodologia de Trabalho</h2>
                            <p className="text-xl text-slate-600">Processo estruturado e orientado a resultados</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                { num: "1", title: "Diagnóstico Jurídico", desc: "Reunião inicial para compreensão profunda do negócio, desafios atuais e objetivos. Análise preliminar de documentos e riscos." },
                                { num: "2", title: "Estratégia Personalizada", desc: "Elaboração de plano de ação jurídico customizado com prazos, responsabilidades e investimento transparente." },
                                { num: "3", title: "Execução Técnica", desc: "Implementação das soluções com acompanhamento semanal, relatórios de andamento e comunicação constante com o cliente." },
                                { num: "4", title: "Monitoramento Contínuo", desc: "Após conclusão, disponibilizamos acompanhamento preventivo para evitar reincidência de problemas e identificar novos riscos." }
                            ].map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
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
                    <Scale size={60} className="mx-auto text-amber-700 mb-8" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Proteja Seu Negócio Agora</h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Entre em contato e agende uma consulta estratégica com nossos especialistas
                    </p>
                    <Link
                        href="/sites-institucionais/simples/advocacia-empresarial/contato"
                        className="inline-block bg-amber-700 text-white px-10 py-4 rounded text-lg font-bold hover:bg-amber-800 transition-all shadow-lg"
                    >
                        Agendar Consulta Gratuita
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
}
