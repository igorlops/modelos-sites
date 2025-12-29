"use client";

import Image from "next/image";
import Link from "next/link";
import {
    MapPin, Phone, Mail, Clock,
    Send, Users, Building2, Globe
} from "lucide-react";
import { useState } from "react";

export default function ContatoPage() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Solicitação enviada! Nossa equipe entrará em contato em breve.");
    };

    return (
        <div className="bg-stone-50 overflow-hidden font-sans">

            {/* 1. HERO CONTATO */}
            <section className="bg-slate-900 text-white py-20 border-b-4 border-amber-800">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 text-center">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Fale Conosco</span>
                    <h1 className="font-serif text-5xl font-bold mb-6">Atendimento Exclusivo</h1>
                    <p className="text-lg text-stone-300 font-light max-w-2xl mx-auto">
                        Estamos prontos para entender a complexidade do seu negócio e oferecer a melhor solução jurídica.
                    </p>
                </div>
            </section>

            {/* 2. FORMULÁRIO E INFO */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Formulário */}
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Envie sua Solicitação</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Nome Completo</label>
                                        <input
                                            type="text" name="name" required
                                            className="w-full bg-stone-50 border border-slate-200 rounded p-3 text-slate-700 focus:outline-none focus:border-amber-700 transition-colors"
                                            placeholder="Dr. João Silva"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Cargo / Empresa</label>
                                        <input
                                            type="text" name="company" required
                                            className="w-full bg-stone-50 border border-slate-200 rounded p-3 text-slate-700 focus:outline-none focus:border-amber-700 transition-colors"
                                            placeholder="Diretor Jurídico, Empresa X"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">E-mail Corporativo</label>
                                        <input
                                            type="email" name="email" required
                                            className="w-full bg-stone-50 border border-slate-200 rounded p-3 text-slate-700 focus:outline-none focus:border-amber-700 transition-colors"
                                            placeholder="joao@empresa.com.br"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Telefone / WhatsApp</label>
                                        <input
                                            type="tel" name="phone" required
                                            className="w-full bg-stone-50 border border-slate-200 rounded p-3 text-slate-700 focus:outline-none focus:border-amber-700 transition-colors"
                                            placeholder="(11) 99999-9999"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Área de Interesse</label>
                                    <select
                                        name="subject" required
                                        className="w-full bg-stone-50 border border-slate-200 rounded p-3 text-slate-700 focus:outline-none focus:border-amber-700 transition-colors"
                                    >
                                        <option value="">Selecione um assunto...</option>
                                        <option value="societario">Consultoria Societária / M&A</option>
                                        <option value="tributario">Contencioso Tributário</option>
                                        <option value="civel">Contencioso Cível Estratégico</option>
                                        <option value="trabalhista">Direito Trabalhista Patronal</option>
                                        <option value="compliance">Compliance & LGPD</option>
                                        <option value="outros">Outros Assuntos</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Breve Descrição da Demanda</label>
                                    <textarea
                                        name="message" rows={4} required
                                        className="w-full bg-stone-50 border border-slate-200 rounded p-3 text-slate-700 focus:outline-none focus:border-amber-700 transition-colors"
                                        placeholder="Descreva brevemente sua necessidade..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 shadow-lg">
                                    <Send size={18} /> Enviar Solicitação
                                </button>
                                <p className="text-xs text-slate-400 text-center">
                                    Ao enviar, você concorda com nossa Política de Privacidade. Suas informações estão seguras.
                                </p>
                            </form>
                        </div>

                        {/* Infos de Contato */}
                        <div className="space-y-12">
                            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <Building2 className="text-amber-700" /> Sede São Paulo
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-amber-700 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-bold text-slate-800">Endereço</p>
                                            <p className="text-slate-600">Av. Paulista, 1000, 15º Andar - Jardins<br />São Paulo - SP, CEP 01310-100</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="text-amber-700 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-bold text-slate-800">Telefones</p>
                                            <p className="text-slate-600">+55 (11) 3000-0000</p>
                                            <p className="text-slate-600">+55 (11) 99999-9999 (Plantão)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="text-amber-700 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-bold text-slate-800">E-mail</p>
                                            <p className="text-slate-600">contato@imperium.adv.br</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="text-amber-700 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-bold text-slate-800">Atendimento</p>
                                            <p className="text-slate-600">Segunda a Sexta: 09h às 19h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-slate-900 p-6 rounded-lg text-white text-center">
                                    <Globe className="mx-auto mb-3 text-amber-500" size={24} />
                                    <h4 className="font-bold mb-1">International Desk</h4>
                                    <p className="text-xs text-slate-400">Atendimento em Inglês, Espanhol e Francês.</p>
                                </div>
                                <div className="bg-amber-700 p-6 rounded-lg text-white text-center">
                                    <Users className="mx-auto mb-3 text-slate-900" size={24} />
                                    <h4 className="font-bold mb-1">Trabalhe Conosco</h4>
                                    <p className="text-xs text-amber-100">Envie seu CV para nosso banco de talentos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MAPA (IMAGEM ESTÁTICA) */}
            <section className="h-[400px] bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2670&auto=format&fit=crop"
                    alt="Mapa Localização"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white px-6 py-3 rounded shadow-xl flex items-center gap-2 animate-bounce">
                        <MapPin className="text-red-600 fill-red-600" />
                        <span className="font-bold text-slate-900">Sede Imperium</span>
                    </div>
                </div>
            </section>

        </div>
    );
}
