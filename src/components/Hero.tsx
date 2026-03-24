import { motion } from 'motion/react';
import { ChevronRight, Smartphone, Printer, Layout } from 'lucide-react';
import { heroContent } from '../content/hero';

export default function Hero() {
	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-emerald-950">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<img
					src="./hero.png"
					alt="Background"
					className="w-full h-full object-cover object-center opacity-80"
				/>
				<div className="absolute inset-0 bg-emerald-950/50" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="max-w-4xl mx-auto flex flex-col items-center"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
						</span>
						Nova Versão Disponível
					</div>

					<h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
						{heroContent.title}
					</h1>

					<p className="text-xl md:text-2xl text-emerald-50 mb-12 max-w-2xl leading-relaxed drop-shadow-md">
						{heroContent.subtitle}
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
						<a
							href="https://wa.me/5531993585185"
							target="_blank"
							rel="noopener noreferrer"
							className="group bg-emerald-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 active:scale-95"
						>
							{heroContent.cta}
							<ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</a>
						<a
							href="https://play.google.com/store/apps/details?id=br.com.printtool.app.printpdv&hl=pt_BR"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 rounded-2xl text-lg font-bold text-white border border-white/20 hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2"
						>
							Ver Demonstração
						</a>
					</div>

					<div className="flex flex-wrap justify-center items-center gap-8 border-t border-white/20 pt-8">
						<div className="flex items-center gap-3">
							<Smartphone className="text-emerald-400 w-5 h-5" />
							<span className="text-sm text-emerald-50 font-medium">
								Mobile First
							</span>
						</div>
						<div className="flex items-center gap-3">
							<Printer className="text-emerald-400 w-5 h-5" />
							<span className="text-sm text-emerald-50 font-medium">
								Multi-Impressora
							</span>
						</div>
						<div className="flex items-center gap-3">
							<Layout className="text-emerald-400 w-5 h-5" />
							<span className="text-sm text-emerald-50 font-medium">
								Customizável
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
