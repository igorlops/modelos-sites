import Link from 'next/link'

export default function ServicosPage() {
    const servicos = [
        {
            titulo: 'Clareamento Dental Profissional',
            descricao: 'Clareie seus dentes de forma segura e eficaz com nossa tecnologia LED de última geração.',
            detalhes: [
                'Clareamento a laser: resultados em sessão única, clareando até 8 tons',
                'Clareamento caseiro supervisionado: tratamento gradual com moldeiras personalizadas',
                'Sem sensibilidade: protocolo exclusivo de dessensibilização',
                'Duração: 60 a 90 minutos por sessão',
                'Resultados visíveis imediatos com manutenção de 1 a 3 anos'
            ],
            beneficios: [
                'Sorriso até 8 tons mais branco',
                'Autoestima renovada',
                'Procedimento seguro e indolor',
                'Acompanhamento pós-tratamento incluso'
            ],
            icon: '✨'
        },
        {
            titulo: 'Implantes Dentários',
            descricao: 'Recupere dentes perdidos com implantes de titânio de alta qualidade e pró tese fixa.',
            detalhes: [
                'Implantes unitários ou múltiplos com taxa de sucesso de 98,5%',
                'Cirurgia guiada por computador para precisão milimétrica',
                'Enxerto ósseo quando necessário',
                'Prótese provisória imediata (carga imediata quando indicado)',
                'Acompanhamento de 12 meses incluído'
            ],
            beneficios: [
                'Recuperação completa da função mastigatória',
                'Resultado natural e permanente',
                'Previne perda óssea',
                'Conforto superior às dentaduras'
            ],
            icon: '🦷'
        },
        {
            titulo: 'Ortodontia Invisível e Tradicional',
            descricao: 'Alinhe seus dentes com aparelhos invisíveis ou tradicionais de última geração.',
            detalhes: [
                'Invisalign: alinhadores transparentes removíveis',
                'Aparelho fixo estético (porcelana ou safira)',
                'Aparelho autoligado: menos visitas e mais conforto',
                'Planejamento digital 3D: veja o resultado antes de começar',
                'Tempo médio de tratamento: 12 a 24 meses'
            ],
            beneficios: [
                'Correção de mordida e alinhamento',
                'Opções discretas e estéticas',
                'Melhora na saúde bucal geral',
                'Acompanhamento mensal personalizado'
            ],
            icon: '😊'
        },
        {
            titulo: 'Lentes de Contato Dental',
            descricao: 'Transforme seu sorriso instantaneamente com lâminas ultrafinas de porcelana.',
            detalhes: [
                'Lâminas de porcelana com apenas 0,2mm de espessura',
                'Mínimo ou nenhum desgaste dental',
                'Planejamento digital do sorriso (DSD)',
                'Moldagem digital para precisão perfeita',
                'Garantia de 10 anos contra quebra'
            ],
            beneficios: [
                'Transformação imediata do sorriso',
                'Correção de cor, forma e alinhamento',
                'Resistência e durabilidade superiores',
                'Resultado naturalíssimo'
            ],
            icon: '💎'
        },
        {
            titulo: 'Tratamento de Canal (Endodontia)',
            descricao: 'Salve seu dente e elimine a dor com tratamento endodôntico moderno.',
            detalhes: [
                'Microscopia operatória para precisão máxima',
                'Sedação consciente disponível para casos de ansiedade',
                'Instrumentação mecanizada: mais rápido e eficiente',
                'Obturação termoplástica 3D',
                'Retratamento de canais quando necessário'
            ],
            beneficios: [
                'Eliminação completa da dor',
                'Preservação do dente natural',
                'Procedimento praticamente indolor',
                'Taxa de sucesso acima de 95%'
            ],
            icon: '🩺'
        },
        {
            titulo: 'Próteses Dentárias',
            descricao: 'Reabilitação oral completa com próteses fixas ou removíveis de alta qualidade.',
            detalhes: [
                'Coroas em porcelana pura ou zircônia',
                'Pontes fixas sobre dentes ou implantes',
                'Prótese protocolo sobre implantes',
                'Facetas em porcelana',
                'Próteses removíveis (quando indicado)'
            ],
            beneficios: [
                'Recuperação da estética e função',
                'Material de primeira linha',
                'Confecção em laboratório próprio',
                'Ajustes ilimitados no primeiro ano'
            ],
            icon: '🏗️'
        },
        {
            titulo: 'Odontopediatria',
            descricao: 'Cuidado especializado para crianças em ambiente lúdico e acolhedor.',
            detalhes: [
                'Primeira consulta de adaptação sem procedimentos',
                'Consultório decorado e amigável',
                'Aplicação de flúor e selantes preventivos',
                'Tratamento de cáries com técnicas modernas',
                'Orientação nutricional e de higiene'
            ],
            beneficios: [
                'Criança sem medo do dentista',
                'Prevenção desde cedo',
                'Educação em saúde bucal',
                'Ambiente divertido e seguro'
            ],
            icon: '👶'
        },
        {
            titulo: 'Harmonização Orofacial',
            descricao: 'Procedimentos estéticos faciais realizados por dentistas especializados.',
            detalhes: [
                'Toxina botulínica (botox) para rugas e bruxismo',
                'Preenchimento facial com ácido hialurônico',
                'Bichectomia (redução das bochechas)',
                'Fios de PDO (lifting facial)',
                'Protocolo completo de rejuvenescimento'
            ],
            beneficios: [
                'Rosto mais harmônico e jovem',
                'Complementa tratamentos dentários',
                'Procedimentos minimamente invasivos',
                'Resultados naturais'
            ],
            icon: '💆'
        },
        {
            titulo: 'Periodontia',
            descricao: 'Tratamento e prevenção de doenças da gengiva e estruturas de suporte dos dentes.',
            detalhes: [
                'Tratamento de gengivite e periodontite',
                'Raspagem e alisamento radicular',
                'Cirurgia plástica gengival',
                'Enxerto gengival',
                'Protocolo de manutenção periodontal'
            ],
            beneficios: [
                'Gengivas saudáveis',
                'Prevenção de perdas dentárias',
                'Eliminação de mau hálito',
                'Estética gengival melhorada'
            ],
            icon: '🌿'
        }
    ]

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Serviços Odontológicos Completos
                        </h1>
                        <p className="text-xl text-gray-600">
                            Da prevenção à estética avançada: tudo que você precisa para um sorriso saudável e bonito
                        </p>
                    </div>
                </div>
            </section>

            {/* Introdução */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-lg text-gray-700">
                        Na Excellence Odonto, oferecemos um portfólio completo de tratamentos odontológicos,
                        desde limpezas preventivas até reabilitações complexas. Cada tratamento é planejado
                        individualmente, respeitando suas necessidades e objetivos.
                    </p>
                </div>
            </section>

            {/* Lista de Serviços */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {servicos.map((servico, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-6">
                                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">
                                        {servico.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{servico.titulo}</h2>
                                        <p className="text-lg text-gray-600 mb-6">{servico.descricao}</p>

                                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">O que inclui:</h3>
                                                <ul className="space-y-2">
                                                    {servico.detalhes.map((detalhe, idx) => (
                                                        <li key={idx} className="flex items-start text-gray-700">
                                                            <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
                                                            <span>{detalhe}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">Benefícios:</h3>
                                                <ul className="space-y-2">
                                                    {servico.beneficios.map((beneficio, idx) => (
                                                        <li key={idx} className="flex items-start text-gray-700">
                                                            <span className="text-green-600 mr-2 flex-shrink-0">★</span>
                                                            <span>{beneficio}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <Link
                                            href="/sites-institucionais/simples/clinica-odontologica/contato"
                                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                                        >
                                            Quero este tratamento
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Como Funciona */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Como Funciona o Processo
                        </h2>
                        <p className="text-xl text-gray-600">
                            Simples, transparente e focado em você
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Avaliação Gratuita</h3>
                            <p className="text-gray-600">
                                Consulta inicial sem custo para entender suas necessidades e expectativas
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico Completo</h3>
                            <p className="text-gray-600">
                                Exames clínicos e radiográficos para planejamento preciso do tratamento
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Plano Personalizado</h3>
                            <p className="text-gray-600">
                                Apresentação detalhada do tratamento, cronograma e valores sem surpresas
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                4
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Acompanhamento</h3>
                            <p className="text-gray-600">
                                Tratamento executado com cuidado e follow-up pós-procedimento garantido
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Pronto Para Transformar Seu Sorriso?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Agende sua avaliação gratuita e descubra qual tratamento é ideal para você
                    </p>
                    <Link
                        href="/sites-institucionais/simples/clinica-odontologica/contato"
                        className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all duration-200 shadow-lg"
                    >
                        Agendar Avaliação Gratuita
                    </Link>
                </div>
            </section>
        </div>
    )
}
