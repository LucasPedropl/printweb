import { motion } from 'motion/react';
import { testimonialsContent } from '../content/testimonials';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-emerald-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {testimonialsContent.title}
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            O que dizem nossos parceiros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsContent.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">Cliente Satisfeito</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
