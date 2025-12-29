import Link from 'next/link'

export default function ClinicaOdontologicaHome() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Seu Sorriso Merece o Melhor
                            <span className="block text-blue-600 mt-2">Cuidado Odontológico</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Transforme seu sorriso com tecnologia de ponta, profissionais especializados e
                            um atendimento que valoriza você em cada etapa do tratamento.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/sites-institucionais/simples/clinica-odontologica/contato"
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Agendar Avaliação Gratuita
                            </Link>
                            <Link
                                href="/sites-institucionais/simples/clinica-odontologica/servicos"
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-200 border-2 border-blue-600"
                            >
                                Conheça Nossos Serviços
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proposta de Valor */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">O Problema</h3>
                            <p className="text-gray-600">
                                Sorrir sem confiança, dores dentárias frequentes e a insegurança de não encontrar
                                um profissional que realmente se importe com você.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Solução</h3>
                            <p className="text-gray-600">
                                Tratamentos personalizados com tecnologia de última geração, eliminando dores e
                                devolvendo a beleza natural do seu sorriso.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Nosso Diferencial</h3>
                            <p className="text-gray-600">
                                Mais de 15 anos de experiência, equipamentos de ponta e acompanhamento
                                pós-tratamento para garantir resultados duradouros.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Serviços em Destaque */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Serviços que Transformam Sorrisos
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Tudo que você precisa para ter um sorriso saudável e radiante
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Clareamento Dental',
                                description: 'Clarear os dentes até 8 tons em sessão única com tecnologia LED de última geração, sem sensibilidade.',
                                icon: '✨',
                            },
                            {
                                title: 'Implantes Dentários',
                                description: 'Recupere dentes perdidos com implantes de titânio, procedimento rápido e resultados naturais.',
                                icon: '🦷',
                            },
                            {
                                title: 'Ortodontia Invisível',
                                description: 'Alinhe seus dentes de forma discreta e confortável com aparelhos transparentes de alta tecnologia.',
                                icon: '😊',
                            },
                            {
                                title: 'Lentes de Contato Dental',
                                description: 'Transformação instantânea do sorriso com lâminas ultrafinas de porcelana, sem desgaste dos dentes.',
                                icon: '💎',
                            },
                            {
                                title: 'Tratamento de Canal',
                                description: 'Elimine a dor e salve seu dente com tratamento endodôntico moderno e praticamente indolor.',
                                icon: '🩺',
                            },
                            {
                                title: 'Odontopediatria',
                                description: 'Cuidado especializado para crianças em ambiente lúdico e acolhedor, criando boas memórias.',
                                icon: '👶',
                            },
                        ].map((service) => (
                            <div
                                key={service.title}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <Link
                                    href="/sites-institucionais/simples/clinica-odontologica/servicos"
                                    className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                                >
                                    Saiba mais →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Por que Escolher */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Por Que Escolher a Excellence Odonto?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🏆</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">15+ Anos de Excelência</h3>
                                <p className="text-gray-600">
                                    Mais de uma década cuidando de milhares de sorrisos com resultados comprovados
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">👨‍⚕️</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Especialistas Certificados</h3>
                                <p className="text-gray-600">
                                    Equipe composta por mestres e doutores em diversas especialidades odontológicas
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🔬</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Tecnologia de Ponta</h3>
                                <p className="text-gray-600">
                                    Equipamentos de última geração: scanner 3D, raio-X digital e microscopia
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">❤️</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Atendimento Humanizado</h3>
                                <p className="text-gray-600">
                                    Cuidamos de você como família, com atenção individual e protocolo anti-ansiedade
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">📋</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Processo Transparente</h3>
                                <p className="text-gray-600">
                                    Diagnóstico completo, plano de tratamento detalhado e orçamento sem surpresas
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">⭐</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Garantia de Satisfação</h3>
                                <p className="text-gray-600">
                                    Acompanhamento pós-tratamento e garantia estendida em todos os procedimentos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Depoimentos */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Histórias de Transformação
                        </h2>
                        <p className="text-xl text-gray-600">
                            Veja o que nossos pacientes dizem sobre nós
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl font-bold text-blue-600">
                                    MC
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-gray-900">Maria Clara Silva</h4>
                                    <p className="text-sm text-gray-500">Clareamento + Lentes</p>
                                </div>
                            </div>
                            <div className="text-yellow-400 mb-4">★★★★★</div>
                            <p className="text-gray-600 italic">
                                "Sempre tive vergonha de sorrir. Depois das lentes de contato dental, minha
                                autoestima mudou completamente. O Dr. Paulo é incrível e a equipe super atenciosa!"
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl font-bold text-blue-600">
                                    RS
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-gray-900">Roberto Santos</h4>
                                    <p className="text-sm text-gray-500">Implante Dentário</p>
                                </div>
                            </div>
                            <div className="text-yellow-400 mb-4">★★★★★</div>
                            <p className="text-gray-600 italic">
                                "Perdi um dente e achei que nunca mais sorriria normal. Com o implante ficou
                                perfeito, natural. Recomendo demais a Excellence!"
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl font-bold text-blue-600">
                                    AF
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-gray-900">Ana Fernandes</h4>
                                    <p className="text-sm text-gray-500">Ortodontia Invisível</p>
                                </div>
                            </div>
                            <div className="text-yellow-400 mb-4">★★★★★</div>
                            <p className="text-gray-600 italic">
                                "Como executiva, não podia usar aparelho fixo. O invisível foi perfeito -
                                ninguém percebeu e em 8 meses meus dentes estavam alinhados!"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Comece Sua Transformação Hoje
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Agende sua avaliação gratuita e descubra como podemos transformar seu sorriso.
                        Sem compromisso, sem custo.
                    </p>
                    <Link
                        href="/sites-institucionais/simples/clinica-odontologica/contato"
                        className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-200 shadow-2xl"
                    >
                        Quero Minha Avaliação Gratuita
                    </Link>
                    <p className="mt-6 text-blue-100 text-sm">
                        📞 Ligue agora: (11) 3456-7890 | 📱 WhatsApp: (11) 98765-4321
                    </p>
                </div>
            </section>
        </div>
    )
}
