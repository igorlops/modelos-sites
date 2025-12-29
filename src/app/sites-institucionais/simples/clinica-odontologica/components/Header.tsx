'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/sites-institucionais/simples/clinica-odontologica' },
        { name: 'Sobre', href: '/sites-institucionais/simples/clinica-odontologica/sobre' },
        { name: 'Serviços', href: '/sites-institucionais/simples/clinica-odontologica/servicos' },
        { name: 'Preços', href: '/sites-institucionais/simples/clinica-odontologica/precos' },
        { name: 'Contato', href: '/sites-institucionais/simples/clinica-odontologica/contato' },
    ]

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/sites-institucionais/simples/clinica-odontologica" className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">E</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">Excellence Odonto</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex">
                        <Link
                            href="/sites-institucionais/simples/clinica-odontologica/contato"
                            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                        >
                            Agendar Consulta
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/sites-institucionais/simples/clinica-odontologica/contato"
                            className="block mt-4 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-center hover:bg-blue-700 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Agendar Consulta
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}
