"use client";

import Link from "next/link";
import {
    Sparkles, Instagram, Facebook, Youtube, Send,
    MapPin, Phone, Mail, Clock, ShieldCheck, Heart
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-neutral-900 via-rose-950 to-neutral-900 text-rose-100/90 relative pt-32 overflow-hidden z-99">

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            {/* Newsletter Section */}
            <div className="relative top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-6xl bg-rose-50 rounded-[3rem] shadow-2xl p-10 md:p-14 z-20 flex flex-col md:flex-row items-center justify-between gap-10 z-99">
                <div className="md:w-1/2">
                    <h3 className="text-3xl md:text-4xl font-serif text-rose-950 font-bold mb-4">
                        Dicas Exclusivas de Beleza
                    </h3>
                    <p className="text-rose-800/80 text-lg">
                        Inscreva-se e receba novidades sobre tratamentos e bem-estar.
                    </p>
                </div>
                <div className="md:w-1/2 w-full flex gap-4">
                    <input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        className="flex-1 bg-white border border-rose-200 rounded-full px-6 py-4 text-neutral-600 focus:outline-none focus:ring-2 focus:ring-rose-400 placeholder-rose-300"
                    />
                    <button className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-600/30">
                        Quero Receber
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 border-b border-white/5 pb-10">

                    {/* Col 1: Brand */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <Sparkles className="text-amber-400" size={24} />
                            <span className="font-serif text-2xl font-bold text-white tracking-widest">
                                LUMIÈRE
                            </span>
                        </div>
                        <p className="font-light leading-loose text-rose-100/70">
                            Transformando vidas através da autoestima. Nossa missão é revelar a beleza natural de cada paciente com tecnologia de ponta e acolhimento humano.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-rose-600 hover:border-rose-600 transition-all group">
                                <Instagram size={18} className="group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-rose-600 hover:border-rose-600 transition-all group">
                                <Facebook size={18} className="group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-rose-600 hover:border-rose-600 transition-all group">
                                <Youtube size={18} className="group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Tratamentos */}
                    <div>
                        <h4 className="text-white font-serif font-bold text-lg mb-8 relative inline-block">
                            Tratamentos
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full" />
                        </h4>
                        <ul className="space-y-4 text-sm font-medium tracking-wide">
                            <li><Link href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-rose-500 rounded-full" /> Harmonização Facial</Link></li>
                            <li><Link href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full" /> Bioestimuladores de Colágeno</Link></li>
                            <li><Link href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Ultraformer III</Link></li>
                            <li><Link href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-rose-500 rounded-full" /> Laser Lavieen</Link></li>
                            <li><Link href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full" /> Estética Íntima</Link></li>
                            <li><Link href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Tricologia Médica</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Institucional */}
                    <div>
                        <h4 className="text-white font-serif font-bold text-lg mb-8 relative inline-block">
                            A Clínica
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full" />
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/sites-institucionais/premium/clinica-estetica-avancada/sobre" className="hover:text-white transition-colors">Quem Somos</Link></li>
                            <li><Link href="/sites-institucionais/premium/clinica-estetica-avancada/corpo-clinico" className="hover:text-white transition-colors">Corpo Clínico</Link></li>
                            <li><Link href="/sites-institucionais/premium/clinica-estetica-avancada/processo" className="hover:text-white transition-colors">Nossa Metodologia</Link></li>
                            <li><Link href="/sites-institucionais/premium/clinica-estetica-avancada/depoimentos" className="hover:text-white transition-colors">Histórias de Sucesso</Link></li>
                            <li><Link href="/sites-institucionais/premium/clinica-estetica-avancada/blog" className="hover:text-white transition-colors">Lumière News</Link></li>
                            <li><Link href="/sites-institucionais/premium/clinica-estetica-avancada/vagas" className="hover:text-white transition-colors">Trabalhe Conosco</Link></li>
                        </ul>
                    </div>

                    {/* Col 4: Contato VIP */}
                    <div>
                        <h4 className="text-white font-serif font-bold text-lg mb-8 relative inline-block">
                            Concierge
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full" />
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-rose-900/50 flex items-center justify-center shrink-0">
                                    <MapPin className="text-rose-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-white font-bold">Jardins, São Paulo</p>
                                    <p className="text-xs text-white/60">R. Oscar Freire, 1200 - 5º Andar</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-rose-900/50 flex items-center justify-center shrink-0">
                                    <Phone className="text-rose-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-white font-bold">(11) 99999-8888</p>
                                    <p className="text-xs text-white/60">Atendimento Exclusivo WhatsApp</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-rose-900/50 flex items-center justify-center shrink-0">
                                    <Clock className="text-rose-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-white font-bold">Seg - Sáb: 08h às 20h</p>
                                    <p className="text-xs text-white/60">Atendimento com Hora Marcada</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-xs text-white/40 border-t border-white/5">
                    <div className="text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} Lumière Esthétique. Todos os direitos reservados.</p>
                        <p className="mt-2 text-[10px] max-w-xl">
                            Diretora Técnica: Dra. Sofia Martini CRM/SP 123456. Responsável Técnica: Dra. Julia Costa CRBM 7890.
                            Os resultados podem variar de pessoa para pessoa. Imagens meramente ilustrativas.
                        </p>
                    </div>

                    <div className="flex gap-6 items-center">
                        <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"><ShieldCheck size={14} /> Política de Privacidade</span>
                        <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"><ShieldCheck size={14} /> Termos de Uso</span>
                    </div>
                </div>

                {/* Floating Badges */}
                <div className="mt-12 flex justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="border border-white/50 px-3 py-1 text-[10px] tracking-widest uppercase font-bold text-white rounded">ANVISA</div>
                    <div className="border border-white/50 px-3 py-1 text-[10px] tracking-widest uppercase font-bold text-white rounded">SBCD</div>
                    <div className="border border-white/50 px-3 py-1 text-[10px] tracking-widest uppercase font-bold text-white rounded">ABEST</div>
                </div>
            </div>
        </footer>
    );
}
