'use client';
import { theme } from '../theme';
import { Phone, Mail, MapPin, Briefcase } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-bold mb-8">Agende uma consultoria</h2>
                            <p className="text-xl text-slate-600 mb-12">Reunião inicial de 30min para entender sua demanda e apresentar proposta.</p>

                            <div className="space-y-6">
                                {[
                                    { icon: <Phone className="w-7 h-7 text-slate-700" />, label: "Telefone", info: "(11) 3000-4000" },
                                    { icon: <Mail className="w-7 h-7 text-slate-700" />, label: "Email", info: "contato@advemp.com.br" },
                                    { icon: <MapPin className="w-7 h-7 text-slate-700" />, label: "Escritório", info: "Av. Faria Lima, 1500 - São Paulo" },
                                    { icon: <Briefcase className="w-7 h-7 text-slate-700" />, label: "OAB", info: "SP 123.456" }
                                ].map((c, i) => (
                                    <div key={i} className="flex items-center gap-5 p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                        <div className="bg-slate-200 p-3 rounded-lg">{c.icon}</div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{c.label}</p>
                                            <p className="text-lg font-bold text-slate-900">{c.info}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <form className="bg-slate-50 p-10 rounded-3xl border-2 border-slate-200">
                            <h3 className="text-2xl font-bold mb-8">Solicitar Proposta</h3>
                            <div className="space-y-6">
                                <input type="text" placeholder="Nome do executivo" className="w-full bg-white border border-slate-300 rounded-lg px-5 py-4 focus:border-slate-600 focus:outline-none" />
                                <input type="text" placeholder="Empresa" className="w-full bg-white border border-slate-300 rounded-lg px-5 py-4 focus:border-slate-600 focus:outline-none" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="email" placeholder="Email" className="w-full bg-white border border-slate-300 rounded-lg px-5 py-4 focus:border-slate-600 focus:outline-none" />
                                    <input type="tel" placeholder="Telefone" className="w-full bg-white border border-slate-300 rounded-lg px-5 py-4 focus:border-slate-600 focus:outline-none" />
                                </div>
                                <select className="w-full bg-white border border-slate-300 rounded-lg px-5 py-4 focus:border-slate-600 focus:outline-none text-slate-600">
                                    <option>Área de interesse</option>
                                    <option>Consultoria Empresarial</option>
                                    <option>Contratos</option>
                                    <option>Trabalhista</option>
                                    <option>Tributário</option>
                                </select>
                                <textarea rows={3} placeholder="Descreva brevemente a demanda..." className="w-full bg-white border border-slate-300 rounded-lg px-5 py-4 focus:border-slate-600 focus:outline-none resize-none"></textarea>
                                <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800">
                                    Enviar Solicitação
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
