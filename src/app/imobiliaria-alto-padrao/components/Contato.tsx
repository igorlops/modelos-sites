'use client';
import { theme } from '../theme';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-stone-50">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-stone-900">Fale com um consultor</h2>
                        <p className="text-stone-600">Atendimento personalizado de segunda a sábado, das 9h às 19h.</p>
                        <div className="space-y-6">
                            {[{ icon: <Phone />, label: "WhatsApp", info: "(11) 99777-8899" }, { icon: <Mail />, label: "Email", info: "vendas@primeestates.com.br" }, { icon: <MapPin />, label: "Showroom", info: "Av. Faria Lima, 3000 - Itaim Bibi, SP" }].map((item, i) => (
                                <div key={i} className="flex gap-4"><div className="text-emerald-700">{item.icon}</div><div><p className="font-bold text-stone-900">{item.label}</p><p className="text-stone-600">{item.info}</p></div></div>
                            ))}
                        </div>
                        <a href="#" className="inline-flex items-center gap-2 text-emerald-700 font-bold"><Instagram className="w-5 h-5" />@primeestates</a>
                    </div>
                    <form className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-stone-900 mb-6">Estou procurando...</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Nome" className="w-full border border-stone-200 rounded-lg px-4 py-3" />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="tel" placeholder="Telefone" className="w-full border border-stone-200 rounded-lg px-4 py-3" />
                                <input type="email" placeholder="Email" className="w-full border border-stone-200 rounded-lg px-4 py-3" />
                            </div>
                            <select className="w-full border border-stone-200 rounded-lg px-4 py-3 text-stone-600">
                                <option>Quero comprar</option>
                                <option>Quero vender</option>
                                <option>Quero alugar</option>
                            </select>
                            <textarea rows={3} placeholder="Detalhes (bairro, metragem, valor...)" className="w-full border border-stone-200 rounded-lg px-4 py-3"></textarea>
                            <button className="w-full bg-emerald-700 text-white font-bold py-4 rounded-lg hover:bg-emerald-800">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
