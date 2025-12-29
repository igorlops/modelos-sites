import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PortfolioPage() {
    const cases = [
        {
            title: "Harmonização Facial Full Face",
            category: "Facial Completa",
            description: "Reestruturação e embelhecimento completo com toxina, preenchimentos e bioestimuladores.",
            challenge: "Paciente de 42 anos com perda de volume facial, sulcos marcados e flacidez inicial",
            solution: "Protocolo combinado de toxina botul ínica em terço superior, preenchimento de maçãs e sulcos com ácido hialurônico e bioestimulador de colágeno para firmeza global",
            result: "Rejuvenescimento de aproximadamente 8-10 anos com resultado extremamente natural, sem alterar traços de identidade. Paciente relatou aumento significativo de autoestima",
            metric: "95% satisfação"
        },
        {
            title: "Preenchimento Labial Natural",
            category: "Lábios",
            description: "Volume e hidratação com naturalidade absoluta, respeitando proporção áurea.",
            challenge: "Lábios finos e desidratados, com bordas pouco definidas e assimetria leve",
            solution: "Preenchimento com ácido hialurônico ultrafluido em técnica multicamadas, enfatizando hidratação e definição sutil sem exageros",
            result: "Aumento de volume de 30% com aspecto completamente natural, arco do cupido definido e lábios hidratados. Duração de 12-14 meses",
            metric: "100% naturalidade"
        },
        {
            title: "Bioestimulador Corporal - Glúteos",
            category: "Corporal",
            description: "Tratamento de flacidez e melhora de contorno em região glútea.",
            challenge: "Flacidez moderada pós-emagrecimento com perda de tônus muscular e volume",
            solution: "Protocolo de bioestimulador PLLA em 3 sessões mensais associado a radiofrequência para firmeza e estímulo de colágeno progressivo",
            result: "Melhora de 70% da firmeza, contorno mais definido e pele visivelmente mais tonificada após 4 meses do protocolo completo",
            metric: "70% firmeza"
        },
        {
            title: "Tratamento de Melasma Avançado",
            category: "Pele",
            description: "Clareamento de manchas faciais resistentes com protocolo combinado.",
            challenge: "Melasma grau III resistente a tratamentos tópicos, com manchas em região malar bilateral",
            solution: "Associação de peeling químico médio (TCA 20%), laser Q-Switched para pigmento e microagulhamento com drug delivery de clareadores",
            result: "Redução de 80% da pigmentação em 6 meses de tratamento, com manutenção trimestral preventiva",
            metric: "80% clareamento"
        },
        {
            title: "Rinomodelação Não-Cirúrgica",
            category: "Facial",
            description: "Correção do dorso nasal e projeção de ponta sem cirurgia plástica.",
            challenge: "Giba nasal (osso saliente) e ponta nasal caída, causando desarmonia facial",
            solution: "Preenchimento estratégico com ácido hialurônico de alta densidade para camuflagem de giba e elevação sutil da ponta",
            result: "Nariz visualmente mais fino e harmônico, com duração de 18 meses. Paciente evitou rinoplastia cirúrgica",
            metric: "18 meses duração"
        },
        {
            title: "Tratamento Completo de Acne Ativa",
            category: "Pele",
            description: "Recuperação da saúde da pele com controle de oleosidade e inflamação.",
            challenge: "Acne grau III com lesões inflamatórias ativas, hiperpigmentação pós-inflamatória e autoestima comprometida",
            solution: "Protocolo médico com limpezas profundas quinzenais, peelings de ácido salicílico, LED terapia e orientação dermocosmética home care",
            result: "Controle total das lesões ativas em 3 meses, redução de 90% das manchas em 6 meses e pele com textura normalizada",
            metric: "90% melhora"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-white">
                <section className="py-20 bg-slate-900 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-serif mb-4">Casos de Sucesso Reais</h1>
                        <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Resultados comprovados de pacientes que confiaram em nosso trabalho e metodologia.
                            <br />
                            <span className="text-xs opacity-60 block mt-2">
                                * Imagens autorizadas. Os resultados podem variar de pessoa para pessoa conforme biotipo e aderência ao tratamento.
                            </span>
                        </p>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="space-y-12">
                        {cases.map((item, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                                    <div className="md:col-span-2">
                                        <div className="aspect-[4/5] bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-slate-200 flex items-center justify-center text-slate-400 flex-col">
                                                <div className="text-6xl mb-4">📸</div>
                                                <p className="font-semibold">Caso {i + 1}</p>
                                                <p className="text-sm">{item.category}</p>
                                            </div>
                                            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-rose-500 uppercase">
                                                {item.category}
                                            </div>
                                        </div>
                                        <div className="text-center p-4 bg-rose-50 rounded-lg">
                                            <div className="text-3xl font-bold text-rose-600 mb-1">{item.metric}</div>
                                            <div className="text-sm text-slate-600">Resultado Medido</div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-3">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-sm">!</span>
                                                    Desafio:
                                                </h4>
                                                <p className="text-slate-600 leading-relaxed pl-8">{item.challenge}</p>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                    <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm">✓</span>
                                                    Solução:
                                                </h4>
                                                <p className="text-slate-600 leading-relaxed pl-8">{item.solution}</p>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm">★</span>
                                                    Resultado:
                                                </h4>
                                                <p className="text-slate-600 leading-relaxed pl-8">{item.result}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-rose-50 to-slate-50 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-serif text-slate-900 mb-6">Seu Caso Pode Ser o Próximo Sucesso</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Cada transformação começa com uma avaliação personalizada. Agende a sua e descubra como podemos ajudar você.
                        </p>
                        <a
                            href="/sites-institucionais/simples/clinica-estetica/contato"
                            className="inline-block bg-rose-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-rose-600 transition-colors shadow-lg"
                        >
                            Quero Minha Transformação
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
