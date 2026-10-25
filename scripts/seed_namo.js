const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://patilbhavesh781_db_user:yyTJ5vq5m4mTEK5x@cluster0.mnce2lj.mongodb.net/yojana-updates?retryWrites=true&w=majority";

const SchemeSchema = new mongoose.Schema({}, { strict: false });
const Scheme = mongoose.models.Scheme || mongoose.model("Scheme", SchemeSchema);

const namoShetkariData = {
  title: "Namo Shetkari Yojana 9th Installment Date 2025: Beneficiary List & Status Check",
  slug: "namo-shetkari-yojana-9th-installment-date",
  summary:
    "Maharashtra Government provides ₹6,000 yearly in 3 installments to farmers. Check 9th installment release dates, beneficiary list, and Aadhaar DBT status check on nsmny.mahait.org.",
  description: `Namo Shetkari Maha Samman Nidhi Yojana (NSMNY) is an ambitious financial empowerment initiative launched by the Government of Maharashtra. Under this scheme, eligible farmers in Maharashtra receive financial assistance of ₹6,000 per year in three equal installments of ₹2,000 each. This amount is supplementary to the Central Government's PM-KISAN grant, meaning eligible farmers in Maharashtra receive a combined total of ₹12,000 per year directly into their bank accounts.

### Key Highlights of the 9th Installment
The state agriculture department disburses the Namo Shetkari installments in close alignment with the central PM-KISAN payment cycle. Farmers who have completed their biometric or OTP-based e-KYC, Aadhaar-NPCI bank account seeding, and land record verification (Satbara 7/12 extract) will receive the 9th installment credit directly via Aadhaar Direct Benefit Transfer (DBT).

### Common Reasons for Installment Delays & How to Fix Them
1. **Pending e-KYC**: If you have not done e-KYC on the PM-Kisan or NSMNY portal, your funds remain on hold.
2. **Aadhaar-NPCI Inactive**: Your bank account must be mapped with the National Payments Corporation of India (NPCI) for DBT transfers. Visit your bank branch and submit the Aadhaar-NPCI linking mandate.
3. **Land Record Discrepancy**: The name on the 7/12 land extract must match the name on the Aadhaar card.`,
  category: "Farmer",
  type: "State",
  state: "Maharashtra",
  beneficiary: "Small, Marginal & Landholding Farmers in Maharashtra",
  benefits: [
    "₹2,000 per installment transferred directly via Aadhaar DBT (₹6,000 annual state support)",
    "Combined with PM Kisan (₹6,000), total benefit is ₹12,000 per year for Maharashtra farmers",
    "No registration fees; eligible PM Kisan farmers are onboarded automatically",
    "Supplementary support for seeds, fertilizers, and modern drip irrigation inputs",
  ],
  eligibility: [
    "Must be a permanent resident farmer of Maharashtra state",
    "Must possess cultivable land registered in Maharashtra land revenue records (Satbara 7/12 & 8A)",
    "Must be an active, verified beneficiary of the PM-KISAN Samman Nidhi scheme",
    "Bank account must be seeded with Aadhaar and enabled for NPCI DBT",
    "Exclusions: Income tax payers, retired pensioners receiving ₹10,000+ monthly pension, and constitutional post holders",
  ],
  documentsRequired: [
    "Aadhaar Card (linked to active mobile number)",
    "Maharashtra 7/12 Land Record Extract (Satbara Utara) & 8A document",
    "Aadhaar-NPCI seeded Bank Account Passbook",
    "PM-KISAN Beneficiary Registration Number",
    "Active Mobile Number for OTP authentication",
  ],
  howToApply: [
    {
      stepNumber: 1,
      title: "Visit the Official NSMNY Portal",
      description: "Open your web browser and go to the official portal at nsmny.mahait.org.",
    },
    {
      stepNumber: 2,
      title: "Click on 'Beneficiary Status'",
      description:
        "From the homepage navigation menu, click on the 'Beneficiary Status' / 'लाभार्थी स्थिती' link.",
    },
    {
      stepNumber: 3,
      title: "Enter Aadhaar or PM-Kisan ID",
      description:
        "Type in your 12-digit Aadhaar Number or PM-KISAN Registration ID along with the captcha code.",
    },
    {
      stepNumber: 4,
      title: "View Installment & FTO Details",
      description:
        "Click 'Get Data' to view your installment history, Fund Transfer Order (FTO) generated status, and credited bank account details.",
    },
  ],
  officialPortalUrl: "https://nsmny.mahait.org",
  applicationDeadline: "Ongoing (Aligned with PM-Kisan cycle)",
  status: "Active",
  helplineNumber: "020-25537038 / 1800 120 8040",
  faqs: [
    {
      question: "When will the Namo Shetkari Yojana 9th installment be released?",
      answer:
        "The 9th installment is scheduled following the state agriculture department verification cycle, disbursed directly to farmers with approved Aadhaar DBT status.",
    },
    {
      question: "How can I check if my name is in the Namo Shetkari beneficiary list?",
      answer:
        "Visit nsmny.mahait.org, select 'Beneficiary List', choose your District, Taluka, and Village, and click search to view the complete approved farmer roster.",
    },
    {
      question: "What should I do if PM Kisan payment is received but Namo Shetkari is missing?",
      answer:
        "Ensure your state land records (7/12) are mapped on the Maharashtra state portal and verify with your local Talathi or Agriculture Assistant (Krishi Sahayak).",
    },
    {
      question: "Is separate registration required for Namo Shetkari Yojana?",
      answer:
        "No, farmers already approved under PM-KISAN in Maharashtra are automatically verified and integrated into NSMNY without filling a new application.",
    },
  ],
  featured: true,
  views: 31400,
  createdAt: new Date(),
  updatedAt: new Date(),
};

async function run() {
  await mongoose.connect(uri);
  console.log("Connected to MongoDB Atlas!");
  const res = await Scheme.findOneAndUpdate(
    { slug: namoShetkariData.slug },
    { $set: namoShetkariData },
    { upsert: true, new: true }
  );
  console.log("Upserted successfully:", res.slug);
  process.exit(0);
}

run().catch((e) => {
  console.error("Error:", e);
  process.exit(1);
});

