import Header from "../components/Header";
import Footer from "../components/Footer";
import { Target, Eye, Gem, CheckCircle, Heart, Award } from "lucide-react";

export default function SobrePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow bg-[#FDFBF7]">
                <section className="py-20 bg-gradient-to-br from-teal-50 to-stone-50">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Minha História de Cuidado e Dedicação</h1>
                        <p className="text-xl text-stone-600 max-w-3xl mx-auto">Há mais de 10 anos ajudando pessoas a encontrarem equilíbrio emocional e bem-estar através da psicoterapia</p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <div className="w-full aspect-[3/4] bg-stone-200 rounded-2xl overflow-hidden relative shadow-md mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-stone-300 flex items-center justify-center text-stone-500 flex-col">
                                        <div className="text-7xl mb-4">👩‍⚕️</div>
                                        <p className="font-bold text-lg">Psicóloga Ana Silva</p>
                                        <p className="text-sm">CRP 06/12345</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-teal-800 mb-4 uppercase tracking-wider text-sm">Minha Trajetória</h2>
                                    <div className="space-y-4 text-stone-600 leading-relaxed">
                                        <p>
                                            Olá, sou Ana Silva. Psicóloga graduada pela Universidade de São Paulo (USP) em 2013, com especialização em Terapia Cognitivo-Comportamental pela UNIFESP e formação continuada em Terapia do Esquema e Mindfulness.
                                        </p>
                                        <p>
                                            Decidi seguir a psicologia por acreditar profundamente no potencial humano de transformação e resiliência. Desde a graduação, me fascino pela capacidade que todos nós temos de ressignificar experiências e construir narrativas mais saudáveis sobre nós mesmos.
                                        </p>
                                        <p>
                                            Nos últimos 10 anos, tenho dedicado minha carreira a ajudar pessoas a superarem ansiedade, depressão, traumas e conflitos internos, sempre com um olhar humano, acolhedor e livre de julgamentos. Cada história que ouço é única e merece ser tratada com o respeito e cuidado que ela demanda.
                                        </p>
                                        <p className="font-semibold text-teal-700">
                                            Já acompanhei mais de 300 pessoas em suas jornadas de autoconhecimento, e continuo aprendendo com cada uma delas.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                                    <h3 className="font-bold text-stone-900 mb-3">Formação e Qualificações</h3>
                                    <ul className="space-y-2 text-sm text-stone-700">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-teal-600 mt-1 flex-shrink-0" />
                                            <span>Graduação em Psicologia - USP (2009-2013)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-teal-600 mt-1 flex-shrink-0" />
                                            <span>Especialização em TCC - UNIFESP (2014-2016)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-teal-600 mt-1 flex-shrink-0" />
                                            <span>Formação em Terapia do Esquema - WP (2018)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-teal-600 mt-1 flex-shrink-0" />
                                            <span>Certificação em Mindfulness - MBCT (2020)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle size={16} className="text-teal-600 mt-1 flex-shrink-0" />
                                            <span>Membro ativo da ABRATECC e Sociedade Brasileira de Psicologia</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-[#FDFBF7] p-8 rounded-2xl shadow-sm border border-stone-100">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                    <Target className="text-teal-600" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4">Minha Missão</h3>
                                <p className="text-stone-600 leading-relaxed">
                                    Proporcionar um espaço seguro e acolhedor para que cada pessoa possa se conhecer profundamente, desenvolver recursos internos e construir uma vida com mais significado, equilíbrio emocional e bem-estar psicológico.
                                </p>
                            </div>

                            <div className="bg-[#FDFBF7] p-8 rounded-2xl shadow-sm border border-stone-100">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                    <Gem className="text-teal-600" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4">Meus Valores</h3>
                                <ul className="text-stone-600 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={16} />
                                        Empatia e acolhimento genuíno
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={16} />
                                        Ética e sigilo absoluto
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={16} />
                                        Respeito à individualidade
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={16} />
                                        Atualização científica constante
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={16} />
                                        Compromisso com resultados
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#FDFBF7] p-8 rounded-2xl shadow-sm border border-stone-100">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                    <Eye className="text-teal-600" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4">Minha Visão</h3>
                                <p className="text-stone-600 leading-relaxed">
                                    Contribuir para um mundo onde cuidar da saúde mental seja tão natural quanto cuidar da saúde física, e onde cada pessoa tenha acesso a ferramentas para viver de forma mais plena e consciente.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-stone-50 to-teal-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Minha Abordagem Terapêutica</h2>
                            <p className="text-xl text-stone-600 max-w-2xl mx-auto">Compreenda como trabalho e o que você pode esperar do processo</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">🧠</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">Terapia Cognitivo-Comportamental</h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        A TCC é uma abordagem ativa e focada no presente, que investiga a relação entre pensamentos, emoções e comportamentos. Trabalho com você para identificar padrões disfuncionais e construir alternativas mais saudáveis e adaptativas.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <Heart size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">Acolhimento Genuíno</h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        Além da técnica, ofereço um espaço de escuta empática e livre de julgamentos. Acredito que a relação terapêutica sólida é a base para qualquer transformação profunda e duradoura.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">Objetivos Claros</h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        Trabalho de forma colaborativa com você para definir metas terapêuticas claras e mensuráveis. Avaliamos o progresso regularmente e ajustamos estratégias conforme necessário.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <Award size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">Ferramentas Práticas</h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        Você aprenderá técnicas de regulação emocional, reestruturação cognitiva, resolução de problemas e mindfulness que poderá usar no dia a dia, desenvolvendo autonomia e recursos internos permanentes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-lg border border-teal-100 text-center">
                        <h2 className="text-3xl font-serif text-stone-900 mb-6">Pronta(o) Para Começar Sua Jornada?</h2>
                        <p className="text-lg text-stone-600 mb-8">
                            Se você chegou até aqui, já deu um passo importante. Entre em contato para agendar sua primeira sessão.
                        </p>
                        <a
                            href="/sites-institucionais/simples/psicologo/contato"
                            className="inline-block px-10 py-4 bg-teal-700 text-white rounded-md font-medium hover:bg-teal-800 transition-all shadow-lg"
                        >
                            Agendar Primeira Sessão
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
