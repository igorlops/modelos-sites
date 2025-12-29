"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Quote, Star, PlayCircle
} from "lucide-react";

export default function DepoimentosPage() {
    const testimonials = [
        {
            id: 1,
            name: "Família Oliveira",
            project: "Reserva Imperial",
            unit: "4 Quartos - 180m²",
            image: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2574&auto=format&fit=crop",
            text: "Foi a realização de um sonho. Desde o primeiro atendimento até a entrega das chaves, nos sentimos acolhidos. A qualidade do acabamento superou nossas expectativas."
        },
        {
            id: 2,
            name: "Ricardo e Juliana",
            project: "Vila Verde",
            unit: "2 Quartos - 65m²",
            image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2130&auto=format&fit=crop",
            text: "Compramos na planta para investir, mas gostamos tanto do projeto que decidimos morar. A área de lazer é incrível e valorizou muito desde o lançamento."
        },
        {
            id: 3,
            name: "Carlos Mendes",
            project: "Skyline Tower",
            unit: "Studio - 35m²",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
            text: "A localização é perfeita para minha rotina. O Studio é funcional, moderno e a construtora entregou tudo antes do prazo combinado. Recomendo de olhos fechados."
        },
        {
            id: 4,
            name: "Ana Paula e Filhos",
            project: "Horizonte Azul",
            unit: "3 Quartos - 90m²",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
            text: "A segurança do condomínio foi o fator decisivo. Meus filhos brincam livres na área externa e eu tenho tranquilidade. O pós-venda também é muito atencioso."
        }
    ];

    return (
        <div className="bg-zinc-50 font-sans text-slate-700">

            {/* 1. HERO DEPOIMENTOS */}
            <section className="bg-slate-900 text-white py-24 text-center">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">Histórias Reais de <span className="text-orange-500">Felicidade</span></h1>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-12">
                        Não construímos apenas paredes, construímos lares. Veja o que dizem as famílias que escolheram viver em um de nossos empreendimentos.
                    </p>
                    <div className="inline-flex items-center gap-12 bg-white/10 px-8 py-4 rounded-full backdrop-blur-md border border-white/10">
                        <div>
                            <span className="block font-bold text-2xl text-teal-400">98%</span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-300">Satisfação</span>
                        </div>
                        <div className="w-px h-8 bg-white/20" />
                        <div>
                            <span className="block font-bold text-2xl text-teal-400">12K+</span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-300">Famílias</span>
                        </div>
                        <div className="w-px h-8 bg-white/20" />
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} className="text-orange-500 fill-orange-500" />)}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. VÍDEO DESTAQUE */}
            <section className="-mt-16 container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 relative z-10 mb-24">
                <div className="bg-white p-4 rounded-3xl shadow-2xl relative group cursor-pointer hover:scale-[1.01] transition-transform duration-500">
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900">
                        <Image src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2670&auto=format&fit=crop" fill alt="Vídeo Depoimento" className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-900/50 group-hover:scale-110 transition-transform">
                                <PlayCircle size={40} className="text-white fill-white" />
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 text-white text-left">
                            <p className="font-bold text-lg">Família Silva - Residencial Jardins</p>
                            <p className="text-sm opacity-90">"A melhor decisão das nossas vidas"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. GRID DEPOIMENTOS */}
            <section className="py-12 mb-20">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {testimonials.map((item) => (
                            <div key={item.id} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-xl transition-all duration-300">
                                <Quote size={48} className="text-teal-100 absolute top-8 right-8" />

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 p-0.5">
                                        <div className="w-full h-full rounded-full overflow-hidden relative">
                                            <Image src={item.image} fill alt={item.name} className="object-cover" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-montserrat font-bold text-slate-900 leading-tight">{item.name}</h4>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wide text-teal-700">{item.project}</p>
                                        <p className="text-[10px] text-slate-400">{item.unit}</p>
                                    </div>
                                </div>

                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="text-orange-400 fill-orange-400" />)}
                                </div>

                                <p className="text-slate-600 leading-relaxed italic">
                                    "{item.text}"
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-teal-700 to-teal-600 rounded-3xl p-10 text-white text-center shadow-xl">
                        <h3 className="font-montserrat font-bold text-3xl mb-4">Já é cliente?</h3>
                        <p className="text-teal-100 mb-8 max-w-xl mx-auto">Queremos ouvir sua história! Seu depoimento pode inspirar outras famílias a realizarem seus sonhos.</p>
                        <button className="bg-white text-teal-700 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
                            Enviar Meu Depoimento
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
