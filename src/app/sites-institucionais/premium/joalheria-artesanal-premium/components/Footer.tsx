import Link from "next/link";
import {
    Gem, MapPin, Phone, Mail, Instagram, Facebook,
    Linkedin, Award, ShieldCheck, ArrowRight, Clock,
    Truck, PenTool
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-950 text-stone-400 font-sans border-t-4 border-amber-700 relative z-20">

            {/* 1. CTA SUPERIOR LUXO */}
            <div className="bg-stone-900 border-b border-stone-800 py-20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 blur-[100px] rounded-full group-hover:bg-amber-600/20 transition-all duration-1000" />

                <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                    <div className="max-w-xl">
                        <h2 className="font-playfair text-4xl md:text-5xl italic text-white mb-4">
                            Criar sua Joia dos Sonhos
                        </h2>
                        <p className="text-stone-300/80 text-lg font-light leading-relaxed">
                            Do esboço à cravação, participe de cada etapa da materialização de uma peça única, feita exclusivamente para sua história.
                        </p>
                    </div>
                    <Link href="/sites-institucionais/premium/joalheria-artesanal-premium/contato" className="bg-amber-700 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(217,119,6,0.3)] duration-500">
                        Iniciar Projeto Bespoke
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-10">

                    {/* COLUNA 1 - MARCA E SLOGAN */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="flex flex-col items-start">
                            <div className="font-playfair font-black text-2xl text-white leading-none tracking-tighter mb-2">
                                L'ART D'OR
                            </div>
                            <span className="text-[9px] text-amber-600 font-bold uppercase tracking-[0.3em]">Atelier depuis 1985</span>
                        </div>

                        <p className="text-sm leading-relaxed text-stone-500 font-light text-justify">
                            Preservando as técnicas da alta joalheria tradicional francesa e integrando o design contemporâneo. Cada peça é um testamento de paciência, precisão e paixão.
                        </p>

                        <div className="flex gap-4 pt-2">
                            {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:border-amber-700 hover:text-amber-600 transition-all duration-500 hover:bg-stone-900">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* COLUNA 2 - CATEGORIAS */}
                    <div className="lg:col-span-1">
                        <h4 className="font-playfair italic text-xl text-white mb-8 relative inline-block">
                            Coleções
                            <span className="absolute -bottom-2 left-0 w-1/2 h-px bg-amber-700"></span>
                        </h4>
                        <ul className="space-y-4 font-light text-sm">
                            {[
                                "Anéis Solitários", "Alianças de Casamento",
                                "Alta Joalheria", "Gemas Preciosas",
                                "Pulseiras & Colares", "Coleção Masculina"
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link href="#" className="text-stone-400 hover:text-amber-500 hover:pl-2 transition-all duration-300 block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUNA 3 - INSTITUCIONAL */}
                    <div className="lg:col-span-1">
                        <h4 className="font-playfair italic text-xl text-white mb-8 relative inline-block">
                            O Atelier
                            <span className="absolute -bottom-2 left-0 w-1/2 h-px bg-amber-700"></span>
                        </h4>
                        <ul className="space-y-4 font-light text-sm">
                            {[
                                { name: "Nossa História e Arte", path: "/sobre" },
                                { name: "Gemologia & Ética", path: "/sobre" },
                                { name: "Sustentabilidade", path: "/sobre" },
                                { name: "Processo Criativo", path: "/processo" },
                                { name: "Artigos do Universo", path: "/journal" },
                                { name: "Carreiras", path: "#" }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link href={`/sites-institucionais/premium/joalheria-artesanal-premium${item.path}`} className="text-stone-400 hover:text-amber-500 hover:pl-2 transition-all duration-300 block">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUNA 4 - PRODUTOS E SERVIÇOS */}
                    <div className="lg:col-span-1">
                        <h4 className="font-playfair italic text-xl text-white mb-8 relative inline-block">
                            Serviços
                            <span className="absolute -bottom-2 left-0 w-1/2 h-px bg-amber-700"></span>
                        </h4>
                        <ul className="space-y-4 font-light text-sm">
                            {[
                                { name: "Concierge Pessoal", icon: Gem },
                                { name: "Limpeza e Polimento", icon: ShieldCheck },
                                { name: "Ajustes de Medida", icon: PenTool },
                                { name: "Avaliação de Joias", icon: Award },
                                { name: "Entrega Segura", icon: Truck }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3 items-center group cursor-default">
                                    <item.icon size={14} className="text-stone-600 group-hover:text-amber-600 transition-colors" />
                                    <span className="text-stone-400 group-hover:text-stone-200 transition-colors">{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUNA 5 - LOCALIZAÇÃO E CONTATO */}
                    <div className="lg:col-span-1">
                        <h4 className="font-playfair italic text-xl text-white mb-8 relative inline-block">
                            Visite-nos
                            <span className="absolute -bottom-2 left-0 w-1/2 h-px bg-amber-700"></span>
                        </h4>
                        <div className="space-y-6 font-light text-sm">
                            <div className="flex gap-4">
                                <MapPin size={20} className="text-amber-700 shrink-0 mt-1" />
                                <div>
                                    <p className="text-white font-medium mb-1">Atelier Jardins</p>
                                    <p className="text-stone-500 leading-relaxed">Rua Oscar Freire, 1234<br />São Paulo - SP</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Clock size={20} className="text-amber-700 shrink-0 mt-1" />
                                <div>
                                    <p className="text-white font-medium mb-1">Horário (Agendado)</p>
                                    <p className="text-stone-500 leading-relaxed">Seg - Sex: 10h às 19h<br />Sáb: 10h às 15h</p>
                                </div>
                            </div>
                            <div className="pt-6 mt-6 border-t border-stone-800 flex gap-4">
                                <div className="h-8 w-12 bg-stone-800 rounded flex items-center justify-center text-[10px] text-stone-500 font-bold border border-stone-700">GIA</div>
                                <div className="h-8 w-12 bg-stone-800 rounded flex items-center justify-center text-[10px] text-stone-500 font-bold border border-stone-700">18K</div>
                                <div className="h-8 w-12 bg-stone-800 rounded flex items-center justify-center text-[10px] text-stone-500 font-bold border border-stone-700">IBGM</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* COPYRIGHT LEGAL */}
            <div className="bg-stone-950 py-12 border-t border-stone-900 text-[10px] text-stone-600 leading-relaxed font-light">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8 items-end">
                    <div className="max-w-2xl text-justify space-y-2">
                        <p>
                            © {currentYear} L'Art d'Or Atelier de Joalheria S.A. - CNPJ 00.123.456/0001-78. Todos os direitos reservados.
                            As fotos aqui veiculadas, logotipo e marca são de propriedade exclusiva. É vedada a reprodução total ou parcial sob pena da lei.
                        </p>
                        <p>
                            Garantia Vitalícia: Todas as nossas joias acompanham certificado de garantia eterna sobre a autenticidade dos materiais (ouro 18k e gemas naturais).
                            Defeitos de fabricação são cobertos por 1 ano. Danos por mau uso, quedas ou contato com químicos não são cobertos. As pedras preciosas são naturais e podem apresentar inclusões características que atestam sua autenticidade.
                        </p>
                    </div>
                    <div className="flex gap-6 font-medium tracking-widest uppercase">
                        <Link href="#" className="hover:text-amber-600 transition-colors">Termos & Garantia</Link>
                        <Link href="#" className="hover:text-amber-600 transition-colors">Política de Privacidade</Link>
                        <Link href="#" className="hover:text-amber-600 transition-colors">Mapa do Site</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
