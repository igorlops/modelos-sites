import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
// import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Corporate Fonts
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Consultoria Empresarial Estratégica | Transformação de Negócios',
    description: 'Soluções estratégicas para desafios complexos. Consultoria de gestão focada em resultados mensuráveis, crescimento e eficiência operacional para grandes empresas.',
    keywords: ['consultoria estratégica', 'gestão empresarial', 'transformação digital', 'eficiência operacional', 'consultoria de negócios', 'estratégia corporativa'],
    authors: [{ name: 'Consultoria Estratégica' }],
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#1e293b', // Slate-800
    openGraph: {
        title: 'Consultoria Empresarial Estratégica | Transformação de Negócios',
        description: 'Soluções estratégicas para desafios complexos. Consultoria de gestão focada em resultados mensuráveis, crescimento e eficiência operacional.',
        url: 'https://consultoria-estrategica.com.br',
        siteName: 'Consultoria Empresarial Estratégica',
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
            <body className={`${inter.variable} ${roboto.variable} font-sans antialiased text-slate-700 bg-slate-50 selection:bg-blue-600 selection:text-white`}>
                <Header />
                <main className="min-h-screen flex flex-col pt-20 lg:pt-28">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
