import { theme } from './theme';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import PorqueEscolher from './components/PorqueEscolher';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Contato from './components/Contato';

export default function Page() {
    return (
        <main className={`min-h-screen ${theme.colors.background} ${theme.colors.text}`}>
            <Header />
            <Sobre />
            <Servicos />
            <PorqueEscolher />
            <CTA />
            <FAQ />
            <Contato />

            <footer className="py-8 bg-neutral-900 text-center text-neutral-600 text-sm">
                <div className={theme.layout.container}>
                    <p>&copy; {new Date().getFullYear()} Lima & Associados Advocacia • OAB/SP 12.345</p>
                </div>
            </footer>
        </main>
    );
}
