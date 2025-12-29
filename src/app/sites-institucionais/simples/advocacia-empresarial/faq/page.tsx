import Header from "../components/Header";
import Footer from "../components/Footer";
import { HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
    {
        pergunta: "Qual o investimento para contratar o escritório?",
        resposta: "Nossos honorários variam conforme complexidade do caso, tempo estimado e área de atuação. Trabalhamos com modelos de honorários fixos mensais (para assessoria contínua), ad exitum (êxito em causas judiciais) ou por projeto. Na primeira reunião apresentamos proposta transparente e detalhada."
    },
    {
        pergunta: "Atendem empresas de qual porte?",
        resposta: "Atendemos desde MEIs e pequenas empresas até médias e grandes corporações. Temos modelos de atendimento e precificação adequados para cada realidade. O importante é a complexidade jurídica, não apenas o tamanho da empresa."
    },
    {
        pergunta: "Como funciona a primeira consulta?",
        resposta: "A primeira reunião é gratuita e sem compromisso. Nela, você apresenta sua demanda, fazemos análise preliminar e, se houver fit, apresentamos proposta comercial detalhada. Duração média de 45-60 minutos."
    },
    {
        pergunta: "Qual a diferença entre honorários fixos e ad exitum?",
        resposta: "Honorários fixos são valores mensais ou por projeto, ideais para assessoria contínua ou serviços específicos. Honorários de êxito são percentuais sobre o resultado obtido em ações judiciais, normalmente combinados com valor fixo menor. Explicamos cada modelo na proposta."
    },
    {
        pergunta: "Quanto tempo leva um processo judicial?",
        resposta: "Varia muito conforme tipo de ação e instância. Processos trabalhistas: 1-3 anos. Ações cíveis: 2-5 anos. Recursos em tribunais superiores podem adicionar 2-4 anos. Buscamos sempre soluções negociadas quando vantajosas para acelerar resultados."
    },
    {
        pergunta: "O escritório atende em todo Brasil?",
        resposta: "Sim. Temos estrutura para atuar em todo território nacional. Para demandas fora de São Paulo, trabalhamos com correspondentes jurídicos locais de confiança ou nos deslocamos quando necessário (custos combinados previamente)."
    },
    {
        pergunta: "Posso contratar apenas para um serviço específico?",
        resposta: "Sim, trabalhamos por projeto. Você pode contratar apenas para elaboração de contrato, due diligence de uma operação, defesa em processo específico ou qualquer demanda pontual. Não é obrigatória assessoria mensal."
    },
    {
        pergunta: "Como é o acompanhamento dos processos?",
        resposta: "Enviamos relatórios mensais de andamento processual, além de comunicação imediata sobre movimentações relevantes. Você tem acesso direto ao advogado responsável via WhatsApp e email para dúvidas a qualquer momento."
    },
    {
        pergunta: "Fazem acordos ou preferem levar tudo ao julgamento?",
        resposta: "Nossa prioridade é sempre o melhor resultado para o cliente. Analisamos propostas de acordo tecnicamente e, se vantajosas, recomendamos fortemente. Muitas vezes um bom acordo é melhor que anos de litígio. A decisão final é sempre do cliente."
    },
    {
        pergunta: "Qual a taxa de êxito do escritório?",
        resposta: "Histórico de 85% de êxito em causas judiciais finalizadas nos últimos 5 anos. Importante: selecionamos criteriosamente os casos que aceitamos, não promovemos demandas sem fundamento apenas para gerar honorários."
    },
    {
        pergunta: "Posso migrar minha causa de outro advogado?",
        resposta: "Sim, é direito seu trocar de advogado a qualquer momento. Analisamos o processo, histórico e perspectivas antes de aceitar. Se identificarmos que o trabalho anterior está bem feito, seremos honestos em dizer que não vale mudar."
    },
    {
        pergunta: "Oferecem garantia de resultado?",
        resposta: "Por questões éticas da OAB, nenhum advogado pode garantir resultado em processo judicial. O que garantimos é: dedicação máxima, estratégia técnica sólida, transparência total e uso de todos recursos legais cabíveis. Nossa reputação é construída sobre isso."
    }
];

export default function FAQPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
                    <div className="container mx-auto px-4 text-center">
                        <HelpCircle size={60} className="mx-auto text-amber-700 mb-6" strokeWidth={1.5} />
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Perguntas Frequentes</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Respondemos as dúvidas mais comuns sobre nossos serviços, honoráriosmétodos de trabalho
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12 bg-amber-50 p-8 rounded-xl border border-amber-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Tire Suas Dúvidas</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Compilamos aqui as perguntas que recebemos com mais frequência de empresários e gestores. Se sua dúvida não estiver aqui, entre em contato diretamente conosco.
                            </p>
                            <p className="text-sm text-slate-500">
                                Estamos à disposição para esclarecer qualquer questão jurídica ou comercial sobre nossos serviços.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {faqs.map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-amber-200 transition-all">
                                    <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-start gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-sm">
                                            {i + 1}
                                        </span>
                                        <span className="pt-0.5">{item.pergunta}</span>
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed pl-11">
                                        {item.resposta}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-r from-amber-900 to-yellow-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto bg-amber-800 p-12 rounded-3xl shadow-2xl text-center">
                            <MessageCircle size={50} className="mx-auto mb-6" />
                            <h2 className="text-3xl font-bold mb-6">Sua Dúvida Não Foi Respondida?</h2>
                            <p className="text-amber-100 mb-8 leading-relaxed">
                                Cada caso é único e pode ter particularidades. Se você tem uma questão específica sobre seu caso ou como podemos ajudar, entre em contato diretamente.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/sites-institucionais/simples/advocacia-empresarial/contato"
                                    className="px-8 py-4 bg-white text-amber-900 rounded font-bold hover:bg-amber-50 transition-colors"
                                >
                                    Enviar Mensagem
                                </a>
                                <a
                                    href="https://wa.me/5511999990000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-green-500 text-white rounded font-bold hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2"
                                >
                                    <span>💬</span> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Informações Importantes</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-slate-200">
                                    <div className="text-4xl mb-3">📄</div>
                                    <h3 className="font-bold text-slate-900 mb-2 text-sm">Código de Ética</h3>
                                    <p className="text-xs text-slate-600">Regidos pelo Código de Ética da OAB</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-slate-200">
                                    <div className="text-4xl mb-3">🔒</div>
                                    <h3 className="font-bold text-slate-900 mb-2 text-sm">Sigilo Garantido</h3>
                                    <p className="text-xs text-slate-600">Confidencialidade absoluta</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-slate-200">
                                    <div className="text-4xl mb-3">⚖️</div>
                                    <h3 className="font-bold text-slate-900 mb-2 text-sm">OAB/SP</h3>
                                    <p className="text-xs text-slate-600">Regularmente inscrito</p>
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
