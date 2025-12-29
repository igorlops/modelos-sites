import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";

const sans = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans" });
const serif = Roboto_Slab({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-serif" });

export const metadata: Metadata = {
    title: "Contabiliza+ | Contabilidade Digital Inteligente",
    description: "Contabilidade consultiva para empresas modernas. Abertura de empresa em 24h, BPO financeiro e planejamento tributário estratégico.",
};

export default function ContabilidadeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${sans.variable} ${serif.variable} font-sans`}>
            {children}
        </div>
    );
}
