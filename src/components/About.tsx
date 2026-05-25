import { ArrowRight, Lightbulb, Hexagon, Component } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <FadeIn direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <img src="/5anos.png" alt="5 Anos transformando marcas" className="w-full h-auto object-cover max-h-[500px]" />
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
