import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-white text-xl font-bold mb-4">Contábil Prime</h3>
                    <p className="text-sm mb-6">
                        Simplificando a gestão contábil da sua empresa com tecnologia e expertise humana.
                    </p>
                    <div className="flex gap-4">
                        <Linkedin size={20} className="hover:text-white cursor-pointer" />
                        <Facebook size={20} className="hover:text-white cursor-pointer" />
                        <Instagram size={20} className="hover:text-white cursor-pointer" />
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Serviços</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-blue-400">Abertura de Empresa</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">Contabilidade Digital</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">BPO Financeiro</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">Certificado Digital</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Institucional</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-blue-400">Quem Somos</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">Nossos Planos</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">Blog</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">Carreiras</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Contato</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2 items-center"><Phone size={16} /> (11) 3333-3333</li>
                        <li className="flex gap-2 items-center"><Mail size={16} /> contato@contabilprime.com</li>
                        <li className="flex gap-2 items-start"><MapPin size={16} className="mt-1" /> Av. Faria Lima, 2000 - SP</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 text-center text-xs border-t border-slate-800 pt-8">
                &copy; 2024 Contábil Prime. CRC 1SP123456/O-0. Todos os direitos reservados.
            </div>
        </footer>
    );
}
