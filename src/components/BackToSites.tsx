"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ArrowLeft } from "lucide-react";

export default function BackToSites() {
    const pathname = usePathname();

    // Don't show on the main list page
    if (pathname === "/") return null;

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            <Link
                href="/"
                className="flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-full shadow-2xl hover:bg-slate-800 hover:scale-105 transition-all text-sm font-bold border border-slate-700"
                title="Voltar para Lista de Sites"
            >
                <ArrowLeft size={16} />
                <span className="hidden md:inline">Voltar para Sites</span>
                <Home size={16} className="md:hidden" />
            </Link>
        </div>
    );
}
