import Header from "../components/Header";
import Footer from "../components/Footer";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
    {
        pergunta: "Qual a duração das sessões de terapia?",
        resposta: "As sessões individuais têm duração de 50 minutos e ocorrem, geralmente, uma vez por semana. Sessões de casal têm 90 minutos. A frequência pode ser ajustada conforme a necessidade de cada caso."
    },
    {
        pergunta: "Quanto tempo dura o tratamento?",
        resposta: "A duração varia conforme a demanda e objetivos. Processos breves podem durar 3-6 meses, enquanto questões mais complexas podem demandar 1-2 anos. A TCC é uma abordagem focal e orientada a objetivos, não uma terapia interminável."
    },
    {
        pergunta: "Você atende convênios ou planos de saúde?",
        resposta: "Atendo apenas particular, mas forneço recibo detalhado (conforme resolução CFP) para que você possa solicitar reembolso junto ao seu plano de saúde. Muitos convênios reembolsam parcial ou totalmente."
    },
    {
        pergunta: "O que é Terapia Cognitivo-Comportamental (TCC)?",
        resposta: "A TCC é uma abordagem psicoterapêutica baseada em evidências científicas que investiga a relação entre pensamentos, emoções e comportamentos. É focada no presente, ativa e colaborativa, onde você aprende ferramentas práticas para lidar com desafios emocionais e comportamentais."
    },
    {
        pergunta: "Como sei se preciso de terapia?",
        resposta: "Se você sente que suas emoções estão fora de controle, tem dificuldade para lidar com situações do dia a dia, percebe padrões repetitivos de sofrimento, ou simplesmente quer se conhecer melhor, a terapia pode ajudar. Não é necessário estar em crise para buscar ajuda."
    },
    {
        pergunta: "A terapia online funciona mesmo?",
        resposta: "Sim! Estudos científicos comprovam que a terapia online tem a mesma eficácia que a presencial. É necessário apenas um ambiente privado, conexão estável de internet e disposição para o processo. Uso plataforma segura com criptografia end-to-end."
    },
    {
        pergunta: "Posso tomar medicação durante a terapia?",
        resposta: "Sim, terapia e medicação podem ser combinadas quando necessário. Psicólogos não prescrevem medicamentos, mas trabalho em parceria com psiquiatras quando há indicação farmacológica. A decisão é sempre discutida com você."
    },
    {
        pergunta: "Como funciona o sigilo profissional?",
        resposta: "Tudo que você compartilha em sessão é estritamente confidencial, protegido pelo Código de Ética do CFP. Só há quebra de sigilo em situações de risco iminente de vida (conforme previsto em lei) e sempre com seu conhecimento prévio."
    },
    {
        pergunta: "Preciso fazer terapia para sempre?",
        resposta: "Não. A TCC é uma terapia focal e orientada a objetivos específicos. Quando esses objetivos são alcançados e você desenvolve recursos internos suficientes, trabalhamos a alta terapêutica. Você pode retornar se sentir necessidade futura."
    },
    {
        pergunta: "Como sei se estou evoluindo na terapia?",
        resposta: "Fazemos avaliações periódicas dos objetivos estabelecidos. Sinais de evolução incluem: maior consciência emocional, redução de sintomas, mudanças comportamentais efetivas, melhora nas relações e maior capacidade de enfrentamento de desafios."
    },
    {
        pergunta: "Posso faltar às sessões?",
        resposta: "A regularidade é importante para o processo. Eventuais faltas acontecem, mas solicito aviso com 24h de antecedência quando possível. Faltas frequentes podem comprometer os resultados e precisam ser discutidas terapeuticamente."
    },
    {
        pergunta: "Qual a diferença entre psicólogo e psiquiatra?",
        resposta: "Psicólogos trabalham com psicoterapia (conversa terapêutica estruturada). Psiquiatras são médicos que podem prescrever medicamentos. Frequentemente os trabalhos são complementares, especialmente em casos mais graves."
    }
];

export default function FAQPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-[#FDFBF7]">
                <section className="py-20 bg-gradient-to-br from-teal-50 to-stone-50">
                    <div className="container mx-auto px-6 text-center">
                        <HelpCircle size={60} className="mx-auto text-teal-600 mb-6" strokeWidth={1.5} />
                        <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Dúvidas Frequentes</h1>
                        <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                            Respostas para as perguntas mais comuns sobre o processo terapêutico, formatos de atendimento e como a terapia funciona
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12 bg-white p-8 rounded-xl border border-teal-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-stone-900 mb-4">Ainda tem dúvidas?</h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                Separei aqui as perguntas que recebo com mais frequência no consultório. Se sua dúvida não estiver listada, sinta-se à vontade para entrar em contato diretamente.
                            </p>
                            <p className="text-sm text-stone-500">
                                Lembre-se: não existe pergunta boba quando se trata de cuidar da sua saúde mental. Estou aqui para esclarecer e acolher.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {faqs.map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:border-teal-200 transition-all">
                                    <div className="flex justify-between items-start gap-4 cursor-pointer">
                                        <div className="flex-1">
                                            <h3 className="font-bold text-stone-800 text-lg mb-4 flex items-start gap-3">
                                                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm">
                                                    {i + 1}
                                                </span>
                                                <span className="pt-0.5">{item.pergunta}</span>
                                            </h3>
                                            <p className="text-stone-600 leading-relaxed pl-11">
                                                {item.resposta}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto bg-gradient-to-br from-teal-700 to-teal-900 p-12 rounded-3xl shadow-2xl text-white text-center">
                            <h2 className="text-3xl font-serif mb-6">Sua Dúvida Não Foi Respondida?</h2>
                            <p className="text-teal-100 mb-8 leading-relaxed">
                                Cada pessoa e cada processo é único. Se você ainda tem perguntas específicas sobre como a terapia pode ajudar no seu caso, entre em contato. Ficarei feliz em conversar com você.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/sites-institucionais/simples/psicologo/contato"
                                    className="px-8 py-4 bg-white text-teal-900 rounded-md font-bold hover:bg-teal-50 transition-colors"
                                >
                                    Enviar Mensagem
                                </a>
                                <a
                                    href="https://wa.me/5511988888888"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-green-500 text-white rounded-md font-bold hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2"
                                >
                                    <span>💬</span> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-[#F5F2EA]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Recursos Úteis</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                                    <div className="text-4xl mb-3">📚</div>
                                    <h3 className="font-bold text-stone-900 mb-2">Artigos</h3>
                                    <p className="text-sm text-stone-600">Conteúdos sobre saúde mental em breve</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                                    <div className="text-4xl mb-3">🎧</div>
                                    <h3 className="font-bold text-stone-900 mb-2">Recursos</h3>
                                    <p className="text-sm text-stone-600">Exercícios de mindfulness e respiração</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                                    <div className="text-4xl mb-3">📞</div>
                                    <h3 className="font-bold text-stone-900 mb-2">Emergências</h3>
                                    <p className="text-sm text-stone-600">CVV: 188 (24h, gratuito)</p>
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
