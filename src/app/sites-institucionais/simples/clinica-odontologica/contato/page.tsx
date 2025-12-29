'use client'

import { useState } from 'react'

export default function ContatoPage() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: 'avaliacao',
        mensagem: ''
    })
    const [enviado, setEnviado] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulação de envio
        setEnviado(true)
        setTimeout(() => setEnviado(false), 5000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Vamos Transformar Seu Sorriso?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Entre em contato conosco. Estamos prontos para atendê-lo com excelência.
                        </p>
                    </div>
                </div>
            </section>

            {/* Conteúdo Principal */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Formulário */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Agende Sua Avaliação Gratuita
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Preencha o formulário abaixo e nossa equipe entrará em contato em até 1 hora
                                (horário comercial). Ou se preferir, ligue diretamente para nós.
                            </p>

                            {enviado && (
                                <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6 rounded">
                                    <p className="text-green-800 font-semibold">
                                        ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Nome Completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        required
                                        value={formData.nome}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        placeholder="Seu nome completo"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        E-mail *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        placeholder="seu@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Telefone/WhatsApp *
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        required
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        placeholder="(11) 98765-4321"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="assunto" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Assunto *
                                    </label>
                                    <select
                                        id="assunto"
                                        name="assunto"
                                        required
                                        value={formData.assunto}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    >
                                        <option value="avaliacao">Avaliação Gratuita</option>
                                        <option value="planos">Informações sobre Planos</option>
                                        <option value="tratamento">Informações sobre Tratamento</option>
                                        <option value="urgencia">Urgência / Dor</option>
                                        <option value="orcamento">Solicitar Orçamento</option>
                                        <option value="outro">Outro Assunto</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        rows={5}
                                        value={formData.mensagem}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        placeholder="Conte-nos sobre o que você precisa..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg"
                                >
                                    Enviar Mensagem
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    Ao enviar, você concorda com nossa política de privacidade.
                                    Seus dados estão seguros conosco.
                                </p>
                            </form>
                        </div>

                        {/* Informações de Contato */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Outras Formas de Contato
                            </h2>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">📞</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Telefone</h3>
                                        <p className="text-gray-600">(11) 3456-7890</p>
                                        <p className="text-sm text-gray-500">Seg a Sex: 8h às 19h | Sáb: 8h às 14h</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">📱</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                                        <p className="text-gray-600">(11) 98765-4321</p>
                                        <a
                                            href="https://wa.me/5511987654321"
                                            className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                                        >
                                            Iniciar conversa →
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">✉️</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                                        <p className="text-gray-600">contato@excellenceodonto.com.br</p>
                                        <p className="text-sm text-gray-500">Respondemos em até 2 horas</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Endereço</h3>
                                        <p className="text-gray-600">
                                            Av. Paulista, 1000 - 8º andar<br />
                                            Bela Vista - São Paulo/SP<br />
                                            CEP: 01310-100
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2">
                                            🅿️ Estacionamento conveniado no prédio
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Horários */}
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Horários de Atendimento</h3>
                                <div className="space-y-2 text-gray-700">
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Segunda a Sexta:</span>
                                        <span>08:00 - 19:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Sábado:</span>
                                        <span>08:00 - 14:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Domingo:</span>
                                        <span className="text-gray-500">Fechado</span>
                                    </div>
                                    <div className="flex justify-between border-t border-blue-200 pt-2 mt-2">
                                        <span className="font-semibold">Urgências 24h:</span>
                                        <span className="text-blue-600">(11) 98765-4321</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Nossa Localização
                    </h2>
                    <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                            <span className="text-6xl mb-4 block">🗺️</span>
                            <p className="text-lg">Mapa Interativo</p>
                            <p className="text-sm">Av. Paulista, 1000 - São Paulo/SP</p>
                            <p className="text-xs mt-2">
                                🚇 Estação Trianon-MASP (Linha 2-Verde) - 3 min a pé
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Urgência Odontológica?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Para casos de emergência, entre em contato diretamente pelo WhatsApp.
                        Atendemos 24 horas para urgências.
                    </p>
                    <a
                        href="https://wa.me/5511987654321"
                        className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-200 shadow-2xl"
                    >
                        📱 WhatsApp de Urgência
                    </a>
                </div>
            </section>
        </div>
    )
}
