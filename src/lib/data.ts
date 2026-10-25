export interface SchemeItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: "Farmer" | "Student" | "Women" | "Business" | "Housing" | "Health" | "Pension" | "General";
  type: "Central" | "State";
  state: string;
  beneficiary: string;
  benefits: string[];
  eligibility: string[];
  documentsRequired: string[];
  howToApply: { stepNumber: number; title: string; description: string }[];
  officialPortalUrl: string;
  applicationDeadline: string;
  status: "Active" | "Upcoming" | "Closed";
  helplineNumber?: string;
  faqs: { question: string; answer: string }[];
  featured: boolean;
  views: number;
  lastViewedAt?: string;
  updatedAt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  relatedScheme?: string;
  sourceUrl?: string;
  publishedAt: string;
  featured: boolean;
  views?: number;
  lastViewedAt?: string;
}

export const initialSchemes: SchemeItem[] = [
  {
    id: "namo-shetkari-yojana-9th-installment",
    title: "Namo Shetkari Yojana 9th Installment Date 2025: Beneficiary List & Status Check",
    slug: "namo-shetkari-yojana-9th-installment-date",
    summary: "Maharashtra Government provides ₹6,000 yearly in 3 installments to farmers. Check 9th installment release dates, beneficiary list, and Aadhaar DBT status check on nsmny.mahait.org.",
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
        description: "From the homepage navigation menu, click on the 'Beneficiary Status' / 'लाभार्थी स्थिती' link.",
      },
      {
        stepNumber: 3,
        title: "Enter Aadhaar or PM-Kisan ID",
        description: "Type in your 12-digit Aadhaar Number or PM-KISAN Registration ID along with the captcha code.",
      },
      {
        stepNumber: 4,
        title: "View Installment & FTO Details",
        description: "Click 'Get Data' to view your installment history, Fund Transfer Order (FTO) generated status, and credited bank account details.",
      },
    ],
    officialPortalUrl: "https://nsmny.mahait.org",
    applicationDeadline: "Ongoing (Aligned with PM-Kisan cycle)",
    status: "Active",
    helplineNumber: "020-25537038 / 1800 120 8040",
    faqs: [
      {
        question: "When will the Namo Shetkari Yojana 9th installment be released?",
        answer: "The 9th installment is scheduled following the state agriculture department verification cycle, disbursed directly to farmers with approved Aadhaar DBT status.",
      },
      {
        question: "How can I check if my name is in the Namo Shetkari beneficiary list?",
        answer: "Visit nsmny.mahait.org, select 'Beneficiary List', choose your District, Taluka, and Village, and click search to view the complete approved farmer roster.",
      },
      {
        question: "What should I do if PM Kisan payment is received but Namo Shetkari is missing?",
        answer: "Ensure your state land records (7/12) are mapped on the Maharashtra state portal and verify with your local Talathi or Agriculture Assistant (Krishi Sahayak).",
      },
      {
        question: "Is separate registration required for Namo Shetkari Yojana?",
        answer: "No, farmers already approved under PM-KISAN in Maharashtra are automatically verified and integrated into NSMNY without filling a new application.",
      },
    ],
    featured: true,
    views: 31400,
    updatedAt: "2025-02-18",
  },
  {
    id: "pm-kisan-samman-nidhi",
    title: "PM Kisan Samman Nidhi Yojana 2025: Check 19th Installment Status & e-KYC",
    slug: "pm-kisan-samman-nidhi-status-ekyc",
    summary: "Financial support of ₹6,000 per year directly credited to the bank accounts of eligible small and marginal farmer families in three equal installments.",
    description: `Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a flagship Central Sector scheme launched by the Government of India to augment the financial needs of landholding farmers' families. Under this scheme, financial assistance of ₹6,000 per annum is provided to all eligible landholding farmer families across the country, payable in three equal installments of ₹2,000 every four months directly into their Aadhaar-linked bank accounts through Direct Benefit Transfer (DBT).

To ensure smooth receipt of upcoming installments, farmers must complete mandatory e-KYC via OTP on the PM-Kisan portal or through facial authentication on the PM-KISAN mobile app. Land seeding and Aadhaar bank account verification are also required.`,
    category: "Farmer",
    type: "Central",
    state: "All India",
    beneficiary: "Small and Marginal Landholding Farmers",
    benefits: [
      "₹6,000 per year direct cash assistance in 3 equal installments of ₹2,000",
      "Direct Benefit Transfer (DBT) straight into bank account without middlemen",
      "Transparent online status tracking via PM-Kisan portal and PM-Kisan Mobile App",
      "Kisan Credit Card (KCC) integration for concessional agri-credit",
    ],
    eligibility: [
      "All landholding farmer families with cultivable landholding in their names",
      "Must have an active bank account linked to an Aadhaar card",
      "Completed mandatory biometric or OTP-based e-KYC",
      "Exclusions: Institutional landholders, constitutional post holders, income tax payees, and retired pensioners with monthly pension of ₹10,000 or more.",
    ],
    documentsRequired: [
      "Aadhaar Card (linked with active mobile number for OTP)",
      "Land Record Documents (Khasra / Khatauni / 7/12 extract)",
      "Bank Account Passbook (DBT enabled)",
      "Passport size photograph",
      "Active Mobile Number",
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit Official Portal",
        description: "Open the official PM Kisan portal at pmkisan.gov.in and click on 'New Farmer Registration'.",
      },
      {
        stepNumber: 2,
        title: "Enter Aadhaar & State",
        description: "Select Rural or Urban Farmer registration, enter your Aadhaar Number, mobile number, and select your state.",
      },
      {
        stepNumber: 3,
        title: "Fill Land and Bank Details",
        description: "Enter district, sub-district, village, land survey number, dag/khasra number, and land ownership date.",
      },
      {
        stepNumber: 4,
        title: "Upload Documents & Submit",
        description: "Upload scanned copies of land documents, verify with OTP, and submit your application for state nodal officer verification.",
      },
    ],
    officialPortalUrl: "https://pmkisan.gov.in",
    applicationDeadline: "Ongoing (Open Year-Round)",
    status: "Active",
    helplineNumber: "155261 / 011-24300606",
    faqs: [
      {
        question: "How can I check my PM Kisan beneficiary status?",
        answer: "Visit pmkisan.gov.in, click on 'Know Your Status', enter your Registration Number or Aadhaar Number, enter the captcha, and view your installment details.",
      },
      {
        question: "Is e-KYC mandatory for receiving the 19th installment?",
        answer: "Yes, e-KYC is strictly mandatory for all PM-KISAN registered beneficiaries. Incomplete e-KYC stops installment credits.",
      },
      {
        question: "Can two persons from the same household receive PM Kisan benefits?",
        answer: "No, the scheme benefits are provided per eligible farmer family (consisting of husband, wife, and minor children). Only one person per family can benefit.",
      },
    ],
    featured: true,
    views: 14250,
    updatedAt: "2025-02-15",
  },
  {
    id: "majhi-ladki-bahin-yojana",
    title: "Mukhyamantri Majhi Ladki Bahin Yojana 2025: Eligibility, Application Form & DBT List",
    slug: "mukhyamantri-majhi-ladki-bahin-yojana-maharashtra",
    summary: "Maharashtra Government provides ₹1,500 monthly financial aid to underprivileged women aged 21 to 65 years.",
    description: `Mukhyamantri Majhi Ladki Bahin Yojana is a landmark welfare scheme announced by the Government of Maharashtra. The primary objective of the scheme is to empower women economically, foster self-reliance, improve nutritional health, and give financial security to women across underprivileged and lower-middle-class households in Maharashtra.

Eligible women receive ₹1,500 per month deposited directly into their Aadhaar-seeded bank accounts. Applications can be submitted online through the Nari Shakti Doot mobile app or through designated Setu Suvidha Kendras, Anganwadi centers, and Gram Panchayats.`,
    category: "Women",
    type: "State",
    state: "Maharashtra",
    beneficiary: "Resident Women aged 21 to 65 years",
    benefits: [
      "₹1,500 monthly stipend transferred directly via Aadhaar DBT (₹18,000 annually)",
      "Financial independence for personal, medical, and household nutritional needs",
      "Direct bank transfer prevents leaks and delays",
      "No fees for application or verification at government kiosks",
    ],
    eligibility: [
      "Must be a permanent resident of Maharashtra state",
      "Married, widowed, divorced, abandoned, or destitute women aged between 21 and 65 years",
      "Total family annual income must not exceed ₹2.5 Lakh (or must hold a Yellow or Orange Ration Card)",
      "Applicant must have an active bank account linked with Aadhaar",
      "No family member should be a regular income tax payer or government employee",
    ],
    documentsRequired: [
      "Aadhaar Card",
      "Maharashtra Domicile Certificate (or School Leaving Certificate / Voter ID / 15-year Ration Card)",
      "Yellow or Orange Ration Card / Income Certificate (below ₹2.5 Lakh)",
      "Bank Account Passbook (Aadhaar linked)",
      "Undertaking (Hamipatra) self-declaration form",
      "Passport size photograph",
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Download App or Visit Portal",
        description: "Install the official 'Nari Shakti Doot' app or visit the ladkibahin.maharashtra.gov.in portal.",
      },
      {
        stepNumber: 2,
        title: "Register with Mobile Number",
        description: "Sign up using your mobile number and authenticate with the OTP received.",
      },
      {
        stepNumber: 3,
        title: "Fill Applicant Details",
        description: "Enter full name, Aadhaar number, bank IFSC, marital status, and address as per official records.",
      },
      {
        stepNumber: 4,
        title: "Upload Documents & Submit",
        description: "Upload photo, ration card/income proof, and signed Hamipatra. Review and submit to receive your application registration number.",
      },
    ],
    officialPortalUrl: "https://ladkibahin.maharashtra.gov.in",
    applicationDeadline: "Extended / Ongoing Verification",
    status: "Active",
    helplineNumber: "181 / 022-22027050",
    faqs: [
      {
        question: "Can unmarried women apply for Majhi Ladki Bahin Yojana?",
        answer: "Unmarried women who are aged 21 and above and part of an eligible family holding a qualifying ration card can apply subject to state circular norms.",
      },
      {
        question: "What if my bank account is not linked with Aadhaar?",
        answer: "DBT transfers will fail if your bank account is not Aadhaar-seeded. Visit your bank branch and submit the Aadhaar NPCI mapping form immediately.",
      },
    ],
    featured: true,
    views: 29800,
    updatedAt: "2025-02-12",
  },
  {
    id: "pm-surya-ghar-muft-bijli-yojana",
    title: "PM Surya Ghar Muft Bijli Yojana: Subsidy Up to ₹78,000 for Rooftop Solar",
    slug: "pm-surya-ghar-muft-bijli-yojana-rooftop-solar",
    summary: "Get up to 300 units of free electricity every month with government subsidies up to ₹78,000 for residential rooftop solar installations.",
    description: `PM Surya Ghar Muft Bijli Yojana is a groundbreaking national solar rooftop initiative launched by the Government of India with an outlay of over ₹75,000 crore. The scheme aims to provide up to 300 units of free electricity every month to 1 crore households across the country through rooftop solar panels.

The Central Government provides substantial direct capital subsidies: ₹30,000 for 1 kW systems, ₹60,000 for 2 kW systems, and ₹78,000 for 3 kW and higher residential capacity systems. In addition, households can sell surplus electricity back to the grid through net-metering.`,
    category: "Housing",
    type: "Central",
    state: "All India",
    beneficiary: "Residential Electricity Consumers / Homeowners",
    benefits: [
      "Subsidies up to ₹78,000 directly credited to bank account within 30 days of installation",
      "Up to 300 units of free electricity per month, drastically cutting monthly power bills",
      "Additional income by feeding excess generated solar power into the DISCOM grid",
      "Low-interest collateral-free bank loans (approx. 7% interest) from nationalized banks",
    ],
    eligibility: [
      "Applicant must be an Indian citizen and owner of a residential house with suitable roof space",
      "Must have an active residential electricity connection in their name",
      "Must not have availed any other central subsidy for solar rooftop previously",
    ],
    documentsRequired: [
      "Electricity Bill (latest within last 3 months)",
      "Aadhaar Card of electricity connection holder",
      "Bank Account Passbook / Cancelled Cheque",
      "Roof Ownership Document or House Tax Receipt",
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Register on National Portal",
        description: "Visit pmsuryaghar.gov.in and register by selecting your State, Electricity Distribution Company (DISCOM), and Consumer Account Number.",
      },
      {
        stepNumber: 2,
        title: "Apply for Rooftop Solar",
        description: "Log in with mobile number, fill in sanctioned load details, and apply for solar rooftop approval from your DISCOM.",
      },
      {
        stepNumber: 3,
        title: "Installation by Registered Vendor",
        description: "Once technical feasibility is approved, get solar system installed by any registered DISCOM vendor.",
      },
      {
        stepNumber: 4,
        title: "Net Metering & Subsidy Claim",
        description: "After installation, vendor submits commissioning report, DISCOM installs net meter, and your subsidy is released into your bank account.",
      },
    ],
    officialPortalUrl: "https://pmsuryaghar.gov.in",
    applicationDeadline: "Open for 2025-2026",
    status: "Active",
    helplineNumber: "15555 / 1800-180-3333",
    faqs: [
      {
        question: "How much subsidy is available for a 3 kW solar plant?",
        answer: "For a 3 kW residential solar system, the Central Government provides a fixed subsidy of ₹78,000. Some states also offer extra state subsidies.",
      },
      {
        question: "Can tenants apply for PM Surya Ghar?",
        answer: "The scheme requires ownership or long-term structural consent of the rooftop and an electricity connection in the applicant's or owner's name.",
      },
    ],
    featured: true,
    views: 18400,
    updatedAt: "2025-02-10",
  },
  {
    id: "pradhan-mantri-mudra-yojana",
    title: "PM Mudra Loan Yojana 2025: Get Collateral-Free Business Loan Up to ₹20 Lakh",
    slug: "pm-mudra-yojana-business-loan",
    summary: "Collateral-free business loans for micro and small enterprises under Shishu, Kishore, Tarun, and the newly expanded Tarun Plus categories.",
    description: `Pradhan Mantri MUDRA Yojana (PMMY) was introduced to facilitate micro-credit and affordable institutional finance to non-corporate, non-farm small/micro enterprises. In the recent Union Budget, the loan limit under the Tarun category was increased from ₹10 Lakh to ₹20 Lakh for entrepreneurs who have previously taken and successfully repaid Tarun loans.

Loans are disbursed through Commercial Banks, Regional Rural Banks (RRBs), Small Finance Banks, MFIs, and NBFCs with no collateral or third-party guarantee required.`,
    category: "Business",
    type: "Central",
    state: "All India",
    beneficiary: "Micro & Small Business Owners, Artisans, Traders, Women Entrepreneurs",
    benefits: [
      "Zero collateral or security required for loans up to ₹20 Lakh",
      "Low processing fees and competitive interest rates (MUDRA refinance mechanism)",
      "Mudra Debit Card provided for convenient working capital withdrawal",
      "Categorized loans: Shishu (up to ₹50k), Kishore (₹50k - ₹5L), Tarun (₹5L - ₹10L), Tarun Plus (₹10L - ₹20L)",
    ],
    eligibility: [
      "Indian citizens running non-farm income-generating micro or small enterprises",
      "Manufacturing, trading, shopkeepers, service sector units, and transport operators",
      "Good repayment track record with no loan default in any commercial bank",
    ],
    documentsRequired: [
      "Proof of Identity (Aadhaar / Voter ID / PAN Card)",
      "Proof of Residence (Electricity bill / Aadhaar)",
      "Business Address & Registration Proof (Udyam Registration / GST / Trade License)",
      "Bank Statement for last 6 months",
      "Project report / Business proposal showing projected revenue and expenses",
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Prepare Business Plan",
        description: "Determine the loan category required (Shishu, Kishore, or Tarun) and draft a clear estimation of machinery or working capital required.",
      },
      {
        stepNumber: 2,
        title: "Apply via JanSamarth Portal",
        description: "Visit jansamarth.in, register, check digital eligibility for business loan, and choose Mudra scheme.",
      },
      {
        stepNumber: 3,
        title: "Select Bank & Upload Documents",
        description: "Upload Udyam registration, bank statements, and submit to your preferred lending partner bank.",
      },
      {
        stepNumber: 4,
        title: "Disbursement & Mudra Card",
        description: "Upon bank verification and sanction, funds are credited and a Mudra RuPay card is issued for working capital.",
      },
    ],
    officialPortalUrl: "https://www.mudra.org.in",
    applicationDeadline: "Open Round the Year",
    status: "Active",
    helplineNumber: "1800 180 1111 / 1800 11 0001",
    faqs: [
      {
        question: "Is collateral required for a Mudra loan?",
        answer: "No, as per RBI guidelines, banks are mandated not to accept any collateral security for MUDRA loans.",
      },
      {
        question: "What is the new maximum limit for Mudra loans?",
        answer: "The maximum limit for eligible entrepreneurs has been raised to ₹20 Lakh under the Tarun Plus category.",
      },
    ],
    featured: false,
    views: 11200,
    updatedAt: "2025-02-08",
  },
  {
    id: "ayushman-bharat-pmjay",
    title: "Ayushman Bharat PM-JAY: Free ₹5 Lakh Health Card Online Registration",
    slug: "ayushman-bharat-pmjay-golden-card-registration",
    summary: "Cashless health cover of up to ₹5 Lakh per year per family for secondary and tertiary care hospitalization.",
    description: `Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is the world's largest government-funded health assurance initiative. It aims to protect over 12 crore vulnerable and low-income families from catastrophic healthcare expenditures by providing ₹5 Lakh per family per year for secondary and tertiary hospital care.

Recently, the Government of India expanded the scheme to cover all senior citizens aged 70 years and above with a separate ₹5 Lakh top-up cover, regardless of family income.`,
    category: "Health",
    type: "Central",
    state: "All India",
    beneficiary: "Low-income families, BPL households, and Senior Citizens aged 70+",
    benefits: [
      "₹5 Lakh cashless health cover per family per year across 28,000+ empanelled hospitals",
      "Pre-existing conditions covered from day one of enrollment",
      "Includes medicines, diagnostic tests, ICU, surgical procedures, and post-discharge care",
      "Dedicated ₹5 Lakh top-up coverage for all senior citizens aged 70+",
    ],
    eligibility: [
      "Listed in SECC 2011 database or verified Antyodaya Anna Yojana (AAY) ration card",
      "All Indian senior citizens aged 70 and above (under the new universal senior citizen expansion)",
      "Families registered under state-specific linked healthcare schemes",
    ],
    documentsRequired: [
      "Aadhaar Card (mandatory)",
      "Ration Card or Family Samagra ID",
      "Active Mobile number for OTP verification",
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit Beneficiary Portal",
        description: "Open beneficiary.nha.gov.in or download the Ayushman App on your Android device.",
      },
      {
        stepNumber: 2,
        title: "Search Family ID",
        description: "Log in with mobile OTP, select your state, PMJAY sub-scheme, and search by Family ID, Ration Card, or Aadhaar.",
      },
      {
        stepNumber: 3,
        title: "Complete e-KYC",
        description: "Click on e-KYC next to the member's name, verify via Aadhaar OTP or facial recognition, and upload a live selfie.",
      },
      {
        stepNumber: 4,
        title: "Download Ayushman Card",
        description: "Once verified (often instant), click download to save your PVC-compatible Ayushman Card with unique ABHA number.",
      },
    ],
    officialPortalUrl: "https://beneficiary.nha.gov.in",
    applicationDeadline: "Open Year-Round",
    status: "Active",
    helplineNumber: "14555",
    faqs: [
      {
        question: "Can senior citizens aged 70+ get the card regardless of income?",
        answer: "Yes, under the expanded initiative, all citizens aged 70+ can generate their dedicated Ayushman Vay Vandana card irrespective of financial status.",
      },
      {
        question: "Is there any premium or renewal fee?",
        answer: "No, PM-JAY is 100% free with no charges for card creation, treatment, or medicines at empanelled hospitals.",
      },
    ],
    featured: true,
    views: 22100,
    updatedAt: "2025-02-14",
  },
  {
    id: "national-scholarship-portal",
    title: "NSP Pre & Post Matric Scholarships 2025: Eligibility, Dates & Apply Online",
    slug: "nsp-scholarship-pre-post-matric-apply-online",
    summary: "Single window portal for Central and State government scholarships worth ₹5,000 to ₹50,000 for school and college students.",
    description: `The National Scholarship Portal (NSP) is a one-stop electronic platform designed by the Ministry of Electronics and Information Technology (MeitY) for efficient disbursement of scholarships directly into students' bank accounts.

It hosts dozens of schemes for SC, ST, OBC, Minority, and General EWS students from Class 1 to Post-Doctoral studies, including the Pre-Matric Scholarship, Post-Matric Scholarship, Central Sector Scheme for College and University Students, and Ishan Uday.`,
    category: "Student",
    type: "Central",
    state: "All India",
    beneficiary: "School, College, and University Students",
    benefits: [
      "Direct tuition fee reimbursement and monthly maintenance allowances",
      "Awards ranging from ₹5,000 to ₹50,000+ per year depending on course level",
      "Direct Benefit Transfer directly to student's bank account",
      "Transparent tracking from school verification to state nodal officer approval",
    ],
    eligibility: [
      "Enrolled in a recognized school, college, or university with AISHE/DISE code",
      "Minimum 50% or passing marks in previous academic year examination",
      "Family annual income usually below ₹1.5 Lakh to ₹2.5 Lakh (varies by specific scheme)",
      "Must have One-Time Registration (OTR) completed on NSP",
    ],
    documentsRequired: [
      "Aadhaar Card of student",
      "Mark sheet of previous qualifying exam",
      "Fee receipt of current academic year",
      "Income Certificate issued by competent revenue authority",
      "Caste / Community Certificate (if applicable)",
      "Bank Account Passbook (must be in student's own name and Aadhaar-seeded)",
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Complete One Time Registration (OTR)",
        description: "Download the NSP OTR app or visit scholarships.gov.in to complete biometric or face-authenticated OTR.",
      },
      {
        stepNumber: 2,
        title: "Login with OTR ID",
        description: "Log in with your generated OTR number and password, then select your eligible scholarship schemes.",
      },
      {
        stepNumber: 3,
        title: "Upload Academic Proofs",
        description: "Fill academic institution details, fee breakdown, and upload scanned documents.",
      },
      {
        stepNumber: 4,
        title: "Submit for Institute Verification",
        description: "Submit online and hand over a printout along with original documents to your institute's scholarship nodal officer.",
      },
    ],
    officialPortalUrl: "https://scholarships.gov.in",
    applicationDeadline: "Session 2024-25 Verification Closing Soon",
    status: "Active",
    helplineNumber: "0120-6619540",
    faqs: [
      {
        question: "Can I apply for more than one scholarship on NSP?",
        answer: "A student can only receive one government scholarship per academic year under DBT regulations.",
      },
      {
        question: "Is OTR mandatory for NSP application?",
        answer: "Yes, One-Time Registration (OTR) with Aadhaar face or biometric authentication is compulsory from 2024 onwards.",
      },
    ],
    featured: false,
    views: 9400,
    updatedAt: "2025-02-05",
  },
];

export const initialNews: NewsItem[] = [
  {
    id: "news-1",
    title: "PM Kisan 19th Installment Date Announced: Check Beneficiary List Before February End",
    slug: "pm-kisan-19th-installment-release-date",
    summary: "The Ministry of Agriculture has confirmed that the 19th installment will be credited to eligible farmers with active e-KYC. Here is how to verify your name.",
    content: `The Department of Agriculture & Farmers Welfare has officially begun finalizing the beneficiary list for the upcoming 19th installment of the Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) scheme. Over 9.5 crore farmers across the country are expected to receive ₹2,000 directly into their Aadhaar-seeded bank accounts.

Key Points to Ensure Payment Credit:
1. Active Land Seeding: Ensure your land records are verified on the portal.
2. Aadhaar-Bank Account Linkage: Check your NPCI status with your bank branch.
3. Complete e-KYC: OTP-based verification on pmkisan.gov.in takes under 2 minutes.

Farmers whose names are in the beneficiary list with an 'Approved' status by the State Nodal Officer will receive SMS notifications on the day of disbursement.`,
    category: "Payment Updates",
    relatedScheme: "PM Kisan Samman Nidhi",
    sourceUrl: "https://pmkisan.gov.in",
    publishedAt: "2025-02-14",
    featured: true,
    views: 18450,
    lastViewedAt: "2025-02-14",
  },
  {
    id: "news-2",
    title: "Majhi Ladki Bahin Yojana: DBT Bank Account Seeding Deadline Extended",
    slug: "ladki-bahin-dbt-bank-account-deadline-extended",
    summary: "Maharashtra Women and Child Development Department issues fresh circular regarding women facing Aadhaar DBT failure.",
    content: `In a major relief to applicants of the Mukhyamantri Majhi Ladki Bahin Yojana in Maharashtra, the Women and Child Development Department has clarified that applicants whose payments bounced due to Aadhaar-NPCI mapping issues will receive accumulated arrears once their bank linking is finalized.

District collectors have set up special help desks at taluka Setu Suvidha Kendras to assist women in submitting bank NPCI mandate forms. Beneficiaries can check their rejection reason by logging in on ladkibahin.maharashtra.gov.in.`,
    category: "State Welfare",
    relatedScheme: "Mukhyamantri Majhi Ladki Bahin Yojana",
    sourceUrl: "https://ladkibahin.maharashtra.gov.in",
    publishedAt: "2025-02-13",
    featured: true,
    views: 24800,
    lastViewedAt: "2025-02-13",
  },
  {
    id: "news-3",
    title: "Union Budget 2025: Tarun Mudra Loan Limit Doubled to ₹20 Lakh",
    slug: "mudra-loan-limit-doubled-budget-update",
    summary: "Finance Ministry expands credit support for small businesses that have demonstrated sound repayment history under PMMY.",
    content: `Micro, Small, and Medium Enterprises (MSMEs) and small shopkeepers have received a major boost as the Government of India formally notified the enhanced loan ceiling under the Tarun category of the Pradhan Mantri Mudra Yojana (PMMY).

Entrepreneurs who previously availed of a Tarun loan up to ₹10 Lakh and repaid it promptly can now access collateral-free business financing up to ₹20 Lakh. Public sector banks have updated their JanSamarth portal integration to accept applications under the new 'Tarun Plus' category.`,
    category: "Finance & Loans",
    relatedScheme: "Pradhan Mantri MUDRA Yojana",
    sourceUrl: "https://www.mudra.org.in",
    publishedAt: "2025-02-11",
    featured: false,
    views: 12300,
    lastViewedAt: "2025-02-11",
  },
];

