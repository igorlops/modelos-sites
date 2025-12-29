'use client';
import { theme } from '../theme';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-slate-900">Fale com a gente</h2>
                        <p className="text-slate-600">Tire suas dúvidas ou solicite uma proposta personalizada. Respondemos em minutos.</p>
                        <div className="space-y-6">
                            {[{ icon: <Phone />, label: "WhatsApp", info: "(11) 99888-5544" }, { icon: <Mail />, label: "Email", info: "contato@contabilizamais.com.br" }, { icon: <MapPin />, label: "Sede", info: "São Paulo - SP (Atendemos todo Brasil)" }].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="text-blue-600">{item.icon}</div>
                                    <div><p className="font-bold text-slate-900">{item.label}</p><p className="text-slate-600">{item.info}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Solicite Proposta</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Nome / Empresa" className="w-full border border-slate-200 rounded-lg px-4 py-3" />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="tel" placeholder="Telefone" className="w-full border border-slate-200 rounded-lg px-4 py-3" />
                                <input type="email" placeholder="Email" className="w-full border border-slate-200 rounded-lg px-4 py-3" />
                            </div>
                            <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-600">
                                <option>Já tenho empresa</option>
                                <option>Quero abrir empresa</option>
                                <option>Quero migrar de contador</option>
                            </select>
                            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
