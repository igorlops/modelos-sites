import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContatoPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-slate-50">
                <section className="py-16 bg-gradient-to-br from-rose-50 to-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Vamos Conversar Sobre Você?</h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Estamos prontos para ouvir seus sonhos e objetivos estéticos. Preencha o formulário abaixo ou entre em contato diretamente pelos nossos canais. Responderemos em até 2 horas durante horário comercial.
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl shadow-rose-100/50 flex flex-col md:flex-row">
                        <div className="md:w-2/5 p-12 bg-slate-900 text-white flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-serif mb-6">Informações de Contato</h2>
                                <p className="text-slate-300 mb-12 leading-relaxed">
                                    Nossa equipe está preparada para receber você em um ambiente acolhedor e totalmente equipado. Venha nos conhecer!
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-rose-400 flex-shrink-0">
                                            <Phone size={22} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase mb-1">Telefone / WhatsApp</p>
                                            <p className="font-medium text-lg">(11) 99999-9999</p>
                                            <p className="text-sm text-slate-400">Atendimento via WhatsApp 24h</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-rose-400 flex-shrink-0">
                                            <Mail size={22} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase mb-1">Email</p>
                                            <p className="font-medium text-lg">contato@lumina.com.br</p>
                                            <p className="text-sm text-slate-400">Respondemos em até 2h úteis</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-rose-400 flex-shrink-0">
                                            <MapPin size={22} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase mb-1">Endereço</p>
                                            <p className="font-medium text-lg">Av. Faria Lima, 3000</p>
                                            <p className="text-sm text-slate-400">Conj. 502 - Itaim Bibi, São Paulo - SP</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-rose-400 flex-shrink-0">
                                            <Clock size={22} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase mb-1">Horário de Funcionamento</p>
                                            <p className="font-medium">Segunda a Sexta: 09h às 19h</p>
                                            <p className="font-medium">Sábado: 09h às 14h</p>
                                            <p className="text-sm text-slate-400">Domingo: Fechado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-800">
                                <p className="text-sm text-slate-400 mb-3">Siga-nos nas redes sociais:</p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-rose-500 transition-colors flex items-center justify-center">
                                        <span className="text-xl">📱</span>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-rose-500 transition-colors flex items-center justify-center">
                                        <span className="text-xl">📘</span>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-rose-500 transition-colors flex items-center justify-center">
                                        <span className="text-xl">📸</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-3/5 p-12">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicite sua Avaliação Gratuita</h3>
                            <p className="text-slate-600 mb-8">
                                Preencha os dados abaixo e nossa equipe entrará em contato para agendar sua avaliação personalizada sem custo.
                            </p>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo *</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                        placeholder="Seu nome completo"
                                        required
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                            placeholder="seu@email.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Telefone / WhatsApp *</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                            placeholder="(11) 99999-9999"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Interesse Principal</label>
                                    <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all text-slate-600">
                                        <option>Selecione o tratamento de interesse</option>
                                        <option>Harmonização Facial</option>
                                        <option>Botox / Toxina Botulínica</option>
                                        <option>Preenchimento Labial</option>
                                        <option>Tratamentos Corporais</option>
                                        <option>Bioestimuladores</option>
                                        <option>Peelings e Renovação</option>
                                        <option>Limpeza de Pele</option>
                                        <option>Outros</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Mensagem (opcional)</label>
                                    <textarea
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all h-32 resize-none"
                                        placeholder="Conte-nos um pouco sobre seus objetivos estéticos..."
                                    ></textarea>
                                </div>

                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="privacy" className="mt-1" required />
                                    <label htmlFor="privacy" className="text-sm text-slate-600">
                                        Concordo com a <a href="#" className="text-rose-500 underline">política de privacidade</a> e autorizo o contato da Lumina Estética para agendamento.
                                    </label>
                                </div>

                                <button
                                    type="button"
                                    className="w-full py-4 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200/50 text-lg"
                                >
                                    Solicitar Avaliação Gratuita
                                </button>

                                <p className="text-xs text-slate-500 text-center">
                                    Ao enviar este formulário, você receberá contato da nossa equipe em até 2 horas úteis para agendamento.
                                </p>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Prefere Falar Diretamente?</h3>
                        <p className="text-slate-600 mb-8">
                            Nossa equipe está disponível para atender você agora mesmo via WhatsApp
                        </p>
                        <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg"
                        >
                            <span className="text-2xl">💬</span>
                            Chamar no WhatsApp
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
