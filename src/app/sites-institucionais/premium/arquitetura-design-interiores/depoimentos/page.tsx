import Image from "next/image";
import Link from "next/link";
import { Star, Quote, Play } from "lucide-react";

export default function DepoimentosPage() {
    const testimonials = [
        {
            id: 1,
            name: "Ricardo Almeida",
            role: "CEO, TechSolutions",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "A equipe captou exatamente a essência que buscávamos. Não foi apenas uma reforma, foi uma ressignificação do nosso lar. O nível de detalhe impressiona.",
            project: "Residência Alto da Boa Vista",
            rating: 5
        },
        {
            id: 2,
            name: "Patrícia Souza",
            role: "Advogada",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "Profissionalismo impecável. O cronograma foi seguido à risca e a gestão do orçamento foi transparente do início ao fim. Recomendo de olhos fechados para quem busca excelência.",
            project: "Loft Vila Madalena",
            rating: 5
        },
        {
            id: 3,
            name: "Marcelo Vivara",
            role: "Diretor Criativo",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            text: "O escritório novo transformou a cultura da nossa empresa. Ambientes que estimulam a criatividade e o bem-estar. O ROI desse projeto é incalculável em termos de produtividade.",
            project: "Sede TechSolutions",
            rating: 5
        },
        {
            id: 4,
            name: "Ana Clara",
            role: "Médica Dermatologista",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "Minha clínica precisava transmitir sofisticação e acolhimento. A ArchPremium conseguiu equilibrar a técnica exigida pela vigilância com uma estética de hotel de luxo.",
            project: "Clínica Dermatológica",
            rating: 5
        },
        {
            id: 5,
            name: "Eduardo & Mônica",
            role: "Empresários",
            image: "https://randomuser.me/api/portraits/men/46.jpg",
            text: "Ver nossa casa de campo sair do papel foi um sonho. A integração com a natureza ficou perfeita. O acompanhamento da obra nos deu total segurança, mesmo à distância.",
            project: "Casa de Campo Itu",
            rating: 4.5
        },
        {
            id: 6,
            name: "Roberto Campos",
            role: "Chef de Cozinha",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
            text: "O layout da cozinha industrial ficou perfeito, mas o salão... é uma obra de arte. A acústica e a iluminação criaram exatamente a atmosfera intimista que eu queria.",
            project: "Restaurante Origem",
            rating: 5
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-stone-50">
            {/* 1. Hero Depoimentos */}
            <section className="bg-white border-b border-stone-200 py-20">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">Feedback Real</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Histórias de Transformação</h1>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                        A satisfação dos nossos clientes é o nosso maior prêmio. Veja o que dizem aqueles que já vivem a experiência ArchPremium.
                    </p>
                </div>
            </section>

            {/* 2. Video Destaque */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-stone-900 aspect-video max-w-5xl mx-auto group cursor-pointer">
                        <Image
                            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop"
                            alt="Video Depoimento Capa"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/40">
                                <Play size={32} className="text-white ml-2" fill="currentColor" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">A Jornada da Casa Horizonte</h2>
                            <p className="text-stone-300 text-lg max-w-2xl">
                                Assista ao mini-documentário sobre como transformamos um terreno íngreme em uma obra-prima da arquitetura moderna.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Grid Depoimentos */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t) => (
                            <div key={t.id} className="bg-stone-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col relative group">
                                <Quote className="absolute top-6 right-6 text-stone-200 group-hover:text-amber-200 transition-colors" size={60} />

                                <div className="flex gap-1 text-amber-500 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill={i < Math.floor(t.rating) ? "currentColor" : "none"} className={i >= Math.floor(t.rating) ? "text-stone-300" : ""} />
                                    ))}
                                </div>

                                <p className="text-stone-700 leading-relaxed mb-8 flex-grow italic relative z-10">
                                    "{t.text}"
                                </p>

                                <div className="mt-auto border-t border-stone-200 pt-6 flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                        <Image src={t.image} alt={t.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900 text-sm">{t.name}</h4>
                                        <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">{t.role}</p>
                                        <p className="text-xs font-semibold text-amber-600">Proj: {t.project}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Números de Satisfação - NPS */}
            <section className="py-20 bg-stone-900 text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-stone-700">
                        <div className="py-4">
                            <div className="text-6xl font-bold text-amber-500 mb-2">92</div>
                            <p className="text-stone-400 uppercase tracking-widest text-sm">NPS (Net Promoter Score)</p>
                            <p className="text-stone-500 text-xs mt-2">Zona de Excelência</p>
                        </div>
                        <div className="py-4">
                            <div className="text-6xl font-bold text-amber-500 mb-2">4.9</div>
                            <p className="text-stone-400 uppercase tracking-widest text-sm">Avaliação Média Google</p>
                            <p className="text-stone-500 text-xs mt-2">Baseado em 120+ reviews</p>
                        </div>
                        <div className="py-4">
                            <div className="text-6xl font-bold text-amber-500 mb-2">85%</div>
                            <p className="text-stone-400 uppercase tracking-widest text-sm">Clientes Recorrentes</p>
                            <p className="text-stone-500 text-xs mt-2">Ou indicação direta</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA Final */}
            <section className="py-24 bg-gradient-to-r from-stone-100 to-white text-center">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Quer viver essa experiência?</h2>
                    <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
                        Junte-se à nossa lista seleta de clientes satisfeitos. Vamos criar algo extraordinário juntos.
                    </p>
                    <Link
                        href="/sites-institucionais/premium/arquitetura-design-interiores/contato"
                        className="inline-block px-12 py-5 bg-amber-600 text-white rounded-full font-bold text-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300"
                    >
                        Seja Nosso Próximo Case
                    </Link>
                </div>
            </section>
        </div>
    );
}
