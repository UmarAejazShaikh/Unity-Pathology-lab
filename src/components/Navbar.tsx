"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Languages,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const { language, setLanguage, isGu } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeLinks =
    pathname !== "/tests"
      ? [{ href: "/tests", label: isGu ? "લેબ ટેસ્ટ & ભાવ પત્રક" : language === "hi" ? "लैब टेस्ट और पैकेज की कीमतें" : "Lab Test & Package Price List" }]
      : [];

  const labContact = {
    phone: "6353065009",
    phoneDisplay: "+91 63530 65009",
    whatsapp:
      "https://wa.me/916353065009?text=Hello%20Unity%20Pathology%20Lab,%20I%20would%20like%20to%20inquire%20about%20tests%20/%20sample%20collection.",
    callLabel: isGu ? "લેબમાં કૉલ કરો" : language === "hi" ? "लैब को कॉल करें" : "Call Lab",
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 sm:min-h-20 py-2 sm:py-0">
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            <Link
              href="/"
              className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden"
            >
              <Image
                src="/images/unity-pathology-logo.png"
                alt="Unity Pathology Laboratory logo"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </Link>
            <div className="flex flex-col min-w-0">
              <Link
                href="/"
                className="font-extrabold text-xs sm:text-lg text-slate-900 tracking-tight leading-tight hover:text-teal-800 transition-colors line-clamp-2"
              >
                <span className="sm:hidden">{isGu ? "યુનિટી પેથોલોજી લેબ" : language === "hi" ? "यूनिटी पैथोलॉजी लैब" : "Unity Pathology Lab"}</span>
                <span className="hidden sm:inline">{isGu ? "યુનિટી પેથોલોજી લેબોરેટરી" : language === "hi" ? "यूनिटी पैथोलॉजी लैबोरेटरी" : "Unity Pathology Laboratory"}</span>
              </Link>
            </div>
          </div>

          {activeLinks.length > 0 && (
            <nav className="hidden lg:flex items-center gap-2">
              {activeLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-xs xl:text-sm transition-all shadow-2xs text-teal-800 bg-teal-50/80 hover:bg-teal-100 hover:text-teal-900 border border-teal-200 font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            <div className="relative flex-shrink-0">
              <Languages className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-700" aria-hidden="true" />
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as "en" | "gu" | "hi")}
                aria-label="Choose language / भाषा चुनें / ભાષા પસંદ કરો"
                className="w-[7.5rem] sm:w-[8.5rem] appearance-none rounded-full border border-slate-200 bg-slate-100 py-2 pl-8 pr-7 text-xs font-bold text-slate-800 shadow-2xs cursor-pointer hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <option value="en">English</option>
                <option value="gu">ગુજરાતી</option>
                <option value="hi">हिन्दी</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-700" aria-hidden="true" />
            </div>

            <a
              href={labContact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex px-3.5 py-2 text-xs xl:text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${labContact.phone}`}
              className="p-2 sm:px-3.5 sm:py-2 text-xs xl:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-1.5"
              title={labContact.callLabel}
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{labContact.callLabel}</span>
            </a>

            {activeLinks.length > 0 && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {mobileMenuOpen && activeLinks.length > 0 && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {activeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
