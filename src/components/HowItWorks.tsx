import { motion } from 'motion/react';
import { howItWorksContent } from '../content/howItWorks';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-emerald-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-white/80 font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {howItWorksContent.title}
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Simples, rápido e eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {howItWorksContent.steps.map((step, index) => {
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group bg-white/5 rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-xl relative bg-white/10 p-4 flex items-center justify-center">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-emerald-50/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
