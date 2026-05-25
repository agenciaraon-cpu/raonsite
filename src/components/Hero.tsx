import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] glow-blue rounded-full translate-x-1/2 -translate-y-1/4 mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] glow-orange rounded-full -translate-x-1/3 translate-y-1/3 mix-blend-multiply" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600 mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span>Agência de Posicionamento Premium</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Transformamos negócios em <span className="text-brand-blue">marcas</span> <span className="text-brand-orange">fortes.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Posicionamento, estratégia e inteligência criativa para empresas que desejam crescer e se destacar.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="group flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-blue text-white px-8 py-4 rounded-full text-base font-medium transition-colors duration-300 hover:shadow-xl hover:shadow-brand-blue/30 shadow-lg shadow-brand-orange/20">
                Falar no WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#diferenciais" className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-brand-blue/30 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full text-base font-medium transition-all duration-300">
                Conhecer a agência
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="relative hidden lg:block h-[600px] w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img src="/topo.png" alt="Agência Raon" className="w-full h-auto object-contain max-h-[600px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
