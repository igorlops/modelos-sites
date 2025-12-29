'use client';

import { theme } from '../theme';
import { Star } from 'lucide-react';

export default function PorqueEscolher() {
    return (
        <section className="py-24 bg-stone-900 text-stone-200">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <h2 className="font-serif text-5xl leading-tight">
                            Por que a Aura <br /> é diferente?
                        </h2>

                        <div className="space-y-8 font-light">
                            <div className="flex gap-6 items-start">
                                <div className="text-rose-300/50 mt-1"><Star className="w-5 h-5" /></div>
                                <div>
                                    <h3 className="font-serif text-xl text-stone-50 mb-2">Produtos Premium</h3>
                                    <p className="text-stone-400 text-sm leading-relaxed">Não economizamos na sua segurança. Utilizamos apenas marcas líderes mundiais como Galderma, Allergan e Merz.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="text-rose-300/50 mt-1"><Star className="w-5 h-5" /></div>
                                <div>
                                    <h3 className="font-serif text-xl text-stone-50 mb-2">Naturalidade</h3>
                                    <p className="text-stone-400 text-sm leading-relaxed">Nosso "não" é tão importante quanto nosso "sim". Não realizamos procedimentos que descaracterizem sua feição.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="text-rose-300/50 mt-1"><Star className="w-5 h-5" /></div>
                                <div>
                                    <h3 className="font-serif text-xl text-stone-50 mb-2">Privacidade</h3>
                                    <p className="text-stone-400 text-sm leading-relaxed">Agenda espaçada para garantir que você não encontre ninguém na sala de espera se não quiser.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[500px] lg:h-auto">
                        <img
                            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
                            alt="Textura de creme de luxo"
                            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="border border-white/20 p-8 w-fit backdrop-blur-sm">
                                <p className="font-serif text-3xl italic text-center">"A elegância é a única beleza <br /> que não desaparece."</p>
                                <p className="text-center text-xs mt-4 uppercase tracking-widest text-white/50">Audrey Hepburn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
