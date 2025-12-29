import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Home, Building2, Ruler, Paintbrush, LayoutDashboard, MonitorPlay, ShieldCheck, Clock, Banknote } from "lucide-react";

export default function ServicosPage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* 1. Hero Serviços */}
            <section className="relative py-20 bg-stone-100 border-b border-stone-200">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">O Que Fazemos de Melhor</span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-900 mb-8">Nossas Soluções</h1>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                        Uma abordagem holística que vai da concepção arquitetônica ao design de interiores, garantindo coesão estética e funcional em cada etapa do processo.
                    </p>
                </div>
            </section>

            {/* 2. Lista Detalhada de Serviços */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-32">

                    {/* Serviço 1 */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-800 mb-6">
                                <Home size={32} />
                            </div>
                            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Arquitetura Residencial Premium</h2>
                            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                                Desenvolvemos projetos arquitetônicos exclusivos para residências de alto padrão. Nosso foco é criar casas que sejam verdadeiros refúgios, integrando interior e exterior, luz natural e ventilação cruzada, sempre com uma estética contemporânea e atemporal.
                            </p>

                            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 mb-8">
                                <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2"><Check size={20} className="text-amber-500" /> O que está incluso:</h4>
                                <ul className="grid sm:grid-cols-2 gap-4 text-stone-600 text-sm">
                                    <li>• Levantamento topográfico</li>
                                    <li>• Estudo preliminar 3D</li>
                                    <li>• Anteprojeto detalhado</li>
                                    <li>• Projeto legal (Prefeitura)</li>
                                    <li>• Projeto executivo completo</li>
                                    <li>• Compatibilização de complementares</li>
                                </ul>
                            </div>

                            <div className="flex items-center gap-8">
                                <div>
                                    <span className="block text-xs uppercase tracking-wider text-stone-500 mb-1">Prazo Estimado</span>
                                    <span className="font-bold text-stone-900">3 a 6 meses (projeto)</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wider text-stone-500 mb-1">Investimento</span>
                                    <span className="font-bold text-stone-900">Sob Consulta</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1600596542815-27b84f5929d6?q=80&w=2664&auto=format&fit=crop"
                                alt="Arquitetura Residencial"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Serviço 2 */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                                alt="Design de Interiores"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-800 mb-6">
                                <Paintbrush size={32} />
                            </div>
                            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Design de Interiores & Decoração</h2>
                            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                                Transformamos ambientes existentes em espaços cheios de personalidade e conforto. Atuamos na definição de layout, revestimentos, iluminação, mobiliário e obras de arte, criando uma narrativa visual coesa que reflete a identidade do cliente.
                            </p>

                            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 mb-8">
                                <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2"><Check size={20} className="text-amber-500" /> O que está incluso:</h4>
                                <ul className="grid sm:grid-cols-2 gap-4 text-stone-600 text-sm">
                                    <li>• Moodboards conceituais</li>
                                    <li>• Planta de layout e demolição</li>
                                    <li>• Detalhamento de marcenaria</li>
                                    <li>• Paginação de pisos e revestimentos</li>
                                    <li>• Projeto luminotécnico</li>
                                    <li>• Lista de compras (FF&E)</li>
                                </ul>
                            </div>

                            <div className="flex items-center gap-8">
                                <div>
                                    <span className="block text-xs uppercase tracking-wider text-stone-500 mb-1">Prazo Estimado</span>
                                    <span className="font-bold text-stone-900">2 a 4 meses</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wider text-stone-500 mb-1">Investimento</span>
                                    <span className="font-bold text-stone-900">Sob Consulta</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Serviço 3 */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-800 mb-6">
                                <LayoutDashboard size={32} />
                            </div>
                            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Gestão de Obras (Turnkey)</h2>
                            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                                Para quem busca zero dor de cabeça. Assumimos a responsabilidade total pela execução da obra, desde a contratação de fornecedores até a limpeza final. Você recebe as chaves com tudo pronto para morar.
                            </p>

                            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 mb-8">
                                <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2"><Check size={20} className="text-amber-500" /> O que está incluso:</h4>
                                <ul className="grid sm:grid-cols-2 gap-4 text-stone-600 text-sm">
                                    <li>• Cronograma físico-financeiro</li>
                                    <li>• Cotação e compra de materiais</li>
                                    <li>• Gestão de equipe de obra</li>
                                    <li>• Controle de qualidade técnico</li>
                                    <li>• Relatórios de acompanhamento</li>
                                    <li>• As-Built final</li>
                                </ul>
                            </div>

                            <div className="flex items-center gap-8">
                                <div>
                                    <span className="block text-xs uppercase tracking-wider text-stone-500 mb-1">Prazo Estimado</span>
                                    <span className="font-bold text-stone-900">Variável conforme obra</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wider text-stone-500 mb-1">Investimento</span>
                                    <span className="font-bold text-stone-900">% sobre custo obra</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop"
                                alt="Gestão de Obras"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. Comparativo / Garantias */}
            <section className="py-24 bg-stone-900 text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Por que contratar a ArchPremium?</h2>
                        <p className="text-stone-400">Entenda a diferença entre contratar um projeto amador e investir em uma metodologia consolidada de alto padrão.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700 hover:border-amber-600 transition-colors duration-300">
                            <ShieldCheck className="text-amber-500 mb-6" size={40} />
                            <h3 className="text-xl font-bold mb-4">Segurança Técnica</h3>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                Todos os projetos seguem rigorosamente as normas NBR e legislações locais. Emitimos RRT/ART de todos os serviços, garantindo sua segurança jurídica e física.
                            </p>
                        </div>
                        <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700 hover:border-amber-600 transition-colors duration-300">
                            <Clock className="text-amber-500 mb-6" size={40} />
                            <h3 className="text-xl font-bold mb-4">Prazos Respeitados</h3>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                Utilizamos softwares de gestão de projetos avançados para monitorar cada etapa. Nosso histórico de entrega no prazo é de 98% nos últimos 5 anos.
                            </p>
                        </div>
                        <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700 hover:border-amber-600 transition-colors duration-300">
                            <Banknote className="text-amber-500 mb-6" size={40} />
                            <h3 className="text-xl font-bold mb-4">Valorização Patrimonial</h3>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                Um imóvel com projeto assinado pela ArchPremium tem valorização média de 25% a 30% no mercado imobiliário, superando o custo do investimento no projeto.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ Serviços */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-12 text-center">Dúvidas Frequentes</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Qual a diferença entre Estudo Preliminar e Projeto Executivo?", a: "O Estudo Preliminar define o conceito, layout e volumetria (3D). O Projeto Executivo é o manual técnico da obra, contendo todas as medidas, especificações de materiais, pontos elétricos e hidráulicos para que o construtor execute exatamente o que foi desenhado." },
                            { q: "Vocês realizam apenas o projeto sem a obra?", a: "Sim. Você pode contratar apenas o desenvolvimento dos projetos (Arquitetura e Interiores) e executar com sua equipe de confiança. Entregamos todo o material técnico necessário (o caderno executivo) para guiar sua obra." },
                            { q: "Como funciona o pagamento?", a: "Trabalhamos com um fluxo financeiro atrelado às entregas de etapas do projeto. Geralmente: Entrada + parcelas mensais durante o desenvolvimento. Para gestão de obra, cobramos uma taxa de administração mensal." },
                            { q: "Atendem fora de São Paulo?", a: "Sim. Realizamos projetos em todo o Brasil e no exterior. Para obras fora da nossa base (SP), atuamos com consultoria remota de acompanhamento ou alocamos um gestor dedicado (custo adicional)." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                <h4 className="font-bold text-stone-900 mb-2">{faq.q}</h4>
                                <p className="text-stone-600 text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-20 bg-amber-600 text-white text-center">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Pronto para transformar seu espaço?</h2>
                    <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                        Solicite um orçamento personalizado para o seu projeto. Nossa equipe entrará em contato em até 24h.
                    </p>
                    <Link
                        href="/sites-institucionais/premium/arquitetura-design-interiores/contato"
                        className="inline-block px-10 py-5 bg-white text-amber-600 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Solicitar Orçamento
                    </Link>
                </div>
            </section>
        </div>
    );
}
