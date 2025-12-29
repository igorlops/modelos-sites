'use client';
import { theme } from '../theme';
import { Zap, HeadphonesIcon, Lock, BarChart3 } from 'lucide-react';

export default function PorqueEscolher() {
    return (
        <section className="py-24 bg-blue-900 text-white">
            <div className={theme.layout.container}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Por que somos diferentes?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { icon: <Zap />, title: "Tecnologia", desc: "Inteligência artificial classifica despesas e prevê impostos automaticamente." },
                            { icon: <HeadphonesIcon />, title: "Suporte Real", desc: "Contador dedicado via WhatsApp. Respostas em até 2h úteis." },
                            { icon: <Lock />, title: "Segurança", desc: "Certificações ISO e backup em nuvem. Seus dados nunca se perdem." },
                            { icon: <BarChart3 />, title: "Relatórios Inteligentes", desc: "DRE gerencial, análise de margem e break-even point mensais." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="text-blue-300 shrink-0">{item.icon}</div>
                                <div><h3 className="font-bold text-xl mb-2">{item.title}</h3><p className="text-blue-100/80">{item.desc}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
