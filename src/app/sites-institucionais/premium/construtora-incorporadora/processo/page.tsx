"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Search, FileText, Home, Key,
    PiggyBank, ArrowRight, CheckCircle2,
    HelpCircle, CalendarCheck
} from "lucide-react";

export default function ProcessoPage() {
    const steps = [
        {
            id: 1,
            title: "Escolha do Imóvel",
            icon: Search,
            desc: "Visite nossos decorados, conheça as maquetes e escolha a unidade ideal para sua família com auxílio de nossos consultores.",
            duration: "1-7 Dias"
        },
        {
            id: 2,
            title: "Simulação Financeira",
            icon: PiggyBank,
            desc: "Nossa equipe realiza simulações em diversos bancos para encontrar a parcela que cabe no seu bolso e a melhor taxa de juros.",
            duration: "1 Dia"
        },
        {
            id: 3,
            title: "Análise de Crédito",
            icon: FileText,
            desc: "Envio da documentação para o banco ou construtora. Processo ágil e desburocratizado com suporte total.",
            duration: "3-5 Dias"
        },
        {
            id: 4,
            title: "Assinatura do Contrato",
            icon: CalendarCheck,
            desc: "Formalização da compra no estande de vendas. Parabéns, você acaba de adquirir seu imóvel!",
            duration: "1 Dia"
        },
        {
            id: 5,
            title: "Durante a Obra",
            icon: Home,
            desc: "Acompanhe a evolução pelo nosso App. Pague as parcelas mensais e prepare-se para a mudança.",
            duration: "12-36 Meses"
        },
        {
            id: 6,
            title: "Entrega das Chaves",
            icon: Key,
            desc: "Vistoria técnica da unidade, assembleia de condomínio e finalmente: a chave na sua mão!",
            duration: "Na Conclusão"
        }
    ];

    return (
        <div className="bg-white font-sans text-slate-700">

            {/* 1. HERO PROCESSO */}
            <section className="pt-32 pb-20 bg-slate-50 text-center">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 max-w-4xl">
                    <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4 block">Guia do Comprador</span>
                    <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-slate-900 mb-6">Como Comprar seu <span className="text-orange-500">Imóvel</span></h1>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Entendemos que comprar um imóvel é uma grande decisão. Por isso, simplificamos todo o processo para torná-lo transparente, seguro e sem surpresas.
                    </p>
                </div>
            </section>

            {/* 2. STEPS VERTICAL TIMELINE */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-slate-200 hidden md:block" />

                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 relative z-10">
                    <div className="space-y-12">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Conteúdo Texto */}
                                <div className={`flex-1 text-center ${idx % 2 !== 0 ? "md:text-left" : "md:text-right"}`}>
                                    <span className="inline-block bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 shadow-sm border border-teal-100">Etapa 0{step.id}</span>
                                    <h3 className="font-montserrat font-bold text-2xl text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-500 leading-relaxed max-w-md mx-auto md:mx-0">{step.desc}</p>
                                </div>

                                {/* Ícone Central */}
                                <div className="relative shrink-0">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-teal-600 shadow-xl z-20 relative group hover:scale-110 transition-transform duration-300 hover:border-orange-500 hover:text-orange-500">
                                        <step.icon size={32} />
                                    </div>
                                </div>

                                {/* Info Extra / Duration */}
                                <div className={`flex-1 text-center ${idx % 2 !== 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className={`inline-block p-4 bg-slate-50 border border-slate-100 rounded-xl ${idx % 2 !== 0 ? "bg-orange-50 border-orange-100" : ""}`}>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Duração Estimada</p>
                                        <p className="font-bold text-lg text-slate-800">{step.duration}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. DOCS NECESSÁRIOS */}
            <section className="py-24 bg-teal-900 text-white">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <h2 className="font-montserrat font-bold text-3xl text-center mb-12">Documentação Necessária</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur hover:bg-white/20 transition-colors">
                            <h3 className="font-bold text-xl mb-4 text-orange-400 flex items-center gap-2">Pessoa Física (CLT)</h3>
                            <ul className="space-y-3 text-sm text-slate-200">
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> RG e CPF</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> Comprovante de Residência</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> 3 Últimos Holerites</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> Carteira de Trabalho Digital</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> IR Completo + Recibo</li>
                            </ul>
                        </div>
                        <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur hover:bg-white/20 transition-colors">
                            <h3 className="font-bold text-xl mb-4 text-orange-400 flex items-center gap-2">Empresário / Autônomo</h3>
                            <ul className="space-y-3 text-sm text-slate-200">
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> RG e CPF</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> Contrato Social</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> Extrato Bancário (6 meses)</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> Pro-labore (Decore)</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> IR Completo + Recibo</li>
                            </ul>
                        </div>
                        <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur hover:bg-white/20 transition-colors">
                            <h3 className="font-bold text-xl mb-4 text-orange-400 flex items-center gap-2">Uso do FGTS</h3>
                            <ul className="space-y-3 text-sm text-slate-200">
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> Extrato do FGTS</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> Carteira de Trabalho</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> Declaração de 1º Imóvel</li>
                                <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> Mínimo 3 anos de carteira</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ Processo */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                    <h2 className="font-montserrat font-bold text-3xl text-center mb-12 text-slate-900">Perguntas Comuns</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            { q: "Posso parcelar a entrada?", a: "Sim, durante o período de obras oferecemos parcelamento direto com a construtora, sem juros, apenas correção pelo INCC." },
                            { q: "O financiamento é feito com qual banco?", a: "Trabalhamos com todos os principais bancos (Caixa, Itaú, Bradesco, Santander). Nossa equipe busca a melhor taxa para o seu perfil." },
                            { q: "O FGTS pode ser usado na entrada?", a: "Sim, para imóveis enquadrados nas regras do SFH (Sistema Financeiro de Habitação) e desde que seja seu primeiro imóvel na cidade." },
                            { q: "Qual a renda mínima exigida?", a: "Geralmente a parcela não pode comprometer mais que 30% da renda bruta familiar. É possível compor renda com até 3 pessoas." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-teal-300 transition-colors">
                                <h4 className="flex items-start gap-3 font-bold text-slate-800 mb-3">
                                    <HelpCircle size={20} className="text-teal-600 shrink-0 mt-0.5" />
                                    {item.q}
                                </h4>
                                <p className="text-sm text-slate-500 pl-8">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA PÓS */}
            <section className="py-20 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="font-montserrat font-bold text-3xl text-slate-900 mb-6">Ainda tem dúvidas?</h2>
                    <Link href="/sites-institucionais/premium/construtora-incorporadora/contato" className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-orange-500 transition-colors">
                        Falar com Especialista em Crédito <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}
