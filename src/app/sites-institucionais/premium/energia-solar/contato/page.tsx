"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Phone, Mail, MapPin, Clock, Send, MessageSquare,
    CheckCircle2, AlertCircle, Sun, ArrowRight, Instagram, Facebook, Linkedin
} from "lucide-react";

export default function ContatoPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", city: "", bill: "", message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate API call
        setTimeout(() => setFormStatus("success"), 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-slate-50 min-h-screen">

            {/* 1. HERO FALE CONOSCO */}
            <section className="relative py-24 bg-sky-950 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2670&auto=format&fit=crop"
                        alt="Contato Solar"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-950 via-sky-900/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in"><Sun size={16} className="inline mr-2" /> Vamos Conversar?</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 animate-fade-in-up">Comece sua Economia <span className="text-emerald-400">Agora</span></h1>
                    <p className="text-xl text-sky-200 max-w-2xl leading-relaxed animate-fade-in-up delay-100">
                        Nossos engenheiros estão prontos para dimensionar o projeto ideal para suas necessidades. Solicite um estudo gratuito sem compromisso.
                    </p>
                </div>
            </section>

            {/* 2. FORMULÁRIO E INFORMAÇÕES */}
            <section className="py-24 -mt-20 relative z-20">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">

                        {/* Lado Esquerdo: Info */}
                        <div className="lg:w-1/3 bg-slate-900 text-white p-12 lg:p-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10 space-y-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Canais de Atendimento</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Prefere falar diretamente? Nossa equipe de atendimento está disponível para tirar suas dúvidas agora mesmo.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Telefone</p>
                                            <p className="font-bold text-lg">0800 123 4567</p>
                                            <p className="text-sm text-slate-400">(11) 99999-9999</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">E-mail</p>
                                            <p className="font-bold text-lg">contato@solarpro.com.br</p>
                                            <p className="text-sm text-slate-400">projetos@solarpro.com.br</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Matriz</p>
                                            <p className="font-bold text-lg">Av. Paulista, 1000</p>
                                            <p className="text-sm text-slate-400">São Paulo, SP - CEP 01310-100</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/10">
                                    <p className="font-bold mb-4">Siga nossas redes</p>
                                    <div className="flex gap-4">
                                        <Link href="#" className="p-3 bg-white/5 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors"><Instagram size={20} /></Link>
                                        <Link href="#" className="p-3 bg-white/5 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors"><Facebook size={20} /></Link>
                                        <Link href="#" className="p-3 bg-white/5 rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors"><Linkedin size={20} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lado Direito: Form */}
                        <div className="lg:w-2/3 p-12 lg:p-16 bg-white">
                            {formStatus === "success" ? (
                                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Solicitação Recebida!</h3>
                                    <p className="text-lg text-slate-600 max-w-md mx-auto mb-8">
                                        Nossa equipe de engenharia já está analisando seus dados. Em até 24 horas entraremos em contato com seu estudo preliminar.
                                    </p>
                                    <button
                                        onClick={() => setFormStatus("idle")}
                                        className="px-8 py-3 border-2 border-slate-200 rounded-xl font-bold text-slate-600 hover:border-sky-600 hover:text-sky-600 transition-colors"
                                    >
                                        Enviar nova mensagem
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicite seu Orçamento</h3>
                                        <p className="text-slate-500">Preencha os dados abaixo para receber um estudo de viabilidade personalizado.</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Nome Completo</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium"
                                                placeholder="Seu nome"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">E-mail</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium"
                                                placeholder="seu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Telefone / WhatsApp</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium"
                                                placeholder="(00) 00000-0000"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Cidade e Estado</label>
                                            <input
                                                required
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium"
                                                placeholder="Ex: São Paulo, SP"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Valor Médio da Conta de Luz</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">R$</span>
                                                <input
                                                    required
                                                    type="number"
                                                    name="bill"
                                                    value={formData.bill}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium"
                                                    placeholder="0,00"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Tipo de Imóvel</label>
                                            <select
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium text-slate-600"
                                            >
                                                <option>Residencial</option>
                                                <option>Comercial</option>
                                                <option>Industrial</option>
                                                <option>Rural</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Mensagem (Opcional)</label>
                                        <textarea
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium resize-none"
                                            placeholder="Gostaria de saber mais sobre..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === "submitting"}
                                        className="w-full py-4 bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {formStatus === "submitting" ? (
                                            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <>Enviar Solicitação <Send size={20} /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MAPA (STATIC PLACEHOLDER) */}
            <section className="h-96 relative w-full bg-slate-200 grayscale">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <MapPin size={48} className="text-amber-500 mx-auto mb-2 animate-bounce" />
                        <p className="font-bold text-slate-500">Google Maps Integrado</p>
                    </div>
                </div>
                {/* In production would use Google Maps Embed API */}
                <div className="absolute inset-0 bg-slate-200 opacity-20" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")' }} />
            </section>

            {/* 4. FAQ RÁPIDO */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Perguntas Frequentes sobre Atendimento</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Clock size={16} className="text-sky-600" /> Qual o prazo de resposta?</h4>
                            <p className="text-sm text-slate-600">Nossa equipe comercial responde a todas as solicitações em até 24 horas úteis com uma prévia do estudo.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><MapPin size={16} className="text-sky-600" /> Vocês atendem minha cidade?</h4>
                            <p className="text-sm text-slate-600">Atendemos todo o estado de SP e capitais da região Sudeste. Para outras regiões, consulte nossos parceiros.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
