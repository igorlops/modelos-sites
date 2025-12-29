"use client";

import Link from "next/link";
import {
    Linkedin, Twitter, Youtube, MapPin, Phone, Mail,
    ArrowRight, ShieldCheck, Award, Globe, Building
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-400 font-sans relative z-10">

            {/* Top Section: Credibility */}
            <div className="bg-slate-900 border-b border-slate-800 py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">
                        Confiança de Líderes de Mercado
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Corporate Logos Placeholders */}
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-8 md:h-10 w-24 md:w-32 bg-slate-700/50 rounded flex items-center justify-center text-[10px] text-slate-500 font-bold">
                                CLIENTE {i}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Identity */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                <Building size={20} strokeWidth={2.5} />
                            </div>
                            <div>
                                <span className="font-bold text-white text-lg block leading-none">STRATEGIC</span>
                                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Consultoria</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Transformamos organizações através de estratégias baseadas em dados e excelência operacional. Parceiros de longo prazo para empresas que buscam liderança de mercado.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400 border border-slate-800">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all text-slate-400 border border-slate-800">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all text-slate-400 border border-slate-800">
                                <Youtube size={18} />
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-4">
                            <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] uppercase font-bold text-slate-500">ISO 9001</span>
                            <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] uppercase font-bold text-slate-500">GPTW</span>
                        </div>
                    </div>

                    {/* Column 2: Solutions */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Soluções por Setor</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" />Tecnologia & Inovação</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" />Manufatura & Indústria</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" />Serviços Financeiros</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" />Varejo & E-commerce</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" />Saúde & Farmacêutica</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" />Energia & Utilities</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Recursos & Expertise</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Nossa Metodologia</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Estudos de Caso</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Whitepapers & Reports</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Blog Insights</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Carreiras (Vagas Abertas)</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Termos de Uso</Link></li>
                            <li><Link href="#" className="hover:text-blue-500 transition-colors">Política de Privacidade</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contato Executivo</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-600 mt-1 shrink-0" />
                                <span>
                                    Av. Eng. Luís Carlos Berrini, 1000<br />
                                    25º Andar - Brooklin<br />
                                    São Paulo - SP
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-600 shrink-0" />
                                <span>+55 (11) 3000-0000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-600 shrink-0" />
                                <span>contato@strategic.com.br</span>
                            </li>
                            <li className="text-xs text-slate-500 pt-2">
                                Segunda a Sexta, 08h às 18h<br />
                                Escritórios em SP, RJ e BH
                            </li>
                            <li className="pt-2">
                                <Link href="/sites-institucionais/premium/consultoria-empresarial/contato" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-blue-900/50">
                                    Fale com um Especialista <ArrowRight size={16} />
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Section: Copyright & Legal */}
            <div className="bg-slate-950 border-t border-slate-900 py-10">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-xs text-slate-500 text-center md:text-left space-y-2">
                            <p>© {currentYear} Consultoria Empresarial Estratégica®. Todos os direitos reservados.</p>
                            <p className="opacity-60 max-w-xl">
                                Empresa registrada sob CNPJ XX.XXX.XXX/0001-XX. Soluções personalizadas com base em análise diagnóstica.
                                Resultados passados não garantem resultados futuros. Metodologias proprietárias protegidas por direitos autorais.
                            </p>
                        </div>
                        <div className="flex gap-6 text-xs font-medium text-slate-500">
                            <Link href="#" className="hover:text-blue-400 transition-colors">Privacidade</Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors">Compliance</Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors">Ética</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
