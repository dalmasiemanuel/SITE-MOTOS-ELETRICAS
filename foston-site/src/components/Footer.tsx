export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold tracking-tight text-xl text-off-black">FOSTON X15 MAX</span>
          <span className="text-sm text-gray-500">Distribuído por Topdek Informática no Paraguai.</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-foston-green transition-colors">Facebook</a>
          <a href="#" className="hover:text-foston-green transition-colors">Instagram</a>
          <a href="#" className="hover:text-foston-green transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
