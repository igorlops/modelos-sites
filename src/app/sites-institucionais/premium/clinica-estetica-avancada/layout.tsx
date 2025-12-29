import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Using Google Fonts via Next.js for premium typography
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "../../../../../globals.css"; // Assuming global styles are already present or not needed for this isolated build

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Lumière Esthétique | Clínica de Estética Avançada e Bem-Estar",
    description: "Clínica de estética de alto padrão especializada em tratamentos faciais, corporais e tecnologia avançada. Revele sua melhor versão com segurança e exclusividade.",
    keywords: ["estética avançada", "dermatologia", "botox", "harmonização facial", "spa de luxo", "tratamentos corporais", "beleza natural"],
    openGraph: {
        title: "Lumière Esthétique | Excelência em Estética Avançada",
        description: "Tecnologia suíça e resultados comprovados em um ambiente de luxo e acolhimento.",
        url: "https://lumiereesthetique.com.br",
        siteName: "Lumière Esthétique",
        locale: "pt_BR",
        type: "website",
    },
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className={`${playfair.variable} ${inter.variable} font-sans antialiased text-neutral-800 bg-neutral-50 selection:bg-rose-100 selection:text-rose-900`}>
                <Header />
                <main className="min-h-screen relative overflow-hidden">
                    {/* Global Decoration Elements */}
                    <div className="fixed top-0 left-0 w-full h-[100px] bg-gradient-to-b from-white/80 to-transparent z-40 pointer-events-none" />
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
