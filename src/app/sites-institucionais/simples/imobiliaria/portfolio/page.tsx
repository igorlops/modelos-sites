import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function PortfolioPage() {
    const imoveis = [
        {
            tipo: "Apartamento",
            titulo: "Cobertura Duplex Contemporânea",
            localizacao: "Itaim Bibi, São Paulo - SP",
            caracteristicas: ["3 suítes", "230m²", "3 vagas", "Terraço 80m²"],
            valor: "R$ 2.850.000",
            negocio: "Venda",
            destaque: "Vista panorâmica, churrasqueira gourmet, piscina privativa no terraço",
            descricao: "Cobertura duplex de alto padrão em condomínio clube. Acabamento premium com marcenaria planejada, automação residencial completa e espaço gourmet no terraço com vista 360°. Localização nobre próxima a restaurantes e shoppings.",
            badge: "Destaque"
        },
        {
            tipo: "Casa",
            titulo: "Casa Modernista em Condomínio Fechado",
            localizacao: "Granja Viana, Cotia - SP",
            caracteristicas: ["4 suítes", "450m² construídos", "1.200m² terreno", "4 vagas"],
            valor: "R$ 3.200.000",
            negocio: "Venda",
            destaque: "Pé direito duplo, piscina aquecida, sauna, campo de futebol",
            descricao: "Casa de arquitetura modernista com muito verde e privacidade. Condomínio com segurança 24h, bosque preservado, quadras e centro hípico. Ideal para famílias que buscam qualidade de vida fora da cidade.",
            badge: "Exclusivo"
        },
        {
            tipo: "Apartamento",
            titulo: "Apartamento Compacto Vila Madalena",
            localizacao: "Vila Madalena, São Paulo - SP",
            caracteristicas: ["1 suíte", "45m²", "1 vaga"],
            valor: "R$ 4.200/mês",
            negocio: "Locação",
            destaque: "Totalmente mobiliado, pronto para morar, localização prime",
            descricao: "Studio moderno e charmoso no coração da Vila Madalena. Reformado recentemente com móveis planejados, ar condicionado e cozinha americana completa. A 5 minutos a pé do metrô Vila Madalena.",
            badge: "Novo"
        },
        {
            tipo: "Sala Comercial",
            titulo: "Conjunto Comercial Faria Lima",
            localizacao: "Av. Faria Lima, São Paulo - SP",
            caracteristicas: ["Conj. 200m²", "4 salas", "4 vagas", "Elevador privativo"],
            valor: "R$ 18.000/mês",
            negocio: "Locação",
            destaque: "Andar alto, vista privilegiada, acabamento corporativo",
            descricao: "Conjunto comercial de alto padrão em edifício AAA na Faria Lima. Infraestrutura completa com ar condicionado central, gerador, segurança 24h e estacionamento rotativo. Ideal para escritórios de advocacia, consultorias e empresas de tecnologia.",
            badge: "Comercial"
        },
        {
            tipo: "Apartamento",
            titulo: "2 Dormitórios Moema Moderno",
            localizacao: "Moema, São Paulo - SP",
            caracteristicas: ["2 dorms", "68m²", "1 vaga", "Lazer completo"],
            valor: "R$ 720.000",
            negocio: "Venda",
            destaque: "Pronto para morar, reformado, vaga coberta",
            descricao: "Apartamento reformado com muito bom gosto. Dois quartos com armários, sala ampla, cozinha planejada e banheiro com box blindex. Condomínio com piscina, academia e salão de festas. Ótima localização próxima ao metrô.",
            badge: "Oportunidade"
        },
        {
            tipo: "Casa",
            titulo: "Sobrado Alto de Pinheiros",
            localizacao: "Alto de Pinheiros, São Paulo - SP",
            caracteristicas: ["3 suítes", "280m²", "250m² terreno", "3 vagas"],
            valor: "R$ 2.350.000",
            negocio: "Venda",
            destaque: "Bairro residencial nobre, escola e comércio próximos",
            descricao: "Sobrado em excelente estado de conservação. Projeto arquitetônico funcional com ambientes integrados, boa iluminação natural e área externa com jardim. Bairro tranquilo e valorizado com infraestrutura completa.",
            badge: "Família"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-800 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Imóveis Disponíveis</h1>
                        <p className="text-cyan-100 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
                            Explore nosso portfólio exclusivo com mais de 200 opções de apartamentos, casas, salas comerciais e terrenos em São Paulo
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold transition-colors">
                                Todos
                            </button>
                            <button className="px-6 py-2 bg-blue-800 hover:bg-cyan-500 rounded-full font-semibold transition-colors">
                                Venda
                            </button>
                            <button className="px-6 py-2 bg-blue-800 hover:bg-cyan-500 rounded-full font-semibold transition-colors">
                                Locação
                            </button>
                            <button className="px-6 py-2 bg-blue-800 hover:bg-cyan-500 rounded-full font-semibold transition-colors">
                                Residencial
                            </button>
                            <button className="px-6 py-2 bg-blue-800 hover:bg-cyan-500 rounded-full font-semibold transition-colors">
                                Comercial
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {imoveis.map((imovel, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-shadow">
                                <div className="relative aspect-[4/3] bg-gradient-to-br from-cyan-100 to-blue-100">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col">
                                        <div className="text-6xl mb-2">🏠</div>
                                        <p className="text-sm font-semibold">{imovel.tipo}</p>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                                        {imovel.badge}
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white text-cyan-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                                        {imovel.negocio}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{imovel.titulo}</h3>
                                    <p className="text-sm text-cyan-600 mb-4 flex items-center gap-1">
                                        <span>📍</span> {imovel.localizacao}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {imovel.caracteristicas.map((carac, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                                                {carac}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {imovel.descricao}
                                    </p>

                                    <div className="border-t border-slate-200 pt-4 mb-4">
                                        <p className="text-xs text-slate-500 mb-1">Destaques:</p>
                                        <p className="text-sm text-slate-700 font-medium">{imovel.destaque}</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-slate-500">{imovel.negocio === "Venda" ? "Valor" : "Aluguel"}</p>
                                            <p className="text-2xl font-bold text-cyan-700">{imovel.valor}</p>
                                        </div>
                                        <Link
                                            href="/sites-institucionais/simples/imobiliaria/contato"
                                            className="px-4 py-2 bg-cyan-600 text-white rounded font-semibold hover:bg-cyan-700 transition-colors text-sm"
                                        >
                                            Ver Detalhes
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-slate-600 mb-6">
                            Mostrando 6 de 200+ imóveis disponíveis. Use os filtros ou entre em contato para ver nossa carteira completa.
                        </p>
                        <Link
                            href="/sites-institucionais/simples/imobiliaria/contato"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded font-bold hover:from-cyan-700 hover:to-blue-700 transition-colors shadow-lg"
                        >
                            Ver Todos os Imóveis
                        </Link>
                    </div>
                </section>

                <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-cyan-100">
                                <div className="text-5xl mb-4">🔍</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Busca Personalizada</h3>
                                <p className="text-slate-600 mb-4 text-sm">
                                    Não encontrou o que procura? Informe suas preferências e buscaremos ativamente o imóvel perfeito para você.
                                </p>
                                <Link href="/sites-institucionais/simples/imobiliaria/contato" className="text-cyan-600 font-semibold hover:text-cyan-700">
                                    Solicitar Busca →
                                </Link>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-cyan-100">
                                <div className="text-5xl mb-4">📸</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Tour Virtual 360°</h3>
                                <p className="text-slate-600 mb-4 text-sm">
                                    Visite os imóveis sem sair de casa através de nossos tours virtuais imersivos em alta definição.
                                </p>
                                <Link href="/sites-institucionais/simples/imobiliaria/contato" className="text-cyan-600 font-semibold hover:text-cyan-700">
                                    Agendar Tour →
                                </Link>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-cyan-100">
                                <div className="text-5xl mb-4">💼</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Anuncie Seu Imóvel</h3>
                                <p className="text-slate-600 mb-4 text-sm">
                                    Quer vender ou alugar? Cadastre gratuitamente e tenha acesso ao nosso marketing premium e corretores especializados.
                                </p>
                                <Link href="/sites-institucionais/simples/imobiliaria/contato" className="text-cyan-600 font-semibold hover:text-cyan-700">
                                    Anunciar Grátis →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Encontre Seu Lar dos Sonhos Hoje</h2>
                        <p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
                            Agende uma visita presencial ou online e conheça os detalhes de cada imóvel
                        </p>
                        <Link
                            href="/sites-institucionais/simples/imobiliaria/contato"
                            className="inline-block bg-cyan-500 text-white px-10 py-4 rounded text-lg font-bold hover:bg-cyan-600 transition-colors shadow-lg"
                        >
                            Agendar Visita Agora
                        </Link>
                        <p className="mt-6 text-cyan-200 text-sm">
                            📞 (11) 3500-3500 | 📱 WhatsApp: (11) 99999-3500
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
