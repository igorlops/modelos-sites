'use client';
import { theme } from '../theme';
import { Key, FileText, Handshake, Camera } from 'lucide-react';
export default function PorqueEscolher() {
    return (
        <section className="py-24 bg-emerald-900 text-white">
            <div className={theme.layout.container}>
                <h2 className="text-5xl font-bold mb-16 text-center">Por que somos referência?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        { icon: <Camera />, title: "Tour Virtual 360°", desc: "Conheça cada detalhe sem sair de casa. Tecnologia matterport em todos os imóveis." },
                        { icon: <FileText />, title: "Documentação Completa", desc: "Análise jurídica prévia. Entregamos o imóvel com toda papelada em ordem." },
                        { icon: <Handshake />, title: "Negociação Expert", desc: "Intermediamos valores justos para ambas as partes. Taxa de sucesso de 94%." },
                        { icon: <Key />, title: "Pós-Venda VIP", desc: "Acompanhamento em mudança, indicação de arquitetos e decoradores parceiros." }
                    ].map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="text-emerald-300 mb-6 inline-block">{item.icon}</div>
                            <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                            <p className="text-emerald-100/80 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
