import { ArrowRight, Mail } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function FinalCTA() {
  return (
    <section id="contato" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Cinematic glows */}
      <div className="absolute inset-0 bg-slate-900 z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[100px] mix-blend-screen opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[100px] mix-blend-screen opacity-60 pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')] opacity-50 select-none pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl mx-auto flex items-center justify-center mb-8 border border-white/10 shadow-xl shadow-brand-blue/20">
            <span className="font-display font-bold text-3xl text-white">R<span className="text-brand-orange">.</span></span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight tracking-tight mb-8">
            Sua empresa pode parecer <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">muito maior.</span>
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto">
            Fortaleça sua presença digital com a Agência Raon Marketing & Branding.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://wa.me/5575988644742" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
              Entrar em Contato
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="https://wa.me/5575988644742" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-white/20 hover:border-white/30">
              <Mail className="w-5 h-5" />
              Solicitar Orçamento
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
