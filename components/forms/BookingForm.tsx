"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Users,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  Car as CarIcon,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { fleet } from "@/data/fleet";
import { siteConfig } from "@/data/site";
import { bookingInputSchema, BookingInputValues } from "@/lib/validations/booking";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface BookingFormProps {
  initialCarSlug?: string;
  className?: string;
  showHeader?: boolean;
  title?: string;
  subtitle?: string;
}

export function BookingForm({
  initialCarSlug = "swift-dzire",
  className,
  showHeader = true,
  title = "Book Your Ride",
  subtitle = "Fill in your journey details below. We will instantly connect with you on WhatsApp.",
}: BookingFormProps) {
  const initialCar =
    fleet.find((c) => c.slug === initialCarSlug) || fleet[0];

  // 12-hour format pickup time state
  const [timeHour, setTimeHour] = useState<string>("09");
  const [timeMinute, setTimeMinute] = useState<string>("00");
  const [timePeriod, setTimePeriod] = useState<"AM" | "PM">("AM");

  const [submissionState, setSubmissionState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [whatsAppUrl, setWhatsAppUrl] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<BookingInputValues | null>(null);

  // Get today's date formatted as YYYY-MM-DD for min date
  const todayString = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<BookingInputValues>({
    resolver: zodResolver(bookingInputSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      carSlug: initialCar.slug,
      carName: initialCar.name,
      pickupLocation: "",
      dropLocation: "",
      travelDate: todayString,
      pickupTime: "09:00 AM",
      passengers: "4",
      message: "",
      confirm_website: "",
    },
  });

  // Synchronize 12-hour time into form pickupTime
  useEffect(() => {
    setValue("pickupTime", `${timeHour}:${timeMinute} ${timePeriod}`);
  }, [timeHour, timeMinute, timePeriod, setValue]);

  // Watch carSlug changes to keep selectedCar in sync safely
  const watchedCarSlug = useWatch({
    control,
    name: "carSlug",
  });

  const selectedCar = useMemo(() => {
    return (
      fleet.find((c) => c.slug === watchedCarSlug) ||
      fleet.find((c) => c.slug === initialCarSlug) ||
      fleet[0]
    );
  }, [watchedCarSlug, initialCarSlug]);

  // Synchronize when initialCarSlug changes
  useEffect(() => {
    if (initialCarSlug && fleet.some((c) => c.slug === initialCarSlug)) {
      setValue("carSlug", initialCarSlug);
      setValue("carName", (fleet.find((c) => c.slug === initialCarSlug) || fleet[0]).name);
    }
  }, [initialCarSlug, setValue]);

  // Handle form submission: Open directly in WhatsApp
  const onSubmit = (data: BookingInputValues) => {
    setErrorMessage("");

    try {
      const cleanCustomerMobile = data.mobile.replace(/\D/g, "");
      const fullPickupTime = `${timeHour}:${timeMinute} ${timePeriod}`;

      // Build structured WhatsApp booking message
      const msgLines = [
        `*🚕 NEW CAB BOOKING REQUEST*`,
        `*Brahmani Travels, Ahmedabad*`,
        `━━━━━━━━━━━━━━━━━━━━`,
        `🚗 *Vehicle:* ${selectedCar.name} (₹${selectedCar.ratePerKm}/Km)`,
        `👤 *Customer Name:* ${data.fullName}`,
        `📞 *Customer Mobile:* +91 ${cleanCustomerMobile}`,
        data.email ? `📧 *Email:* ${data.email}` : null,
        `📍 *Pickup Location:* ${data.pickupLocation}`,
        `📍 *Drop Location:* ${data.dropLocation}`,
        `📅 *Travel Date:* ${data.travelDate}`,
        `⏰ *Pickup Time:* ${fullPickupTime}`,
        `👥 *Passengers:* ${data.passengers || "1"}`,
        data.message ? `📝 *Special Instructions:* ${data.message}` : null,
        `━━━━━━━━━━━━━━━━━━━━`,
        `_Sent via Brahmani Travels Online Booking_`,
      ].filter(Boolean);

      const messageText = msgLines.join("\n");
      const cleanBusinessNumber =
        siteConfig.phoneRaw.replace(/\D/g, "") || "918980179677";
      const targetWhatsAppUrl = `https://wa.me/${cleanBusinessNumber}?text=${encodeURIComponent(
        messageText
      )}`;

      setWhatsAppUrl(targetWhatsAppUrl);
      setSubmittedData({
        ...data,
        carName: selectedCar.name,
        pickupTime: fullPickupTime,
      });
      setSubmissionState("success");

      // Automatically launch WhatsApp in new tab/app
      if (typeof window !== "undefined") {
        window.open(targetWhatsAppUrl, "_blank", "noopener,noreferrer");
      }

      // Optional background log to API (does not block user or fail UI)
      fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          carName: selectedCar.name,
          pickupTime: fullPickupTime,
        }),
      }).catch(() => {
        // Silently ignore email/logging errors because WhatsApp is the primary channel
      });
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Unable to prepare WhatsApp message. Please call us directly.";
      setErrorMessage(msg);
      setSubmissionState("error");
    }
  };

  const handleReset = () => {
    setSubmissionState("idle");
    setErrorMessage("");
    reset();
    setValue("travelDate", todayString);
    setValue("pickupTime", "09:00 AM");
    setValue("passengers", "4");
    setTimeHour("09");
    setTimeMinute("00");
    setTimePeriod("AM");
  };

  return (
    <div
      className={cn(
        "bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-navy/5 p-6 sm:p-10 relative overflow-hidden",
        className
      )}
    >
      {/* Subtle gold glow accent at top */}
      <div
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-32 bg-gold/10 blur-2xl rounded-full"
        aria-hidden="true"
      />

      {submissionState === "success" ? (
        /* Animated WhatsApp Success Confirmation State */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-10 sm:py-14 text-center flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-5 shadow-xl shadow-emerald-500/10">
            <WhatsAppIcon className="w-10 h-10 text-emerald-600" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
            Details Ready on WhatsApp
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-deep mb-3">
            Connecting With Our Desk...
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
            We are opening WhatsApp so you can send your booking request directly to our owner. If WhatsApp didn&apos;t open automatically, click the button below:
          </p>

          {/* Big Green Direct WhatsApp Button */}
          {whatsAppUrl && (
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:scale-105 active:scale-95 mb-6"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Send Booking on WhatsApp Now</span>
            </a>
          )}

          {/* Booking Summary Box */}
          {submittedData && (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left w-full max-w-md mb-6 space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Vehicle:</span>
                <span className="font-bold text-navy">{submittedData.carName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Route:</span>
                <span className="font-semibold text-slate-800">
                  {submittedData.pickupLocation} → {submittedData.dropLocation}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Travel Date & Time:</span>
                <span className="font-semibold text-slate-800">
                  {submittedData.travelDate} ({submittedData.pickupTime})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Passengers:</span>
                <span className="font-semibold text-slate-800">
                  {submittedData.passengers} {Number(submittedData.passengers) === 1 ? "Passenger" : "Passengers"}
                </span>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="outline"
              size="md"
              href={siteConfig.phoneTel}
              leftIcon={<Phone className="w-4 h-4 text-navy" />}
            >
              Call Us: {siteConfig.phone}
            </Button>
            <Button
              variant="ghost"
              size="md"
              onClick={handleReset}
            >
              Book Another Ride
            </Button>
          </div>
        </motion.div>
      ) : (
        /* Booking Form */
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Hidden Honeypot Field */}
          <input
            type="text"
            {...register("confirm_website")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {showHeader && (
            <div className="border-b border-slate-100 pb-4 mb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold mb-2">
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct WhatsApp Booking · Instant Confirmation</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-deep">
                {title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {subtitle}
              </p>
            </div>
          )}

          {/* Error Notice if any */}
          {errorMessage && (
            <div
              role="alert"
              className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Unable to process booking</p>
                <p className="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Row 1: Vehicle Selector */}
          <div>
            <label
              htmlFor="carSlug"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Select Vehicle <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <CarIcon className="w-4 h-4" />
              </div>
              <select
                id="carSlug"
                {...register("carSlug")}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm font-semibold transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 appearance-none cursor-pointer"
              >
                {fleet.map((car) => (
                  <option key={car.slug} value={car.slug}>
                    {car.name} ({car.seats} Seats) — ₹{car.ratePerKm}/Km
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Customer Full Name & Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Nilesh Valand"
                  {...register("fullName")}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30",
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

            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <span className="text-xs font-bold text-slate-500">+91</span>
                </div>
                <input
                  id="mobile"
                  type="tel"
                  maxLength={10}
                  placeholder="9876543210"
                  {...register("mobile")}
                  className={cn(
                    "w-full pl-12 pr-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm font-semibold transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30",
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

          {/* Row 3: Pickup Location & Drop Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Pickup Location */}
            <div>
              <label
                htmlFor="pickupLocation"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Pickup Location <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                </div>
                <input
                  id="pickupLocation"
                  type="text"
                  placeholder="e.g. Nava Naroda / Airport"
                  {...register("pickupLocation")}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30",
                    errors.pickupLocation ? "border-rose-400 bg-rose-50/20" : "border-slate-300"
                  )}
                />
              </div>
              {errors.pickupLocation && (
                <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.pickupLocation.message}</span>
                </p>
              )}
            </div>

            {/* Drop Location */}
            <div>
              <label
                htmlFor="dropLocation"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Drop Location / Destination <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <MapPin className="w-4 h-4 text-rose-500" />
                </div>
                <input
                  id="dropLocation"
                  type="text"
                  placeholder="e.g. Udaipur / Somnath / Surat"
                  {...register("dropLocation")}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30",
                    errors.dropLocation ? "border-rose-400 bg-rose-50/20" : "border-slate-300"
                  )}
                />
              </div>
              {errors.dropLocation && (
                <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.dropLocation.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Travel Date, Pickup Time (12-Hour AM/PM), Passengers (Manual Input) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Travel Date */}
            <div>
              <label
                htmlFor="travelDate"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Travel Date <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <input
                  id="travelDate"
                  type="date"
                  min={todayString}
                  {...register("travelDate")}
                  className={cn(
                    "w-full pl-10 pr-3 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30",
                    errors.travelDate ? "border-rose-400 bg-rose-50/20" : "border-slate-300"
                  )}
                />
              </div>
              {errors.travelDate && (
                <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.travelDate.message}</span>
                </p>
              )}
            </div>

            {/* Pickup Time (12-Hour format with AM/PM) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center justify-between">
                <span>Pickup Time</span>
                <span className="text-[11px] font-semibold text-slate-500 font-sans">
                  {timeHour}:{timeMinute} {timePeriod}
                </span>
              </label>
              <div className="flex items-center gap-1.5">
                {/* Hour Select */}
                <div className="relative flex-1">
                  <select
                    id="pickupHour"
                    value={timeHour}
                    onChange={(e) => setTimeHour(e.target.value)}
                    className="w-full py-3 px-2 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm font-semibold transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 text-center cursor-pointer"
                    aria-label="Hour (1-12)"
                  >
                    {Array.from({ length: 12 }, (_, i) => {
                      const h = String(i + 1).padStart(2, "0");
                      return (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <span className="font-bold text-slate-400 text-base">:</span>

                {/* Minute Select */}
                <div className="relative flex-1">
                  <select
                    id="pickupMinute"
                    value={timeMinute}
                    onChange={(e) => setTimeMinute(e.target.value)}
                    className="w-full py-3 px-2 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm font-semibold transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 text-center cursor-pointer"
                    aria-label="Minutes"
                  >
                    {["00", "15", "30", "45"].map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                {/* AM / PM Segmented Control */}
                <div className="flex rounded-xl border border-slate-300 bg-slate-100 p-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => setTimePeriod("AM")}
                    className={cn(
                      "px-2.5 py-1.5 text-xs font-bold rounded-lg transition-all",
                      timePeriod === "AM"
                        ? "bg-gold text-navy-deep shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                    aria-label="Set AM"
                  >
                    AM
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimePeriod("PM")}
                    className={cn(
                      "px-2.5 py-1.5 text-xs font-bold rounded-lg transition-all",
                      timePeriod === "PM"
                        ? "bg-gold text-navy-deep shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                    aria-label="Set PM"
                  >
                    PM
                  </button>
                </div>
              </div>
            </div>

            {/* No. of Passengers - Manual input */}
            <div>
              <label
                htmlFor="passengers"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Passengers
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Users className="w-4 h-4" />
                </div>
                <input
                  id="passengers"
                  type="number"
                  min={1}
                  max={60}
                  placeholder="e.g. 4"
                  {...register("passengers")}
                  className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm font-semibold transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>
            </div>
          </div>

          {/* Message / Special Requests */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Special Instructions / Luggage Needs{" "}
              <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Need luggage space, child seat, multiple pickups, or special tour package..."
              {...register("message")}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm transition-all focus:bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 resize-none"
            />
          </div>

          {/* Submit Button: Direct WhatsApp Submission */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
              <span>Submit Booking Request</span>
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2.5">
              Clicking submit opens WhatsApp directly with our desk to confirm your chauffeur. No payment required now.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
