import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-rose-100">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/sites-institucionais/simples/clinica-estetica" className="text-2xl font-serif text-rose-500 font-semibold">
                    Lumina.
                </Link>
                <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider text-slate-600">
                    <Link href="/sites-institucionais/simples/clinica-estetica/sobre" className="hover:text-rose-500 transition-colors">Sobre</Link>
                    <Link href="/sites-institucionais/simples/clinica-estetica/servicos" className="hover:text-rose-500 transition-colors">Serviços</Link>
                    <Link href="/sites-institucionais/simples/clinica-estetica/portfolio" className="hover:text-rose-500 transition-colors">Resultados</Link>
                    <Link href="/sites-institucionais/simples/clinica-estetica/contato" className="bg-rose-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition-colors">Agendar</Link>
                </nav>
                <button className="md:hidden p-2 text-slate-600">
                    <Menu />
                </button>
            </div>
        </header>
    );
}
