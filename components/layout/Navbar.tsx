"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll detection for transparent -> frosted glass transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open & listen for Escape key
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const navLinks = siteConfig.navLinks;

  // Drawer animation variants
  const drawerVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        when: "afterChildren" as const,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const navItemVariants = {
    closed: { opacity: 0, x: 25 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm py-2.5 sm:py-3 border-b border-slate-200/80"
            : "bg-white/80 backdrop-blur-md py-3.5 sm:py-4 border-b border-slate-200/60"
        )}
      >
        <Container size="default">
          <nav
            className="flex items-center justify-between"
            aria-label="Main Navigation"
          >
            {/* Left: Official Brand Logo */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xl py-1 shrink-0"
              aria-label={`${siteConfig.name} Home`}
            >
              <div className="relative h-10 sm:h-12 w-36 sm:w-48">
                <Image
                  src="/logo.png"
                  alt={`${siteConfig.name} - Cab & Car Rental`}
                  fill
                  priority
                  unoptimized
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 144px, 192px"
                />
              </div>
            </Link>

            {/* Center: Desktop Nav Links with Animated Gold Underline */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                      isActive
                        ? "text-navy"
                        : "text-slate-600 hover:text-navy hover:bg-navy/5"
                    )}
                  >
                    <span className="relative z-10">{link.title}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 inset-x-2 h-0.5 rounded-full bg-gradient-to-r from-[#E8C468] via-[#C9962E] to-[#A97812]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right: Both WhatsApp & Call Buttons + Mobile Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* WhatsApp Button with Official WhatsApp Icon */}
              <a
                href={siteConfig.whatsAppUrl || "https://wa.me/918980179677"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center justify-center gap-1.5 h-9 px-2.5 sm:px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm shadow-emerald-600/20 transition-all duration-200 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span className="hidden sm:inline font-bold">WhatsApp</span>
              </a>

              {/* Normal Sized Golden Call Button */}
              <a
                href={siteConfig.phoneTel}
                aria-label={`Call ${siteConfig.name} at ${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-1.5 h-9 px-2.5 sm:px-3 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-105 text-slate-950 text-xs font-bold shadow-sm shadow-gold/20 transition-all duration-200 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-slate-950" />
                <span className="hidden sm:inline">Call Now</span>
              </a>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors"
                aria-label="Open mobile navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Drawer (Deep Navy Full-Screen Slide-in) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-in Drawer Container */}
            <motion.div
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 right-0 w-full max-w-sm sm:max-w-md bg-white text-slate-800 shadow-2xl border-l border-slate-200 flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Top Header */}
              <div className="relative z-10 px-6 pt-6 pb-4 flex items-center justify-between border-b border-slate-100">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center"
                  aria-label={`${siteConfig.name} Home`}
                >
                  <div className="relative h-10 w-44">
                    <Image
                      src="/logo.png"
                      alt={siteConfig.name}
                      fill
                      className="object-contain object-left"
                      sizes="176px"
                    />
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors"
                  aria-label="Close mobile navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Big Nav Links with Staggered Reveal */}
              <div className="relative z-10 px-6 py-8 flex-1 flex flex-col justify-center">
                <nav className="space-y-4" aria-label="Mobile Navigation Links">
                  {navLinks.map((link) => {
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href));

                    return (
                      <motion.div key={link.href} variants={navItemVariants}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "group flex items-center justify-between py-2 text-2xl font-serif font-bold tracking-wide transition-colors",
                            isActive
                              ? "text-gold-dark"
                              : "text-slate-800 hover:text-gold-dark"
                          )}
                        >
                          <span>{link.title}</span>
                          <ArrowRight
                            className={cn(
                              "w-5 h-5 transition-transform duration-300",
                              isActive
                                ? "text-gold-dark translate-x-1"
                                : "text-slate-300 group-hover:text-gold-dark group-hover:translate-x-1"
                            )}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Gold Gradient Hairline Divider */}
                <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#C9962E] to-transparent opacity-30" />

                {/* Call & WhatsApp Action Buttons */}
                <div className="space-y-3">
                  <Button
                    variant="primary"
                    size="lg"
                    isFullWidth
                    href={siteConfig.phoneTel}
                    leftIcon={<Phone className="w-4 h-4" />}
                  >
                    Call {siteConfig.phone}
                  </Button>

                  <a
                    href={siteConfig.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-md shadow-emerald-700/20 transition-all duration-200 text-base"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Drawer Bottom Address */}
              <div className="relative z-10 px-6 py-6 border-t border-slate-100 bg-slate-50 text-xs text-slate-600 space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{siteConfig.address.full}</p>
                </div>
                <div className="pt-2 text-[11px] text-slate-500 font-medium">
                  <span>Contact: {siteConfig.contactPerson}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
