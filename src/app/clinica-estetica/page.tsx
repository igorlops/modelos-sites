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

            <footer className="py-12 bg-stone-900 text-stone-600 text-center text-xs tracking-widest uppercase border-t border-stone-800">
                <div className={theme.layout.container}>
                    <p>&copy; {new Date().getFullYear()} Aura Estética Avançada. Todos os direitos reservados.</p>
                </div>
            </footer>
        </main>
    );
}
