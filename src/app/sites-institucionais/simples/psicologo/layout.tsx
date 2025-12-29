import { Lora, Lato } from "next/font/google";
import "../../../globals.css";
import { Metadata } from "next";

const lora = Lora({ subsets: ["latin"], variable: '--font-lora' });
const lato = Lato({ weight: ['400', '700'], subsets: ["latin"], variable: '--font-lato' });

export const metadata: Metadata = {
    title: "Psicóloga Ana Silva | Terapia Cognitivo Comportamental",
    description: "Atendimento psicológico acolhedor em São Paulo. Terapia individual, ansiedade, depressão e autoconhecimento.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`min-h-screen bg-[#FDFBF7] text-stone-700 ${lora.variable} ${lato.variable} font-sans`}>
            {children}
        </div>
    );
}
