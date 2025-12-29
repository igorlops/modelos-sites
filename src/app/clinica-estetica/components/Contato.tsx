'use client';
import { theme } from '../theme';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">Agende sua Avaliação</h2>
                        <p className="text-xl text-slate-600">Transformação começa com o primeiro passo. Vamos conversar?</p>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12 mb-12">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: <Phone className="w-8 h-8" />, label: "WhatsApp", info: "(11) 96666-7777", color: "from-amber-600 to-orange-600" },
                                { icon: <Mail className="w-8 h-8" />, label: "Email", info: "contato@beleza.clinic", color: "from-orange-600 to-red-600" },
                                { icon: <Instagram className="w-8 h-8" />, label: "Instagram", info: "@belezaclinic", color: "from-pink-600 to-rose-600" },
                                { icon: <MapPin className="w-8 h-8" />, label: "Endereço", info: "Jardins, SP", color: "from-purple-600 to-pink-600" }
                            ].map((c, i) => (
                                <div key={i} className="text-center group">
                                    <div className={`bg-gradient-to-br ${c.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                                        {c.icon}
                                    </div>
                                    <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-1">{c.label}</p>
                                    <p className="font-bold text-slate-900">{c.info}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
                        <h3 className="text-2xl font-bold text-center mb-8">Solicitar Avaliação Gratuita</h3>
                        <div className="space-y-6">
                            <input type="text" placeholder="Nome" className="w-full border-b-2 border-slate-200 pb-3 focus:border-amber-600 focus:outline-none text-lg transition-colors" />
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="tel" placeholder="WhatsApp" className="w-full border-b-2 border-slate-200 pb-3 focus:border-amber-600 focus:outline-none text-lg transition-colors" />
                                <input type="email" placeholder="Email" className="w-full border-b-2 border-slate-200 pb-3 focus:border-amber-600 focus:outline-none text-lg transition-colors" />
                            </div>
                            <select className="w-full border-b-2 border-slate-200 pb-3 focus:border-amber-600 focus:outline-none text-lg text-slate-600 transition-colors">
                                <option>Procedimento de interesse</option>
                                <option>Harmonização Facial</option>
                                <option>Skinbooster</option>
                                <option>Laser</option>
                                <option>Peeling</option>
                            </select>
                            <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-5 rounded-xl hover:from-amber-700 hover:to-orange-700 shadow-lg text-lg">
                                Enviar Solicitação
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
