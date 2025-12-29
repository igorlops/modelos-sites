import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { TrendingUp, Target, Zap, Award, Users, BarChart, CheckCircle, Rocket } from "lucide-react";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow">
                <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white py-20 md:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <span className="inline-block py-2 px-4 rounded-full bg-pink-500 text-white text-sm font-bold mb-6 tracking-wide uppercase">
                                Marketing de Performance
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Transforme Dados em <span className="text-pink-400">Resultados Extraordinários</span>
                            </h1>
                            <p className="text-lg text-purple-100 mb-8 max-w-2xl leading-relaxed">
                                Impulse Digital é a agência full service que combina criatividade, dados e tecnologia para criar estratégias de marketing digital que realmente convertem. Mais de 200 empresas já multiplicaram seus resultados conosco.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/sites-institucionais/simples/agencia-marketing/contato" className="px-8 py-4 bg-pink-500 rounded-full font-bold hover:bg-pink-600 transition-colors text-center shadow-lg">
                                    Quero Crescer Meu Negócio
                                </Link>
                                <Link href="/sites-institucionais/simples/agencia-marketing/portfolio" className="px-8 py-4 bg-transparent border-2 border-pink-300 rounded-full font-bold hover:bg-pink-900 transition-colors text-center">
                                    Ver Casos de Sucesso
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
                                <h3 className="text-xl font-bold text-slate-900 mb-3">O Problema</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Investimento em marketing sem retorno claro, estratégias genéricas que não funcionam, redes sociais sem engajamento e concorrentes dominando o digital enquanto você fica para trás.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Nossa Solução</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Estratégias data-driven personalizadas, criação de conteúdo que engaja, campanhas de tráfego pago otimizadas e acompanhamento de métricas que realmente importam para seu ROI.
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
                                    Equipe multidisciplinar com especialistas certificados, metodologia própria validada em mais de 200 projetos e obsessão por resultados mensuráveis, não apenas métricas de vaidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Serviços Que Aceleram Seu Crescimento</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Soluções completas de marketing digital integradas para maximizar seus resultados</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Target,
                                    title: "Tráfego Pago Performance",
                                    desc: "Google Ads, Meta Ads e LinkedIn Ads com otimização contínua focada em conversão e CAC reduzido. ROI médio de 400% em 6 meses."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Social Media Estratégico",
                                    desc: "Gestão completa de redes sociais com calendário editorial, criação de conteúdo viral e community management que gera vendas."
                                },
                                {
                                    icon: Zap,
                                    title: "SEO e Marketing de Conteúdo",
                                    desc: "Ranqueamento orgânico no Google com estratégia de conteúdo SEO, link building e otimizações técnicas para topo da SERP."
                                },
                                {
                                    icon: Rocket,
                                    title: "Growth Hacking",
                                    desc: "Experimentos rápidos e escaláveis para encontrar canais de crescimento exponencial. Metodologia ágil aplicada ao marketing."
                                },
                                {
                                    icon: BarChart,
                                    title: "Analytics e BI de Marketing",
                                    desc: "Dashboards personalizados, análise de funil completo e relatórios acionáveis para tomada de decisão baseada em dados reais."
                                },
                                {
                                    icon: Award,
                                    title: "Branding e Design Estratégico",
                                    desc: "Identidade visual memorável, rebranding profissional e design de materiais que convertem alinhados à estratégia de marca."
                                }
                            ].map((servico, i) => (
                                <div key={i} className="p-8 rounded-xl bg-white hover:shadow-lg transition-shadow border border-purple-100">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                                        <servico.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{servico.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">{servico.desc}</p>
                                    <Link href="/sites-institucionais/simples/agencia-marketing/servicos" className="text-purple-600 font-semibold inline-flex items-center hover:text-purple-700">
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
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por Que Mais de 200 Empresas Escolheram a Impulse</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">Não somos apenas executores, somos parceiros estratégicos do seu crescimento</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "👥",
                                    title: "Time Multidisciplinar Certificado",
                                    desc: "Especialistas em performance, branding, conteúdo e tech com certificações Google, Meta e HubSpot. Equipe sênior dedicada ao seu projeto."
                                },
                                {
                                    icon: "📊",
                                    title: "Obsessão Por Dados e Métricas",
                                    desc: "Decisões baseadas em analytics profundo, testes A/B sistemáticos e análise preditiva. Cada real investido é rastreado e otimizado."
                                },
                                {
                                    icon: "🚀",
                                    title: "Metodologia Própria Validada",
                                    desc: "Framework IMPACT™ desenvolvido internamente e testado em 200+ projetos. Resultados em até 90 dias garantidos."
                                },
                                {
                                    icon: "⚡",
                                    title: "Agilidade e Adaptabilidade",
                                    desc: "Sprints quinzenais, pivôs rápidos conforme dados e comunicação direta sem burocracia. Seu crescimento não pode esperar."
                                },
                                {
                                    icon: "🎯",
                                    title: "Foco em ROI, Não Vaidade",
                                    desc: "Não vendemos curtidas. Vendemos leads qualificados, vendas e crescimento sustentável. Nosso KPI principal é o seu faturamento."
                                },
                                {
                                    icon: "💡",
                                    title: "Inovação Constante",
                                    desc: "Early adopters de novas plataformas e tecnologias. IA applicada ao marketing, automações avançadas e sempre à frente das tendências."
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

                <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Resultados Que Falam Por Si</h2>
                            <p className="text-slate-600">Depoimentos reais de clientes que transformaram seus negócios</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-xl font-bold text-purple-600">
                                        LC
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Lucas Costa</h4>
                                        <p className="text-sm text-slate-500">CEO - E-commerce de Moda</p>
                                    </div>
                                </div>
                                <div className="text-yellow-400 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed mb-4">
                                    "Em 6 meses com a Impulse, multiplicamos por 5x o faturamento do e-commerce. O tráfego pago otimizado e o novo branding foram game changers. ROI de 450%!"
                                </p>
                                <div className="pt-4 border-t border-purple-100">
                                    <p className="text-sm font-bold text-purple-600">+450% ROI em 6 meses</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-xl font-bold text-purple-600">
                                        MR
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Marina Ribeiro</h4>
                                        <p className="text-sm text-slate-500">Fundadora - SaaS B2B</p>
                                    </div>
                                </div>
                                <div className="text-yellow-400 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed mb-4">
                                    "A estratégia de inbound e LinkedIn Ads trouxe leads qualificados que nunca conseguimos antes. Redução de 60% no CAC e aumento de 200% em MRR."
                                </p>
                                <div className="pt-4 border-t border-purple-100">
                                    <p className="text-sm font-bold text-purple-600">+200% MRR em 4 meses</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-xl font-bold text-purple-600">
                                        RS
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Ricardo Santos</h4>
                                        <p className="text-sm text-slate-500">Diretor - Clínica Médica</p>
                                    </div>
                                </div>
                                <div className="text-yellow-400 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed mb-4">
                                    "Social media estava morto até a Impulse assumir. Hoje temos fila de espera de pacientes vindos do Instagram. Profissionalismo total e resultados impressionantes."
                                </p>
                                <div className="pt-4 border-t border-purple-100">
                                    <p className="text-sm font-bold text-purple-600">300% mais agendamentos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gradient-to-r from-purple-900 via-purple-800 to-pink-900 text-white text-center">
                    <div className="container mx-auto px-4">
                        <Rocket size={60} className="mx-auto mb-8 opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto Para Decolar Seus Resultados Digitais?</h2>
                        <p className="text-purple-100 mb-3 max-w-2xl mx-auto text-lg">
                            Agende uma análise gratuita do seu marketing atual e receba um plano de ação personalizado.
                        </p>
                        <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
                            Primeira consultoria estratégica sem custo. Vagas limitadas por mês.
                        </p>
                        <Link href="/sites-institucionais/simples/agencia-marketing/contato" className="inline-block px-10 py-5 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-colors shadow-2xl text-lg">
                            Solicitar Análise Gratuita Agora
                        </Link>
                        <p className="mt-6 text-purple-200 text-sm">
                            📞 (11) 4040-4040 | 📱 WhatsApp: (11) 99999-4040
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
