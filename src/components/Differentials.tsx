import { Target, Zap, Cpu, Clock, TrendingUp, Lightbulb, Users, BarChart3 } from 'lucide-react';
import { FadeIn } from './FadeIn';

const features = [
  {
    icon: Target,
    title: "Experiência Especializada",
    description: "Mais de 5 anos ajudando empresas a crescer no digital.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: Lightbulb,
    title: "Estratégias Personalizadas",
    description: "Cada empresa possui necessidades únicas.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: Cpu,
    title: "Tecnologias Avançadas",
    description: "IA, automação e ferramentas modernas.",
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    icon: Clock,
    title: "Economia de Tempo e Recursos",
    description: "Sua empresa ganha produtividade.",
    color: "text-emerald-500",
    bg: "bg-emerald-100",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Sustentável",
    description: "Estratégias focadas em crescimento contínuo.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: Zap,
    title: "Foco em Inovação",
    description: "Atualização constante nas tendências digitais.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: Users,
    title: "Suporte Profissional",
    description: "Atendimento próximo e estratégico.",
    color: "text-indigo-500",
    bg: "bg-indigo-100",
  },
  {
    icon: BarChart3,
    title: "Dados e Métricas",
    description: "Acompanhamento inteligente de resultados.",
    color: "text-rose-500",
    bg: "bg-rose-100",
  }
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Por que escolher a <span className="text-brand-blue">Agência Raon?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-slate-600">
              Nosso compromisso é entregar resultados consistentes através de uma metodologia baseada em inovação e inteligência de mercado.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={0.1 + (index * 0.05)}>
              <div className="group bg-slate-50 border border-slate-100 hover:border-slate-300 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-black/[0.02] rounded-bl-full -z-10 transition-all duration-500 group-hover:scale-150" />
                
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.bg}`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
