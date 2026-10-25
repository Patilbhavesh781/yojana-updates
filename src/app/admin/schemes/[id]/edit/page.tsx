"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Save,
  Layers,
  Loader2,
} from "lucide-react";
import { SchemeItem } from "@/lib/data";

export default function EditSchemePage() {
  const router = useRouter();
  const params = useParams();
  const schemeId = params?.id as string;

  const [initialLoading, setInitialLoading] = useState(true);
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
  const [status, setStatus] = useState<"Active" | "Upcoming" | "Closed">("Active");
  const [helplineNumber, setHelplineNumber] = useState("");
  const [featured, setFeatured] = useState(false);

  // Dynamic Lists
  const [benefits, setBenefits] = useState<string[]>([]);
  const [eligibility, setEligibility] = useState<string[]>([]);
  const [documentsRequired, setDocumentsRequired] = useState<string[]>([]);
  const [howToApply, setHowToApply] = useState<
    { stepNumber: number; title: string; description: string }[]
  >([]);
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);

  useEffect(() => {
    const key = localStorage.getItem("yojana_admin_key");
    if (!key) {
      router.push("/admin/login");
      return;
    }

    if (!schemeId) return;

    fetch(`/api/schemes?id=${encodeURIComponent(schemeId)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!data.success || !data.scheme) {
          setError(data.error || "Scheme not found");
          setInitialLoading(false);
          return;
        }

        const s: SchemeItem = data.scheme;
        setTitle(s.title || "");
        setSlug(s.slug || "");
        setSummary(s.summary || "");
        setDescription(s.description || "");
        setCategory(s.category || "Farmer");
        setType(s.type || "Central");
        setState(s.state || "All India");
        setBeneficiary(s.beneficiary || "");
        setOfficialPortalUrl(s.officialPortalUrl || "https://");
        setApplicationDeadline(s.applicationDeadline || "Ongoing");
        setStatus(s.status || "Active");
        setHelplineNumber(s.helplineNumber || "");
        setFeatured(Boolean(s.featured));

        setBenefits(s.benefits && s.benefits.length > 0 ? s.benefits : [""]);
        setEligibility(s.eligibility && s.eligibility.length > 0 ? s.eligibility : [""]);
        setDocumentsRequired(s.documentsRequired && s.documentsRequired.length > 0 ? s.documentsRequired : [""]);
        setHowToApply(s.howToApply && s.howToApply.length > 0 ? s.howToApply : [{ stepNumber: 1, title: "", description: "" }]);
        setFaqs(s.faqs && s.faqs.length > 0 ? s.faqs : [{ question: "", answer: "" }]);

        setInitialLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch scheme: " + err.message);
        setInitialLoading(false);
      });
  }, [router, schemeId]);

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
      id: schemeId,
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
      status,
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
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": key,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Failed to update scheme");
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

  if (initialLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center text-slate-500 flex items-center justify-center space-x-2">
        <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
        <span>Loading scheme details for edit...</span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
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
            Scheme Editor
          </span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
            Edit Scheme Guide
          </h1>
          <p className="text-xs text-slate-500">
            Modify eligibility rules, installment dates, official links, or FAQs. Changes take effect across SEO pages.
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
            <span>Scheme updated successfully! Redirecting to dashboard...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title & Slug */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Scheme Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">SEO URL Slug *</label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Category, Type & State */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
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
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm disabled:bg-slate-100"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white"
              >
                <option value="Active">Active</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Closed">Closed</option>
              </select>
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
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Short Summary *</label>
            <textarea
              rows={2}
              required
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Full Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Detailed Description *</label>
            <textarea
              rows={6}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-sans leading-relaxed"
            />
          </div>

          {/* Dynamic Benefits */}
          <div className="space-y-2 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">Key Benefits</label>
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
              <label className="text-xs font-bold text-slate-700">Eligibility Checklist Items</label>
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
              <label className="text-xs font-bold text-slate-700">Application Steps</label>
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
                  <span className="text-[11px] font-bold text-blue-700">Step {step.stepNumber}</span>
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
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                />
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="space-y-3 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">Frequently Asked Questions</label>
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
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Application Deadline</label>
              <input
                type="text"
                value={applicationDeadline}
                onChange={(e) => setApplicationDeadline(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Helpline Number</label>
              <input
                type="text"
                value={helplineNumber}
                onChange={(e) => setHelplineNumber(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <input
              type="checkbox"
              id="featuredEdit"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="featuredEdit" className="text-xs font-bold text-slate-700 cursor-pointer">
              Feature on Homepage (Popular Schemes)
            </label>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow flex items-center justify-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? "Saving Changes..." : "Update Scheme Guide Now"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

