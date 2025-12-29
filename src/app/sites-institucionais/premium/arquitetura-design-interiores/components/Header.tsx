"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Instagram, Linkedin, Facebook, ChevronDown, DraftingCompass } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/sites-institucionais/premium/arquitetura-design-interiores" },
        { name: "Sobre", path: "/sites-institucionais/premium/arquitetura-design-interiores/sobre" },
        { name: "Serviços", path: "/sites-institucionais/premium/arquitetura-design-interiores/servicos" },
        { name: "Portfólio", path: "/sites-institucionais/premium/arquitetura-design-interiores/portfolio" },
        { name: "Processo", path: "/sites-institucionais/premium/arquitetura-design-interiores/processo" },
        { name: "Blog", path: "/sites-institucionais/premium/arquitetura-design-interiores/blog" },
        { name: "Depoimentos", path: "/sites-institucionais/premium/arquitetura-design-interiores/depoimentos" },
        { name: "Contato", path: "/sites-institucionais/premium/arquitetura-design-interiores/contato" },
    ];

    const isActive = (path: string) => {
        if (path === "/sites-institucionais/premium/arquitetura-design-interiores" && pathname !== path) {
            return false;
        }
        return pathname.startsWith(path);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                        ? "bg-stone-900/90 backdrop-blur-md shadow-lg py-3"
                        : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
                    <Link href="/sites-institucionais/premium/arquitetura-design-interiores" className="group">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg transition-colors duration-300 ${isScrolled ? "bg-amber-600/20 text-amber-500" : "bg-stone-800 text-amber-500"}`}>
                                <DraftingCompass size={32} strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-2xl font-serif font-bold leading-none tracking-tight transition-colors duration-300 ${isScrolled ? "text-stone-100" : "text-stone-800"}`}>
                                    ARCH<span className="text-amber-600">.</span>PREMIUM
                                </span>
                                <span className={`text-[10px] uppercase tracking-[0.2em] font-medium mt-1 ${isScrolled ? "text-stone-400" : "text-stone-600"}`}>
                                    Arquitetura & Design
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-8 bg-stone-100/5 px-6 py-2 rounded-full border border-stone-200/10 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-amber-600 ${isActive(link.path)
                                        ? "text-amber-600 font-bold"
                                        : isScrolled
                                            ? "text-stone-300"
                                            : "text-stone-700"
                                    }`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <a href="#" className={`transition-colors duration-300 hover:text-amber-600 ${isScrolled ? "text-stone-400" : "text-stone-600"}`}>
                                <Instagram size={20} />
                            </a>
                            <a href="#" className={`transition-colors duration-300 hover:text-amber-600 ${isScrolled ? "text-stone-400" : "text-stone-600"}`}>
                                <Linkedin size={20} />
                            </a>
                        </div>
                        <Link
                            href="/sites-institucionais/premium/arquitetura-design-interiores/contato"
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg ${isScrolled
                                    ? "bg-amber-600 text-white hover:bg-amber-700 shadow-amber-900/20"
                                    : "bg-stone-800 text-white hover:bg-stone-900 shadow-stone-900/20"
                                }`}
                        >
                            Iniciar Projeto
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`xl:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-stone-100 hover:bg-stone-800" : "text-stone-800 hover:bg-stone-100"
                            }`}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-stone-900/95 backdrop-blur-xl transition-all duration-500 xl:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col h-full bg-stone-900 shadow-2xl w-[85%] max-w-sm ml-auto p-8 pt-24 border-l border-white/10">
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-2xl font-serif font-light transition-all duration-300 hover:text-amber-500 transform hover:translate-x-2 ${isActive(link.path) ? "text-amber-500 pl-4 border-l-2 border-amber-500" : "text-stone-300"
                                    }`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto border-t border-white/10 pt-8">
                        <div className="flex flex-col gap-4">
                            <a href="tel:+5511999999999" className="flex items-center gap-4 text-stone-400 hover:text-white transition-colors">
                                <div className="p-3 rounded-full bg-stone-800">
                                    <Phone size={20} className="text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-stone-500">Ligue agora</p>
                                    <p className="text-lg font-medium">+55 (11) 99999-9999</p>
                                </div>
                            </a>
                            <div className="flex gap-4 mt-4">
                                <a href="#" className="p-3 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-amber-600 transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="p-3 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-blue-600 transition-all">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="p-3 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-blue-700 transition-all">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
