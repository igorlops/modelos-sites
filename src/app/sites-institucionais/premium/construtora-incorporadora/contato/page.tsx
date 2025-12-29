"use client";

import { useState } from "react";
import Link from "next/link";
import {
    MapPin, Phone, Mail, Clock,
    Send, MessageCircle, Building2, Calendar
} from "lucide-react";
import Image from "next/image";

export default function ContatoPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Obrigado! Um consultor entrará em contato em breve.");
    };

    return (
        <div className="bg-slate-50 font-sans text-slate-700">

            {/* 1. HERO CONTACT */}
            <section className="bg-slate-900 text-white py-24 pb-32">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 text-center">
                    <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">Estamos Aqui Para <span className="text-orange-500">Você</span></h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        Seja para realizar o sonho da casa própria, investir ou tirar dúvidas. Nossa equipe de especialistas está pronta para atender.
                    </p>
                </div>
            </section>

            {/* 2. CARDS FLUTUANTES + FORM */}
            <section className="-mt-20 pb-24">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* INFO CARDS */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Central Vendas */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-700 mb-6">
                                    <Phone size={24} />
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Central de Vendas</h3>
                                <p className="text-slate-500 text-sm mb-6">Atendimento exclusivo para novos negócios e informações sobre lançamentos.</p>
                                <div className="space-y-3">
                                    <a href="#" className="flex items-center gap-3 font-bold text-slate-800 hover:text-orange-600 transition-colors">
                                        <span className="text-lg">0800 123 4567</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-3 font-bold text-teal-600 hover:text-teal-700 transition-colors p-2 bg-teal-50 rounded-lg justify-center">
                                        <MessageCircle size={18} /> Chamar no WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Sede */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-6">
                                    <Building2 size={24} />
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Sede Administrativa</h3>
                                <p className="text-slate-500 text-sm mb-4">Av. Paulista, 1000 - 15º Andar<br />Jardins, São Paulo - SP</p>
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                                    <Clock size={14} /> Seg-Sex: 09h às 18h
                                </div>
                            </div>
                        </div>

                        {/* MAIN FORM */}
                        <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
                            <h3 className="font-montserrat font-bold text-3xl text-slate-900 mb-2">Envie sua mensagem</h3>
                            <p className="text-slate-500 mb-8">Preencha o formulário abaixo e retornaremos em até 2 horas.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase">Nome Completo</label>
                                        <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-teal-500 focus:bg-white transition-all" placeholder="Seu nome" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase">Telefone / WhatsApp</label>
                                        <input type="tel" required className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-teal-500 focus:bg-white transition-all" placeholder="(11) 99999-9999" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase">E-mail</label>
                                        <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-teal-500 focus:bg-white transition-all" placeholder="seu@email.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase">Assunto</label>
                                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-teal-500 focus:bg-white transition-all text-slate-600">
                                            <option>Quero comprar um imóvel</option>
                                            <option>Informações sobre financiamento</option>
                                            <option>Sou fornecedor</option>
                                            <option>Trabalhe Conosco</option>
                                            <option>Outros assuntos</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 uppercase">Mensagem</label>
                                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-teal-500 focus:bg-white transition-all" placeholder="Como podemos ajudar?" />
                                </div>

                                <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input type="checkbox" className="mt-1 w-4 h-4 accent-teal-600 rounded" />
                                        <span className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors leading-tight max-w-xs">
                                            Concordo em receber contatos e ofertas de acordo com a Política de Privacidade.
                                        </span>
                                    </label>
                                    <button type="submit" className="w-full md:w-auto bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-teal-700/20 hover:shadow-teal-700/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                        Enviar Mensagem <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. MAPA / PLANTÕES */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <h2 className="font-montserrat font-bold text-3xl text-center mb-12 text-slate-900">Nossos Plantões de Venda</h2>
                    <div className="bg-slate-100 rounded-3xl overflow-hidden h-[400px] relative group grayscale hover:grayscale-0 transition-all duration-700">
                        {/* Static Map Image */}
                        <Image
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
                            alt="Mapa"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
                                <MapPin size={24} className="text-orange-600 fill-orange-600" />
                                <div className="text-left">
                                    <p className="font-bold text-slate-900 leading-none">Visite os Decorados</p>
                                    <p className="text-xs text-slate-500 mt-1">Clique para abrir no Waze</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        {["Reserva Imperial (Jardins)", "Vila Verde (Zona Sul)", "Skyline (Centro)"].map((p, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all cursor-pointer bg-white">
                                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-700 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-slate-800">{p}</p>
                                    <p className="text-xs text-slate-500">Aberto todos os dias</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
