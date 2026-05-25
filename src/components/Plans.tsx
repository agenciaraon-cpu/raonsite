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
    colorClass: "text-[#CD7F32]",
    borderClass: "border-white/10 hover:border-[#CD7F32]/50",
    shadowClass: "hover:shadow-[0_0_30px_rgba(205,127,50,0.2)] transition-all duration-300",
    scaleClass: "",
    bgClass: "bg-white/5 hover:bg-white/10",
    buttonClass: "bg-white/10 text-white hover:bg-white/20"
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
    colorClass: "text-[#C0C0C0]",
    borderClass: "border-[#C0C0C0]/50",
    shadowClass: "shadow-[0_0_30px_rgba(192,192,192,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,192,192,0.5)]",
    scaleClass: "lg:scale-105 z-10",
    bgClass: "bg-white/5",
    buttonClass: "bg-white/10 text-white hover:bg-white/20"
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
    colorClass: "text-[#FFD700]",
    borderClass: "border-[#FFD700]/60",
    shadowClass: "shadow-[0_0_40px_rgba(255,215,0,0.4)]",
    scaleClass: "scale-105 lg:scale-110 z-20",
    bgClass: "bg-white/10",
    buttonClass: "bg-gradient-to-r from-[#FFD700] to-[#DAA520] text-slate-900 hover:shadow-lg hover:shadow-[#FFD700]/40"
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
              Escolha o melhor plano
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-slate-400">
              Soluções sob medida para o momento exato do seu negócio.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center mt-12">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={0.1 + (index * 0.1)}>
              <div 
                className={`relative rounded-3xl p-8 backdrop-blur-xl border flex flex-col h-full
                  ${plan.borderClass} ${plan.shadowClass} ${plan.scaleClass} ${plan.bgClass}`}
              >
                {/* Crown Image for Gold Plan */}
                {plan.popular && (
                  <img 
                    src="/coroa.png" 
                    alt="Crown" 
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] z-30"
                  />
                )}

                <div className="mb-8 mt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <plan.icon className={`w-6 h-6 ${plan.colorClass}`} />
                    <span className={`text-xs font-bold tracking-wider uppercase ${plan.colorClass}`}>
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
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.colorClass}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="text-center font-medium text-white/90 italic mb-6">"{plan.footer}"</p>
                  <a href="#contato" className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 ${plan.buttonClass}`}>
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
