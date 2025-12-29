import Link from "next/link";
import { Home, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-blue-900 to-cyan-900 text-cyan-100">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-cyan-500 rounded flex items-center justify-center">
                                <Home size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Prime Negócios</h3>
                                <p className="text-xs text-cyan-300">Imobiliários</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Há mais de 25 anos conectando pessoas aos seus imóveis dos sonhos. Especialistas em compra, venda, locação e administração de imóveis residenciais e comerciais com ética e transparência.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-cyan-500 transition-colors flex items-center justify-center">
                                <span className="text-lg">📱</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-cyan-500 transition-colors flex items-center justify-center">
                                <span className="text-lg">📘</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-cyan-500 transition-colors flex items-center justify-center">
                                <span className="text-lg">📺</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Navegação</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/sites-institucionais/simples/imobiliaria" className="hover:text-cyan-300 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/imobiliaria/sobre" className="hover:text-cyan-300 transition-colors text-sm">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/imobiliaria/servicos" className="hover:text-cyan-300 transition-colors text-sm">
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/imobiliaria/portfolio" className="hover:text-cyan-300 transition-colors text-sm">
                                    Imóveis Disponíveis
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/imobiliaria/contato" className="hover:text-cyan-300 transition-colors text-sm">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Nossos Serviços</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">🏠</span>
                                <span>Compra e Venda</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">🔑</span>
                                <span>Locação Residencial</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">🏢</span>
                                <span>Locação Comercial</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">📋</span>
                                <span>Administração</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">⚖️</span>
                                <span>Assessoria Jurídica</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p className="font-semibold text-white">(11) 3500-3500</p>
                                    <p className="text-xs">Seg a Sex: 08h às 19h | Sáb: 09h às 14h</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p className="font-semibold text-white break-all">contato@primeimoveis.com.br</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p>Av. Berrini, 1500</p>
                                    <p>Brooklin, São Paulo - SP</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-blue-800">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-3">Encontre Seu Imóvel Ideal Hoje</h3>
                        <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
                            Agende uma visita sem compromisso e conheça nossas opções exclusivas de imóveis
                        </p>
                        <Link
                            href="/sites-institucionais/simples/imobiliaria/contato"
                            className="inline-block px-8 py-3 bg-white text-blue-900 rounded font-bold hover:bg-cyan-50 transition-colors shadow-lg"
                        >
                            Agendar Visita Gratuita
                        </Link>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-blue-800 text-center">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p className="text-cyan-300">
                            © {currentYear} Prime Negócios Imobiliários. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-6 text-xs">
                            <Link href="#" className="text-cyan-300 hover:text-cyan-400 transition-colors">
                                Política de Privacidade
                            </Link>
                            <Link href="#" className="text-cyan-300 hover:text-cyan-400 transition-colors">
                                Termos de Uso
                            </Link>
                        </div>
                    </div>
                    <p className="text-xs text-cyan-400 mt-4">
                        CRECI/SP 12345-J | Imobiliária regularizada e associada ao SECOVI-SP
                    </p>
                </div>
            </div>
        </footer>
    );
}
