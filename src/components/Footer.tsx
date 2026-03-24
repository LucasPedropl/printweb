import { motion } from 'motion/react';
import { Printer } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="./logo.jpg" alt="Print App Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Print <span className="text-emerald-500">App</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-emerald-100/60">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Suporte</a>
          </div>

          <p className="text-sm text-emerald-100/40">
            © {new Date().getFullYear()} Print APP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
