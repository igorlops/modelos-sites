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
            <footer className="py-6 bg-black text-center text-slate-700 text-xs border-t border-slate-900">
                <div className={theme.layout.container}>
                    <p>&copy; {new Date().getFullYear()} Ricardo Mendes Personal Trainer. Todos os direitos reservados.</p>
                </div>
            </footer>
        </main>
    );
}
