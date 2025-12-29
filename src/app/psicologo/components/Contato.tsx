'use client';

import { theme } from '../theme';
import { Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function Contato() {
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div className="space-y-8">
                        <h2 className="font-serif text-4xl text-stone-800">Entre em contato</h2>
                        <p className="text-stone-600 font-light">
                            Responderei sua mensagem em até 24h úteis. Se for urgente, me chame diretamente no WhatsApp.
                        </p>

                        <div className="space-y-6 pt-4">
                            {[
                                { icon: <MapPin />, label: "Consultório", info: "Rua Augusta, 1500 - Consolação, São Paulo" },
                                { icon: <Clock />, label: "Horários", info: "Seg-Sex: 8h-21h | Sáb: 9h-14h" },
                                { icon: <Mail />, label: "Email", info: "contato@andresiqueira.psi.br" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="text-teal-600 w-6 h-6">{item.icon}</div>
                                    <div>
                                        <p className="font-semibold text-stone-800">{item.label}</p>
                                        <p className="text-stone-600 font-light">{item.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <a href="#" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 transition-colors">
                                <Instagram className="w-5 h-5" />
                                <span className="font-semibold">@psicandresiqueira</span>
                            </a>
                        </div>
                    </div>

                    <form className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
                        <h3 className="font-serif text-2xl text-stone-800 mb-6">Envie uma mensagem</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Nome</label>
                                <input type="text" className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:border-teal-500 focus:outline-none transition-colors" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Telefone</label>
                                    <input type="tel" className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:border-teal-500 focus:outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                                    <input type="email" className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:border-teal-500 focus:outline-none transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Mensagem</label>
                                <textarea rows={4} className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:border-teal-500 focus:outline-none transition-colors"></textarea>
                            </div>
                            <button className="w-full bg-teal-700 text-white font-semibold py-4 rounded-lg hover:bg-teal-800 transition-colors shadow-lg">
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}
