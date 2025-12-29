import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "../../../../../globals.css";

export const metadata: Metadata = {
    title: "SolarPro | Energia Solar Fotovoltaica e Sustentabilidade",
    description: "Reduza até 95% da sua conta de luz com energia solar. Projetos residenciais, comerciais e industriais com garantia de 25 anos. Empresa homologada ANEEL.",
    keywords: ["energia solar", "fotovoltaica", "painel solar", "economia de energia", "sustentabilidade", "energia limpa", "aneel", "inmetro"],
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className="scroll-smooth font-sans antialiased text-slate-700 bg-slate-50 selection:bg-amber-500 selection:text-sky-950">
                <Header />
                <main className="min-h-screen flex flex-col pt-16 lg:pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
