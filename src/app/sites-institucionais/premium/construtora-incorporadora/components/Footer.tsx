import Link from "next/link";
import {
    Building2, MapPin, Phone, Mail, Instagram, Facebook,
    Linkedin, Youtube, Clock, Award, ShieldCheck,
    Home, ArrowRight
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 font-sans border-t-[6px] border-teal-700 relative z-20">

            {/* 1. CALL TO ACTION SUPERIOR */}
            <div className="bg-gradient-to-r from-teal-900 to-slate-900 relative overflow-hidden py-16 md:py-20 border-b border-slate-800">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                    <div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-2">
                            Pronto para Realizar o Sonho da Casa Própria?
                        </h2>
                        <p className="text-teal-100/80 text-lg max-w-xl">
                            Conheça nossos lançamentos e encontre o imóvel perfeito para sua família.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/sites-institucionais/premium/construtora-incorporadora/servicos" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-900/40 transition-all hover:-translate-y-1">
                            Ver Lançamentos
                        </Link>
                        <Link href="/sites-institucionais/premium/construtora-incorporadora/contato" className="border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
                            Falar com Consultor
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

                    {/* COLUNA 1 - IDENTIDADE */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center">
                                <Building2 className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="font-montserrat font-bold text-xl text-white leading-none">CONSTRUTORA</h3>
                                <span className="text-[10px] text-teal-500 font-bold uppercase tracking-widest">Premium</span>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed text-slate-400">
                            Há 25 anos transformando a paisagem urbana e a vida de milhares de famílias. Comprometimento, qualidade e inovação em cada metro quadrado construído.
                        </p>

                        <div className="flex gap-3">
                            {[Instagram, Facebook, Youtube, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-700 hover:text-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* COLUNA 2 - EMPREENDIMENTOS */}
                    <div className="lg:col-span-1">
                        <h4 className="font-montserrat font-bold text-white text-lg mb-8 flex items-center gap-2">
                            Empreendimentos
                            <span className="h-0.5 w-8 bg-teal-700"></span>
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Reserva Jardim", status: "Lançamento", color: "text-orange-500" },
                                { name: "Alto da Colina", status: "Em Obras", color: "text-teal-500" },
                                { name: "Vila Imperial", status: "Pronto", color: "text-green-500" },
                                { name: "Pátio Central", status: "Últimas Unidades", color: "text-orange-500" },
                                { name: "Horizonte Azul", status: "Em Obras", color: "text-teal-500" }
                            ].map((emp, idx) => (
                                <li key={idx}>
                                    <Link href="/sites-institucionais/premium/construtora-incorporadora/servicos" className="group block">
                                        <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{emp.name}</span>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className={`text-[10px] uppercase font-bold ${emp.color}`}>{emp.status}</span>
                                            <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-500" />
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link href="/sites-institucionais/premium/construtora-incorporadora/servicos" className="mt-6 inline-block text-xs font-bold text-teal-500 hover:text-white transition-colors border-b border-teal-500/30 pb-0.5">
                            Ver Todos os Imóveis
                        </Link>
                    </div>

                    {/* COLUNA 3 - INSTITUCIONAL */}
                    <div className="lg:col-span-1">
                        <h4 className="font-montserrat font-bold text-white text-lg mb-8 flex items-center gap-2">
                            A Construtora
                            <span className="h-0.5 w-8 bg-teal-700"></span>
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Nossa História", path: "/sobre" },
                                { name: "Processo de Compra", path: "/processo" },
                                { name: "Obras Entregues", path: "/portfolio" },
                                { name: "Blog Imobiliário", path: "/blog" },
                                { name: "Trabalhe Conosco", path: "/contato" },
                                { name: "Portal do Cliente", path: "#" },
                                { name: "2ª Via de Boleto", path: "#" }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link href={`/sites-institucionais/premium/construtora-incorporadora${item.path}`} className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">
                                        <span className="w-1 h-1 rounded-full bg-slate-600"></span> {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUNA 4 - CENTRAL VENDAS */}
                    <div className="lg:col-span-1">
                        <h4 className="font-montserrat font-bold text-white text-lg mb-8 flex items-center gap-2">
                            Central de Vendas
                            <span className="h-0.5 w-8 bg-teal-700"></span>
                        </h4>
                        <div className="space-y-6">
                            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Compre pelo Telefone</p>
                                <p className="text-xl font-bold text-white mb-1">0800 123 4567</p>
                                <p className="text-sm text-teal-500 font-medium">Todos os dias 08h-20h</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center shrink-0 text-green-500 mt-1">
                                    <Phone size={14} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">WhatsApp Vendas</p>
                                    <p className="text-sm text-slate-400">(11) 99999-9999</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-slate-400 mt-1">
                                    <Mail size={14} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Email</p>
                                    <p className="text-sm text-slate-400 text-xs">vendas@construtora.com.br</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA 5 - CERTIFICAÇÕES */}
                    <div className="lg:col-span-1">
                        <h4 className="font-montserrat font-bold text-white text-lg mb-8 flex items-center gap-2">
                            Qualidade
                            <span className="h-0.5 w-8 bg-teal-700"></span>
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 rounded bg-white text-slate-900">
                                <Award className="text-teal-700" size={24} />
                                <div>
                                    <p className="font-bold text-xs leading-tight">PBQP-H NÍVEL A</p>
                                    <p className="text-[10px] text-slate-500">Certificação Máxima</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded bg-white text-slate-900">
                                <ShieldCheck className="text-teal-700" size={24} />
                                <div>
                                    <p className="font-bold text-xs leading-tight">ISO 9001</p>
                                    <p className="text-[10px] text-slate-500">Gestão de Qualidade</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-800">
                                <p className="text-[10px] uppercase text-slate-500 mb-2 font-bold">Parceiros Financeiros</p>
                                <div className="flex gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
                                    <div className="h-6 w-12 bg-slate-700 rounded"></div>
                                    <div className="h-6 w-12 bg-slate-700 rounded"></div>
                                    <div className="h-6 w-12 bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* COPYRIGHT LEGAL EXTENSO */}
            <div className="bg-slate-950 py-10 border-t border-slate-900 text-[10px] md:text-xs text-slate-500 leading-relaxed font-normal">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 text-justify">
                            <p className="mb-4">
                                © {currentYear} Construtora Incorporadora Premium LTDA. - CNPJ 12.345.678/0001-90. Empresa registrada no CRECI-SP sob nº 12345-J.
                                Todos os direitos reservados.
                            </p>
                            <p className="opacity-70">
                                Imóveis sujeitos à disponibilidade. Plantas, valores, prazos e formas de pagamento podem sofrer alterações sem aviso prévio.
                                As imagens apresentadas neste site, incluindo perspectivas artísticas, maquetes eletrônicas e fotos de decorados, são meramente ilustrativas e possuem caráter de sugestão de decoração.
                                Os móveis, eletrodomésticos e objetos de decoração não integram o preço do imóvel. O memorial descritivo do empreendimento, disponível no estande de vendas, prevalecerá sobre quaisquer materiais publicitários.
                                As simulações de financiamento e valores de parcelas são estimativas e estão sujeitas à análise de crédito e aprovação pelo agente financeiro.
                                Registro de Incorporação devidamente matriculado no Cartório de Registro de Imóveis competente de cada empreendimento.
                                A comercialização apenas será iniciada após o Registro de Incorporação. Consulte sempre um corretor credenciado.
                            </p>
                            <div className="flex gap-4 mt-4 text-teal-600 font-bold">
                                <Link href="#" className="hover:text-white">Política de Privacidade</Link>
                                <Link href="#" className="hover:text-white">Termos de Uso</Link>
                                <Link href="#" className="hover:text-white">Portal da Transparência</Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:items-end gap-2">
                            <p className="font-bold text-slate-400">Realizando o sonho da casa própria desde 1999 🏡</p>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="px-2 py-1 border border-slate-700 rounded text-[10px] text-slate-400">CRECI 12345-J</span>
                                <span className="px-2 py-1 border border-slate-700 rounded text-[10px] text-slate-400">ABECIP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
