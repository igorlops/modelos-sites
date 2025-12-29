'use client';
import { theme } from '../theme';
import { Mail, Phone, Clock, Calendar } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-gradient-to-br from-emerald-50 to-white">
            <div className={theme.layout.container}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-slate-900 mb-4">Agende sua Consulta</h2>
                        <p className="text-xl text-slate-600">Transforme sua relação com a comida. Primeiro passo começa aqui.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {[
                            { icon: <Phone className="w-8 h-8 text-emerald-600" />, label: "WhatsApp", info: "(11) 97777-8888", color: "emerald" },
                            { icon: <Mail className="w-8 h-8 text-blue-600" />, label: "Email", info: "nutri@saude.com.br", color: "blue" },
                            { icon: <Clock className="w-8 h-8 text-purple-600" />, label: "Horários", info: "Seg-Sex: 8h-19h | Sáb: 9h-13h", color: "purple" },
                            { icon: <Calendar className="w-8 h-8 text-pink-600" />, label: "Agendamento", info: "Online 24/7", color: "pink" }
                        ].map((c, i) => (
                            <div key={i} className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-${c.color}-100 hover:border-${c.color}-300 group`}>
                                <div className={`mb-6 bg-${c.color}-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    {c.icon}
                                </div>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{c.label}</p>
                                <p className="text-lg font-bold text-slate-900">{c.info}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-emerald-100">
                        <h3 className="text-2xl font-bold text-center mb-8">Pré-Agendamento Online</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Seu nome" className="border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-emerald-500 focus:outline-none" />
                                <input type="tel" placeholder="WhatsApp" className="border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-emerald-500 focus:outline-none" />
                            </div>
                            <input type="email" placeholder="Email" className="w-full border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-emerald-500 focus:outline-none" />
                            <select className="w-full border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-emerald-500 focus:outline-none text-slate-600">
                                <option>Modalidade de Consulta</option>
                                <option>Presencial (SP)</option>
                                <option>Online (Videochamada)</option>
                            </select>
                            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-5 rounded-xl hover:from-emerald-700 hover:to-teal-700 shadow-lg text-lg">
                                Solicitar Agendamento
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
