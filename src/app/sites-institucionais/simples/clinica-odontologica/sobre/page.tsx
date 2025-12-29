import Link from 'next/link'

export default function SobrePage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Nossa História de Cuidado e Excelência
                        </h1>
                        <p className="text-xl text-gray-600">
                            Há mais de 15 anos transformando vidas através de sorrisos saudáveis e radiantes
                        </p>
                    </div>
                </div>
            </section>

            {/* História */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Tudo Começou</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    A Excellence Odonto nasceu em 2010 do sonho de três dentistas visionários:
                                    Dr. Paulo Mendes, Dra. Júlia Carvalho e Dr. Ricardo Lima. Unidos pela mesma
                                    filosofia de que o cuidado odontológico vai muito além da técnica.
                                </p>
                                <p>
                                    Começamos em uma pequena sala na Vila Mariana, com apenas uma cadeira e um
                                    grande propósito: devolver a confiança das pessoas através de sorrisos saudáveis.
                                    Cada paciente era tratado como família, e esse cuidado humanizado nos fez crescer.
                                </p>
                                <p>
                                    Hoje, ocupamos uma clínica de 400m² na Avenida Paulista, com 8 consultórios
                                    equipados com tecnologia de última geração. Nossa equipe cresceu para mais de
                                    20 profissionais especializados, mas nosso propósito permanece o mesmo.
                                </p>
                                <p className="font-semibold text-blue-600">
                                    Já cuidamos de mais de 15.000 sorrisos e continuamos com a mesma paixão do primeiro dia.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                            <span className="text-gray-400 text-6xl">📸</span>
                            <div className="ml-4 text-gray-500">
                                <div>Nossa Equipe</div>
                                <div className="text-sm">Excellence Odonto</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Missão, Visão e Valores */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
                            <p className="text-gray-600">
                                Proporcionar saúde bucal e bem-estar através de tratamentos odontológicos de
                                excelência, combinando tecnologia avançada com atendimento humanizado, respeitando
                                a individualidade de cada paciente.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-3xl">🔭</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
                            <p className="text-gray-600">
                                Ser referência nacional em odontologia de alta qualidade até 2030, reconhecida
                                pela excelência técnica, inovação constante e pelo impacto positivo na vida de
                                nossos pacientes.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-3xl">💎</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">✓</span>
                                    Excelência em tudo que fazemos
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">✓</span>
                                    Ética e transparência
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">✓</span>
                                    Empatia e humanização
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">✓</span>
                                    Inovação contínua
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">✓</span>
                                    Responsabilidade social
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diferenciais */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            O Que Nos Torna Únicos
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Não é só sobre dentes. É sobre transformar vidas com cuidado genuíno.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🏥</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Estrutura Completa</h3>
                                <p className="text-gray-600">
                                    Clínica com 8 consultórios modernos, centro cirúrgico, sala de esterilização
                                    e recepção acolhedora. Tudo pensado no seu conforto.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">👨‍⚕️</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Equipe Multidisciplinar</h3>
                                <p className="text-gray-600">
                                    Especialistas em todas as áreas: implantodontia, ortodontia, endodontia,
                                    periodontia, prótese e odontopediatria em um só lugar.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🔬</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Tecnologia Avançada</h3>
                                <p className="text-gray-600">
                                    Scanner intraoral 3D, tomografia computadorizada, raio-X digital e microscópio
                                    operatório para diagnósticos precisos.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">📱</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Atendimento Personalizado</h3>
                                <p className="text-gray-600">
                                    Agendamento online, lembretes automáticos, acompanhamento via WhatsApp e
                                    prontuário digital para seu histórico sempre à mão.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Time */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Conheça Nossos Especialistas
                        </h2>
                        <p className="text-xl text-gray-600">
                            Profissionais altamente qualificados que se importam de verdade
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                                👨‍⚕️
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Paulo Mendes</h3>
                            <p className="text-blue-600 font-semibold mb-3">Implantodontista</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Mestre em Implantodontia pela USP. Mais de 3.000 implantes realizados com
                                taxa de sucesso de 98,5%.
                            </p>
                            <p className="text-xs text-gray-500">CRO-SP 45678</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                                👩‍⚕️
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Dra. Júlia Carvalho</h3>
                            <p className="text-blue-600 font-semibold mb-3">Ortodontista</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Especialista em Ortodontia Invisível. Formação na Universidade da Flórida (EUA).
                                Certificada Invisalign Diamond.
                            </p>
                            <p className="text-xs text-gray-500">CRO-SP 56789</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                            <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                                👨‍⚕️
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Ricardo Lima</h3>
                            <p className="text-blue-600 font-semibold mb-3">Dentística Estética</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Doutor em Estética Dental pela UNICAMP. Especialista em lentes de contato e
                                harmonização orofacial.
                            </p>
                            <p className="text-xs text-gray-500">CRO-SP 67890</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Venha Conhecer Nossa Clínica
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Agende sua avaliação gratuita e conheça nossa estrutura pessoalmente
                    </p>
                    <Link
                        href="/sites-institucionais/simples/clinica-odontologica/contato"
                        className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all duration-200 shadow-lg"
                    >
                        Agendar Visita
                    </Link>
                </div>
            </section>
        </div>
    )
}
