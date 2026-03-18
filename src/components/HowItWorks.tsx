import { motion } from 'motion/react';
import { howItWorksContent } from '../content/howItWorks';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/30 -skew-x-12 translate-x-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold text-sm uppercase tracking-[0.3em] mb-6"
          >
            {howItWorksContent.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-[0.9] uppercase"
          >
            Simples, rápido e <span className="text-emerald-500 italic font-serif lowercase">eficiente</span>
          </motion.p>
        </div>

        <div className="space-y-40">
          {howItWorksContent.steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-emerald-100/50 rounded-[60px] blur-2xl group-hover:bg-emerald-200/50 transition-colors duration-500" />
                  <div className="relative bg-white rounded-[48px] p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden flex items-center justify-center">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-auto max-h-[500px] object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 max-w-xl">
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-8xl font-black text-emerald-500/10 select-none leading-none">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-emerald-100" />
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-500 leading-relaxed mb-8">
                  {step.description}
                </p>
                
                <div className="inline-flex items-center gap-4 text-emerald-600 font-bold group cursor-pointer">
                  <span className="text-sm uppercase tracking-widest">Ver Detalhes</span>
                  <div className="w-12 h-px bg-emerald-600 group-hover:w-20 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
