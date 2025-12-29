"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Star, Quote, Play, MessageSquare, ThumbsUp,
    ArrowRight, ShieldCheck, Heart, User
} from "lucide-react";

export default function DepoimentosPage() {
    const ratings = {
        google: 4.9,
        doctoralia: 5.0,
        nps: 98
    };

    const reviews = [
        {
            id: 1,
            name: "Fernanda Oliveira",
            treatment: "Harmonização Facial",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
            text: "A Dra. Sofia foi um anjo. Eu tinha muito medo de ficar artificial, mas ela entendeu exatamente o que eu queria. O resultado ficou tão natural que as pessoas dizem que estou mais bonita, mas não sabem o porquê.",
            stars: 5,
            date: "Há 2 semanas"
        },
        {
            id: 2,
            name: "Juliana Santos",
            treatment: "Bioestimuladores Corporais",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
            text: "Fiz o protocolo de glúteos e estou impressionada. A celulite sumiu e a firmeza voltou. A clínica é impecável, desde a recepção até o pós-procedimento. Recomendo de olhos fechados!",
            stars: 5,
            date: "Há 1 mês"
        },
        {
            id: 3,
            name: "Patricia Lima",
            treatment: "Botox Preventivo",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
            text: "Faço meu botox na Lumière há 3 anos e não troco por nada. A durabilidade é incrível e nunca fiquei com aquela expressão congelada. Profissionais de altíssimo nível.",
            stars: 5,
            date: "Há 3 meses"
        },
        {
            id: 4,
            name: "Roberta Alencar",
            treatment: "Laser Lavieen",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
            text: "Minha pele é outra! O Lavieen tirou todas as manchinhas de sol que eu tinha. O ambiente da clínica é super relaxante, parece que você está em um spa mesmo.",
            stars: 5,
            date: "Há 4 meses"
        },
        {
            id: 5,
            name: "Camila Costa",
            treatment: "Preenchimento Labial",
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
            text: "Boca perfeita e super hidratada. Amei o cuidado da Dra. em desenhar o contorno antes. Ficou super delicado e proporcional ao meu rosto.",
            stars: 5,
            date: "Há 5 meses"
        },
        {
            id: 6,
            name: "Eduarda Mello",
            treatment: "Ultraformer III",
            image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=1000&auto=format&fit=crop",
            text: "O efeito lifting é real! Senti meu rosto 'colar' de volta. O procedimento é tranquilo e a equipe dá todo suporte. Vale cada centavo o investimento.",
            stars: 5,
            date: "Há 6 meses"
        }
    ];

    return (
        <div className="bg-neutral-50 overflow-hidden">

            {/* 1. HERO DEPOIMENTOS */}
            <section className="relative py-24 bg-white text-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in">Nossa Reputação</span>
                    <h1 className="font-serif text-5xl md:text-7xl text-neutral-900 mb-8 animate-fade-in-up">
                        Histórias de Quem <br />Escolheu a <span className="text-rose-600">Lumière</span>
                    </h1>
                    <p className="text-xl text-neutral-500 font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up delay-100">
                        A satisfação de nossos pacientes é o nosso maior patrimônio. Veja o que dizem aqueles que já transformaram sua autoestima conosco.
                    </p>

                    <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-200">
                        <div className="p-6 bg-rose-50 rounded-3xl">
                            <p className="text-4xl font-serif font-bold text-rose-600 mb-2">{ratings.google}</p>
                            <div className="flex justify-center text-amber-400 mb-2"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                            <p className="text-sm font-bold text-neutral-600">Google Reviews</p>
                        </div>
                        <div className="p-6 bg-rose-50 rounded-3xl">
                            <p className="text-4xl font-serif font-bold text-rose-600 mb-2">{ratings.doctoralia}</p>
                            <div className="flex justify-center text-amber-400 mb-2"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                            <p className="text-sm font-bold text-neutral-600">Doctoralia</p>
                        </div>
                        <div className="p-6 bg-rose-50 rounded-3xl">
                            <p className="text-4xl font-serif font-bold text-rose-600 mb-2">{ratings.nps}%</p>
                            <div className="flex justify-center text-amber-400 mb-2"><ThumbsUp size={16} /></div>
                            <p className="text-sm font-bold text-neutral-600">NPS (Excelência)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. VÍDEO PRINCIPAL (HIGHLIGHT) */}
            <section className="py-12 px-6">
                <div className="container mx-auto">
                    <div className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl group cursor-pointer max-w-5xl mx-auto">
                        <Image
                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop"
                            alt="Video Depoimento"
                            fill
                            className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white transition-transform group-hover:scale-110">
                                <Play size={40} className="ml-2 text-white fill-current" />
                            </div>
                        </div>
                        <div className="absolute bottom-10 left-10 text-white">
                            <p className="font-serif text-3xl mb-2">Renata Vasconcellos</p>
                            <p className="text-rose-200 font-medium">"Recuperei minha confiança em apenas 2 meses"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. GRID DE DEPOIMENTOS TEXTUAIS */}
            <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="flex items-center justify-between mb-16">
                        <h2 className="font-serif text-4xl">Experiências Reais</h2>
                        <Link href="https://google.com" className="flex items-center gap-2 text-rose-400 hover:text-white transition-colors">
                            Ver tudo no Google <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="flex gap-1 text-amber-500 mb-6">
                                    {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-neutral-300 mb-8 italic leading-relaxed text-sm">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-rose-500/50">
                                        <Image src={review.image} alt={review.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-sm">{review.name}</p>
                                        <p className="text-rose-400 text-xs">{review.treatment}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WALL OF LOVE (MASONRY SIMULADO) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="font-serif text-4xl text-center text-neutral-900 mb-16">O Que Estão Falando Nas Redes</h2>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="break-inside-avoid bg-neutral-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full p-[2px]">
                                        <div className="w-full h-full bg-white rounded-full p-0.5">
                                            <Image src={`https://source.unsplash.com/random/100x100/?woman,${i}`} width={40} height={40} className="rounded-full w-full h-full object-cover" alt="User" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs text-neutral-900">@cliente_feliz{i}</p>
                                        <p className="text-[10px] text-neutral-400">Instagram Stories</p>
                                    </div>
                                </div>
                                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3">
                                    <Image src={`https://source.unsplash.com/random/400x500/?selfie,beauty,${i}`} fill className="object-cover" alt="Selfie" />
                                </div>
                                <p className="text-xs text-neutral-600">
                                    Simplesmente apaixonada pelo resultado! Obrigada @lumiere esthetique pelo carinho de sempre. ✨💖
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA AGENDAMENTO */}
            <section className="py-32 bg-rose-50 relative overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full blur-[100px] opacity-50" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-200 rounded-full blur-[100px] opacity-50" />

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
                    <h2 className="font-serif text-5xl md:text-6xl text-neutral-900 mb-8">Sua História Começa Aqui</h2>
                    <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
                        Não espere mais para se sentir bem com você mesma. Venha viver a experiência Lumière.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/sites-institucionais/premium/clinica-estetica-avancada/contato" className="px-12 py-5 bg-rose-600 text-white rounded-full font-bold text-lg hover:bg-rose-700 transition-colors shadow-xl hover:scale-105">
                            Agendar Minha Transformação
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
