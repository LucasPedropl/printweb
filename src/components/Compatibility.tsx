import { motion } from 'motion/react';

const items = [
  { name: "Tablets e telefones", image: "https://picsum.photos/seed/tablet/400/400" },
  { name: "Impressoras de Ribbon", image: "https://picsum.photos/seed/ribbon/400/400" },
  { name: "Impressoras Elgin", image: "https://picsum.photos/seed/elgin/400/400" },
  { name: "Etiquetas e bobinas térmicas", image: "https://picsum.photos/seed/bobina/400/400" },
  { name: "Impressoras térmicas", image: "https://picsum.photos/seed/termica/400/400" },
  { name: "Impressoras de Tectoy", image: "https://picsum.photos/seed/tectoy/400/400" },
];

export default function Compatibility() {
  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8"
          >
            Compatibilidade
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-emerald-50/80 leading-relaxed font-medium"
          >
            Nosso sistema funciona perfeitamente com impressoras térmicas e de ribbon, além de tablets, celulares e bobinas adesivas. Mais praticidade e flexibilidade para imprimir etiquetas onde e como você quiser.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white p-2 shadow-2xl mb-6 relative group">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-50 bg-white">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wider">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
