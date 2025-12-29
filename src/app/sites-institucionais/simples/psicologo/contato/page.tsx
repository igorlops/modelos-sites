import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContatoPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-16 bg-gradient-to-br from-teal-50 to-stone-50">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Vamos Conversar?</h1>
                        <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
                            Dar o primeiro passo nem sempre é fácil,  mas é o mais importante. Estou aqui para ouvir você sem julgamentos e construir juntos um caminho de transformação e bem-estar.
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-serif text-stone-900 mb-6">Entre em Contato</h2>
                                <p className="text-stone-600 mb-8 leading-relaxed">
                                    Você pode me contatar de diversas formas. Responderei todas as mensagens com atenção e, se preferir, podemos agendar uma conversa inicial sem compromisso para você entender melhor como funciona o processo terapêutico.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 flex-shrink-0">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 uppercase font-semibold mb-1">Telefone / WhatsApp</p>
                                        <p className="font-medium text-lg text-stone-900">(11) 98888-8888</p>
                                        <p className="text-sm text-stone-600">Prefiro WhatsApp para primeira comunicação</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 flex-shrink-0">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 uppercase font-semibold mb-1">Email</p>
                                        <p className="font-medium text-lg text-stone-900">contato@psi.com.br</p>
                                        <p className="text-sm text-stone-600">Respondo em até 24h úteis</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 flex-shrink-0">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 uppercase font-semibold mb-1">Consultório</p>
                                        <p className="font-medium text-lg text-stone-900">Rua da Paz, 123 - Cj. 45</p>
                                        <p className="text-sm text-stone-600">Vila Madalena, São Paulo - SP</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 flex-shrink-0">
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-500 uppercase font-semibold mb-1">Horários</p>
                                        <div className="text-sm text-stone-700 space-y-1">
                                            <p className="font-medium">Segunda a Sexta: 08h às 20h</p>
                                            <p className="font-medium">Sábado: 09h às 13h</p>
                                            <p className="text-stone-500">Atendimento presencial e online</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-stone-200">
                                <p className="text-sm text-stone-600 mb-4">Me acompanhe nas redes sociais para conteúdos sobre saúde mental:</p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full bg-stone-100 hover:bg-teal-100 transition-colors flex items-center justify-center text-2xl">
                                        📱
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-stone-100 hover:bg-teal-100 transition-colors flex items-center justify-center text-2xl">
                                        📘
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <div className="bg-[#FDFBF7] p-10 rounded-3xl shadow-lg border border-stone-100">
                                <h3 className="text-2xl font-bold text-stone-900 mb-3">Agendar Primeira Sessão</h3>
                                <p className="text-stone-600 mb-8">
                                    Preencha os dados abaixo e entrarei em contato para agendarmos nossa primeira conversa. Não se preocupe, é sem compromisso.
                                </p>

                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-stone-700 mb-2">Seu Nome Completo</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-stone-700 bg-white"
                                            placeholder="Nome completo"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-stone-700 mb-2">Email</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-stone-700 bg-white"
                                                placeholder="seu@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-stone-700 mb-2">Telefone / WhatsApp</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-stone-700 bg-white"
                                                placeholder="(11) 98888-8888"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-stone-700 mb-2">Preferência de Atendimento</label>
                                        <select className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-stone-700 bg-white">
                                            <option>Presencial</option>
                                            <option>Online</option>
                                            <option>Ainda não sei</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-stone-700 mb-2">Fale um pouco sobre o que te traz aqui (opcional)</label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-stone-700 h-32 resize-none bg-white"
                                            placeholder="Compartilhe brevemente o que está buscando na terapia. Isso me ajuda a me preparar melhor para nossa primeira conversa."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input type="checkbox" id="lgpd" className="mt-1" />
                                        <label htmlFor="lgpd" className="text-sm text-stone-600">
                                            Autorizo o contato e estou ciente da <a href="#" className="text-teal-700 underline">política de privacidade</a> e sigilo profissional.
                                        </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full py-4 bg-teal-700 text-white font-bold rounded-md hover:bg-teal-800 transition-colors shadow-md flex items-center justify-center gap-2"
                                    >
                                        <Send size={20} />
                                        Enviar Solicitação
                                    </button>

                                    <p className="text-xs text-stone-500 text-center">
                                        Ao enviar, você receberá meu contato em até 24 horas úteis para agendarmos nossa primeira conversa.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white text-center">
                    <div className="container mx-auto px-6">
                        <h3 className="text-2xl font-serif mb-4">Prefere Falar Agora?</h3>
                        <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                            Estou disponível no WhatsApp para responder dúvidas rápidas ou agendar sua primeira sessão
                        </p>
                        <a
                            href="https://wa.me/5511988888888"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-4 rounded-md font-bold hover:bg-green-600 transition-colors shadow-lg text-lg"
                        >
                            <span className="text-2xl">💬</span>
                            Chamar no WhatsApp
                        </a>
                    </div>
                </section>

                <section className="py-12 bg-stone-50">
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-sm text-stone-500 max-w-3xl mx-auto">
                            <strong className="text-stone-700">Importante:</strong> Se você está em crise ou risco iminente, procure atendimento de emergência ou ligue 188 (CVV - Centro de Valorização da Vida), disponível 24h gratuitamente.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
