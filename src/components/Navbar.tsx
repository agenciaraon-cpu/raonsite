import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Agência Raon" className="h-10 w-auto object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Sobre</a>
          <a href="#diferenciais" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Diferenciais</a>
          <a href="#planos" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Planos</a>
          <a href="#tecnologia" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Tecnologia</a>
        </nav>

        <div className="hidden md:block">
          <a href="https://wa.me/5575988644742" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-slate-900 hover:bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/30">
            Falar no WhatsApp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl py-6 px-6 md:hidden flex flex-col gap-6"
          >
            <a href="#sobre" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-800">Sobre</a>
            <a href="#diferenciais" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-800">Diferenciais</a>
            <a href="#planos" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-800">Planos</a>
            <a href="#tecnologia" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-800">Tecnologia</a>
            <a href="https://wa.me/5575988644742" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-medium">
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
