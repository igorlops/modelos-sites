'use client';

import { theme } from '../theme';
import { Calendar, MessageCircle, Star } from 'lucide-react';

export default function Header() {
    return (
        <header className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 to-white overflow-hidden">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8 animate-fade-in-up z-10 relative">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-100/50">
                            <Star className="w-4 h-4 text-cyan-500 fill-cyan-500" />
                            <span className="text-sm font-semibold text-cyan-800 tracking-wide uppercase">Referência em Estética Dental</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                            Sorria com a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                                confiança que você merece.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                            Unimos tecnologia digital avançada e design de sorrisos para entregar tratamentos precisos, rápidos e humanizados.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#agendar"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-cyan-600 rounded-xl hover:bg-cyan-700 transition-all shadow-lg hover:shadow-cyan-200 hover:-translate-y-1"
                            >
                                <Calendar className="mr-2 w-5 h-5" />
                                Agendar Avaliação
                            </a>

                            <a
                                href="https://wa.me/..."
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-cyan-700 bg-cyan-50 border border-cyan-100 rounded-xl hover:bg-cyan-100 transition-all"
                            >
                                <MessageCircle className="mr-2 w-5 h-5" />
                                WhatsApp
                            </a>
                        </div>

                        <div className="pt-8 flex items-center gap-8 border-t border-slate-100 mt-8">
                            <div>
                                <p className="text-3xl font-bold text-slate-900">15+</p>
                                <p className="text-sm text-slate-500">Anos de Clínica</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900">5k+</p>
                                <p className="text-sm text-slate-500">Sorrisos Transformados</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] hidden lg:block">
                        <div className="absolute top-0 right-0 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent -translate-y-20 translate-x-20 -z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1588776813158-cef380731554?q=80&w=1932&auto=format&fit=crop"
                            alt="Consultório moderno e Clean"
                            className="w-full h-full object-cover rounded-[40px] shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-700"
                        />

                        <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs animate-bounce-slow">
                            <p className="font-bold text-slate-900 text-lg mb-1">Tecnologia 3D</p>
                            <p className="text-sm text-slate-500">Escaneamento digital intraoral para máximo conforto e precisão.</p>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}
