"use client";

import Image from "next/image";
import Link from "next/link";
import {
    MapPin, Phone, Mail, Clock, Send, MessageSquare,
    Linkedin, Twitter, Facebook, Building, CheckCircle2,
    HelpCircle, ChevronDown, ChevronUp, Globe
} from "lucide-react";
import { useState } from "react";

export default function ContatoPage() {
    const [formStep, setFormStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "", email: "", role: "", company: "",
        revenue: "", sector: "", projectType: "", message: ""
    });
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setFormStep(prev => prev + 1);
    const prevStep = () => setFormStep(prev => prev - 1);

    const offices = [
        {
            city: "São Paulo",
            country: "Brasil",
            address: "Av. Eng. Luís Carlos Berrini, 1000 - 25º Andar",
            phone: "+55 (11) 3000-0000",
            email: "sp@strategic.com.br",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
        },
        {
            city: "Rio de Janeiro",
            country: "Brasil",
            address: "Av. Rio Branco, 500 - Centro",
            phone: "+55 (21) 3000-0000",
            email: "rj@strategic.com.br",
            image: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=2670&auto=format&fit=crop"
        },
        {
            city: "Belo Horizonte",
            country: "Brasil",
            address: "Savassi Center - Torre A",
            phone: "+55 (31) 3000-0000",
            email: "bh@strategic.com.br",
            image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-slate-50 overflow-hidden font-sans">

            {/* 1. HERO CONTACT */}
            <section className="bg-slate-900 text-white py-24 text-center border-b border-slate-800">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Vamos Discutir o Seu Futuro?</h1>
                    <p className="text-xl text-slate-300 font-light mb-8 max-w-2xl mx-auto">
                        Estamos prontos para ouvir seus desafios e propor soluções de alto impacto. Entre em contato com nossa equipe executiva.
                    </p>
                </div>
            </section>

            {/* 2. MAIN CONTENT (FORM & INFO) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left: Contact Info */}
                        <div className="lg:w-1/3 space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Canais Diretos</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Telefone Geral</p>
                                            <p className="text-slate-500 text-sm mb-1">+55 (11) 3000-0000</p>
                                            <p className="text-xs text-slate-400">Seg-Sex, 08h às 19h</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">E-mail Corporativo</p>
                                            <p className="text-slate-500 text-sm mb-1">contato@strategic.com.br</p>
                                            <p className="text-xs text-slate-400">Resposta em até 24h</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
                                            <MessageSquare size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Imprensa</p>
                                            <p className="text-slate-500 text-sm mb-1">press@strategic.com.br</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Siga-nos</h3>
                                <div className="flex gap-4">
                                    <Link href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={20} /></Link>
                                    <Link href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-400 hover:text-white transition-all"><Twitter size={20} /></Link>
                                    <Link href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-800 hover:text-white transition-all"><Facebook size={20} /></Link>
                                </div>
                            </div>
                        </div>

                        {/* Right: Multi-step Form */}
                        <div className="lg:w-2/3">
                            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Solicitar Proposta</h2>
                                    <p className="text-slate-500">Preencha o formulário abaixo para receber um contato de nossos consultores sêniores.</p>
                                </div>

                                {/* Progress Bar */}
                                <div className="flex gap-2 mb-8">
                                    <div className={`h-2 rounded-full flex-1 transition-all ${formStep >= 1 ? 'bg-blue-600' : 'bg-slate-200'}`} />
                                    <div className={`h-2 rounded-full flex-1 transition-all ${formStep >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`} />
                                    <div className={`h-2 rounded-full flex-1 transition-all ${formStep >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`} />
                                </div>

                                <form onSubmit={(e) => e.preventDefault()}>
                                    {formStep === 1 && (
                                        <div className="space-y-6 animate-fade-in">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" placeholder="Seu nome" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-2">Cargo</label>
                                                    <input type="text" name="role" value={formData.role} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" placeholder="Ex: CEO, Diretor..." />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">E-mail Corporativo</label>
                                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" placeholder="seu@empresa.com.br" />
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-2">Telefone / WhatsApp</label>
                                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" placeholder="(00) 00000-0000" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-2">LinkedIn (Opcional)</label>
                                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" placeholder="URL do perfil" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {formStep === 2 && (
                                        <div className="space-y-6 animate-fade-in">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">Empresa</label>
                                                <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" placeholder="Nome da sua empresa" />
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-2">Faturamento Anual (Estimado)</label>
                                                    <select name="revenue" value={formData.revenue} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white text-slate-600">
                                                        <option value="">Selecione</option>
                                                        <option value="<50M">Até R$ 50 Milhões</option>
                                                        <option value="50M-200M">R$ 50M - R$ 200M</option>
                                                        <option value="200M-1B">R$ 200M - R$ 1 Bilhão</option>
                                                        <option value=">1B">Acima de R$ 1 Bilhão</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-2">Setor de Atuação</label>
                                                    <select name="sector" value={formData.sector} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white text-slate-600">
                                                        <option value="">Selecione</option>
                                                        <option value="industry">Indústria</option>
                                                        <option value="finance">Serviços Financeiros</option>
                                                        <option value="retail">Varejo & Consumo</option>
                                                        <option value="tech">Tecnologia</option>
                                                        <option value="health">Saúde</option>
                                                        <option value="other">Outro</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {formStep === 3 && (
                                        <div className="space-y-6 animate-fade-in">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">Tipo de Projeto</label>
                                                <select name="projectType" value={formData.projectType} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white text-slate-600">
                                                    <option value="">Selecione o principal objetivo</option>
                                                    <option value="strategy">Planejamento Estratégico</option>
                                                    <option value="efficiency">Eficiência Operacional / Redução de Custos</option>
                                                    <option value="transformation">Transformação Digital</option>
                                                    <option value="ma">M&A / Fusões e Aquisições</option>
                                                    <option value="culture">Cultura & Liderança</option>
                                                    <option value="other">Outro</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-2">Mensagem (Opcional)</label>
                                                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" placeholder="Descreva brevemente seu desafio..." />
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex justify-between mt-8">
                                        {formStep > 1 && (
                                            <button type="button" onClick={prevStep} className="text-slate-500 font-bold px-6 py-3 hover:bg-slate-100 rounded-lg transition-colors">
                                                Voltar
                                            </button>
                                        )}
                                        {formStep < 3 ? (
                                            <button type="button" onClick={nextStep} className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors ml-auto shadow-lg">
                                                Próximo Passo
                                            </button>
                                        ) : (
                                            <button type="submit" className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors ml-auto shadow-lg flex items-center gap-2">
                                                Enviar Solicitação <Send size={18} />
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MAPA GLOBAL ESCRITÓRIOS */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <h2 className="text-3xl font-bold mb-12 text-center">Nossos Escritórios</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {offices.map((office, idx) => (
                            <div key={idx} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors group">
                                <div className="h-48 relative">
                                    <Image src={office.image} alt={office.city} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-slate-900/50" />
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-xl font-bold">{office.city}</h3>
                                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">{office.country}</p>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start gap-3 text-sm text-slate-300">
                                        <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                                        {office.address}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <Phone size={18} className="text-blue-500 shrink-0" />
                                        {office.phone}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <Mail size={18} className="text-blue-500 shrink-0" />
                                        {office.email}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Placeholder for actual map integration */}
                    <div className="mt-12 h-96 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                        <div className="text-center opacity-50">
                            <Globe size={64} className="mx-auto mb-4 text-blue-500" />
                            <p>Interactive Global Map Component</p>
                        </div>
                        {/* Visual effect for map */}
                        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10" />
                    </div>
                </div>
            </section>

            {/* 4. FAQ RÁPIDO */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Perguntas Frequentes</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Qual o prazo médio de resposta para novas propostas?", a: "Nosso time comercial analisa todas as solicitações e retorna em até 24 horas úteis para agendar uma conversa inicial de qualificação." },
                            { q: "Existe custo para o diagnóstico inicial?", a: "A primeira reunião de alinhamento e entendimento do desafio é gratuita. Para diagnósticos aprofundados que envolvem análise de dados e imersão, apresentamos uma proposta comercial específica." },
                            { q: "Vocês atendem projetos internacionais?", a: "Sim, temos experiência em projetos cross-border na América Latina, EUA e Europa, com consultores fluentes em inglês e espanhol." }
                        ].map((item, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                                >
                                    <span className="font-bold text-slate-900">{item.q}</span>
                                    {activeFaq === idx ? <ChevronUp size={20} className="text-blue-500" /> : <ChevronDown size={20} className="text-slate-400" />}
                                </button>
                                {activeFaq === idx && (
                                    <div className="p-6 bg-white text-slate-600 border-t border-slate-200">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
