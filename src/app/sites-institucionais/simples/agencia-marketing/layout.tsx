import { Poppins } from "next/font/google";
import "../../../globals.css";
import { Metadata } from "next";

const poppins = Poppins({ weight: ["300", "400", "600", "700"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
    title: "Focus Digital | Agência de Marketing de Performance",
    description: "Tráfego pago, Social Media e Branding para marcas que buscam resultados reais. Vamos escalar seu negócio?",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`min-h-screen bg-black text-white ${poppins.variable} font-sans`}>
            {children}
        </div>
    );
}
