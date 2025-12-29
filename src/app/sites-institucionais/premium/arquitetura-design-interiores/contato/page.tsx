"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight, Instagram, Linkedin, Facebook, Send } from "lucide-react";
import Image from "next/image";

export default function ContatoPage() {
    const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulando envio
        setTimeout(() => {
            setFormStatus("success");
        }, 2000);
    };

    return (
        <div className="pt-24 min-h-screen bg-stone-50">
            {/* 1. Hero Contato */}
            <section className="bg-stone-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Fale Conosco</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Vamos Conversar?</h1>
                    <p className="text-xl text-stone-300 max-w-2xl mx-auto">
                        Estamos prontos para ouvir sobre o seu projeto. Preencha o formulário ou utilize um dos nossos canais diretos abaixo.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-24 -mt-10 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">

                    {/* 2. Informações de Contato (Sidebar) */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
                            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">Canais Diretos</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-1">Telefone & WhatsApp</p>
                                        <p className="text-lg font-medium text-stone-900">+55 (11) 3333-4444</p>
                                        <p className="text-lg font-medium text-stone-900">+55 (11) 99999-9999</p>
                                        <p className="text-sm text-stone-500 mt-1">Seg-Sex, 9h às 18h</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-1">E-mail</p>
                                        <p className="text-lg font-medium text-stone-900">contato@archpremium.com.br</p>
                                        <p className="text-lg font-medium text-stone-900">novosprojetos@archpremium.com.br</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-1">Nosso Escritório</p>
                                        <p className="text-stone-900 leading-relaxed font-medium">
                                            Av. Faria Lima, 4500 - Andar 15<br />
                                            Itaim Bibi, São Paulo - SP<br />
                                            CEP: 04538-133
                                        </p>
                                        <a href="#" className="text-amber-600 text-sm font-bold mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all">
                                            Ver no Google Maps <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-stone-100">
                                <p className="text-stone-500 text-sm mb-4 font-medium">Siga-nos nas redes:</p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-amber-600 hover:text-white transition-all duration-300">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-blue-700 hover:text-white transition-all duration-300">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Formulário Avançado */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100 h-full">
                            <div className="mb-10">
                                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Inicie seu Projeto</h2>
                                <p className="text-stone-600">
                                    Conte-nos um pouco sobre suas ideias. Nossa equipe técnica analisará suas informações e entrará em contato para agendar uma reunião de briefing detalhada.
                                </p>
                            </div>

                            {formStatus === "success" ? (
                                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                                        <Send size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">Mensagem Enviada!</h3>
                                    <p className="text-emerald-700 mb-6">Recebemos sua solicitação com sucesso. Em breve nossa equipe entrará em contato.</p>
                                    <button onClick={() => setFormStatus("idle")} className="text-emerald-600 font-bold hover:underline">Enviar nova mensagem</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-stone-700 uppercase tracking-wide">Nome Completo *</label>
                                            <input
                                                required
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-stone-400"
                                                placeholder="Ex: João Silva"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-stone-700 uppercase tracking-wide">E-mail Profissional *</label>
                                            <input
                                                required
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-stone-400"
                                                placeholder="Ex: joao@empresa.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-bold text-stone-700 uppercase tracking-wide">Telefone / WhatsApp *</label>
                                            <input
                                                required
                                                type="tel"
                                                id="phone"
                                                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-stone-400"
                                                placeholder="Ex: (11) 99999-9999"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="service" className="text-sm font-bold text-stone-700 uppercase tracking-wide">Serviço de Interesse *</label>
                                            <select
                                                required
                                                id="service"
                                                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-stone-600"
                                            >
                                                <option value="">Selecione uma opção</option>
                                                <option value="arquitetura">Arquitetura Residencial</option>
                                                <option value="interiores">Design de Interiores</option>
                                                <option value="corporativo">Projeto Corporativo</option>
                                                <option value="reforma">Reforma Completa</option>
                                                <option value="consultoria">Consultoria Técnica</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-stone-700 uppercase tracking-wide">Detalhes do Projeto *</label>
                                        <textarea
                                            required
                                            id="message"
                                            rows={6}
                                            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-stone-400 resize-none"
                                            placeholder="Conte um pouco sobre o imóvel (metragem, localização), suas expectativas e prazo desejado..."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" id="privacy" className="w-5 h-5 rounded border-stone-300 text-amber-600 focus:ring-amber-500" required />
                                        <label htmlFor="privacy" className="text-sm text-stone-500">
                                            Concordo com a <a href="#" className="text-amber-600 hover:underline">Política de Privacidade</a> e autorizo o contato.
                                        </label>
                                    </div>

                                    <button
                                        disabled={formStatus === "submitting"}
                                        type="submit"
                                        className={`w-full py-4 bg-stone-900 text-white rounded-xl font-bold text-lg hover:bg-amber-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : ""}`}
                                    >
                                        {formStatus === "submitting" ? (
                                            <>Enviando...</>
                                        ) : (
                                            <>Enviar Solicitação <Send size={20} /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. FAQ Atendimento */}
            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Perguntas Frequentes sobre Atendimento</h2>
                    <div className="grid gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                            <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2"><MessageSquare size={18} className="text-amber-600" /> Qual o prazo de resposta?</h4>
                            <p className="text-stone-600 text-sm">Nossa equipe comercial responde a todas as solicitações em até 24 horas úteis. Se for urgente, recomendamos o contato via WhatsApp.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                            <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2"><MessageSquare size={18} className="text-amber-600" /> Vocês fazem visita técnica antes do orçamento?</h4>
                            <p className="text-stone-600 text-sm">Para reformas e construções, a visita técnica é essencial para um orçamento preciso. Ela pode ter um custo inicial que é abatido caso o projeto seja fechado.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                            <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2"><MessageSquare size={18} className="text-amber-600" /> Como funciona a primeira reunião?</h4>
                            <p className="text-stone-600 text-sm">A primeira reunião (Briefing) é gratuita e serve para nos conhecermos. Pode ser presencial em nosso escritório ou via videoconferência.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Mapa (Imagem Estática para Layout) */}
            <div className="h-[400px] bg-stone-200 relative w-full grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
                    alt="Mapa Localização"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-xl flex items-center gap-2 animate-bounce">
                        <MapPin className="text-amber-600" fill="currentColor" />
                        <span className="font-bold text-stone-900">ArchPremium Headquarters</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
