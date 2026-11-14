// Google Analytics Event Tracking Utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackEvent(
  eventName: string,
  eventParams: Record<string, any> = {}
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
}

export function trackCallClick(source: string) {
  trackEvent("contact_call_click", {
    event_category: "Engagement",
    event_label: source,
  });
}

export function trackWhatsAppClick(source: string) {
  trackEvent("contact_whatsapp_click", {
    event_category: "Engagement",
    event_label: source,
  });
}

export function trackBookingSubmit(vehicle: string) {
  trackEvent("booking_form_submit", {
    event_category: "Conversion",
    event_label: vehicle,
  });
}

