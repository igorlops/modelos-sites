'use client';

import { theme } from '../theme';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-neutral-50">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div className="space-y-8">
                        <h2 className="font-serif text-4xl text-neutral-900">Fale Conosco</h2>
                        <p className="text-neutral-600">
                            Entre em contato para agendar uma reunião estratégica. Retornamos em até 4 horas úteis.
                        </p>

                        <div className="space-y-6 pt-4">
                            {[
                                { icon: <Phone />, label: "Telefone", info: "(11) 3555-8900" },
                                { icon: <Mail />, label: "Email", info: "contato@limaadvocacia.com.br" },
                                { icon: <MapPin />, label: "Escritório", info: "Av. Paulista, 1100 - 15º andar\nBela Vista, São Paulo - SP" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="text-amber-600 w-6 h-6">{item.icon}</div>
                                    <div>
                                        <p className="font-bold text-neutral-900">{item.label}</p>
                                        <p className="text-neutral-600 whitespace-pre-line">{item.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <a href="#" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors font-semibold">
                                <Linkedin className="w-5 h-5" />
                                Lima & Associados no LinkedIn
                            </a>
                        </div>
                    </div>

                    <form className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
                        <h3 className="font-serif text-2xl text-neutral-900 mb-6">Solicite Contato</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-2">Nome / Razão Social</label>
                                <input type="text" className="w-full border border-neutral-200 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none transition-colors" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Telefone</label>
                                    <input type="tel" className="w-full border border-neutral-200 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Email</label>
                                    <input type="email" className="w-full border border-neutral-200 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-2">Assunto</label>
                                <textarea rows={4} className="w-full border border-neutral-200 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none transition-colors"></textarea>
                            </div>
                            <button className="w-full bg-amber-600 text-white font-bold py-4 rounded-lg hover:bg-amber-700 transition-colors shadow-lg">
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}
