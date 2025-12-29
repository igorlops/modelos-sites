import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Luminous Odontologia | Implantes e Estética Dental",
    description: "Clínica odontológica premium especializada em lentes de contato, invisalign e implantes. Tecnologia 3D e conforto absoluto.",
};

export default function OdontoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={font.className}>
            {children}
        </div>
    );
}
