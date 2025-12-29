import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock, Send, Home } from "lucide-react";

export default function ContatoPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-16 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Vamos Encontrar Seu Imóvel Perfeito?</h1>
                        <p className="text-lg text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                            Entre em contato conosco para agendar visitas, tirar dúvidas ou cadastrar seu imóvel para venda/locação. Nossa equipe responderá em até 30 minutos durante horário comercial.
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Fale Conosco</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Estamos prontos para ajudar você a encontrar o imóvel ideal ou vender/alugar o seu da melhor forma. Entre em contato pelo canal que preferir!
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 flex-shrink-0">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Telefone Fixo</p>
                                        <p className="font-medium text-lg text-slate-900">(11) 3500-3500</p>
                                        <p className="text-sm text-slate-600">Seg a Sex: 08h às 19h | Sáb: 09h às 14h</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.713 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">WhatsApp</p>
                                        <p className="font-medium text-lg text-slate-900">(11) 99999-3500</p>
                                        <p className="text-sm text-slate-600">Resposta em minutos</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 flex-shrink-0">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Email</p>
                                        <p className="font-medium text-lg text-slate-900 break-all">contato@primeimoveis.com.br</p>
                                        <p className="text-sm text-slate-600">Resposta em até 2h úteis</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 flex-shrink-0">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Nosso Escritório</p>
                                        <p className="font-medium text-lg text-slate-900">Av. Berrini, 1500</p>
                                        <p className="text-sm text-slate-600">Brooklin, São Paulo - SP, 04571-000</p>
                                        <p className="text-sm text-cyan-600 mt-1">Visite-nos! Atendimento presencial sem agendamento.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 flex-shrink-0">
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Horário de Atendimento</p>
                                        <div className="text-sm text-slate-700 space-y-1">
                                            <p className="font-medium">Segunda a Sexta: 08h às 19h</p>
                                            <p className="font-medium">Sábado: 09h às 14h</p>
                                            <p className="text-slate-600">Domingo e feriados: Fechado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-200">
                                <p className="text-sm text-slate-600 mb-4">Siga-nos nas redes sociais:</p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 hover:from-cyan-600 hover:to-blue-600 hover:text-white transition-all flex items-center justify-center text-2xl">
                                        📱
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 hover:from-cyan-600 hover:to-blue-600 hover:text-white transition-all flex items-center justify-center text-2xl">
                                        📘
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 hover:from-cyan-600 hover:to-blue-600 hover:text-white transition-all flex items-center justify-center text-2xl">
                                        📺
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <div className="bg-gradient-to-br from-slate-50 to-cyan-50 p-10 rounded-3xl shadow-lg border-2 border-cyan-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Envie Sua Mensagem</h3>
                                <p className="text-slate-600 mb-8">
                                    Preencha o formulário abaixo e nossa equipe entrará em contato em até 30 minutos durante horário comercial.
                                </p>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo *</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none text-slate-700 bg-white"
                                                placeholder="Seu nome"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none text-slate-700 bg-white"
                                                placeholder="seuemail@exemplo.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Telefone / WhatsApp *</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none text-slate-700 bg-white"
                                                placeholder="(11) 99999-3500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Interesse *</label>
                                            <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none text-slate-700 bg-white" required>
                                                <option value="">Selecione</option>
                                                <option>Comprar Imóvel</option>
                                                <option>Vender Meu Imóvel</option>
                                                <option>Alugar Imóvel</option>
                                                <option>Anunciar Para Locação</option>
                                                <option>Administração de Imóvel</option>
                                                <option>Consultoria/Investimentos</option>
                                                <option>Outro Assunto</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Mensagem</label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 outline-none text-slate-700 h-32 resize-none bg-white"
                                            placeholder="Conte-nos mais sobre o que você procura ou deseja..."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input type="checkbox" id="termos" className="mt-1" required />
                                        <label htmlFor="termos" className="text-sm text-slate-600">
                                            Autorizo contato via telefone, WhatsApp e email e estou ciente da <a href="#" className="text-cyan-600 underline">política de privacidade</a>.
                                        </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-colors shadow-md flex items-center justify-center gap-2 text-lg"
                                    >
                                        <Send size={20} />
                                        Enviar Mensagem
                                    </button>

                                    <p className="text-xs text-slate-500 text-center">
                                        Responderemos seu contato em até 30 minutos durante horário comercial. Fora do horário, retornaremos no próximo dia útil.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center">
                    <div className="container mx-auto px-4">
                        <Home size={50} className="mx-auto mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Prefere Falar Diretamente com um Corretor?</h3>
                        <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
                            Nossa equipe está disponível agora via WhatsApp para tirar dúvidas e agendar visitas
                        </p>
                        <a
                            href="https://wa.me/5511999993500?text=Olá! Vim do site e gostaria de conversar sobre imóveis."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-4 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg text-lg"
                        >
                            <span className="text-2xl">💬</span>
                            Chamar no WhatsApp Agora
                        </a>
                    </div>
                </section>

                <section className="py-12 bg-slate-50">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-sm text-slate-500 max-w-3xl mx-auto">
                            <strong className="text-slate-700">100% Transparente:</strong> Não trabalhamos com taxas escondidas. Todas as comissões e custos são apresentados claramente antes de qualquer negociação. Sua confiança é nossa prioridade.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
