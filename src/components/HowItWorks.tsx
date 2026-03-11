import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
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

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 pb-12">
          {howItWorksContent.steps.map((step, index) => {
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group flex flex-col items-center"
              >
                <div className="w-full aspect-[4/5] rounded-[40px] overflow-hidden mb-12 relative flex items-center justify-center">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute bottom-0 left-4 right-4 bg-gray-100 rounded-[32px] p-8 shadow-2xl translate-y-12 group-hover:translate-y-10 transition-transform duration-300">
                  <div className="text-gray-900 font-medium text-lg mb-2">{step.step}</div>
                  <h3 className="text-xl font-medium text-gray-800 leading-snug pr-8">
                    {step.description}
                  </h3>
                  <div className="absolute bottom-6 right-6 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
