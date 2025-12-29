"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    MapPin, Phone, Mail, Clock, Calendar, MessageCircle,
    Instagram, Facebook, Send, CheckCircle2, AlertCircle
} from "lucide-react";

export default function ContatoPage() {
    const [formStep, setFormStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        treatment: "",
        message: ""
    });
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => setSuccess(true), 1000);
    };

    return (
        <div className="bg-neutral-50 overflow-hidden">

            {/* 1. HERO CONTATO */}
            <section className="relative py-24 bg-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2670&auto=format&fit=crop"
                        alt="Recepção"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-950/80 via-neutral-900/50 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center max-w-4xl">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in">Fale Conosco</span>
                    <h1 className="font-serif text-5xl md:text-7xl font-medium mb-8 animate-fade-in-up">
                        Estamos Esperando <br /><span className="text-rose-400">Por Você</span>
                    </h1>
                    <p className="text-xl text-neutral-300 font-light leading-relaxed mb-8 animate-fade-in-up delay-100">
                        Agende sua avaliação, tire dúvidas ou venha nos visitar. Nossa equipe de concierge está à disposição para oferecer o melhor atendimento.
                    </p>
                </div>
            </section>

            {/* 2. INFORMAÇÕES E FORMULÁRIO */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-rose-50">

                        {/* Lado Esquerdo - Infos */}
                        <div className="lg:w-2/5 bg-rose-950 text-white p-12 lg:p-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 rounded-full blur-[100px] opacity-20" />
                            <div className="relative z-10">
                                <h3 className="font-serif text-3xl mb-8">Informações de Contato</h3>

                                <div className="space-y-10">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <MapPin className="text-rose-400" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg mb-1">Nosso Endereço</p>
                                            <p className="text-rose-100/70 leading-relaxed">
                                                Rua Oscar Freire, 1200 - 5º Andar<br />
                                                Jardins, São Paulo - SP<br />
                                                CEP 01426-000
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <Phone className="text-rose-400" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg mb-1">Telefones</p>
                                            <p className="text-rose-100/70 font-mono">
                                                (11) 3062-0000<br />
                                                (11) 99999-8888 (WhatsApp)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <Clock className="text-rose-400" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg mb-1">Horário de Atendimento</p>
                                            <p className="text-rose-100/70">
                                                Segunda a Sexta: 08h às 20h<br />
                                                Sábado: 09h às 15h
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-white/10">
                                        <p className="text-sm font-bold uppercase tracking-widest mb-4 text-center lg:text-left">Siga-nos</p>
                                        <div className="flex gap-4 justify-center lg:justify-start">
                                            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-rose-900 transition-all"><Instagram size={18} /></Link>
                                            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-rose-900 transition-all"><Facebook size={18} /></Link>
                                            <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-rose-900 transition-all"><MessageCircle size={18} /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lado Direito - Formulário */}
                        <div className="lg:w-3/5 p-12 lg:p-16 bg-white">
                            {!success ? (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div>
                                        <h3 className="font-serif text-3xl text-neutral-900 mb-2">Envie uma Mensagem</h3>
                                        <p className="text-neutral-500">Preencha o formulário abaixo e entraremos em contato em até 24h.</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-neutral-700">Nome Completo</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all"
                                                placeholder="Digite seu nome"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-neutral-700">Telefone / WhatsApp</label>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all"
                                                placeholder="(00) 00000-0000"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-neutral-700">E-mail</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all"
                                            placeholder="seu@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-neutral-700">Interesse Principal</label>
                                        <select
                                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all text-neutral-600"
                                            value={formData.treatment}
                                            onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                                        >
                                            <option value="">Selecione um tratamento</option>
                                            <option value="facial">Harmonização Facial</option>
                                            <option value="corporal">Tratamentos Corporais</option>
                                            <option value="intimo">Estética Íntima</option>
                                            <option value="capilar">Terapia Capilar</option>
                                            <option value="outro">Outros / Dúvidas</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-neutral-700">Mensagem (Opcional)</label>
                                        <textarea
                                            rows={4}
                                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all"
                                            placeholder="Conte um pouco sobre sua queixa ou objetivo..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <button type="submit" className="w-full py-4 bg-rose-600 text-white font-bold rounded-xl shadow-lg hover:bg-rose-700 hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                        Enviar Solicitação <Send size={20} />
                                    </button>
                                </form>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="font-serif text-3xl text-neutral-900 mb-4">Solicitação Enviada!</h3>
                                    <p className="text-neutral-500 max-w-md mb-8">
                                        Obrigado pelo contato, {formData.name.split(' ')[0]}. Nossa equipe de concierge já recebeu sua mensagem e entrará em contato em breve.
                                    </p>
                                    <button onClick={() => setSuccess(false)} className="text-rose-600 font-bold hover:underline">
                                        Enviar nova mensagem
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MAPA WIDE */}
            <section className="h-[500px] relative w-full grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.065688537466!2d-46.66614132463372!3d-23.56007996177119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd33f42b3b%3A0x644265cc2f10255!2sR.%20Oscar%20Freire%2C%201200%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001426-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0"
                />
                <div className="absolute bottom-10 left-10 z-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-neutral-900">Estacionamento com Valet</p>
                            <p className="text-xs text-neutral-500 mt-1">Disponível no local para seu total conforto e segurança durante o atendimento.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ RÁPIDO */}
            <section className="py-24 bg-rose-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
                    <h2 className="font-serif text-3xl mb-12">Dúvidas Comuns</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-rose-600 mb-2 flex items-center gap-2"><AlertCircle size={16} /> Convênios</h4>
                            <p className="text-sm text-neutral-500">Trabalhamos com sistema de reembolso para consultas médicas. Procedimentos estéticos são particulares.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-rose-600 mb-2 flex items-center gap-2"><Calendar size={16} /> Agendamento</h4>
                            <p className="text-sm text-neutral-500">Recomendamos agendar com antecedência mínima de 1 semana para garantir horários preferenciais.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-rose-600 mb-2 flex items-center gap-2"><CreditCard size={16} /> Pagamento</h4> {/* Simulating icon */}
                            <p className="text-sm text-neutral-500">Aceitamos todos os cartões de crédito, débito e PIX. Parcelamento disponível em até 12x.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

// Icon helper since CreditCard wasn't imported initially
function CreditCard(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
}
