'use client';
import { theme } from '../theme';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contato() {
    return (
        <section className="py-24 bg-white">
            <div className={theme.layout.container}>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-10">
                        <h2 className="text-4xl font-bold">Venha nos visitar!</h2>
                        <p className="text-slate-600 text-lg">Localização central com fácil acesso. Estacionamento gratuito.</p>
                        <div className="space-y-8 pt-6">
                            {[
                                { icon: <MapPin className="w-7 h-7 text-green-600" />, label: "Endereço", info: "Rua das Flores, 500\nJardim Paulista - São Paulo/SP" },
                                { icon: <Phone className="w-7 h-7 text-green-600" />, label: "Telefone", info: "(11) 3333-2222 (Emergência 24h)" },
                                { icon: <Mail className="w-7 h-7 text-green-600" />, label: "Email", info: "contato@vetcareplus.com.br" },
                                { icon: <Clock className="w-7 h-7 text-green-600" />, label: "Horários", info: "Seg-Sex: 8h-20h\nSáb-Dom: Plantão 24h" }
                            ].map((c, i) => (
                                <div key={i} className="flex gap-5 p-5 bg-green-50 rounded-xl">
                                    <div className="mt-1">{c.icon}</div>
                                    <div>
                                        <p className="font-bold text-slate-900 mb-1">{c.label}</p>
                                        <p className="text-slate-700 whitespace-pre-line">{c.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-2xl p-2 h-[500px]">
                        <div className="w-full h-full bg-slate-200 rounded-xl flex items-center justify-center text-slate-500">
                            <MapPin className="w-16 h-16" />
                            <span className="ml-4 text-lg">Mapa Google Maps</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
