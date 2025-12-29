'use client';
import { theme } from '../theme';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-0 bg-white">
            <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-16 lg:p-20 text-white flex flex-col justify-center">
                    <h2 className="text-5xl font-black mb-8">Vamos bater<br />um papo?</h2>
                    <p className="text-2xl text-pink-100 mb-12 leading-relaxed">Manda mensagem ou liga. Sem robôs, sem formulário chato. Conversa direta com quem entende do assunto.</p>
                    <div className="space-y-8">
                        {[
                            { icon: <Phone className="w-7 h-7" />, label: "Telefone / WhatsApp", info: "(11) 93333-4455" },
                            { icon: <Mail className="w-7 h-7" />, label: "Email Comercial", info: "oi@pixelstorm.ag" }
                        ].map((c, i) => (
                            <div key={i} className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                    {c.icon}
                                </div>
                                <div>
                                    <p className="text-pink-200 text-sm font-semibold">{c.label}</p>
                                    <p className="text-2xl font-bold">{c.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 pt-10 border-t border-white/20">
                        <p className="text-pink-200 mb-6 font-semibold">Redes Sociais</p>
                        <div className="flex gap-4">
                            {[{ icon: <Instagram />, url: "#" }, { icon: <Linkedin />, url: "#" }].map((s, i) => (
                                <a key={i} href={s.url} className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-2xl flex items-center justify-center transition-all backdrop-blur-sm">
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="p-16 lg:p-20 bg-slate-50 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-10">Preferiu formulário?</h3>
                    <form className="space-y-6">
                        <input type="text" placeholder="Seu nome" className="w-full border-b-2 border-slate-300 bg-transparent py-4 px-2 focus:border-pink-600 focus:outline-none text-lg" />
                        <input type="email" placeholder="Email corporativo" className="w-full border-b-2 border-slate-300 bg-transparent py-4 px-2 focus:border-pink-600 focus:outline-none text-lg" />
                        <input type="tel" placeholder="Telefone/WhatsApp" className="w-full border-b-2 border-slate-300 bg-transparent py-4 px-2 focus:border-pink-600 focus:outline-none text-lg" />
                        <select className="w-full border-b-2 border-slate-300 bg-transparent py-4 px-2 focus:border-pink-600 focus:outline-none text-lg text-slate-600">
                            <option>Qual serviço te interessa?</option>
                            <option>Social Media</option>
                            <option>Google/Meta Ads</option>
                            <option>Branding</option>
                            <option>Tudo (360°)</option>
                        </select>
                        <textarea rows={4} placeholder="Conte sobre seu negócio..." className="w-full border-b-2 border-slate-300 bg-transparent py-4 px-2 focus:border-pink-600 focus:outline-none resize-none text-lg"></textarea>
                        <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-5 rounded-2xl hover:from-pink-700 hover:to-purple-700 shadow-lg text-lg">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
