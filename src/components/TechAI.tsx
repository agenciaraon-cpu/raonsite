import { Sparkles, BrainCircuit, Bot, LineChart, Cpu } from 'lucide-react';
import { FadeIn } from './FadeIn';

const techCards = [
  { icon: Bot, title: "IA Criativa", desc: "Geração de conteúdo otimizado e visual." },
  { icon: Cpu, title: "Automação Inteligente", desc: "Processos escaláveis e sem gargalos." },
  { icon: BrainCircuit, title: "Estratégia Digital", desc: "Análise de mercado orientada a dados." },
  { icon: Sparkles, title: "Conteúdo Inteligente", desc: "Comunicação assertiva e persuasiva." },
  { icon: LineChart, title: "Performance Visual", desc: "Design focado em conversão e retenção." },
];

export function TechAI() {
  return (
    <section id="tecnologia" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          <div className="lg:w-1/3">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
                Marketing moderno exige <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-blue to-purple-600">inteligência.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-slate-600 leading-relaxed">
                A Agência Raon utiliza inteligência artificial, automação e estratégias digitais modernas para acelerar resultados e criar campanhas impactantes que conectam de verdade com seu público.
              </p>
            </FadeIn>
          </div>

          <div className="lg:w-2/3">
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {techCards.map((card, index) => (
                <FadeIn key={index} delay={0.1 * index} className={index === techCards.length - 1 ? 'sm:col-span-2 sm:w-1/2 mx-auto lg:w-full lg:col-span-1' : ''}>
                  <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-blue/10 hover:border-brand-blue/20 transition-all duration-300 h-full relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-bl from-brand-blue/5 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 relative z-10">
                      <card.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 relative z-10">{card.title}</h3>
                    <p className="text-sm text-slate-500 relative z-10">{card.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
