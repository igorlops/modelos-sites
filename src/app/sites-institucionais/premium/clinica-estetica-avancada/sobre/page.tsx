"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Award, Globe, Heart, ShieldCheck, Star, Users,
    MapPin, Clock, Stethoscope, Microscope, Sparkles, Building2,
    CheckCircle2, ArrowRight,
    Target
} from "lucide-react";

export default function SobrePage() {
    const timeline = [
        { year: "2010", title: "O Início do Sonho", desc: "Fundação da clínica em um pequeno consultório, com o sonho de trazer tratamentos humanizados para a estética." },
        { year: "2014", title: "Expansão Tecnológica", desc: "Primeira grande renovação com a aquisição de lasers importados e ampliação da equipe médica." },
        { year: "2018", title: "Nova Sede Jardins", desc: "Mudança para o endereço atual, triplicando a capacidade de atendimento com estrutura de spa." },
        { year: "2023", title: "Prêmio Excelência", desc: "Reconhecimento como 'Melhor Clínica de Estética de SP' pela revista Vogue Beauty." },
    ];

    const team = [
        { name: "Dra. Sofia Martini", role: "Diretora Médica", crm: "CRM/SP 123456", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop" },
        { name: "Dra. Julia Costa", role: "Biomédica Esteta", crm: "CRBM 7890", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2670&auto=format&fit=crop" },
        { name: "Dr. Ricardo Silva", role: "Dermatologista", crm: "CRM/SP 654321", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop" },
        { name: "Mariana Santos", role: "Fisioterapeuta", crm: "CREFITO 45678", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2669&auto=format&fit=crop" },
    ];

    return (
        <div className="bg-neutral-50 overflow-hidden">

            {/* 1. HERO INSTITUCIONAL */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2670&auto=format&fit=crop"
                    alt="Nossa Equipe"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-rose-950/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
                    <span className="text-amber-400 font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in-up">Nossa Essência</span>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight animate-fade-in-up delay-100">
                        Mais Que Estética, <br />
                        <span className="text-rose-300 italic">Transformação de Vidas</span>
                    </h1>
                    <p className="text-xl text-rose-100 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                        Conheça a história e os valores que tornaram a Lumière Esthétique referência nacional em tratamentos de alta performance.
                    </p>
                </div>
            </section>

            {/* 2. NOSSA HISTÓRIA (TIMELINE) */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="font-serif text-5xl text-neutral-900 mb-8 leading-tight">
                                Uma Trajetória de <span className="text-rose-600">Dedicação e Excelência</span>
                            </h2>
                            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
                                <p>
                                    A Lumière nasceu do desejo da Dra. Sofia Martini de criar um espaço onde a medicina estética e o bem-estar caminhassem juntos. O que começou como um consultório intimista rapidamente se tornou um centro de referência.
                                </p>
                                <p>
                                    Ao longo de mais de uma década, investimos incansavelmente em tecnologia e na formação da nossa equipe. Mas nosso maior investimento sempre foi no relacionamento com cada paciente que cruza nossas portas.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 border-2 border-rose-100 rounded-[3rem] -z-10 rotate-3" />
                            <Image
                                src="https://images.unsplash.com/photo-1516549655169-df83dc53650d?q=80&w=2670&auto=format&fit=crop"
                                alt="Fundadora"
                                width={600}
                                height={400}
                                className="rounded-[3rem] shadow-2xl object-cover"
                            />
                        </div>
                    </div>

                    {/* Timeline Visual */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-rose-100 -translate-y-1/2 hidden md:block" />
                        <div className="grid md:grid-cols-4 gap-8">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative group pt-8 md:pt-0">
                                    <div className="w-4 h-4 bg-rose-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2 hidden md:block z-10 ring-4 ring-white" />
                                    <div className="bg-neutral-50 p-8 rounded-3xl border border-transparent hover:border-rose-100 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                                        <span className="text-5xl font-serif font-bold text-rose-200 block mb-4 group-hover:text-rose-500 transition-colors">
                                            {item.year}
                                        </span>
                                        <h4 className="font-bold text-neutral-900 mb-2">{item.title}</h4>
                                        <p className="text-sm text-neutral-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MISSÃO, VISÃO, VALORES */}
            <section className="py-24 bg-rose-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/50 to-transparent" />

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                                <Target size={32} /> {/* Placeholder icon */}
                                <Heart className="absolute" size={32} />
                            </div>
                            <h3 className="font-serif text-3xl mb-4 text-rose-200">Missão</h3>
                            <p className="text-rose-100/70 leading-relaxed">
                                Revelar a beleza natural de cada pessoa, elevando sua autoestima através de tratamentos seguros, éticos e personalizados.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                                <Globe className="absolute" size={32} />
                            </div>
                            <h3 className="font-serif text-3xl mb-4 text-purple-200">Visão</h3>
                            <p className="text-rose-100/70 leading-relaxed">
                                Ser reconhecida internacionalmente como referência em estética de resultado e inovação tecnológica humanizada.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                                <ShieldCheck className="absolute" size={32} />
                            </div>
                            <h3 className="font-serif text-3xl mb-4 text-amber-200">Valores</h3>
                            <ul className="text-rose-100/70 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-400" /> Ética Médica inegociável</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-400" /> Excelência técnica</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-400" /> Acolhimento humano</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-400" /> Inovação constante</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DIRETORA TÉCNICA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-2/5 relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop"
                                    alt="Dra Sofia Martini"
                                    width={600}
                                    height={800}
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                                    <p className="text-white font-serif text-2xl font-bold">Dra. Sofia Martini</p>
                                    <p className="text-rose-300 text-sm">CRM/SP 123456</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-3/5">
                            <h2 className="font-serif text-4xl text-neutral-900 mb-6">Liderança Técnica e Científica</h2>
                            <h3 className="text-rose-600 font-bold uppercase tracking-widest text-sm mb-8">Diretora Médica</h3>

                            <div className="space-y-6 text-neutral-600 leading-relaxed font-light text-lg">
                                <p>
                                    Graduada em Medicina pela USP com Residência em Dermatologia no Hospital das Clínicas. Fellow em Cosmiatria e Laser na Harvard Medical School (EUA).
                                </p>
                                <p>
                                    A Dra. Sofia é palestrante internacional e autora de diversos artigos científicos sobre rejuvenescimento facial. Sua filosofia de trabalho, o "Positive Aging", foca em gerenciar o envelhecimento de forma elegante e imperceptível.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <div className="flex items-center gap-4 bg-neutral-50 p-4 rounded-xl">
                                    <Award className="text-amber-500" size={32} />
                                    <div>
                                        <p className="font-bold text-neutral-900">Membro SBD</p>
                                        <p className="text-xs text-neutral-500">Sociedade Brasileira de Dermatologia</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-neutral-50 p-4 rounded-xl">
                                    <Globe className="text-rose-500" size={32} />
                                    <div>
                                        <p className="font-bold text-neutral-900">Speaker Allergan</p>
                                        <p className="text-xs text-neutral-500">MD Codes™ Expert</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. EQUIPE MULTIDISCIPLINAR */}
            <section className="py-24 bg-neutral-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl mb-4 text-neutral-900">Corpo Clínico Especializado</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto">
                            Nossa equipe passa por treinamentos semanais para garantir a excelência e segurança em todos os procedimentos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, idx) => (
                            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                <div className="p-8 text-center">
                                    <h4 className="font-serif font-bold text-xl text-neutral-900 mb-1">{member.name}</h4>
                                    <p className="text-rose-600 font-medium text-sm mb-2">{member.role}</p>
                                    <p className="text-xs text-neutral-400 border-t border-neutral-100 pt-3 inline-block px-4">
                                        {member.crm}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. INFRAESTRUTURA & TECNOLOGIA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <h2 className="font-serif text-4xl mb-12 text-center text-neutral-900">Tecnologia de Ponta</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group relative overflow-hidden rounded-[2.5rem] h-[300px] shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop"
                                alt="Laser Room"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-neutral-900/60 p-8 flex flex-col justify-end">
                                <Microscope className="text-rose-400 mb-4" size={32} />
                                <h3 className="text-white font-bold text-xl mb-2">Lasers Importados</h3>
                                <p className="text-neutral-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    Plataformas Solon, Etherea e Fotona para tratamentos precisos.
                                </p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-[2.5rem] h-[300px] shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2606&auto=format&fit=crop"
                                alt="Sala de Procedimentos"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-neutral-900/60 p-8 flex flex-col justify-end">
                                <Building2 className="text-purple-400 mb-4" size={32} />
                                <h3 className="text-white font-bold text-xl mb-2">Salas Privativas</h3>
                                <p className="text-neutral-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    Ambientes climatizados com isolamento acústico para seu conforto.
                                </p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-[2.5rem] h-[300px] shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop"
                                alt="Esterilização"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-neutral-900/60 p-8 flex flex-col justify-end">
                                <ShieldCheck className="text-amber-400 mb-4" size={32} />
                                <h3 className="text-white font-bold text-xl mb-2">Central de Esterilização</h3>
                                <p className="text-neutral-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    Biossegurança hospitalar rigorosa em todos os materiais.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA - TRABALHE CONOSCO */}
            <section className="py-20 bg-rose-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="bg-white rounded-[3rem] p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl">
                        <div>
                            <h3 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Faça Parte da Nossa Equipe</h3>
                            <p className="text-neutral-600 max-w-lg mb-6">
                                Buscamos profissionais apaixonados por estética e excelência no atendimento. Se você compartilha nossos valores, queremos te conhecer.
                            </p>
                            <Link href="#" className="flex items-center gap-2 text-rose-600 font-bold hover:text-rose-700 transition-colors">
                                Ver Vagas Disponíveis <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-40 h-40 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                                <Users size={64} className="text-rose-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
