'use client';

import { theme } from '../theme';
import { Instagram, Smartphone, MapPin, Mail } from 'lucide-react';

export default function Contato() {
    return (
        <section className="py-24 bg-stone-50 border-t border-stone-200">
            <div className={theme.layout.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    <div className="bg-white p-12 shadow-sm">
                        <h3 className="font-serif text-3xl mb-8">Fale Conosco</h3>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-stone-500">Nome</label>
                                <input type="text" className="w-full border-b border-stone-300 py-2 focus:border-stone-900 focus:outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-stone-500">Telefone</label>
                                <input type="tel" className="w-full border-b border-stone-300 py-2 focus:border-stone-900 focus:outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-stone-500">Mensagem</label>
                                <textarea rows={3} className="w-full border-b border-stone-300 py-2 focus:border-stone-900 focus:outline-none transition-colors resize-none"></textarea>
                            </div>
                            <button className="bg-rose-950 text-white w-full py-4 uppercase tracking-widest text-xs font-bold hover:bg-stone-900 transition-colors">
                                Enviar Solicitação
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col justify-between py-4">
                        <div>
                            <h3 className="font-serif text-3xl mb-8">Aura Clinic</h3>
                            <div className="space-y-6 font-light text-stone-600">
                                <div className="flex gap-4">
                                    <MapPin className="text-rose-900 w-5 h-5" />
                                    <p>Rua Oscar Freire, 2000<br />Jardins, São Paulo - SP</p>
                                </div>
                                <div className="flex gap-4">
                                    <Smartphone className="text-rose-900 w-5 h-5" />
                                    <p>(11) 99888-7777</p>
                                </div>
                                <div className="flex gap-4">
                                    <Mail className="text-rose-900 w-5 h-5" />
                                    <p>contato@auraclinic.com.br</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-xs uppercase tracking-wider text-stone-400 mb-4">Siga-nos</p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-rose-950 hover:text-white hover:border-rose-950 transition-all">
                                    <Instagram className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
