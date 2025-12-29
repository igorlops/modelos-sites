import Link from "next/link";
import { Sun, Facebook, Instagram, Linkedin, Youtube, ArrowRight, MapPin, Phone, Mail, Clock, Download, Calculator, FileText, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-sky-950 to-slate-900 text-slate-300 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 md:px-10 lg:px-20 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16 border-b border-sky-900/50 pb-16">

                    {/* Coluna 1: Institucional */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative">
                                <Sun size={28} className="text-amber-500" />
                                <Zap size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-900 fill-sky-900" />
                            </div>
                            <span className="text-xl font-extrabold tracking-tighter text-white">
                                SOLAR<span className="text-sky-400">PRO</span>
                            </span>
                        </div>

                        <p className="text-sm leading-relaxed text-slate-400">
                            Líder nacional em soluções de energia fotovoltaica. Transformamos a luz do sol em economia real e sustentabilidade para residências, empresas e indústrias em todo o Brasil.
                        </p>

                        <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                            <span className="px-2 py-1 bg-emerald-950/50 rounded border border-emerald-900">ANEEL</span>
                            <span className="px-2 py-1 bg-emerald-950/50 rounded border border-emerald-900">INMETRO</span>
                            <span className="px-2 py-1 bg-emerald-950/50 rounded border border-emerald-900">ISO 9001</span>
                        </div>

                        <div className="flex gap-4 pt-4">
                            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-sky-900/30 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-sky-950 transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold mb-6 text-lg">Institucional</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: "Sobre Nós", path: "/sobre" },
                                { name: "Nosso Portfólio", path: "/portfolio" },
                                { name: "Metodologia", path: "/processo" },
                                { name: "Blog & Notícias", path: "/blog" },
                                { name: "Trabalhe Conosco", path: "#" },
                                { name: "Seja um Integrador", path: "#" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={`/sites-institucionais/premium/energia-solar${link.path}`}
                                        className="flex items-center group hover:text-amber-400 transition-colors"
                                    >
                                        <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-500" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 3: Soluções */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold mb-6 text-lg">Soluções Solar</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="hover:text-amber-400 transition-colors cursor-pointer flex gap-2 items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Energia Residencial
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer flex gap-2 items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Energia Comercial
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer flex gap-2 items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Usinas Industriais
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer flex gap-2 items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Energia Rural (Agro)
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer flex gap-2 items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Carport Solar
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer flex gap-2 items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Manutenção & Limpeza
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 4: Ferramentas */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold mb-6 text-lg">Recursos</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/sites-institucionais/premium/energia-solar/calculadora" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                                    <Calculator size={16} className="text-amber-500" /> Calculadora Solar
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                                    <FileText size={16} className="text-amber-500" /> Guia de Financiamento
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                                    <Download size={16} className="text-amber-500" /> Catálogo de Produtos
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-8 p-4 bg-sky-900/30 rounded-xl border border-sky-800">
                            <p className="text-xs text-slate-400 mb-2 font-bold uppercase">Resultado Garantido</p>
                            <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                                <ShieldCheck size={20} />
                                Garantia de 25 Anos
                            </div>
                        </div>
                    </div>

                    {/* Coluna 5: Contato */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold mb-6 text-lg">Atendimento</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 group">
                                <Phone size={18} className="text-amber-500 mt-1" />
                                <div>
                                    <span className="block text-white font-bold">0800 123 4567</span>
                                    <span className="text-slate-500 text-xs">Central 24h</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <Mail size={18} className="text-amber-500 mt-1" />
                                <span className="text-slate-400 group-hover:text-white transition-colors break-all">contato@solarpro.com.br</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <Clock size={18} className="text-amber-500 mt-1" />
                                <div>
                                    <span className="text-slate-400 block">Seg - Sex: 08h às 19h</span>
                                    <span className="text-slate-400 block">Sáb: 09h às 14h</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <MapPin size={18} className="text-amber-500 mt-1" />
                                <span className="text-slate-400">Av. Paulista, 1000 - SP</span>
                            </li>
                        </ul>

                        <Link href="/sites-institucionais/premium/energia-solar/contato" className="mt-6 block w-full py-2 bg-amber-500 hover:bg-amber-400 text-sky-950 font-bold text-center rounded-lg transition-colors shadow-lg shadow-amber-900/20">
                            Falar com Consultor
                        </Link>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
                    <div className="text-center md:text-left space-y-1">
                        <p className="font-bold text-slate-400">EnergiaSolar Pro © {currentYear}. Todos os direitos reservados.</p>
                        <p>CNPJ: 00.000.000/0001-00 | Av. Paulista, 1000 - São Paulo/SP</p>
                        <p className="max-w-2xl mt-2 opacity-80">
                            Empresa homologada ANEEL. Instalações certificadas INMETRO. Garantia de 25 anos nos módulos fotovoltaicos.
                            Informações técnicas sujeitas a verificação in loco. Valores e prazos sob consulta.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 font-medium">
                        <Link href="#" className="hover:text-amber-400 transition-colors">Política de Privacidade</Link>
                        <Link href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</Link>
                        <Link href="#" className="hover:text-amber-400 transition-colors">Garantias</Link>
                        <Link href="#" className="hover:text-amber-400 transition-colors">Portal do Cliente</Link>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-slate-400 text-[10px] uppercase tracking-widest border border-white/5">
                        Energia Limpa para um Futuro Sustentável ☀️
                    </span>
                </div>
            </div>
        </footer>
    );
}
