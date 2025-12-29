import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Personal Trainer Elite | Consultoria Online e Presencial",
    description: "Aumente sua performance e transforme seu corpo com metodologia 100% personalizada. Treinos de força, emagrecimento e correção postural.",
};

export default function PersonalTrainerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={inter.className}>
            {children}
        </div>
    );
}
