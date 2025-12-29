'use client';

import { theme } from '../theme';
import { Feather, Award, Hexagon } from 'lucide-react';

export default function Sobre() {
    return (
        <section className="py-24 bg-white relative">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="relative">
                        <div className="w-full h-[600px] relative">
                            <div className="absolute top-8 left-8 w-full h-full border border-stone-200 z-0" />
                            <img
                                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb8?q=80&w=1975&auto=format&fit=crop"
                                alt="Interior da clínica minimalista"
                                className="w-full h-full object-cover relative z-10 filter brightness-105 contrast-95"
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="font-serif text-5xl md:text-6xl text-stone-900 leading-tight">
                            Um refúgio para <br />o seu autocuidado.
                        </h2>
                        <div className="w-16 h-px bg-rose-950/20" />

                        <p className="text-stone-600 font-light text-lg leading-relaxed">
                            A Aura Estética nasceu da crença de que a beleza é uma consequência da saúde e da autoestima.
                            Fugimos dos padrões artificiais para abraçar a individualidade de cada rosto e corpo.
                        </p>

                        <p className="text-stone-600 font-light leading-relaxed">
                            Nossa clínica é um santuário de calma em meio ao caos urbano. Cada detalhe, do aroma à iluminação,
                            foi pensado para proporcionar uma experiência sensorial completa, muito além do procedimento estético.
                        </p>

                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center">
                                <Feather className="w-8 h-8 mx-auto text-stone-400 mb-3" />
                                <p className="font-serif text-lg">Sutileza</p>
                            </div>
                            <div className="text-center">
                                <Hexagon className="w-8 h-8 mx-auto text-stone-400 mb-3" />
                                <p className="font-serif text-lg">Tecnologia</p>
                            </div>
                            <div className="text-center">
                                <Award className="w-8 h-8 mx-auto text-stone-400 mb-3" />
                                <p className="font-serif text-lg">Excelência</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
