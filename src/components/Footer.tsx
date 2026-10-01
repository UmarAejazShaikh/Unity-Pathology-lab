"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
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
  const { isGu } = useLanguage();

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
              <span>{isGu ? "યુનિટી પેથોલોજી લેબોરેટરી" : "Unity Pathology Laboratory"}</span>
            </div>
            <div className="inline-flex items-center gap-1 text-xs text-amber-300 font-bold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>5.0 ★★★★★ Highest Google Rating (60 Reviews)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isGu
                ? "અત્યાધુનિક ઓટોમેટેડ મશીનો, બારકોડેડ સેમ્પલ સુરક્ષા અને સર્ટિફાઇડ પેથોલોજિસ્ટ દ્વારા ચકાસાયેલ રિપોર્ટ. તે જ દિવસે વોટ્સએપ પર સચોટ રિપોર્ટ મેળવો."
                : "Equipped with automated clinical analyzers, barcoded safety tracking, and verified pathologist reporting. Same-day digital delivery on WhatsApp."}
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-300 bg-teal-950 px-2.5 py-1 rounded-lg border border-teal-800/60">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>{isGu ? "સરખેજ-મકરબામાં હોમ સેમ્પલ કલેક્શન" : "Doorstep Home Sample Collection in Sarkhej & Makarba"}</span>
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
              {isGu ? "મુખ્ય લેબ પ્રોફાઇલ અને પેકેજ" : "Popular Profiles & Packages"}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>Complete Blood Count (CBC) — ₹250</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>Lipid Profile — Full Panel — ₹650 (Fasting Req.)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>Renal Profile / Kidney Test (RFT) — ₹1000</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>Thyroid Profile (T3, T4, TSH) — ₹550</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>Coagulation Profile (PT, INR, aPTT) — ₹700</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-teal-400" />
                <span>HbA1c & Diabetes Monitoring — ₹500</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/tests"
                className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-bold transition-colors"
              >
                <span>{isGu ? "તમામ 30+ ટેસ્ટ અને ભાવ સૂચિ જુઓ" : "View All 30+ Tests & Full Price List"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
              {isGu ? "લેબ સરનામું અને સમય" : "Lab Location & Collection Desk"}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>1st Floor, Samir Residency, 01, Sarkhej Roza Rd, Opp. Mastanbava Dargah, Makarba, Ahmedabad 382210</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="tel:6353065009" className="hover:text-white transition-colors font-semibold text-slate-200">
                  +91 63530 65009
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Mon–Sat: 8:00 AM – 9:00 PM | Sun: 8:00 AM – 2:00 PM</span>
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
                <span>{isGu ? "હોમ સેમ્પલ બુક કરો" : "Book Home Collection"}</span>
              </a>
              <a
                href="https://maps.google.com/?q=Samir+Residency+Sarkhej+Roza+Road+Makarba+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-semibold border border-slate-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                <span>{isGu ? "નકશો" : "Map"}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Unity Pathology Laboratory. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-500">
              {isGu
                ? "ડાયગ્નોસ્ટિક સૂચના: તમામ રિપોર્ટ્સ સર્ટિફાઇડ પેથોલોજી સ્ટાન્ડર્ડ મુજબ ચકાસાય છે. સેમ-ડે વોટ્સએપ રિપોર્ટ ઉપલબ્ધ."
                : "Diagnostic Notice: Tests are processed using automated clinical analyzers and verified by certified pathology professionals."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
