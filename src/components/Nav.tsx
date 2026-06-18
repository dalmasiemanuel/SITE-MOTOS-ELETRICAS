import { useState } from "react";
import { WhatsappLogo, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: '', telefone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, telefone, email } = formData;
    const text = `Olá! Tenho interesse na Moto Elétrica Foston X15 MAX.\n\n*Meus dados:*\nNome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5544984078310&text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="w-full border-b border-black/5 bg-surface/80 backdrop-blur-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="font-black text-xl tracking-tighter">ECHOSHOPBRASIL</span>
            <span className="bg-black text-white text-[10px] px-1.5 py-0.5 font-mono uppercase tracking-widest rounded-sm">ATENDIMENTO 100% HUMAZINADO</span>
          </Link>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-foston-green hover:bg-[#20bd54] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:-translate-y-[1px] active:scale-95 shadow-[0_8px_16px_rgba(37,211,102,0.25)] flex items-center gap-2 border border-foston-green/50"
          >
            <span>FALE CONOSCO</span>
            <WhatsappLogo weight="fill" className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 border border-black/5"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
              >
                <X weight="bold" className="w-5 h-5" />
              </button>

              <h2 className="text-2xl font-bold text-off-black mb-2">FALE COM ESPECIALISTA</h2>
              <p className="text-gray-500 text-sm mb-6">Preencha os dados abaixo e você será direcionado para o nosso WhatsApp exclusivo.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome</label>
                  <input 
                    id="nome"
                    type="text" 
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-foston-green/50 focus:border-foston-green transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telefone" className="text-sm font-medium text-gray-700">Telefone</label>
                  <input 
                    id="telefone"
                    type="tel" 
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-foston-green/50 focus:border-foston-green transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-foston-green/50 focus:border-foston-green transition-all"
                  />
                </div>

                <button 
                  type="submit"
                  className="mt-4 w-full bg-foston-green hover:bg-[#20bd54] text-white py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-[1px] active:scale-[0.98] shadow-lg shadow-foston-green/20 flex items-center justify-center gap-2"
                >
                  <WhatsappLogo weight="bold" className="w-5 h-5" />
                  Ir para o WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
