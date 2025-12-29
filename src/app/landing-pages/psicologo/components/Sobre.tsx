'use client';

import { theme } from '../theme';
import { Heart, Shield, Users } from 'lucide-react';

export default function Sobre() {
    return (
        <section id="sobre" className={theme.layout.sectionAlt}>
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="space-y-8">
                        <span className="text-teal-700 font-semibold uppercase tracking-wider text-sm">Sobre Mim</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight">
                            Um parceiro na sua jornada de autoconhecimento.
                        </h2>

                        <p className="text-stone-600 font-light text-lg leading-relaxed">
                            Olá, sou o Dr. André Siqueira, psicólogo clínico com mais de 12 anos de prática em TCC (Terapia Cognitivo-Comportamental).
                            Minha abordagem é baseada em evidências científicas, mas nunca esqueço que estou lidando com seres humanos únicos.
                        </p>

                        <p className="text-stone-600 font-light leading-relaxed">
                            Acredito que a terapia não é sobre "consertar" pessoas, mas sobre criar um espaço onde você possa se redescobrir,
                            questionar padrões limitantes e desenvolver ferramentas emocionais para enfrentar os desafios da vida moderna.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex gap-4 p-4 rounded-xl bg-teal-50/50 border border-teal-100">
                                <Heart className="text-teal-600 w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-stone-800">Empatia</h4>
                                    <p className="text-sm text-stone-500">Escuta ativa sem julgamentos.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl bg-teal-50/50 border border-teal-100">
                                <Shield className="text-teal-600 w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-stone-800">Sigilo</h4>
                                    <p className="text-sm text-stone-500">100% confidencial e seguro.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                                alt="Dr. André Siqueira"
                                className="w-full h-full object-cover filter brightness-105"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg border border-stone-100 max-w-xs">
                            <p className="font-serif italic text-stone-700 mb-2">"Transformar dor em crescimento é possível."</p>
                            <p className="text-xs text-stone-400">Formado pela USP • CRP 06/12345</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
