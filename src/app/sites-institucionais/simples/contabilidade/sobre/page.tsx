import Header from "../components/Header";
import Footer from "../components/Footer";
import { Target, Eye, Gem, CheckCircle, Award, Users, TrendingUp } from "lucide-react";

export default function SobrePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nossa Essência: Desburocratizar Para Impulsionar</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Há mais de 15 anos transformando a relação entre empresários e contabilidade através de tecnologia, transparência e consultoria estratégica
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Mais de 15 Anos Simplificando Gestão Empresarial</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    A Contábil Prime surgiu em 2009 com um objetivo claro: descomplicar a vida do empreendedor brasileiro. Fundada por três contadores experientes - Carlos Mendes (CRC 1SP123456), Ana Beatriz Santos (CRC 1SP234567) e Pedro Oliveira (CRC 1SP345678) - que se frustravam com a burocracia excessiva e falta de suporte estratégico oferecido por escritórios tradicionais.
                                </p>
                                <p>
                                    Começamos atendendo 5 pequenos comércios em uma sala comercial de 30m² no bairro da Liberdade, em São Paulo. O diferencial desde o início: unir a experiência de contadores seniores certificados com a agilidade da tecnologia cloud computing, algo revolucionário para época.
                                </p>
                                <p>
                                    Hoje, ocupamos um escritório de 500m² na Avenida Faria Lima, com equipe de 35 profissionais especializados atendendo mais de 500 empresas ativas em todo Brasil através da nossa plataforma digital proprietária. Atendemos desde MEIs até empresas de médio porte nos segmentos de Serviços, Comércio, Tecnologia, Saúde e Indústria.
                                </p>
                                <p className="font-bold text-blue-600">
                                    Já ajudamos mais de 1.200 empresas a abrirem, crescerem e se manterem em conformidade nos últimos 15 anos, economizando milhões em impostos através de planejamento tributário lícito.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-200 h-[500px] rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center text-slate-400 flex-col">
                                <div className="text-8xl mb-4">🏢</div>
                                <p className="font-bold text-xl">Nosso Escritório</p>
                                <p className="text-sm">Av. Faria Lima - São Paulo</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 bg-blue-50 rounded-lg">
                            <div className="text-4xl font-bold text-blue-600 mb-2">+500</div>
                            <div className="text-sm text-slate-600">Clientes Ativos</div>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg">
                            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                            <div className="text-sm text-slate-600">Taxa de Satisfação</div>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg">
                            <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
                            <div className="text-sm text-slate-600">Anos de Mercado</div>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg">
                            <div className="text-4xl font-bold text-blue-600 mb-2">35</div>
                            <div className="text-sm text-slate-600">Profissionais</div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <Target className="text-blue-600" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Missão</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Desburocratizar a gestão contábil e fiscal de empresas brasileiras através de tecnologia, transparência e consultoria estratégica, permitindo que empreendedores foquem no crescimento sustentável dos seus negócios.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <Eye className="text-blue-600" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Visão</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Ser a contabilidade digital mais recomendada do Brasil até 2030, reconhecida pela excelência técnica, inovação tecnológica e impacto positivo na saúde financeira de milhares de empresas.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <Gem className="text-blue-600" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossos Valores</h3>
                                <ul className="text-slate-600 space-y-2">
                                    {["Transparência total", "Ética profissional", "Inovação constante", "Foco no cliente", "Responsabilidade fiscal"].map((v, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
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
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O Que Nos Torna Únicos no Mercado</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Diferençadores que fazem empresas escolherem e permanecerem conosco</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                { icon: "🖥️", title: "Plataforma Digital Própria", desc: "Sistema desenvolvido internamente que centraliza documentos, relatórios, guias e comunicação. Acesse tudo 24/7 de qualquer lugar com total segurança." },
                                { icon: "👥", title: "Contador Exclusivo por Empresa", desc: "Você não é atendido por qualquer um. Tem UM contador dedicado que conhece seu negócio, histórico e peculiaridades, garantindo atendimento personalizado." },
                                { icon: "📊", title: "Relatórios Gerenciais Mensais", desc: "Além da contabil idade obrigatória, enviamos DRE detalhado, análise de custos, fluxo de caixa projetado e indicadores financeiros para gestão estratégica." },
                                { icon: "⚖️", title: "Planejamento Tributário Ativo", desc: "Revisamos anualmente seu enquadramento e identificamos oportunidades lícitas de redução de carga tributária através de consultorias especializadas." },
                                { icon: "🔔", title: "Alertas Automáticos", desc: "Sistema inteligente que te avisa sobre vencimentos, mudanças na legislação que impactam seu negócio e ações necessárias antes dos prazos." },
                                { icon: "🎓", title: "Educação Financeira", desc: "Webinars mensais gratuitos, materiais educativos e suporte para você entender sua contabilidade e tomar decisões cada vez mais conscientes." }
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça Nossa Liderança</h2>
                            <p className="text-slate-300">Sócios fundadores com décadas de experiência</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { nome: "Carlos Mendes", cargo: "Sócio-Fundador | Tributarista", crc: "CRC 1SP123456", bio: "20+ anos em planejamento tributário. Especialista em Simples Nacional e Lucro Presumido. Pós-graduado em Direito Tributário pela FGV." },
                                { nome: "Ana Beatriz Santos", cargo: "Sócia-Fundadora | BPO", crc: "CRC 1SP234567", bio: "Especialista em BPO Financeiro e Departamento Pessoal. MBA em Gestão Empresarial. Responsável pela área de People Analytics." },
                                { nome: "Pedro Oliveira", cargo: "Sócio-Fundador | CTO", crc: "CRC 1SP345678", bio: "Visionário de tecnologia contábil. Desenvolveu nossa plataforma proprietária. Mestre em Sistemas de Informação pela USP." }
                            ].map((pessoa, i) => (
                                <div key={i} className="bg-slate-800 p-8 rounded-2xl text-center">
                                    <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                                        👔
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{pessoa.nome}</h3>
                                    <p className="text-blue-400 font-semibold mb-2">{pessoa.cargo}</p>
                                    <p className="text-xs text-slate-400 mb-4">{pessoa.crc}</p>
                                    <p className="text-sm text-slate-300 leading-relaxed">{pessoa.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pronto Para Conhecer Nossa Metodologia?</h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                            Agende uma conversa sem compromisso e veja como podemos ajudar sua empresa
                        </p>
                        <a
                            href="/sites-institucionais/simples/contabilidade/contato"
                            className="inline-block bg-blue-600 text-white px-10 py-4 rounded text-lg font-bold hover:bg-blue-700 transition-all shadow-lg"
                        >
                            Falar com Consultor
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
