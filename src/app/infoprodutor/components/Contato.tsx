'use client';
import { theme } from '../theme';
import { Calendar, Mail, Phone } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-32 bg-white">
            <div className={theme.layout.container}>
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-16 text-white text-center mb-16">
                        <h2 className="text-5xl font-black mb-6">Agende seu diagnóstico gratuito.</h2>
                        <p className="text-2xl text-teal-100 mb-12 max-w-2xl mx-auto">60 minutos de consultoria estratégica. Analisamos viabilidade do seu nicho e projetamos faturamento.</p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="#" className="inline-flex items-center gap-3 bg-white text-teal-600 px-12 py-6 rounded-xl font-bold text-xl hover:bg-teal-50 shadow-2xl">
                                <Calendar className="w-7 h-7" />
                                Agendar Agora
                            </a>
                            <a href="tel:1122223333" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-12 py-6 rounded-xl font-bold text-xl hover:bg-white/20">
                                <Phone className="w-7 h-7" />
                                Ligar Direto
                            </a>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900">Outros canais</h3>
                            <div className="space-y-6">
                                {[
                                    { icon: <Phone className="w-7 h-7 text-teal-600" />, label: "WhatsApp Comercial", info: "(11) 2222-3333" },
                                    { icon: <Mail className="w-7 h-7 text-teal-600" />, label: "Email", info: "parceria@expertlaunch.com.br" }
                                ].map((c, i) => (
                                    <div key={i} className="flex gap-5 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                                        <div>{c.icon}</div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-lg mb-1">{c.label}</p>
                                            <p className="text-slate-600 text-xl">{c.info}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-50 p-10 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-8">Ou preencha o pré-cadastro</h3>
                            <form className="space-y-6">
                                <input type="text" placeholder="Seu nome" className="w-full bg-white border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-teal-500 focus:outline-none" />
                                <input type="email" placeholder="Email" className="w-full bg-white border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-teal-500 focus:outline-none" />
                                <input type="tel" placeholder="WhatsApp" className="w-full bg-white border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-teal-500 focus:outline-none" />
                                <select className="w-full bg-white border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-teal-500 focus:outline-none text-slate-600">
                                    <option>Qual seu nicho?</option>
                                    <option>Saúde/Fitness</option>
                                    <option>Negócios/Vendas</option>
                                    <option>Marketing Digital</option>
                                    <option>Desenvolvimento Pessoal</option>
                                    <option>Outro</option>
                                </select>
                                <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold py-5 rounded-xl hover:from-teal-700 hover:to-cyan-700 shadow-lg text-lg">
                                    Enviar Pré-Cadastro
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
