import { Instagram, Send, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Raon<span className="text-brand-blue">.</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Transformando negócios em marcas fortes. Posicionamento, estratégia e inteligência criativa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#sobre" className="text-slate-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#diferenciais" className="text-slate-400 hover:text-white transition-colors">Nossos Diferenciais</a></li>
              <li><a href="#planos" className="text-slate-400 hover:text-white transition-colors">Planos Estratégicos</a></li>
              <li><a href="#tecnologia" className="text-slate-400 hover:text-white transition-colors">Tecnologia e IA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="text-slate-400">@raonagenciadigital</li>
              <li className="text-slate-400">olá@agenciaraon.com.br</li>
            </ul>
            <div className="mt-6">
              <a href="#contato" className="inline-flex py-2 px-4 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                Falar com consultor
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Agência Raon. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
