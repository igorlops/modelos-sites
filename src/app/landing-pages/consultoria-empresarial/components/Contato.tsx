'use client';
import { theme } from '../theme';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="max-w-5xl mx-auto">
                    <div className="bg-slate-900 rounded-3xl p-16 text-white mb-12">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Vamos conversar sobre seu desafio?</h2>
                            <p className="text-slate-400 text-lg">Atendimento executivo. Ligamos de volta em até 2h úteis.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                { icon: <Phone className="w-8 h-8" />, label: "Telefone", info: "(11) 3000-9000", sub: "Seg-Sex 9h-18h" },
                                { icon: <Mail className="w-8 h-8" />, label: "Email", info: "contato@strategia.com.br", sub: "Resposta em 24h" },
                                { icon: <MapPin className="w-8 h-8" />, label: "Escritório", info: "Faria Lima, 3000 - SP", sub: "Reuniões presenciais" }
                            ].map((c, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        {c.icon}
                                    </div>
                                    <p className="text-slate-400 text-sm mb-1">{c.label}</p>
                                    <p className="font-bold text-xl mb-1">{c.info}</p>
                                    <p className="text-slate-500 text-xs">{c.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form className="bg-slate-50 p-10 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-8 text-slate-900">Ou preencha o formulário</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <input type="text" placeholder="Nome do executivo" className="bg-white border border-slate-200 rounded-lg px-5 py-4 focus:border-slate-400 focus:outline-none" />
                            <input type="text" placeholder="Empresa" className="bg-white border border-slate-200 rounded-lg px-5 py-4 focus:border-slate-400 focus:outline-none" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <input type="email" placeholder="Email corporativo" className="bg-white border border-slate-200 rounded-lg px-5 py-4 focus:border-slate-400 focus:outline-none" />
                            <input type="tel" placeholder="Telefone" className="bg-white border border-slate-200 rounded-lg px-5 py-4 focus:border-slate-400 focus:outline-none" />
                        </div>
                        <textarea rows={4} placeholder="Descreva brevemente o desafio da empresa..." className="w-full bg-white border border-slate-200 rounded-lg px-5 py-4 focus:border-slate-400 focus:outline-none resize-none mb-6"></textarea>
                        <button className="w-full bg-slate-900 text-white font-bold py-5 rounded-lg hover:bg-slate-800 text-lg">
                            Enviar Solicitação
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
