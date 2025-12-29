import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";

const serif = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-serif" });
const sans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Psicologia Humanista | Dr. André Siqueira CRP 06/12345",
    description: "Terapia online e presencial para ansiedade, depressão e autoconhecimento. Um espaço seguro para sua jornada emocional.",
};

export default function PsicologoLayout({
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
