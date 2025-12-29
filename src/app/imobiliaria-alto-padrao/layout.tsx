import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const font = Montserrat({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });
export const metadata: Metadata = { title: "Prime Estates | Imóveis de Alto Padrão", description: "Imóveis exclusivos em bairros nobres. Apartamentos, coberturas e casas de luxo com consultoria personalizada." };
export default function ImobiliariaLayout({ children }: { children: React.ReactNode }) {
    return <div className={font.className}>{children}</div>;
}
