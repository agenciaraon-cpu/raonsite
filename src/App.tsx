import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Differentials } from './components/Differentials';
import { Plans } from './components/Plans';
import { Positioning } from './components/Positioning';
import { TechAI } from './components/TechAI';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Plans />
        <Positioning />
        <TechAI />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
