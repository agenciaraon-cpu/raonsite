import { ArrowRight, Lightbulb, Hexagon, Component } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <FadeIn direction="right">
              {/* Visual Composition */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 border border-slate-200/60 p-8 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-3xl rounded-full" />
                
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center relative z-10">
                  <Hexagon className="w-7 h-7 text-brand-blue" />
                </div>
                
                <div className="relative z-10 mt-auto">
                  <h3 className="text-3xl font-display font-bold text-slate-900 mb-2">5+ Anos</h3>
                  <p className="text-slate-600 font-medium">transformando marcas no digital</p>
                </div>
                
                <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center backdrop-blur-md">
                  <Component className="w-6 h-6 text-brand-orange" />
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
                Mais do que marketing. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">Criamos percepção de valor.</span>
              </h2>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.1}>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Somos a Raon, uma agência criativa e estratégica que há mais de 5 anos vem ajudando empresas a crescer, se posicionar e conquistar autoridade no digital.
                </p>
                <p>
                  Mais do que criar artes, desenvolvemos presença digital, posicionamento e estratégias modernas para empresas que desejam se destacar no mercado atual.
                </p>
                <p>
                  Unimos criatividade, branding, inteligência artificial e tecnologia para criar campanhas impactantes, fortalecer marcas e gerar resultados reais.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-brand-orange" />
                    <h4 className="font-bold text-slate-900">Inteligência Estratégica</h4>
                  </div>
                  <p className="text-sm text-slate-500">Decisões baseadas em dados e branding.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Component className="w-5 h-5 text-brand-blue" />
                    <h4 className="font-bold text-slate-900">Design Premium</h4>
                  </div>
                  <p className="text-sm text-slate-500">Estética que transmite alto valor percebido.</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
