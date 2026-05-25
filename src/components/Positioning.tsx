import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from './FadeIn';

const points = [
  "Autoridade visual",
  "Presença digital",
  "Estratégia de marca",
  "Crescimento digital",
  "Diferenciação no mercado",
  "Percepção de valor"
];

export function Positioning() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background soft grid */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
                Marcas fortes são <span className="text-brand-orange">lembradas.</span>
              </h2>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.1}>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Acreditamos que empresas bem posicionadas transmitem mais confiança, autoridade e valor. Nosso objetivo é transformar a presença digital da sua empresa em uma experiência moderna, profissional e impactante.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4">
                {points.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 transition-all hover:border-brand-blue/30 hover:bg-white hover:shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    <span className="font-medium text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="relative h-[500px] w-full hidden lg:block">
            <FadeIn direction="left" delay={0.3} className="h-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <img src="/marcas.png" alt="Marcas fortes são lembradas" className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl" />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
