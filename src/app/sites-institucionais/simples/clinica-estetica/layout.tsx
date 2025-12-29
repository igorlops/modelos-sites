import { Inter } from "next/font/google";
import "../../../globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lumina Estética Avançada | Sua beleza em evidência",
    description: "Clínica de estética especializada em harmonização facial, tratamentos corporais e laser. Agende sua avaliação.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`min-h-screen bg-slate-50 text-slate-800 ${inter.className}`}>
            {children}
        </div>
    );
}
