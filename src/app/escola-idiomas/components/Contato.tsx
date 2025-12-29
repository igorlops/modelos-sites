'use client';
import { theme } from '../theme';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contato() {
    return (
        <section className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold">Visite uma unidade</h2>
                        <p className="text-slate-600 text-lg">3 unidades em São Paulo. Estrutura completa com lounge, biblioteca e wifi.</p>
                        <div className="space-y-6">
                            {[
                                { icon: <Phone />, label: "WhatsApp", info: "(11) 96666-7788" },
                                { icon: <Mail />, label: "Email", info: "contato@speakworld.com.br" },
                                { icon: <MapPin />, label: "Unidades", info: "Paulista, Moema e Pinheiros" }
                            ].map((c, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="text-amber-600">{c.icon}</div>
                                    <div>
                                        <p className="font-bold">{c.label}</p>
                                        <p className="text-slate-600">{c.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form className="bg-white p-10 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-6">Agendar Aula Grátis</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Nome" className="w-full border rounded-lg px-4 py-3" />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="tel" placeholder="Telefone" className="border rounded-lg px-4 py-3" />
                                <input type="email" placeholder="Email" className="border rounded-lg px-4 py-3" />
                            </div>
                            <select className="w-full border rounded-lg px-4 py-3 text-slate-600">
                                <option>Qual idioma?</option>
                                <option>Inglês</option>
                                <option>Espanhol</option>
                                <option>Ambos</option>
                            </select>
                            <select className="w-full border rounded-lg px-4 py-3 text-slate-600">
                                <option>Nível atual</option>
                                <option>Zero/Iniciante</option>
                                <option>Básico</option>
                                <option>Intermediário</option>
                                <option>Avançado</option>
                            </select>
                            <button className="w-full bg-amber-600 text-white font-bold py-4 rounded-lg hover:bg-amber-700">
                                Agendar Agora
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
