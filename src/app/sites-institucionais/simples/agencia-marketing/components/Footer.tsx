import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-purple-100">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Sparkles size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Impulse Digital</h3>
                                <p className="text-xs text-pink-300">Marketing que Converte</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Agência de marketing digital full service especializada em performance e branding. Transformamos dados em estratégias que geram resultados reais para seu negócio.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-purple-800 hover:bg-pink-500 transition-colors flex items-center justify-center">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-purple-800 hover:bg-pink-500 transition-colors flex items-center justify-center">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-purple-800 hover:bg-pink-500 transition-colors flex items-center justify-center">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Navegação</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/sites-institucionais/simples/agencia-marketing" className="hover:text-pink-300 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/agencia-marketing/sobre" className="hover:text-pink-300 transition-colors text-sm">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/agencia-marketing/servicos" className="hover:text-pink-300 transition-colors text-sm">
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/agencia-marketing/portfolio" className="hover:text-pink-300 transition-colors text-sm">
                                    Portfólio
                                </Link>
                            </li>
                            <li>
                                <Link href="/sites-institucionais/simples/agencia-marketing/contato" className="hover:text-pink-300 transition-colors text-sm">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Nossos Serviços</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-pink-400">📱</span>
                                <span>Social Media</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-pink-400">🎯</span>
                                <span>Tráfego Pago</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-pink-400">🔍</span>
                                <span>SEO e Conteúdo</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-pink-400">🎨</span>
                                <span>Design e Branding</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-pink-400">💻</span>
                                <span>Desenvolvimento Web</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-pink-400 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p className="font-semibold text-white">(11) 4040-4040</p>
                                    <p className="text-xs">Seg a Sex: 09h às 19h</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-pink-400 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p className="font-semibold text-white break-all">contato@impulsedigital.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-pink-400 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p>Av. Paulista, 1500 - Conj. 200</p>
                                    <p>Bela Vista, São Paulo - SP</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-purple-700">
                    <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-3">Pronto Para Decolar Seu Marketing?</h3>
                        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                            Solicite uma análise gratuita e descubra como podemos multiplicar seus resultados digitais
                        </p>
                        <Link
                            href="/sites-institucionais/simples/agencia-marketing/contato"
                            className="inline-block px-8 py-3 bg-white text-purple-900 rounded-full font-bold hover:bg-purple-50 transition-colors shadow-lg"
                        >
                            Solicitar Análise Gratuita
                        </Link>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-purple-700 text-center">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p className="text-purple-300">
                            © {currentYear} Impulse Digital - Agência de Marketing. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-6 text-xs">
                            <Link href="#" className="text-purple-300 hover:text-pink-300 transition-colors">
                                Política de Privacidade
                            </Link>
                            <Link href="#" className="text-purple-300 hover:text-pink-300 transition-colors">
                                Termos de Uso
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
