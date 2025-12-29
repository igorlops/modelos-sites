'use client';
import { theme } from '../theme';
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-24 bg-gradient-to-b from-sage-50 to-white">
            <div className={theme.layout.container}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6 text-slate-900">Vamos conversar?</h2>
                    <p className="text-2xl text-slate-600 mb-16">Primeiro passo é o mais importante. Estou aqui para te ouvir.</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {[
                            { icon: <MessageCircle className="w-10 h-10" />, label: "WhatsApp", info: "(11) 95555-4444", action: "Chamar Agora" },
                            { icon: <Phone className="w-10 h-10" />, label: "Telefone", info: "(11) 3333-4444", action: "Ligar" },
                            { icon: <Mail className="w-10 h-10" />, label: "Email", info: "contato@psi.com.br", action: "Enviar Email" },
                            { icon: <Calendar className="w-10 h-10" />, label: "Agendar", info: "Online 24/7", action: "Ver Agenda" }
                        ].map((c, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-sage-100 group">
                                <div className="bg-sage-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-sage-700 group-hover:scale-110 transition-transform">
                                    {c.icon}
                                </div>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{c.label}</p>
                                <p className="text-xl font-bold text-slate-900 mb-4">{c.info}</p>
                                <button className="text-sage-700 font-bold hover:underline">{c.action} →</button>
                            </div>
                        ))}
                    </div>

                    <div className="bg-sage-900 text-white p-12 rounded-3xl">
                        <h3 className="text-3xl font-bold mb-8">Primeira Sessão Gratuita de 20min</h3>
                        <p className="text-sage-200 text-lg mb-8">Para conversarmos sobre sua demanda e ver se há fit terapêutico.</p>
                        <button className="bg-white text-sage-900 px-12 py-5 rounded-full font-bold text-lg hover:bg-sage-100 shadow-xl inline-flex items-center gap-2">
                            <Calendar className="w-6 h-6" />
                            Agendar Sessão Gratuita
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
