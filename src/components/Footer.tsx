"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/uiHindi";
import {
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  ChevronRight,
  FlaskConical,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();

  const InstagramIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 text-pink-400 flex-shrink-0"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800/80">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
              <FlaskConical className="w-4 h-4 text-teal-400" />
              <span>{uiText(language, "યુનિટી પેથોલોજી લેબોરેટરી", "Unity Pathology Laboratory")}</span>
            </div>
            <div className="inline-flex items-center gap-1 text-xs text-amber-300 font-bold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>{language === "gu" ? "5.0 ★★★★★ ગૂગલ રેટિંગ (60 અભિપ્રાય)" : language === "hi" ? "5.0 ★★★★★ Google रेटिंग (60 राय)" : "5.0 ★★★★★ Highest Google Rating (60 Reviews)"}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {uiText(language, "મશીનથી તપાસ થાય છે અને નિષ્ણાત રિપોર્ટ ચકાસે છે. રિપોર્ટ તે જ દિવસે વોટ્સએપ પર મળી શકે છે.", "Equipped with automated clinical analyzers, barcoded safety tracking, and verified pathologist reporting. Same-day digital delivery on WhatsApp.")}
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-300 bg-teal-950 px-2.5 py-1 rounded-lg border border-teal-800/60">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>{uiText(language, "સરખેજ-મકરબામાં ઘરે આવીને નમૂનો લેવાય છે", "Doorstep Home Sample Collection in Sarkhej & Makarba")}</span>
            </div>
            <div className="pt-1">
              <a
                href="https://instagram.com/unitypathology"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white border border-slate-800 transition-colors"
              >
                <InstagramIcon />
                <span>@unitypathology</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
              {uiText(language, "મુખ્ય તપાસ અને પેકેજ", "Popular Profiles & Packages")}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>{language === "gu" ? "લોહીની પૂરી તપાસ (CBC) — ₹250" : language === "hi" ? "खून की पूरी जाँच (CBC) — ₹250" : "Complete Blood Count (CBC) — ₹250"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>{language === "gu" ? "કોલેસ્ટ્રોલની પૂરી તપાસ — ₹650 (ખાલી પેટે)" : language === "hi" ? "कोलेस्ट्रॉल की पूरी जाँच — ₹650 (खाली पेट)" : "Lipid Profile — Full Panel — ₹650 (Fasting Req.)"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>{language === "gu" ? "કિડનીની પૂરી તપાસ (RFT) — ₹1000" : language === "hi" ? "किडनी की पूरी जाँच (RFT) — ₹1000" : "Renal Profile / Kidney Test (RFT) — ₹1000"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>{language === "gu" ? "થાયરોઇડની પૂરી તપાસ (T3, T4, TSH) — ₹550" : language === "hi" ? "थायरॉइड की पूरी जाँच (T3, T4, TSH) — ₹550" : "Thyroid Profile (T3, T4, TSH) — ₹550"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>{language === "gu" ? "લોહી ગંઠાવાની તપાસ (PT, INR, aPTT) — ₹700" : language === "hi" ? "खून जमने की जाँच (PT, INR, aPTT) — ₹700" : "Coagulation Profile (PT, INR, aPTT) — ₹700"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>{language === "gu" ? "છેલ્લા 3 મહિનાની બ્લડ સુગર (HbA1c) — ₹500" : language === "hi" ? "पिछले 3 महीनों की ब्लड शुगर (HbA1c) — ₹500" : "HbA1c & Diabetes Monitoring — ₹500"}</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/tests"
                className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-bold transition-colors"
              >
                <span>{uiText(language, "બધી 30+ તપાસ અને ભાવ જુઓ", "View All 30+ Tests & Full Price List")}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
              {uiText(language, "લેબ સરનામું અને સમય", "Lab Location & Collection Desk")}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{language === "gu" ? "પહેલો માળ, સમીર રેસિડેન્સી, 01, સરખેજ રોઝા રોડ, મસ્તાનબાવા દરગાહ સામે, મકરબા, અમદાવાદ 382210" : language === "hi" ? "पहली मंज़िल, समीर रेज़िडेंसी, 01, सरखेज रोज़ा रोड, मस्तानबावा दरगाह के सामने, मकरबा, अहमदाबाद 382210" : "1st Floor, Samir Residency, 01, Sarkhej Roza Rd, Opp. Mastanbava Dargah, Makarba, Ahmedabad 382210"}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="tel:6353065009" className="hover:text-white transition-colors font-semibold text-slate-200">
                  +91 63530 65009
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>{language === "gu" ? "સોમ–શનિ: સવારે ૮:૦૦ – રાત્રે ૯:૦૦ | રવિ: સવારે ૮:૦૦ – બપોરે ૨:૦૦" : language === "hi" ? "सोम–शनि: सुबह 8:00 – रात 9:00 | रवि: सुबह 8:00 – दोपहर 2:00" : "Mon–Sat: 8:00 AM – 9:00 PM | Sun: 8:00 AM – 2:00 PM"}</span>
              </li>
            </ul>
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href="https://wa.me/916353065009?text=Hello%20Unity%20Pathology%20Lab,%20I%20would%20like%20to%20book%20home%20sample%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 bg-teal-700 hover:bg-teal-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{uiText(language, "હોમ સેમ્પલ બુક કરો", "Book Home Collection")}</span>
              </a>
              <a
                href="https://maps.google.com/?q=Samir+Residency+Sarkhej+Roza+Road+Makarba+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-semibold border border-slate-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                <span>{uiText(language, "નકશો", "Map")}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {language === "gu" ? "યુનિટી પેથોલોજી લેબ. બધા હક સુરક્ષિત." : language === "hi" ? "यूनिटी पैथोलॉजी लैब। सभी अधिकार सुरक्षित।" : "Unity Pathology Laboratory. All Rights Reserved."}</p>
            <p className="text-[11px] text-slate-500">
              {uiText(language, "તપાસની માહિતી: નિષ્ણાત રિપોર્ટ ચકાસે છે. તે જ દિવસે વોટ્સએપ પર રિપોર્ટ મળી શકે છે.", "Diagnostic Notice: Tests are processed using automated clinical analyzers and verified by certified pathology professionals.")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
