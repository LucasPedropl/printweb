import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { contactContent } from '../content/contact';
import {
	Phone,
	MapPin,
	Clock,
	Send,
	CheckCircle2,
	Loader2,
} from 'lucide-react';

export default function Contact() {
	const [formData, setFormData] = useState({
		nome: '',
		email: '',
		telefone: '',
		assunto: '',
		mensagem: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	// Máscara para telefone (DD) 9XXXX-XXXX
	const formatPhone = (value) => {
		const numbers = value.replace(/\D/g, '');
		if (numbers.length <= 2) return numbers;
		if (numbers.length <= 7)
			return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
		return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// 1. Instância bixs
			const authRes = await fetch(
				'https://dev.bixs.com.br/v1/auth/login',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						email: 'pedrolucasmota2005@gmail.com',
						password: 'M6433vlks*',
						mac: 'docs',
						source: 'api_externa',
					}),
				},
			);
			const authData = await authRes.json();
			if (!authRes.ok) throw new Error('Falha auth BIXs');
			const token = authData.token;

			// 2. GET Instâncias
			const instRes = await fetch(
				'https://dev.bixs.com.br/v1/api/message/instances',
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			const instData = await instRes.json();
			const instanceId = instData[0]?.id;
			if (!instanceId) throw new Error('Nenhuma instância conectada');

			// 3. Enviar mensagem
			const messageText = `*NOVO CONTATO DO SITE*\n\n*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.telefone}\n*Assunto:* ${formData.assunto}\n*Mensagem:*\n${formData.mensagem}`;

			await fetch(
				'https://dev.bixs.com.br/v1/api/message/messages/send',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						accept: 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						audio_url: '',
						document_url: '',
						image_url: '',
						instance_id: instanceId,
						message: messageText,
						to: '553172532104',
						to_name: formData.nome || 'Contato Site',
						video_url: '',
					}),
				},
			);

			setShowSuccess(true);
			setFormData({
				nome: '',
				email: '',
				telefone: '',
				assunto: '',
				mensagem: '',
			});
			setTimeout(() => setShowSuccess(false), 5000);
		} catch (error) {
			console.error(error);
			alert(
				'Ocorreu um erro ao tentar enviar. Tente novamente mais tarde.',
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16">
					<div>
						<h2 className="text-emerald-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">
							{contactContent.title}
						</h2>
						<h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
							Vamos conversar?
						</h3>
						<p className="text-xl text-gray-600 mb-12 leading-relaxed">
							Estamos prontos para ajudar você a transformar a
							gestão de impressão do seu negócio.
						</p>

						<div className="space-y-8">
							<div className="flex items-start gap-6">
								<div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
									<Phone className="text-emerald-600 w-6 h-6" />
								</div>
								<div>
									<h4 className="font-bold text-gray-900 mb-1">
										Ligue para nós
									</h4>
									<p className="text-gray-600">
										{contactContent.phone}
									</p>
								</div>
							</div>

							<div className="flex items-start gap-6">
								<div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
									<MapPin className="text-emerald-600 w-6 h-6" />
								</div>
								<div>
									<h4 className="font-bold text-gray-900 mb-1">
										Localização
									</h4>
									<p className="text-gray-600 max-w-xs">
										{contactContent.address}
									</p>
								</div>
							</div>

							<div className="flex items-start gap-6">
								<div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
									<Clock className="text-emerald-600 w-6 h-6" />
								</div>
								<div>
									<h4 className="font-bold text-gray-900 mb-1">
										Horário de Atendimento
									</h4>
									<p className="text-gray-600">
										{contactContent.hours.weekdays}
									</p>
									<p className="text-gray-600">
										{contactContent.hours.weekends}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
						<AnimatePresence>
							{showSuccess && (
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.95 }}
									className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-emerald-600 text-white rounded-[40px] p-8 text-center"
								>
									<CheckCircle2 className="w-20 h-20 mb-4 text-emerald-200" />
									<h4 className="text-3xl font-bold mb-2">
										Enviado com sucesso!
									</h4>
									<p className="text-lg text-emerald-100 max-w-md">
										Entraremos em contato no seu WhatsApp em
										breve.
									</p>
								</motion.div>
							)}
						</AnimatePresence>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<label className="text-sm font-semibold text-gray-700">
										Nome
									</label>
									<input
										type="text"
										required
										value={formData.nome}
										onChange={(e) =>
											setFormData({
												...formData,
												nome: e.target.value,
											})
										}
										className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
										placeholder="Seu nome completo"
									/>
								</div>
								<div className="space-y-2">
									<label className="text-sm font-semibold text-gray-700">
										Telefone (WhatsApp)
									</label>
									<input
										type="tel"
										required
										maxLength={15}
										value={formData.telefone}
										onChange={(e) =>
											setFormData({
												...formData,
												telefone: formatPhone(
													e.target.value,
												),
											})
										}
										className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
										placeholder="(99) 99999-9999"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-semibold text-gray-700">
									E-mail
								</label>
								<input
									type="email"
									required
									value={formData.email}
									onChange={(e) =>
										setFormData({
											...formData,
											email: e.target.value,
										})
									}
									className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
									placeholder="seu@email.com"
								/>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-semibold text-gray-700">
									Assunto
								</label>
								<input
									type="text"
									required
									value={formData.assunto}
									onChange={(e) =>
										setFormData({
											...formData,
											assunto: e.target.value,
										})
									}
									className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
									placeholder="Como podemos ajudar?"
								/>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-semibold text-gray-700">
									Mensagem
								</label>
								<textarea
									required
									value={formData.mensagem}
									onChange={(e) =>
										setFormData({
											...formData,
											mensagem: e.target.value,
										})
									}
									rows={4}
									className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none"
									placeholder="Detalhes ou dúvidas..."
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed"
							>
								{isSubmitting ? (
									<>
										<Loader2 className="w-5 h-5 animate-spin" />
										Enviando...
									</>
								) : (
									<>
										Enviar Mensagem{' '}
										<Send className="w-5 h-5" />
									</>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
