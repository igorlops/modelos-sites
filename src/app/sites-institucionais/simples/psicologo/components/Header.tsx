import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-[#FDFBF7] sticky top-0 z-50">
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                <Link href="/sites-institucionais/simples/psicologo" className="text-2xl font-serif text-teal-800 tracking-wide">
                    Psi. Ana Silva
                </Link>
                <nav className="hidden md:flex gap-10 text-stone-600 font-medium text-sm">
                    <Link href="/sites-institucionais/simples/psicologo/sobre" className="hover:text-teal-700 transition-colors">Quem Sou</Link>
                    <Link href="/sites-institucionais/simples/psicologo/servicos" className="hover:text-teal-700 transition-colors">Terapia</Link>
                    <Link href="/sites-institucionais/simples/psicologo/faq" className="hover:text-teal-700 transition-colors">Dúvidas</Link>
                    <Link href="/sites-institucionais/simples/psicologo/contato" className="px-6 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors">Agendar Consulta</Link>
                </nav>
                <button className="md:hidden text-stone-600">
                    <Menu />
                </button>
            </div>
        </header>
    );
}
