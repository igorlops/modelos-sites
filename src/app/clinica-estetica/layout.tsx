import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";

const headingFont = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-heading" });
const bodyFont = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-body" });

export const metadata: Metadata = {
    title: "Aura Estética Avançada | Harmonização e Laser",
    description: "Clínica de estética de alto padrão. Tratamentos faciais e corporais com tecnologia de ponta para realçar sua beleza natural.",
};

export default function EsteticaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${headingFont.variable} ${bodyFont.variable} font-sans`}>
            {children}
        </div>
    );
}
