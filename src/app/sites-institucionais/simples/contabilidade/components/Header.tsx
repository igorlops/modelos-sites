import Link from "next/link";
import { Menu, LogIn } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/sites-institucionais/simples/contabilidade" className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    Contábil Prime
                </Link>
                <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600 items-center">
                    <Link href="/sites-institucionais/simples/contabilidade/sobre" className="hover:text-blue-600 transition-colors">A Empresa</Link>
                    <Link href="/sites-institucionais/simples/contabilidade/servicos" className="hover:text-blue-600 transition-colors">Serviços</Link>
                    <Link href="/sites-institucionais/simples/contabilidade/precos" className="hover:text-blue-600 transition-colors">Planos</Link>
                    <Link href="/sites-institucionais/simples/contabilidade/contato" className="hover:text-blue-600 transition-colors">Fale Conosco</Link>
                </nav>
                <div className="hidden md:flex gap-4">
                    <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline">
                        <LogIn size={18} /> Área do Cliente
                    </button>
                    <Link href="/sites-institucionais/simples/contabilidade/contato" className="px-5 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors">
                        Abra sua Empresa
                    </Link>
                </div>
                <button className="md:hidden text-slate-600">
                    <Menu />
                </button>
            </div>
        </header>
    );
}
