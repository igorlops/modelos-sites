import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nutrição Esportiva & Performance | Dra. Clara Vital",
    description: "Protocolos nutricionais baseados em evidência para atletas e praticantes de atividade física. Emagrecimento, hipertrofia e performance.",
};

export default function NutricionistaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={outfit.className}>
            {children}
        </div>
    );
}
