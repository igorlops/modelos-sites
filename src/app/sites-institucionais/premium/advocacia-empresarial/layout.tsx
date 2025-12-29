import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

// Corporate Fonts - Classic & Legible
const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const lato = Lato({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin'],
    variable: '--font-lato',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Advocacia Empresarial Premium | Excelência Jurídica',
    description: 'Escritório de advocacia empresarial de alta performance. Assessoria jurídica estratégica para grandes corporações em direito societário, tributário e M&A.',
    keywords: ['advocacia empresarial', 'direito corporativo', 'fusões e aquisições', 'compliance', 'recuperação judicial', 'direito tributário'],
    authors: [{ name: 'Advocacia Premium' }],
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#0f172a', // Slate-900
    openGraph: {
        title: 'Advocacia Empresarial Premium | Excelência Jurídica',
        description: 'Tradição, Ética e Resultados. Assessoria jurídica completa para o seu negócio.',
        url: 'https://advocacia-empresarial-premium.com.br',
        siteName: 'Advocacia Empresarial Premium',
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
        <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
            <body className="font-sans antialiased text-slate-700 bg-stone-50 selection:bg-amber-700 selection:text-white">
                <Header />
                <main className="min-h-screen flex flex-col pt-32">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
