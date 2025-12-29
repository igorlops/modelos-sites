'use client';
import { theme } from '../theme';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Contato() {
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 bg-gradient-to-br from-purple-600 to-purple-800 p-12 rounded-3xl text-white">
                        <h2 className="text-4xl font-bold mb-8">Ainda com dúvidas?</h2>
                        <p className="text-purple-100 mb-10 text-lg">Nossa equipe pedagógica responde em minutos. Fale conosco por chat, email ou WhatsApp.</p>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Seu nome" className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-purple-200 focus:bg-white/20 focus:outline-none backdrop-blur-sm" />
                                <input type="email" placeholder="Seu melhor email" className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-purple-200 focus:bg-white/20 focus:outline-none backdrop-blur-sm" />
                            </div>
                            <select className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:bg-white/20 focus:outline-none backdrop-blur-sm">
                                <option className="text-slate-900">Qual trilha te interessa?</option>
                                <option className="text-slate-900">Full Stack Web</option>
                                <option className="text-slate-900">Backend</option>
                                <option className="text-slate-900">Mobile</option>
                                <option className="text-slate-900">Data Science</option>
                            </select>
                            <textarea rows={4} placeholder="Sua mensagem (opcional)" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-purple-200 focus:bg-white/20 focus:outline-none backdrop-blur-sm resize-none"></textarea>
                            <button className="w-full bg-white text-purple-600 font-bold py-5 rounded-xl hover:bg-purple-50 shadow-2xl text-lg">
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Outros Canais</h3>
                        <div className="space-y-6">
                            {[
                                { icon: <MessageCircle className="w-6 h-6" />, label: "WhatsApp", info: "(11) 94444-5566", sublabel: "Resposta em minutos" },
                                { icon: <Mail className="w-6 h-6" />, label: "Email", info: "suporte@devmaster.com", sublabel: "24-48h para resposta" },
                                { icon: <MapPin className="w-6 h-6" />, label: "Sede", info: "São Paulo - SP", sublabel: "100% online" }
                            ].map((c, i) => (
                                <div key={i} className="flex gap-5 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                                    <div className="text-purple-600 mt-1">{c.icon}</div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-lg">{c.label}</p>
                                        <p className="text-slate-700">{c.info}</p>
                                        <p className="text-xs text-slate-500 mt-1">{c.sublabel}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
