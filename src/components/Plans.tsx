import { CheckCircle2, Rocket, Zap, Crown } from 'lucide-react';
import { FadeIn } from './FadeIn';

const plans = [
  {
    icon: Rocket,
    tag: "START BRONZE",
    title: "Início Profissional",
    description: "Ideal para quem deseja iniciar no digital com profissionalismo.",
    features: [
      "Gestão básica do Instagram",
      "Artes promocionais",
      "Stories estratégicos",
      "Planejamento de conteúdo",
      "Suporte online"
    ],
    footer: "Presença digital para começar a crescer.",
    popular: false,
    color: "blue"
  },
  {
    icon: Zap,
    tag: "PRATA PLUS",
    title: "Crescimento Acelerado",
    description: "Para empresas que desejam crescer e fortalecer sua marca.",
    features: [
      "Branding & Posicionamento",
      "Reels estratégicos",
      "Gestão de redes sociais",
      "Tráfego pago básico",
      "Consultoria estratégica",
      "Relatórios de desempenho"
    ],
    footer: "Mais autoridade, alcance e presença digital.",
    popular: false,
    color: "orange"
  },
  {
    icon: Crown,
    tag: "GOLD ESSENCIAL",
    title: "Domínio Digital",
    description: "A solução completa para empresas que desejam dominar o digital.",
    features: [
      "Branding premium",
      "IA aplicada ao marketing",
      "Gestão completa das redes",
      "Site ou Landing Page",
      "Gestão de tráfego pago",
      "Estratégia avançada"
    ],
    footer: "Transforme sua empresa em uma marca forte.",
    popular: true,
    color: "gradient"
  }
];

export function Plans() {
  return (
    <section id="planos" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/20 blur-[120px] rounded-[100%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Planos Estratégicos
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-slate-400">
              Soluções sob medida para o momento exato do seu negócio.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={0.1 + (index * 0.1)}>
              <div 
                className={`relative rounded-3xl p-8 bg-white/5 backdrop-blur-xl border flex flex-col h-full
                  ${plan.popular 
                    ? 'border-brand-orange/50 shadow-2xl shadow-brand-orange/20 scale-105 lg:scale-110 z-10 bg-white/10' 
                    : 'border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors duration-300'}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="bg-gradient-to-r from-brand-orange to-brand-orange-light text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                      Mais Escolhido
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-brand-orange' : 'text-brand-blue'}`} />
                    <span className={`text-xs font-bold tracking-wider uppercase ${plan.popular ? 'text-brand-orange' : 'text-brand-blue-light'}`}>
                      {plan.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-slate-400 text-sm">{plan.description}</p>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-brand-orange' : 'text-brand-blue'}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="text-center font-medium text-white/90 italic mb-6">"{plan.footer}"</p>
                  <a href="#contato" className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300
                    ${plan.popular 
                      ? 'bg-gradient-to-r from-brand-orange to-brand-orange-light text-white hover:shadow-lg hover:shadow-brand-orange/30' 
                      : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    Solicitar Proposta
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
