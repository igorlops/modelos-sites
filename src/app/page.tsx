'use client';

import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {

  const sitesSimples = [
    { slug: 'advocacia-empresarial', name: 'Advocacia Empresarial' },
    { slug: 'agencia-marketing', name: 'Agência de Marketing' },
    { slug: 'clinica-estetica', name: 'Clínica de Estética' },
    { slug: 'clinica-odontologica', name: 'Clínica Odontológica' },
    { slug: 'contabilidade', name: 'Escritório de Contabilidade' },
    { slug: 'imobiliaria', name: 'Imobiliária Residencial' },
    { slug: 'psicologo', name: 'Consultório de Psicologia' },
  ];

  const landingPages = [
    { slug: 'personal-trainer', name: 'Personal Trainer' },
    { slug: 'nutricionista-esportivo', name: 'Nutricionista Esportivo' },
    { slug: 'clinica-odontologica', name: 'Odontologia' },
    { slug: 'clinica-estetica', name: 'Estética' },
    { slug: 'psicologo', name: 'Psicologia' },
    { slug: 'advocacia-empresarial', name: 'Advocacia' },
    { slug: 'contabilidade', name: 'Contabilidade' },
    { slug: 'imobiliaria-alto-padrao', name: 'Imobiliária Luxo' },
    { slug: 'corretor-seguros', name: 'Corretor de Seguros' },
    { slug: 'saas-financeiro', name: 'SaaS Financeiro' },
    { slug: 'saas-crm', name: 'CRM SaaS' },
    { slug: 'escola-idiomas', name: 'Escola de Idiomas' },
    { slug: 'curso-online', name: 'Curso Online' },
    { slug: 'agencia-marketing', name: 'Agência Marketing' },
    { slug: 'consultoria-empresarial', name: 'Consultoria' },
    { slug: 'clinica-veterinaria', name: 'Clínica Veterinária' },
    { slug: 'pet-shop-premium', name: 'Pet Shop' },
    { slug: 'ecommerce-nicho', name: 'E-commerce Café' },
    { slug: 'infoprodutor', name: 'Infoprodutor' },
    { slug: 'startup-tecnologia', name: 'Startup Tech' },
  ];

  const sitesPremium = [
    { slug: 'advocacia-empresarial', name: 'Advocacia Premium' },
    { slug: 'arquitetura-design-interiores', name: 'Arquitetura & Design' },
    { slug: 'clinica-estetica-avancada', name: 'Estética Avançada' },
    { slug: 'construtora-incorporadora', name: 'Construtora & Incorporadora' },
    { slug: 'consultoria-empresarial', name: 'Consultoria Empresarial' },
    { slug: 'energia-solar', name: 'Energia Solar' },
    { slug: 'joalheria-artesanal-premium', name: 'Joalheria Artesanal' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-slate-900 sm:text-6xl tracking-tight mb-4">
            Showcase de Sites
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Coleção de templates institucionais de alta performance, divididos por nível de complexidade e acabamento.
          </p>
        </div>

        {/* Section Premium */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
            <div className="p-3 bg-amber-100 rounded-lg text-amber-700">
              <Star size={32} fill="currentColor" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Sites Institucionais Premium (AAA+)</h2>
              <p className="text-slate-500">Design exclusivo, animações complexas, copy autoral e arquitetura robusta (8+ páginas).</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sitesPremium.map((site) => (
              <Link key={site.slug} href={`/sites-institucionais/premium/${site.slug}`} className="group">
                <div className="bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 rounded-xl border border-slate-200 hover:border-amber-300 h-full flex flex-col relative">
                  <div className="h-2 w-full bg-gradient-to-r from-amber-400 to-orange-600" />
                  <div className="px-8 py-8 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <ShieldCheck className="text-amber-500 mb-4" size={32} />
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">Premium</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {site.name}
                    </h3>
                    <p className="text-sm text-slate-400 font-mono mb-6 truncate">
                      /{site.slug}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-600 group-hover:text-amber-600 transition-colors mt-auto">
                      Ver Projeto <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section Landing Pages */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
            <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700">
              <Zap size={32} fill="currentColor" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Landing Pages (One-Page)</h2>
              <p className="text-slate-500">Focadas em alta conversão, performance e oferta direta.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {landingPages.map((site) => (
              <Link key={site.slug} href={`/landing-pages/${site.slug}`} className="group">
                <div className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg border border-slate-100 hover:border-emerald-300 h-full relative">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-50 rounded-bl-xl flex items-center justify-center text-emerald-600">
                    <ArrowRight size={14} className="-rotate-45" />
                  </div>
                  <div className="px-6 py-6">
                    <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                      {site.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono truncate">
                      /{site.slug}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section Simples */}
        <div>
          <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
              <ShieldCheck size={32} fill="currentColor" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Sites Institucionais Padrão</h2>
              <p className="text-slate-500">Soluções diretas e funcionais (5 páginas).</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sitesSimples.map((site) => (
              <Link key={site.slug} href={`/sites-institucionais/simples/${site.slug}`} className="group">
                <div className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg border border-slate-100 hover:border-blue-200 h-full">
                  <div className="px-6 py-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-[10px] font-bold uppercase text-slate-400">Standard</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {site.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono truncate mb-4">
                      /{site.slug}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center border-t border-slate-200 pt-12">
          <p className="text-slate-400 text-sm">Desenvolvido com Next.js 14 App Router • Tailwind CSS • TypeScript</p>
        </div>

      </div>
    </div>
  );
}
