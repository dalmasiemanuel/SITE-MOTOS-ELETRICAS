import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Altura reduzida de 300vh para 200vh para o vídeo avançar mais rapidamente com menos scroll.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && duration > 0 && Number.isFinite(duration)) {
      try {
        videoRef.current.currentTime = latest * duration;
      } catch (e) {
        console.error("Video scrub error", e);
      }
    }
  });

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-surface">
      <div className="sticky top-0 h-[100dvh] w-full flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-off-black"
            >
              Liberdade sobre <br />
              <span className="text-foston-green italic pr-2">duas rodas.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg text-gray-600 max-w-md leading-relaxed"
            >
              Role a página para ver a engenharia da Foston X15 MAX. Um motor de 960W montado peça por peça para você.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-foston-green hover:bg-[#20bd54] text-white px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-[1px] active:scale-[0.98] shadow-lg shadow-foston-green/20">
                Falar com Atendimento
              </button>
              <Link to="/estoque" className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-[1px] active:scale-[0.98] text-center flex items-center justify-center">
                Estoque Disponível
              </Link>
            </motion.div>
          </div>

          {/* Visual Asset (Scrubbing Video) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 border border-black/5 flex items-center justify-center shadow-2xl shadow-black/5"
          >
            <video 
              ref={videoRef}
              src="/assets/hero_video_smooth.mp4" 
              muted 
              playsInline
              className="w-full h-full object-cover"
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
