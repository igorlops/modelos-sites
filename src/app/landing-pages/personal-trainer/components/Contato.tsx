'use client';
import { theme } from '../theme';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-0 bg-slate-950">
            <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 bg-gradient-to-br from-orange-600 to-red-700 p-16 lg:p-20 flex flex-col justify-center text-white">
                    <h2 className="text-5xl font-black mb-8 leading-tight">Pronto para<br />transformar<br />seu corpo?</h2>
                    <p className="text-2xl text-orange-100 mb-12">Entre em contato e comece sua jornada hoje.</p>
                    <div className="space-y-6">
                        {[
                            { icon: <Phone className="w-6 h-6" />, label: "WhatsApp", info: "(11) 98765-4321" },
                            { icon: <Mail className="w-6 h-6" />, label: "Email", info: "contato@personalfit.com" },
                            { icon: <MapPin className="w-6 h-6" />, label: "Academia", info: "Vila Olímpia - São Paulo" },
                            { icon: <Instagram className="w-6 h-6" />, label: "Instagram", info: "@personalfit.sp" }
                        ].map((c, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-xl">{c.icon}</div>
                                <div>
                                    <p className="text-orange-200 text-sm font-semibold">{c.label}</p>
                                    <p className="font-bold text-lg">{c.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-3 p-16 lg:p-20 bg-slate-900">
                    <h3 className="text-3xl font-bold text-white mb-10">Solicite Avaliação Gratuita</h3>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Nome" className="bg-slate-800 border-2 border-slate-700 rounded-xl px-6 py-4 text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none" />
                            <input type="tel" placeholder="WhatsApp" className="bg-slate-800 border-2 border-slate-700 rounded-xl px-6 py-4 text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none" />
                        </div>
                        <select className="w-full bg-slate-800 border-2 border-slate-700 rounded-xl px-6 py-4 text-slate-400 focus:border-orange-500 focus:outline-none">
                            <option>Objetivo principal</option>
                            <option>Hipertrofia</option>
                            <option>Emagrecimento</option>
                            <option>Performance atlética</option>
                        </select>
                        <textarea rows={4} placeholder="Conte sobre sua rotina e exp​eriência com treinos..." className="w-full bg-slate-800 border-2 border-slate-700 rounded-xl px-6 py-4 text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none resize-none"></textarea>
                        <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-5 rounded-xl hover:from-orange-700 hover:to-red-700 shadow-lg inline-flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            Solicitar Avaliação
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
