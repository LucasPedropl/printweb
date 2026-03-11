import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { segmentsContent } from '../content/segments';
import SearchableSelect from './ui/SearchableSelect';
import { CheckCircle2 } from 'lucide-react';

export default function Segments() {
  const [selectedSegment, setSelectedSegment] = useState(segmentsContent.items[0].name);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSegment(current => {
        const currentIndex = segmentsContent.items.findIndex(s => s.name === current);
        const nextIndex = (currentIndex + 1) % segmentsContent.items.length;
        return segmentsContent.items[nextIndex].name;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const segmentOptions = segmentsContent.items.map(s => ({
    value: s.name,
    label: s.name
  }));

  const activeSegment = segmentsContent.items.find(s => s.name === selectedSegment);

  return (
    <section id="segments" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-emerald-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
              {segmentsContent.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
              Soluções sob medida para o seu negócio
            </h3>
            
            <div className="mb-10">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Escolha seu segmento para ver as funcionalidades:
              </label>
              <SearchableSelect 
                options={segmentOptions}
                value={selectedSegment}
                onChange={setSelectedSegment}
                className="max-w-md"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSegment}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <h4 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-3">
                    {activeSegment?.name}
                  </h4>
                  <ul className="space-y-4">
                    {activeSegment?.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-lg">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <motion.img 
                key={selectedSegment}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={activeSegment?.image || `https://picsum.photos/seed/${selectedSegment}/800/800`} 
                alt={selectedSegment}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/10" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
