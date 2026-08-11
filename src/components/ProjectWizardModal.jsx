import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Send, CheckCircle2, Copy, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProjectWizardModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const TARGET_EMAIL = "carloscontrerashernandez@proton.me";

  const [formData, setFormData] = useState({
    service: 'consultation',
    description: '',
    name: '',
    email: ''
  });

  if (!isOpen) return null;

  const sanitizeInput = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/[<>]/g, '').trim();
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const generateSummaryText = () => {
    const serviceName =
      formData.service === 'consultation'
        ? 'CONSULTA TÉCNICA 1:1 (1 Hora · $50 USD — Presencial u Online)'
        : formData.service.toUpperCase();

    return `SOLICITUD — CARLOS CONTRERAS HERNÁNDEZ
-------------------------------------------------
Nombre: ${sanitizeInput(formData.name) || 'No provisto'}
Email: ${sanitizeInput(formData.email) || 'No provisto'}
Tipo: ${serviceName}
Detalles: ${sanitizeInput(formData.description) || 'Sin detalles adicionales'}
-------------------------------------------------`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanName = sanitizeInput(formData.name).slice(0, 100);
    const cleanEmail = sanitizeInput(formData.email).slice(0, 120);
    const cleanDetails = sanitizeInput(formData.description).slice(0, 2000);

    if (!cleanName) {
      setErrorMessage(t('wizard.name') + ' es requerido.');
      return;
    }

    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      setErrorMessage('Por favor introduce un correo electrónico válido.');
      return;
    }

    setIsSending(true);

    const serviceName =
      formData.service === 'consultation'
        ? 'Consulta Técnica 1:1 (1 Hora · $50 USD)'
        : formData.service.toUpperCase();

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `⚡ Solicitud Portfolio: ${cleanName} (${serviceName})`,
          Nombre: cleanName,
          Email: cleanEmail,
          Servicio: serviceName,
          Detalles: cleanDetails || 'Sin detalles adicionales',
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Error al procesar el envío');
      }
    } catch (err) {
      console.warn('Direct submit fallback notice:', err);
      setSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 dark:bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="ag-card w-full max-w-lg p-6 sm:p-8 relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-500 hover:text-neutral-900 dark:hover:text-white p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 pr-8">
          <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
            {t('wizard.title')}
          </span>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            {t('wizard.subtitle')}
          </p>
        </div>

        <div className="w-full bg-[#E6E1D8] dark:bg-neutral-800 rounded-full h-1">
          <div
            className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 h-1 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-neutral-900 dark:text-neutral-200">
                  {t('wizard.step1')}
                </h4>
                <div className="space-y-2.5 text-xs">
                  
                  <div
                    onClick={() => setFormData({ ...formData, service: 'consultation' })}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.service === 'consultation'
                        ? 'bg-amber-100 dark:bg-amber-950/40 border-amber-500 text-amber-900 dark:text-amber-300 font-bold shadow-md'
                        : 'bg-[#F4F0EA] dark:bg-neutral-900 border-[#D8D2C6] dark:border-neutral-800 text-neutral-900 dark:text-neutral-300 hover:border-amber-500/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold">{t('wizard.serviceConsultation')}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 text-white dark:text-slate-950 font-extrabold shadow-sm">
                        $50 USD / hora
                      </span>
                    </div>
                    <p className="text-[11px] font-normal text-neutral-600 dark:text-neutral-400">
                      {t('wizard.serviceConsultationDesc')}
                    </p>
                  </div>

                  {[
                    { id: 'mobile', title: t('wizard.serviceMobile'), desc: t('wizard.serviceMobileDesc'), badge: 'Cotización a Medida' },
                    { id: 'web', title: t('wizard.serviceWeb'), desc: t('wizard.serviceWebDesc'), badge: 'Cotización a Medida' },
                    { id: 'seo', title: t('wizard.serviceSeo'), desc: t('wizard.serviceSeoDesc'), badge: 'Plan / A Medida' },
                    { id: 'custom', title: t('wizard.serviceCustom'), desc: t('wizard.serviceCustomDesc'), badge: 'A Presupuesto' },
                  ].map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setFormData({ ...formData, service: s.id })}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.service === s.id
                          ? 'bg-amber-100 dark:bg-amber-950/30 border-amber-500 text-amber-900 dark:text-amber-300 font-bold'
                          : 'bg-[#F4F0EA] dark:bg-neutral-900 border-[#D8D2C6] dark:border-neutral-800 text-neutral-900 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-bold">{s.title}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono apple-glass text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700">
                          {s.badge}
                        </span>
                      </div>
                      <span className="block text-[11px] font-normal text-neutral-600 dark:text-neutral-400">{s.desc}</span>
                    </div>
                  ))}

                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-neutral-900 dark:text-neutral-200">
                  {t('wizard.step2')}
                </h4>
                <textarea
                  rows={4}
                  maxLength={2000}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={t('wizard.detailsPlaceholder')}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F4F0EA] dark:bg-neutral-900 border border-[#D8D2C6] dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs focus:border-amber-500 focus:outline-none"
                />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3 text-xs">
                <h4 className="text-xs font-mono font-bold text-neutral-900 dark:text-neutral-200">
                  {t('wizard.step3')}
                </h4>

                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder={t('wizard.name')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#F4F0EA] dark:bg-neutral-900 border border-[#D8D2C6] dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 focus:border-amber-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    maxLength={120}
                    placeholder={t('wizard.email')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#F4F0EA] dark:bg-neutral-900 border border-[#D8D2C6] dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="bg-[#F4F0EA] dark:bg-neutral-900 p-3 rounded-lg border border-[#D8D2C6] dark:border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-amber-700 dark:text-amber-400">
                    <span>{t('wizard.summaryTitle')}</span>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copied ? t('wizard.copySuccess') : t('wizard.copySummary')}</span>
                    </button>
                  </div>
                  <pre className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap">
                    {generateSummaryText()}
                  </pre>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="flex items-center gap-2 text-xs text-red-500 font-mono">
                <AlertCircle className="w-4 h-4" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="flex items-center justify-between pt-2 border-t border-[#E6E1D8] dark:border-neutral-800 text-xs">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={isSending}
                  className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white disabled:opacity-50"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t('wizard.prev')}</span>
                </button>
              ) : <div />}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 text-white dark:text-slate-950 font-bold transition-all"
                >
                  <span>{t('wizard.next')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSending}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 text-white dark:text-slate-950 font-extrabold shadow-lg hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t('wizard.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{t('wizard.submit')}</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        ) : (
          <div className="py-6 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce" />
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                {t('wizard.successTitle')}
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto">
                {t('wizard.successDesc')}
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-600 text-white dark:text-slate-950 text-xs font-bold shadow-md"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
