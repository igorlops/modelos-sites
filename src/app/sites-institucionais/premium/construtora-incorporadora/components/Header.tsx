"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu, X, Phone, User, Search, MapPin,
    Building2, Key, Home, HardHat, CalendarCheck,
    ChevronDown, ArrowRight, Instagram
} from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/sites-institucionais/premium/construtora-incorporadora" },
        { name: "Sobre", path: "/sites-institucionais/premium/construtora-incorporadora/sobre" },
        { name: "Empreendimentos", path: "/sites-institucionais/premium/construtora-incorporadora/servicos", isMega: true },
        { name: "Obras Entregues", path: "/sites-institucionais/premium/construtora-incorporadora/portfolio" },
        { name: "Guia de Compra", path: "/sites-institucionais/premium/construtora-incorporadora/processo" },
        { name: "Blog", path: "/sites-institucionais/premium/construtora-incorporadora/blog" },
        { name: "Fale Conosco", path: "/sites-institucionais/premium/construtora-incorporadora/contato" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${isScrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-2xl py-2 border-teal-100/50"
                    : "bg-white/80 backdrop-blur-md py-4 md:py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 flex items-center justify-between">

                {/* Logo */}
                <Link href="/sites-institucionais/premium/construtora-incorporadora" className="flex items-center gap-2 group z-50">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-teal-700 to-teal-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-teal-500/30 transition-shadow">
                        <Building2 className="text-white transform group-hover:-translate-y-0.5 transition-transform" size={24} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-montserrat font-bold text-lg md:text-xl text-slate-900 leading-none tracking-tight">
                            CONSTRUTORA
                        </span>
                        <span className="font-inter text-[10px] md:text-xs font-medium text-teal-700 tracking-[0.2em] uppercase">
                            INCORPORADORA
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.isMega ? (
                            <div
                                key={link.path}
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setIsMegaMenuOpen(true)}
                                onMouseLeave={() => setIsMegaMenuOpen(false)}
                            >
                                <Link
                                    href={link.path}
                                    className={`text-sm font-semibold tracking-wide hover:text-teal-700 transition-colors flex items-center gap-1 py-4 ${pathname === link.path ? "text-teal-700" : "text-slate-600"}`}
                                >
                                    {link.name} <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                                </Link>

                                {/* Mega Menu */}
                                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-2xl shadow-[0_30px_90px_rgba(15,118,110,0.15)] border border-teal-100 p-8 grid grid-cols-3 gap-8 transition-all duration-300 transform origin-top ${isMegaMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>

                                    <div className="space-y-6 border-r border-slate-100 pr-6">
                                        <h4 className="font-montserrat font-bold text-teal-700 uppercase tracking-widest text-xs mb-4">Por Status</h4>
                                        <Link href="/sites-institucionais/premium/construtora-incorporadora/servicos#lancamentos" className="flex items-start gap-4 p-3 rounded-xl hover:bg-teal-50 transition-colors group/item">
                                            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-700 group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors">
                                                <Key size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-slate-800 text-sm">Lançamentos</h5>
                                                <p className="text-xs text-slate-500 mt-1">Oportunidades exclusivas</p>
                                            </div>
                                        </Link>
                                        <Link href="/sites-institucionais/premium/construtora-incorporadora/servicos#obras" className="flex items-start gap-4 p-3 rounded-xl hover:bg-teal-50 transition-colors group/item">
                                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors">
                                                <HardHat size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-slate-800 text-sm">Em Obras</h5>
                                                <p className="text-xs text-slate-500 mt-1">Acompanhe a evolução</p>
                                            </div>
                                        </Link>
                                        <Link href="/sites-institucionais/premium/construtora-incorporadora/servicos#prontos" className="flex items-start gap-4 p-3 rounded-xl hover:bg-teal-50 transition-colors group/item">
                                            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover/item:bg-slate-800 group-hover/item:text-white transition-colors">
                                                <Home size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-slate-800 text-sm">Prontos para Morar</h5>
                                                <p className="text-xs text-slate-500 mt-1">Mude imediatamente</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-montserrat font-bold text-teal-700 uppercase tracking-widest text-xs mb-2">Por Bairro</h4>
                                        <ul className="space-y-2">
                                            {["Jardins", "Zona Sul", "Centro", "Bela Vista", "Vila Nova"].map(b => (
                                                <li key={b}>
                                                    <Link href="#" className="flex items-center gap-2 text-sm text-slate-600 hover:text-orange-600 transition-colors">
                                                        <MapPin size={14} className="text-teal-500" /> {b}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-4 mt-4 border-t border-slate-100">
                                            <Link href="/sites-institucionais/premium/construtora-incorporadora/processo" className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1">
                                                <CalendarCheck size={12} /> Agendar Visita
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="relative rounded-xl overflow-hidden bg-slate-900 group/card">
                                        <img
                                            src="https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=800&auto=format&fit=crop"
                                            alt="Destaque"
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/card:scale-105 transition-transform duration-700"
                                        />
                                        <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                            <span className="bg-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded w-fit mb-2">LANÇAMENTO</span>
                                            <h5 className="font-montserrat font-bold text-white text-lg leading-tight mb-2">Reserva Imperial</h5>
                                            <p className="text-slate-200 text-xs mb-4">Apartamentos de 3 e 4 suítes no melhor do Jardins.</p>
                                            <Link href="/sites-institucionais/premium/construtora-incorporadora/servicos" className="w-full bg-white text-slate-900 text-xs font-bold py-2 rounded text-center hover:bg-teal-50 transition-colors">
                                                Ver Detalhes
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-semibold tracking-wide hover:text-teal-700 transition-all duration-300 relative group py-2 ${pathname === link.path ? "text-teal-700" : "text-slate-600"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300 ${pathname === link.path ? "w-full" : ""}`} />
                            </Link>
                        )
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <button className="p-2 text-slate-400 hover:text-teal-700 transition-colors">
                        <Search size={20} />
                    </button>
                    <a href="#" className="p-2 text-slate-400 hover:text-teal-700 transition-colors">
                        <Instagram size={20} />
                    </a>
                    <div className="h-6 w-px bg-slate-200" />
                    <Link
                        href="/sites-institucionais/premium/construtora-incorporadora/contato"
                        className="relative group overflow-hidden bg-gradient-to-r from-teal-700 to-teal-600 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-teal-700/20 hover:shadow-teal-700/40 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">Agendar Visita <ArrowRight size={16} /></span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="xl:hidden p-2 text-slate-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile Menu Overlay */}
            <div className={`xl:hidden fixed inset-0 z-40 bg-white transition-transform duration-500 pt-32 px-6 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col h-full pb-10 overflow-y-auto">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl font-bold text-slate-800 py-4 border-b border-slate-100 flex justify-between items-center"
                            >
                                {link.name}
                                <ArrowRight size={16} className="text-slate-300" />
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-8 space-y-4">
                        <Link
                            href="/sites-institucionais/premium/construtora-incorporadora/servicos"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full block bg-teal-700 text-white text-center py-4 rounded-xl font-bold text-lg shadow-xl"
                        >
                            Ver Lançamentos
                        </Link>
                        <div className="flex justify-center gap-8 pt-6">
                            <a href="#" className="flex flex-col items-center gap-1 text-slate-500 font-medium text-xs">
                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-1 text-green-600"><Phone size={18} /></div>
                                WhatsApp
                            </a>
                            <a href="#" className="flex flex-col items-center gap-1 text-slate-500 font-medium text-xs">
                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-1 text-teal-600"><User size={18} /></div>
                                Área Cliente
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
