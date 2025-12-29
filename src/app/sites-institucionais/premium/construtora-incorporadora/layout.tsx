import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

// Modern Geometric Fonts
const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Construtora e Incorporadora Premium | Construindo Sonhos',
    description: 'Há 25 anos realizando o sonho da casa própria com qualidade, segurança e inovação. Conheça nossos lançamentos e imóveis prontos para morar.',
    keywords: ['construtora', 'incorporadora', 'imóveis', 'apartamento', 'casa própria', 'lançamento imobiliário', 'minha casa minha vida', 'investimento imobiliário'],
    authors: [{ name: 'Construtora Premium' }],
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#0f766e', // Teal-700
    openGraph: {
        title: 'Construtora e Incorporadora Premium | Construindo Sonhos',
        description: 'Excelência em construção civil e incorporação imobiliária. Seu novo lar está aqui.',
        url: 'https://construtora-premium.com.br',
        siteName: 'Construtora Premium',
        locale: 'pt_BR',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`}>
            <body className="font-sans antialiased text-slate-700 bg-zinc-50 selection:bg-teal-700 selection:text-white">
                <Header />
                <main className="min-h-screen flex flex-col pt-0">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
