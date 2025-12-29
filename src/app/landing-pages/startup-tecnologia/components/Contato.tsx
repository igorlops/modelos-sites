'use client';
import { theme } from '../theme';
import { Calendar, Mail, Github, Linkedin } from 'lucide-react';

export default function Contato() {
    return (
        <section id="contato" className="py-40 bg-slate-950 text-white">
            <div className={theme.layout.container}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Vamos construir juntos?</h2>
                        <p className="text-2xl text-slate-400 max-w-3xl mx-auto">Call estratégica de 90min para validar viabilidade técnica e discutir parceria.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-16">
                            <h3 className="text-4xl font-black mb-6">Agende agora</h3>
                            <p className="text-2xl text-cyan-100 mb-12">Resposta em até 24h úteis. NDA assinado antes da reunião.</p>
                            <a href="#" className="inline-flex items-center gap-4 bg-white text-cyan-600 px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-cyan-50 shadow-2xl mb-10 w-full justify-center">
                                <Calendar className="w-8 h-8" />
                                Agendar Call
                            </a>
                            <div className="space-y-6 pt-8 border-t border-white/20">
                                {[
                                    { icon: <Mail className="w-7 h-7" />, label: "Email", info: "partnerships@quantumlabs.tech" },
                                    { icon: <Github className="w-7 h-7" />, label: "GitHub", info: "github.com/quantumlabs" }
                                ].map((c, i) => (
                                    <div key={i} className="flex gap-5 items-center">
                                        <div className="bg-white/20 p-4 rounded-2xl">{c.icon}</div>
                                        <div>
                                            <p className="text-cyan-200 text-sm font-semibold uppercase tracking-wider">{c.label}</p>
                                            <p className="text-xl font-bold">{c.info}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-3xl p-16 border-2 border-slate-800">
                            <h3 className="text-3xl font-bold mb-10">Pitch inicial</h3>
                            <form className="space-y-6">
                                <input type="text" placeholder="Nome do fundador" className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl px-6 py-5 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none text-lg" />
                                <input type="email" placeholder="Email" className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl px-6 py-5 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none text-lg" />
                                <input type="text" placeholder="Ideia/produto (uma linha)" className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl px-6 py-5 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none text-lg" />
                                <select className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl px-6 py-5 text-slate-400 focus:border-cyan-500 focus:outline-none text-lg">
                                    <option>Estágio atual</option>
                                    <option>Só ideia (pre-MVP)</option>
                                    <option>MVP pronto</option>
                                    <option>Já tenho tração / usuários</option>
                                    <option>Já captei investimento</option>
                                </select>
                                <textarea rows={4} placeholder="Pitch em 3-4 linhas..." className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl px-6 py-5 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none resize-none text-lg"></textarea>
                                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-6 rounded-2xl hover:from-cyan-700 hover:to-blue-700 shadow-lg text-xl">
                                    Enviar Pitch
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
