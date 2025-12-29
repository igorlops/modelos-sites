'use client';
import { theme } from '../theme';
import { Award, Users, TrendingUp } from 'lucide-react';

export default function Sobre() {
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-slate-900">Contabilidade que gera valor real para o seu negócio.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">Não somos um escritório tradicional que só entrega guias. Somos consultores financeiros que usam a contabilidade como ferramenta estratégica para reduzir custos, aumentar margem e escalar empresas.</p>
                        <p className="text-slate-600">Com tecnologia própria e equipe especializada em todos os regimes tributários (Simples, Lucro Presumido e Real), garantimos compliance total enquanto você foca no que importa: crescer.</p>
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            <div className="text-center"><Award className="w-8 h-8 mx-auto text-blue-600 mb-2" /><p className="font-bold">Certificado CFC</p></div>
                            <div className="text-center"><Users className="w-8 h-8 mx-auto text-blue-600 mb-2" /><p className="font-bold">30+ Contadores</p></div>
                            <div className="text-center"><TrendingUp className="w-8 h-8 mx-auto text-blue-600 mb-2" /><p className="font-bold">98% Retenção</p></div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1554224311-f279a47e1a3a?q=80&w=2070" alt="Equipe contabilidade" className="rounded-2xl shadow-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
