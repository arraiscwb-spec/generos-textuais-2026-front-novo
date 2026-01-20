import { motion } from "framer-motion";
import { 
  Check, 
  Download, 
  FileText, 
  FolderOpen, 
  ShieldCheck, 
  Clock, 
  Moon, 
  Smile, 
  Infinity, 
  Mail, 
  Edit3, 
  Coffee,
  ChevronDown,
  Star
} from "lucide-react";

import { Section, SectionHeader } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER / HERO SECTION */}
      <header className="relative bg-gradient-to-b from-slate-50 to-white pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Atualizado para BNCC 2026</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 px-2"
            >
              Elimine o Bloqueio Criativo e <span className="text-gradient">Recupere seus Finais de Semana.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Pare de gastar horas no Pinterest. Tenha em mãos o maior banco de atividades de Gêneros Textuais, 100% editáveis e alinhadas à BNCC 2026.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-6"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-sm sm:max-w-md mx-auto relative px-4"
              >
                <img 
                  src="https://13xdigital.com.br/wp-content/uploads/2026/01/banner-headline-pack.png" 
                  alt="Preview do Pack de Atividades" 
                  className="rounded-2xl shadow-2xl border border-slate-200 w-full"
                />
              </motion.div>

              <CTAButton 
                href="https://pay.lowify.com.br/checkout?product_id=8UCyL6" 
                size="xl" 
                variant="accent"
                className="w-full sm:w-auto shadow-xl shadow-orange-500/20 text-lg sm:text-xl font-black uppercase tracking-tighter"
              >
                QUERO O ACESSO AGORA! (ÚLTIMAS VAGAS)
              </CTAButton>
              <span className="text-sm text-slate-500 font-medium flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Compra 100% segura e acesso imediato
              </span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* FEATURES GRID */}
      <Section background="purple" className="relative -mt-20 pt-32 pb-16 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Download}
            title="Acesso Imediato"
            description="Mais de 850 atividades prontas e editáveis disponíveis em segundos."
            delay={0}
          />
          <FeatureCard 
            icon={FileText}
            title="Banco Completo"
            description="Diversidade de gêneros textuais para você nunca ficar sem ideias."
            delay={0.1}
          />
          <FeatureCard 
            icon={FolderOpen}
            title="Organização"
            description="Tudo organizado por pastas. Simplifique seu arquivamento hoje."
            delay={0.2}
          />
          <FeatureCard 
            icon={Check}
            title="100% BNCC"
            description="Atividades totalmente alinhadas às diretrizes de 2026."
            delay={0.3}
          />
        </div>
      </Section>

      {/* "PARA QUEM É" SECTION */}
      <Section id="para-quem">
        <SectionHeader 
          title="Para quem é o Pack 2026?" 
          subtitle="Nosso material foi desenhado estrategicamente para resolver a vida de professoras que se identificam com as situações abaixo:"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "A Professora Exausta",
              desc: "Você ama ensinar, mas sente que sua vida pessoal está sendo engolida pelo planejamento de aulas, sobrando pouco tempo para relaxar.",
              color: "bg-red-50 text-red-600 border-red-100",
              emoji: "😫"
            },
            {
              title: "A Professora Exigente",
              desc: "Você não aceita qualquer atividade da internet. Você quer materiais bonitos, pedagógicos e 100% alinhados à BNCC para seus alunos.",
              color: "bg-purple-50 text-purple-600 border-purple-100",
              emoji: "💎"
            },
            {
              title: "A Professora Prática",
              desc: "Você quer resolver o planejamento da semana em minutos, apenas baixando, imprimindo e aplicando, sem dor de cabeça.",
              color: "bg-green-50 text-green-600 border-green-100",
              emoji: "🚀"
            }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border-2 ${card.color.split(' ')[2]} hover:shadow-lg transition-all duration-300 bg-white`}
            >
              <div className="text-4xl mb-4">{card.emoji}</div>
              <h3 className={`text-xl font-bold mb-3 ${card.color.split(' ')[1]}`}>{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Resumindo:</h3>
          <p className="text-lg text-slate-300 mb-8">Se você quer ensinar com excelência sem perder sua saúde mental, este Pack é para você.</p>
          <CTAButton href="https://pay.lowify.com.br/checkout?product_id=8UCyL6" variant="accent" size="lg" className="w-full sm:w-auto font-black uppercase tracking-tighter">
            QUERO MEU ACESSO COM DESCONTO AGORA!
          </CTAButton>
        </div>
      </Section>

      {/* ADICIONE SEU TOQUE */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Adicione seu toque pessoal em segundos.</h2>
            <p className="text-lg text-slate-600 mb-10">Sabemos que cada turma é única. Por isso, criamos o único material que se adapta à sua didática, e não o contrário.</p>
            
            <div className="space-y-8">
              {[
                { title: "Edição Total (Word)", desc: "Receba os arquivos abertos. Mude o cabeçalho, insira o logotipo da sua escola ou adapte as questões.", icon: Edit3 },
                { title: "Organização Inteligente", desc: "Nada de arquivos bagunçados. Tudo separado por pastas e gêneros textuais.", icon: FolderOpen },
                { title: "Material Sempre Vivo", desc: "Não é um pacote estático. Adicionamos novas atividades regularmente.", icon: Infinity },
                { title: "Segurança Pedagógica", desc: "Ganhe confiança no planejamento. Todas as atividades seguem rigorosamente a BNCC 2026.", icon: ShieldCheck }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-violet-500 rounded-3xl blur-2xl opacity-20" />
            <img 
              src="https://13xdigital.com.br/wp-content/uploads/2026/01/Exemplo-atividade-1-scaled.png" 
              alt="Exemplo de Atividade Editável" 
              className="relative rounded-2xl shadow-2xl border border-white/50 w-full transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </Section>

      {/* BENEFITS SECTION */}
      <Section>
        <SectionHeader 
          title="Muito mais que atividades..." 
          subtitle="Uma nova rotina para você. Veja como sua vida vai mudar a partir do momento em que você tiver esse material em mãos."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Poupe Tempo Real", desc: "Economize horas de pesquisa. O que levava o fim de semana, agora leva 15 minutos.", icon: Clock },
            { title: "Noites Tranquilas", desc: "Vá dormir domingo à noite sem aquela ansiedade de 'o que vou dar amanhã?'.", icon: Moon },
            { title: "Mente Mais Leve", desc: "Chegue em casa e seja apenas você, não a 'professora'. Desligue do trabalho.", icon: Smile },
            { title: "Acesso Vitalício", desc: "Sem mensalidades ou surpresas. Investimento único e o material é seu para sempre.", icon: Check }
          ].map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform group-hover:text-primary">
                <benefit.icon className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section background="purple">
        <SectionHeader title="Veja como é simples começar" centered />
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-primary/20 -z-10" />
            
            {[
              { step: "01", title: "Receba no E-mail", desc: "Assim que seu pagamento for confirmado, o acesso chega instantaneamente.", icon: Mail },
              { step: "02", title: "Baixe e Edite", desc: "Abra os arquivos em Word para personalizar ou use os PDFs prontos.", icon: Download },
              { step: "03", title: "Aplique e Relaxe", desc: "Pronto! Sua aula está preparada. Agora é só aproveitar seu tempo livre.", icon: Coffee }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center bg-white p-8 rounded-3xl shadow-lg border border-primary/10 relative z-10"
              >
                <div className="w-24 h-24 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg shadow-primary/30 border-4 border-white">
                  {step.icon ? <step.icon className="w-10 h-10" /> : step.step}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <CTAButton href="https://pay.lowify.com.br/checkout?product_id=8UCyL6" size="lg" variant="accent" className="w-full sm:w-auto font-black uppercase tracking-tighter">
              APROVEITAR ESSA OPORTUNIDADE ÚNICA!
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* PREVIEW GALLERY */}
      <Section>
        <SectionHeader 
          title="Espie o que vem dentro do Pack" 
          subtitle="Veja abaixo alguns exemplos reais das atividades que você vai receber, todas com alta qualidade."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 px-2">
          {[
            "https://i.ibb.co/3YBCn9yw/Exemplo-atividade-8.png",
            "https://i.ibb.co/TxV9RjZd/Exemplo-atividade-7.png",
            "https://i.ibb.co/DfBsfLTc/Exemplo-atividade-6.png"
          ].map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-slate-100"
            >
              <img 
                src={src} 
                alt={`Exemplo atividade ${idx + 1}`} 
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Narrativas e Contos", "Textos Instrucionais", "Comunicação Social", 
            "Jornalístico e Informativo", "Poemas e Rimas", "Linguagem Visual", 
            "Adivinhas", "Parlendas", "Entrevistas", "Anúncios", "Listas", "Diários"
          ].map((tag, idx) => (
            <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-medium text-sm border border-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </Section>

      {/* BONUS SECTION */}
      <Section background="purple">
        <SectionHeader title="Bônus Exclusivos!" subtitle="Se garantir sua vaga agora, você também leva gratuitamente:" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Kit Leitura e Interpretação",
              desc: "Potencialize o aprendizado dos seus alunos com este material complementar focado em capacidade crítica.",
              image: "https://13xdigital.com.br/wp-content/uploads/2023/12/9_-2-e1687900516487.png",
              price: "R$ 47,90",
              tag: "Presente #01"
            },
            {
              title: "E-book: Sala em Ordem",
              desc: "Estratégias práticas de gestão de sala de aula para manter a ordem sem precisar ser a 'professora chata'.",
              image: "https://13xdigital.com.br/wp-content/uploads/2023/12/10_-e1687900554642.png",
              price: "R$ 47,90",
              tag: "Presente #02"
            },
            {
              title: "20 Mapas Mentais de Fixação",
              desc: "Facilite a memorização dos conteúdos com este recurso visual poderoso. Ideais para revisões rápidas.",
              image: "https://13xdigital.com.br/wp-content/uploads/2026/01/bonus-3-mapas-mentais.png",
              price: "R$ 97,90",
              tag: "Presente #03"
            }
          ].map((bonus, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-primary/10 flex flex-col"
            >
              <div className="bg-primary/5 p-6 flex justify-center items-center h-48">
                <img src={bonus.image} alt={bonus.title} className="max-h-full object-contain drop-shadow-lg transform hover:scale-105 transition-transform" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2">{bonus.tag}</span>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{bonus.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-1">{bonus.desc}</p>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-slate-400 line-through text-sm">De {bonus.price}</span>
                  <span className="font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">GRÁTIS</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" className="bg-slate-900">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Desconto Especial</h2>
           <p className="text-slate-300 max-w-2xl mx-auto text-lg">
             A promoção será finalizada em breve. Compre agora e pague menos que o valor de uma pizza!
           </p>
        </div>
        <PricingCard />
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Dúvidas Frequentes" centered />
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "O que é o Kit de Atividades de Gêneros Textuais?",
                a: "É um pacote completo de recursos pedagógicos projetado para auxiliar professores no ensino e desenvolvimento de habilidades de escrita e leitura, alinhado à BNCC 2026."
              },
              {
                q: "Como posso acessar o material?",
                a: "O Kit é um produto digital. Você receberá acesso aos arquivos em formato PDF e Word por meio do seu e-mail imediatamente após a confirmação do pagamento."
              },
              {
                q: "As atividades são compatíveis com a BNCC 2026?",
                a: "Sim, todas as atividades foram cuidadosamente desenvolvidas para estar em conformidade com os códigos e diretrizes da BNCC 2026."
              },
              {
                q: "Existem bônus inclusos na compra?",
                a: "Sim! Você recebe 3 bônus exclusivos: Kit de Leitura e Interpretação, E-book 'Sala em Ordem' e 20 Mapas Mentais de Fixação."
              },
              {
                q: "Quais são as formas de pagamento?",
                a: "O pagamento é realizado exclusivamente via PIX para garantir o acesso imediato e o melhor preço promocional. O ambiente é 100% seguro e criptografado."
              }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-slate-50 border border-slate-100 rounded-xl px-4">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-primary hover:no-underline py-4 text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Pack Gêneros Textuais 2026</h2>
            <p className="text-sm">O material mais completo para professores do Brasil.</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
          
          <p className="text-xs text-slate-600">
            Copyright © 2026 TODOS OS DIREITOS RESERVADOS
          </p>
        </div>
      </footer>
    </div>
  );
}
