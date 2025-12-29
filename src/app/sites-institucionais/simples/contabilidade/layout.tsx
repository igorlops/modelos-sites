import { Roboto, Open_Sans } from "next/font/google";
import "../../../globals.css";
import { Metadata } from "next";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-roboto" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });

export const metadata: Metadata = {
    title: "Contábil Prime | Contabilidade Digital para Empresas",
    description: "Soluções contábeis modernas, abertura de empresas e BPO financeiro. Simplifique a gestão do seu negócio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`min-h-screen bg-slate-50 text-slate-900 ${roboto.variable} ${openSans.variable} font-sans`}>
            {children}
        </div>
    );
}
