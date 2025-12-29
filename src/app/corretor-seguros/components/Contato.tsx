'use client';
import { theme } from '../theme';
import { Phone, Mail, Clock, Shield } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
            <div className={theme.layout.container}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <Shield className="w-20 h-20 mx-auto mb-6 opacity-80" />
                        <h2 className="text-5xl font-bold mb-4">Faça sua Cotação Agora</h2>
                        <p className="text-2xl text-blue-100">Gratuita e sem compromisso. Resposta em até 2h úteis.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold mb-8">Fale Conosco</h3>
                            <div className="space-y-6">
                                {[
                                    { icon: <Phone className="w-7 h-7" />, label: "WhatsApp", info: "(11) 94444-3333" },
                                    { icon: <Mail className="w-7 h-7" />, label: "Email", info: "contato@seguronow.com.br" },
                                    { icon: <Clock className="w-7 h-7" />, label: "Atendimento", info: "Seg-Sex: 8h-19h | Sáb: 9h-14h" },
                                    { icon: <Shield className="w-7 h-7" />, label: "SUSEP", info: "Registro 123456789" }
                                ].map((c, i) => (
                                    <div key={i} className="flex items-center gap-5 bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all">
                                        <div className="bg-white/20 p-3 rounded-lg">{c.icon}</div>
                                        <div>
                                            <p className="text-blue-200 text-sm font-semibold">{c.label}</p>
                                            <p className="font-bold text-lg">{c.info}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <form className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-8">Solicitar Cotação</h3>
                            <div className="space-y-6">
                                <input type="text" placeholder="Nome" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 focus:border-blue-500 focus:outline-none" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="tel" placeholder="Telefone" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 focus:border-blue-500 focus:outline-none" />
                                    <input type="email" placeholder="Email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 focus:border-blue-500 focus:outline-none" />
                                </div>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 focus:border-blue-500 focus:outline-none text-slate-600">
                                    <option>Tipo de seguro</option>
                                    <option>Auto</option>
                                    <option>Residencial</option>
                                    <option>Vida</option>
                                    <option>Empresarial</option>
                                </select>
                                <textarea rows={3} placeholder="Detalhes (opcional)" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 focus:border-blue-500 focus:outline-none resize-none"></textarea>
                                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-5 rounded-lg hover:from-blue-700 hover:to-cyan-700 shadow-lg">
                                    Solicitar Cotação
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
