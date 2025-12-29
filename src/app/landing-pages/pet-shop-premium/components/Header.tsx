'use client'

import { theme } from '../theme';
import { PawPrint, ArrowRight } from 'lucide-react';

export default function Header() {
    return (
        <header className="min-h-screen flex items-center bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 text-white relative overflow-hidden">
            <div className="absolute inset-0"><div className="absolute w-full h-full" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
            </div>
            <div className={`relative z-10 ${theme.layout.container}`}>
                <div className="max-w-5xl">
                    <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full mb-10 backdrop-blur-sm">
                        <PawPrint className="w-5 h-5" />
                        <span className="font-bold">
                            Pet Shop Premium</span>
                    </div>
                    <h1 className="text-7xl md:text-8xl font-black mb-10 leading-none">
                        Mimo e luxo<br />
                        <span className="text-orange-200">
                            para seu pet.</span>
                    </h1>
                    <p className="text-2xl text-orange-100 mb-14 max-w-3xl leading-relaxed">
                        Produtos importados, rações super premium, banho e tosa com SPA, daycare e hotel 5 estrelas. Seu pet merece o melhor!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <a href="#produtos" className="bg-white text-orange-500 px-12 py-5 rounded-full font-bold text-lg hover:bg-orange-50 shadow-2xl inline-flex items-center justify-center">
                            Ver Produtos<ArrowRight className="ml-3 w-6 h-6" />
                        </a>
                        <a href="#banho" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 px-12 py-5 rounded-full font-bold text-lg hover:bg-white/20 inline-flex items-center justify-center">
                            Banho & Tosa</a>
                    </div>
                    <div className="grid grid-cols-3 gap-12 mt-24">
                        <div>
                            <p className="text-5xl font-bold">
                                15k+</p>
                            <p className="text-orange-200 text-sm mt-2">
                                Pets felizes</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">
                                500+</p>
                            <p className="text-orange-200 text-sm mt-2">
                                Produtos importados</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">
                                4.9★</p>
                            <p className="text-orange-200 text-sm mt-2">Avalição Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
