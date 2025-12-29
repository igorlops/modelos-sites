import { Montserrat, Open_Sans } from "next/font/google";
import "../../../globals.css";
import { Metadata } from "next";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });

export const metadata: Metadata = {
    title: "Urban Imóveis | Compra, Venda e Aluguel de Imóveis de Alto Padrão",
    description: "Encontre o imóvel dos seus sonhos com a Urban Imóveis. Apartamentos, casas e coberturas nas melhores localizações.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`min-h-screen bg-white text-zinc-900 ${montserrat.variable} ${openSans.variable} font-sans`}>
            {children}
        </div>
    );
}
