"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Save,
  Layers,
  Sparkles,
} from "lucide-react";

export default function NewSchemePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Farmer");
  const [type, setType] = useState("Central");
  const [state, setState] = useState("All India");
  const [beneficiary, setBeneficiary] = useState("");
  const [officialPortalUrl, setOfficialPortalUrl] = useState("https://");
  const [applicationDeadline, setApplicationDeadline] = useState("Ongoing");
  const [helplineNumber, setHelplineNumber] = useState("");
  const [featured, setFeatured] = useState(false);

  // Dynamic Lists
  const [benefits, setBenefits] = useState<string[]>([
    "Direct cash assistance into Aadhaar-linked bank account",
  ]);
  const [eligibility, setEligibility] = useState<string[]>([
    "Must be a permanent citizen with valid Aadhaar",
  ]);
  const [documentsRequired, setDocumentsRequired] = useState<string[]>([
    "Aadhaar Card",
    "Bank Passbook (DBT-linked)",
  ]);
  const [howToApply, setHowToApply] = useState<
    { stepNumber: number; title: string; description: string }[]
  >([
    {
      stepNumber: 1,
      title: "Visit the Official Government Portal",
      description: "Navigate to the designated department portal and click on 'New Citizen Registration'.",
    },
    {
      stepNumber: 2,
      title: "Fill Application & Upload Documents",
      description: "Enter your demographic details and upload scanned copies of required proofs.",
    },
  ]);
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([
    {
      question: "Is there any application fee for this scheme?",
      answer: "No, application on the official government portal is completely free of cost.",
    },
  ]);

  useEffect(() => {
    const key = localStorage.getItem("yojana_admin_key");
    if (!key) {
      router.push("/admin/login");
    }
  }, [router]);

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slug || slug === title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "")
      );
    }
  };

  const handleAddBenefit = () => setBenefits([...benefits, ""]);
  const handleRemoveBenefit = (index: number) => setBenefits(benefits.filter((_, i) => i !== index));

  const handleAddEligibility = () => setEligibility([...eligibility, ""]);
  const handleRemoveEligibility = (index: number) => setEligibility(eligibility.filter((_, i) => i !== index));

  const handleAddDocument = () => setDocumentsRequired([...documentsRequired, ""]);
  const handleRemoveDocument = (index: number) => setDocumentsRequired(documentsRequired.filter((_, i) => i !== index));

  const handleAddStep = () => {
    setHowToApply([
      ...howToApply,
      {
        stepNumber: howToApply.length + 1,
        title: "",
        description: "",
      },
    ]);
  };
  const handleRemoveStep = (index: number) => {
    const updated = howToApply.filter((_, i) => i !== index).map((s, idx) => ({ ...s, stepNumber: idx + 1 }));
    setHowToApply(updated);
  };

  const handleAddFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
  const handleRemoveFaq = (index: number) => setFaqs(faqs.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const key = localStorage.getItem("yojana_admin_key") || "";

    const payload = {
      title,
      slug,
      summary,
      description,
      category,
      type,
      state: type === "Central" ? "All India" : state,
      beneficiary,
      officialPortalUrl,
      applicationDeadline,
      helplineNumber,
      featured,
      benefits: benefits.filter((b) => b.trim()),
      eligibility: eligibility.filter((e) => e.trim()),
      documentsRequired: documentsRequired.filter((d) => d.trim()),
      howToApply: howToApply.filter((s) => s.title.trim()),
      faqs: faqs.filter((f) => f.question.trim()),
    };

    try {
      const res = await fetch("/api/schemes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": key,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Failed to create scheme");
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/admin");
      }, 1500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Nav */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin"
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Admin Dashboard</span>
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
            AdSense Content Creator
          </span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
            Publish New Government Scheme Guide
          </h1>
          <p className="text-xs text-slate-500">
            Fill in the structured fields below. Next.js will automatically generate SEO meta tags, Google FAQ Schema markup, and Open Graph previews.
          </p>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Scheme published successfully! Redirecting to dashboard...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title & Slug */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-slate-700">Scheme Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g., PM Vishwakarma Yojana 2025: Tool Kit Incentive & Collateral-Free Loans"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-slate-700">SEO URL Slug *</label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="pm-vishwakarma-yojana-eligibility-apply"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Category, Type & State */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white"
              >
                <option value="Farmer">Farmer</option>
                <option value="Women">Women</option>
                <option value="Student">Student</option>
                <option value="Business">Business</option>
                <option value="Housing">Housing</option>
                <option value="Health">Health</option>
                <option value="Pension">Pension</option>
                <option value="General">General</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Level *</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white"
              >
                <option value="Central">Central Govt</option>
                <option value="State">State Govt</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">State Name</label>
              <input
                type="text"
                value={state}
                disabled={type === "Central"}
                onChange={(e) => setState(e.target.value)}
                placeholder="e.g. Maharashtra, Uttar Pradesh"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm disabled:bg-slate-100"
              />
            </div>
          </div>

          {/* Beneficiary */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Target Beneficiary *</label>
            <input
              type="text"
              required
              value={beneficiary}
              onChange={(e) => setBeneficiary(e.target.value)}
              placeholder="e.g. Traditional Artisans, Craftsmen, Small Farmers"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Short Summary (Displayed on Google snippet & social cards) *
            </label>
            <textarea
              rows={2}
              required
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Brief 150-character summary of benefits and target citizens..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Full Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Detailed Description & Objectives *
            </label>
            <textarea
              rows={6}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detailed background, objective, budget outlay, and scope of the scheme..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-sans"
            />
          </div>

          {/* Dynamic Benefits */}
          <div className="space-y-2 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">
                Key Benefits (Displayed as checkmarks)
              </label>
              <button
                type="button"
                onClick={handleAddBenefit}
                className="text-xs text-blue-600 font-bold flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Benefit</span>
              </button>
            </div>
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={b}
                  onChange={(e) => {
                    const copy = [...benefits];
                    copy[i] = e.target.value;
                    setBenefits(copy);
                  }}
                  placeholder="e.g. ₹15,000 tool kit incentive & ₹1 Lakh collateral-free loan at 5% interest"
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-xs"
                />
                {benefits.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveBenefit(i)}
                    className="p-2 text-rose-500 hover:text-rose-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Dynamic Eligibility */}
          <div className="space-y-2 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">
                Eligibility Checklist Items
              </label>
              <button
                type="button"
                onClick={handleAddEligibility}
                className="text-xs text-blue-600 font-bold flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Criteria</span>
              </button>
            </div>
            {eligibility.map((c, i) => (
              <div key={i} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={c}
                  onChange={(e) => {
                    const copy = [...eligibility];
                    copy[i] = e.target.value;
                    setEligibility(copy);
                  }}
                  placeholder="e.g. Age must be 18 years or above on the date of application"
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-xs"
                />
                {eligibility.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveEligibility(i)}
                    className="p-2 text-rose-500 hover:text-rose-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Dynamic Documents Required */}
          <div className="space-y-2 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">Documents Required</label>
              <button
                type="button"
                onClick={handleAddDocument}
                className="text-xs text-blue-600 font-bold flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Document</span>
              </button>
            </div>
            {documentsRequired.map((doc, i) => (
              <div key={i} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={doc}
                  onChange={(e) => {
                    const copy = [...documentsRequired];
                    copy[i] = e.target.value;
                    setDocumentsRequired(copy);
                  }}
                  placeholder="e.g. Aadhaar Card, Trade Certificate, Bank Passbook"
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-xs"
                />
                {documentsRequired.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveDocument(i)}
                    className="p-2 text-rose-500 hover:text-rose-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Step-by-Step How to Apply */}
          <div className="space-y-3 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">
                Application Steps (Ordered)
              </label>
              <button
                type="button"
                onClick={handleAddStep}
                className="text-xs text-blue-600 font-bold flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Step</span>
              </button>
            </div>
            {howToApply.map((step, i) => (
              <div key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-blue-700">
                    Step {step.stepNumber}
                  </span>
                  {howToApply.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveStep(i)}
                      className="text-rose-500 text-xs"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  value={step.title}
                  onChange={(e) => {
                    const copy = [...howToApply];
                    copy[i].title = e.target.value;
                    setHowToApply(copy);
                  }}
                  placeholder="Step Heading (e.g. Register with Mobile OTP)"
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                />
                <textarea
                  rows={2}
                  value={step.description}
                  onChange={(e) => {
                    const copy = [...howToApply];
                    copy[i].description = e.target.value;
                    setHowToApply(copy);
                  }}
                  placeholder="Detailed instructions for this step..."
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                />
              </div>
            ))}
          </div>

          {/* FAQs (Rich Snippets) */}
          <div className="space-y-3 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">
                Frequently Asked Questions (Generates Google FAQ Rich Snippets!)
              </label>
              <button
                type="button"
                onClick={handleAddFaq}
                className="text-xs text-blue-600 font-bold flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add FAQ</span>
              </button>
            </div>
            {faqs.map((faq, i) => (
              <div key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-600">Question #{i + 1}</span>
                  {faqs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveFaq(i)}
                      className="text-rose-500 text-xs"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  value={faq.question}
                  onChange={(e) => {
                    const copy = [...faqs];
                    copy[i].question = e.target.value;
                    setFaqs(copy);
                  }}
                  placeholder="Question (e.g. Who is eligible for the subsidy?)"
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                />
                <textarea
                  rows={2}
                  value={faq.answer}
                  onChange={(e) => {
                    const copy = [...faqs];
                    copy[i].answer = e.target.value;
                    setFaqs(copy);
                  }}
                  placeholder="Clear, authoritative answer..."
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                />
              </div>
            ))}
          </div>

          {/* Portal URLs & Extras */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Official Portal URL *</label>
              <input
                type="url"
                required
                value={officialPortalUrl}
                onChange={(e) => setOfficialPortalUrl(e.target.value)}
                placeholder="https://pmvishwakarma.gov.in"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Application Deadline</label>
              <input
                type="text"
                value={applicationDeadline}
                onChange={(e) => setApplicationDeadline(e.target.value)}
                placeholder="e.g. Ongoing (Open Year-Round)"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Helpline Number</label>
              <input
                type="text"
                value={helplineNumber}
                onChange={(e) => setHelplineNumber(e.target.value)}
                placeholder="e.g. 1800 267 7777"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <input
              type="checkbox"
              id="featured"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="featured" className="text-xs font-bold text-slate-700 cursor-pointer">
              Feature on Homepage (High Demand Scheme)
            </label>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow flex items-center justify-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? "Publishing to Portal..." : "Publish Scheme Guide Now"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

