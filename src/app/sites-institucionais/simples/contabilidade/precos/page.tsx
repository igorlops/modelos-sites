import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Check, X, Star, TrendingUp } from "lucide-react";

export default function PrecosPage() {
    const planos = [
        {
            nome: "Essencial",
            subtitulo: "Para quem está começando",
            preco: "197",
            periodo: "/mês",
            destaque: false,
            paraQuem: "Ideal para MEI e ME com faturamento até R$ 20 mil/mês e sem funcionários",
            inclui: [
                "Abertura de empresa GRÁTIS (plano anual)",
                "Contabilidade mensal completa",
                "Emissão de até 50 notas fiscais/mês",
                "Apuração e emissão de impostos",
                "Certificado digital e-CNPJ incluso",
                "Plataforma digital com documentos 24/7",
                "Suporte via WhatsApp em horário comercial",
                "Balancetes mensais"
            ],
            naoInclui: [
                "Departamento pessoal",
                "Reuniões estratégicas",
                "Planejamento tributário personalizado"
            ]
        },
        {
            nome: "Crescimento",
            subtitulo: "Para empresas em expansão",
            preco: "497",
            periodo: "/mês",
            destaque: true,
            paraQuem: "Ideal para ME e EPP com faturamento até R$ 100 mil/mês e até 5 funcionários",
            inclui: [
                "Tudo do plano Essencial +",
                "Departamento Pessoal completo (até 5 funcionários)",
                "Emissão de até 200 notas fiscais/mês",
                "Folha de pagamento, admissões e rescisões",
                "eSocial e obrigações trabalhistas",
                "Relatórios gerenciais mensais (DRE, Fluxo de Caixa)",
                "1 reunião estratégica trimestral",
                "Suporte prioritário via WhatsApp"
            ],
            naoInclui: [
                "BPO Financeiro completo",
                "Planejamento tributário anual"
            ]
        },
        {
            nome: "Premium",
            subtitulo: "Gestão estratégica completa",
            preco: "997",
            periodo: "/mês",
            destaque: false,
            paraQuem: "Ideal para empresas com faturamento acima de R$ 100 mil/mês e equipes maiores",
            inclui: [
                "Tudo do plano Crescimento +",
                "Departamento Pessoal ilimitado",
                "Notas fiscais ilimitadas",
                "BPO Financeiro completo (contas a pagar/receber)",
                "Planejamento tributário estratégico anual",
                "Reuniões mensais de análise estratégica",
                "Contador exclusivo dedicado à sua empresa",
                "Consultoria para expansão e investimentos",
                "Análise de indicadores e KPIs financeiros",
                "Suporte 24/7 via WhatsApp"
            ],
            naoInclui: []
        },
        {
            nome: "Corporativo",
            subtitulo: "Sob medida para seu negócio",
            preco: "Personalizado",
            periodo: "",
            destaque: false,
            paraQuem: "Para empresas com necessidades específicas, múltiplas filiais ou regimes complexos",
            inclui: [
                "Todos os serviços Premium +",
                "Estrutura personalizada conforme complexidade",
                "Equipe dedicada exclusiva",
                "Múltiplas empresas do mesmo grupo",
                "Suporte a holdings e estruturas societárias",
                "Consultoria jurídica tributária integrada",
                "Auditoria interna periódica",
                "SLA garantido em contrato"
            ],
            naoInclui: []
        }
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Planos Transparentes Para Cada Fase do Seu Negócio</h1>
                        <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
                            Escolha o plano ideal para sua empresa. Sem taxas escondidas, sem surpresas no boleto.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold">
                            <Star size={20} fill="white" />
                            Abertura de empresa GRÁTIS no plano anual
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {planos.map((plano, i) => (
                                <div
                                    key={i}
                                    className={`relative rounded-2xl overflow-hidden ${plano.destaque
                                            ? 'bg-blue-600 text-white shadow-2xl scale-105 border-4 border-blue-400'
                                            : 'bg-white border-2 border-slate-200'
                                        }`}
                                >
                                    {plano.destaque && (
                                        <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-blue-900 text-center py-2 font-bold text-sm">
                                            🏆 MAIS POPULAR
                                        </div>
                                    )}

                                    <div className={`p-8 ${plano.destaque ? 'pt-12' : ''}`}>
                                        <h3 className={`text-2xl font-bold mb-2 ${plano.destaque ? 'text-white' : 'text-slate-900'}`}>
                                            {plano.nome}
                                        </h3>
                                        <p className={`text-sm mb-6 ${plano.destaque ? 'text-blue-100' : 'text-slate-600'}`}>
                                            {plano.subtitulo}
                                        </p>

                                        <div className="mb-6">
                                            {plano.preco === "Personalizado" ? (
                                                <div className={`text-3xl font-bold ${plano.destaque ? 'text-white' : 'text-blue-600'}`}>
                                                    Sob consulta
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="flex items-baseline">
                                                        <span className={`text-sm ${plano.destaque ? 'text-blue-100' : 'text-slate-500'}`}>R$</span>
                                                        <span className={`text-5xl font-bold mx-1 ${plano.destaque ? 'text-white' : 'text-blue-600'}`}>
                                                            {plano.preco}
                                                        </span>
                                                        <span className={`text-sm ${plano.destaque ? 'text-blue-100' : 'text-slate-500'}`}>
                                                            {plano.periodo}
                                                        </span>
                                                    </div>
                                                    <p className={`text-xs mt-1 ${plano.destaque ? 'text-blue-100' : 'text-slate-500'}`}>
                                                        Plano mensal • 10% desc. no anual
                                                    </p>
                                                </>
                                            )}
                                        </div>

                                        <div className={`p-4 rounded-lg mb-6 ${plano.destaque ? 'bg-blue-700' : 'bg-slate-50'}`}>
                                            <p className={`text-sm font-semibold mb-2 ${plano.destaque ? 'text-blue-100' : 'text-slate-700'}`}>
                                                Para quem é:
                                            </p>
                                            <p className={`text-sm ${plano.destaque ? 'text-white' : 'text-slate-600'}`}>
                                                {plano.paraQuem}
                                            </p>
                                        </div>

                                        <div className="space-y-3 mb-8">
                                            <p className={`font-bold text-sm uppercase tracking-wider ${plano.destaque ? 'text-blue-100' : 'text-slate-700'}`}>
                                                O que está incluso:
                                            </p>
                                            {plano.inclui.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <Check
                                                        size={18}
                                                        className={`flex-shrink-0 mt-0.5 ${plano.destaque ? 'text-green-300' : 'text-green-600'}`}
                                                    />
                                                    <span className={`text-sm ${plano.destaque ? 'text-white' : 'text-slate-700'}`}>
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}

                                            {plano.naoInclui.length > 0 && (
                                                <>
                                                    <p className={`font-bold text-sm uppercase tracking-wider mt-6 ${plano.destaque ? 'text-blue-200' : 'text-slate-500'}`}>
                                                        Não inclui:
                                                    </p>
                                                    {plano.naoInclui.map((item, idx) => (
                                                        <div key={idx} className="flex items-start gap-2 opacity-60">
                                                            <X size={18} className="flex-shrink-0 mt-0.5 text-red-500" />
                                                            <span className={`text-sm ${plano.destaque ? 'text-blue-100' : 'text-slate-600'}`}>
                                                                {item}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </>
                                            )}
                                        </div>

                                        <Link
                                            href="/sites-institucionais/simples/contabilidade/contato"
                                            className={`block text-center w-full py-4 rounded-lg font-bold transition-colors ${plano.destaque
                                                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                                }`}
                                        >
                                            Contratar Agora
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <TrendingUp className="text-blue-600" />
                                Nota Importante Sobre Nossos Planos
                            </h3>
                            <div className="space-y-3 text-slate-700 leading-relaxed">
                                <p>
                                    <strong>Valores podem variar</strong> conforme a complexidade e volume de operação da sua empresa. Os preços apresentados são referenciais para empresas com operação padrão.
                                </p>
                                <p>
                                    <strong>Customização disponível:</strong> Caso sua empresa não se encaixe perfeitamente em nenhum plano, fazemos uma proposta personalizada conforme suas necessidades específicas.
                                </p>
                                <p>
                                    <strong>Impostos não inclusos:</strong> Os valores dos planos não incluem guias de impostos da empresa (DAS, DARF, GPS, etc), que são de responsabilidade do cliente conforme legislação.
                                </p>
                                <p>
                                    <strong>Migração facilitada:</strong> Se você já tem contabilidade, cuidamos de toda migração sem custo adicional no primeiro mês.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-blue-900 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ainda Tem Dúvidas Sobre Qual Plano Escolher?</h2>
                        <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">
                            Nossa equipe está pronta para te ajudar a encontrar a solução ideal para sua empresa
                        </p>
                        <Link
                            href="/sites-institucionais/simples/contabilidade/contato"
                            className="inline-block bg-white text-blue-900 px-10 py-4 rounded font-bold hover:bg-blue-50 transition-colors shadow-lg text-lg"
                        >
                            Falar com Consultor Agora
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
