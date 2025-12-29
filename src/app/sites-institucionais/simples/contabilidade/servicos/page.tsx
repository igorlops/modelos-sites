import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ServicosPage() {
    const servicos = [
        {
            titulo: "Abertura de Empresa Completa",
            descricao: "Toda burocracia de constituição resolvida para você focar no que importa: seu negócio.",
            detalhes: [
                "Consultoria para escolha do melhor tipo jurídico (MEI, EIRELI, LTDA, SA)",
                "Registro na Junta Comercial com documentação completa",
                "Obtenção de CNPJ junto à Receita Federal",
                "Inscrições estaduais e municipais conforme atividade",
                "Alvará de funcionamento e licenças necessárias",
                "Enquadramento tributário otimizado (Simples, Presumido, Real)"
            ],
            beneficios: [
                "Abertura em até 7 dias úteis",
                "Zero complicação burocrática",
                "Economia tributária desde o início",
                "Suporte jurídico-contábil integrado"
            ],
            icon: "🚀"
        },
        {
            titulo: "Contabilidade Mensal Completa",
            descricao: "Escrituração, apuração de impostos e obrigações acessórias sempre em dia.",
            detalhes: [
                "Classificação contábil de todas operações (entradas e saídas)",
                "Conciliação bancária mensal",
                "Apuração de impostos federais, estaduais e municipais",
                "Emissão de guias de recolhimento (DAS, DARF, GPS)",
                "Escrituração fiscal digital (SPED Fiscal, SPED Contribuições)",
                "Balancetes mensais e demonstrações contábeis anuais"
            ],
            beneficios: [
                "Conformidade fiscal garantida",
                "Zero risco de multas por atraso",
                "Visibilidade financeira total",
                "Documentos sempre organizados"
            ],
            icon: "📊"
        },
        {
            titulo: "Departamento Pessoal (DP)",
            descricao: "Gestão completa de folha de pagamento, admissões, rescisões e obrigações trabalhistas.",
            detalhes: [
                "Processamento de folha de pagamento mensal",
                "Cálculo de férias, 13º salário e rescisões",
                "Admissão e demissão de funcionários (eSocial)",
                "Controle de ponto eletrônico e banco de horas",
                "FGTS, INSS e IR-Fonte calculados e recolhidos",
                "CAGED, RAIS, DIRF e demais obrigações acessórias trabalhistas"
            ],
            beneficios: [
                "Funcionários pagos corretamente e no prazo",
                "Conformidade trabalhista total",
                "Redução de passivos trabalhistas",
                "Relatórios gerenciais de custos com pessoal"
            ],
            icon: "👥"
        },
        {
            titulo: "Planejamento Tributário Estratégico",
            descricao: "Análise profunda para redução lícita da carga tributária e maximização de lucros.",
            detalhes: [
                "Diagnóstico tributário completo da empresa",
                "Simulação comparativa entre regimes (Simples, Presumido, Real)",
                "Identificação de oportunidades de economia fiscal",
                "Reestruturação societária quando vantajoso",
                "Aproveitamento de benefícios fiscais e incentivos",
                "Revisão anual obrigatória de enquadramento"
            ],
            beneficios: [
                "Economia média de 15-40% em impostos",
                "Maior competitividade de preços",
                "Aumento de margem de lucro",
                "Segurança jurídica nas operações"
            ],
            icon: "💰"
        },
        {
            titulo: "BPO Financeiro (Terceirização)",
            descricao: "Gestão completa do back office financeiro da sua empresa com equipe dedicada.",
            detalhes: [
                "Contas a pagar e receber gerenciados",
                "Conciliação de cartões e meios de pagamento",
                "Fluxo de caixa diário atualizado",
                "Emissão e controle de notas fiscais",
                "Gestão de inadimplência e cobranças",
                "Relatórios financeiros gerenciais semanais"
            ],
            beneficios: [
                "Redução de até 60% em custos operacionais",
                "Time especializado sem CLT",
                "Processos padronizados e seguros",
                "Mais tempo para decisões estratégicas"
            ],
            icon: "💼"
        },
        {
            titulo: "Regularização Fiscal e Recuperação",
            descricao: "Solução para empresas com pendências fiscais, débitos ou irregularidades.",
            detalhes: [
                "Diagnóstico completo de pendências (Federal, Estadual, Municipal)",
                "Negociação de parcelamentos e refinanciamentos",
                "Regularização de CNDs (Certidões Negativas de Débito)",
                "Retificação de declarações incorretas",
                "Defesa em notificações e autos de infração",
                "Plano de ação para evitar reincidências"
            ],
            beneficios: [
                "Empresa regularizada e apta a operar",
                "Acesso a crédito e licitações",
                "Eliminação de bloqueios e restrições",
                "Paz de espírito fiscal"
            ],
            icon: "🔧"
        },
        {
            titulo: "Consultoria Contábil Estratégica",
            descricao: "Análises e orientações para tomada de decisão baseada em dados financeiros reais.",
            detalhes: [
                "Reuniões mensais de análise de resultados",
                "DRE gerencial detalhado por centro de custo",
                "Análise de ponto de equilíbrio e margem de contribuição",
                "Projeções financeiras e orçamentos empresariais",
                "Indicadores de performance (KPIs financeiros)",
                "Orientação para investimentos e expansão"
            ],
            beneficios: [
                "Decisões baseadas em números reais",
                "Identificação de desperdícios",
                "Crescimento sustentável",
                "Visão clara de rentabilidade"
            ],
            icon: "📈"
        },
        {
            titulo: "Certificação Digital e eSocial",
            descricao: "Emissão, renovação e gestão de certificados digitais e implantação de eSocial.",
            detalhes: [
                "Emissão de certificados A1 e A3 (e-CNPJ e e-CPF)",
                "Renovação automática com alertas de vencimento",
                "Implantação completa do eSocial",
                "Envio de eventos trabalhistas em tempo real",
                "Suporte técnico para uso de certificados",
                "Treinamento para assinatura digital de documentos"
            ],
            beneficios: [
                "Conformidade com legislação digital",
                "Agilidade em processos eletrônicos",
                "Segurança jurídica nas transações",
                "Eliminação de papel e burocracia física"
            ],
            icon: "🔐"
        },
        {
            titulo: "Contabilidade para E-commerce",
            descricao: "Especialização em gestão contábil e fiscal de lojas virtuais e marketplaces.",
            detalhes: [
                "Integração com plataformas (Shopify, Mercado Livre, etc)",
                "Conciliação automática de vendas multicanal",
                "Gestão de substituição tributária (ST)",
                "Controle de estoque fiscal",
                "Cálculo correto de impostos por estado",
                "Compliance com legislação de e-commerce"
            ],
            beneficios: [
                "Economia em impostos interestaduais",
                "Processos automatizados",
                "Zero erro em apuração",
                "Escalabilidade garantida"
            ],
            icon: "🛒"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Serviços Contábeis Completos</h1>
                        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                            Da abertura à gestão estratégica: todas as soluções contábeis e fiscais que sua empresa precisa em um só lugar
                        </p>
                    </div>
                </section>

                <section className="py-12 bg-white container mx-auto px-4 text-center">
                    <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
                        Na Contábil Prime, oferecemos um ecossistema completo de serviços contábeis, fiscais, trabalhistas e consultoria estratégica. Seja você MEI, ME ou empresa de médio porte, temos soluções personalizadas para diferentes estágios de maturidade do seu negócio.
                    </p>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="space-y-12 max-w-6xl mx-auto">
                            {servicos.map((servico, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-50 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 border border-slate-100"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">
                                            {servico.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{servico.titulo}</h2>
                                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{servico.descricao}</p>

                                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                        <CheckCircle className="text-blue-500" size={20} />
                                                        O que inclui:
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {servico.detalhes.map((detalhe, idx) => (
                                                            <li key={idx} className="flex items-start text-slate-700">
                                                                <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
                                                                <span className="leading-relaxed">{detalhe}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                        <CheckCircle className="text-green-500" size={20} />
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
                                                href="/sites-institucionais/simples/contabilidade/contato"
                                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors font-semibold shadow-md"
                                            >
                                                Contratar este Serviço <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como Funciona Nossa Metodologia</h2>
                            <p className="text-xl text-slate-600">Processo transparente e focado em resultados</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                { num: "1", title: "Diagnóstico Inicial", desc: "Reunião para entender seu negócio, desafios atuais e objetivos. Análise da situação fiscal e contábil existente." },
                                { num: "2", title: "Proposta Personalizada", desc: "Apresentação de plano de trabalho customizado com escopo detalhado, prazos e investimento transparente sem surpresas." },
                                { num: "3", title: "Onboarding Estruturado", desc: "Migração ou abertura com checklist completo. Configuração de acessos, integração de sistemas e treinamento da equipe." },
                                { num: "4", title: "Gestão Contínua", desc: "Rotinas mensais executadas com excelência, relatórios automáticos e contador dedicado disponível para dúvidas e consultoria." }
                            ].map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pronto Para Simplificar Sua Gestão Contábil?</h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Fale com um especialista e descubra como podemos ajudar sua empresa a crescer com segurança fiscal
                    </p>
                    <Link
                        href="/sites-institucionais/simples/contabilidade/contato"
                        className="inline-block bg-blue-600 text-white px-10 py-4 rounded text-lg font-bold hover:bg-blue-700 transition-all shadow-lg"
                    >
                        Solicitar Proposta Gratuita
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
}
