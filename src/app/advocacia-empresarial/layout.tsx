import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Lima & Associados Advocacia | Direito Empresarial",
    description: "Advocacia empresarial estratégica. Consultoria jurídica, contratos, compliance e litígios corporativos para empresas de médio e grande porte.",
};

export default function AdvocaciaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${serif.variable} ${sans.variable} font-sans`}>
            {children}
        </div>
    );
}
