import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
    title: 'Clínica Odontológica Excellence | Seu Sorriso, Nossa Prioridade',
    description: 'Clínica odontológica especializada em tratamentos estéticos e preventivos. Tecnologia de ponta, profissionais qualificados e atendimento humanizado.',
}

export default function ClinicaOdontologicaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}
