import { Playfair_Display, Lato } from "next/font/google";
import "../../../globals.css";
import { Metadata } from "next";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-lato" });

export const metadata: Metadata = {
    title: "Martins & Associados | Advocacia Empresarial",
    description: "Escritório de advocacia especializado em Direito Empresarial, Societário e Tributário. Defesa estratégica para o seu negócio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`min-h-screen bg-white text-slate-900 ${playfair.variable} ${lato.variable} font-sans`}>
            {children}
        </div>
    );
}
