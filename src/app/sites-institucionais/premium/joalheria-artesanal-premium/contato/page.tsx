"use client";

import {
    MapPin, Phone, Mail, Clock,
    MessageSquare, Calendar, Globe, Send,
    Instagram, Map
} from "lucide-react";
import Image from "next/image";

export default function ContatoPage() {
    return (
        <div className="bg-stone-50 font-sans text-stone-800">

            {/* 1. HERO CONTATO */}
            <section className="bg-stone-900 text-white min-h-[60vh] relative flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image src="https://images.unsplash.com/photo-1444530495635-029990f82ce8?q=80&w=2670&auto=format&fit=crop" fill alt="Hall de Entrada" className="object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950 to-transparent" />
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2">
                    <div className="space-y-8">
                        <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs block">Concierge Pessoal</span>
                        <h1 className="font-playfair italic text-5xl md:text-7xl">Atendimento Exclusivo</h1>
                        <p className="font-light text-stone-400 text-xl leading-relaxed max-w-md">
                            Estamos à sua disposição para assessorar na escolha do presente perfeito, no design de uma peça sob medida ou para cuidar de sua coleção.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-16 h-1 bg-amber-600" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INFOS E FORMULÁRIO */}
            <section className="-mt-20 pb-24 relative z-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="bg-white shadow-2xl p-8 md:p-16 grid lg:grid-cols-2 gap-16 border-t-4 border-amber-600">

                        {/* LADO ESQUERDO: INFOS */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="font-playfair text-3xl text-stone-900 mb-6">Canais de Atendimento</h3>
                                <p className="text-stone-500 font-light mb-8">Nossa equipe de especialistas gemólogos está disponível para atendê-lo com a discrição e atenção que você merece.</p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-stone-100 p-3 rounded-full text-amber-700"><Phone size={20} /></div>
                                        <div>
                                            <span className="font-bold text-xs uppercase tracking-widest text-stone-400 block mb-1">Telefone Principal</span>
                                            <p className="text-lg text-stone-800 font-playfair hover:text-amber-700 transition-colors cursor-pointer">+55 11 3062-0000</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-stone-100 p-3 rounded-full text-amber-700"><MessageSquare size={20} /></div>
                                        <div>
                                            <span className="font-bold text-xs uppercase tracking-widest text-stone-400 block mb-1">WhatsApp Concierge</span>
                                            <p className="text-lg text-stone-800 font-playfair hover:text-amber-700 transition-colors cursor-pointer">+55 11 99999-9999</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-stone-100 p-3 rounded-full text-amber-700"><Mail size={20} /></div>
                                        <div>
                                            <span className="font-bold text-xs uppercase tracking-widest text-stone-400 block mb-1">E-mail</span>
                                            <p className="text-lg text-stone-800 font-playfair hover:text-amber-700 transition-colors cursor-pointer">concierge@lartdor.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-stone-100">
                                <h3 className="font-playfair text-2xl text-stone-900 mb-6">Atelier Físico</h3>
                                <div className="flex items-start gap-4 mb-4">
                                    <MapPin size={24} className="text-amber-700 shrink-0 mt-1" />
                                    <p className="text-stone-600 font-light leading-relaxed">
                                        Rua Oscar Freire, 1234 - Jardins<br />
                                        São Paulo - SP, 01426-000<br />
                                        <a href="#" className="text-xs font-bold uppercase tracking-widest text-amber-600 border-b border-amber-600 mt-2 inline-block pb-1">Ver no Mapa</a>
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock size={24} className="text-amber-700 shrink-0 mt-1" />
                                    <p className="text-stone-600 font-light leading-relaxed">
                                        Segunda a Sexta: 10h às 19h<br />
                                        Sábado: 10h às 15h<br />
                                        <span className="text-stone-400 text-xs italic">*Recomendamos agendamento prévio.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* LADO DIREITO: FORMULÁRIO */}
                        <div className="bg-stone-50 p-8 md:p-12 border border-stone-100">
                            <h3 className="font-playfair text-2xl text-stone-900 mb-8 text-center">Enviar Mensagem</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Nome</label>
                                        <input type="text" className="w-full bg-white border border-stone-200 p-3 text-stone-800 focus:outline-none focus:border-amber-600 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Telefone</label>
                                        <input type="tel" className="w-full bg-white border border-stone-200 p-3 text-stone-800 focus:outline-none focus:border-amber-600 transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Assunto</label>
                                    <select className="w-full bg-white border border-stone-200 p-3 text-stone-800 focus:outline-none focus:border-amber-600 transition-colors">
                                        <option>Desejo criar uma joia sob medida (Bespoke)</option>
                                        <option>Informações sobre uma peça do site</option>
                                        <option>Agendar visita ao atelier</option>
                                        <option>Serviços de manutenção/limpeza</option>
                                        <option>Outros assuntos</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Mensagem</label>
                                    <textarea rows={5} className="w-full bg-white border border-stone-200 p-3 text-stone-800 focus:outline-none focus:border-amber-600 transition-colors"></textarea>
                                </div>
                                <div className="pt-4">
                                    <button type="submit" className="w-full bg-stone-900 text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors flex justify-center gap-2 items-center shadow-lg">
                                        Enviar Solicitação <Send size={16} />
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. MAPA WIDE */}
            <section className="h-[400px] bg-stone-200 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-stone-300 text-stone-500">
                    <div className="text-center">
                        <Map size={48} className="mx-auto mb-4 opacity-50" />
                        <p className="font-playfair italic text-2xl">Mapa Interativo Google Maps</p>
                        <p className="text-xs uppercase tracking-widest mt-2">Carregando visualização do satélite...</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
