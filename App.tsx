
import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  X, 
  Target, 
  BarChart3, 
  ChevronRight, 
  LineChart, 
  Briefcase, 
  Cpu, 
  Star,
  Info, 
  ChevronDown,
  Check,
  AlertCircle
} from 'lucide-react';

const WHATS_NUMBER = "5561991669190";
const WHATS_MESSAGE = encodeURIComponent("Olá! Gostaria de agendar o meu Diagnóstico Estratégico.");

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.97L0 24l6.335-1.662c1.747.953 3.715 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LocalLogo = ({ className = "h-12" }: { className?: string }) => (
  <img 
    src="https://i.imgur.com/9YZOyhA.png" 
    alt="Protocolo Odonto Logo" 
    className={`${className} object-contain transition-transform duration-500`}
  />
);

const SectionHeading = ({ title, subtitle, centered = false, lightText = false }: { title: string, subtitle: string, centered?: boolean, lightText?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`mb-12 md:mb-20 reveal ${centered ? 'text-center' : 'text-left'}`}>
      <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">{subtitle}</span>
      <h2 className={`text-3xl md:text-5xl lg:text-6xl font-cinzel font-black leading-tight tracking-tight ${lightText ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    </div>
  );
};

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0 reveal">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-8 flex justify-between items-center text-left group"
      >
        <h4 className="text-base md:text-lg font-bold text-slate-800 group-hover:text-gold transition-colors pr-8">{question}</h4>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : 'text-slate-300'}`}>
          <ChevronDown size={24} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-8' : 'max-h-0'}`}>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base">{answer}</p>
      </div>
    </div>
  );
};

const DiagnosticModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md transition-all">
      <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-[30px] shadow-2xl relative overflow-hidden">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 transition-colors"><X size={24}/></button>
        <div className="text-center mb-8">
          <span className="text-[10px] font-black text-gold uppercase tracking-widest mb-4 block">Próximo Passo</span>
          <h3 className="text-2xl md:text-4xl font-cinzel font-black text-slate-900 mb-4">Agendar Diagnóstico</h3>
          <p className="text-slate-500 text-sm md:text-base">Nesta reunião de 30-45 min, vamos mapear seus gargalos e traçar o caminho mais curto para a escala premium.</p>
        </div>
        <div className="space-y-4">
          <a 
            href={`https://wa.me/${WHATS_NUMBER}?text=${WHATS_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gold transition-all shadow-xl shadow-slate-200"
          >
            <WhatsAppIcon className="w-6 h-6" /> AGENDAR VIA WHATSAPP
          </a>
          <p className="text-center text-[10px] text-slate-400 uppercase font-bold tracking-widest">Sem compromisso • Direto ao ponto</p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['gargalo', 'solucao', 'pilares', 'diagnostico', 'etica', 'faq'];
      const scrollPos = window.scrollY + 120;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveAnchor(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const menuItems = [
    { label: 'O Gargalo', id: 'gargalo' },
    { label: 'O Protocolo', id: 'solucao' },
    { label: 'Os 3 Pilares', id: 'pilares' },
    { label: 'O Diagnóstico', id: 'diagnostico' },
    { label: 'Segurança & Ética', id: 'etica' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <div className="relative min-h-screen bg-white selection:bg-gold selection:text-white font-['Plus_Jakarta_Sans']">
      <DiagnosticModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Nav Superior Solto e Elegante com Transparência e Espaçamento Corrigido */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-[200] transition-all duration-500 flex items-center justify-between rounded-full glass-nav shadow-[0_30px_90px_-15px_rgba(0,0,0,0.18)] gap-4 lg:gap-8 ${scrolled ? 'top-4 w-[90%] max-w-2xl px-8 md:px-12 py-3.5 bg-white/70' : 'top-6 md:top-8 w-[95%] max-w-7xl px-8 md:px-14 py-4 bg-white/40'}`}>
        <div className="flex items-center gap-4 cursor-pointer flex-shrink-0" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <LocalLogo className={`transition-all duration-500 ${scrolled ? 'h-8 md:h-10' : 'h-7 md:h-9'}`} />
          <span className={`font-cinzel font-black tracking-widest text-slate-900 uppercase transition-all duration-500 ${scrolled ? 'text-[11px] md:text-[12px]' : 'text-[10px]'}`}>Protocolo Odonto</span>
        </div>
        
        {/* Menu Âncora Desktop que desaparece no scroll conforme solicitado */}
        <div className={`hidden lg:flex items-center gap-6 xl:gap-10 overflow-hidden transition-all duration-500 ${scrolled ? 'opacity-0 invisible max-w-0 mx-0' : 'opacity-100 visible max-w-[1000px]'}`}>
          {menuItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)}
              className={`text-[9px] font-bold uppercase tracking-widest transition-colors hover:text-gold whitespace-nowrap ${activeAnchor === item.id ? 'text-gold' : 'text-slate-400'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button onClick={() => setIsModalOpen(true)} className={`bg-slate-900 text-white rounded-full font-bold uppercase tracking-widest transition-all hover:bg-gold shadow-lg shadow-slate-100 whitespace-nowrap flex-shrink-0 ${scrolled ? 'px-8 py-3.5 text-[10px] md:text-[11px]' : 'px-6 py-2.5 text-[9px]'}`}>
          Agendar Diagnóstico
        </button>
      </nav>

      {/* HERO SECTION - Ajuste de pt para compensar header */}
      <section className="relative min-h-screen flex items-center pt-40 md:pt-48 pb-20 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square bg-gold/[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 lg:gap-24 items-center">
            <div className="reveal order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/10 bg-gold/[0.03] text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-sm">
                <Star size={14} fill="currentColor"/> Referência em Aquisição High-Ticket • Protocolo Ético
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-cinzel font-black leading-[1.05] text-slate-900 mb-10 tracking-tight">
                A ciência por trás das <br className="hidden md:block" /> <span className="gold-gradient">agendas de elite.</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-12 font-medium">
                O Protocolo Odonto é uma <strong className="text-slate-800">Engenharia de Aquisição Ética</strong> que transforma tráfego em agendamentos qualificados e lucro real — com processo, rastreabilidade e segurança reputacional.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-14">
                {[
                  { t: "Filtro de intenção", d: "Repelimos curiosos, atraímos pacientes certos." },
                  { t: "Conversão profissional", d: "Roteiros e confirmação que aumentam comparecimento." },
                  { t: "Dados puros", d: "Rastreamento e leitura de ROI por etapa." },
                  { t: "Posicionamento premium", d: "Sem mercantilização e sem risco reputacional." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight mb-1">{item.t}</h4>
                      <p className="text-xs md:text-sm text-slate-400 leading-snug">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <a 
                  href={`https://wa.me/${WHATS_NUMBER}?text=${WHATS_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-900 text-white px-10 md:px-14 py-6 md:py-7 rounded-full font-black text-lg md:text-xl flex items-center justify-center gap-4 group transition-all hover:bg-gold active:scale-95 shadow-2xl shadow-slate-200"
                >
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" /> Agendar Diagnóstico Estratégico <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
                <a 
                  href={`https://wa.me/${WHATS_NUMBER}?text=${WHATS_MESSAGE}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 font-bold hover:text-gold transition-colors flex items-center gap-2 group text-sm md:text-base"
                >
                   <WhatsAppIcon className="w-5 h-5 text-[#25D366]" /> Tirar dúvidas no WhatsApp
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 items-center opacity-40">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">30–45 min</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Sem compromisso</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Próximos passos claros</span>
              </div>
            </div>

            <div className="reveal relative order-1 lg:order-2">
              <div className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border-[10px] border-white ring-1 ring-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full aspect-[4/5] object-cover grayscale-[0.1]" 
                  alt="Clínica Odontológica de Elite"
                />
              </div>
              <div className="absolute -bottom-8 -left-10 bg-white p-8 rounded-[30px] shadow-2xl border border-slate-50 reveal hidden sm:block">
                <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-2">Protocolo Ético & Seguro</p>
                <p className="text-slate-900 font-cinzel font-black text-3xl">LTV+ ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO — O ABISMO DO MARKETING AMADOR */}
      <section id="gargalo" className="py-24 md:py-40 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="O ABISMO DO MARKETING AMADOR" 
            title="Sua clínica está preparada para o próximo nível?" 
            centered 
          />
          
          <div className="grid md:grid-cols-12 gap-4 md:gap-8 md:auto-rows-[340px]">
            <div className="md:col-span-8 bento-card p-8 md:p-12 rounded-[30px] md:rounded-[60px] flex flex-col justify-between reveal">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-100 rounded-2xl md:rounded-3xl flex items-center justify-center text-gold shadow-inner mb-6 md:mb-0"><Target size={24} className="md:w-8 md:h-8"/></div>
              <div>
                <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-slate-900 mb-3 md:mb-4">Leads Qualificados vs. Curiosos</h3>
                <p className="text-sm md:text-base text-slate-500 max-w-lg leading-relaxed">Marketing de esperança atrai pessoas que buscam apenas o menor preço. Nosso protocolo filtra o lead pela <strong>Intenção de Compra</strong> e poder aquisitivo.</p>
              </div>
            </div>
            
            <div className="md:col-span-4 bento-card p-8 md:p-12 rounded-[30px] md:rounded-[60px] flex flex-col justify-between bg-slate-900 text-white reveal">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center text-gold mb-6 md:mb-0"><Zap size={24} className="md:w-8 md:h-8"/></div>
              <div>
                <h3 className="text-2xl md:text-3xl font-cinzel font-bold mb-3 md:mb-4">O Gargalo Comercial</h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">Sua recepção sabe transformar uma dúvida em consulta? Entregamos roteiros validados que blindam o processo de agendamento.</p>
              </div>
            </div>

            <div className="md:col-span-4 bento-card p-8 md:p-12 rounded-[30px] md:rounded-[60px] flex flex-col justify-between border-slate-100 reveal bg-white">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-2xl md:rounded-3xl flex items-center justify-center text-slate-900 shadow-sm mb-6 md:mb-0"><LineChart size={24} className="md:w-8 md:h-8"/></div>
              <div>
                <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-slate-900 mb-3 md:mb-4">Métricas que Importam</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">Cliques não pagam contas. Monitoramos o ROI real e o LTV para garantir a saúde financeira do seu investimento.</p>
              </div>
            </div>

            <div className="md:col-span-8 bento-card p-8 md:p-12 rounded-[30px] md:rounded-[60px] flex flex-col justify-between bg-white reveal">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/5 rounded-2xl md:rounded-3xl flex items-center justify-center text-gold mb-6 md:mb-0"><ShieldCheck size={24} className="md:w-8 md:h-8"/></div>
              <div>
                <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-slate-900 mb-3 md:mb-4">Autoridade & Segurança</h3>
                <p className="text-sm md:text-base text-slate-500 max-w-lg leading-relaxed">Construímos marcas odontológicas percebidas como premium. Marketing institucional de alto nível que justifica seu preço.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO — O GARGALO INVISÍVEL (PÓS-ABISMO) */}
      <section className="py-24 md:py-40 bg-white px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="O GARGALO INVISÍVEL" 
            title="Por que investir em tráfego sem um protocolo é queimar dinheiro?" 
            centered 
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Volume sem valor", d: "Sua equipe perde tempo atendendo “curiosos” que só perguntam preço e nunca agendam." },
              { t: "O risco ético", d: "Anúncios amadores elevam o risco reputacional e podem gerar problemas desnecessários." },
              { t: "Escala cega", d: "Você gasta mais em anúncios, mas o faturamento não sobe na mesma proporção — porque o funil está vazando." }
            ].map((card, i) => (
              <div key={i} className="bg-slate-50 p-10 md:p-14 rounded-[40px] border border-slate-100 reveal group">
                <h3 className="text-xl md:text-2xl font-cinzel font-bold text-slate-900 mb-6 group-hover:text-gold transition-colors">{card.t}</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center reveal">
            <p className="text-lg md:text-xl text-slate-400 font-medium mb-10 max-w-3xl mx-auto italic">
              "Tráfego sem engenharia vira ruído. Protocolo transforma investimento em previsibilidade."
            </p>
          </div>

          <div className="mt-16 text-center reveal">
            <a 
              href={`https://wa.me/${WHATS_NUMBER}?text=${WHATS_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-slate-900 text-white px-10 py-6 rounded-full font-black text-sm md:text-base hover:bg-gold transition-all shadow-2xl shadow-slate-200 uppercase tracking-widest group"
            >
              <WhatsAppIcon className="w-6 h-6 text-[#25D366]" /> Quero identificar meu gargalo (Diagnóstico) <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO — O MÉTODO / 3 PILARES */}
      <section id="solucao" className="py-24 md:py-48 bg-slate-900 text-white px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 right-10"><Cpu size={400} /></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            subtitle="O MÉTODO" 
            title="Protocolo Odonto: os 3 pilares da conversão premium" 
            lightText
          />
          
          <div id="pilares" className="grid lg:grid-cols-3 gap-10 mt-16">
            {[
              { 
                tag: "01", 
                t: "Filtro de Qualificação Ativo", 
                d: "Criativos e campanhas desenhados para atrair pacientes que valorizam saúde, técnica e confiança — e afastar o público que só busca preço." 
              },
              { 
                tag: "02", 
                t: "Roteiro de Fechamento Magnético", 
                d: "Estruturamos e treinamos a recepção com scripts validados que transformam mensagens em consultas, com condução profissional e confirmação." 
              },
              { 
                tag: "03", 
                t: "Engenharia de Dados Puros", 
                d: "Rastreamento total do investimento e leitura do ROI por etapa para otimizar com clareza, sem achismo." 
              }
            ].map((pilar, i) => (
              <div key={i} className="bg-white/5 p-10 md:p-14 rounded-[40px] border border-white/10 reveal group hover:bg-white/10 transition-all">
                <span className="text-gold font-black text-4xl mb-8 block opacity-30">{pilar.tag}</span>
                <h3 className="text-2xl font-cinzel font-bold mb-6">{pilar.t}</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">{pilar.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-white/5 rounded-[40px] border border-gold/20 text-center reveal">
            <p className="text-gold font-black text-xs uppercase tracking-[0.4em] mb-4">Destaque</p>
            <h3 className="text-2xl md:text-4xl font-cinzel font-black mb-12">Engenharia Ética — focada em LTV e lucro real.</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Menos curiosos, mais pacientes compatíveis",
                "Condução e confirmação profissional",
                "Decisões por dados: ROI por etapa",
                "Crescimento com prestígio"
              ].map((text, i) => (
                <div key={i} className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                  <Check size={14} className="text-gold" /> {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO — DIAGNÓSTICO ESTRATÉGICO */}
      <section id="diagnostico" className="py-24 md:py-48 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-20 items-center">
            <div className="reveal">
              <SectionHeading 
                subtitle="DIAGNÓSTICO ESTRATÉGICO" 
                title="O primeiro passo para a escala segura" 
              />
              <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed">
                Uma análise objetiva de viabilidade e gargalos do seu funil — da atração ao agendamento. Você sai com clareza do que ajustar primeiro e do que evitar para não desperdiçar verba, tempo e reputação.
              </p>
              
              <div className="space-y-6">
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6">O que analisamos:</p>
                {[
                  "Onde está o gargalo: aquisição, qualificação ou capacidade",
                  "Oferta e mensagem para atrair o paciente certo",
                  "Rotina de conversão e confirmação (sem improviso)",
                  "Estrutura de mensuração (ROI por etapa)"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all"><Check size={14}/></div>
                    <span className="text-slate-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-16 items-center">
                <a 
                  href={`https://wa.me/${WHATS_NUMBER}?text=${WHATS_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-900 text-white px-10 py-6 rounded-full font-black text-lg flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-xl shadow-slate-200"
                >
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" /> Abrir Diagnóstico Agora
                </a>
                <a 
                  href={`https://wa.me/${WHATS_NUMBER}?text=${WHATS_MESSAGE}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 font-bold hover:text-gold transition-colors flex items-center gap-2 text-sm"
                >
                   <WhatsAppIcon className="w-5 h-5 text-[#25D366]" /> Tirar dúvidas no WhatsApp
                </a>
              </div>
              <p className="mt-6 text-[10px] font-bold text-slate-300 uppercase tracking-widest">30–45 min • Sem compromisso • Direto ao ponto</p>
            </div>

            <div className="reveal hidden lg:block">
              <div className="bg-slate-50 p-16 rounded-[60px] border border-slate-100 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-gold/10"><BarChart3 size={120} /></div>
                <Info size={40} className="text-gold mx-auto mb-8" />
                <h4 className="text-2xl font-cinzel font-bold text-slate-900 mb-6">Análise Técnica</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">Validamos se a sua região e especialidade comportam a implementação do protocolo antes de qualquer compromisso comercial.</p>
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gold w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO — SEGURANÇA JURÍDICA E REPUTACIONAL */}
      <section id="etica" className="py-24 md:py-48 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="SEGURANÇA JURÍDICA E REPUTACIONAL" 
            title="Sua reputação é o seu maior ativo." 
            centered 
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white p-12 md:p-16 rounded-[50px] border border-slate-100 reveal">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-red-50 text-red-400 rounded-full flex items-center justify-center"><X size={20}/></div>
                <h4 className="text-xl font-cinzel font-bold text-slate-900">O erro comum</h4>
              </div>
              <ul className="space-y-6">
                {[
                  "Mostrar “Antes e Depois” sensacionalistas",
                  "Divulgar preços e parcelamentos em anúncios",
                  "Promessas de “100% de garantia”",
                  "Abordagem agressiva e mercantilista"
                ].map((item, i) => (
                  <li key={i} className="text-slate-400 text-sm flex gap-3"><span className="text-red-300">•</span> {item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-900 p-12 md:p-16 rounded-[50px] text-white reveal relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] w-60 h-60 bg-gold/5 blur-3xl rounded-full"></div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-gold/20 text-gold rounded-full flex items-center justify-center"><Check size={20}/></div>
                <h4 className="text-xl font-cinzel font-bold text-white">O nosso padrão</h4>
              </div>
              <ul className="space-y-6">
                {[
                  "Conteúdo educativo e institucional",
                  "Valorização da especialidade e do CRO",
                  "Filtro por autoridade e prestígio clínico",
                  "Abordagem conservadora e de alto padrão"
                ].map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm flex gap-3"><span className="text-gold">•</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-20 text-center reveal">
            <p className="text-slate-900 font-cinzel font-bold text-xl md:text-2xl">Crescer com autoridade é crescer com segurança.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO — FAQ */}
      <section id="faq" className="py-24 md:py-48 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading subtitle="FAQ" title="Dúvidas Frequentes" centered />
          <div className="mt-12">
            {[
              { q: "Isso funciona para qualquer especialidade?", a: "Sim. O Protocolo é adaptado para Implantes, Harmonização, Ortodontia ou Clínica Geral, respeitando as particularidades de cada ticket médio." },
              { q: "Preciso ter uma equipe de vendas?", a: "Não. Nós estruturamos o processo para que sua secretária consiga realizar o agendamento de forma profissional e persuasiva." },
              { q: "Em quanto tempo vejo os primeiros pacientes?", a: "A fase de implementação dura 7 dias. Geralmente, as primeiras consultas qualificadas surgem a partir da segunda semana." },
              { q: "Vocês prometem resultado?", a: "Não trabalhamos com promessas absolutas. Trabalhamos com processo, masuração e otimização para aumentar previsibilidade e qualidade de agendamentos." },
              { q: "O Protocolo inclui anúncios?", a: "Estruturamos toda a engenharia de aquisição e conversão. O escopo exato de gerenciamento é definido após o diagnóstico, conforme seu cenário." },
              { q: "Como evitam curiosos e guerra de preço?", a: "Porque usamos Filtro de Qualificação Ativo: atraímos o paciente certo já no anúncio, reforçamos com mensagem institucional premium e validamos intenção no WhatsApp com uma triagem leve, assim você recebe menos curiosos e mais agendamentos qualificados." },
              { q: "E se eu já tiver tráfego rodando?", a: "Ótimo. Ajustamos o que está vazando no funil e estruturamos a mensuração por etapa para você escalar com controle total." },
              { q: "Vou precisar trocar minha secretária/equipe?", a: "Na maioria dos casos, não. O que muda é o processo: roteiro, confirmação, follow-up e a padronização do atendimento." },
              { q: "Preciso aparecer em vídeos?", a: "Não é obrigatório. Priorizamos a autoridade institucional. Se você optar por aparecer, terá direção e roteiros coerentes com o público premium." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-48 px-6 bg-slate-50 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.04)_0%,transparent_70%)]" />
        <div className="max-w-5xl mx-auto reveal relative z-10">
          <SectionHeading subtitle="PRÓXIMO PASSO" title="Sua clínica está pronta para a escala de elite?" centered />
          
          <p className="text-xl md:text-2xl text-slate-500 mb-16 italic leading-relaxed max-w-4xl mx-auto font-medium">
            "O amadorismo digital é um dos maiores ralos de lucro do mercado odontológico. Recupere o controle da sua agenda com processo, conversão e dados."
          </p>
          
          <a 
            href={`https://wa.me/${WHATS_NUMBER}?text=${WHATS_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-slate-900 text-white px-12 md:px-20 py-7 md:py-8 rounded-full font-black text-xl md:text-2xl flex items-center justify-center gap-6 mx-auto group shadow-2xl transition-all hover:bg-gold hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-7 h-7 text-[#25D366]" /> Solicitar Diagnóstico Agora <ArrowRight className="group-hover:translate-x-4 transition-transform" />
          </a>
          
          <p className="text-[11px] font-black text-slate-300 uppercase tracking-widest mt-12">Sem compromisso • Diagnóstico estratégico • Vagas limitadas por região</p>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="py-16 md:py-24 border-t border-slate-100 bg-white px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <LocalLogo className="h-10 md:h-12" />
            <span className="font-cinzel font-black tracking-widest text-xs md:text-base text-slate-900 uppercase">Protocolo Odonto</span>
          </div>

          <div className="flex gap-14 items-center">
             <span className="text-[10px] md:text-xs font-black text-slate-300 tracking-[0.3em] uppercase">Privacidade</span>
             <span className="text-[10px] md:text-xs font-black text-slate-300 tracking-[0.3em] uppercase">Termos</span>
          </div>

          <div className="text-[10px] font-black text-slate-200 tracking-[0.4em] uppercase text-center lg:text-right leading-loose">
            © 2026 PROTOCOLO ODONTO <br/> 
            <span className="text-gold/40">AUTORIDADE & PERFORMANCE CLÍNICA</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href={`https://wa.me/${WHATS_NUMBER}?text=${WHATS_MESSAGE}`} 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[300] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-white flex items-center justify-center text-[10px] font-bold text-white">1</div>
      </a>
    </div>
  );
}
