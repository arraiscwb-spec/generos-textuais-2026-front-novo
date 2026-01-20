import { motion } from "framer-motion";
import { Check, Lock } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function PricingCard() {
  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl shadow-primary/20 overflow-hidden border border-slate-100 relative"
    >
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary to-violet-600" />
      
      <div className="p-8 md:p-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-bold text-sm mb-6 uppercase tracking-wider">
          Oferta por tempo limitado
        </span>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Acesso Vitalício Pack 2026</h3>
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-slate-400 text-lg line-through decoration-red-500/50 decoration-2">R$ 197,00</span>
          <span className="text-5xl font-extrabold text-primary">R$ 9,90</span>
        </div>

        <CTAButton 
          href="https://pay.lowify.com.br/checkout?product_id=8UCyL6" 
          variant="accent" 
          size="xl" 
          className="w-full mb-4 shadow-orange-500/25 font-black uppercase tracking-tighter"
        >
          QUERO MEU ACESSO VITALÍCIO AGORA!
        </CTAButton>

        <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-8">
          <Lock className="w-4 h-4" />
          <span>Compra 100% Segura & Criptografada</span>
        </div>

        <div className="space-y-4 text-left border-t border-slate-100 pt-8">
          {[
            "850+ Atividades Editáveis",
            "100% Alinhado à BNCC 2026",
            "Arquivos em Word e PDF",
            "Acesso Vitalício",
            "3 Bônus Exclusivos (Mapas Mentais, etc)",
            "Garantia Incondicional de 7 Dias"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full bg-green-100 p-1">
                <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
              </div>
              <span className="text-slate-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-slate-50 p-4 text-center text-xs text-slate-500 font-medium border-t border-slate-100">
        Promoção termina em breve. Garanta sua vaga!
      </div>
    </motion.div>
  );
}
