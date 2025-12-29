"use client";

import Link from "next/link";
import { useState } from "react";
import { Scale, Menu, X } from "lucide-react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/sites-institucionais/simples/advocacia-empresarial", label: "Home" },
        { href: "/sites-institucionais/simples/advocacia-empresarial/sobre", label: "Sobre" },
        { href: "/sites-institucionais/simples/advocacia-empresarial/servicos", label: "Serviços" },
        { href: "/sites-institucionais/simples/advocacia-empresarial/faq", label: "FAQ" },
        { href: "/sites-institucionais/simples/advocacia-empresarial/contato", label: "Contato" }
    ];

    return (
        <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/sites-institucionais/simples/advocacia-empresarial" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 bg-amber-600 rounded flex items-center justify-center">
                            <Scale size={24} className="text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-tight">Martins & Associados</span>
                            <span className="text-xs text-amber-400">Advocacia Empresarial</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-300 hover:text-white transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/sites-institucionais/simples/advocacia-empresarial/contato"
                            className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 rounded font-bold transition-colors shadow-md"
                        >
                            Agendar Consulta
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 hover:bg-slate-800 rounded transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-slate-800">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-slate-300 hover:text-white transition-colors font-medium py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/sites-institucionais/simples/advocacia-empresarial/contato"
                                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded font-bold transition-colors text-center mt-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Agendar Consulta
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
