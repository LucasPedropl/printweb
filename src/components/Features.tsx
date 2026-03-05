import { motion } from 'motion/react';
import { Zap, Shield, Link, Settings, Headphones, RefreshCw } from 'lucide-react';
import { featuresContent } from '../content/features';

const iconMap: Record<string, any> = {
  "Impressão Rápida": Zap,
  "Etiquetas Inteligentes": Shield,
  "Conexão Simples": Link,
  "Operação Eficiente": Settings,
  "Suporte Personalizado": Headphones,
  "Integração Prática": RefreshCw,
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold text-sm uppercase tracking-[0.2em] mb-4"
          >
            {featuresContent.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            {featuresContent.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresContent.items.map((item, index) => {
            const Icon = iconMap[item.title] || Zap;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
