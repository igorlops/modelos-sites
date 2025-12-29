'use client';
import { theme } from '../theme';
import { Award, MapPin, Users } from 'lucide-react';
export default function Sobre() {
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-5xl font-bold text-stone-900">A imobiliária de quem entende de exclusividade.</h2>
                        <p className="text-lg text-stone-700 leading-relaxed">Há 18 anos conectamos pessoas aos imóveis dos sonhos. Não trabalhamos com quantidade, trabalhamos com qualidade. Cada propriedade do nosso portfólio passa por rigorosa curadoria.</p>
                        <p className="text-stone-600">Nosso time é formado por corretores com mais de 10 anos de mercado, especialistas em Jardins, Itaim, Vila Nova Conceição e Alphaville. Conhecemos cada rua, cada edifício, cada detalhe que faz a diferença.</p>
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            <div className="text-center"><Award className="w-10 h-10 mx-auto text-emerald-700 mb-3" /><p className="font-bold">CRECI Premium</p></div>
                            <div className="text-center"><MapPin className="w-10 h-10 mx-auto text-emerald-700 mb-3" /><p className="font-bold">Bairros Nobres</p></div>
                            <div className="text-center"><Users className="w-10 h-10 mx-auto text-emerald-700 mb-3" /><p className="font-bold">Equipe Expert</p></div>
                        </div>
                    </div>
                    <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070" alt="Sala luxuosa" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
