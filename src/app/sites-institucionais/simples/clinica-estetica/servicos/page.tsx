import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ServicosPage() {
    const servicos = [
        {
            titulo: 'Harmonização Facial Completa',
            descricao: 'Conjunto de procedimentos estéticos combinados para melhorar a harmonia do rosto, tratando o envelhecimento e realçando traços naturais.',
            detalhes: [
                'Análise facial 3D computadorizada para planejamento preciso',
                'Toxina botulínica para suavização de rugas dinâmicas',
                'Preenchimento com ácido hialurônico de última geração',
                'Bioestimuladores de colágeno para firmeza progressiva',
                'Acompanhamento trimestral de manutenção incluído'
            ],
            beneficios: [
                'Rejuvenescimento natural e equilibrado',
                'Definição de contornos faciais',
                'Correção de assimetrias sutis',
                'Resultados que respeitam sua identidade'
            ],
            icon: '✨'
        },
        {
            titulo: 'Toxina Botulínica (Botox)',
            descricao: 'Tratamento preventivo e corretivo para rugas e linhas de expressão com técnica de microinjeções precisas.',
            detalhes: [
                'Aplicação estratégica em testa, glabela e periorbital',
                'Toxina importada certificada pela Anvisa',
                'Técnica de microdoses para resultado natural',
                'Efeito aparece em 3-5 dias com duração de 4-6 meses',
                'Pode ser associado a outros procedimentos'
            ],
            beneficios: [
                'Pele visivelmente mais lisa',
                'Prevenção de rugas profundas',
                'Olhar mais descansado e rejuvenescido',
                'Procedimento rápido e seguro'
            ],
            icon: '💆'
        },
        {
            titulo: 'Bioestimuladores de Colágeno',
            descricao: 'Substâncias injetáveis que estimulam a produção natura de colágeno, melhorando flacidez e qualidade da pele.',
            detalhes: [
                'Sculptra (ácido poli-L-láctico) para lifting natural',
                'Radiesse (hidroxiapatita de cálcio) para volume e firmeza',
                'Protocolo de 2-3 sessões com intervalo de 30 dias',
                'Resultados progressivos até 6 meses após tratamento',
                'Duração de até 2 anos com manutenção adequada'
            ],
            beneficios: [
                'Firmeza progressiva da pele',
                'Melhora da textura e elasticidade',
                'Efeito lifting sem cirurgia',
                'Aspecto jovial e descansado'
            ],
            icon: '🧬'
        },
        {
            titulo: 'Preenchimento Labial e Facial',
            descricao: 'Ácido hialurônico de alta qualidade para volume, hidratação e definição natural de lábios e face.',
            detalhes: [
                'Múltiplas densidades para áreas específicas',
                'Técnica de cânula para menor trauma e hematomas',
                'Preenchimento de sulcos, bigode chinês e código de barras',
                'Aumento labial respeitando proporção áurea',
                'Reversível com hialuronidase se necessário'
            ],
            beneficios: [
                'Volume e definição natural',
                'Hidratação profunda da área tratada',
                'Correção de assimetrias',
                'Resultado imediato com duração de 8-18 meses'
            ],
            icon: '💋'
        },
        {
            titulo: 'Protocolos Corporais Avançados',
            descricao: 'Combinação de tecnologias não-invasivas para redução de medidas, celulite e flacidez corporal.',
            detalhes: [
                'Criolipólise para redução de gordura localizada',
                'Radiofrequência para firmeza e celulite',
                'Ultrassom microfocado para lifting corporal',
                'Drenagem linfática especializada',
                'Programa completo com 8-12 sessões'
            ],
            beneficios: [
                'Redução de até 3-5cm de circunferência',
                'Melhora visível da celulite',
                'Pele mais firme e tonificada',
                'Resultados sem cirurgia ou recuperação'
            ],
            icon: '🌟'
        },
        {
            titulo: 'Peelings Médicos e Renovação Cutânea',
            descricao: 'Tratamentos químicos e a laser para renovação celular profunda, manchas e textura irregular.',
            detalhes: [
                'Peeling químico (ácidos glicólico, salicílico, TCA)',
                'Laser fracionado CO2 para rejuvenescimento',
                'Microagulhamento com drug delivery',
                'Protocolo personalizado conforme tipo de pele',
                'Homecare pós-procedimento incluso'
            ],
            beneficios: [
                'Clareamento de manchas e melasma',
                'Redução de cicatrizes de acne',
                'Pele mais lisa e luminosa',
                'Estímulo renovação celular'
            ],
            icon: '✨'
        },
        {
            titulo: 'Limpeza de Pele Profunda',
            descricao: 'Tratamento facial completo para higienização, extração de cravos e hidratação profunda.',
            detalhes: [
                'Higienização com produtos dermocosméticos',
                'Esfoliação química ou física conforme necessidade',
                'Extração manual de comedões (cravos)',
                'Máscara calmante e nutritiva',
                'Finalização com sérum e protetor solar'
            ],
            beneficios: [
                'Pele profundamente limpa',
                'Desobstrução dos poros',
                'Prevenção de acne',
                'Sensação imediata de frescor'
            ],
            icon: '🧴'
        },
        {
            titulo: 'Skinbooster e Hidratação Injetável',
            descricao: 'Tratamento de hidratação profunda com ácido hialurônico injetável para qualidade e luminosidade da pele.',
            detalhes: [
                'Microinjeções de ácido hialurônico fluido',
                'Aplicação em rosto, colo, pescoço e mãos',
                'Protocolo de 3 sessões mensais',
                'Estímulo de colágeno e elastina',
                'Pele visib elmente hidratada e iluminada'
            ],
            beneficios: [
                'Hidratação de dentro para fora',
                'Melhora da qualidade da pele',
                'Luminosidade e viço natural',
                'Prevenção do envelhecimento'
            ],
            icon: '💧'
        },
        {
            titulo: 'Fios de Sustentação (PDO e PLLA)',
            descricao: 'Lifting facial não-cirúrgico com fios absorvíveis que promovem sustentação imediata e estímulo de colágeno.',
            detalhes: [
                'Fios de PDO (polidioxanona) e PLLA (ácido poli-L-láctico)',
                'Fios lisos para bioestimulação ou com espículas para tração',
                'Aplicação com anestesia local',
                'Resultados imediatos com melhora progressiva',
                'Duração de 12-18 meses'
            ],
            beneficios: [
                'Lifting instantâneo',
                'Estímulo de colágeno prolongado',
                'Redefinição do contorno facial',
                'Alternativa não cirúrgica'
            ],
            icon: '🎯'
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-white">
                <section className="bg-gradient-to-br from-rose-50 to-slate-50 py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
                            Serviços Estéticos Completos
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Da prevenção ao rejuvenescimento avançado: tudo que você precisa para realçar sua beleza natural com segurança
                        </p>
                    </div>
                </section>

                <section className="py-12 bg-white container mx-auto px-4 text-center">
                    <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
                        Na Lumina Estética, oferecemos um portfólio completo de tratamentos faciais e corporais, desde cuidados preventivos até protocolos avançados de rejuvenescimento. Cada tratamento é planejado individualmente após avaliação criteriosa, respeitando suas necessidades, biotipo e objetivos estéticos.
                    </p>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="space-y-12">
                            {servicos.map((servico, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-50 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 border border-slate-100"
                                >
                                    <div className="flex items-start space-x-6">
                                        <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center text-3xl">
                                            {servico.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{servico.titulo}</h2>
                                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{servico.descricao}</p>

                                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                        <CheckCircle className="text-rose-500" size={20} />
                                                        O que inclui:
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {servico.detalhes.map((detalhe, idx) => (
                                                            <li key={idx} className="flex items-start text-slate-700">
                                                                <span className="text-rose-600 mr-2 flex-shrink-0">✓</span>
                                                                <span>{detalhe}</span>
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
                                                                <span>{beneficio}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <Link
                                                href="/sites-institucionais/simples/clinica-estetica/contato"
                                                className="inline-flex items-center gap-2 bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors font-semibold shadow-md"
                                            >
                                                Quero este tratamento <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-rose-50 to-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
                                Como Funciona o Processo
                            </h2>
                            <p className="text-xl text-slate-600">
                                Simples, transparente e focado exclusivamente em você
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Avaliação Gratuita</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Consulta inicial sem custo onde entendemos suas necessidades, expectativas e fazemos análise facial completa
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Diagnóstico Personalizado</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Análise completa de biotipo, histórico e avaliação fotográfica para planejamento preciso e individualizado
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                    3
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Plano de Tratamento</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Apresentação detalhada do protocolo sugerido, cronograma de sessões e valores transparentes sem surpresas
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                    4
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Acompanhamento</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Tratamento executado com precisão e follow-up pós-procedimento garantido com orientações de homecare
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                        Pronta Para Realçar Sua Beleza?
                    </h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Agende sua avaliação gratuita e descubra qual tratamento é ideal para você e seus objetivos
                    </p>
                    <Link
                        href="/sites-institucionais/simples/clinica-estetica/contato"
                        className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all duration-200 shadow-lg"
                    >
                        Agendar Avaliação Gratuita
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
}
