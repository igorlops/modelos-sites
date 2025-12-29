'use client';
import { theme } from '../theme';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">Fale com Nossos Especialistas</h2>
                        <p className="text-xl text-slate-600">Consultoria tributária gratuita de 30min. Sem compromisso.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold">Entre em Contato</h3>
                            {[
                                { icon: <Phone className="w-7 h-7 text-blue-600" />, label: "WhatsApp", info: "(11) 92222-3333", bg: "bg-blue-50" },
                                { icon: <Mail className="w-7 h-7 text-indigo-600" />, label: "Email", info: "contato@contabil.com.br", bg: "bg-indigo-50" },
                                { icon: <MapPin className="w-7 h-7 text-purple-600" />, label: "Endereço", info: "Centro - São Paulo/SP", bg: "bg-purple-50" },
                                { icon: <Clock className="w-7 h-7 text-pink-600" />, label: "Horário", info: "Seg-Sex: 8h-18h", bg: "bg-pink-50" }
                            ].map((c, i) => (
                                <div key={i} className={`flex items-center gap-6 p-6 ${c.bg} rounded-2xl hover:shadow-lg transition-all`}>
                                    <div className="bg-white p-4 rounded-xl shadow-sm">{c.icon}</div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">{c.label}</p>
                                        <p className="text-lg font-bold text-slate-900">{c.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-8">Solicitar Consultoria Gratuita</h3>
                            <div className="space-y-6">
                                <input type="text" placeholder="Nome ou Empresa" className="w-full bg-white border border-blue-200 rounded-xl px-5 py-4 focus:border-blue-500 focus:outline-none" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="tel" placeholder="Telefone" className="w-full bg-white border border-blue-200 rounded-xl px-5 py-4 focus:border-blue-500 focus:outline-none" />
                                    <input type="email" placeholder="Email" className="w-full bg-white border border-blue-200 rounded-xl px-5 py-4 focus:border-blue-500 focus:outline-none" />
                                </div>
                                <select className="w-full bg-white border border-blue-200 rounded-xl px-5 py-4 focus:border-blue-500 focus:outline-none text-slate-600">
                                    <option>Tipo de serviço</option>
                                    <option>Abertura de empresa</option>
                                    <option>Contabilidade mensal</option>
                                    <option>Planejamento tributário</option>
                                    <option>IRPF</option>
                                </select>
                                <textarea rows={3} placeholder="Mensagem (opcional)" className="w-full bg-white border border-blue-200 rounded-xl px-5 py-4 focus:border-blue-500 focus:outline-none resize-none"></textarea>
                                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-5 rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                                    Solicitar Consultoria
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
