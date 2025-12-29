'use client';

import { theme } from '../theme';
import { Mail, CalendarCheck } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className={`relative z-10 ${theme.layout.container}`}>
                <div className="bg-emerald-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    {/* Abstract Circle */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Agenda aberta para <span className="text-emerald-600">Novos Pacientes</span>
                    </h2>
                    <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
                        Não espere "segunda-feira" para começar a cuidar de você.
                        Dê o primeiro passo rumo a uma vida com mais energia e saúde.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#" className="inline-flex items-center justify-center bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
                            <CalendarCheck className="mr-2" />
                            Agendar Agora
                        </a>
                        <a href="#" className="inline-flex items-center justify-center bg-white text-emerald-700 font-bold py-4 px-8 rounded-xl border-2 border-emerald-100 hover:border-emerald-200 transition-colors">
                            <Mail className="mr-2" />
                            Tirar Dúvidas
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-slate-400">Atendimentos presenciais em SP e Online para todo o mundo.</p>
                </div>
            </div>
        </section>
    );
}
