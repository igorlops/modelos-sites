import Link from "next/link";
import {
    Scale, MapPin, Phone, Mail, Linkedin, Instagram,
    Clock, ShieldCheck, FileText, ArrowRight, Gavel
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-stone-300 font-sans border-t-4 border-amber-800 relative z-20">

            {/* 1. SEÇÃO DE COMPROMISSO ÉTICO */}
            <div className="bg-slate-900 py-10 border-b border-slate-800">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 text-center">
                    <Scale size={32} className="mx-auto text-amber-700 mb-4 opacity-80" />
                    <blockquote className="font-serif text-xl md:text-2xl text-stone-200 italic max-w-3xl mx-auto leading-relaxed">
                        "A justiça sustenta-se na verdade, na honra e na integridade.
                        Nossa missão é defender o direito com a máxima excelência técnica."
                    </blockquote>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                    {/* COLUNA 1 - Identidade */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-700/10 flex items-center justify-center rounded border border-amber-700/30">
                                <Gavel size={20} className="text-amber-600" />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold text-stone-100 tracking-wide">IMPERIUM</h3>
                                <p className="text-[10px] text-amber-600 uppercase tracking-widest font-bold">Advocacia Premium</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-sm leading-relaxed text-slate-400">
                                Fundado em 1995, o escritório Imperium se consolidou como uma referência nacional em advocacia empresarial, unindo a tradição do direito à agilidade exigida pelo mercado moderno.
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="bg-amber-900/30 text-amber-500 text-[10px] font-bold px-2 py-1 rounded border border-amber-900/50 uppercase">OAB/SP 12.345</span>
                                <span className="bg-slate-800 text-slate-400 text-[10px] font-bold px-2 py-1 rounded border border-slate-700 uppercase">Desde 1995</span>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-slate-800/50">
                            <Link href="#" className="w-9 h-9 flex items-center justify-center rounded bg-slate-900 border border-slate-800 hover:border-amber-600 hover:text-amber-500 transition-all duration-300">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="w-9 h-9 flex items-center justify-center rounded bg-slate-900 border border-slate-800 hover:border-amber-600 hover:text-amber-500 transition-all duration-300">
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* COLUNA 2 - Áreas de Atuação */}
                    <div>
                        <h4 className="font-serif text-stone-100 text-lg font-semibold mb-8 flex items-center gap-2">
                            Atuação Jurídica
                            <span className="h-px flex-1 bg-slate-800"></span>
                        </h4>
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-xs font-bold text-amber-700 uppercase mb-3 tracking-wider">Consultivo</h5>
                                <ul className="space-y-2.5">
                                    <li><Link href="/sites-institucionais/premium/advocacia-empresarial/servicos" className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"><ArrowRight size={10} className="text-slate-600 group-hover:text-amber-600" /> Empresarial e Societário</Link></li>
                                    <li><Link href="/sites-institucionais/premium/advocacia-empresarial/servicos" className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"><ArrowRight size={10} className="text-slate-600 group-hover:text-amber-600" /> Contratos Complexos</Link></li>
                                    <li><Link href="/sites-institucionais/premium/advocacia-empresarial/servicos" className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"><ArrowRight size={10} className="text-slate-600 group-hover:text-amber-600" /> Compliance e LGPD</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-xs font-bold text-amber-700 uppercase mb-3 tracking-wider">Contencioso</h5>
                                <ul className="space-y-2.5">
                                    <li><Link href="/sites-institucionais/premium/advocacia-empresarial/servicos" className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"><ArrowRight size={10} className="text-slate-600 group-hover:text-amber-600" /> Cível Estratégico</Link></li>
                                    <li><Link href="/sites-institucionais/premium/advocacia-empresarial/servicos" className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"><ArrowRight size={10} className="text-slate-600 group-hover:text-amber-600" /> Trabalhista Patronal</Link></li>
                                    <li><Link href="/sites-institucionais/premium/advocacia-empresarial/servicos" className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"><ArrowRight size={10} className="text-slate-600 group-hover:text-amber-600" /> Recuperação Judicial</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA 3 - Links Úteis */}
                    <div>
                        <h4 className="font-serif text-stone-100 text-lg font-semibold mb-8 flex items-center gap-2">
                            Acesso Rápido
                            <span className="h-px flex-1 bg-slate-800"></span>
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Artigos Jurídicos", path: "/blog" },
                                { name: "Casos de Sucesso", path: "/portfolio" },
                                { name: "Nossa Metodologia", path: "/processo" },
                                { name: "Política de Privacidade", path: "#" },
                                { name: "Termos de Uso", path: "#" },
                                { name: "Código de Ética OAB", path: "#" }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link href={`/sites-institucionais/premium/advocacia-empresarial${item.path}`} className="text-sm text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2">
                                        <FileText size={12} className="opacity-50" /> {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 rounded bg-slate-900 border border-slate-800">
                            <p className="text-xs text-slate-400 font-semibold mb-2 flex items-center gap-2"><ShieldCheck size={14} className="text-green-500" /> Site Seguro</p>
                            <p className="text-[10px] text-slate-500 leading-tight">Todas as informações transmitidas são criptografadas (SSL) para garantir sigilo total.</p>
                        </div>
                    </div>

                    {/* COLUNA 4 - Contato */}
                    <div>
                        <h4 className="font-serif text-stone-100 text-lg font-semibold mb-8 flex items-center gap-2">
                            Atendimento
                            <span className="h-px flex-1 bg-slate-800"></span>
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-amber-700 mt-1 shrink-0" size={18} />
                                <div>
                                    <p className="font-bold text-stone-200 text-sm">Sede São Paulo</p>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Av. Paulista, 1000, 15º Andar<br />
                                        Jardins, São Paulo - SP<br />
                                        CEP: 01310-100
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="text-amber-700 mt-1 shrink-0" size={18} />
                                <div>
                                    <p className="font-bold text-stone-200 text-sm">Horário</p>
                                    <p className="text-sm text-slate-400">
                                        Seg - Sex: 09h às 18h<br />
                                        <span className="text-xs opacity-70 italic">Necessário agendamento</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="text-amber-700 mt-1 shrink-0" size={18} />
                                <div>
                                    <p className="font-bold text-stone-200 text-sm">Contatos</p>
                                    <p className="text-sm text-slate-400">+55 (11) 3000-0000</p>
                                    <p className="text-sm text-slate-400 truncate">contato@imperium.adv.br</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* COPYRIGHT LEGAL EXTENSO */}
            <div className="bg-slate-900 py-8 border-t border-slate-800 text-[10px] md:text-xs text-slate-500 leading-relaxed">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="mb-4 text-justify opacity-60">
                        © {currentYear} IMPERIUM Advocacia Empresarial. Todos os direitos reservados. Sociedade de Advogados inscrita na OAB/SP sob nº 12.345.
                        A atuação deste escritório pauta-se estritamente pelas normas do Estatuto da Advocacia e a OAB (Lei Federal nº 8.906/94) e pelo Código de Ética e Disciplina.
                        As informações contidas neste website têm caráter meramente informativo e não constituem consultoria jurídica ou parecer legal. O acesso ao conteúdo não estabelece, por si só, relação advogado-cliente.
                        Para análise de casos concretos, é indispensável a consulta pessoal com um de nossos advogados. Garantimos sigilo absoluto e confidencialidade em todas as interações, nos termos do Art. 7º, inc. II da Lei 8.906/94.
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex gap-4">
                            <span className="font-bold">Membros de:</span>
                            <span className="hover:text-stone-300 transition-colors cursor-default">OAB/SP</span>
                            <span className="text-slate-700">|</span>
                            <span className="hover:text-stone-300 transition-colors cursor-default">AASP</span>
                            <span className="text-slate-700">|</span>
                            <span className="hover:text-stone-300 transition-colors cursor-default">CESA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Advocacia com tradição, ética e resultado</span>
                            <Scale size={12} className="text-amber-700" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
