"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu, X, Phone, Mail, ChevronDown, Scale,
    Gavel, Shield, FileText, Building2, Users,
    BookOpen, Award
} from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/sites-institucionais/premium/advocacia-empresarial" },
        { name: "Sobre", path: "/sites-institucionais/premium/advocacia-empresarial/sobre" },
        // Soluções is handled correctly via mega menu logic
        { name: "Portfólio", path: "/sites-institucionais/premium/advocacia-empresarial/portfolio" },
        { name: "Metodologia", path: "/sites-institucionais/premium/advocacia-empresarial/processo" },
        { name: "Insights", path: "/sites-institucionais/premium/advocacia-empresarial/blog" },
        { name: "Depoimentos", path: "/sites-institucionais/premium/advocacia-empresarial/depoimentos" },
        { name: "Contato", path: "/sites-institucionais/premium/advocacia-empresarial/contato" },
    ];

    const solutions = [
        {
            icon: Building2,
            title: "Direito Empresarial",
            desc: "Assessoria societária completa e governança.",
            href: "/sites-institucionais/premium/advocacia-empresarial/servicos#empresarial"
        },
        {
            icon: FileText,
            title: "Contratos Corporativos",
            desc: "Elaboração e revisão de instrumentos complexos.",
            href: "/sites-institucionais/premium/advocacia-empresarial/servicos#contratos"
        },
        {
            icon: Shield,
            title: "Compliance & Risco",
            desc: "Programas de integridade e adequação à LGPD.",
            href: "/sites-institucionais/premium/advocacia-empresarial/servicos#compliance"
        },
        {
            icon: Users,
            title: "Trabalhista Estratégico",
            desc: "Prevenção de passivos e negociação sindical.",
            href: "/sites-institucionais/premium/advocacia-empresarial/servicos#trabalhista"
        },
        {
            icon: Gavel,
            title: "Contencioso Cível",
            desc: "Defesa intransigente em disputas judiciais.",
            href: "/sites-institucionais/premium/advocacia-empresarial/servicos#contencioso"
        },
        {
            icon: Scale,
            title: "Recuperação Judicial",
            desc: "Reestruturação de passivos e soerguimento.",
            href: "/sites-institucionais/premium/advocacia-empresarial/servicos#recuperacao"
        },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-amber-700/20 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-2xl py-2"
                    : "bg-white py-6"
                }`}
        >
            {/* Top Bar for Desktop */}
            <div className="hidden lg:block w-full border-b border-slate-100 absolute top-0 left-0 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 h-10 flex justify-between items-center text-xs font-medium text-slate-500">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 hover:text-amber-700 transition-colors cursor-pointer">
                            <Phone size={12} className="text-amber-700" /> (11) 3000-0000
                        </span>
                        <span className="flex items-center gap-2 hover:text-amber-700 transition-colors cursor-pointer">
                            <Mail size={12} className="text-amber-700" /> contato@imperium.adv.br
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>OAB/SP 12.345</span>
                        <span>Desde 1995</span>
                        <Link href="#" className="hover:text-amber-700 transition-colors">Área do Cliente</Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 h-20 flex items-center justify-between mt-6 lg:mt-4">

                {/* Logo */}
                <Link href="/sites-institucionais/premium/advocacia-empresarial" className="relative group z-50 flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-900 text-amber-500 flex items-center justify-center rounded-lg border border-amber-700/30 shadow-lg group-hover:bg-amber-700 group-hover:text-white transition-all duration-500">
                        <Scale size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h1 className="font-serif text-2xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-amber-800 transition-colors">
                            IMPERIUM
                        </h1>
                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-semibold group-hover:text-slate-700 transition-colors">
                            Advocacia Empresarial
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.name === "Metodologia" ? (
                            // Using Metodologia as placeholder to ensure order matches request but keeping logic
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-semibold tracking-wide hover:text-amber-700 transition-all duration-300 relative group py-2 ${pathname === link.path ? "text-amber-700" : "text-slate-600"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300 ${pathname === link.path ? "w-full" : ""}`} />
                            </Link>
                        ) : link.name === "Portfólio" ? (
                            <div key="solutions" className="relative group" onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)}>
                                <button className={`flex items-center gap-1 text-sm font-semibold tracking-wide hover:text-amber-700 transition-all duration-300 py-4 ${pathname.includes('servicos') ? "text-amber-700" : "text-slate-600"}`}>
                                    Atuação <ChevronDown size={14} className={`transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Mega Menu */}
                                <div className={`absolute top-full -left-20 w-[600px] bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-amber-700/10 p-6 grid grid-cols-2 gap-4 transition-all duration-300 transform origin-top ${isSolutionsOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                                    <div className="col-span-2 mb-2 pb-2 border-b border-slate-100">
                                        <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Nossas Áreas de Expertise</span>
                                    </div>
                                    {solutions.map((sol, idx) => (
                                        <Link key={idx} href={sol.href} className="flex items-start gap-4 p-3 rounded-lg hover:bg-stone-50 transition-colors group/item">
                                            <div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-400 group-hover/item:bg-amber-50 group-hover/item:text-amber-700 transition-colors">
                                                <sol.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 group-hover/item:text-amber-700 transition-colors text-sm font-serif">{sol.title}</h4>
                                                <p className="text-xs text-slate-500 leading-relaxed mt-1">{sol.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                    <div className="col-span-2 mt-2 pt-3 border-t border-slate-100 text-center">
                                        <Link href="/sites-institucionais/premium/advocacia-empresarial/servicos" className="text-xs font-bold text-amber-700 hover:underline flex items-center justify-center gap-1">
                                            Ver Todas as Áreas <BookOpen size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-semibold tracking-wide hover:text-amber-700 transition-all duration-300 relative group py-2 ${pathname === link.path ? "text-amber-700" : "text-slate-600"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300 ${pathname === link.path ? "w-full" : ""}`} />
                            </Link>
                        )
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-800 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <Link
                        href="/sites-institucionais/premium/advocacia-empresarial/contato"
                        className="relative flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-slate-800 transition-all shadow-xl"
                    >
                        <Gavel size={16} className="text-amber-500" />
                        <span>Consulta Jurídica</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-slate-900 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 pt-32 px-6 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xl font-serif font-bold text-slate-800 border-b border-slate-100 pb-4 flex justify-between items-center"
                        >
                            {link.name}
                            <ArrowRightIcon />
                        </Link>
                    ))}
                    <Link
                        href="/sites-institucionais/premium/advocacia-empresarial/servicos"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xl font-serif font-bold text-amber-700 border-b border-slate-100 pb-4 flex justify-between items-center"
                    >
                        Áreas de Atuação
                        <ArrowRightIcon />
                    </Link>
                    <Link
                        href="/sites-institucionais/premium/advocacia-empresarial/contato"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold text-center mt-4 shadow-lg active:scale-95 transition-transform"
                    >
                        Agendar Consulta
                    </Link>
                </div>
            </div>
        </header>
    );
}

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);
