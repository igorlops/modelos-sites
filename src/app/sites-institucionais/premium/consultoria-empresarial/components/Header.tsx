"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Building2, ChevronDown, Menu, X, ArrowRight,
    TrendingUp, BarChart3, Users, Lightbulb, Shield, Briefcase
} from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const solutions = [
        { title: "Tecnologia & Inovação", icon: Lightbulb, href: "/sites-institucionais/premium/consultoria-empresarial/servicos#tech" },
        { title: "Manufatura & Indústria", icon: Building2, href: "/sites-institucionais/premium/consultoria-empresarial/servicos#industry" },
        { title: "Serviços Financeiros", icon: TrendingUp, href: "/sites-institucionais/premium/consultoria-empresarial/servicos#finance" },
        { title: "Gestão de Pessoas", icon: Users, href: "/sites-institucionais/premium/consultoria-empresarial/servicos#people" },
        { title: "Estratégia & Risco", icon: Shield, href: "/sites-institucionais/premium/consultoria-empresarial/servicos#strategy" },
        { title: "Excelência Operacional", icon: BarChart3, href: "/sites-institucionais/premium/consultoria-empresarial/servicos#ops" },
    ];

    const mainLinks = [
        { label: "Home", href: "/sites-institucionais/premium/consultoria-empresarial" },
        { label: "Sobre", href: "/sites-institucionais/premium/consultoria-empresarial/sobre" },
        { label: "Soluções", href: "/sites-institucionais/premium/consultoria-empresarial/servicos", isDropdown: true },
        { label: "Portfólio", href: "/sites-institucionais/premium/consultoria-empresarial/portfolio" },
        { label: "Metodologia", href: "/sites-institucionais/premium/consultoria-empresarial/processo" },
        { label: "Insights", href: "/sites-institucionais/premium/consultoria-empresarial/blog" },
        { label: "Contato", href: "/sites-institucionais/premium/consultoria-empresarial/contato" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b border-slate-200 ${isScrolled ? "h-20 shadow-xl" : "h-20 lg:h-28 shadow-sm"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 h-full flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/sites-institucionais/premium/consultoria-empresarial" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:bg-blue-700 transition-colors">
                            <Briefcase size={22} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-slate-900 text-lg md:text-xl leading-none tracking-tight">STRATEGIC</span>
                            <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Consultoria</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
                        {mainLinks.map((link, idx) => (
                            <div
                                key={idx}
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => link.isDropdown && setActiveDropdown("solutions")}
                                onMouseLeave={() => link.isDropdown && setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={`text-sm xl:text-base font-medium transition-colors duration-200 py-3 flex items-center gap-1 ${pathname === link.href ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-600"
                                        }`}
                                >
                                    {link.label}
                                    {link.isDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                                </Link>
                                {/* Underline Effect */}
                                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 transition-transform duration-300 origin-left ${pathname === link.href ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />

                                {/* Mega Menu Dropdown */}
                                {link.isDropdown && activeDropdown === "solutions" && (
                                    <div className="absolute top-full -left-20 w-[600px] bg-white shadow-2xl rounded-2xl border border-slate-100 p-6 grid grid-cols-2 gap-4 animate-fade-in-up origin-top-left overflow-hidden z-[60]">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
                                        {solutions.map((sol, i) => (
                                            <Link
                                                key={i}
                                                href={sol.href}
                                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                            >
                                                <div className="mt-1 w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center group-hover/item:bg-blue-100 group-hover/item:text-blue-600 transition-colors">
                                                    <sol.icon size={18} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-800 text-sm group-hover/item:text-blue-600 transition-colors">{sol.title}</p>
                                                    <p className="text-xs text-slate-500 mt-1">Soluções estratégicas para o setor.</p>
                                                </div>
                                            </Link>
                                        ))}
                                        <div className="col-span-2 bg-slate-900 rounded-xl p-4 flex items-center justify-between text-white mt-2">
                                            <div>
                                                <p className="font-bold text-sm">Precisa de algo personalizado?</p>
                                                <p className="text-xs text-slate-400">Nossos consultores criam projetos sob medida.</p>
                                            </div>
                                            <Link href="/sites-institucionais/premium/consultoria-empresarial/contato" className="text-xs font-bold bg-white text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-200 transition-colors">
                                                Falar com Especialista
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="/sites-institucionais/premium/consultoria-empresarial/contato"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            Diagnóstico Gratuito <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-slate-800 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden pt-24 px-6 overflow-y-auto ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col gap-6">
                    {mainLinks.map((link, idx) => (
                        <div key={idx} className="border-b border-slate-100 pb-4">
                            {link.isDropdown ? (
                                <div className="space-y-4">
                                    <span className="text-lg font-bold text-slate-900 block">{link.label}</span>
                                    <div className="grid grid-cols-1 gap-3 pl-4">
                                        {solutions.map((sol, i) => (
                                            <Link
                                                key={i}
                                                href={sol.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-slate-600 text-sm flex items-center gap-3 py-2"
                                            >
                                                <sol.icon size={16} className="text-blue-500" />
                                                {sol.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xl font-bold text-slate-800 block hover:text-blue-600"
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/sites-institucionais/premium/consultoria-empresarial/contato"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="bg-blue-600 text-white w-full py-4 rounded-xl font-bold text-center mt-4 shadow-lg active:scale-95 transition-transform"
                    >
                        Agendar Diagnóstico
                    </Link>
                </div>
            </div>
        </>
    );
}
