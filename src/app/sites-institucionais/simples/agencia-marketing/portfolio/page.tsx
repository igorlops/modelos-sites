import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function PortfolioPage() {
    const cases = [
        {
            cliente: "ModaVerse E-commerce",
            segmento: "Fashion & Lifestyle",
            desafio: "E-commerce de moda feminina com vendas estagnadas há 8 meses. CAC alto, baixa taxa de conversão (0,8%) e ROAs negativo em todas campanhas de tráfego pago.",
            solucao: "Reestruturação completa de tráfego pago (Google Shopping + Meta Ads), redesign do site focado em CRO, implementação de email marketing automatizado e criação de conteúdo para Instagram.",
            resultados: [
                "+420% de faturamento em 6 meses",
                "CAC reduzido de R$180 para R$45",
                "Taxa de conversão de 0,8% para 4,2%",
                "ROAS de 6,8 (cada R$1 virou R$6,80)"
            ],
            metricas: "420% ROI",
            badge: "E-commerce"
        },
        {
            cliente: "TechFlow SaaS",
            segmento: "Software B2B",
            desafio: "Startup SaaS com produto validado mas sem tração. Zero presença digital, leads caros vindo apenas de prospecção ativa e MRR estagnado em R$15k/mês.",
            solucao: "Estratégia completa de inbound marketing com blog SEO, LinkedIn Ads segmentado, webinars educativos, automação de nutrição de leads e rebranding profissional.",
            resultados: [
                "MRR de R$15k para R$95k em 8 meses",
                "Pipeline constante de 80+ leads/mês",
                "CAC reduzido em 65%",
                "Captação de R$2M em investimento seed"
            ],
            metricas: "533% MRR",
            badge: "SaaS B2B"
        },
        {
            cliente: "VidaPlena Clínica",
            segmento: "Saúde e Bem-Estar",
            desafio: "Clínica odontológica premium com agenda vazia em horários nobres. Redes sociais com 2k seguidores e zero agendamentos vindos do digital.",
            solucao: "Gestão completa de Instagram com produção mensal de reels educativos, Google Ads local search, parcerias estratégicas e branding premium reforçando expertise.",
            resultados: [
                "Agenda lotada com fila de espera de 30 dias",
                "Instagram de 2k para 28k seguidores",
                "85% dos novos pacientes vêm do digital",
                "Ticket médio aumentou 40%"
            ],
            metricas: "+1300% seguidores",
            badge: "Saúde"
        },
        {
            cliente: "EduMaster Cursos",
            segmento: "Educação Online",
            desafio: "Infoprodutor com curso validado mas vendas inconsistentes. Lançamentos pontuais gerando picos e vales. Sem estratégia de evergreen e alta dependência de afiliados.",
            solucao: "Implementação de funil evergreen automatizado, tráfego pago Facebook e YouTube, email marketing segmentado, criação de upsells e downsells estratégicos.",
            resultados: [
                "Faturamento recorrente de R$180k/mês",
                "1.200+ alunos matriculados via automação",
                "LTV aumentado de R$497 para R$1.890",
                "Independência total de afiliados"
            ],
            metricas: "R$180k/mês recorrente",
            badge: "Infoprodutos"
        },
        {
            cliente: "UrbanLiving Imobiliária",
            segmento: "Real Estate",
            desafio: "Imobiliária boutique competindo com grandes players. Website desatualizado, leads de baixa qualidade e corretores ociosos esperando clientes de porta aberta.",
            solucao: "Desenvolvimento de novo site com tours virtuais 360°, campanhas de Facebook Lead Ads geo-segmentadas, remarketing estratégico e CRM integrado para gestão de pipeline.",
            resultados: [
                "320 leads qualificados/mês",
                "Taxa de conversão lead-venda de 18%",
                "Redução de 40% no ciclo de vendas",
                "57 unidades vendidas em 12 meses"
            ],
            metricas: "57 vendas/ano",
            badge: "Imobiliário"
        },
        {
            cliente: "FitRevolution Academia",
            segmento: "Fitness & Lifestyle",
            desafio: "Academia premium com alta concorrência local. Dificuldade em diferenciar e comunicar proposta de valor. Taxa de cancelamento de 35% ao ano.",
            solucao: "Rebranding completo com nova identidade visual, campanha de awareness no Instagram, programa de indicação gamificado, app próprio e estratégia de retenção.",
            resultados: [
                "Taxa de cancelamento reduzida para 12%",
                "+180 novos alunos em 6 meses",
                "NPS aumentado de 45 para 82",
                "Expansão para segunda unidade viabilizada"
            ],
            metricas: "NPS 82",
            badge: "Fitness"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Casos de Sucesso Reais</h1>
                        <p className="text-purple-100 max-w-3xl mx-auto text-lg leading-relaxed">
                            Conheça empresas que transformaram seus resultados digitais em parceria com a Impulse Digital
                        </p>
                        <p className="text-xs text-purple-300 mt-4">
                            * Todos os casos são reais e resultados documentados. Nomes de clientes alterados por questões de confidencialidade.
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="space-y-12 max-w-6xl mx-auto">
                        {cases.map((caso, i) => (
                            <div key={i} className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl overflow-hidden border border-purple-100 hover:shadow-xl transition-shadow">
                                <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                                    <div className="md:col-span-2">
                                        <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-6 overflow-hidden relative">
                                            <div className="absolute inset-0 flex items-center justify-center text-purple-700 flex-col">
                                                <div className="text-7xl mb-4">📈</div>
                                                <p className="font-bold text-xl">Caso {i + 1}</p>
                                                <p className="text-sm">{caso.segmento}</p>
                                            </div>
                                            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-purple-700 uppercase">
                                                {caso.badge}
                                            </div>
                                        </div>
                                        <div className="text-center p-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl shadow-lg">
                                            <div className="text-4xl font-bold mb-2">{caso.metricas}</div>
                                            <div className="text-sm opacity-90">Resultado Principal</div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-3">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-3xl font-bold text-slate-900 mb-2">{caso.cliente}</h3>
                                                <p className="text-purple-600 font-semibold">{caso.segmento}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                                                    <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-sm flex-shrink-0">!</span>
                                                    Desafio:
                                                </h4>
                                                <p className="text-slate-600 leading-relaxed pl-10">{caso.desafio}</p>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                                                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm flex-shrink-0">✓</span>
                                                    Nossa Solução:
                                                </h4>
                                                <p className="text-slate-600 leading-relaxed pl-10">{caso.solucao}</p>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                                                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm flex-shrink-0">★</span>
                                                    Resultados:
                                                </h4>
                                                <ul className="grid md:grid-cols-2 gap-3 pl-10">
                                                    {caso.resultados.map((resultado, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <span className="text-green-500 flex-shrink-0 mt-1">✓</span>
                                                            <span className="text-slate-700 leading-relaxed font-semibold">{resultado}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Seu Caso Pode Ser o Próximo Sucesso</h2>
                        <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
                            Cada transformação começa com uma análise estratégica gratuita do seu negócio digital
                        </p>
                        <Link
                            href="/sites-institucionais/simples/agencia-marketing/contato"
                            className="inline-block bg-pink-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-pink-600 transition-colors shadow-lg"
                        >
                            Quero Minha Transformação Digital
                        </Link>
                    </div>
                </section>

                <section className="py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Perguntas Frequentes Sobre Nossos Casos</h3>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl border border-purple-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Os resultados são garantidos?</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Trabalhamos com metas claras e monitoramento constante, mas resultados dependem de múltiplos fatores (produto, mercado, investimento). O que garantimos é dedicação máxima, transparência total e metodologia validada em centenas de projetos.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-purple-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Quanto tempo leva para ver resultados?</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Primeiros resultados em tráfego pago aparecem entre 15-30 dias. SEO e inbound levam 3-6 meses. Transformações completas como os casos acima ocorrem em 6-12 meses de trabalho contínuo.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-purple-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Posso conversar com algum cliente?</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Sim! Mediante autorização prévia, conectamos você com clientes ativos que aceitaram ser referência. Entre em contato e faremos a ponte.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
