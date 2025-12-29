"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Menu, X } from "lucide-react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/sites-institucionais/simples/imobiliaria", label: "Home" },
        { href: "/sites-institucionais/simples/imobiliaria/sobre", label: "Sobre" },
        { href: "/sites-institucionais/simples/imobiliaria/servicos", label: "Serviços" },
        { href: "/sites-institucionais/simples/imobiliaria/portfolio", label: "Imóveis" },
        { href: "/sites-institucionais/simples/imobiliaria/contato", label: "Contato" }
    ];

    return (
        <header className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/sites-institucionais/simples/imobiliaria" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 bg-cyan-500 rounded flex items-center justify-center">
                            <Home size={24} className="text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-tight">Prime Negócios Imobiliários</span>
                            <span className="text-xs text-cyan-300">Realizando Sonhos Desde 1998</span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-cyan-100 hover:text-white transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/sites-institucionais/simples/imobiliaria/contato"
                            className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 rounded font-bold transition-colors shadow-md"
                        >
                            Agendar Visita
                        </Link>
                    </nav>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 hover:bg-blue-800 rounded transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-blue-800">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-cyan-100 hover:text-white transition-colors font-medium py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/sites-institucionais/simples/imobiliaria/contato"
                                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded font-bold transition-colors text-center mt-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Agendar Visita
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
