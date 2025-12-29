'use client';
import { theme } from '../theme';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid lg:grid-cols-3">
                            <div className="lg:col-span-1 bg-cyan-700 p-12 text-white">
                                <h2 className="text-3xl font-bold mb-8">Informações de Contato</h2>
                                <div className="space-y-8">
                                    {[
                                        { icon: <Phone className="w-6 h-6" />, label: "Telefone", info: "(11) 3456-7890" },
                                        { icon: <Mail className="w-6 h-6" />, label: "Email", info: "contato@dentalcare.com" },
                                        { icon: <MapPin className="w-6 h-6" />, label: "Endereço", info: "Av. Paulista, 1000\nSão Paulo - SP" },
                                        { icon: <Clock className="w-6 h-6" />, label: "Horário", info: "Seg-Sex: 8h-20h\nSáb: 8h-14h" }
                                    ].map((c, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="bg-white/20 p-3 rounded-lg">{c.icon}</div>
                                            <div>
                                                <p className="text-cyan-200 text-sm font-semibold mb-1">{c.label}</p>
                                                <p className="font-bold whitespace-pre-line">{c.info}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:col-span-2 bg-white p-12">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">Agendar Consulta</h3>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <input type="text" placeholder="Nome completo" className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 focus:border-cyan-500 focus:outline-none" />
                                        <input type="tel" placeholder="Telefone" className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 focus:border-cyan-500 focus:outline-none" />
                                    </div>
                                    <input type="email" placeholder="Email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 focus:border-cyan-500 focus:outline-none" />
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 focus:border-cyan-500 focus:outline-none text-slate-600">
                                        <option>Tratamento de interesse</option>
                                        <option>Clareamento</option>
                                        <option>Implante</option>
                                        <option>Facetas</option>
                                        <option>Limpeza</option>
                                        <option>Ortodontia</option>
                                    </select>
                                    <textarea rows={3} placeholder="Observações (opcional)" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 focus:border-cyan-500 focus:outline-none resize-none"></textarea>
                                    <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-cyan-700 hover:to-blue-700 shadow-lg">
                                        Solicitar Agendamento
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
