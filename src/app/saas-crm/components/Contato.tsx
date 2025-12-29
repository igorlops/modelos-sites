'use client';
import { theme } from '../theme';
import { Calendar, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white">
            <div className={theme.layout.container}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-6xl font-black mb-6">Vamos conversar?</h2>
                        <p className="text-3xl text-violet-100">Nossa equipe está pronta para te ajudar.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { icon: <Calendar className="w-12 h-12" />, label: "Agendar Demo", bg: "bg-white/20" },
                            { icon: <MessageSquare className="w-12 h-12" />, label: "Chat Online", bg: "bg-white/20" },
                            { icon: <Phone className="w-12 h-12" />, label: "Ligar Agora", bg: "bg-white/20" },
                            { icon: <Mail className="w-12 h-12" />, label: "Email", bg: "bg-white/20" }
                        ].map((c, i) => (
                            <button key={i} className={`${c.bg} backdrop-blur-md p-10 rounded-3xl hover:bg-white/30 transition-all border-2 border-white/30 hover:scale-105`}>
                                <div className="mb-6 flex justify-center">{c.icon}</div>
                                <p className="font-bold text-xl">{c.label}</p>
                            </button>
                        ))}
                    </div>

                    <div className="bg-white text-slate-900 p-12 rounded-3xl shadow-2xl">
                        <h3 className="text-3xl font-bold text-center mb-10">Solicitar Proposta Comercial</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Nome completo" className="bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-violet-500 focus:outline-none" />
                                <input type="email" placeholder="Email corporativo" className="bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-violet-500 focus:outline-none" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="tel" placeholder="Telefone/WhatsApp" className="bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-violet-500 focus:outline-none" />
                                <input type="text" placeholder="Empresa" className="bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-violet-500 focus:outline-none" />
                            </div>
                            <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-violet-500 focus:outline-none text-slate-600">
                                <option>Tamanho do time de vendas</option>
                                <option>1-5 pessoas</option>
                                <option>6-20 pessoas</option>
                                <option>21-50 pessoas</option>
                                <option>50+ pessoas</option>
                            </select>
                            <textarea rows={3} placeholder="Conte mais sobre sua operação comercial..." className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-violet-500 focus:outline-none resize-none"></textarea>
                            <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-6 rounded-xl hover:from-violet-700 hover:to-fuchsia-700 shadow-xl text-xl">
                                Enviar Solicitação
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
