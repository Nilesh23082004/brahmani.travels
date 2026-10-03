export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "services-offered",
    question: "What services does Brahmani Travels offer?",
    answer:
      "Brahmani Travels provides comprehensive mobility and travel solutions across Ahmedabad, Gujarat, and nationwide across India. Our core services include local city taxi rides, airport pick-up and drop-off, outstation round-trips and one-way drops, corporate cab rentals, wedding car convoys, and group tours with our 11 to 20-seater Tempo Travellers and bus arrangements.",
  },
  {
    id: "how-to-book",
    question: "How can I book a car?",
    answer:
      "Booking with us is quick, direct, and hassle-free without middlemen. You can book by calling our direct helpline at +91 89801 79677, sending a WhatsApp message with your travel itinerary, or filling out the booking form on our website. We provide instant quote confirmation and driver allocation details immediately.",
  },
  {
    id: "payment-methods",
    question: "What payment methods are accepted?",
    answer:
      "We accept all major convenient payment methods including UPI (Google Pay, PhonePe, Paytm), Net Banking, IMPS/NEFT, Debit & Credit cards, and Cash. Clear digital tax invoices and GST receipts are provided for all individual and corporate bookings.",
  },
  {
    id: "cancel-or-modify",
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, we provide flexible cancellation and modification policies. If your travel schedule changes, simply notify us via phone call or WhatsApp as early as possible. We will happily reschedule your ride or process your cancellation with full transparency and zero surprise fees.",
  },
];
