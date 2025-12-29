"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, CheckCircle2, ChevronDown, Menu, X, Phone, Zap, ArrowRight } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/sites-institucionais/premium/energia-solar" },
        { name: "Sobre", path: "/sites-institucionais/premium/energia-solar/sobre" },
        { name: "Portfólio", path: "/sites-institucionais/premium/energia-solar/portfolio" },
        { name: "Processo", path: "/sites-institucionais/premium/energia-solar/processo" },
        { name: "Blog", path: "/sites-institucionais/premium/energia-solar/blog" },
        { name: "Depoimentos", path: "/sites-institucionais/premium/energia-solar/depoimentos" },
        { name: "Contato", path: "/sites-institucionais/premium/energia-solar/contato" },
    ];

    const servicesLinks = [
        { name: "Residencial", desc: "Economia para sua casa" },
        { name: "Comercial", desc: "Lucratividade para seu negócio" },
        { name: "Industrial", desc: "Alta performance energética" },
        { name: "Rural", desc: "Autonomia no campo" },
        { name: "Manutenção", desc: "Limpeza e monitoramento" },
    ];

    const isActive = (path: string) => {
        if (path === "/sites-institucionais/premium/energia-solar" && pathname !== path) return false;
        return pathname.startsWith(path);
    }

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-sky-950/90 backdrop-blur-md shadow-xl border-b border-sky-800"
                    : "bg-white border-b border-white/10 z-40"
                    }`}
            >
                {/* Top Bar - Desktop only */}
                <div className="hidden lg:block w-full bg-sky-900/50 text-sky-100 text-xs py-1 border-b border-white/5">
                    <div className="container mx-auto px-20 flex justify-between items-center">
                        <div className="flex gap-4">
                            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-400" /> Empresa Homologada ANEEL</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-400" /> Instalações Certificadas INMETRO</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="hover:text-amber-400 cursor-pointer transition-colors">Suporte: 0800 123 4567</span>
                            <span className="hover:text-amber-400 cursor-pointer transition-colors">Área do Cliente</span>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 md:px-10 lg:px-20 h-16 lg:h-20 flex items-center justify-between">
                    <Link href="/sites-institucionais/premium/energia-solar" className="group">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Sun size={36} className="text-amber-500 animate-[spin_10s_linear_infinite]" />
                                <Zap size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-900 fill-sky-900" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-extrabold tracking-tighter text-sky-900 leading-none">
                                    SOLAR<span className="text-sky-400">PRO</span>
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-emerald-400">
                                    Energia Limpa
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`relative text-sm font-bold tracking-wide transition-all duration-300 group py-2 ${isActive(link.path) ? "text-amber-400" : "text-slate-400 hover:text-slate-300"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 transform origin-left transition-transform duration-300 ${isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                            </Link>
                        ))}

                        {/* Mega Menu Toggle for Services */}
                        <div
                            className="relative group py-2"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <Link
                                href="/sites-institucionais/premium/energia-solar/servicos"
                                className={`flex items-center gap-1 text-sm font-bold tracking-wide transition-all duration-300 ${pathname.includes('/servicos') ? "text-amber-400" : "text-slate-200 hover:text-white"
                                    }`}
                            >
                                Serviços <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                            </Link>

                            {/* Mega Menu Dropdown */}
                            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-sky-950/95 backdrop-blur-xl border border-sky-800 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-4 transition-all duration-300 transform origin-top ${isServicesOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}`}>
                                {servicesLinks.map((service, idx) => (
                                    <Link
                                        key={idx}
                                        href="/sites-institucionais/premium/energia-solar/servicos"
                                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                                    >
                                        <div className="p-2 rounded-lg bg-sky-900/50 text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-sky-900 transition-colors">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm mb-1">{service.name}</h4>
                                            <p className="text-xs text-slate-400">{service.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                                <div className="col-span-2 mt-2 pt-4 border-t border-white/10 text-center">
                                    <Link href="/sites-institucionais/premium/energia-solar/servicos" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center justify-center gap-2">
                                        Ver todos os serviços <ArrowRight size={12} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="hidden lg:flex items-center gap-6">
                        <Link
                            href="/sites-institucionais/premium/energia-solar/contato"
                            className="relative px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-600 via-sky-500 to-amber-500 text-white shadow-lg shadow-sky-900/50 hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden group"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <Zap size={18} className="fill-white" />
                            Simule sua Economia
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="xl:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-sky-950/98 backdrop-blur-xl transition-all duration-500 xl:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col h-full p-8 pt-24">
                    <nav className="flex flex-col gap-6">
                        {[...navLinks, { name: "Serviços", path: "/sites-institucionais/premium/energia-solar/servicos" }].map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-2xl font-bold tracking-tight transition-all duration-300 hover:text-amber-400 flex items-center gap-4 ${isActive(link.path) ? "text-amber-400 pl-4 border-l-4 border-amber-400" : "text-slate-300"
                                    }`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto grid gap-4">
                        <Link
                            href="/sites-institucionais/premium/energia-solar/calculadora"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full py-4 rounded-xl font-bold text-center bg-amber-500 text-sky-950 hover:bg-amber-400 transition-colors"
                        >
                            Simular Economia Agora
                        </Link>
                        <div className="bg-sky-900/50 p-6 rounded-2xl border border-sky-800">
                            <a href="tel:08001234567" className="flex items-center gap-4 text-slate-300 mb-4">
                                <Phone className="text-emerald-400" /> 0800 123 4567
                            </a>
                            <p className="text-sm text-slate-400">Atendimento 24h para emergências.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-emerald-400 hover:scale-110 transition-all duration-300 animate-bounce"
                aria-label="Fale no WhatsApp"
            >
                <Phone size={28} className="fill-white" />
            </a>
        </>
    );
}
