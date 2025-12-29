import Header from "../components/Header";
import Footer from "../components/Footer";
import { Target, Eye, Gem, CheckCircle, Award, TrendingUp } from "lucide-react";

export default function SobrePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 border-b border-purple-100">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Marketing Que Transforma Dados em Crescimento Real</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Conheça a agência que há 8 anos une criatividade, tecnologia e performance para acelerar negócios digitais
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa História: De Startup a Referência em Performance</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    A Impulse Digital nasceu em 2016 da união de três profissionais apaixonados por marketing digital: Fernanda Lima (especialista em performance), Carlos Tedesco (branding e design) e Pedro Augusto (tech e analytics). Todos vindos de grandes agências tradicionais, compartilhavam a mesma frustração: campanhas bonitas que não geravam resultados mensuráveis.
                                </p>
                                <p>
                                    Começamos em um coworking de 10m² com um único cliente - um e-commerce de moda que estava prestes a fechar. Em 90 dias, multiplicamos o faturamento dele por 4x através de uma estratégia integrada de tráfego pago, social media e CRO. Esse case virou referência e abriu as portas para novos negócios.
                                </p>
                                <p>
                                    Hoje, 8 anos depois, somos uma equipe de 35 especialistas atendendo mais de 200 clientes ativos em diversos segmentos: e-commerce, SaaS, serviços, educação e saúde. Nosso escritório de 400m² na Av. Paulista é equipado com estúdio de produção de conteúdo, sala de war room e estrutura completa para atender projetos de grande porte.
                                </p>
                                <p className="font-bold text-purple-700">
                                    Já gerenciamos mais de R$ 50 milhões em investimento de mídia paga, geramos mais de 2 milhões de leads qualificados e ajudamos dezenas de empresas a escalarem de 6 para 7 dígitos de faturamento anual.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-[500px] rounded-2xl overflow-hidden relative shadow-lg">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col">
                                <div className="text-8xl mb-4">🚀</div>
                                <p className="font-bold text-xl text-purple-800">Time Impulse Digital</p>
                                <p className="text-sm">Av. Paulista - São Paulo</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                            <div className="text-4xl font-bold text-purple-700 mb-2">200+</div>
                            <div className="text-sm text-slate-600">Clientes Ativos</div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                            <div className="text-4xl font-bold text-purple-700 mb-2">R$50M</div>
                            <div className="text-sm text-slate-600">Investimento Gerenciado</div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                            <div className="text-4xl font-bold text-purple-700 mb-2">2M+</div>
                            <div className="text-sm text-slate-600">Leads Gerados</div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                            <div className="text-4xl font-bold text-purple-700 mb-2">8</div>
                            <div className="text-sm text-slate-600">Anos de Mercado</div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                    <Target className="text-purple-700" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Missão</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Democratizar acesso a marketing digital de alta performance, capacitando empresas de todos os tamanhos a competirem no digital através de estratégias data-driven, criatividade de impacto e tecnologia de ponta.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                    <Eye className="text-purple-700" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Visão</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Ser reconhecida até 2027 como a agência de marketing digital mais recomendada do Brasil em performance e inovação, conhecida por transformar dados em crescimento exponencial para nossos parceiros.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                    <Gem className="text-purple-700" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossos Valores</h3>
                                <ul className="text-slate-600 space-y-2">
                                    {["Obsessão por resultados", "Transparência radical", "Inovação constante", "Colaboração genuína", "Aprendizado contínuo"].map((v, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
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
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">O que nos torna únicos no mercado de marketing digital</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: "🎓",
                                    title: "Time Multiespecializado e Certificado",
                                    desc: "Equipe com certificações oficiais Google Ads, Meta BluePrint, HubSpot e RD Station. Especialistas em performance, branding, growth, analytics e tech trabalhando de forma integrada."
                                },
                                {
                                    icon: "🔬",
                                    title: "Metodologia IMPACT™ Proprietária",
                                    desc: "Framework exclusivo de 6 etapas validado em 200+ projetos: Investigação, Mapeamento, Planejamento, Ativação, Controle e Transformação. Resultados em até 90 dias."
                                },
                                {
                                    icon: "🤖",
                                    title: "IA e Automação Avançada",
                                    desc: "Uso de inteligência artificial para otimização de campanhas, análise preditiva, criação de conteúdo assistida e automações complexas via Make, Zapier e n8n."
                                },
                                {
                                    icon: "📊",
                                    title: "Analytics e BI Profissional",
                                    desc: "Dashboards personalizados em Looker Studio, DataBox e Power BI. Tracking completo de jornada do cliente, attribution modeling e análise de LTV/CAC em tempo real."
                                },
                                {
                                    icon: "🎨",
                                    title: "Estúdio de Produção In-house",
                                    desc: "Estrutura própria para produção de vídeos, fotos, motion graphics e podcast. Agilidade na criação de conteúdos sem depender de terceiros."
                                },
                                {
                                    icon: "⚡",
                                    title: "Cultura de Experimentação Ágil",
                                    desc: "Sprints quinzenais, testes A/B sistemáticos em todas frentes e pivôs rápidos baseados em dados. Metodologia lean aplicada ao marketing digital."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl border border-purple-100">
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

                <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça Nossa Liderança</h2>
                            <p className="text-purple-200">Fundadores com expertise complementar e visão de futuro</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    nome: "Fernanda Lima",
                                    cargo: "Co-fundadora | Head de Performance",
                                    bio: "10+ anos em mídia paga. Ex-Google e Mercado Livre. Especialista em tráfego pago, CRO e growth hacking. Certificada Google Ads e Meta BluePrint."
                                },
                                {
                                    nome: "Carlos Tedesco",
                                    cargo: "Co-fundador | Head de Criação",
                                    bio: "Designer premiado com passagem por Ogilvy e AKQA. Especialista em branding, UX/UI e direção de arte. Vencedor de 3 Cannes Lions."
                                },
                                {
                                    nome: "Pedro Augusto",
                                    cargo: "Co-fundador | Head de Tech & Data",
                                    bio: "Engenheiro de software e cientista de dados. Desenvolveu plataformas de analytics próprias. Mestrado em IA aplicada ao marketing pela USP."
                                }
                            ].map((pessoa, i) => (
                                <div key={i} className="bg-purple-800/50 p-8 rounded-2xl text-center border border-purple-700 backdrop-blur-sm">
                                    <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                                        👤
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{pessoa.nome}</h3>
                                    <p className="text-pink-300 font-semibold mb-4 text-sm">{pessoa.cargo}</p>
                                    <p className="text-sm text-purple-100 leading-relaxed">{pessoa.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <TrendingUp size={60} className="mx-auto text-purple-600 mb-8" />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Vamos Crescer Juntos?</h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                            Agende uma conversa e conheça nossa metodologia de perto
                        </p>
                        <a
                            href="/sites-institucionais/simples/agencia-marketing/contato"
                            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                        >
                            Falar com Especialista
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
