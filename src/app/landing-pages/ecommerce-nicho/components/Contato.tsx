'use client';
import { theme } from '../theme';
import { Mail, Instagram, MessageCircle } from 'lucide-react';

export default function Contato() {
    return (
        <section className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Dúvidas? Fale conosco!</h2>
                    <p className="text-xl text-slate-600 mb-12">Respondemos em até 24h úteis por email ou Instagram.</p>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            { icon: <Mail className="w-10 h-10" />, label: "Email", info: "suporte@nichestore.com.br", color: "bg-indigo-100 text-indigo-600" },
                            { icon: <Instagram className="w-10 h-10" />, label: "Instagram", info: "@nichestore.br", color: "bg-pink-100 text-pink-600" },
                            { icon: <MessageCircle className="w-10 h-10" />, label: "WhatsApp", info: "(11) 95555-6666", color: "bg-green-100 text-green-600" }
                        ].map((c, i) => (
                            <div key={i} className={`${c.color} p-10 rounded-2xl`}>
                                <div className="mb-6 flex justify-center">{c.icon}</div>
                                <p className="font-bold text-lg mb-2">{c.label}</p>
                                <p className="font-semibold">{c.info}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-200">
                        <h3 className="text-2xl font-bold mb-8">Ou envie uma mensagem</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Nome" className="bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:border-indigo-500 focus:outline-none" />
                                <input type="email" placeholder="Email" className="bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:border-indigo-500 focus:outline-none" />
                            </div>
                            <textarea rows={4} placeholder="Sua mensagem..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:border-indigo-500 focus:outline-none resize-none"></textarea>
                            <button className="w-full bg-indigo-600 text-white font-bold py-5 rounded-xl hover:bg-indigo-700 shadow-lg text-lg">
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
