'use client';
import { theme } from '../theme';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-0">
            <div className="grid lg:grid-cols-2">
                <div className="bg-slate-900 p-20 text-white flex flex-col justify-center">
                    <h2 className="text-5xl font-bold mb-8">Vamos encontrar seu imóvel dos sonhos?</h2>
                    <p className="text-2xl text-slate-300 mb-12">Atendimento VIP personalizado.</p>
                    <div className="space-y-6">
                        {[
                            { icon: <Phone className="w-6 h-6" />, label: "WhatsApp VIP", info: "(11) 99999-0000" },
                            { icon: <Mail className="w-6 h-6" />, label: "Email", info: "vip@altoimoveis.com.br" },
                            { icon: <Instagram className="w-6 h-6" />, label: "Instagram", info: "@altoimoveis.sp" },
                            { icon: <MapPin className="w-6 h-6" />, label: "Showroom", info: "Jardins - São Paulo" }
                        ].map((c, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="bg-amber-600 p-3 rounded-lg">{c.icon}</div>
                                <div>
                                    <p className="text-slate-400 text-sm font-semibold">{c.label}</p>
                                    <p className="font-bold text-lg">{c.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-20">
                    <h3 className="text-3xl font-bold mb-10">Fale com Corretor</h3>
                    <form className="space-y-6">
                        <input type="text" placeholder="Nome" className="w-full border-b-2 border-slate-200 pb-4 focus:border-amber-600 focus:outline-none text-lg" />
                        <div className="grid grid-cols-2 gap-6">
                            <input type="tel" placeholder="Telefone" className="w-full border-b-2 border-slate-200 pb-4 focus:border-amber-600 focus:outline-none text-lg" />
                            <input type="email" placeholder="Email" className="w-full border-b-2 border-slate-200 pb-4 focus:border-amber-600 focus:outline-none text-lg" />
                        </div>
                        <select className="w-full border-b-2 border-slate-200 pb-4 focus:border-amber-600 focus:outline-none text-lg text-slate-600">
                            <option>Interesse</option>
                            <option>Comprar</option>
                            <option>Vender</option>
                            <option>Alugar</option>
                        </select>
                        <select className="w-full border-b-2 border-slate-200 pb-4 focus:border-amber-600 focus:outline-none text-lg text-slate-600">
                            <option>Faixa de preço</option>
                            <option>R$ 2-5 Mi</option>
                            <option>R$ 5-10 Mi</option>
                            <option>R$ 10+ Mi</option>
                        </select>
                        <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-5 rounded-xl hover:from-amber-700 hover:to-orange-700 shadow-lg text-lg mt-8">
                            Solicitar Contato
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
