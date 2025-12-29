'use client';

import { theme } from '../theme';
import { Mail, Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-slate-900 text-white">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    <div className="space-y-8">
                        <span className="text-cyan-400 font-bold uppercase tracking-wider text-sm">Localização</span>
                        <h2 className="text-4xl font-bold leading-tight">Venha nos conhecer.</h2>
                        <p className="text-slate-400 text-lg">
                            Estamos localizados no coração da cidade, com estacionamento próprio e fácil acesso.
                        </p>

                        <div className="space-y-6 pt-4">
                            {[
                                { icon: <Phone />, title: "Telefone", desc: "(11) 3333-4444" },
                                { icon: <MapPin />, title: "Endereço", desc: "Av. Europa, 888 - Jardins, São Paulo" },
                                { icon: <Mail />, title: "Email", desc: "contato@luminous.com.br" },
                                { icon: <Clock />, title: "Horário", desc: "Seg-Sex: 08h-20h | Sáb: 09h-13h" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center group">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-900 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">{item.title}</p>
                                        <p className="text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-8 border-t border-slate-800">
                            <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <form className="bg-white rounded-3xl p-8 text-slate-800 shadow-2xl h-fit">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900">Mande uma mensagem</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Nome Completo" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none transition-colors" />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="tel" placeholder="Telefone" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none transition-colors" />
                                <input type="email" placeholder="Email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none transition-colors" />
                            </div>
                            <textarea rows={4} placeholder="Como podemos ajudar?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none transition-colors"></textarea>
                            <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all">
                                ENVIAR MENSAGEM
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}
