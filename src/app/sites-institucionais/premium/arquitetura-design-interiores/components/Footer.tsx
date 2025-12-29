import Link from "next/link";
import { DraftingCompass, Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Clock, Award, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    {/* Coluna 1: Institucional */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg text-white shadow-lg shadow-amber-900/20">
                                <DraftingCompass size={28} strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-serif font-bold text-stone-100 leading-none tracking-tight">
                                    ARCH<span className="text-amber-500">.</span>PREMIUM
                                </span>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-amber-500/80 mt-1">
                                    Arquitetura & Design
                                </span>
                            </div>
                        </div>

                        <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
                            Transformamos espaços em experiências sensoriais únicas. Há mais de 15 anos redefinindo o conceito de morar e trabalhar com elegância, funcionalidade e design atemporal.
                        </p>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-white transition-all duration-300 group">
                                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-blue-700 hover:text-white transition-all duration-300 group">
                                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div>
                        <h4 className="text-stone-100 font-bold mb-8 text-lg relative inline-block">
                            Navegação
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-amber-600 rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Sobre Nós", path: "/sobre" },
                                { name: "Nossos Projetos", path: "/portfolio" },
                                { name: "Metodologia", path: "/processo" },
                                { name: "Notícias & Trends", path: "/blog" },
                                { name: "Fale Conosco", path: "/contato" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={`/sites-institucionais/premium/arquitetura-design-interiores${link.path}`}
                                        className="flex items-center group hover:text-amber-500 transition-colors"
                                    >
                                        <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-500" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 3: Serviços */}
                    <div>
                        <h4 className="text-stone-100 font-bold mb-8 text-lg relative inline-block">
                            Expertise
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-amber-600 rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="hover:text-amber-500 transition-colors cursor-pointer">
                                Arquitetura Residencial de Luxo
                            </li>
                            <li className="hover:text-amber-500 transition-colors cursor-pointer">
                                Design de Interiores Corporativo
                            </li>
                            <li className="hover:text-amber-500 transition-colors cursor-pointer">
                                Gestão e Execução de Obras
                            </li>
                            <li className="hover:text-amber-500 transition-colors cursor-pointer">
                                Paisagismo & Áreas Externas
                            </li>
                            <li className="hover:text-amber-500 transition-colors cursor-pointer">
                                Consultoria em Iluminação
                            </li>
                            <li className="hover:text-amber-500 transition-colors cursor-pointer">
                                Retrofit e Restauro
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 4: Contato */}
                    <div>
                        <h4 className="text-stone-100 font-bold mb-8 text-lg relative inline-block">
                            Atendimento
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-amber-600 rounded-full"></span>
                        </h4>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-3 group">
                                <MapPin size={20} className="text-amber-600 mt-1 flex-shrink-0 group-hover:text-amber-500 transition-colors" />
                                <span className="text-stone-400 leading-relaxed">
                                    Av. Faria Lima, 4500 - Andar 15<br />
                                    Itaim Bibi, São Paulo - SP<br />
                                    CEP: 04538-133
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone size={20} className="text-amber-600 flex-shrink-0 group-hover:text-amber-500 transition-colors" />
                                <span className="text-stone-400 group-hover:text-stone-200 transition-colors">+55 (11) 3333-4444</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail size={20} className="text-amber-600 flex-shrink-0 group-hover:text-amber-500 transition-colors" />
                                <span className="text-stone-400 group-hover:text-stone-200 transition-colors">contato@archpremium.com.br</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <Clock size={20} className="text-amber-600 mt-1 flex-shrink-0 group-hover:text-amber-500 transition-colors" />
                                <div className="flex flex-col">
                                    <span className="text-stone-400">Seg - Sex: 09:00 - 18:00</span>
                                    <span className="text-stone-500 text-xs">Atendimento com hora marcada</span>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 flex gap-3">
                            <div className="px-3 py-1 border border-stone-700 rounded text-[10px] text-stone-500 uppercase tracking-widest hover:border-amber-600 hover:text-amber-500 transition-colors cursor-default">
                                CAU/SP 12345-6
                            </div>
                            <div className="px-3 py-1 border border-stone-700 rounded text-[10px] text-stone-500 uppercase tracking-widest hover:border-amber-600 hover:text-amber-500 transition-colors cursor-default">
                                ABD 9876
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-stone-500 text-xs text-center md:text-left space-y-2">
                        <p>
                            &copy; {currentYear} ArchPremium Arquitetura & Design. Todos os direitos reservados.
                        </p>
                        <p className="max-w-2xl text-[10px] opacity-70">
                            As imagens apresentadas neste site são de projetos autorais e não podem ser reproduzidas sem autorização expressa.
                            Atuação em conformidade com o Código de Ética e Disciplina do CAU/BR e ABD.
                        </p>
                    </div>

                    <div className="flex gap-6 text-xs text-stone-500 font-medium">
                        <Link href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</Link>
                        <Link href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</Link>
                        <Link href="#" className="hover:text-amber-500 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
