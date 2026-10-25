"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, CheckCircle2, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { initialSchemes, SchemeItem } from "@/lib/data";

export default function EligibilityChecker() {
  const [beneficiaryType, setBeneficiaryType] = useState<string>("Farmer");
  const [state, setState] = useState<string>("All");
  const [income, setIncome] = useState<string>("under_2.5l");
  const [matches, setMatches] = useState<SchemeItem[] | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();

    const filtered = initialSchemes.filter((scheme) => {
      // Category match
      let catMatch = false;
      if (beneficiaryType === "Farmer" && scheme.category === "Farmer") catMatch = true;
      if (beneficiaryType === "Women" && scheme.category === "Women") catMatch = true;
      if (beneficiaryType === "Student" && scheme.category === "Student") catMatch = true;
      if (beneficiaryType === "Business" && scheme.category === "Business") catMatch = true;
      if (beneficiaryType === "Housing" && scheme.category === "Housing") catMatch = true;
      if (beneficiaryType === "Health" && scheme.category === "Health") catMatch = true;
      if (beneficiaryType === "General") catMatch = true;

      // State match
      let stateMatch = false;
      if (state === "All" || scheme.state === "All India" || scheme.state.toLowerCase() === state.toLowerCase()) {
        stateMatch = true;
      }

      return catMatch && stateMatch;
    });

    setMatches(filtered);
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Instant Interactive Tool</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
          Check Your Government Scheme Eligibility
        </h2>
        <p className="text-sm text-slate-300 mb-8 leading-relaxed">
          Select your details below to instantly find eligible central and state government schemes, subsidies, and financial grants you can apply for today.
        </p>

        <form onSubmit={handleCheck} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {/* Question 1: Who are you? */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-200">I am a / Looking for:</label>
            <select
              value={beneficiaryType}
              onChange={(e) => setBeneficiaryType(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="Farmer">Farmer / Agriculture</option>
              <option value="Women">Woman / Homemaker</option>
              <option value="Student">Student / Scholar</option>
              <option value="Business">Small Business / MSME</option>
              <option value="Housing">Homeowner / Rooftop Solar</option>
              <option value="Health">Health / Senior Citizen</option>
              <option value="General">All Citizens</option>
            </select>
          </div>

          {/* Question 2: State */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-200">State of Residence:</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="All">All India / Central</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Bihar">Bihar</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
            </select>
          </div>

          {/* Question 3: Income */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-200">Annual Family Income:</label>
            <select
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="under_1l">Below ₹1 Lakh</option>
              <option value="under_2.5l">₹1 Lakh – ₹2.5 Lakh</option>
              <option value="under_5l">₹2.5 Lakh – ₹5 Lakh</option>
              <option value="above_5l">Above ₹5 Lakh</option>
            </select>
          </div>

          <div className="sm:col-span-3 pt-2">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-sm rounded-xl transition shadow-lg flex items-center justify-center space-x-2"
            >
              <Calculator className="w-4 h-4 text-slate-950" />
              <span>Find Matching Schemes Now</span>
            </button>
          </div>
        </form>

        {/* Results Area */}
        {matches !== null && (
          <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 transition-all">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Found {matches.length} Eligible Scheme(s) For You</span>
            </h3>

            {matches.length === 0 ? (
              <div className="text-center py-6 text-slate-300 text-sm">
                <AlertCircle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <p>No exact scheme matched this specific combination.</p>
                <Link
                  href="/schemes"
                  className="mt-3 inline-block text-xs font-bold text-blue-400 hover:underline"
                >
                  Browse all active government schemes →
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {matches.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                          {item.state}
                        </span>
                      </div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {item.summary}
                      </p>
                    </div>
                    <Link
                      href={`/schemes/${item.slug}`}
                      className="shrink-0 inline-flex items-center space-x-1 text-xs font-bold text-amber-400 hover:text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 px-3 py-1.5 rounded-lg border border-amber-400/30 transition"
                    >
                      <span>Check Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

