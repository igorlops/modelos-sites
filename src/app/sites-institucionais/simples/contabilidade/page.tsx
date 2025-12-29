import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { CheckCircle, TrendingUp, Shield, Laptop, Award, Users, FileText, BarChart } from "lucide-react";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow">
                <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20 md:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <span className="inline-block py-2 px-4 rounded-full bg-blue-600 text-white text-sm font-semibold mb-6 tracking-wide uppercase">
                                Contabilidade Digital
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Contabilidade Digital que faz sua empresa <span className="text-blue-400">crescer com segurança</span>
                            </h1>
                            <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
                                Esqueça a burocracia e papelada infinita. Cuidamos de toda a parte fiscal, trabalhista e contábil da sua empresa com tecnologia de ponta e consultoria estratégica para você focar no que realmente importa: fazer seu negócio prosperar.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/sites-institucionais/simples/contabilidade/contato" className="px-8 py-4 bg-blue-600 rounded font-bold hover:bg-blue-500 transition-colors text-center shadow-lg">
                                    Abrir Minha Empresa Grátis
                                </Link>
                                <Link href="/sites-institucionais/simples/contabilidade/precos" className="px-8 py-4 bg-transparent border border-slate-400 rounded font-bold hover:bg-white/10 transition-colors text-center">
                                    Conhecer Planos
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
                                    Burocracia sufocante, medo de multas fiscais, perda de prazos importantes e contadores que não dão suporte estratégico para o crescimento do seu negócio.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Nossa Solução</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Sistema 100% digital com plataforma própria, monitoramento constante de obrigações e consultoria ativa para reduzir impostos de forma legal e aumentar sua lucratividade.
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
                                    Mais de 15 anos desburocratizando empresas, equipe de contadores especializados por segmento e tecnologia que traz transparência total para sua gestão financeira.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por Que Mais de 500 Empresas Confiam em Nós</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Não somos apenas emissores de guias. Somos parceiros estratégicos do seu crescimento.</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: Shield, title: "Segurança Fiscal Total", desc: "Monitoramento diário de obrigações para evitar multas e problemas com Receita Federal e SEFAZ." },
                                { icon: Laptop, title: "Plataforma 100% Digital", desc: "Acesse documentos, guias e relatórios 24/7 de qualquer lugar através do nosso sistema exclusivo." },
                                { icon: TrendingUp, title: "Consultoria Ativa", desc: "Análises financeiras mensais e reuniões estratégicas para apoiar suas decisões de crescimento." },
                                { icon: CheckCircle, title: "Abertura Grátis", desc: "No plano anual, toda burocracia de abertura da empresa é por nossa conta, sem custos extras." },
                                { icon: Users, title: "Time Dedicado", desc: "Contador exclusivo para sua empresa que conhece seu negócio e responde rápido quando você precisa." },
                                { icon: FileText, title: "Compliance Garantido", desc: "Entregas sempre em dia de SPED, DCTF, eSocial e todas as obrigações acessórias do seu regime." },
                                { icon: BarChart, title: "Relatórios Gerenciais", desc: "DRE, fluxo de caixa e indicadores financeiros para você tomar decisões baseadas em dados reais." },
                                { icon: Award, title: "Excelência Comprovada", desc: "98% dos clientes renovam conosco e nos recomendam. Nota 4.9/5 no Google Reviews." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded flex items-center justify-center mb-4">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Empresas de Sucesso Confiam na Contábil Prime</h2>
                            <p className="text-slate-600">De MEIs a empresas de médio porte em diversos segmentos</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale max-w-5xl mx-auto">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <div key={i} className="h-20 bg-slate-100 rounded shadow-sm flex items-center justify-center font-bold text-slate-400 border border-slate-200">
                                    EMPRESA {i}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O Que Nossos Clientes Dizem</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl font-bold text-blue-600">
                                        RC
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Ricardo Costa</h4>
                                        <p className="text-sm text-slate-500">E-commerce de Moda</p>
                                    </div>
                                </div>
                                <div className="text-yellow-400 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed">
                                    "Migrei de outra contabilidade e a diferença é absurda. Relatórios claros, contador que responde no mesmo dia e economia de quase R$ 3 mil/mês com planejamento tributário. Recomendo muito!"
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl font-bold text-blue-600">
                                        MF
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Marina Ferreira</h4>
                                        <p className="text-sm text-slate-500">Consultoria em TI</p>
                                    </div>
                                </div>
                                <div className="text-yellow-400 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed">
                                    "Abriram minha empresa em 5 dias e me ajudaram a escolher o melhor enquadramento. A plataforma digital facilita muito minha vida. Nunca mais me preocupo com prazos."
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl font-bold text-blue-600">
                                        LS
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Lucas Silva</h4>
                                        <p className="text-sm text-slate-500">Clínica Odontológica</p>
                                    </div>
                                </div>
                                <div className="text-yellow-400 mb-4">★★★★★</div>
                                <p className="text-slate-600 italic leading-relaxed">
                                    "O suporte é excepcional. Sempre que preciso, tenho retorno rápido. Além disso, as reuniões estratégicas me ajudam a entender meus números e tomar decisões melhores."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-blue-900 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto Para Organizar Suas Finanças e Crescer Sem Preocupações?</h2>
                        <p className="text-blue-200 mb-3 max-w-2xl mx-auto text-lg">
                            Migre sua contabilidade hoje mesmo ou abra sua empresa conosco.
                        </p>
                        <p className="text-blue-300 mb-8 max-w-2xl mx-auto">
                            É rápido, seguro e sem taxas extras. No plano anual, a abertura é grátis.
                        </p>
                        <Link href="/sites-institucionais/simples/contabilidade/contato" className="inline-block px-10 py-5 bg-white text-blue-900 font-bold rounded hover:bg-blue-50 transition-colors shadow-2xl text-lg">
                            Falar com Especialista Agora
                        </Link>
                        <p className="mt-6 text-blue-200 text-sm">
                            📞 (11) 3333-3333 | 📱 WhatsApp: (11) 99999-9999
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
