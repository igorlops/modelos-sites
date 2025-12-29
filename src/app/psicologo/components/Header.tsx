'use client';

import { theme } from '../theme';
import { ArrowRight, Sun } from 'lucide-react';

export default function Header() {
    return (
        <header className="relative min-h-[90vh] flex items-center bg-[#FDFBF7]">
            <div className={theme.layout.container}>
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2 space-y-8 z-10">
                        <div className="inline-flex items-center gap-2 text-teal-700 font-semibold bg-teal-50 px-4 py-2 rounded-full">
                            <Sun className="w-4 h-4" />
                            <span className="text-sm">Terapia Cognitivo-Comportamental</span>
                        </div>

                        <h1 className="font-serif text-5xl md:text-6xl text-stone-800 leading-tight">
                            Reencontre o seu <br />
                            <span className="text-teal-700 italic">equilíbrio emocional.</span>
                        </h1>

                        <p className="text-xl text-stone-600 font-light leading-relaxed max-w-lg">
                            Ofereço um espaço seguro e acolhedor para que você possa explorar seus sentimentos e cuidar da sua saúde mental, sem julgamentos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#agendar"
                                className="bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-100"
                            >
                                Agendar Sessão
                                <ArrowRight className="w-4 h-4" />
                            </a>

                            <a
                                href="#sobre"
                                className="bg-white text-stone-600 border border-stone-200 px-8 py-4 rounded-lg font-semibold hover:border-teal-300 hover:text-teal-700 transition-all flex items-center justify-center"
                            >
                                Como funciona?
                            </a>
                        </div>

                        <div className="pt-8 flex items-center gap-4 text-stone-500 text-sm">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white" />
                                ))}
                            </div>
                            <p>Atendimentos Online e Presencial</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-50 rounded-full blur-3xl -z-10" />
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1975&auto=format&fit=crop"
                                alt="Sessão de terapia acolhedora"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply" />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}
