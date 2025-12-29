"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Star, Quote, Play, ThumbsUp, MessageCircle,
    UserCheck, ShieldCheck, TrendingUp, Heart
} from "lucide-react";

export default function DepoimentosPage() {
    const reviews = [
        {
            id: 1,
            name: "Roberto Almeida",
            role: "Empresário",
            location: "Campinas, SP",
            rating: 5,
            text: "A melhor decisão financeira que tomei para minha empresa nos últimos 5 anos. O ROI foi mais rápido do que o prometido e o suporte técnico é impecável. Minha conta caiu de R$ 4.500 para R$ 120 mensais.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "Fernanda Costa",
            role: "Residencial",
            location: "Sorocaba, SP",
            rating: 5,
            text: "Estava receosa com a instalação no telhado novo, mas a equipe foi extremamente cuidadosa. Não quebraram uma telha sequer e deixaram tudo limpo. O app de monitoramento é viciante!",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 3,
            name: "Carlos & Ana",
            role: "Aposentados",
            location: "Jundiaí, SP",
            rating: 5,
            text: "Investimos nossas economias para garantir tranquilidade na aposentadoria e valeu cada centavo. A equipe nos explicou tudo com muita paciência. Recomendo de olhos fechados.",
            image: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        {
            id: 4,
            name: "Dr. Paulo Mendes",
            role: "Clínica Odontológica",
            location: "São Paulo, SP",
            rating: 5,
            text: "Sustentabilidade é um valor importante para minha clínica. Além da economia absurda, meus pacientes elogiam a iniciativa. O marketing verde agregou muito valor à minha marca.",
            image: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
            id: 5,
            name: "Marina Silva",
            role: "Síndica",
            location: "Barueri, SP",
            rating: 5,
            text: "A aprovação na assembleia foi difícil, mas hoje sou aplaudida pelos condôminos. A redução na taxa de condomínio foi real e imediata. A SolarPro enviou engenheiros que esclareceram todas as dúvidas.",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            id: 6,
            name: "Ricardo Oliveira",
            role: "Produtor Rural",
            location: "Itu, SP",
            rating: 5,
            text: "No campo a energia é instável, mas agora tenho autonomia. O sistema de bombeamento solar funciona o dia todo sem gastar diesel. O atendimento pós-venda é o diferencial.",
            image: "https://randomuser.me/api/portraits/men/91.jpg"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">

            {/* 1. HERO DEPOIMENTOS */}
            <section className="relative py-24 bg-sky-950 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1556912172-4545a97a8d2d?q=80&w=2670&auto=format&fit=crop"
                        alt="Clientes Felizes"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-950 via-sky-950/90 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 text-center max-w-4xl">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in">Confiança Comprovada</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 animate-fade-in-up">O que dizem nossos <span className="text-emerald-400">12.000+ Clientes</span></h1>
                    <p className="text-xl text-sky-200 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-100">
                        A satisfação de quem já economiza é a nossa maior garantia. Veja histórias reais de transformação.
                    </p>

                    <div className="flex justify-center gap-8 mt-12 animate-fade-in-up delay-200">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-1">4.9/5</div>
                            <div className="text-xs text-sky-300 uppercase flex justify-center gap-1">
                                <Star size={12} fill="currentColor" className="text-amber-400" />
                                <Star size={12} fill="currentColor" className="text-amber-400" />
                                <Star size={12} fill="currentColor" className="text-amber-400" />
                                <Star size={12} fill="currentColor" className="text-amber-400" />
                                <Star size={12} fill="currentColor" className="text-amber-400" />
                            </div>
                            <div className="text-[10px] text-sky-400 mt-1">Google Reviews</div>
                        </div>
                        <div className="w-px bg-sky-800 h-16" />
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-1">NPS 92</div>
                            <div className="text-xs text-sky-300 uppercase">Zona de Excelência</div>
                            <div className="text-[10px] text-sky-400 mt-1">Net Promoter Score</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. VÍDEOS EM DESTAQUE */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
                        <Play size={32} className="text-amber-500 fill-current" /> Histórias em Vídeo
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative aspect-video group cursor-pointer">
                            <Image
                                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2672&auto=format&fit=crop"
                                alt="Case Residencial"
                                fill
                                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                                    <Play size={40} className="text-white ml-2 fill-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-2">Família Oliveira</h3>
                                <p className="text-sky-200">"Nossa conta zerou no primeiro mês."</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative aspect-video group cursor-pointer">
                            <Image
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop"
                                alt="Case Empresarial"
                                fill
                                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                                    <Play size={40} className="text-white ml-2 fill-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-2">Padaria Central</h3>
                                <p className="text-sky-200">"A economia pagou o financiamento e sobrou."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. GRID DE DEPOIMENTOS TEXTO */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative hover:-translate-y-2 transition-transform duration-300">
                                <Quote size={40} className="text-sky-100 absolute top-8 right-8" rotate={180} />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="text-amber-400 fill-current" />
                                    ))}
                                </div>

                                <p className="text-slate-600 mb-8 leading-relaxed min-h-[120px]">
                                    "{review.text}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                    <div className="w-12 h-12 rounded-full relative overflow-hidden bg-slate-200 shrink-0">
                                        <Image src={review.image} alt={review.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                                        <p className="text-xs text-slate-500">{review.role} • {review.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-600 font-bold transition-colors">
                            <MessageCircle size={20} /> Carregar mais depoimentos
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. REVIEWS EXTERNOS (WIDGET PLACEHOLDER) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-20">
                    <div className="bg-slate-50 rounded-[2rem] p-12 text-center border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Transparência Total</h3>
                        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex flex-col items-center gap-2">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" width={100} height={30} />
                                <span className="font-bold text-slate-900">4.9/5 estrelas</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width={40} height={40} />
                                <span className="font-bold text-slate-900">5.0/5 estrelas</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <ShieldCheck size={40} className="text-emerald-500" />
                                <span className="font-bold text-slate-900">Reclame Aqui: 10/10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA SEJA O PRÓXIMO */}
            <section className="py-24 bg-gradient-to-br from-emerald-600 to-sky-600 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />

                <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
                    <Heart size={64} className="mx-auto mb-8 text-white/80 animate-pulse" />
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Nossos clientes amam economizar</h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Junte-se à comunidade que mais cresce no Brasil. Transforme seu telhado em renda e deixe o sol pagar suas contas.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/sites-institucionais/premium/energia-solar/contato" className="px-10 py-5 bg-amber-500 hover:bg-amber-400 text-sky-950 font-bold rounded-xl text-lg shadow-xl shadow-amber-900/20 transition-all hover:scale-105">
                            Quero minha Proposta
                        </Link>
                        <Link href="/sites-institucionais/premium/energia-solar/portfolio" className="px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl text-lg backdrop-blur transition-all">
                            Ver Fotos de Obras
                        </Link>
                    </div>

                    <p className="mt-8 text-sm opacity-80 font-medium">
                        <UserCheck size={16} className="inline mr-1" /> Mais de 500 propostas enviadas este mês.
                    </p>
                </div>
            </section>

        </div>
    );
}
