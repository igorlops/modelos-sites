import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export default function ContatoPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-16 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Vamos Escalar Seu Negócio Digital?</h1>
                        <p className="text-lg text-purple-100 max-w-3xl mx-auto leading-relaxed">
                            Preencha o formulário abaixo ou entre em contato diretamente. Nossa equipe responderá em até 2 horas úteis com uma análise inicial gratuita do seu marketing atual.
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Fale com Nossa Equipe</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Estamos prontos para ouvir seus desafios e objetivos. Entre em contato pelo canal de sua preferência e nossa equipe comercial retornará rapidamente com propostas personalizadas.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 flex-shrink-0">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Telefone</p>
                                        <p className="font-medium text-lg text-slate-900">(11) 4040-4040</p>
                                        <p className="text-sm text-slate-600">Seg a Sex: 09h às 19h</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 flex-shrink-0">
                                        <MessageSquare size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">WhatsApp</p>
                                        <p className="font-medium text-lg text-slate-900">(11) 99999-4040</p>
                                        <p className="text-sm text-slate-600">Respondemos em minutos</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 flex-shrink-0">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Email</p>
                                        <p className="font-medium text-lg text-slate-900 break-all">contato@impulsedigital.com</p>
                                        <p className="text-sm text-slate-600">Resposta em até 2h úteis</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 flex-shrink-0">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Escritório</p>
                                        <p className="font-medium text-lg text-slate-900">Av. Paulista, 1500</p>
                                        <p className="text-sm text-slate-600">Conj. 200 - Bela Vista, São Paulo - SP</p>
                                        <p className="text-sm text-slate-600">CEP: 01310-100</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 flex-shrink-0">
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Horário</p>
                                        <div className="text-sm text-slate-700 space-y-1">
                                            <p className="font-medium">Segunda a Sexta: 09h às 19h</p>
                                            <p className="text-slate-600">Sábados: 09h às 13h</p>
                                            <p className="text-slate-600">Domingos e feriados: Fechado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-200">
                                <p className="text-sm text-slate-600 mb-4">Siga-nos nas redes sociais:</p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all flex items-center justify-center text-2xl">
                                        📱
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all flex items-center justify-center text-2xl">
                                        📘
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all flex items-center justify-center text-2xl">
                                        💼
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <div className="bg-gradient-to-br from-slate-50 to-purple-50 p-10 rounded-3xl shadow-lg border-2 border-purple-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Solicitar Análise Gratuita</h3>
                                <p className="text-slate-600 mb-8">
                                    Preencha o formulário e receba em até 2 horas uma análise preliminar do seu marketing digital com oportunidades mapeadas.
                                </p>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo *</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none text-slate-700 bg-white"
                                                placeholder="Seu nome"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Corporativo *</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none text-slate-700 bg-white"
                                                placeholder="email@empresa.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Telefone / WhatsApp *</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none text-slate-700 bg-white"
                                                placeholder="(11) 99999-4040"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Nome da Empresa</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none text-slate-700 bg-white"
                                                placeholder="Sua Empresa Ltda"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Segmento do Negócio</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none text-slate-700 bg-white">
                                            <option value="">Selecione</option>
                                            <option>E-commerce / Varejo Online</option>
                                            <option>SaaS / Tecnologia</option>
                                            <option>Serviços B2B</option>
                                            <option>Saúde e Bem-Estar</option>
                                            <option>Educação / Infoprodutos</option>
                                            <option>Imobiliário</option>
                                            <option>Outros</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Serviços de Interesse *</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none text-slate-700 bg-white" required>
                                            <option value="">Selecione o principal</option>
                                            <option>Tráfego Pago (Google Ads / Meta Ads)</option>
                                            <option>Social Media Completo</option>
                                            <option>SEO e Marketing de Conteúdo</option>
                                            <option>Branding e Identidade Visual</option>
                                            <option>Desenvolvimento Web / E-commerce</option>
                                            <option>Gestão Completa Full Service</option>
                                            <option>Growth Hacking</option>
                                            <option>Consultoria / Diagnóstico</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Descreva Seu Principal Desafio Atual</label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none text-slate-700 h-32 resize-none bg-white"
                                            placeholder="Ex: Meu e-commerce vende mas o CAC está muito alto e não sei como reduzir sem perder volume..."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input type="checkbox" id="lgpd" className="mt-1" required />
                                        <label htmlFor="lgpd" className="text-sm text-slate-600">
                                            Autorizo contato da Impulse Digital e estou ciente da <a href="#" className="text-purple-600 underline">política de privacidade</a>.
                                        </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors shadow-md flex items-center justify-center gap-2 text-lg"
                                    >
                                        <Send size={20} />
                                        Solicitar Análise Gratuita
                                    </button>

                                    <p className="text-xs text-slate-500 text-center">
                                        Nossa equipe entrará em contato em até 2 horas úteis com uma análise inicial e proposta personalizada.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h3 className="text-2xl font-bold mb-4">Precisa Falar Agora?</h3>
                        <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                            Nossa equipe está disponível no WhatsApp para responder dúvidas e agendar reuniões
                        </p>
                        <a
                            href="https://wa.me/5511999994040?text=Olá! Vim do site e gostaria de saber mais sobre os serviços da Impulse Digital."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-4 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg text-lg"
                        >
                            <span className="text-2xl">💬</span>
                            Chamar no WhatsApp
                        </a>
                    </div>
                </section>

                <section className="py-12 bg-slate-50">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-sm text-slate-500 max-w-3xl mx-auto">
                            <strong className="text-slate-700">Transparência Total:</strong> Não vendemos pacotes prontos. Cada proposta é personalizada após entendermos profundamente seu negócio, mercado e objetivos. Primeira análise sempre gratuita e sem compromisso.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
