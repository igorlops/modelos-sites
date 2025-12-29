'use client';
import { theme } from '../theme';
import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
    const [search, setSearch] = useState('');
    const faqs = [
        { q: "Integra com email marketing?", a: "Sim! Mailchimp, RD Station, ActiveCampaign via Zapier ou webhook nativo." },
        { q: "Tem automação de follow-up?", a: "Sim. Sequências de email/WhatsApp automáticas baseadas em comportamento do lead." },
        { q: "Quantos usuários posso adicionar?", a: "Ilimitado em todos os planos. Cada usuário tem permissões granulares customizáveis." },
        { q: "Migração de outro CRM é grátis?", a: "Sim! Nosso time migra seus dados de Pipedrive, HubSpot, RD sem custo adicional." },
        { q: "Tem app offline?", a: "Sim, modo offline no mobile. Sincroniza assim que reconectar à internet." },
        { q: "Posso cancelar quando quiser?", a: "Sim, sem multa. Seus dados ficam disponíveis por 30 dias após cancelamento." }
    ];

    const filtered = faqs.filter(f =>
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="text-center mb-16">
                    <HelpCircle className="w-16 h-16 text-violet-600 mx-auto mb-6" />
                    <h2 className="text-5xl font-bold mb-6">Central de Ajuda</h2>
                    <div className="max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Buscar dúvida..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-8 py-5 text-lg focus:border-violet-500 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    {filtered.map((f, i) => (
                        <div key={i} className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl hover:shadow-lg transition-all border-2 border-violet-100">
                            <h3 className="font-bold text-lg text-violet-900 mb-4 flex items-start gap-3">
                                <span className="bg-violet-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0">?</span>
                                {f.q}
                            </h3>
                            <p className="text-slate-700 leading-relaxed pl-10">{f.a}</p>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="text-center text-slate-500 mt-10">Nenhuma dúvida encontrada. Tente outro termo.</p>
                )}
            </div>
        </section>
    );
}
