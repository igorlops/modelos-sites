'use client';

import { useState } from 'react';
import Link from 'next/link';

const niches = [
  { slug: 'personal-trainer', name: 'Personal Trainer Pro' },
  { slug: 'nutricionista-esportivo', name: 'NutriSport Performance' },
  { slug: 'clinica-odontologica', name: 'Sorriso Radiante Odontologia' },
  { slug: 'clinica-estetica', name: 'Estética & Bem-estar' },
  { slug: 'psicologo', name: 'Espaço Terapêutico Mente Sã' },
  { slug: 'advocacia-empresarial', name: 'Justiça & Negócios Advogados' },
  { slug: 'contabilidade', name: 'Contábil Exata' },
  { slug: 'imobiliaria-alto-padrao', name: 'Luxor Imóveis' },
  { slug: 'corretor-seguros', name: 'Segura Vida & Bens' },
  { slug: 'saas-financeiro', name: 'FinControl SaaS' },
  { slug: 'saas-crm', name: 'ClientFlow CRM' },
  { slug: 'escola-idiomas', name: 'Global Talk Idiomas' },
  { slug: 'curso-online', name: 'MasterClass Digital' },
  { slug: 'agencia-marketing', name: 'Growth Ads Agency' },
  { slug: 'consultoria-empresarial', name: 'Vision Consultoria' },
  { slug: 'clinica-veterinaria', name: 'VetCare 24h' },
  { slug: 'pet-shop-premium', name: 'Boutique Pet' },
  { slug: 'ecommerce-nicho', name: 'Cafés Especiais Online' },
  { slug: 'infoprodutor', name: 'Creator Academy' },
  { slug: 'startup-tecnologia', name: 'NovaTech Solutions' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Gerador de Sites Institucionais
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            20+ Sites completos dentro desta aplicação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {niches.map((niche) => (
            <Link key={niche.slug} href={`/${niche.slug}`}>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-100 hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="px-5 py-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-blue-600 truncate">
                      {niche.slug}
                    </div>
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    {niche.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Clique para visualizar
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>
            Todos os sites são rotas dentro de <code className="bg-gray-100 px-1 py-0.5 rounded">src/app/</code>.
            Cada um possui seu próprio layout e isolamento visual.
          </p>
        </div>
      </div>
    </div>
  );
}
