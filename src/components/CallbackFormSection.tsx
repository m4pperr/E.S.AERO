"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Lock,
  CheckCircle,
  AlertCircle,
  Loader2,
  PhoneCall
} from "@/components/Icons";

export default function CallbackFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [leadId, setLeadId] = useState("");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Veuillez entrer votre nom et prénom.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est obligatoire.";
    } else {
      const sanitizedPhone = formData.phone.replace(/[\s.-]/g, "");
      if (sanitizedPhone.length < 8 || sanitizedPhone.length > 15 || !/^\+?[0-9]+$/.test(sanitizedPhone)) {
        newErrors.phone = "Veuillez entrer un numéro valide (ex: 06 12 34 56 78).";
      }
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

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerMessage("");

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setSubmitStatus("error");
        setServerMessage(
          data.message ||
            "Une erreur est survenue lors de l'enregistrement de votre demande."
        );
        if (data.errors) {
          setErrors(data.errors);
        }
      } else {
        setSubmitStatus("success");
        setServerMessage(data.message);
        setLeadId(data.leadId || "");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
      setServerMessage(
        "Impossible de joindre le serveur. Veuillez vérifier votre connexion ou nous contacter directement par téléphone."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rappel" className="py-4 px-2 sm:px-4 max-w-[1500px] mx-auto bg-[#08111e]">
      {/* Framed Contact Grid with Logo Palette */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3.5 items-stretch">
        {/* Left Side Panel: CALL in Emerald Teal #00A887 */}
        <div className="lg:col-span-3 bg-[#00A887] text-[#08111e] p-6 sm:p-8 flex flex-col justify-between min-h-[220px] lg:min-h-full">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#08111e]/70 block mb-2">
              Ligne Directe
            </span>
            <span className="font-heading font-black text-4xl sm:text-5xl uppercase leading-none block mb-4">
              APPELER
            </span>
            <p className="text-xs sm:text-sm text-[#08111e]/90 leading-relaxed font-normal">
              Nos conseillers pédagogiques répondent à vos questions du lundi au samedi.
            </p>
          </div>
          <div className="pt-6">
            <a
              href="tel:+33189000000"
              className="text-base sm:text-lg font-mono font-black text-[#08111e] m-link"
            >
              [NUMÉRO À AJOUTER]
            </a>
          </div>
        </div>

        {/* Center Main Panel: THE CALLBACK FORM in Soft Tint */}
        <div className="lg:col-span-6 bg-[#e6f7f4] text-[#08111e] p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#00876c] mb-3">
                <PhoneCall className="w-3.5 h-3.5 text-[#00876c]" />
                <span>Rappel Gratuit & Immédiat</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading uppercase text-[#08111e] leading-[0.95] tracking-tight mb-3">
                PARLONS DE VOTRE PROJET PROFESSIONNEL.
              </h2>
              <p className="text-xs sm:text-sm text-[#08111e]/80 leading-relaxed font-normal">
                Laissez-nous vos coordonnées. Notre équipe vous contactera pour vous présenter la formation et répondre à vos questions.
              </p>
            </div>

            {/* Submission Result or Form */}
            {submitStatus === "success" ? (
              <div className="bg-[#08111e] text-[#f4f7f9] p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-[#00A887] text-[#08111e] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-heading uppercase tracking-tight text-[#f4f7f9]">
                  Demande de rappel confirmée !
                </h3>
                <p className="text-xs sm:text-sm text-[#f4f7f9]/80 max-w-md mx-auto leading-relaxed">
                  {serverMessage ||
                    "Votre demande a bien été enregistrée. Notre équipe vous recontactera très rapidement."}
                </p>
                {leadId && (
                  <p className="text-xs font-mono text-[#00A887]">
                    Dossier : {leadId}
                  </p>
                )}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitStatus("idle");
                      setServerMessage("");
                    }}
                    className="m-btn text-xs font-bold"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {submitStatus === "error" && (
                  <div className="p-3.5 bg-red-100 border border-red-400 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{serverMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nom et prénom */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-[#08111e] mb-1 font-mono"
                    >
                      Nom et prénom *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Ex: Sarah Benali"
                      className={`w-full p-3 border-2 text-sm text-[#08111e] bg-white placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.fullName ? "border-red-500 bg-red-50" : "border-[#08111e] focus:border-[#234990]"
                      }`}
                      required
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 font-bold mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Numéro de téléphone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-[#08111e] mb-1 font-mono"
                    >
                      Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Ex: 06 12 34 56 78"
                      className={`w-full p-3 border-2 text-sm text-[#08111e] bg-white placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.phone ? "border-red-500 bg-red-50" : "border-[#08111e] focus:border-[#234990]"
                      }`}
                      required
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 font-bold mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Adresse email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#08111e] mb-1 font-mono"
                  >
                    Adresse e-mail <span className="opacity-60 lowercase">(facultatif)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="votre.email@domaine.com"
                    className={`w-full p-3 border-2 text-sm text-[#08111e] bg-white placeholder:text-slate-400 focus:outline-none transition-colors ${
                      errors.email ? "border-red-500 bg-red-50" : "border-[#08111e] focus:border-[#234990]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 font-bold mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#08111e] mb-1 font-mono"
                  >
                    Message ou questions <span className="opacity-60 lowercase">(facultatif)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Vos disponibilités pour le rappel, projet de carrière..."
                    className="w-full p-3 border-2 border-[#08111e] text-sm text-[#08111e] bg-white placeholder:text-slate-400 focus:outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full m-btn py-4 text-xs font-black uppercase tracking-wider text-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Traitement en cours...
                      </span>
                    ) : (
                      <span>JE SOUHAITE ÊTRE CONTACTÉ(E)</span>
                    )}
                  </button>
                </div>

                {/* Privacy notice */}
                <p className="text-[11px] text-[#08111e]/70 flex items-center justify-center gap-1.5 pt-1 text-center font-mono">
                  <Lock className="w-3 h-3 text-[#08111e]" />
                  <span>Vos informations sont utilisées uniquement pour vous recontacter au sujet de notre formation.</span>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Right Side Panel: WRITE / WHATSAPP in Royal Blue #234990 */}
        <div className="lg:col-span-3 bg-[#234990] text-white p-6 sm:p-8 flex flex-col justify-between min-h-[220px] lg:min-h-full">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A887] block mb-2">
              Assistance Rapide
            </span>
            <span className="font-heading font-black text-4xl sm:text-5xl uppercase leading-none block mb-4">
              ÉCRIRE
            </span>
            <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              <div>
                <strong className="block text-white uppercase font-mono text-[11px] tracking-wider mb-0.5">
                  WhatsApp Direct :
                </strong>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-link text-[#00A887]"
                >
                  [NUMÉRO À AJOUTER]
                </a>
              </div>
              <div>
                <strong className="block text-white uppercase font-mono text-[11px] tracking-wider mb-0.5">
                  Campus E.S.AERO :
                </strong>
                <span>[ADRESSE À AJOUTER]</span>
              </div>
              <div>
                <strong className="block text-white uppercase font-mono text-[11px] tracking-wider mb-0.5">
                  Réseaux Sociaux :
                </strong>
                <span>[LIENS À AJOUTER]</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/20 text-xs font-mono uppercase tracking-wider text-[#00A887]">
            Admissions Ouvertes 2026
          </div>
        </div>
      </div>
    </section>
  );
}
