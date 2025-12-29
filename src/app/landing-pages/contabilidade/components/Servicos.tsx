'use client';
import { theme } from '../theme';
import { Briefcase, FileText, PieChart, Shield, DollarSign, Smartphone } from 'lucide-react';

export default function Servicos() {
    const services = [
        { icon: <Briefcase className="w-10 h-10 text-blue-600" />, title: "Abertura de Empresa", desc: "CNPJ ativo em 24h. Escolha do regime tributário ideal, registro de marca e alvará digital." },
        { icon: <FileText className="w-10 h-10 text-blue-600" />, title: "BPO Financeiro", desc: "Gestão completa de contas a pagar/receber, conciliação bancária e fluxo de caixa preditivo." },
        { icon: <PieChart className="w-10 h-10 text-blue-600" />, title: "Planejamento Tributário", desc: "Análise anual para redução legal de impostos. Simulações Simples vs. Presumido vs. Real." },
        { icon: <Shield className="w-10 h-10 text-blue-600" />, title: "Compliance & Obrigações", desc: "Todas as declarações (DCTF, ECD, ECF, SPED) entregues no prazo. Zero risco de multa." },
        { icon: <DollarSign className="w-10 h-10 text-blue-600" />, title: "Folha de Pagamento", desc: "eSocial, cálculos trabalhistas, admissão/demissão e certificado digital." },
        { icon: <Smartphone className="w-10 h-10 text-blue-600" />, title: "App Exclusivo", desc: "Acompanhe impostos, DRE e indicadores em tempo real pelo celular." }
    ];
    return (
        <section id="servicos" className="py-24 bg-slate-50">
            <div className={theme.layout.container}>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Serviços Completos</h2>
                    <p className="text-slate-600">Do CNPJ ao balanço anual, cuidamos de tudo.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-slate-100">
                            <div className="mb-6">{s.icon}</div>
                            <h3 className="font-bold text-xl text-slate-900 mb-4">{s.title}</h3>
                            <p className="text-slate-600">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
