"use client";

import React from "react";
import { BookingForm } from "@/components/forms/BookingForm";

export function QuickQuoteBar() {
  return (
    <div className="w-full">
      <BookingForm
        title="Book Your Ride"
        subtitle="Fill in your travel details below to send directly to our WhatsApp for instant booking."
      />
    </div>
  );
}
