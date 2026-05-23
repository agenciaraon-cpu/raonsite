import { ArrowRight, Sparkles, TrendingUp, BarChart } from 'lucide-react';
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
              Transformamos negócios em <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light">marcas fortes.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Posicionamento, estratégia e inteligência criativa para empresas que desejam crescer e se destacar.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-blue-light hover:opacity-90 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/30 shadow-lg shadow-brand-blue/20">
                Falar no WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#diferenciais" className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-brand-blue/30 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full text-base font-medium transition-all duration-300">
                Conhecer a agência
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Abstract Isometric/Glassmorphism Composition */}
        <div className="relative hidden lg:block h-[600px] w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Soft transparent layered cards */}
            <div className="relative w-full max-w-md aspect-square">
              {/* Back card */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-light/20 to-transparent rounded-3xl rotate-6 blur-md"></div>
              
              {/* Floating metrics card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-2xl shadow-slate-200/50 border border-white/50 flex flex-col gap-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Crescimento</p>
                    <p className="text-lg font-bold text-slate-900">+340%</p>
                  </div>
                </div>
              </motion.div>

              {/* Main glass card */}
              <div className="absolute inset-4 bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-brand-blue/10 border border-white flex flex-col items-center justify-center p-8 overflow-hidden z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl" />
                
                <div className="relative z-10 w-full">
                  <div className="h-4 w-1/3 bg-slate-200 rounded-full mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-slate-100 rounded-full"></div>
                    <div className="h-2 w-4/6 bg-slate-100 rounded-full"></div>
                  </div>
                  
                  <div className="mt-8 flex gap-4">
                    <div className="flex-1 h-32 rounded-xl bg-gradient-to-tr from-brand-blue/10 to-transparent border border-brand-blue/20"></div>
                    <div className="w-1/3 h-32 rounded-xl bg-gradient-to-tr from-brand-orange/10 to-transparent border border-brand-orange/20"></div>
                  </div>
                </div>
              </div>

              {/* Floating element 2 */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-10 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl shadow-brand-orange/10 border border-white/50 z-20"
              >
                <BarChart className="w-8 h-8 text-brand-orange mb-2" />
                <p className="text-sm font-bold text-slate-900">Métricas Reais</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
