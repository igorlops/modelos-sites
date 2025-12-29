'use client';
import { theme } from '../theme';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-16 text-white">
                            <h2 className="text-5xl font-bold mb-8">Venha conhecer!</h2>
                            <p className="text-2xl text-orange-100 mb-12">Traga seu pet! Nossa loja é pet-friendly com potinhos de água e petiscos de cortesia.</p>
                            <div className="space-y-8">
                                {[
                                    { icon: <MapPin className="w-8 h-8" />, label: "Endereço", info: "Rua Pet Friendly, 200\nVila Madalena - São Paulo" },
                                    { icon: <Phone className="w-8 h-8" />, label: "WhatsApp", info: "(11) 4444-5555" },
                                    { icon: <Clock className="w-8 h-8" />, label: "Horários", info: "Seg-Sáb: 9h-20h\nDom: 10h-18h" }
                                ].map((c, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="bg-white/20 p-4 rounded-2xl">{c.icon}</div>
                                        <div>
                                            <p className="text-orange-200 text-sm font-semibold mb-1">{c.label}</p>
                                            <p className="text-xl font-bold whitespace-pre-line">{c.info}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 flex gap-4">
                                {[Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-16 h-16 bg-white/20 hover:bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-sm transition-all">
                                        <Icon className="w-8 h-8" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-16">
                            <h3 className="text-3xl font-bold text-slate-900 mb-8">Mande uma mensagem!</h3>
                            <form className="space-y-6">
                                <input type="text" placeholder="Seu nome" className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none" />
                                <input type="tel" placeholder="WhatsApp" className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none" />
                                <textarea rows={4} placeholder="Dúvida ou pedido..." className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none resize-none"></textarea>
                                <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold py-5 rounded-2xl hover:from-orange-600 hover:to-amber-700 shadow-lg text-lg">
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
