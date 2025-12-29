import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-100 text-stone-600 py-16 border-t border-stone-200">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
                <div className="md:col-span-2">
                    <h3 className="text-xl font-serif text-teal-900 mb-4">Psi. Ana Silva</h3>
                    <p className="text-sm leading-relaxed max-w-sm mb-6">
                        CRP 06/12345<br />
                        Oferecendo um espaço seguro de escuta e acolhimento para sua jornada de autoconhecimento e saúde mental.
                    </p>
                    <p className="text-xs text-stone-400">
                        * Em caso de emergência ou crise, ligue 188 (CVV).
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-stone-800 mb-4 text-sm uppercase tracking-wider">Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="#" className="hover:text-teal-700 transition-colors">Sobre mim</Link></li>
                        <li><Link href="#" className="hover:text-teal-700 transition-colors">Abordagem</Link></li>
                        <li><Link href="#" className="hover:text-teal-700 transition-colors">Blog</Link></li>
                        <li><Link href="#" className="hover:text-teal-700 transition-colors">Política de Privacidade</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-stone-800 mb-4 text-sm uppercase tracking-wider">Contato</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-3 items-center"><Phone size={16} className="text-teal-600" /> (11) 98888-8888</li>
                        <li className="flex gap-3 items-center"><Mail size={16} className="text-teal-600" /> contato@psi.com.br</li>
                        <li className="flex gap-3 items-start"><MapPin size={16} className="text-teal-600 mt-1" /> Rua da Paz, 123 - SP</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
