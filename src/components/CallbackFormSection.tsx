"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Lock, CheckCircle2, AlertCircle, Loader2 } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/config";

export default function CallbackFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  // Capture des paramètres UTM dès le montage du composant
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const utm: Record<string, string> = {};
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
        const val = params.get(key);
        if (val) utm[key] = val;
      });
      setUtmParams(utm);
    }
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Veuillez renseigner votre nom et prénom.";
    }

    const cleanedPhone = formData.phone.replace(/[\s.-]/g, "");
    const isAlgerian =
      /^(\+213|00213)[2-7]\d{8}$/.test(cleanedPhone) ||
      /^0[2-7]\d{8}$/.test(cleanedPhone) ||
      /^(?:\+?213|0)[5-7]\d{8}$/.test(cleanedPhone);

    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est obligatoire.";
    } else if (!isAlgerian) {
      newErrors.phone = "Vérifiez votre numéro (ex. 0555 12 34 56).";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Veuillez entrer une adresse e-mail valide.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerMessage("");

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          utm: utmParams,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setSubmitStatus("error");
        setServerMessage(data.message || "Vérifiez votre numéro (ex. 0555 12 34 56).");
        if (data.errors) {
          setErrors(data.errors);
        }
      } else {
        setSubmitStatus("success");
        setServerMessage(data.message || "Merci ! Un conseiller vous rappelle dès que possible.");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          message: "",
          honeypot: "",
        });
      }
    } catch {
      setSubmitStatus("error");
      setServerMessage("Une erreur technique est survenue. Veuillez nous appeler directement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rappel" className="py-12 sm:py-20 px-4 sm:px-6 max-w-[1200px] mx-auto w-full">
      {/* En-tête de section */}
      <div className="text-center max-w-[760px] mx-auto mb-10 sm:mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5A623] mb-3 block">
          Contact direct & Inscription
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight uppercase text-[#F5F2EC] mb-4">
          VOTRE PROJET COMMENCE <span className="text-[#F5A623]">PAR UN SIMPLE APPEL.</span>
        </h2>
        <p className="text-[17px] text-[#F5F2EC]/85 leading-[1.6]">
          Dates de session, conditions d&apos;admission, déroulement des cours : nos conseillers répondent à tout, du dimanche au jeudi, de 9 h à 16 h.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Colonne Gauche : Options 1 & 2 (Appel direct & WhatsApp) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Option 1 : Gros bouton primaire Appeler */}
          <div className="bg-[#141212] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <span className="text-xs font-mono font-semibold uppercase text-white/60 block mb-2">
              Option 1 · Appel prioritaire
            </span>
            <p className="text-sm text-[#F5F2EC]/80 mb-5">
              Contactez directement notre secrétariat aux admissions pour échanger sans attendre :
            </p>
            <a
              href={SITE_CONFIG.phonePrimary.tel}
              data-cta="cta_final_call"
              className="btn-primary w-full text-center flex items-center justify-center gap-3 text-base"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Appeler : {SITE_CONFIG.phonePrimary.display}</span>
            </a>
            <p className="text-[11px] text-white/50 font-mono mt-3 text-center">
              Ligne directe ouverte du Dimanche au Jeudi, 9 h à 16 h
            </p>
          </div>

          {/* Option 2 : Écrire sur WhatsApp */}
          <div className="bg-[#141212] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <span className="text-xs font-mono font-semibold uppercase text-white/60 block mb-2">
              Option 2 · Messagerie instantanée
            </span>
            <p className="text-sm text-[#F5F2EC]/80 mb-5">
              Posez vos questions par message sur notre numéro WhatsApp officiel :
            </p>
            <a
              href={SITE_CONFIG.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="cta_final_whatsapp"
              className="btn-whatsapp w-full text-center flex items-center justify-center gap-2.5 text-sm uppercase tracking-wide text-[#0b0a0a]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Écrire sur WhatsApp</span>
            </a>
            <p className="text-[11px] text-white/50 font-mono mt-3 text-center">
              Réponse rapide garantie par notre équipe
            </p>
          </div>
        </div>

        {/* Colonne Droite : Option 3 (Formulaire de rappel #rappel) */}
        <div className="lg:col-span-7 bg-[#141212] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase text-[#F5A623] block mb-1">
              Option 3 · Formulaire
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading text-white uppercase tracking-tight">
              Préférez-vous être rappelé(e) ?
            </h3>
          </div>

          {submitStatus === "success" ? (
            <div className="p-6 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-center my-6">
              <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Demande transmise avec succès !</h4>
              <p className="text-sm text-[#F5F2EC]/90 leading-relaxed">
                {serverMessage || "Merci ! Un conseiller vous rappelle dès que possible."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Anti-spam Honeypot invisible */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Message d'erreur global */}
              {submitStatus === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-200 text-xs">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{serverMessage}</span>
                </div>
              )}

              {/* Champ Nom et prénom * */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F2EC]/80 mb-1.5">
                  Nom et prénom <span className="text-[#F5A623]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Ex : Amina Benali"
                  required
                  className={`w-full px-4 py-3 rounded-xl bg-[#0b0a0a] border text-white text-sm focus:outline-none transition-colors ${
                    errors.fullName ? "border-red-500" : "border-white/15 focus:border-[#F5A623]"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1 font-mono">{errors.fullName}</p>
                )}
              </div>

              {/* Champ Téléphone * (validation algérienne) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F2EC]/80 mb-1.5">
                  Numéro de téléphone <span className="text-[#F5A623]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0555 12 34 56 ou +213 555 12 34 56"
                  required
                  className={`w-full px-4 py-3 rounded-xl bg-[#0b0a0a] border text-white text-sm focus:outline-none transition-colors font-mono ${
                    errors.phone ? "border-red-500" : "border-white/15 focus:border-[#F5A623]"
                  }`}
                />
                {errors.phone ? (
                  <p className="text-red-400 text-xs mt-1 font-mono">{errors.phone}</p>
                ) : (
                  <p className="text-white/40 text-[11px] mt-1 font-mono">Format algérien (ex. 0555 12 34 56)</p>
                )}
              </div>

              {/* Champ E-mail (facultatif) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F2EC]/80 mb-1.5">
                  Adresse e-mail <span className="text-white/40 font-normal lowercase">(facultatif)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="exemple@email.com"
                  className={`w-full px-4 py-3 rounded-xl bg-[#0b0a0a] border text-white text-sm focus:outline-none transition-colors ${
                    errors.email ? "border-red-500" : "border-white/15 focus:border-[#F5A623]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 font-mono">{errors.email}</p>
                )}
              </div>

              {/* Champ Message / Question (facultatif) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F5F2EC]/80 mb-1.5">
                  Votre question <span className="text-white/40 font-normal lowercase">(facultatif)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Dates de la prochaine session, conditions, déroulement..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0a0a] border border-white/15 text-white text-sm focus:border-[#F5A623] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Bouton de soumission */}
              <button
                type="submit"
                disabled={isSubmitting}
                data-cta="cta_final_form"
                className="btn-primary w-full text-center flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <span>JE SOUHAITE ÊTRE RAPPELÉ(E)</span>
                )}
              </button>

              {/* Réassurance légale */}
              <div className="flex items-center justify-center gap-2 pt-2 text-white/50 text-xs text-center">
                <Lock className="w-3.5 h-3.5 shrink-0" />
                <span>Vos informations servent uniquement à vous recontacter au sujet de la formation.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
