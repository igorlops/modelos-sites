import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { CheckCircle, ArrowRight, Target } from "lucide-react";

export default function ServicosPage() {
    const servicos = [
        {
            titulo: "Tráfego Pago Performance (Google & Meta Ads)",
            descricao: "Gestão completa de campanhas pagas com foco em conversão e ROI positivo desde o primeiro mês.",
            detalhes: [
                "Google Ads (Search, Shopping, Display, YouTube)",
                "Meta Ads (Facebook e Instagram completo)",
                "LinkedIn Ads para B2B e recrutamento",
                "TikTok Ads para produtos virais",
                "Otimização contínua de lances e segmentações",
                "Remarketing avançado multi-plataforma"
            ],
            beneficios: [
                "CAC reduzido em média 40%",
                "ROI mínimo de 300% em 6 meses",
                "Leads qualificados diariamente",
                "Dashboards em tempo real"
            ],
            icon: "🎯"
        },
        {
            titulo: "Social Media Estratégico",
            descricao: "Gestão completa de redes sociais com calendário editorial, produção de conteúdo e community management.",
            detalhes: [
                "Planejamento estratégico mensal personalizado",
                "Criação de conteúdo (posts, stories, reels, vídeos)",
                "Copywriting persuasivo e storytelling",
                "Gestão de comunidade e respostas",
                "Monitoramento de métricas de engajamento",
                "Influencer marketing quando estratégico"
            ],
            beneficios: [
                "Engajamento até 500% maior",
                "Crescimento orgânico consistente",
                "Conversão de seguidores em clientes",
                "Autoridade de marca consolidada"
            ],
            icon: "📱"
        },
        {
            titulo: "SEO e Marketing de Conteúdo",
            descricao: "Ranqueamento orgânico no Google através de estratégia completa de SEO on-page, off-page e conteúdo.",
            detalhes: [
                "Auditoria técnica completa de SEO",
                "Pesquisa avançada de palavras-chave",
                "Otimização de páginas existentes",
                "Criação de conteúdo SEO-friendly (blog posts, páginas)",
                "Link building com sites de autoridade",
                "Local SEO para negócios físicos"
            ],
            beneficios: [
                "Tráfego orgânico 3x maior em 6 meses",
                "Custo de aquisição zero após rankear",
                "Autoridade de domínio crescente",
                "Resultados duradouros"
            ],
            icon: "🔍"
        },
        {
            titulo: "Branding e Identidade Visual",
            descricao: "Criação ou rebranding completo com identidade visual memorável e posicionamento estratégico de marca.",
            detalhes: [
                "Pesquisa de mercado e concorrência",
                "Definição de posicionamento e proposta de valor",
                "Criação de logo, paleta, tipografia",
                "Manual de identidade visual completo",
                "Aplicações em diversos formatos",
                "Estratégia de brand voice e tom de voz"
            ],
            beneficios: [
                "Marca memorável e diferenciada",
                "Percepção premium do público",
                "Coerência visual em todos canais",
                "Valuation da empresa aumentado"
            ],
            icon: "🎨"
        },
        {
            titulo: "Desenvolvimento Web e E-commerce",
            descricao: "Sites institucionais, landing pages e lojas virtuais de alta conversão com UX impecável.",
            detalhes: [
                "Sites WordPress, Webflow ou código customizado",
                "E-commerce Shopify, WooCommerce ou VTEX",
                "Landing pages otimizadas para conversão",
                "Design responsivo mobile-first",
                "Integração com ferramentas de analytics",
                "Manutenção técnica e hospedagem"
            ],
            beneficios: [
                "Taxa de conversão até 8%",
                "Carregamento em menos de 2s",
                "SEO técnico já implementado",
                "Escalabilidade garantida"
            ],
            icon: "💻"
        },
        {
            titulo: "Email Marketing e Automação",
            descricao: "Estratégias de email marketing com automações inteligentes que nutrem leads e aumentam LTV.",
            detalhes: [
                "Implementação de plataforma (RD Station, HubSpot, ActiveCampaign)",
                "Criação de fluxos de nutrição automatizados",
                "Segmentação avançada de audiências",
                "Design de templates responsivos",
                "Testes A/B de subject lines e CTAs",
                "Recuperação de carrinho abandonado (e-commerce)"
            ],
            beneficios: [
                "Open rate superior a 35%",
                "Click rate acima de 8%",
                "Automação 24/7 vendendo",
                "LTV aumentado em 45%"
            ],
            icon: "✉️"
        },
        {
            titulo: "Growth Hacking e Experimentação",
            descricao: "Testes rápidos e escaláveis para encontrar canais de crescimento exponencial do negócio.",
            detalhes: [
                "Mapeamento de funil completo (acquisition, activation, retention)",
                "Hipóteses de crescimento baseadas emdata",
                "Experimentos semanais de baixo custo",
                "Análise de produto-mercado fit",
                "Implementação de viral loops",
                "Estratégias de referral program"
            ],
            beneficios: [
                "Descoberta de canais inexplorados",
                "Crescimento 10x mais rápido",
                "Inovação constante",
                "Vantagem competitiva"
            ],
            icon: "🚀"
        },
        {
            titulo: "Analytics, BI e Data Science Marketing",
            descricao: "Implementação de analytics profissional e dashboards para decisões baseadas em dados reais.",
            detalhes: [
                "Setup completo Google Analytics 4 e GTM",
                "Dashboards personalizados (Looker Studio, Power BI)",
                "Tracking de eventos customizados",
                "Análise de funil completo e pontos de fuga",
                "Attribution modeling multi-touch",
                "Análise preditiva com machine learning"
            ],
            beneficios: [
                "Visibilidade total da jornada do cliente",
                "Decisões baseadas em dados",
                "Otimizações precisas de campanha",
                "Previsibilidade de resultados"
            ],
            icon: "📊"
        },
        {
            titulo: "Inbound Marketing e Geração de Leads",
            descricao: "Estratégia completa de atração, conversão e nutrição de leads qualificados através de conteúdo de valor.",
            detalhes: [
                "Criação de ofertas de conteúdo (ebooks, webinars, templates)",
                "Produção de blog posts otimizados para SEO",
                "Landing pages de conversão",
                "Fluxos de nutrição automatizados",
                "Lead scoring e qualificação",
                "Integração com CRM de vendas"
            ],
            beneficios: [
                "Pipeline constante de leads",
                "CAC 60% menor que outbound",
                "Leads educados e prontos para comprar",
                "Escalabilidade previsível"
            ],
            icon: "🧲"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Serviços de Marketing Digital Full Service</h1>
                        <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                            Soluções integradas de performance, branding e tech para acelerar seu crescimento digital
                        </p>
                    </div>
                </section>

                <section className="py-12 bg-white container mx-auto px-4 text-center">
                    <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
                        Na Impulse Digital, oferecemos um ecossistema completo de serviços de marketing digital. Não somos especialistas em apenas uma área - somos especialistas em fazer tudo funcionar junto de forma integrada e estratégica para maximizar seus resultados. Da atração à conversão, da marca à performance, cobrimos toda a jornada do cliente.
                    </p>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="space-y-12 max-w-6xl mx-auto">
                            {servicos.map((servico, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 border border-purple-100"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-3xl">
                                            {servico.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{servico.titulo}</h2>
                                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{servico.descricao}</p>

                                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                        <CheckCircle className="text-purple-600" size={20} />
                                                        O que fazemos:
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {servico.detalhes.map((detalhe, idx) => (
                                                            <li key={idx} className="flex items-start text-slate-700">
                                                                <span className="text-purple-600 mr-2 flex-shrink-0">✓</span>
                                                                <span className="leading-relaxed">{detalhe}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                        <CheckCircle className="text-green-600" size={20} />
                                                        Resultados esperados:
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
                                                href="/sites-institucionais/simples/agencia-marketing/contato"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors font-semibold shadow-md"
                                            >
                                                Quero este Serviço <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossa Metodologia IMPACT™</h2>
                            <p className="text-xl text-slate-600">Framework proprietário de 6 etapas para resultados previsíveis</p>
                        </div>

                        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                            {[
                                { num: "1", title: "Investigação", desc: "Análise profunda do negócio, mercado e concorrência" },
                                { num: "2", title: "Mapeamento", desc: "Definição de personas, jornada do cliente e objetivos" },
                                { num: "3", title: "Planejamento", desc: "Estratégia integrada multi-canal e cronograma" },
                                { num: "4", title: "Ativação", desc: "Execução das campanhas e produção de conteúdos" },
                                { num: "5", title: "Controle", desc: "Monitoramento contínuo de KPIs e ajustes" },
                                { num: "6", title: "Transformação", desc: "Otimização e escala dos canais vencedores" }
                            ].map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                        {step.num}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4 text-center">
                    <Target size={60} className="mx-auto text-purple-600 mb-8" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pronto Para Multiplicar Seus Resultados?</h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Solicite uma proposta personalizada e descubra como podemos acelerar seu crescimento digital
                    </p>
                    <Link
                        href="/sites-institucionais/simples/agencia-marketing/contato"
                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                    >
                        Solicitar Proposta Gratuita
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
}
