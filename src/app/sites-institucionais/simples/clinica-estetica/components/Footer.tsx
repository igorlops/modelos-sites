import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-serif text-rose-400 mb-4">Lumina.</h3>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Realçando sua beleza natural com tecnologia de ponta e profissionais especializados.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Contato</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2"><MapPin size={16} className="text-rose-400" /> Av. Paulista, 1000 - SP</li>
                        <li className="flex items-center gap-2"><Phone size={16} className="text-rose-400" /> (11) 99999-9999</li>
                        <li className="flex items-center gap-2"><Mail size={16} className="text-rose-400" /> contato@lumina.com.br</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Social</h4>
                    <div className="flex gap-4">
                        <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-rose-500 transition-colors"><Instagram size={20} /></Link>
                        <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-rose-500 transition-colors"><Facebook size={20} /></Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} Lumina Estética. Todos os direitos reservados.
            </div>
        </footer>
    );
}
