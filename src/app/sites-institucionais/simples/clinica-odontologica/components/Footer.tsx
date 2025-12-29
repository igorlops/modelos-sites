import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">E</span>
                            </div>
                            <span className="text-xl font-bold text-white">Excellence Odonto</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Cuidando do seu sorriso com excelência e tecnologia de ponta desde 2010.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Navegação</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/sites-institucionais/simples/clinica-odontologica" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/clinica-odontologica/sobre" className="hover:text-white transition-colors">
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/clinica-odontologica/servicos" className="hover:text-white transition-colors">
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/clinica-odontologica/precos" className="hover:text-white transition-colors">
                                    Preços
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Serviços</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Clareamento Dental</li>
                            <li>Implantes</li>
                            <li>Ortodontia</li>
                            <li>Lentes de Contato</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contato</h3>
                        <ul className="space-y-2 text-sm">
                            <li>📞 (11) 3456-7890</li>
                            <li>📱 (11) 98765-4321</li>
                            <li>✉️ contato@excellenceodonto.com.br</li>
                            <li>📍 Av. Paulista, 1000 - São Paulo/SP</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; {currentYear} Excellence Odonto. Todos os direitos reservados.</p>
                    <p className="mt-2 text-gray-500">CRO-SP 12345 | CNPJ: 12.345.678/0001-90</p>
                </div>
            </div>
        </footer>
    )
}
