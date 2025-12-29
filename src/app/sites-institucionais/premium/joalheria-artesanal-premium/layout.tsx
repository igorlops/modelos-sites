import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    variable: '--font-lato',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'L\'Art d\'Or | Joalheria Artesanal & Design de Luxo',
    description: 'Atelier de alta joalheria focado em peças exclusivas, diamantes éticos e design autoral. Eternize seus momentos com arte.',
    keywords: ['joalheria', 'joias artesanais', 'diamantes', 'ouro 18k', 'design de luxo', 'alianças personalizadas', 'atelier de joias'],
    authors: [{ name: 'L\'Art d\'Or Atelier' }],
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    themeColor: '#d97706', // Amber-600
    openGraph: {
        title: 'L\'Art d\'Or | Joalheria Artesanal & Design de Luxo',
        description: 'A arte da joalheria tradicional encontre o design contemporâneo.',
        url: 'https://lartdor.com.br',
        siteName: 'L\'Art d\'Or',
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
        <html lang="pt-BR" >
            <body className={`font-sans antialiased text-stone-950 bg-zinc-50 selection:bg-amber-600 selection:text-white ${playfair.variable} ${lato.variable} scroll-smooth`}>
                {/* Background Texture for Luxury Feel */}
                <div className="fixed inset-0 z-[-1] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] pointer-events-none mix-blend-multiply"></div>

                <Header />
                <main className="min-h-screen flex flex-col pt-0 relative z-10">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
