'use client';

import { theme } from '../theme';
import { Award, BookOpen, HeartPulse } from 'lucide-react';

export default function Sobre() {
    return (
        <section id="sobre" className={theme.layout.section}>
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="relative">
                        <div className="absolute -inset-4 bg-emerald-100 rounded-[2rem] -z-10 transform -rotate-3" />
                        <img
                            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
                            alt="Nutricionista em consultório"
                            className="rounded-2xl w-full shadow-lg"
                        />
                    </div>

                    <div className="space-y-6">
                        <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm bg-emerald-50 px-3 py-1 rounded-lg w-fit">Quem sou eu</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Nutrição com base científica e olhar humano.
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Olá! Sou a Dra. Clara Vital. Minha abordagem une a precisão da bioquímica nutricional com a praticidade necessária para o dia a dia moderno.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Acredito que comer bem não deve ser um sacrifício. Meu protocolo foca em reeducação alimentar definitiva,
                            otimizando sua composição corporal e performance sem "terrorismo nutricional".
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                            <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="text-emerald-600 bg-white p-3 rounded-xl shadow-sm h-fit"><Award /></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Especialista</h4>
                                    <p className="text-sm text-slate-500">Pós-graduada em Nutrição Esportiva pela USP.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="text-emerald-600 bg-white p-3 rounded-xl shadow-sm h-fit"><BookOpen /></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Atualizada</h4>
                                    <p className="text-sm text-slate-500">Protocolos baseados nas últimas diretrizes internacionais.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
