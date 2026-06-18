export default function Estoque() {
  // Lista de motos em estoque. Você pode adicionar novas motos simplesmente copiando um bloco e alterando os dados.
  const motos = [
    {
      id: 1,
      titulo: "Moto Scooter Elétrica Foston X13 EX",
      descricao: "Potência do motor: 1000W | Velocidade máxima atingida: 32km/h | Idade mínima recomendada: 14 anos | Com luz LED. Conta com tecnologia avançada e segurança para o seu dia a dia.",
      imagem: "https://http2.mlstatic.com/D_NQ_NP_630531-MLB112392280651_052026-O.jpg",
      preco: "R$ 4.699,00",
      tags: ["1000W", "32km/h", "NFC"]
    },
    {
      id: 2,
      titulo: "Moto Elétrica Foston X16 — LANÇAMENTO",
      descricao: "1000W | Bateria removível de Lítio (mais segura e duradoura) | Carregador incluso | Chave NFC | Farol LED | Alarme e trava de segurança | 3 Modos de pilotagem | Autonomia de 45-50km | Velocidade limitada 32km/h | Não precisa de habilitação e não paga IPVA | Entrega grátis em Maringá e Sarandi.",
      imagem: "/assets/foston-x16.jpeg",
      preco: "R$ 5.299,00",
      tags: ["1000W", "NFC", "LANÇAMENTO"]
    },
    {
      id: 3,
      titulo: "Moto Elétrica Foston X17 — LANÇAMENTO",
      descricao: "1000W | Bateria removível de Lítio (mais segura e duradoura) | Carregador incluso | Chave NFC | Farol LED | Alarme e trava de segurança | 3 Modos de pilotagem | Barras de proteção | Autonomia de 45-50km | Velocidade limitada 32km/h | Não precisa de habilitação e não paga IPVA | Entrega grátis em Maringá e Sarandi.",
      imagem: "/assets/foston-x17.jpeg",
      preco: "R$ 5.399,00",
      tags: ["1000W", "NFC", "LANÇAMENTO"]
    },
    {
      id: 4,
      titulo: "Moto elétrica Foston X200",
      descricao: "Moto elétrica infantil nova sem uso | Bateria de Lítio | Luzes e sons | 5 a 12 anos | Motor brushless | Até 50kg | Suspensão invertida | Freio a disco | Autonomia de mais de 20km.",
      imagem: "/assets/foston-x200.jpg",
      preco: "R$ 1.700,00",
      tags: ["Infantil", "Bateria de Lítio", "Brushless"]
    },
    {
      id: 5, 
      titulo: "Moto elétrica Foston x15",
      descricao: "1000W | Bateria removível de Lítio (mais segura e duradoura) | Carregador incluso | Chave NFC | Farol LED | Alarme e trava de segurança | 3 Modos de pilotagem | Autonomia de 45-50km | Velocidade limitada 32km/h | Não precisa de habilitação e não paga IPVA | Entrega grátis em Maringá e Sarandi.",
      imagem: "/assets/foston-x15.jpeg", 
      preco: "R$ 5.000,00",
      tags: ["1000W", "NFC", "LANÇAMENTO"]
    }
  ];  

  return (
    <section className="pt-32 pb-24 min-h-[80vh] bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-off-black mb-4">
          Estoque Disponível
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl text-lg">
          Explore nossa seleção de motos elétricas premium prontas para você dominar a cidade.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Renderização das motos cadastradas no estoque */}
          {motos.map((moto) => (
            <div key={moto.id} className="group bg-white rounded-3xl overflow-hidden border border-black/5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
              <div className="relative h-72 bg-gray-50 flex items-center justify-center p-6 border-b border-black/5">
                <img 
                  src={moto.imagem} 
                  alt={moto.titulo} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  {moto.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full text-off-black shadow-sm border border-black/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-off-black leading-tight mb-3">{moto.titulo}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">{moto.descricao}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-black text-2xl text-foston-green tracking-tight">{moto.preco}</span>
                  <a 
                    href={`https://api.whatsapp.com/send?phone=5544984078310&text=Olá! Tenho interesse na ${moto.titulo}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-[1px] active:scale-95 shadow-md"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Slot de Exemplo / Adicionar Novo */}
          <div className="border-2 border-dashed border-black/10 rounded-3xl h-full min-h-[450px] flex flex-col items-center justify-center text-gray-400 bg-black/5 hover:bg-black/10 transition-colors cursor-pointer p-8 text-center">
            <span className="font-bold text-xl text-gray-500 mb-2">+ Nova Moto</span>
            <span className="text-sm font-medium">Copie e cole o bloco de código no arquivo Estoque.tsx para cadastrar mais motos</span>
          </div>
          
        </div>
      </div>
    </section>
  )
}
