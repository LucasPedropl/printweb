import { motion } from 'motion/react';
import { ChevronRight, Smartphone, Printer, Layout } from 'lucide-react';
import { heroContent } from '../content/hero';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-emerald-950">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/20 to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Nova Versão Disponível
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              {heroContent.title}
            </h1>
            
            <p className="text-xl text-emerald-100/80 mb-10 max-w-lg leading-relaxed">
              {heroContent.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-emerald-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 active:scale-95">
                {heroContent.cta}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl text-lg font-bold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                Ver Demonstração
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <Smartphone className="text-emerald-400 w-5 h-5" />
                <span className="text-sm text-emerald-100/60">Mobile First</span>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="text-emerald-400 w-5 h-5" />
                <span className="text-sm text-emerald-100/60">Multi-Impressora</span>
              </div>
              <div className="flex items-center gap-3">
                <Layout className="text-emerald-400 w-5 h-5" />
                <span className="text-sm text-emerald-100/60">Customizável</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://picsum.photos/seed/printing/800/1000" 
                alt="App Preview" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl z-20 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Check className="text-emerald-600 w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-gray-900">Impressão Concluída</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-emerald-500 p-6 rounded-2xl shadow-2xl z-20 text-white"
            >
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-xs font-medium opacity-80 uppercase tracking-widest">Compatível</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Check(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
