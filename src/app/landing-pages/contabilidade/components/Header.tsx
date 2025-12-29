'use client';
import { theme } from '../theme';
import { Calculator, ArrowRight } from 'lucide-react';

export default function Header() {
    return (
        <header className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
            <div className={theme.layout.container}>
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                        <Calculator className="w-4 h-4" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Contabilidade Digital</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                        Sua contabilidade <br />trabalhando <span className="text-blue-200">por você.</span>
                    </h1>
                    <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                        Esqueça planilhas confusas e prazos perdidos. Tenha uma contabilidade que entende de impostos, finanças e estratégia de negócios.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contato" className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all inline-flex items-center justify-center">
                            Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a href="#servicos" className="border-2 border-white/50 px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center">
                            Nossos Serviços
                        </a>
                    </div>
                    <div className="flex items-center gap-8 mt-16">
                        <div><p className="text-3xl font-bold">1.200+</p><p className="text-sm text-blue-200">Empresas ativas</p></div>
                        <div><p className="text-3xl font-bold">15 anos</p><p className="text-sm text-blue-200">No mercado</p></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
