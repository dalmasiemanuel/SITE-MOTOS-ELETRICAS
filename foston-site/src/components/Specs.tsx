import { motion } from "motion/react";
import { Lightning, WifiHigh, RoadHorizon, ShieldCheck, Speedometer } from "@phosphor-icons/react";

export default function Specs() {
  const specs = [
    {
      title: "Motor 960W",
      description: "Potência excepcional para subidas e trajetos urbanos.",
      icon: <Lightning weight="duotone" className="w-8 h-8 text-foston-green" />,
      colSpan: "md:col-span-2 lg:col-span-3",
      bg: "bg-surface-elevated border border-black/5"
    },
    {
      title: "Autonomia 45km",
      description: "Bateria de Lítio 60V / ~20Ah removível para maior alcance.",
      icon: <RoadHorizon weight="duotone" className="w-8 h-8 text-off-black" />,
      colSpan: "md:col-span-2 lg:col-span-2",
      bg: "bg-gray-50 border border-black/5"
    },
    {
      title: "Conexão NFC",
      description: "Sistema antifurto por proximidade e chaves digitais.",
      icon: <WifiHigh weight="duotone" className="w-8 h-8 text-off-black" />,
      colSpan: "md:col-span-1 lg:col-span-2",
      bg: "bg-surface-elevated border border-black/5"
    },
    {
      title: "Suspensão Dupla",
      description: "Amortecimento robusto garantindo conforto e pilotagem suave.",
      icon: <ShieldCheck weight="duotone" className="w-8 h-8 text-off-black" />,
      colSpan: "md:col-span-1 lg:col-span-2",
      bg: "bg-gray-50 border border-black/5"
    },
    {
      title: "Até 32 km/h",
      description: "Velocidade máxima segura e ágil para o seu dia a dia.",
      icon: <Speedometer weight="duotone" className="w-8 h-8 text-foston-green" />,
      colSpan: "md:col-span-2 lg:col-span-1",
      bg: "bg-off-black text-white border-transparent"
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-off-black">Engenharia Urbana.</h2>
        <p className="mt-4 text-gray-600 max-w-2xl text-lg">Projetada para suportar até 100 kg com segurança. Proteção contra baixa tensão, alta temperatura e sobrecarga de fábrica.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {specs.map((spec, i) => (
          <motion.div
            key={spec.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`p-8 rounded-3xl flex flex-col justify-between ${spec.colSpan} ${spec.bg} min-h-[240px]`}
          >
            <div className="mb-8">
              {spec.icon}
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-2 ${spec.bg.includes('bg-off-black') ? 'text-white' : 'text-off-black'}`}>
                {spec.title}
              </h3>
              <p className={spec.bg.includes('bg-off-black') ? 'text-gray-300' : 'text-gray-600'}>
                {spec.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
