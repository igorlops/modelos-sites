import Header from "../components/Header";
import Footer from "../components/Footer";
import { User, Users, Globe, Video, CheckCircle } from "lucide-react";

const servicos = [
    {
        icon: User,
        titulo: "Terapia Individual",
        descricao: "Atendimento personalizado para questões pessoais, emocionais e comportamentais.",
        detalhes: [
            "Sessões semanais de 50 minutos em consultório acolhedor",
            "Foco em ansiedade, depressão, autoconhecimento e desenvolvimento pessoal",
            "Protocolo individualizado adaptado às suas necessidades específicas",
            "Técnicas de TCC, Mindfulness e Terapia do Esquema",
            "Acompanhamento contínuo com reavaliação mensal de objetivos"
        ],
        beneficios: [
            "Espaço exclusivo e confidencial",
            "Atenção 100% dedicada a você",
            "Ritmo respeitoso e adaptado",
            "Resultados mensuráveis e práticos"
        ]
    },
    {
        icon: Users,
        titulo: "Terapia de Casal",
        descricao: "Mediação de conflitos e fortalecimento da comunicação entre parceiros.",
        detalhes: [
            "Sessões de 90 minutos para acomodar dinâmicas relacionais",
            "Trabalho com padrões de comunicação disfuncionais",
            "Desenvolvimento de escuta ativa e empatia mútua",
            "Resolução de conflitos recorrentes e fortalecimento do vínculo",
            "Técnicas de comunicação não-violenta e expressão emocional saudável"
        ],
        beneficios: [
            "Melhora na qualidade da relação",
            "Comunicação mais assertiva",
            "Resolução construtiva de conflitos",
            "Restauração da intimidade emocional"
        ]
    },
    {
        icon: Globe,
        titulo: "Atendimento Online",
        descricao: "A mesma qualidade do presencial com a comodidade de ser atendido de qualquer lugar.",
        detalhes: [
            "Realizado através de plataforma segura com criptografia",
            "Mesma duração e estrutura do atendimento presencial",
            "Indicado para quem tem agenda apertada ou mora longe",
            "Requer apenas conexão estável de internet e privacidade",
            "Todos os protocolos éticos e sigilosos são mantidos"
        ],
        beneficios: [
            "Flexibilidade de horários",
            "Economia de tempo com deslocamento",
            "Conforto do seu espaço",
            "Mesma eficácia terapêutica"
        ]
    }
];

export default function ServicosPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="bg-gradient-to-br from-teal-50 to-stone-50 py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Modalidades de Atendimento</h1>
                        <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                            Formatos flexíveis e personalizados para se adequar à sua rotina e necessidades específicas
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-white container mx-auto px-6 text-center">
                    <p className="text-lg text-stone-700 max-w-4xl mx-auto leading-relaxed">
                        Ofereço diferentes modalidades de atendimento psicológico, sempre fundamentadas na Terapia Cognitivo-Comportamental e adaptadas ao seu momento de vida, objetivos e preferências. O mais importante é que você se sinta confortável e acolhido no formato escolhido.
                    </p>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="space-y-12 max-w-6xl mx-auto">
                            {servicos.map((servico, index) => (
                                <div
                                    key={index}
                                    className="bg-[#FDFBF7] rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 border border-stone-100"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                                            <servico.icon size={32} className="text-teal-700" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-stone-900 mb-4">{servico.titulo}</h2>
                                            <p className="text-lg text-stone-600 mb-6 leading-relaxed">{servico.descricao}</p>

                                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                                <div>
                                                    <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                                                        <CheckCircle className="text-teal-500" size={20} />
                                                        Como funciona:
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {servico.detalhes.map((detalhe, idx) => (
                                                            <li key={idx} className="flex items-start text-stone-700">
                                                                <span className="text-teal-600 mr-2 flex-shrink-0">✓</span>
                                                                <span className="leading-relaxed">{detalhe}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                                                        <CheckCircle className="text-green-500" size={20} />
                                                        Benefícios:
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {servico.beneficios.map((beneficio, idx) => (
                                                            <li key={idx} className="flex items-start text-stone-700">
                                                                <span className="text-green-600 mr-2 flex-shrink-0">★</span>
                                                                <span className="leading-relaxed">{beneficio}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <a
                                                href="/sites-institucionais/simples/psicologo/contato"
                                                className="inline-block bg-teal-700 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition-colors font-semibold shadow-md"
                                            >
                                                Agendar esta Modalidade
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-stone-50 to-teal-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Como Funciona o Processo Terapêutico</h2>
                            <p className="text-xl text-stone-600">Entenda as etapas da sua jornada de autoconhecimento</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { num: "1", title: "Primeira Sessão", desc: "Conversa inicial para conhecimento mútuo, compreensão das suas demandas e alinhamento de expectativas sobre o processo terapêutico." },
                                { num: "2", title: "Avaliação", desc: "Nas primeiras 3-4 sessões, exploramos seu histórico, padrões atuais e definimos objetivos terapêuticos claros e mensuráveis." },
                                { num: "3", title: "Intervenção", desc: "Trabalho ativo com técnicas da TCC, desenvolvimento de habilidades e ressignificação de padrões disfuncionais através de exercícios práticos." },
                                { num: "4", title: "Consolidação", desc: "Fortalecimento dos ganhos terapêuticos, prevenção de recaídas e preparação para alta quando objetivos forem alcançados." }
                            ].map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                        {step.num}
                                    </div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>
                                    <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Pronto Para Dar o Primeiro Passo?</h2>
                    <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
                        Entre em contato para agendar sua primeira sessão e iniciar sua jornada de transformação pessoal
                    </p>
                    <a
                        href="/sites-institucionais/simples/psicologo/contato"
                        className="inline-block bg-teal-700 text-white px-10 py-4 rounded-md text-lg font-bold hover:bg-teal-800 transition-all shadow-lg"
                    >
                        Agendar Primeira Sessão
                    </a>
                </section>
            </main>
            <Footer />
        </div>
    );
}
