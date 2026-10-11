"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/uiHindi";
import { translations } from "@/data/translations";
import {
  Star,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  FileText,
  Truck,
  ExternalLink,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Tag
} from "lucide-react";

export default function PathologyPage() {
  const { language, isGu } = useLanguage();
  const t = translations[language];
  const categoryLabels: Record<string, string> = {
    Routine: t.pathology.filterRoutine,
    Diabetes: t.pathology.filterDiabetes,
    "Biochemistry & Organ Tests": t.pathology.filterOrgan,
    "Thyroid & Hormonal": t.pathology.filterHormonal,
    "Infection Screening": t.pathology.filterInfection,
    "Special Tests": t.pathology.filterSpecial,
    "Full Body Packages": t.pathology.filterPackages,
  };

  const mainWhatsappUrl = `https://wa.me/916353065009?text=${encodeURIComponent(
    uiText(language, "નમસ્તે યુનિટી પેથોલોજી લેબ, મારે બ્લડ ટેસ્ટ / હોમ સેમ્પલ કલેક્શન અંગે માહિતી મેળવવી છે.", "Hello Unity Pathology Laboratory, I would like to inquire about blood tests / home sample collection.")
  )}`;

  return (
    <div className="space-y-14 pb-20 pt-8 sm:pt-10 bg-slate-50/40">
      {/* Lab Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 overflow-hidden border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Rating Banner */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>{language === "gu" ? "5.0 (60 ગૂગલ અભિપ્રાય)" : language === "hi" ? "5.0 (60 Google राय)" : "5.0 (60 Google Reviews)"}</span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {t.pathology.name}
                </h1>
                <p className="text-teal-300 text-sm sm:text-base font-semibold mt-2">
                  {uiText(language, "લોહી અને બીજી તપાસની લેબ · મકરબા, અમદાવાદ", "Clinical Diagnostic Laboratory · Makarba, Ahmedabad")}
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                {uiText(language, "સરખેજ અને મકરબામાં લોહીની તપાસ, તે જ દિવસે વોટ્સએપ પર રિપોર્ટ અને ઘરે આવીને નમૂનો લેવાની સેવા.", "Clinical laboratory diagnostic services in Makarba & Sarkhej, Ahmedabad. Accurate routine blood testing, same-day digital reports, and doorstep sample collection.")}
              </p>

              {/* Verified Trust Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-teal-200 text-xs font-medium flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-teal-400" />
                  {isGu ? "ઘરે આવીને નમૂનો લેવાની સેવા" : language === "hi" ? "घर से नमूना संग्रह" : "Home Sample Collection"}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-teal-200 text-xs font-medium flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-teal-400" />
                  {isGu ? "તે જ દિવસે વોટ્સએપ PDF" : language === "hi" ? "उसी दिन WhatsApp PDF रिपोर्ट" : "Same-Day WhatsApp PDF"}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-teal-200 text-xs font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  {isGu ? "ઓટોમેટેડ એનાલાઇઝર" : language === "hi" ? "स्वचालित जाँच" : "Automated Testing"}
                </span>
              </div>

              {/* Direct Actions */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={mainWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isGu ? "વોટ્સએપ પર માહિતી મેળવો" : language === "hi" ? "व्हाट्सऐप पर पूछताछ करें" : "Inquire on WhatsApp"}</span>
                </a>
                <a
                  href="tel:6353065009"
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>+91 63530 65009</span>
                </a>
                <a
                  href="https://instagram.com/unitypathology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 text-teal-400"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>@unitypathology</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick Lab Stats */}
            <div className="lg:col-span-4 bg-slate-800/90 rounded-2xl p-6 border border-slate-700 shadow-inner space-y-4">
              <div className="space-y-3 pb-3 border-b border-slate-700">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/unity-pathology-logo.png"
                    alt={t.pathology.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-contain p-3"
                    priority
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-base">{language === "gu" ? "યુનિટી પેથોલોજી લેબ" : language === "hi" ? "यूनिटी पैथोलॉजी लैब" : "Unity Pathology Lab"}</h3>
                  <p className="text-xs text-amber-300 font-semibold">⭐ 5.0</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="space-y-1">
                  <span className="text-teal-300 font-medium block">
                    {uiText(language, "સમય (સોમ–શનિ):", "Hours (Mon–Sat):")}
                  </span>
                  <p className="text-white font-semibold">{language === "gu" ? "સવારે ૮:૦૦ – રાત્રે ૯:૦૦" : language === "hi" ? "सुबह 8:00 – रात 9:00" : "8:00 AM – 9:00 PM"}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-teal-300 font-medium block">
                    {uiText(language, "રવિવાર સમય:", "Sunday Hours:")}
                  </span>
                  <p className="text-white font-semibold">{language === "gu" ? "સવારે ૮:૦૦ – બપોરે ૨:૦૦" : language === "hi" ? "सुबह 8:00 – दोपहर 2:00" : "8:00 AM – 2:00 PM"}</p>
                </div>
                <div className="space-y-1 pt-2 border-t border-slate-700">
                  <span className="text-teal-300 font-medium block">
                    {uiText(language, "સરનામું:", "Location:")}
                  </span>
                  <p className="text-slate-200">
                    {language === "en" ? "First floor, Samir residency, 01, Sarkhej roza road, Opp. Mastanbava dargah, Makarba, Ahmedabad 382210" : t.pathology.addressVal}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Sample Collection Callout */}
      <section id="home-collection" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="rounded-2xl bg-teal-50 border border-teal-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Truck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-teal-950">
                {uiText(language, "ઘરે આવીને લોહીનો નમૂનો લેવાની સેવા", "Doorstep Sample Collection Service")}
              </h3>
              <p className="text-xs sm:text-sm text-teal-800 leading-relaxed max-w-2xl">
                {uiText(language, "સરખેજ, મકરબા અને નજીકના વિસ્તારો માટે હોમ સેમ્પલ કલેક્શન ઉપલબ્ધ છે. તમારા અનુકૂળ સમય માટે લેબ ડેસ્ક પર સીધો કોલ અથવા વોટ્સએપ મેસેજ કરો.", "Home blood sample collection is available across Sarkhej, Makarba, and neighboring areas. Contact the lab desk to schedule a morning collection slot.")}
              </p>
            </div>
          </div>
          <a
            href={mainWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{uiText(language, "હોમ સેમ્પલ બુક કરો", "Inquire Home Collection")}</span>
          </a>
        </div>
      </section>

      {/* Featured Profiles & Online Booking Discount */}
      <section id="tests" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            {uiText(language, "મુખ્ય તપાસ અને પેકેજ", "Diagnostic Profiles & Packages")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.pathology.popularPackagesTitle}
          </h2>
          <p className="text-sm text-slate-600">
            {t.pathology.popularPackagesSubtitle}
          </p>
        </div>

        {/* Online Booking Discount Promotion Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white p-6 sm:p-7 shadow-sm border border-teal-700/50 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.pathology.onlineDiscountBadge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {t.pathology.onlineDiscountBannerTitle}
              </h3>
              <p className="text-xs sm:text-sm text-teal-100 max-w-2xl leading-relaxed">
                {t.pathology.onlineDiscountBannerDesc}
              </p>
            </div>
            <a
              href={`https://wa.me/916353065009?text=${encodeURIComponent(
                uiText(language, "નમસ્તે યુનિટી પેથોલોજી લેબ, હું વેબસાઇટ પરથી સંપર્ક કરું છું. ઓનલાઇન બુકિંગ પર શું ડિસ્કાઉન્ટ ઓફર છે તે જણાવશો?", "Hello Unity Pathology Laboratory, I am contacting from the website. Please let me know about the online booking discount offer.")
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{uiText(language, "વોટ્સએપ પર છૂટ વિશે પૂછો", "Claim Discount on WhatsApp")}</span>
            </a>
          </div>
        </div>

        {/* Featured Profiles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "lipid-package",
            "renal-profile",
            "thyroid-package",
            "coagulation-profile",
            "cbc",
            "hba1c"
          ]
            .map((id) => t.pathology.testsList.find((test) => test.id === id))
            .filter(Boolean)
            .map((test) => {
              if (!test) return null;

              const isFastingReq =
                (test.fasting.toLowerCase().includes("fasting required") ||
                  test.fasting.includes("જરૂરી છે") ||
                  test.fasting.includes("ज़रूरी है")) &&
                !test.fasting.toLowerCase().includes("not required");

              const testWhatsapp = `https://wa.me/916353065009?text=${encodeURIComponent(
                language === "hi"
                  ? `नमस्ते यूनिटी पैथोलॉजी लैब, मैं '${test.name}' बुक करना चाहता/चाहती हूँ। कृपया ऑनलाइन बुकिंग की छूट बताएँ।`
                  : isGu
                  ? `નમસ્તે યુનિટી પેથોલોજી લેબ, મારે '${test.name}' માટે બુકિંગ કરવું છે. ઓનલાઇન બુકિંગ ડિસ્કાઉન્ટ ઓફર જણાવશો?`
                  : `Hello Unity Pathology Laboratory, I would like to book the '${test.name}'. Please share the online booking discount offer.`
              )}`;

              return (
                <div
                  key={test.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                        {categoryLabels[test.category] ?? test.category}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-teal-600" />
                        {test.tat}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-3 pt-1">
                      <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-teal-900 transition-colors">
                        {test.name}
                      </h3>
                      {test.price && (
                        <div className="text-right flex-shrink-0">
                          <span className="text-base font-extrabold text-teal-800 block whitespace-nowrap">
                            {test.price}
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold uppercase">
                            {language === "hi" ? "लैब कीमत" : "Lab MRP"}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                      <Tag className="w-3 h-3 text-emerald-600" />
                      <span>{uiText(language, "ઓનલાઇન બુકિંગ પર છૂટ છે", "Online Discount Available")}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {test.desc}
                    </p>

                    {test.includes && test.includes.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          {uiText(language, "શું શું તપાસાશે:", "Includes:")}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {test.includes.map((inc, incIdx) => (
                            <span
                              key={incIdx}
                              className="text-[10px] font-medium text-teal-800 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded"
                            >
                              {inc}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 space-y-1.5 text-[11px] text-slate-500 border-t border-slate-100">
                      <p>
                        <strong className="text-slate-700">{uiText(language, "નમૂનો:", "Sample:")}</strong> {test.sample}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <strong className="text-slate-700">{uiText(language, "તૈયારી:", "Preparation:")}</strong>
                        {isFastingReq ? (
                          <span className="font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                            {test.fasting}
                          </span>
                        ) : (
                          <span className="font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                            {test.fasting}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-teal-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{uiText(language, "તે જ દિવસે વોટ્સએપ", "Same-Day WhatsApp")}</span>
                    </span>
                    <a
                      href={testWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{uiText(language, "બુકિંગ & ડિસ્કાઉન્ટ", "Book with Discount")}</span>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>

        {/* View Full Catalog Button */}
        <div className="text-center pt-2">
          <Link
            href="/tests"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all"
          >
            <span>{t.pathology.exploreAllTestsBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Lab Location & Contact Card */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                {uiText(language, "લેબ સરનામું અને સમય", "Lab Location & Operating Hours")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t.pathology.contactCardTitle}
              </h2>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{t.pathology.addressLabel}</strong>
                    <p className="text-xs text-slate-300 mt-0.5">{t.pathology.addressVal}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white">{t.pathology.phoneLabel}</strong>
                    <a href="tel:6353065009" className="text-xs text-teal-300 hover:text-white font-semibold block">
                      {t.pathology.phoneVal}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white">{t.pathology.hoursLabel}</strong>
                    <p className="text-xs text-slate-300">{t.pathology.hoursVal}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Samir+Residency+Sarkhej+Roza+Road+Makarba+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-semibold text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{uiText(language, "ગૂગલ મેપ્સ પર દિશા જુઓ", "Open in Google Maps")}</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <h3 className="font-bold text-white text-base">
                {uiText(language, "વોટ્સએપ પર માહિતી મેળવો", "WhatsApp Desk Inquiry")}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {uiText(language, "તમારા ડૉક્ટરની પ્રિસ્ક્રિપ્શન અથવા ટેસ્ટનું નામ મોકલીને જરૂરી તૈયારી (દા.ત. ભૂખ્યા પેટે) અને સમય અંગે સીધી માહિતી મેળવો.", "Send your doctor's prescription or test list on WhatsApp to confirm fasting guidelines, report delivery times, and home visit availability.")}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={mainWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{uiText(language, "વોટ્સએપ પર માહિતી પૂછો", "Message on WhatsApp")}</span>
                </a>
                <a
                  href="tel:6353065009"
                  className="py-3 px-5 bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 63530 65009</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
