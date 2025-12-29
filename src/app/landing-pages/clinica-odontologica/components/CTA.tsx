'use client';

import { theme } from '../theme';
import { CalendarCheck, MessageCircle } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-cyan-600 to-blue-700 relative overflow-hidden text-center">
            <div className={`relative z-10 ${theme.layout.container}`}>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                    Agende sua avaliação <br className="hidden md:block" /> e transforme seu sorriso.
                </h2>
                <p className="text-xl text-cyan-50 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Venha tomar um café conosco e descobrir como podemos realçar sua beleza natural com a mais alta tecnologia.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="#" className="inline-flex items-center justify-center px-10 py-5 bg-white text-cyan-700 font-bold rounded-xl shadow-2xl hover:bg-slate-50 hover:scale-105 transition-all">
                        <CalendarCheck className="mr-3 w-6 h-6" />
                        AGENDAR ONLINE
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
                        <MessageCircle className="mr-3 w-6 h-6" />
                        FALAR NO WHATSAPP
                    </a>
                </div>
            </div>

            {/* Glossy overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </section>
    );
}
