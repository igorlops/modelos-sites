"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/sites-institucionais/simples/agencia-marketing", label: "Home" },
        { href: "/sites-institucionais/simples/agencia-marketing/sobre", label: "Sobre" },
        { href: "/sites-institucionais/simples/agencia-marketing/servicos", label: "Serviços" },
        { href: "/sites-institucionais/simples/agencia-marketing/portfolio", label: "Portfólio" },
        { href: "/sites-institucionais/simples/agencia-marketing/contato", label: "Contato" }
    ];

    return (
        <header className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/sites-institucionais/simples/agencia-marketing" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Sparkles size={24} className="text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-tight">Impulse Digital</span>
                            <span className="text-xs text-pink-300">Marketing que Converte</span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-purple-100 hover:text-white transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/sites-institucionais/simples/agencia-marketing/contato"
                            className="px-6 py-2.5 bg-pink-500 hover:bg-pink-600 rounded-full font-bold transition-colors shadow-md"
                        >
                            Solicitar Proposta
                        </Link>
                    </nav>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 hover:bg-purple-700 rounded transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-purple-700">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-purple-100 hover:text-white transition-colors font-medium py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/sites-institucionais/simples/agencia-marketing/contato"
                                className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full font-bold transition-colors text-center mt-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Solicitar Proposta
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
