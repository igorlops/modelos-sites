"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu, X, Search, ShoppingBag,
    Gem, Heart, User, ChevronDown,
    ArrowRight, Instagram, Phone, Info
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
        { name: "Home", path: "/sites-institucionais/premium/joalheria-artesanal-premium" },
        { name: "O Atelier", path: "/sites-institucionais/premium/joalheria-artesanal-premium/sobre" },
        { name: "Coleções", path: "/sites-institucionais/premium/joalheria-artesanal-premium/colecoes", isMega: true },
        { name: "Peças Exclusivas", path: "/sites-institucionais/premium/joalheria-artesanal-premium/portfolio" },
        { name: "Jornada Criativa", path: "/sites-institucionais/premium/joalheria-artesanal-premium/processo" },
        { name: "Journal", path: "/sites-institucionais/premium/joalheria-artesanal-premium/journal" },
        { name: "Concierge", path: "/sites-institucionais/premium/joalheria-artesanal-premium/contato" },
    ];

    return (
        <>
            {/* Top Bar - Luxury Notification */}
            <div className="bg-stone-950 text-amber-500 py-2 text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] relative z-50">
                <span className="flex items-center justify-center gap-2">
                    <Gem size={12} /> Joias com Certificado de Autenticidade Internacional
                </span>
            </div>

            <header
                className={`fixed top-8 left-0 w-full z-40 transition-all duration-700 border-b ${isScrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-xl py-2 border-stone-200"
                    : "bg-gray-300/80 backdrop-blur-xl py-4 md:py-8 border-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/sites-institucionais/premium/joalheria-artesanal-premium" className="group z-50 flex flex-col items-center">
                        <div className="font-playfair font-black text-2xl md:text-3xl text-stone-900 leading-none tracking-tighter group-hover:text-amber-700 transition-colors">
                            L'ART D'OR
                        </div>
                        <div className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-stone-500 group-hover:text-amber-600 transition-colors mt-1 font-bold">
                            Haute Joaillerie
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-10">
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
                                        className={`text-xs font-bold uppercase tracking-widest hover:text-amber-700 transition-colors flex items-center gap-1 py-4 ${pathname === link.path ? "text-amber-700" : "text-stone-800"}`}
                                    >
                                        {link.name} <ChevronDown size={12} className={`transition-transform duration-500 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                                    </Link>

                                    {/* Mega Menu */}
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[1000px] bg-white rounded-b-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t border-amber-100 p-10 grid grid-cols-4 gap-10 transition-all duration-500 transform origin-top ${isMegaMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>

                                        <div className="col-span-1 space-y-6 border-r border-stone-100 pr-6">
                                            <h4 className="font-playfair italic font-medium text-2xl text-stone-900 mb-6">Categorias</h4>
                                            <ul className="space-y-3">
                                                {["Anéis Solitários", "Alianças de Casamento", "Colares de Pérola", "Brincos de Diamante", "Pulseiras Riviera", "Alta Joalheria"].map((item) => (
                                                    <li key={item}>
                                                        <Link href="#" className="block text-sm text-stone-600 hover:text-amber-700 hover:translate-x-1 transition-all duration-300 font-medium">
                                                            {item}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="col-span-1 space-y-4 border-r border-stone-100 pr-6">
                                            <h4 className="font-playfair italic font-medium text-2xl text-stone-900 mb-6">Metais</h4>
                                            <ul className="space-y-3">
                                                {["Ouro Amarelo 18k", "Ouro Branco 18k", "Ouro Rosé 18k", "Platina 950"].map((item) => (
                                                    <li key={item}>
                                                        <Link href="#" className="flex items-center gap-3 group/metal">
                                                            <span className={`w-3 h-3 rounded-full border border-stone-200 ${item.includes("Amarelo") ? "bg-[#FFD700]" : item.includes("Branco") || item.includes("Platina") ? "bg-[#E5E4E2]" : "bg-[#B76E79]"}`}></span>
                                                            <span className="text-sm text-stone-600 group-hover/metal:text-amber-700 transition-colors">{item}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="pt-6 mt-6 border-t border-stone-100">
                                                <h4 className="font-playfair italic font-medium text-xl text-stone-900 mb-4">Gemas</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {["Diamante", "Rubi", "Safira", "Esmeralda", "Turmalina"].map(gem => (
                                                        <span key={gem} className="text-[10px] uppercase font-bold text-stone-500 bg-stone-50 px-2 py-1 rounded-sm border border-stone-100">
                                                            {gem}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-2 relative h-full min-h-[300px] overflow-hidden rounded-lg group/img">
                                            <img
                                                src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2574&auto=format&fit=crop"
                                                alt="Coleção Destaque"
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-stone-900/20 group-hover/img:bg-stone-900/10 transition-colors" />
                                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-stone-900/80 to-transparent">
                                                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2 block">Lançamento</span>
                                                <h3 className="text-white font-playfair text-3xl italic mb-3">Coleção Éternité</h3>
                                                <Link href="#" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase border-b border-white hover:text-amber-400 hover:border-amber-400 transition-all pb-1">
                                                    Ver Coleção <ArrowRight size={14} />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`text-xs font-bold uppercase tracking-widest hover:text-amber-700 transition-all duration-300 relative group py-2 ${pathname === link.path ? "text-amber-700" : "text-stone-800"
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-amber-600 group-hover:w-full transition-all duration-500 ${pathname === link.path ? "w-full" : ""}`} />
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        <button className="text-stone-800 hover:text-amber-700 transition-colors">
                            <Search size={20} strokeWidth={1.5} />
                        </button>
                        <a href="#" className="text-stone-800 hover:text-amber-700 transition-colors">
                            <Instagram size={20} strokeWidth={1.5} />
                        </a>
                        <div className="h-4 w-px bg-stone-300" />
                        <Link
                            href="/sites-institucionais/premium/joalheria-artesanal-premium/contato"
                            className="bg-gradient-to-r from-stone-900 to-stone-800 text-amber-50 px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-stone-900/20 hover:-translate-y-0.5 transition-all duration-500 flex items-center gap-2 border border-transparent hover:border-amber-500/30"
                        >
                            Encomenda Exclusiva
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="xl:hidden p-2 text-stone-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>

                {/* Mobile Menu Overlay */}
                <div className={`xl:hidden fixed inset-0 z-40 bg-white transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 pointer-events-none" />
                    <div className="flex flex-col h-full pt-32 px-10 pb-10 overflow-y-auto">
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-playfair text-3xl md:text-4xl text-stone-900 italic hover:text-amber-700 transition-colors flex justify-between items-center group border-b border-stone-100 pb-4"
                                >
                                    {link.name}
                                    <ArrowRight size={24} className="-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-amber-600" />
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-auto space-y-6 pt-10">
                            <Link
                                href="/sites-institucionais/premium/joalheria-artesanal-premium/contato"
                                className="w-full block bg-stone-900 text-amber-50 text-center py-5 font-bold uppercase tracking-widest text-sm"
                            >
                                Falar com Concierge
                            </Link>
                            <div className="flex justify-center gap-8 text-stone-500">
                                <Instagram size={24} />
                                <Phone size={24} />
                                <ShoppingBag size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
