import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "../../../../globals.css";

export const metadata: Metadata = {
    title: "ArchPremium | Arquitetura de Alto Padrão e Design de Interiores",
    description: "Escritório premiado de arquitetura e design de interiores especializado em projetos residenciais de luxo e corporativos. Transformando espaços em experiências.",
    keywords: ["arquitetura", "design de interiores", "luxo", "alto padrão", "projetos", "reforma", "decoração"],
    authors: [{ name: "ArchPremium" }],
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className="scroll-smooth font-sans antialiased text-stone-800 bg-stone-50 selection:bg-amber-600 selection:text-white">
                <Header />
                <main className="min-h-screen flex flex-col">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
