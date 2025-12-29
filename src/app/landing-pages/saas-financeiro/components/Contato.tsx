'use client';
import { theme } from '../theme';
import { Phone, Mail, MessageCircle, Video } from 'lucide-react';

export default function Contato() {
    return (
        <section id="demo" className="py-24 bg-purple-950 text-white">
            <div className={theme.layout.container}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Agende uma Demo</h2>
                        <p className="text-2xl text-purple-200">Demonstração de 30min com nosso time de especialistas.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {[
                            { icon: <MessageCircle className="w-10 h-10" />, label: "WhatsApp", info: "(11) 98888-7777", color: "from-green-500 to-emerald-500" },
                            { icon: <Phone className="w-10 h-10" />, label: "Telefone", info: "0800-777-6666", color: "from-blue-500 to-cyan-500" },
                            { icon: <Mail className="w-10 h-10" />, label: "Email", info: "vendas@fintech.io", color: "from-purple-500 to-pink-500" }
                        ].map((c, i) => (
                            <div key={i} className={`bg-gradient-to-br ${c.color} p-8 rounded-3xl text-center hover:scale-105 transition-transform cursor-pointer`}>
                                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                                    {c.icon}
                                </div>
                                <p className="text-sm font-bold uppercase tracking-wider mb-2 opacity-90">{c.label}</p>
                                <p className="text-2xl font-black">{c.info}</p>
                            </div>
                        ))}
                    </div>

                    <form className="bg-white text-slate-900 p-12 rounded-3xl shadow-2xl">
                        <h3 className="text-3xl font-bold text-center mb-10">Solicitar Demo Personalizada</h3>
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Nome" className="bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-purple-500 focus:outline-none text-lg" />
                                <input type="text" placeholder="Empresa" className="bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-purple-500 focus:outline-none text-lg" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="email" placeholder="Email corporativo" className="bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-purple-500 focus:outline-none text-lg" />
                                <input type="tel" placeholder="Telefone" className="bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-purple-500 focus:outline-none text-lg" />
                            </div>
                            <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-purple-500 focus:outline-none text-lg text-slate-600">
                                <option>Faturamento mensal</option>
                                <option>Até R$ 50k</option>
                                <option>R$ 50k - R$ 500k</option>
                                <option>R$ 500k - R$ 5Mi</option>
                                <option>R$ 5Mi+</option>
                            </select>
                            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-6 rounded-xl hover:from-purple-700 hover:to-pink-700 shadow-xl text-xl inline-flex items-center justify-center gap-3">
                                <Video className="w-7 h-7" />
                                Agendar Demo Agora
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
