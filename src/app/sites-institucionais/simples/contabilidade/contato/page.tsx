import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export default function ContatoPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Vamos Organizar Sua Empresa Juntos?</h1>
                        <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
                            Seja para abrir uma empresa nova, migrar sua contabilidade ou contratar um serviço específico, nossa equipe está pronta para te atender com excelência. Responderemos seu contato em até 2 horas úteis.
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Fale Conosco</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Temos diversos canais de atendimento para sua comodidade. Escolha o que preferir e nossa equipe comercial retornará rapidamente com uma proposta personalizada para sua empresa.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 flex-shrink-0">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Telefone Fixo</p>
                                        <p className="font-medium text-lg text-slate-900">(11) 3333-3333</p>
                                        <p className="text-sm text-slate-600">Seg a Sex: 08h às 18h</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 flex-shrink-0">
                                        <MessageSquare size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">WhatsApp Comercial</p>
                                        <p className="font-medium text-lg text-slate-900">(11) 99999-9999</p>
                                        <p className="text-sm text-slate-600">Respondemos em minutos</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 flex-shrink-0">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Email Comercial</p>
                                        <p className="font-medium text-lg text-slate-900">contato@contabilprime.com.br</p>
                                        <p className="text-sm text-slate-600">Resposta em até 2h úteis</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 flex-shrink-0">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Nosso Escritório</p>
                                        <p className="font-medium text-lg text-slate-900">Av. Faria Lima, 2500 - Cj. 81</p>
                                        <p className="text-sm text-slate-600">Itaim Bibi, São Paulo - SP, 01452-000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 flex-shrink-0">
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Horário de Atendimento</p>
                                        <div className="text-sm text-slate-700 space-y-1">
                                            <p className="font-medium">Segunda a Sexta: 08h às 18h</p>
                                            <p className="text-slate-600">Sábados, domingos e feriados: Fechado</p>
                                            <p className="text-slate-600">WhatsApp: Atendimento estendido até 20h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-200">
                                <p className="text-sm text-slate-600 mb-4">Acompanhe conteúdos sobre gestão empresarial:</p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full bg-slate-100 hover:bg-blue-100 transition-colors flex items-center justify-center text-2xl">
                                        📱
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-slate-100 hover:bg-blue-100 transition-colors flex items-center justify-center text-2xl">
                                        📘
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-slate-100 hover:bg-blue-100 transition-colors flex items-center justify-center text-2xl">
                                        💼
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <div className="bg-slate-50 p-10 rounded-3xl shadow-lg border-2 border-blue-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Solicite uma Proposta Personalizada</h3>
                                <p className="text-slate-600 mb-8">
                                    Preencha o formulário abaixo com suas informações e necessidades. Nossa equipe entrará em contato em até 2 horas úteis com uma proposta sob medida para sua empresa.
                                </p>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Seu Nome Completo *</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-slate-700 bg-white"
                                                placeholder="João Silva"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-slate-700 bg-white"
                                                placeholder="joao@empresa.com.br"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Telefone / WhatsApp *</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-slate-700 bg-white"
                                                placeholder="(11) 99999-9999"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Nome da Empresa</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-slate-700 bg-white"
                                                placeholder="Minha Empresa Ltda (se já tiver)"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Qual sua necessidade? *</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-slate-700 bg-white" required>
                                            <option value="">Selecione uma opção</option>
                                            <option>Abrir empresa nova (abertura + contabilidade)</option>
                                            <option>Migrar minha contabilidade atual</option>
                                            <option>Contratar apenas Departamento Pessoal</option>
                                            <option>Planejamento Tributário</option>
                                            <option>Regularização Fiscal</option>
                                            <option>BPO Financeiro</option>
                                            <option>Outro serviço / Consultoria</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Faturamento Mensal Aproximado</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-slate-700 bg-white">
                                            <option value="">Selecione (opcional)</option>
                                            <option>Até R$ 20 mil/mês</option>
                                            <option>R$ 20 a 50 mil/mês</option>
                                            <option>R$ 50 a 100 mil/mês</option>
                                            <option>Acima de R$ 100 mil/mês</option>
                                            <option>Ainda não fatura (empresa nova)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Mensagem / Observações (opcional)</label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-slate-700 h-32 resize-none bg-white"
                                            placeholder="Conte-nos um pouco mais sobre sua empresa e necessidades específicas..."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input type="checkbox" id="termos" className="mt-1" required />
                                        <label htmlFor="termos" className="text-sm text-slate-600">
                                            Concordo em receber contato comercial da Contábil Prime e estou ciente da <a href="#" className="text-blue-600 underline">política de privacidade</a>.
                                        </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2 text-lg"
                                    >
                                        <Send size={20} />
                                        Enviar Solicitação
                                    </button>

                                    <p className="text-xs text-slate-500 text-center">
                                        Ao enviar este formulário, você receberá contato da nossa equipe comercial em até 2 horas úteis com uma proposta personalizada.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h3 className="text-2xl font-bold mb-4">Precisa de Atendimento Imediato?</h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Nossa equipe está disponível agora via WhatsApp para tirar dúvidas e agendar reuniões
                        </p>
                        <a
                            href="https://wa.me/5511999999999?text=Olá! Vim do site e gostaria de saber mais sobre os serviços da Contábil Prime."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-lg text-lg"
                        >
                            <span className="text-2xl">💬</span>
                            Chamar no WhatsApp Agora
                        </a>
                    </div>
                </section>

                <section className="py-12 bg-slate-50">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-sm text-slate-500 max-w-3xl mx-auto">
                            <strong className="text-slate-700">Transparência Total:</strong> Ao entrar em contato, você receberá uma proposta clara e detalhada, sem taxas escondidas. Nossa equipe comercial está treinada para entender sua realidade e apresentar a melhor solução, não empurrar pacotes desnecessários.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
