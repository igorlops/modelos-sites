'use client';
import { theme } from '../theme';
import { Building2, Home as HomeIcon, Palmtree, ArrowRight } from 'lucide-react';
export default function Servicos() {
    const tipos = [
        { icon: <Building2 className="w-12 h-12 text-emerald-700" />, tipo: "Apartamentos", desc: "Studios a coberturas em edifícios de alto padrão com concierge 24h, spa e automação.", valores: "R$ 800k - R$ 15Mi" },
        { icon: <HomeIcon className="w-12 h-12 text-emerald-700" />, tipo: "Casas em Condomínio", desc: "Residências em condomínios fechados com segurança, lazer completo e arquitetura contemporânea.", valores: "R$ 2Mi - R$ 25Mi" },
        { icon: <Palmtree className="w-12 h-12 text-emerald-700" />, tipo: "Casas de Praia", desc: "Imóveis em Guarujá, Riviera e Juquehy. Vista mar, design exclusivo e total privacidade.", valores: "R$ 3Mi - R$ 20Mi" }
    ];
    return (
        <section id="imoveis" className="py-24 bg-stone-50">
            <div className={theme.layout.container}>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-stone-900 mb-4">Nosso Portfólio</h2>
                    <p className="text-stone-600">Propriedades cuidadosamente selecionadas para clientes exigentes.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tipos.map((t, i) => (
                        <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-stone-100 group">
                            <div className="mb-6">{t.icon}</div>
                            <h3 className="text-2xl font-bold text-stone-900 mb-4">{t.tipo}</h3>
                            <p className="text-stone-600 mb-6 leading-relaxed">{t.desc}</p>
                            <p className="text-sm font-bold text-emerald-700 mb-6">{t.valores}</p>
                            <a href="#contato" className="text-emerald-700 font-bold inline-flex items-center group-hover:gap-2 transition-all">Ver Disponíveis <ArrowRight className="w-4 h-4 ml-1" /></a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
