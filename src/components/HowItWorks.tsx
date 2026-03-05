import { motion } from 'motion/react';
import { howItWorksContent } from '../content/howItWorks';
import { MousePointer2, Edit3, Printer } from 'lucide-react';

const stepIcons = [MousePointer2, Edit3, Printer];

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
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/4 -right-6 w-12 h-0.5 bg-white/20" />
                )}
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-emerald-600" />
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-emerald-950 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-emerald-600">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-emerald-50/80 leading-relaxed max-w-[250px]">
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
