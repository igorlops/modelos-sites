import Link from "next/link";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Sobre */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-amber-600 rounded flex items-center justify-center">
                                <Scale size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Martins & Associados</h3>
                                <p className="text-xs text-amber-400">Advocacia Empresarial</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Há mais de 20 anos oferecendo assessoria jurídica empresarial de excelência, protegendo empresas e viabilizando crescimento sustentável através de soluções estratégicas e inovadoras.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-600 transition-colors flex items-center justify-center">
                                <span className="text-lg">💼</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-600 transition-colors flex items-center justify-center">
                                <span className="text-lg">📘</span>
                            </a>
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Links Rápidos</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/sites-institucionais/simples/advocacia-empresarial" className="hover:text-amber-400 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/advocacia-empresarial/sobre" className="hover:text-amber-400 transition-colors text-sm">
                                    Sobre o Escritório
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/advocacia-empresarial/servicos" className="hover:text-amber-400 transition-colors text-sm">
                                    Áreas de Atuação
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/advocacia-empresarial/faq" className="hover:text-amber-400 transition-colors text-sm">
                                    Perguntas Frequentes
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/advocacia-empresarial/contato" className="hover:text-amber-400 transition-colors text-sm">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Áreas de Atuação */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Principais Áreas</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-amber-500">⚖️</span>
                                <span>Direito Societário</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-amber-500">🤝</span>
                                <span>Fusões e Aquisições</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-amber-500">👥</span>
                                <span>Direito Trabalhista</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-amber-500">💰</span>
                                <span>Direito Tributário</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-amber-500">📝</span>
                                <span>Contratos Empresariais</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Fale Conosco</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p className="font-semibold text-white">(11) 3030-3030</p>
                                    <p className="text-xs">Seg a Sex: 09h às 18h</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.713 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <div className="text-sm">
                                    <p className="font-semibold text-white">(11) 99999-0000</p>
                                    <p className="text-xs">WhatsApp</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p className="font-semibold text-white break-all">contato@martinsadvocacia.com.br</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p>Av. Brig. Faria Lima, 3477</p>
                                    <p>São Paulo - SP</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-3">Proteja Seu Negócio Hoje</h3>
                        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                            Agende uma consulta estratégica gratuita e descubra como podemos ajudar sua empresa
                        </p>
                        <Link
                            href="/sites-institucionais/simples/advocacia-empresarial/contato"
                            className="inline-block px-8 py-3 bg-white text-amber-900 rounded font-bold hover:bg-amber-50 transition-colors shadow-lg"
                        >
                            Agendar Consulta Gratuita
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-slate-800 text-center">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p className="text-slate-400">
                            © {currentYear} Martins & Associados Advocacia Empresarial. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-6 text-xs">
                            <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                                Política de Privacidade
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                                Termos de Uso
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                                Código de Ética
                            </Link>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">
                        OAB/SP - Registro Profissional | Sigilo garantido conforme Estatuto da Advocacia
                    </p>
                </div>
            </div>
        </footer>
    );
}
