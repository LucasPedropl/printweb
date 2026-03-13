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

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {howItWorksContent.steps.map((step, index) => {
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-white rounded-[48px] p-6 h-full shadow-2xl transition-all duration-500 hover:translate-y-[-8px]">
                  {/* Step Badge */}
                  <div className="absolute -top-4 left-12 bg-emerald-500 text-white px-6 py-2 rounded-full font-bold shadow-lg z-20">
                    {step.step}
                  </div>

                  {/* Image Area */}
                  <div className="bg-gray-50 rounded-[40px] aspect-[4/5] flex items-center justify-center p-8 mb-8 overflow-hidden relative">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/5 transition-colors duration-500" />
                  </div>
                  
                  {/* Content Area */}
                  <div className="px-4 pb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="mt-8 flex items-center text-emerald-600 font-bold group/link cursor-pointer">
                      <span>Saiba mais</span>
                      <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </div>
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
