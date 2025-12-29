import Link from 'next/link'

export default function PrecosPage() {
    const planos = [
        {
            nome: 'Plano Essencial',
            paraQuem: 'Ideal para quem busca prevenção e cuidados básicos',
            preco: 'R$ 99',
            periodo: '/mês',
            inclui: [
                '2 consultas de rotina por ano',
                '2 limpezas profissionais (profilaxia)',
                '1 aplicação de flúor',
                'Raio-X panorâmico anual',
                '20% de desconto em todos os tratamentos',
                'Atendimento de urgência prioritário',
                'Agendamento via WhatsApp'
            ],
            destaque: false
        },
        {
            nome: 'Plano Família',
            paraQuem: 'Perfeito para famílias com até 4 membros',
            preco: 'R$ 299',
            periodo: '/mês',
            inclui: [
                'Todos os benefícios do Plano Essencial',
                'Válido para até 4 pessoas',
                '30% de desconto em todos os tratamentos',
                '1 clareamento caseiro grátis no primeiro ano',
                'Odontopediatria incluída',
                'Check-up preventivo trimestral',
                'Desconto em ortodontia (aparelho)'
            ],
            destaque: true
        },
        {
            nome: 'Plano Premium',
            paraQuem: 'Para quem não abre mão do melhor cuidado',
            preco: 'R$ 199',
            periodo: '/mês',
            inclui: [
                'Consultas ilimitadas',
                '4 limpezas profissionais por ano',
                'Aplicação de flúor semestral',
                'Raio-X e exames sem limite',
                '40% de desconto em todos os tratamentos',
                'Clareamento profissional incluso anualmente',
                'Atendimento em horários especiais',
                'Emergências 24h'
            ],
            destaque: false
        },
        {
            nome: 'Pagamento Avulso',
            paraQuem: 'Flexibilidade total - pague apenas o que usar',
            preco: 'Sob',
            periodo: 'consulta',
            inclui: [
                'Avaliação inicial: Gratuita',
                'Limpeza profissional: a partir de R$ 150',
                'Clareamento: a partir de R$ 800',
                'Restauração: a partir de R$ 250',
                'Implante: a partir de R$ 2.500',
                'Lente de contato: a partir de R$ 1.500/dente',
                'Parcelamento em até 12x sem juros',
                'Aceitamos todos os cartões e PIX'
            ],
            destaque: false
        }
    ]

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Planos e Preços Transparentes
                        </h1>
                        <p className="text-xl text-gray-600">
                            Escolha o plano ideal para você e sua família. Sem letras miúdas, sem surpresas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Planos */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {planos.map((plano, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl p-8 ${plano.destaque
                                        ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-2xl transform scale-105'
                                        : 'bg-white border-2 border-gray-200'
                                    }`}
                            >
                                {plano.destaque && (
                                    <div className="text-center mb-4">
                                        <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                                            MAIS POPULAR
                                        </span>
                                    </div>
                                )}

                                <h3
                                    className={`text-2xl font-bold mb-2 ${plano.destaque ? 'text-white' : 'text-gray-900'}`}
                                >
                                    {plano.nome}
                                </h3>
                                <p className={`text-sm mb-6 ${plano.destaque ? 'text-blue-100' : 'text-gray-600'}`}>
                                    {plano.paraQuem}
                                </p>

                                <div className="mb-6">
                                    <div className="flex items-baseline">
                                        <span
                                            className={`text-4xl font-bold ${plano.destaque ? 'text-white' : 'text-gray-900'}`}
                                        >
                                            {plano.preco}
                                        </span>
                                        <span className={`ml-2 ${plano.destaque ? 'text-blue-100' : 'text-gray-600'}`}>
                                            {plano.periodo}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plano.inclui.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span
                                                className={`mr-2 flex-shrink-0 ${plano.destaque ? 'text-yellow-300' : 'text-green-600'
                                                    }`}
                                            >
                                                ✓
                                            </span>
                                            <span className={`text-sm ${plano.destaque ? 'text-blue-50' : 'text-gray-700'}`}>
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/sites-institucionais/simples/clinica-odontologica/contato"
                                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${plano.destaque
                                            ? 'bg-white text-blue-600 hover:bg-gray-100'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    Quero este plano
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formas de Pagamento */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Facilidades de Pagamento
                        </h2>
                        <p className="text-xl text-gray-600">
                            Múltiplas opções para caber no seu bolso
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💳</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Cartão de Crédito</h3>
                            <p className="text-gray-600">
                                Parcelamento em até 12x sem juros em tratamentos acima de R$ 1.000.
                                Aceitamos todos os cartões.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">📱</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">PIX com Desconto</h3>
                            <p className="text-gray-600">
                                10% de desconto adicional para pagamentos à vista via PIX em qualquer procedimento.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏦</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Financiamento</h3>
                            <p className="text-gray-600">
                                Parcerias com instituições financeiras para parcelamento em até 24x com taxas reduzidas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nota de Escopo */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            ℹ️ Informações Importantes
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                                <span>
                                    <strong>Avaliação Gratuita:</strong> A primeira consulta é sempre sem custo.
                                    Nela, fazemos o diagnóstico completo e apresentamos o plano de tratamento personalizado.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                                <span>
                                    <strong>Orçamento Detalhado:</strong> Todos os valores são apresentados por escrito,
                                    com detalhamento de cada procedimento. Sem custos ocultos.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                                <span>
                                    <strong>Planos:</strong> Os planos de manutenção têm carência de 30 dias para
                                    procedimentos complexos. Consulte condições.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                                <span>
                                    <strong>Convênios:</strong> Trabalhamos com os principais convênios odontológicos.
                                    Consulte a lista completa na recepção.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                                <span>
                                    <strong>Garantia:</strong> Todos os tratamentos possuem garantia. Próteses e lentes
                                    têm garantia estendida de até 10 anos contra quebra.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ Rápido */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        Perguntas Frequentes sobre Valores
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Posso trocar de plano depois?
                            </h3>
                            <p className="text-gray-600">
                                Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento,
                                com ajuste proporcional no valor.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                O plano tem fidelidade?
                            </h3>
                            <p className="text-gray-600">
                                Não exigimos fidelidade. Você pode cancelar quando quiser, mas recomendamos
                                manter por pelo menos 6 meses para aproveitar os benefícios completos.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Como funciona o pagamento avulso?
                            </h3>
                            <p className="text-gray-600">
                                Você paga apenas pelos procedimentos realizados, sem mensalidade. Ideal para
                                tratamentos pontuais. Todos os valores são informados antes do início.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Qual plano é melhor para mim?
                            </h3>
                            <p className="text-gray-600">
                                Depende da sua necessidade. Na avaliação gratuita, nossos dentistas te ajudam a
                                escolher o plano mais econômico baseado no seu histórico e objetivos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Escolha Seu Plano e Comece Hoje
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Agende uma avaliação gratuita e descubra qual plano oferece o melhor custo-benefício para você
                    </p>
                    <Link
                        href="/sites-institucionais/simples/clinica-odontologica/contato"
                        className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-200 shadow-2xl"
                    >
                        Agendar Avaliação Gratuita
                    </Link>
                </div>
            </section>
        </div>
    )
}
