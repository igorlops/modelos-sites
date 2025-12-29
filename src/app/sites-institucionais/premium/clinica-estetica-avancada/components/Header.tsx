"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu, X, Sparkles, Phone, Instagram,
    ChevronDown, ArrowRight, User
} from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    // Premium Navigation Structure
    const navLinks = [
        { name: "Home", path: "/sites-institucionais/premium/clinica-estetica-avancada" },
        { name: "Sobre", path: "/sites-institucionais/premium/clinica-estetica-avancada/sobre" },
        {
            name: "Tratamentos",
            path: "/sites-institucionais/premium/clinica-estetica-avancada/servicos",
            hasMegaMenu: true,
            subItems: [
                { label: "Facial", desc: "Rejuvenescimento e Harmonização", href: "/sites-institucionais/premium/clinica-estetica-avancada/servicos#facial" },
                { label: "Corporal", desc: "Remodelação e Emagrecimento", href: "/sites-institucionais/premium/clinica-estetica-avancada/servicos#corporal" },
                { label: "Íntimo", desc: "Estética e Saúde da Mulher", href: "/sites-institucionais/premium/clinica-estetica-avancada/servicos#intimo" },
                { label: "Capilar", desc: "Terapia e Transplante FUE", href: "/sites-institucionais/premium/clinica-estetica-avancada/servicos#capilar" },
            ]
        },
        { name: "Resultados", path: "/sites-institucionais/premium/clinica-estetica-avancada/portfolio" },
        { name: "A Clínica", path: "/sites-institucionais/premium/clinica-estetica-avancada/processo" },
        { name: "Blog", path: "/sites-institucionais/premium/clinica-estetica-avancada/blog" },
        { name: "Depoimentos", path: "/sites-institucionais/premium/clinica-estetica-avancada/depoimentos" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
                        ? "bg-white/80 backdrop-blur-xl h-20 shadow-lg shadow-rose-100/50 border-rose-100"
                        : "bg-transparent h-24 border-white/10"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full flex items-center justify-between">

                    {/* LOGO AREA */}
                    <Link href="/sites-institucionais/premium/clinica-estetica-avancada" className="flex items-center gap-2 group relative z-50">
                        <div className={`p-2 rounded-full transition-all duration-500 ${isScrolled ? "bg-rose-50 text-rose-600" : "bg-white/20 text-white backdrop-blur-sm"}`}>
                            <Sparkles size={24} className="animate-pulse-slow" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-serif font-bold text-2xl tracking-tight leading-none transition-colors duration-300 ${isScrolled ? "text-neutral-900" : "text-white"}`}>
                                LUMIÈRE
                            </span>
                            <span className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 ${isScrolled ? "text-rose-600" : "text-rose-200"}`}>
                                Esthétique
                            </span>
                        </div>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group h-20 flex items-center"
                                onMouseEnter={() => link.hasMegaMenu && setActiveSubmenu(link.name)}
                                onMouseLeave={() => setActiveSubmenu(null)}
                            >
                                <Link
                                    href={link.path}
                                    className={`text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-1 ${isActive(link.path)
                                            ? "text-rose-500 font-bold"
                                            : isScrolled ? "text-neutral-600 hover:text-rose-600" : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    {link.name} {link.hasMegaMenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                                </Link>

                                {isActive(link.path) && (
                                    <span className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-500 rounded-full" />
                                )}

                                {/* MEGA MENU */}
                                {link.hasMegaMenu && (
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-3xl p-8 shadow-[0_30px_60px_rgba(225,29,72,0.15)] border border-rose-50 transform transition-all duration-300 origin-top ${activeSubmenu === link.name
                                            ? "opacity-100 translate-y-0 visible"
                                            : "opacity-0 -translate-y-4 invisible"
                                        }`}>
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-t border-l border-rose-50" />
                                        <div className="grid grid-cols-2 gap-6 relative z-10">
                                            {link.subItems?.map((sub) => (
                                                <Link
                                                    key={sub.label}
                                                    href={sub.href}
                                                    className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-rose-50 transition-colors"
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 group-hover/item:scale-110 transition-transform">
                                                        <Sparkles size={18} />
                                                    </div>
                                                    <div>
                                                        <div className="font-serif text-neutral-900 group-hover/item:text-rose-700 transition-colors font-bold">
                                                            {sub.label}
                                                        </div>
                                                        <div className="text-xs text-neutral-500 mt-1 leading-relaxed">
                                                            {sub.desc}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* RIGHT ACTIONS */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link
                            href="https://wa.me/5511999999999"
                            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isScrolled ? "text-neutral-400 hover:text-green-600 hover:bg-green-50" : "text-white/80 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            <Phone size={20} />
                        </Link>
                        <Link
                            href="/sites-institucionais/premium/clinica-estetica-avancada/contato"
                            className="relative px-8 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-rose-600 via-purple-600 to-rose-600 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all duration-500 bg-[length:200%_auto] hover:bg-right overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Agendar Avaliação <Sparkles size={16} className="group-hover:animate-spin-slow" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 blur" />
                        </Link>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden p-2 rounded-full transition-colors relative z-50 ${isMobileMenuOpen || !isScrolled ? "text-white" : "text-neutral-900"
                            }`}
                    >
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>

                </div>
            </header>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 z-40 bg-rose-950/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center lg:hidden ${isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
                }`}>
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-3xl font-serif text-white/90 hover:text-rose-400 font-bold transition-all hover:scale-110"
                            style={{ transitionDelay: `${100 + idx * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/sites-institucionais/premium/clinica-estetica-avancada/contato"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-8 px-10 py-4 bg-white text-rose-900 rounded-full font-bold text-lg hover:bg-rose-100 transition-colors shadow-2xl"
                    >
                        Agendar Agora
                    </Link>
                </div>
            </div>
        </>
    );
}
