"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  FileText,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
} from "lucide-react";
import { contactSchema, ContactFormData } from "@/lib/validations/booking";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";

export interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [submissionState, setSubmissionState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
      confirm_website: "",
    },
  });

  const [whatsAppUrl, setWhatsAppUrl] = useState<string>("");

  const onSubmit = (data: ContactFormData) => {
    setErrorMessage("");

    try {
      const cleanCustomerMobile = data.mobile.replace(/\D/g, "");
      const msgLines = [
        `*📩 NEW INQUIRY - BRAHMANI TRAVELS*`,
        `━━━━━━━━━━━━━━━━━━━━`,
        `👤 *Name:* ${data.fullName}`,
        `📞 *Mobile:* +91 ${cleanCustomerMobile}`,
        data.email ? `📧 *Email:* ${data.email}` : null,
        `📌 *Subject:* ${data.subject}`,
        `💬 *Message:* ${data.message}`,
        `━━━━━━━━━━━━━━━━━━━━`,
        `_Sent via Brahmani Travels Contact Form_`,
      ].filter(Boolean);

      const cleanBusinessNumber =
        siteConfig.phoneRaw.replace(/\D/g, "") || "918980179677";
      const targetWhatsAppUrl = `https://wa.me/${cleanBusinessNumber}?text=${encodeURIComponent(
        msgLines.join("\n")
      )}`;

      setWhatsAppUrl(targetWhatsAppUrl);
      setSubmissionState("success");
      reset();

      if (typeof window !== "undefined") {
        window.open(targetWhatsAppUrl, "_blank", "noopener,noreferrer");
      }

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => {});
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please call our team directly.";
      setErrorMessage(msg);
      setSubmissionState("error");
    }
  };

  return (
    <div
      className={cn(
        "bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-navy/5 p-6 sm:p-8 relative overflow-hidden",
        className
      )}
    >
      {/* Ambient gold glow at top */}
      <div
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-28 bg-gold/10 blur-2xl rounded-full"
        aria-hidden="true"
      />

      {submissionState === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-10 text-center flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-50 border-4 border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/10">
            <WhatsAppIcon className="w-8 h-8 text-emerald-600" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1.5">
            Connecting on WhatsApp
          </span>

          <h3 className="font-serif text-2xl font-bold text-navy-deep mb-2">
            Message Prepared For WhatsApp
          </h3>

          <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed mb-6">
            We are opening WhatsApp so our team can answer your questions immediately. Click the button below if it didn&apos;t open:
          </p>

          {whatsAppUrl && (
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all mb-6"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Send Message on WhatsApp</span>
            </a>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href={siteConfig.phoneTel}
              leftIcon={<Phone className="w-4 h-4" />}
            >
              Call {siteConfig.phone}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSubmissionState("idle")}
            >
              Send Another Message
            </Button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Honeypot field */}
          <input
            type="text"
            {...register("confirm_website")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold-dark block mb-1">
              Send an Enquiry
            </span>
            <h3 className="font-serif text-2xl font-bold text-navy-deep">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Have a special itinerary or business request? Leave your message below.
            </p>
          </div>

          {/* Error Notice */}
          {submissionState === "error" && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-xs sm:text-sm">Unable to Send Message</p>
                <p className="text-xs mt-0.5">{errorMessage}</p>
                <div className="mt-2.5">
                  <a
                    href={siteConfig.phoneTel}
                    className="inline-flex items-center gap-1.5 font-bold text-xs bg-rose-600 text-white px-3 py-1.5 rounded-lg shadow-sm hover:bg-rose-700"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call {siteConfig.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Name & Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contactFullName"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="contactFullName"
                  type="text"
                  placeholder="e.g. Ramesh Patel"
                  {...register("fullName")}
                  className={cn(
                    "w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30",
                    errors.fullName ? "border-rose-400 bg-rose-50/20" : "border-slate-300"
                  )}
                />
              </div>
              {errors.fullName && (
                <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.fullName.message}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contactMobile"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
              >
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 font-bold text-xs">
                  +91
                </div>
                <input
                  id="contactMobile"
                  type="tel"
                  maxLength={10}
                  placeholder="98765 43210"
                  {...register("mobile")}
                  className={cn(
                    "w-full pl-12 pr-3.5 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30",
                    errors.mobile ? "border-rose-400 bg-rose-50/20" : "border-slate-300"
                  )}
                />
              </div>
              {errors.mobile && (
                <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.mobile.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Email & Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contactEmail"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
              >
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="contactEmail"
                  type="email"
                  placeholder="name@example.com"
                  {...register("email")}
                  className={cn(
                    "w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30",
                    errors.email ? "border-rose-400 bg-rose-50/20" : "border-slate-300"
                  )}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contactSubject"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
              >
                Subject / Trip Type <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <FileText className="w-4 h-4" />
                </div>
                <input
                  id="contactSubject"
                  type="text"
                  placeholder="e.g. Somnath Tour / Wedding Bus Booking"
                  {...register("subject")}
                  className={cn(
                    "w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30",
                    errors.subject ? "border-rose-400 bg-rose-50/20" : "border-slate-300"
                  )}
                />
              </div>
              {errors.subject && (
                <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.subject.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contactMessage"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
            >
              Message / Requirements <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                <MessageSquare className="w-4 h-4" />
              </div>
              <textarea
                id="contactMessage"
                rows={4}
                placeholder="Tell us about your travel dates, passenger count, destinations, or specific vehicle preferences..."
                {...register("message")}
                className={cn(
                  "w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 resize-none",
                  errors.message ? "border-rose-400 bg-rose-50/20" : "border-slate-300"
                )}
              />
            </div>
            {errors.message && (
              <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          {/* Submit */}
          <div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isFullWidth
              isLoading={submissionState === "loading"}
              rightIcon={<Send className="w-4 h-4" />}
              className="font-bold shadow-lg shadow-gold/20"
            >
              {submissionState === "loading" ? "Sending Message..." : "Send Message"}
            </Button>
            <p className="text-center text-[11px] text-slate-400 mt-2">
              We respond promptly within business hours. For urgent travel, please call directly.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
