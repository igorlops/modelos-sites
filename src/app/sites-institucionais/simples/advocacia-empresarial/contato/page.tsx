import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock, Send, Scale } from "lucide-react";

export default function ContatoPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-16 bg-gradient-to-br from-amber-900 to-yellow-900 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Vamos Proteger Seu Negócio Juntos?</h1>
                        <p className="text-lg text-amber-100 max-w-3xl mx-auto leading-relaxed">
                            Entre em contato para agendar uma consulta estratégica sem compromisso. Nossa equipe está pronta para analisar seu caso e apresentar as melhores soluções jurídicas para sua empresa. Resposta garantida em até 4 horas úteis.
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Canais de Atendimento</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Estamos disponíveis através de diversos canais para sua conveniência. Escolha o que preferir e nossa equipe retornará rapidamente para agendar uma reunião ou esclarecer suas dúvidas iniciais.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 flex-shrink-0">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Telefone Fixo</p>
                                        <p className="font-medium text-lg text-slate-900">(11) 3030-3030</p>
                                        <p className="text-sm text-slate-600">Seg a Sex: 09h às 18h</p>
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
                                        <p className="font-medium text-lg text-slate-900">(11) 99999-0000</p>
                                        <p className="text-sm text-slate-600">Respondemos em minutos</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 flex-shrink-0">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Email</p>
                                        <p className="font-medium text-lg text-slate-900">contato@martinsadvocacia.com.br</p>
                                        <p className="text-sm text-slate-600">Resposta em até 4h úteis</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 flex-shrink-0">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Endereço do Escritório</p>
                                        <p className="font-medium text-lg text-slate-900">Av. Brigadeiro Faria Lima, 3477</p>
                                        <p className="text-sm text-slate-600">11º andar - Conj. 111 - Itaim Bibi, São Paulo - SP</p>
                                        <p className="text-sm text-slate-600">CEP: 04538-133</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 flex-shrink-0">
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Horário de Funcionamento</p>
                                        <div className="text-sm text-slate-700 space-y-1">
                                            <p className="font-medium">Segunda a Sexta: 09h às 18h</p>
                                            <p className="text-slate-600">Sábados, domingos e feriados: Fechado</p>
                                            <p className="text-slate-600">Atendimento emergencial: Sob consulta</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-200">
                                <p className="text-sm text-slate-600 mb-4">Siga-nos nas redes profissionais:</p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full bg-slate-100 hover:bg-amber-100 transition-colors flex items-center justify-center text-2xl">
                                        💼
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-slate-100 hover:bg-amber-100 transition-colors flex items-center justify-center text-2xl">
                                        📘
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <div className="bg-slate-50 p-10 rounded-3xl shadow-lg border-2 border-amber-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Solicitar Consultoria Jurídica</h3>
                                <p className="text-slate-600 mb-8">
                                    Preencha o formulário abaixo e nossa equipe entrará em contato em até 4 horas úteis para agendar sua consulta estratégica sem compromisso.
                                </p>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo do Responsável *</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 outline-none text-slate-700 bg-white"
                                                placeholder="Seu nome completo"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Corporativo *</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 outline-none text-slate-700 bg-white"
                                                placeholder="email@empresa.com.br"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Telefone / WhatsApp *</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 outline-none text-slate-700 bg-white"
                                                placeholder="(11) 99999-0000"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Nome da Empresa</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 outline-none text-slate-700 bg-white"
                                                placeholder="Razão Social ou Nome Fantasia"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Área Jurídica de Interesse *</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 outline-none text-slate-700 bg-white" required>
                                            <option value="">Selecione a área</option>
                                            <option>Direito Societário</option>
                                            <option>Fusões e Aquisições (M&A)</option>
                                            <option>Direito Trabalhista</option>
                                            <option>Direito Tributário</option>
                                            <option>Contratos Empresariais</option>
                                            <option>Recuperação Judicial</option>
                                            <option>Compliance e LGPD</option>
                                            <option>Propriedade Intelectual</option>
                                            <option>Litígios Empresariais</option>
                                            <option>Assessoria Geral / Múltiplas Áreas</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Descreva Brevemente Sua Necessidade *</label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 outline-none text-slate-700 h-32 resize-none bg-white"
                                            placeholder="Explique de forma resumida qual a questão jurídica ou desafio que precisa resolver. Quanto mais detalhes, melhor poderemos preparar a consultoria."
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input type="checkbox" id="confidencialidade" className="mt-1" required />
                                        <label htmlFor="confidencialidade" className="text-sm text-slate-600">
                                            Estou ciente de que todas as informações compartilhadas serão tratadas sob sigilo profissional conforme Código de Ética da OAB e autorizo contato do escritório Martins & Associados.
                                        </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full py-4 bg-amber-700 text-white font-bold rounded-lg hover:bg-amber-800 transition-colors shadow-md flex items-center justify-center gap-2 text-lg"
                                    >
                                        <Send size={20} />
                                        Enviar Solicitação
                                    </button>

                                    <p className="text-xs text-slate-500 text-center">
                                        Ao enviar, você receberá nosso contato em até 4 horas úteis para agendamento da consulta estratégica gratuita.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gradient-to-r from-amber-700 to-yellow-700 text-white text-center">
                    <div className="container mx-auto px-4">
                        <Scale size={50} className="mx-auto mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Urgência Jurídica?</h3>
                        <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
                            Para questões urgentes, entre em contato diretamente via WhatsApp e nossa equipe priorizará seu atendimento
                        </p>
                        <a
                            href="https://wa.me/5511999990000?text=Olá! Tenho uma questão jurídica urgente e gostaria de falar com um advogado do escritório Martins %26 Associados."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-4 roundedfont-bold hover:bg-green-600 transition-colors shadow-lg text-lg"
                        >
                            <span className="text-2xl">💬</span>
                            Chamar no WhatsApp Agora
                        </a>
                    </div>
                </section>

                <section className="py-12 bg-slate-50">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-sm text-slate-500 max-w-3xl mx-auto">
                            <strong className="text-slate-700">Sigilo Profissional Garantido:</strong> Todas as informações compartilhadas são protegidas pelo sigilo advogado-cliente previsto no Estatuto da OAB. Sua confidencialidade é nossa prioridade absoluta.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
