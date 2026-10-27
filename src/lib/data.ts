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
  {
    id: "mukhyamantri-laghu-sinchai-yojana",
    title: "Mukhyamantri Laghu Sinchai Yojana 2026: Subsidies on Borewells, Pumpsets & Solar Pumps",
    slug: "mukhyamantri-laghu-sinchai-yojana",
    summary: "State financial assistance and grants up to ₹1,00,000 for small and marginal farmers to install shallow borewells, medium tubewells, pump sets, and micro-irrigation pipelines.",
    description: "Mukhyamantri Laghu Sinchai Yojana is a targeted agricultural irrigation support scheme launched to assist small and marginal farmers in drought-prone and water-stressed farming regions. Under this initiative, the state government provides direct capital subsidies ranging from 50% to 80% on boring private tube-wells, purchasing ISI-certified pump sets, and installing underground PVC or HDPE water-carrying pipe networks.\n\n### Objectives & Impact\nThe primary goal is to ensure assured irrigation water reaching every acre of cultivable land (\"Har Khet Ko Pani\"). By subsidizing irrigation equipment, farmers can protect their kharif and rabi crops from erratic rainfall patterns, boost per-acre crop yields, and reduce dependence on expensive diesel generator rentals.\n\n### Subsidy Slabs\n1. **Shallow Borewell Scheme**: Grants up to ₹10,000 for drilling and ₹9,000 for pump set installation.\n2. **Medium Deep Tubewell**: Financial grant up to ₹75,000 for tubewell construction plus ₹10,000 for electric connection/pipe distribution.\n3. **Deep Tubewell Category**: Maximum subsidy up to ₹1,00,000 for high-depth borewell drilling in hard-rock strata.\n4. **Failure Compensation**: If a borewell collapses or yields no water despite following official hydrogeological parameters, a relief fund covers up to 75% of drilling expenses.",
    category: "Farmer",
    type: "State",
    state: "Uttar Pradesh",
    beneficiary: "Small, Marginal and SC/ST Farmers",
    benefits: [
      "Direct capital subsidy up to ₹1,00,000 on borewell drilling and pump installation",
      "Special 70% to 80% subsidy preference for SC, ST, and women farmers",
      "Subsidized high-density polyethylene (HDPE) pipes for water-saving drip and sprinkler lines",
      "Government hydrogeological survey assistance to determine accurate groundwater depth"
    ],
    eligibility: [
      "Applicant must be a permanent resident farmer of Uttar Pradesh",
      "Must own cultivable agricultural land registered in official land records (Khatauni / Khasra)",
      "Landholding must fall under small (1-2 hectares) or marginal (less than 1 hectare) farmer category",
      "Must not have received borewell subsidy from another state or central scheme in the last 5 years",
      "Applicant must possess an active Aadhaar-seeded bank account for DBT subsidy release"
    ],
    documentsRequired: [
      "Aadhaar Card (linked to mobile number)",
      "Land Ownership Document (Khatauni / Khasra certificate)",
      "Small / Marginal Farmer Certificate issued by Revenue Authority",
      "Caste Certificate (for SC / ST applicants to claim higher subsidy)",
      "Aadhaar-seeded Bank Passbook with IFSC code",
      "Passport-sized photograph"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit the Agriculture Department Portal",
        description: "Open your browser and navigate to the official agriculture portal at upagripardarshi.gov.in."
      },
      {
        stepNumber: 2,
        title: "Farmer Registration & Login",
        description: "Log in with your 9-digit Farmer ID (Kisan Panjikaran Sankhya) or register using Aadhaar OTP."
      },
      {
        stepNumber: 3,
        title: "Select Laghu Sinchai Scheme",
        description: "Under the 'Online Services' section, choose 'Mukhyamantri Laghu Sinchai Yojana' and select your borewell category."
      },
      {
        stepNumber: 4,
        title: "Upload Documents & Submit Application",
        description: "Upload scanned copies of land records, caste certificate, and bank details, then submit your token application."
      },
      {
        stepNumber: 5,
        title: "Physical Verification & Fund Release",
        description: "Local assistant agriculture engineer conducts GPS-tagged spot inspection before disbursing the subsidy directly via DBT."
      }
    ],
    officialPortalUrl: "https://upagripardarshi.gov.in",
    applicationDeadline: "Ongoing (Season-based token release)",
    status: "Active",
    helplineNumber: "1800-180-1551 / 0522-2207160",
    faqs: [
      {
        question: "Can large farmers apply for Mukhyamantri Laghu Sinchai Yojana?",
        answer: "The scheme prioritizes small and marginal farmers owning up to 2 hectares. General farmers with larger holdings may apply only if spare targets remain after satisfying small/marginal farmer queues."
      },
      {
        question: "What happens if borewell fails to strike water?",
        answer: "The government offers partial failure compensation of up to 75% of the approved drilling expense provided the official geo-survey protocols were followed."
      },
      {
        question: "How is the subsidy amount paid?",
        answer: "All subsidy payments are transferred directly via Aadhaar Direct Benefit Transfer (DBT) into the verified bank account of the farmer."
      }
    ],
    featured: true,
    views: 18450,
    updatedAt: "2026-10-20"
  },
  {
    id: "lakhpati-didi-yojana",
    title: "Lakhpati Didi Yojana 2026: Eligibility, ₹5 Lakh Interest-Free Loan & Application Form",
    slug: "lakhpati-didi-yojana-eligibility-loan",
    summary: "Empowering 3 crore rural women in Self-Help Groups (SHGs) with skill training, zero-interest business micro-loans up to ₹5 Lakhs, and market linkages to earn ₹1,00,000+ yearly.",
    description: "Lakhpati Didi Yojana is a nationwide women-centric livelihood initiative spearheaded by the Ministry of Rural Development under the Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM). The mission aims to enable rural women self-help group members to establish micro-enterprises and achieve a sustainable annual household income of at least ₹1 Lakh.\n\n### Core Pillars of Lakhpati Didi\n1. **Skill Training & Capacity Building**: Women are trained in modern vocational trades including drone piloting (Namo Drone Didi), solar panel assembly, LED bulb manufacturing, mushroom farming, agro-processing, dairy management, and digital accounting.\n2. **Collateral-Free Institutional Credit**: Members receive easy access to SHG community investment funds and bank credit up to ₹5 Lakhs at zero or heavily subsidized interest rates.\n3. **Market Linkages & Branding**: Finished goods, organic foods, and handicrafts produced by women entrepreneurs are onboarded to e-commerce platforms like Government e-Marketplace (GeM) and SARAS Aajeevika fairs.",
    category: "Women",
    type: "Central",
    state: "All India",
    beneficiary: "Rural Women Members of Active Self-Help Groups (SHGs)",
    benefits: [
      "Access to collateral-free enterprise loans up to ₹5,00,000 through SHG bank linkages",
      "Certified vocational training and mentorship in agriculture, technical, and digital trades",
      "Free access to community investment funds and revolving credit facilities",
      "Direct integration with government procurement and online sales platforms like GeM"
    ],
    eligibility: [
      "Applicant must be an Indian female citizen aged between 18 and 55 years",
      "Must be an active, verified member of a registered Self-Help Group (SHG) under DAY-NRLM",
      "Annual household income must currently be below ₹1,00,000",
      "Must have a functional Aadhaar-linked individual bank account with DBT enabled",
      "Applicant or immediate family must not have defaulted on previous micro-credit repayments"
    ],
    documentsRequired: [
      "Aadhaar Card of the applicant",
      "SHG Membership ID / Verification Certificate signed by Group President",
      "Income Certificate issued by Revenue Authority",
      "Bank Account Passbook (Aadhaar linked)",
      "Detailed Micro-Enterprise Business Plan / Project Proposal",
      "Passport size photographs"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Contact Your Local SHG or Gram Sangathan",
        description: "Attend your village Self-Help Group (SHG) or Village Organization (VO) monthly meeting."
      },
      {
        stepNumber: 2,
        title: "Prepare a Micro-Business Proposal",
        description: "With assistance from your Community Resource Person (CRP), prepare a viable micro-enterprise project proposal."
      },
      {
        stepNumber: 3,
        title: "Submit Application via Block Mission Management Unit (BMMU)",
        description: "Submit the completed Lakhpati Didi application form and business plan to the Block Development Officer (BDO) or BMMU coordinator."
      },
      {
        stepNumber: 4,
        title: "Attend Skill Training & Loan Disbursal",
        description: "Undergo designated skill training at the RSETI / Krishi Vigyan Kendra, following which credit is sanctioned directly to your SHG account."
      }
    ],
    officialPortalUrl: "https://nrlm.gov.in",
    applicationDeadline: "Ongoing (Target 3 Crore Beneficiaries)",
    status: "Active",
    helplineNumber: "011-23386173 / 1800-111-555",
    faqs: [
      {
        question: "Can women who are not part of an SHG apply?",
        answer: "Individual women must first join or form a local Self-Help Group registered under DAY-NRLM to qualify for Lakhpati Didi training and credit subsidies."
      },
      {
        question: "What is the maximum loan limit under Lakhpati Didi?",
        answer: "SHG members can avail enterprise bank loans ranging from ₹1,00,000 to ₹5,00,000 depending on the viability of their proposed business plan."
      },
      {
        question: "Are drone piloting training courses included?",
        answer: "Yes, under the Namo Drone Didi sub-component, eligible women are trained as drone operators for fertilizer spraying and seed broadcasting."
      }
    ],
    featured: true,
    views: 42100,
    updatedAt: "2026-10-23"
  },
  {
    id: "pm-vishwakarma-yojana",
    title: "PM Vishwakarma Kaushal Samman Yojana 2026: ₹3 Lakh Loan, ₹15,000 Toolkit & Stipend",
    slug: "pm-vishwakarma-yojana-online-apply",
    summary: "Central financial and skill support for traditional artisans and craftspeople across 18 trades with collateral-free enterprise loans up to ₹3 Lakhs at 5% interest and ₹15,000 e-voucher toolkit grants.",
    description: "PM Vishwakarma is an ambitious Central Sector initiative designed to provide holistic, end-to-end support to traditional artisans and craftspeople across India. Recognizing the cultural and economic importance of individuals working with their hands and specialized tools, the scheme enhances product quality, upgrades production techniques, and integrates artisans into domestic and global supply chains.\n\n### Eligible Trades Covered (18 Traditional Occupations)\nCarpenters (Suthar), Boat Makers, Armourers, Blacksmiths (Lohar), Hammer & Tool Kit Makers, Locksmiths, Sculptors / Stone Carvers, Goldsmiths (Sonar), Potters (Kumhaar), Cobblers (Charmakar), Masons (Rajmistri), Basket/Mat/Broom Weavers, Doll & Toy Makers, Barbers (Naai), Garland Makers (Malakaar), Washermen (Dhobi), Tailors (Darzi), and Fishing Net Makers.\n\n### Key Financial & Non-Financial Benefits\n1. **Collateral-Free Credit Support**: Enterprise credit up to ₹1,00,000 (Tranche 1, 18-month tenure) and ₹2,00,000 (Tranche 2, 30-month tenure) at a concessional interest rate of 5% with government interest subvention of 8%.\n2. **Toolkit Incentive**: Direct digital grant of ₹15,000 credited via e-voucher or UPI for procuring modern equipment.\n3. **Training & Daily Stipend**: 5 to 7 days of basic skill training and 15 days of advanced training with a daily cash stipend of ₹500.\n4. **Digital Transaction Cashback**: ₹1 per transaction up to 100 transactions per month.",
    category: "Business",
    type: "Central",
    state: "All India",
    beneficiary: "Artisans and Craftspeople in 18 Traditional Occupations",
    benefits: [
      "Collateral-free enterprise credit up to ₹3,00,000 at an effective subsidized interest rate of 5%",
      "One-time ₹15,000 grant for purchasing modern vocational toolkit",
      "Skill upgradation training with ₹500 per day cash stipend during training",
      "Official PM Vishwakarma Certificate and National ID Card"
    ],
    eligibility: [
      "Must be an Indian artisan or craftsperson working in one of the 18 eligible trades",
      "Minimum age of the beneficiary must be 18 years on the date of application",
      "Only one member per family (husband, wife, and unmarried children) is eligible",
      "Applicant must not have availed loans under PMEGP, PM SVANidhi, or Mudra schemes in the last 5 years (except Mudra repaid accounts)",
      "Government employees and their immediate family members are not eligible"
    ],
    documentsRequired: [
      "Aadhaar Card (linked to active mobile number)",
      "Bank Account details (Passbook or cancelled cheque with IFSC)",
      "Ration Card or Family Identification Document",
      "Trade-specific skill self-declaration",
      "Passport size photograph"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit Nearest Common Service Center (CSC)",
        description: "Take your Aadhaar card, ration card, and bank details to the nearest CSC center."
      },
      {
        stepNumber: 2,
        title: "Aadhaar Biometric Authentication",
        description: "The CSC VLE verifies your identity through biometric fingerprint or iris scanning on pmvishwakarma.gov.in."
      },
      {
        stepNumber: 3,
        title: "Trade Selection & Form Submission",
        description: "Select your active artisan trade from the 18 occupations and fill in bank and family details."
      },
      {
        stepNumber: 4,
        title: "Three-Stage Verification",
        description: "Application is verified by the Gram Panchayat / Urban Local Body, followed by District Implementation Committee and Screening Committee."
      },
      {
        stepNumber: 5,
        title: "ID Card Issuance & Credit Sanction",
        description: "Download your PM Vishwakarma ID card and attend skill training to unlock the ₹15,000 toolkit voucher and loan approval."
      }
    ],
    officialPortalUrl: "https://pmvishwakarma.gov.in",
    applicationDeadline: "Ongoing (Target 30 Lakh Artisans)",
    status: "Active",
    helplineNumber: "1800-267-7777 / 011-23061500",
    faqs: [
      {
        question: "Is collateral or security needed for the ₹3 Lakh loan?",
        answer: "No, the entire loan is 100% collateral-free and backed by the Credit Guarantee Scheme for Micro and Small Enterprises (CGTMSE)."
      },
      {
        question: "Can tailors receive the ₹15,000 toolkit voucher?",
        answer: "Yes, tailors (Darzi) are one of the 18 notified artisan trades and are fully eligible for the ₹15,000 toolkit incentive to buy modern sewing machines."
      },
      {
        question: "How long does the verification take?",
        answer: "Verification usually takes 2 to 4 weeks across the Gram Panchayat / ULB, District Committee, and State Level Screening Committee."
      }
    ],
    featured: true,
    views: 39500,
    updatedAt: "2026-10-25"
  },
  {
    id: "pm-svanidhi-yojana",
    title: "PM SVANidhi Yojana 2026: Working Capital Loan for Street Vendors up to ₹50,000",
    slug: "pm-svanidhi-yojana-street-vendors",
    summary: "Micro-credit support for urban street vendors, hawkers, and cart operators with collateral-free loans in 3 tranches (₹10,000, ₹20,000, ₹50,000), 7% interest subsidy, and digital cashback.",
    description: "Pradhan Mantri Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi) was launched by the Ministry of Housing and Urban Affairs to empower street vendors by providing affordable working capital credit to restart their businesses and scale up operations.\n\n### Loan Structure & Stepped Credit Limits\n1. **First Tranche**: Initial working capital loan up to ₹10,000 with a 1-year repayment tenure.\n2. **Second Tranche**: On timely or early repayment of the first loan, vendors are eligible for an enhanced loan up to ₹20,000 with a 1.5-year tenure.\n3. **Third Tranche**: Upon successful repayment of the second loan, vendors can access loans up to ₹50,000 with a 3-year repayment period.\n\n### Incentives & Digital Cashback\n- **7% Interest Subsidy**: Borrowers who pay EMIs on time receive an interest subsidy of 7% per annum credited quarterly directly into their bank accounts.\n- **Digital Cashback**: Vendors get ₹1 per digital transaction up to ₹100 per month (up to ₹1,200 annually) for accepting payments through QR codes (UPI, RuPay).",
    category: "Business",
    type: "Central",
    state: "All India",
    beneficiary: "Urban Street Vendors, Hawkers, Thela & Rehri Operators",
    benefits: [
      "Access to collateral-free working capital loans of ₹10,000, ₹20,000, and ₹50,000",
      "7% interest subsidy credited quarterly on timely repayment",
      "No prepayment penalty for clearing loans ahead of schedule",
      "Monthly digital cashback rewards up to ₹100 for receiving digital payments"
    ],
    eligibility: [
      "Must be a street vendor engaged in vending goods/services in urban or peri-urban areas",
      "Vendors who possess a Certificate of Vending (CoV) or Identity Card issued by Urban Local Bodies (ULBs)",
      "Vendors who have been identified in the ULB street vendor survey but not yet received cards can apply using a Letter of Recommendation (LoR)",
      "Must possess an active Aadhaar-linked bank savings account"
    ],
    documentsRequired: [
      "Aadhaar Card (linked to mobile number for OTP)",
      "Certificate of Vending (CoV) or Letter of Recommendation (LoR) from Municipal Corporation",
      "Bank Account Passbook / Statement",
      "Active Mobile Number"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit PM SVANidhi Portal",
        description: "Open pmsvanidhi.mohua.gov.in or download the PM SVANidhi mobile application."
      },
      {
        stepNumber: 2,
        title: "Verify Mobile Number via OTP",
        description: "Enter your active mobile number and confirm OTP authentication."
      },
      {
        stepNumber: 3,
        title: "Select Vending Status & Enter Details",
        description: "Select whether you have a Certificate of Vending or need to generate a Letter of Recommendation."
      },
      {
        stepNumber: 4,
        title: "Select Lending Institution",
        description: "Choose your preferred public sector bank, private bank, microfinance institution, or NBFC."
      },
      {
        stepNumber: 5,
        title: "Loan Sanction & Disbursal",
        description: "The bank reviews your profile and disburses the loan amount directly into your savings account within 7 to 10 days."
      }
    ],
    officialPortalUrl: "https://pmsvanidhi.mohua.gov.in",
    applicationDeadline: "Ongoing",
    status: "Active",
    helplineNumber: "1800-11-1979 / 011-23063266",
    faqs: [
      {
        question: "Is any guarantor or property collateral required?",
        answer: "No, PM SVANidhi loans are 100% collateral-free and do not require any guarantor."
      },
      {
        question: "How do vendors get the 7% interest subsidy?",
        answer: "The 7% subsidy is calculated quarterly and directly credited to your bank account via DBT as long as your monthly EMIs are paid without default."
      },
      {
        question: "Can vendors in rural areas apply?",
        answer: "The scheme primarily covers vendors operating in urban areas, peri-urban zones, and census towns. Rural vendors vending in nearby cities are also eligible."
      }
    ],
    featured: true,
    views: 26800,
    updatedAt: "2026-10-21"
  },
  {
    id: "pm-awas-yojana-urban-2",
    title: "Pradhan Mantri Awas Yojana - Urban 2.0 (PMAY-U 2.0): Up to ₹2.5 Lakh Housing Subsidy",
    slug: "pm-awas-yojana-urban-2-0-subsidy",
    summary: "Central financial assistance up to ₹2.50 Lakhs for constructing or purchasing affordable pucca houses for 1 crore urban poor and middle-income families (EWS, LIG, and MIG).",
    description: "Pradhan Mantri Awas Yojana - Urban 2.0 (PMAY-U 2.0) is the upgraded flagship housing mission launched to address the housing shortage among urban poor and middle-income segments. Building upon the success of the initial PMAY-U mission, the 2.0 iteration covers 1 crore additional urban families over a five-year period.\n\n### Verticals Under PMAY-U 2.0\n1. **Beneficiary-Led Construction (BLC)**: Financial assistance of up to ₹2.50 Lakhs for EWS families owning land to construct their own new pucca house.\n2. **Affordable Housing in Partnership (AHP)**: Subsidized flats constructed in collaboration with private developers or public housing boards.\n3. **Interest Subsidy Scheme (ISS)**: 4% interest subsidy on home loans up to ₹25 Lakhs for houses valued up to ₹35 Lakhs for EWS/LIG and eligible MIG families.\n4. **Affordable Rental Housing (ARH)**: Dedicated rental housing complexes for urban migrants, industrial laborers, and students.",
    category: "Housing",
    type: "Central",
    state: "All India",
    beneficiary: "Urban Families belonging to EWS, LIG, and MIG Categories",
    benefits: [
      "Direct financial grant up to ₹2,50,000 for building a pucca house on owned land",
      "4% home loan interest subsidy (up to ₹1.80 Lakh upfront benefit) under ISS vertical",
      "Female ownership or co-ownership mandatory, empowering women in asset titles",
      "Integrated civic amenities including piped drinking water, electricity, and sanitation"
    ],
    eligibility: [
      "The beneficiary family must not own a pucca house in their name anywhere in India",
      "Economically Weaker Section (EWS): Annual household income up to ₹3,00,000",
      "Low Income Group (LIG): Annual household income between ₹3,00,001 and ₹6,00,000",
      "Middle Income Group (MIG): Annual household income between ₹6,00,001 and ₹9,00,000",
      "Must be a resident of the statutory town or municipal corporation area as per Census 2011/current notifications"
    ],
    documentsRequired: [
      "Aadhaar Cards of all adult family members",
      "Income Certificate / Form 16 / ITR of earning members",
      "Land ownership title deed (Registry / Patta) for Beneficiary Led Construction (BLC)",
      "Bank Account details (Aadhaar-seeded)",
      "Affidavit affirming no other pucca house owned across India",
      "Passport size photographs"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit PMAY-Urban 2.0 Portal",
        description: "Go to pmay-urban.gov.in and click on 'Apply Online PMAY-U 2.0'."
      },
      {
        stepNumber: 2,
        title: "Aadhaar e-KYC Verification",
        description: "Enter the primary applicant's Aadhaar number and verify via OTP on the registered mobile."
      },
      {
        stepNumber: 3,
        title: "Select Application Vertical",
        description: "Choose among Beneficiary Led Construction (BLC), AHP, or Interest Subsidy Scheme (ISS)."
      },
      {
        stepNumber: 4,
        title: "Enter Personal, Income, and Land Details",
        description: "Fill in city name, ward number, annual household income, and land registration numbers."
      },
      {
        stepNumber: 5,
        title: "Submit and Track Application",
        description: "Save your 14-digit Application Reference Number to track municipal screening, geo-tagging, and subsidy release."
      }
    ],
    officialPortalUrl: "https://pmay-urban.gov.in",
    applicationDeadline: "Ongoing (Mission valid till 2029)",
    status: "Active",
    helplineNumber: "1800-11-6163 / 011-23060484",
    faqs: [
      {
        question: "Is female co-ownership mandatory under PMAY-U 2.0?",
        answer: "Yes, for EWS and LIG categories, the house title must be in the name of the female head of the family or jointly in the name of husband and wife."
      },
      {
        question: "What is the minimum carpet area required?",
        answer: "Houses constructed under PMAY-U 2.0 must have a minimum carpet area of 30 square meters equipped with dedicated toilet, kitchen, and water facilities."
      },
      {
        question: "How is the construction progress monitored?",
        answer: "Construction progress is verified through geo-tagged photographs at four stages: foundation, plinth, lintel, and final roof completion."
      }
    ],
    featured: true,
    views: 31200,
    updatedAt: "2026-10-24"
  },
  {
    id: "pm-awas-yojana-gramin",
    title: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G): ₹1.20 Lakh Grant & Beneficiary List Check",
    slug: "pm-awas-yojana-gramin-list-check",
    summary: "Financial assistance of ₹1,20,000 in plains and ₹1,30,000 in hilly/remote states for houseless rural families to construct hygienic pucca houses, plus 90 days MGNREGA wages.",
    description: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G) is implemented by the Ministry of Rural Development with the goal of providing a pucca house with basic amenities to all houseless families and those living in kutcha or dilapidated houses in rural areas.\n\n### Financial Support Breakdown\n1. **Direct Construction Grant**: ₹1,20,000 per unit in plain regions and ₹1,30,000 per unit in North-Eastern states, Himalayan states (Jammu & Kashmir, Ladakh, Himachal Pradesh, Uttarakhand), and Integrated Action Plan (IAP) districts.\n2. **MGNREGA Wage Support**: Beneficiaries are entitled to 90 to 95 person-days of unskilled labor wages under MGNREGA (adding approximately ₹20,000 to ₹25,000).\n3. **Swachh Bharat Toilet Incentive**: Additional grant of ₹12,000 under Swachh Bharat Mission - Gramin (SBM-G) for mandatory toilet construction.\n4. **Basic Convergence Amenities**: Clean piped drinking water under Jal Jeevan Mission, free LPG gas cylinder connection under PM Ujjwala Yojana, and subsidized electricity connection under Saubhagya.",
    category: "Housing",
    type: "Central",
    state: "All India",
    beneficiary: "Houseless and Kutcha House Living Rural Families Identified via SECC",
    benefits: [
      "Direct DBT grant of ₹1,20,000 (plains) or ₹1,30,000 (hilly/tribal areas)",
      "90-95 days of paid unskilled manual labor under MGNREGA (~₹22,000 extra benefit)",
      "Additional ₹12,000 grant for toilet construction under Swachh Bharat Mission",
      "Free LPG gas connection and piped drinking water convergence"
    ],
    eligibility: [
      "Family must be living in zero, one, or two-room houses with kutcha walls and kutcha roof as per SECC 2011 / Awas+ survey",
      "Must not own a motorized two-wheeler, three-wheeler, four-wheeler, or mechanized agricultural equipment",
      "No member of the household should be a government employee or pay income tax / professional tax",
      "Must possess a valid MGNREGA Job Card and Aadhaar-seeded bank account"
    ],
    documentsRequired: [
      "Aadhaar Card of the applicant and adult household members",
      "MGNREGA Job Card Number",
      "Bank Account Passbook (Aadhaar seeded for DBT)",
      "Sworn affidavit confirming no other pucca home owned",
      "Village Panchayat endorsement / Gram Sabha approval record"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Awas+ Survey Enrollment",
        description: "Beneficiary inclusion is conducted through mobile survey by the Gram Panchayat Secretary / Gram Rozgar Sahayak using the Awaas+ app."
      },
      {
        stepNumber: 2,
        title: "Gram Sabha Verification",
        description: "The compiled draft list is read aloud and verified during the open Gram Sabha meeting."
      },
      {
        stepNumber: 3,
        title: "Geo-Tagging Inspection (AwaasApp)",
        description: "A block official visits the applicant's existing kutcha dwelling to take geo-tagged photographs."
      },
      {
        stepNumber: 4,
        title: "Three-Stage Installment Disbursal",
        description: "Grant is disbursed in three direct DBT installments: 1st on sanction, 2nd at plinth level, and 3rd at lintel/roof level."
      }
    ],
    officialPortalUrl: "https://pmayg.nic.in",
    applicationDeadline: "Ongoing (Target 2.95 Crore Rural Homes)",
    status: "Active",
    helplineNumber: "1800-11-6446 / 011-23060484",
    faqs: [
      {
        question: "Can I apply individually online for PMAY-G?",
        answer: "Individual online self-registration is not allowed for PMAY-G. Beneficiaries must be registered by authorized Gram Panchayat officials through the AwaasApp survey system."
      },
      {
        question: "How do I check my name in the PMAY Gramin beneficiary list?",
        answer: "Visit pmayg.nic.in, click on 'Awaassoft' -> 'Reports', select 'Beneficiary details for verification', select your State, District, Block, and Panchayat to view the approved roster."
      },
      {
        question: "Are installments paid in cash or bank transfer?",
        answer: "All installments are strictly credited directly into the beneficiary's Aadhaar-linked bank account via the Public Financial Management System (PFMS)."
      }
    ],
    featured: true,
    views: 37400,
    updatedAt: "2026-10-22"
  },
  {
    id: "pm-ujjwala-yojana-2",
    title: "Pradhan Mantri Ujjwala Yojana 2.0 / 3.0: Free LPG Gas Connection & ₹300 Subsidy",
    slug: "pm-ujjwala-yojana-free-lpg-connection",
    summary: "Free LPG gas connection with stove and first 14.2kg cylinder refill for adult women from poor households, plus an ongoing ₹300 per cylinder targeted DBT subsidy for up to 12 refills a year.",
    description: "Pradhan Mantri Ujjwala Yojana (PMUY) was launched by the Ministry of Petroleum and Natural Gas to safeguard the health of women and children by replacing unclean cooking fuels (firewood, coal, cow-dung cakes) with clean, efficient Liquified Petroleum Gas (LPG).\n\nUnder Ujjwala 2.0 / 3.0, the government provides an entirely cost-free LPG connection including security deposit for the 14.2 kg or 5 kg cylinder, regulator, safety rubber hose, domestic gas consumer card (DGCC), stove, and the first gas refill.\n\n### Targeted ₹300 Subsidy Extension\nAll active Ujjwala beneficiaries receive an ongoing targeted subsidy of ₹300 per 14.2 kg LPG cylinder refill for up to 12 refills per financial year directly credited to their bank accounts via Aadhaar DBT.",
    category: "Women",
    type: "Central",
    state: "All India",
    beneficiary: "Adult Women from BPL, Poor, SC/ST, and Deprived Rural Households",
    benefits: [
      "100% free LPG connection with zero security deposit for cylinder and regulator",
      "Free gas stove and free first 14.2 kg refill at the time of connection delivery",
      "Targeted direct cash subsidy of ₹300 per cylinder for up to 12 refills annually",
      "Freedom from indoor smoke pollution, respiratory diseases, and fuel-gathering drudgery"
    ],
    eligibility: [
      "Applicant must be an adult woman aged 18 years or older",
      "No other existing LPG connection must be active in the applicant's household",
      "Must belong to poor households under SC/ST, PM Awas Yojana, Antyodaya Anna Yojana (AAY), or 14-point poverty declaration",
      "Must possess an active Aadhaar-linked bank account for subsidy transfer"
    ],
    documentsRequired: [
      "Aadhaar Card of the female applicant (proof of identity & address)",
      "Ration Card containing names of all family members or Supplementary Family Declaration",
      "Aadhaar of all adult family members residing in the household",
      "Bank Account details (Passbook or statement showing IFSC and account number)",
      "Passport-sized photograph of the applicant"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit PMUY Official Portal or Nearest Gas Agency",
        description: "Go to pmuy.gov.in or visit your nearest Indane, Bharat Gas, or HP Gas distributor showroom."
      },
      {
        stepNumber: 2,
        title: "Select Preferred Oil Marketing Company (OMC)",
        description: "Choose Indane, Bharatgas, or HP Gas on the portal and click 'Apply for New Ujjwala 2.0 Connection'."
      },
      {
        stepNumber: 3,
        title: "Submit Aadhaar & Family Details",
        description: "Enter your Aadhaar number, complete OTP verification, and input all family members listed on your ration card."
      },
      {
        stepNumber: 4,
        title: "Agency Verification & Free Cylinder Delivery",
        description: "The distributor verifies your application against the de-duplication database and delivers the gas connection, regulator, pipe, stove, and cylinder."
      }
    ],
    officialPortalUrl: "https://pmuy.gov.in",
    applicationDeadline: "Ongoing",
    status: "Active",
    helplineNumber: "1800-266-6696 / 1906 (24x7 Gas Emergency)",
    faqs: [
      {
        question: "Do migrants need a local ration card to apply?",
        answer: "No, under Ujjwala 2.0, migrant families do not require a local ration card; a simple self-declaration of address and family composition is sufficient."
      },
      {
        question: "Can an unmarried adult woman apply?",
        answer: "Yes, any adult woman aged 18+ can apply as long as no other LPG connection exists under the same household/ration card."
      },
      {
        question: "How is the ₹300 refill subsidy received?",
        answer: "The customer pays the full cylinder price to the delivery agent, and within 48 to 72 hours, the ₹300 subsidy is automatically transferred into her linked bank account."
      }
    ],
    featured: true,
    views: 29800,
    updatedAt: "2026-10-24"
  },
  {
    id: "kisan-credit-card-scheme",
    title: "Kisan Credit Card (KCC) Scheme 2026: Concessional Agri-Loans up to ₹3 Lakh at 4% Interest",
    slug: "kisan-credit-card-apply-online-eligibility",
    summary: "Revolving institutional credit limit up to ₹3,00,000 for farmers, dairy owners, and fisheries at a concessional effective interest rate of 4% per annum with prompt repayment subvention.",
    description: "The Kisan Credit Card (KCC) scheme was introduced by the Reserve Bank of India (RBI) and NABARD to provide timely and adequate short-term credit to farmers for meeting their cultivation expenses, purchasing quality seeds and fertilizers, harvesting crops, and managing post-harvest working capital.\n\nThe scheme has also been expanded to cover allied agricultural sectors including animal husbandry, dairy farming, poultry, and fisheries.\n\n### Interest Subvention Framework\n- **Standard Bank Rate**: 9% per annum.\n- **Government Interest Subvention**: 2% upfront discount, bringing the base rate down to 7%.\n- **Prompt Repayment Incentive (PRI)**: Additional 3% rebate for farmers who repay their loans on or before the due date.\n- **Net Effective Interest Rate**: Just **4% per annum** on short-term crop loans up to ₹3 Lakhs!\n- **Collateral-Free Limit**: Loans up to ₹1.60 Lakhs (and up to ₹2.00 Lakhs through tie-ups) require zero land mortgage or collateral security.",
    category: "Farmer",
    type: "Central",
    state: "All India",
    beneficiary: "Owner Cultivators, Tenant Farmers, Oral Lessees, Dairy & Fisheries Farmers",
    benefits: [
      "Short-term agricultural working capital credit up to ₹3,00,000 at only 4% effective interest rate",
      "Collateral-free borrowing up to ₹1,60,000 without requiring land mortgage deeds",
      "Valid for 5 years with simple annual review and flexible withdrawal through RuPay KCC ATM cards",
      "Bundled personal accident insurance cover up to ₹50,000 for death or permanent disability"
    ],
    eligibility: [
      "All individual owner-cultivator farmers owning cultivable agricultural land",
      "Tenant farmers, sharecroppers, and oral lessees cultivating land under informal agreements",
      "Self-Help Groups (SHGs) and Joint Liability Groups (JLGs) of small and marginal farmers",
      "Farmers engaged in animal husbandry, dairy, poultry, sheep, piggery, and fisheries operations"
    ],
    documentsRequired: [
      "Duly filled KCC Application Form",
      "Aadhaar Card or Voter ID (proof of identity and address)",
      "Land Record Documents (Khasra, Khatauni, Satbara 7/12 extract, or tenancy agreement)",
      "Cropping pattern declaration verified by Village Revenue Officer / Patwari",
      "Two passport-sized photographs",
      "No Dues Certificate (if borrowing above collateral-free limit from a new bank)"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Download One-Page Simplified KCC Form",
        description: "Download the unified one-page KCC form from pmkisan.gov.in or your preferred commercial/cooperative bank website."
      },
      {
        stepNumber: 2,
        title: "Attach Land Records & Aadhaar",
        description: "Fill in crop details, acreage, and attach copies of your latest land revenue extract and Aadhaar card."
      },
      {
        stepNumber: 3,
        title: "Submit to Local Bank Branch",
        description: "Submit the physical form to your nearest State Bank of India, Regional Rural Bank (RRB), or District Central Cooperative Bank (DCCB)."
      },
      {
        stepNumber: 4,
        title: "Receive RuPay Kisan Credit Card",
        description: "Banks are mandated to process KCC applications within 14 working days and issue a smart RuPay KCC ATM debit card."
      }
    ],
    officialPortalUrl: "https://www.myscheme.gov.in/schemes/kcc",
    applicationDeadline: "Ongoing",
    status: "Active",
    helplineNumber: "1800-11-5526 / 011-24300606",
    faqs: [
      {
        question: "Can PM-Kisan beneficiaries get a KCC easily?",
        answer: "Yes, the Ministry of Agriculture launched a saturation drive where PM-KISAN registered farmers only need to submit their land details and Aadhaar to get instant KCC issuance."
      },
      {
        question: "What is the validity period of a Kisan Credit Card?",
        answer: "A Kisan Credit Card is valid for 5 years, subject to an annual performance review and renewal of crop limits."
      },
      {
        question: "Can dairy farmers without farm land apply for KCC?",
        answer: "Yes, dairy farmers owning milch cows or buffaloes can avail working capital credit up to ₹2 Lakhs under the KCC Animal Husbandry sub-scheme."
      }
    ],
    featured: true,
    views: 34100,
    updatedAt: "2026-10-24"
  },
  {
    id: "mahadbt-scholarship-scheme",
    title: "MahaDBT Post-Matric Scholarship Scheme 2026-27: 100% Tuition Fee Waiver & Maintenance",
    slug: "mahadbt-scholarship-apply-online-portal",
    summary: "Complete or 50% tuition and exam fee reimbursement, along with monthly maintenance allowance for SC, ST, OBC, VJNT, SBC, and EBC students studying in Maharashtra colleges.",
    description: "MahaDBT (Maharashtra Direct Benefit Transfer) is the comprehensive unified scholarship portal managed by the Government of Maharashtra. The portal hosts post-matric scholarship and freeship schemes operated by the Social Justice & Special Assistance Department, Tribal Development Department, Directorate of Higher Education (DHE), and Directorate of Technical Education (DTE).\n\n### Key Scholarship Programs on MahaDBT\n1. **Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC)**: 50% tuition and exam fee concession for General / EWS / Open category students with family income up to ₹8 Lakhs.\n2. **Post-Matric Scholarship for SC Students**: 100% tuition and exam fees covered, plus a monthly maintenance allowance up to ₹1,200 per month for hostellers.\n3. **Vasantrao Naik & OBC/VJNT/SBC Post Matric Scholarship**: Full tuition fees covered in government and private-aided colleges for reserved categories.\n4. **Dr. Panjabrao Deshmukh Hostel Maintenance Allowance**: Financial hostel assistance up to ₹30,000 per year for children of small and marginal farmers studying in technical/professional courses.",
    category: "Student",
    type: "State",
    state: "Maharashtra",
    beneficiary: "SC, ST, VJNT, OBC, SBC, EWS, and EBC Students in Maharashtra Colleges",
    benefits: [
      "Up to 100% reimbursement of tuition and examination fees directly transferred to colleges",
      "Hostel maintenance allowance up to ₹30,000 per year for eligible hostellers",
      "Transparent online status tracking and direct Aadhaar DBT disbursal without middlemen",
      "Covers engineering, medicine, pharmacy, polytechnic, arts, science, and commerce streams"
    ],
    eligibility: [
      "Applicant must be a permanent resident of Maharashtra state with valid Domicile Certificate",
      "Must have passed SSC (Class 10) or HSC (Class 12) from a recognized board in Maharashtra",
      "Admission must be secured in a government-recognized college/university via CAP or merit round",
      "Annual family income: Up to ₹2.5 Lakhs for SC/ST; Up to ₹1.5 Lakhs for OBC/SBC/VJNT full freeship; Up to ₹8 Lakhs for EBC/EWS",
      "Must possess an active Aadhaar-seeded bank account linked to NPCI"
    ],
    documentsRequired: [
      "Aadhaar Card (linked to active mobile number)",
      "Maharashtra Domicile Certificate",
      "Caste Certificate & Caste Validity Certificate (for reserved categories)",
      "Income Certificate issued by Tehsildar (valid for current financial year)",
      "Previous Year Marksheet (Class 10th / 12th / Graduation)",
      "Current Year College Fee Receipt and College Admission Allotment Letter",
      "Hostel Bonafide Certificate (if claiming hostel allowance)"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Register on MahaDBT Portal",
        description: "Go to mahadbt.maharashtra.gov.in and click on 'New Applicant Registration'."
      },
      {
        stepNumber: 2,
        title: "Aadhaar e-KYC Verification",
        description: "Complete OTP-based Aadhaar authentication and verify your NPCI bank account seeding status."
      },
      {
        stepNumber: 3,
        title: "Fill Profile (Personal, Address, Caste, Education)",
        description: "Complete your 6-step profile: personal info, address, caste, income, past education, and current course details."
      },
      {
        stepNumber: 4,
        title: "Select Scholarship Scheme & Apply",
        description: "The portal automatically recommends eligible schemes based on your caste and course. Select your scheme and upload receipts."
      },
      {
        stepNumber: 5,
        title: "College & Department Approval",
        description: "Your college nodal clerk verifies your documents online, followed by District Social Welfare approval and DBT installment transfer."
      }
    ],
    officialPortalUrl: "https://mahadbt.maharashtra.gov.in",
    applicationDeadline: "March 31, 2027 (Annual Academic Cycle)",
    status: "Active",
    helplineNumber: "022-49150800 / 022-68045600",
    faqs: [
      {
        question: "Can students admitted through Management Quota apply?",
        answer: "No, scholarships on MahaDBT are only available for students admitted through the Centralized Admission Process (CAP) or government merit rounds."
      },
      {
        question: "Is Caste Validity Certificate mandatory for professional courses?",
        answer: "Yes, SC, ST, and VJNT/OBC students pursuing degree or diploma courses in engineering, medicine, and architecture must upload a valid Caste Validity Certificate."
      },
      {
        question: "Why does MahaDBT show 'Aadhaar Bank Not Linked'?",
        answer: "You must visit your bank branch and submit the NPCI DBT Aadhaar mandate form so government scholarship funds can be credited successfully."
      }
    ],
    featured: true,
    views: 45600,
    updatedAt: "2026-10-25"
  },
  {
    id: "up-scholarship-scheme",
    title: "UP Scholarship 2026-27: Pre & Post Matric Online Apply, Status Check & Fee Reimbursement",
    slug: "up-scholarship-pre-post-matric-apply-online",
    summary: "Tuition fee reimbursement and monthly stipend for over 50 Lakh students belonging to General, OBC, SC, ST, and Minority categories in Uttar Pradesh.",
    description: "UP Scholarship is one of India's largest state scholarship programs, implemented by the Social Welfare Department, Backward Classes Welfare Department, and Minority Welfare Department of the Government of Uttar Pradesh.\n\nThe scheme provides complete fee reimbursement and sustenance allowances to meritorious and underprivileged students enrolled in pre-matric (Classes 9 and 10), post-matric intermediate (Classes 11 and 12), and post-matric courses other than inter (BA, BSc, BCom, BTech, MBBS, BEd, ITI, Polytechnic, Diploma, and Ph.D.).\n\n### Key Scheme Slabs\n1. **Pre-Matric Scholarship (Class 9-10)**: ₹3,500 annual stipend for school supplies, books, and uniforms.\n2. **Post-Matric Inter (Class 11-12)**: Full non-refundable tuition fees reimbursed plus ₹6,000 annual maintenance.\n3. **Post-Matric Other Than Inter**: Complete course fee reimbursement up to ₹50,000+ depending on the fee structure approved by the university fee fixation committee.",
    category: "Student",
    type: "State",
    state: "Uttar Pradesh",
    beneficiary: "Pre-Matric and Post-Matric Students in Uttar Pradesh",
    benefits: [
      "Complete reimbursement of non-refundable course fees paid to colleges and universities",
      "Annual maintenance stipend up to ₹12,000 for day scholars and hostellers",
      "Direct DBT credit into Aadhaar-linked savings accounts",
      "Online correction window and real-time status tracking via PFMS integration"
    ],
    eligibility: [
      "Student must be a permanent resident of Uttar Pradesh",
      "Enrolled in a recognized school, college, polytechnic, or university in UP",
      "Family annual income limits: SC/ST candidates up to ₹2,50,000; General, OBC, and Minority candidates up to ₹2,00,000",
      "Minimum 50% attendance requirement in college / school classes"
    ],
    documentsRequired: [
      "Aadhaar Card (linked to active mobile number for OTP)",
      "UP Domicile (Nivas) Certificate",
      "Income Certificate (Aay Praman Patra) with online verification number",
      "Caste Certificate (Jati Praman Patra) for OBC/SC/ST categories",
      "High School (Class 10) Marksheet and Roll Number",
      "Current Year College Fee Receipt and Enrollment Number",
      "Bank Account details (NPCI mapped with Aadhaar)"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Registration on UP Scholarship Portal",
        description: "Visit scholarship.up.gov.in, select 'Student' -> 'Registration' and choose your course category."
      },
      {
        stepNumber: 2,
        title: "Aadhaar Demographic & OTP Authentication",
        description: "Enter your Aadhaar number to verify your name, date of birth, and complete OTP authentication."
      },
      {
        stepNumber: 3,
        title: "Fill Application & Upload Documents",
        description: "Fill academic marks, fee details, and upload scanned copies of income, caste, and fee receipts."
      },
      {
        stepNumber: 4,
        title: "Print Draft Form for College Scrutiny",
        description: "Print the draft copy and have your college scholarship committee review all entered details."
      },
      {
        stepNumber: 5,
        title: "Final Submit & Forward to District Welfare Office",
        description: "Submit final application online, print final receipt, and submit physical hardcopy along with documents to your institute within 3 days."
      }
    ],
    officialPortalUrl: "https://scholarship.up.gov.in",
    applicationDeadline: "December 31, 2026",
    status: "Active",
    helplineNumber: "1800-180-5131 / 0522-2209270",
    faqs: [
      {
        question: "Can students studying outside Uttar Pradesh apply?",
        answer: "Yes, students who are UP residents studying in recognized central universities or institutions outside UP can apply under the 'Post Matric Other State' category."
      },
      {
        question: "What is DigiLocker integration on UP Scholarship portal?",
        answer: "DigiLocker integration allows the portal to instantly fetch verified Class 10 marksheets and certificates, preventing manual upload errors."
      },
      {
        question: "How do I check if my scholarship has been disbursed?",
        answer: "You can track your payment status by entering your application registration number on PFMS (pfms.nic.in) under 'Track DBT Payments'."
      }
    ],
    featured: true,
    views: 48900,
    updatedAt: "2026-10-25"
  },
  {
    id: "apaar-id-card",
    title: "APAAR ID Card 2026: One Nation One Student ID Registration & DigiLocker Download",
    slug: "apaar-id-card-apply-online-download",
    summary: "12-digit permanent digital identification card for all school and college students in India to digitally track academic credits, degrees, and certificates seamlessly via DigiLocker.",
    description: "Automated Permanent Academic Account Registry (APAAR), popularly known as the 'One Nation, One Student ID', is an ambitious digital initiative launched by the Ministry of Education in accordance with the National Education Policy (NEP) 2020.\n\nEvery student from pre-primary school through higher education (undergraduate, postgraduate, and doctorate) is assigned a unique, permanent 12-digit APAAR ID.\n\n### Integration with Academic Bank of Credits (ABC)\nThe APAAR ID acts as a digital passport for lifelong learning. It is directly linked to the Academic Bank of Credits (ABC) portal and DigiLocker, seamlessly storing all verified report cards, board certificates, diplomas, degrees, sports awards, and skill credentials digitally. When a student transfers between schools, colleges, or universities, credits transfer instantly without paper migration paperwork.",
    category: "Student",
    type: "Central",
    state: "All India",
    beneficiary: "All School, College, and University Students in India",
    benefits: [
      "Lifelong 12-digit digital student identity from nursery to university graduation",
      "Seamless transfer of academic credits between schools and universities across India",
      "Zero paperwork: All degrees, marks cards, and awards stored securely in DigiLocker",
      "Hassle-free access to government scholarships, entrance exams, and internship portals"
    ],
    eligibility: [
      "Any student currently enrolled in a recognized private, government, or aided school, college, or university in India",
      "Must have an active Aadhaar number for parental/student biometric/OTP consent",
      "For minor students below 18 years, explicit parental or guardian consent is mandatory"
    ],
    documentsRequired: [
      "Aadhaar Card of the student (linked with mobile number for OTP)",
      "Aadhaar Card of Parent/Guardian (for students below 18 years)",
      "School / College Student ID Card or Enrollment Number (PEN / PRN)",
      "DigiLocker Account credentials"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit APAAR / ABC Official Portal",
        description: "Navigate to apaar.education.gov.in or open your DigiLocker mobile application."
      },
      {
        stepNumber: 2,
        title: "Sign in with DigiLocker",
        description: "Sign in using your mobile number, username, and 6-digit security PIN."
      },
      {
        stepNumber: 3,
        title: "Complete Aadhaar e-KYC Verification",
        description: "Authenticate using Aadhaar OTP to sync student demographic details."
      },
      {
        stepNumber: 4,
        title: "Select Educational Institution",
        description: "Choose your School Board / University name and enter your roll number or Permanent Education Number (PEN)."
      },
      {
        stepNumber: 5,
        title: "Generate and Download APAAR Card",
        description: "Click 'Generate APAAR ID'. Your digital student card with QR code is generated instantly and saved in DigiLocker."
      }
    ],
    officialPortalUrl: "https://apaar.education.gov.in",
    applicationDeadline: "Ongoing (Mandatory for NEP 2020 Accreditation)",
    status: "Active",
    helplineNumber: "1800-11-2001 / 011-23386124",
    faqs: [
      {
        question: "Is APAAR ID mandatory for school students?",
        answer: "While highly encouraged by CBSE, CISCE, and state education boards to streamline records, parental consent is required for students under 18 years of age."
      },
      {
        question: "Can an APAAR ID be used for job applications?",
        answer: "Yes, employers can scan the QR code on the APAAR card to instantly verify the authenticity of all academic degrees and certifications through DigiLocker."
      },
      {
        question: "What is the fee to create an APAAR ID?",
        answer: "Generating an APAAR ID is 100% free of cost on the official portal and through DigiLocker."
      }
    ],
    featured: false,
    views: 22400,
    updatedAt: "2026-10-18"
  },
  {
    id: "rani-lakshmi-bai-scooty-yojana",
    title: "Rani Lakshmi Bai Free Scooty Yojana 2026: Online Registration for Meritorious Girls",
    slug: "rani-lakshmi-bai-free-scooty-yojana",
    summary: "Free motorized two-wheeler / scooty provided to meritorious female students who excel in Class 12th board exams and enroll in higher graduation and post-graduation studies.",
    description: "The Rani Lakshmi Bai Free Scooty Yojana is a landmark educational empowerment initiative launched to encourage female students from economically weaker and middle-income families to pursue higher university education without transportation barriers.\n\nUnder this initiative, meritorious female students passing intermediate (Class 12th) examinations with distinction and enrolling in undergraduate or postgraduate degree colleges are provided a brand new motorized petrol or electric scooty sponsored by the government.\n\n### Key Objectives\n1. Eliminate travel hurdles for girls living in rural and semi-urban localities lacking public transport.\n2. Reduce college dropout rates among young women transitioning from school to higher education.\n3. Promote road safety, personal mobility, and independent career building for young female scholars.",
    category: "Student",
    type: "State",
    state: "Uttar Pradesh",
    beneficiary: "Meritorious Girl Students passing Class 12th and enrolled in UG/PG courses",
    benefits: [
      "100% free motorized petrol or electric scooty with helmet and 5-year insurance",
      "Reduces daily commuting costs and eliminates long walks to distant colleges",
      "Boosts female enrollment in engineering, medical, management, and research courses",
      "Direct recognition and merit certificate awarded by the state government"
    ],
    eligibility: [
      "Applicant must be a female permanent resident of Uttar Pradesh",
      "Must have scored at least 75% or higher marks in UP Board / CBSE / ICSE Class 12 examinations",
      "Must be actively enrolled in a full-time regular undergraduate (BA, BSc, BCom, BTech, MBBS) course in a recognized college",
      "Family annual income should not exceed ₹2,50,000 per annum",
      "Applicant must possess a valid Learner's or Driving Licence for two-wheelers"
    ],
    documentsRequired: [
      "Class 10th and 12th Board Marksheets & Passing Certificates",
      "Current Year College Admission Fee Receipt & Student ID Card",
      "UP Domicile Certificate",
      "Income Certificate of parents issued by Tehsildar",
      "Valid Two-Wheeler Driving Licence / Learner Licence",
      "Aadhaar Card and Passport size photographs"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit UP Higher Education Portal",
        description: "Open the official state scholarship or higher education portal at up.gov.in."
      },
      {
        stepNumber: 2,
        title: "Complete Student Registration",
        description: "Register with your Class 12 board roll number and verify your mobile number via OTP."
      },
      {
        stepNumber: 3,
        title: "Fill College Details & Driving Licence",
        description: "Enter your ongoing graduation course details, college code, and upload a copy of your valid driving licence."
      },
      {
        stepNumber: 4,
        title: "Upload Marksheets & Income Certificates",
        description: "Upload scanned copies of intermediate marksheet, domicile certificate, and income proof."
      },
      {
        stepNumber: 5,
        title: "Merit Verification & Scooty Handover",
        description: "District level merit lists are published, and approved students receive the scooty keys at district headquarters."
      }
    ],
    officialPortalUrl: "https://up.gov.in",
    applicationDeadline: "December 15, 2026",
    status: "Active",
    helplineNumber: "1800-180-6127 / 0522-2238000",
    faqs: [
      {
        question: "Is a driving licence mandatory at the time of application?",
        answer: "Yes, candidates must possess at least a valid Learner's Licence (LLR) or permanent Driving Licence to ensure road safety compliance."
      },
      {
        question: "Can private college students apply?",
        answer: "Yes, female students enrolled in recognized private universities and colleges are also eligible provided their Class 12 marks meet the merit cutoff."
      },
      {
        question: "Is fuel or charging expense covered by the government?",
        answer: "The government covers the initial vehicle cost, registration, road tax, and first year comprehensive insurance. Routine fuel/maintenance is borne by the recipient."
      }
    ],
    featured: false,
    views: 31200,
    updatedAt: "2026-10-18"
  },
  {
    id: "mukhyamantri-yuva-udyami-yojana",
    title: "Mukhyamantri Yuva Udyami Yojana (CM-YUVA) 2026: Up to ₹5 Lakh Margin Subsidy & Loan",
    slug: "mukhyamantri-yuva-udyami-yojana",
    summary: "Financial assistance, 15% margin money subsidy up to ₹5 Lakhs, and 5% interest subvention for educated youth to set up manufacturing or service micro-enterprises.",
    description: "Mukhyamantri Yuva Udyami Yojana (CM-YUVA) is a flagship state entrepreneurship development scheme created to transition educated youth from job seekers into job creators.\n\nUnder this scheme, young entrepreneurs receive collateral-free bank loans ranging from ₹10 Lakhs to ₹2 Crores to establish micro, small, and medium manufacturing units or service business ventures.\n\n### Financial Support Structure\n1. **Margin Money Grant**: The government provides 15% of the total project cost as non-refundable margin money subsidy (maximum up to ₹5 Lakhs for general category, and up to ₹12 Lakhs for BPL/SC/ST/women).\n2. **5% Interest Subvention**: Beneficiaries receive a 5% interest subvention on bank loan interest for a continuous period of 5 years.\n3. **Credit Guarantee Coverage**: Full CGTMSE coverage fee is borne by the government, ensuring zero third-party guarantor or collateral requirements.",
    category: "Business",
    type: "State",
    state: "Madhya Pradesh",
    beneficiary: "Educated Unemployed Youth aged 18 to 40 years",
    benefits: [
      "Bank loan financing up to ₹50 Lakhs for service ventures and up to ₹2 Crores for manufacturing units",
      "15% direct government margin money grant (up to ₹5 Lakhs - ₹12 Lakhs)",
      "5% per annum interest subvention reimbursed for 5 years",
      "Zero collateral security required under CGTMSE guarantee cover"
    ],
    eligibility: [
      "Applicant must be a permanent resident of the state",
      "Age limit: Between 18 and 40 years at the time of application",
      "Minimum educational qualification: 10th standard pass or ITI/vocational certificate",
      "Must not be a defaulter with any financial institution or commercial bank",
      "Applicant or immediate family members must not have availed PMEGP or other government margin subsidies previously"
    ],
    documentsRequired: [
      "Detailed Project Report (DPR) / Business Viability Plan",
      "Educational Qualification Marksheet (Class 10th / 12th / Degree / ITI)",
      "Aadhaar Card and Domicile Certificate",
      "Caste Certificate (for SC/ST/OBC applicants)",
      "Bank Account details and PAN Card",
      "Quotation / Estimates for machinery, equipment, and raw materials"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit the MSME Samadhan Portal",
        description: "Open msme.mp.gov.in and click on 'Mukhyamantri Yuva Udyami Yojana'."
      },
      {
        stepNumber: 2,
        title: "Register & Profile Setup",
        description: "Register with mobile number and PAN card, and input educational qualifications."
      },
      {
        stepNumber: 3,
        title: "Upload Detailed Project Report (DPR)",
        description: "Upload your business plan specifying project outlay, machinery quotations, and working capital needs."
      },
      {
        stepNumber: 4,
        title: "District Task Force Screening",
        description: "Attend the District Level Task Force Committee (DLTFC) interview chaired by the General Manager, DIC."
      },
      {
        stepNumber: 5,
        title: "Bank Sanction & Subsidy Disbursal",
        description: "The nominated bank branch sanctions the term loan and working capital limit, and government margin money is deposited in the subsidy reserve account."
      }
    ],
    officialPortalUrl: "https://msme.mp.gov.in",
    applicationDeadline: "Ongoing",
    status: "Active",
    helplineNumber: "0755-2576831 / 1800-233-7188",
    faqs: [
      {
        question: "Can existing businesses apply for expansion?",
        answer: "CM-YUVA is specifically targeted at setting up new micro-enterprises (greenfield ventures). Existing operational businesses should apply under general MSME credit programs."
      },
      {
        question: "What types of businesses are eligible?",
        answer: "Manufacturing projects (food processing, garment making, plastic molding, packaging, metal fabrication) and service enterprises (diagnostic centers, repair workshops, digital printing, logistics) are covered."
      },
      {
        question: "Is entrepreneurship training provided?",
        answer: "Yes, selected candidates undergo a mandatory 6-day Entrepreneurship Development Programme (EDP) before loan disbursal."
      }
    ],
    featured: false,
    views: 21900,
    updatedAt: "2026-10-18"
  },
  {
    id: "mukhyamantri-annapurna-yojana",
    title: "Mukhyamantri Annapurna Yojana 2026: 3 Free Gas Cylinder Refills for Ladki Bahin Beneficiaries",
    slug: "mukhyamantri-annapurna-yojana-free-gas",
    summary: "3 free 14.2kg LPG gas cylinder refills per financial year directly credited via DBT to eligible women beneficiaries of Majhi Ladki Bahin Yojana and PM Ujjwala in Maharashtra.",
    description: "Mukhyamantri Annapurna Yojana is a flagship social welfare scheme introduced by the Government of Maharashtra to ease household living costs and support women's health.\n\nUnder this scheme, families with an active LPG gas connection whose adult female head is enrolled in the Majhi Ladki Bahin Yojana or PM Ujjwala Yojana receive **3 free LPG cylinder refills per financial year**.\n\n### How the Subsidy is Credited\n- The beneficiary books and pays for the 14.2 kg LPG cylinder refill at the standard market rate to the gas distributor.\n- Within 48 hours of successful delivery, the entire refill amount (approximately ₹830 to ₹850) is directly credited back into the woman's Aadhaar-linked bank account via DBT.\n- A maximum of one free cylinder refill can be claimed every month, up to 3 refills in a financial year (April to March).",
    category: "Women",
    type: "State",
    state: "Maharashtra",
    beneficiary: "Eligible Women Beneficiaries of Majhi Ladki Bahin & PM Ujjwala in Maharashtra",
    benefits: [
      "3 free 14.2 kg LPG gas cylinder refills per year (worth over ₹2,500 annual direct savings)",
      "100% DBT cash reimbursement directly into the woman's bank account within 48 hours",
      "Seamless integration: No separate registration required for approved Ladki Bahin beneficiaries",
      "Protects family health from harmful indoor cooking smoke and particulate matter"
    ],
    eligibility: [
      "Beneficiary must be a verified woman recipient of Majhi Ladki Bahin Yojana or PM Ujjwala Yojana in Maharashtra",
      "The LPG gas connection (Indane, Bharat Gas, or HP Gas) must be registered in the name of the female beneficiary",
      "Must have an active bank account linked to Aadhaar and mapped for NPCI DBT",
      "The household must be a resident of Maharashtra state"
    ],
    documentsRequired: [
      "Aadhaar Card of the woman applicant",
      "LPG Consumer Gas Passbook / Customer ID (SV Number)",
      "Majhi Ladki Bahin Yojana Application Reference Number",
      "Aadhaar-seeded Bank Account Passbook",
      "Ration Card (Orange or Yellow ration card in Maharashtra)"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Ensure Gas Connection is in Woman's Name",
        description: "If your household gas connection is in your husband's name, submit a transfer request at your gas agency to transfer it into the woman beneficiary's name."
      },
      {
        stepNumber: 2,
        title: "Automatic System Integration",
        description: "The Food, Civil Supplies and Consumer Protection Department links your Ladki Bahin Aadhaar data with Oil Marketing Company (OMC) records automatically."
      },
      {
        stepNumber: 3,
        title: "Book Refill through Standard Modes",
        description: "Book your cylinder refill via IVRS, WhatsApp, missed call, or the official OMC app (IndianOil ONE / Bharatgas / HP Pay)."
      },
      {
        stepNumber: 4,
        title: "Receive DBT Cashback in Bank Account",
        description: "Pay the delivery agent upon cylinder delivery. The state government reimburses the full retail price via DBT into your bank account within 2-3 days."
      }
    ],
    officialPortalUrl: "https://mahafood.gov.in",
    applicationDeadline: "Ongoing (3 Cylinders every Financial Year)",
    status: "Active",
    helplineNumber: "1800-22-4950 / 022-22025251",
    faqs: [
      {
        question: "Can we claim all 3 free cylinders in the same month?",
        answer: "No, the scheme allows a maximum of one subsidized cylinder refund per calendar month to prevent hoarding."
      },
      {
        question: "What if the gas connection is in the husband's name?",
        answer: "To claim Annapurna Yojana benefits, the LPG connection must be registered in the name of the woman beneficiary. Visit your LPG distributor to effect name transfer."
      },
      {
        question: "Does this scheme apply to 5kg mini-cylinders?",
        answer: "Beneficiaries with 5kg double-bottle connections receive proportionate subsidies matching the annual 14.2kg ceiling."
      }
    ],
    featured: false,
    views: 38400,
    updatedAt: "2026-10-18"
  },
  {
    id: "mp-ladli-behna-yojana",
    title: "MP Mukhyamantri Ladli Behna Yojana: Check Monthly ₹1,250 Installment & DBT Status",
    slug: "mp-ladli-behna-yojana-status-installment",
    summary: "Monthly financial assistance of ₹1,250 directly transferred via Aadhaar DBT on the 10th of every month to eligible married, widowed, and divorced women in Madhya Pradesh.",
    description: "Mukhyamantri Ladli Behna Yojana is a premier direct-cash welfare initiative pioneered by the Government of Madhya Pradesh to foster economic self-reliance, improve nutritional standards, and enhance female decision-making power in family affairs.\n\nUnder this scheme, over 1.29 crore eligible women across Madhya Pradesh receive **₹1,250 per month** transferred directly to their Aadhaar-linked bank accounts on the 10th day of every calendar month.\n\n### Key Milestones & Expansion\n- **Monthly Grant Progression**: The grant was initially launched at ₹1,000 per month and subsequently increased to ₹1,250 per month, with a government roadmap to gradually scale it to ₹3,000 per month.\n- **Tractor & Family Inclusions**: Relaxations allow women from farming families owning up to 5 acres of agricultural land and a tractor to qualify.",
    category: "Women",
    type: "State",
    state: "Madhya Pradesh",
    beneficiary: "Married, Widowed, Divorced, and Destitute Women aged 21 to 60 in MP",
    benefits: [
      "Direct financial support of ₹1,250 every month (₹15,000 per year) credited via DBT",
      "Regular monthly disbursal on the 10th of every month without delays",
      "Complete freedom to spend funds on nutrition, healthcare, children's education, or small savings",
      "Easy mobile status tracking using Samagra ID and Aadhaar card"
    ],
    eligibility: [
      "Must be a permanent female resident of Madhya Pradesh",
      "Marital status: Must be married, widowed, divorced, or abandoned",
      "Age limit: Must be between 21 and 60 years on January 1 of the calendar year",
      "Family annual income: Total combined family income must not exceed ₹2,50,000 per annum",
      "Family landholding: Must not own more than 5 acres of cultivable agricultural land",
      "No family member should be a government employee, pensioner, or income tax payee"
    ],
    documentsRequired: [
      "Samagra Family ID (9-digit Member ID and 8-digit Family ID)",
      "Aadhaar Card (e-KYC verified with Samagra portal)",
      "Bank Account details (must be Aadhaar-seeded with active DBT mandate)",
      "Active Mobile number for OTP authentication"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Complete Samagra e-KYC",
        description: "Ensure your Aadhaar is linked with your Samagra ID on samagra.gov.in using biometric or OTP."
      },
      {
        stepNumber: 2,
        title: "Attend Gram Panchayat / Ward Camp",
        description: "Submit your application at the special camps organized at your Gram Panchayat or Municipal Ward office."
      },
      {
        stepNumber: 3,
        title: "Live Photo & Form Entry",
        description: "The camp operator captures your live photograph and enters your Samagra ID into the portal."
      },
      {
        stepNumber: 4,
        title: "Receive Acknowledgment Slip",
        description: "Collect your printed acknowledgment slip with application number to track payment status."
      }
    ],
    officialPortalUrl: "https://cmladlibehna.mp.gov.in",
    applicationDeadline: "Ongoing (Camp-based verification cycles)",
    status: "Active",
    helplineNumber: "0755-2700800",
    faqs: [
      {
        question: "Can unmarried women apply for Ladli Behna Yojana?",
        answer: "No, the scheme is exclusively for women who are married, widowed, divorced, or legally separated, aged 21 to 60 years."
      },
      {
        question: "What should I do if the installment is not credited on the 10th?",
        answer: "Check your Aadhaar-NPCI bank linking status. If inactive, visit your bank branch to activate DBT, or check pending objection status on cmladlibehna.mp.gov.in."
      },
      {
        question: "Can women who pay income tax qualify?",
        answer: "No, women residing in households where any family member is an income tax payee are excluded from the scheme."
      }
    ],
    featured: false,
    views: 41200,
    updatedAt: "2026-10-25"
  },
  {
    id: "e-shram-card-scheme",
    title: "e-Shram Card Registration 2026: Universal Social Security ID & ₹2 Lakh Insurance",
    slug: "e-shram-card-registration-apply-online",
    summary: "Universal 12-digit UAN card for 38+ crore unorganized workers in India offering ₹2 Lakh accidental insurance, pension integration, and direct DBT emergency relief.",
    description: "The Ministry of Labour & Employment launched the e-Shram portal to create a comprehensive national database of unorganized workers (NDUW). Over 30 crore unorganized workers including agricultural laborers, construction workers, gig/platform workers, street vendors, domestic helpers, auto drivers, and fishermen have enrolled.\n\nEach registered worker is issued an **e-Shram Card** featuring a unique 12-digit Universal Account Number (UAN), valid across all states in India.\n\n### Key Social Security Benefits\n1. **Accidental Insurance Cover**: Registered workers automatically receive accidental death and permanent disability cover of ₹2,00,000, and partial disability cover of ₹1,00,000 under the Pradhan Mantri Suraksha Bima Yojana (PMSBY).\n2. **Direct Benefit Transfer (DBT) Relief**: During national emergencies, natural disasters, or pandemics, government cash assistance is transferred directly using the e-Shram database.\n3. **Integration with Livelihood Portals**: e-Shram is integrated with the National Career Service (NCS) portal, Skill India Digital, and PM-SYM pension scheme.",
    category: "General",
    type: "Central",
    state: "All India",
    beneficiary: "Unorganized Workers aged 16 to 59 years across India",
    benefits: [
      "12-digit permanent Universal Account Number (UAN) valid for life across all states",
      "₹2,00,000 accidental death/total disability cover and ₹1,00,000 partial disability cover",
      "Direct DBT cash assistance during natural disasters and economic crises",
      "One-click job search linkage through National Career Service (NCS) portal"
    ],
    eligibility: [
      "Must be an unorganized worker (construction, domestic, agricultural, driver, artisan, etc.)",
      "Age limit: Between 16 and 59 years",
      "Must not be an active member of EPFO (Provident Fund) or ESIC (Employees' State Insurance)",
      "Must not be an income tax payee",
      "Must possess an active Aadhaar-linked mobile number and bank account"
    ],
    documentsRequired: [
      "Aadhaar Card (linked to mobile number for OTP)",
      "Bank Account details (Account Number, IFSC, branch name)",
      "Nominee details (Name, date of birth, relationship)",
      "Skill / Occupation details and educational qualification"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit e-Shram Official Portal",
        description: "Go to eshram.gov.in and click on 'Register on e-Shram'."
      },
      {
        stepNumber: 2,
        title: "Aadhaar Mobile Authentication",
        description: "Enter your Aadhaar-linked mobile number and confirm the 6-digit OTP."
      },
      {
        stepNumber: 3,
        title: "Enter Personal, Address, and Occupation Details",
        description: "Fill in permanent address, current address, primary occupation code (NCO), and educational status."
      },
      {
        stepNumber: 4,
        title: "Add Bank Details & Nominee",
        description: "Enter your active bank account number and nominate a family member."
      },
      {
        stepNumber: 5,
        title: "Download UAN e-Shram Card",
        description: "Review your summary and download your laminated digital e-Shram Card with photo and QR code."
      }
    ],
    officialPortalUrl: "https://eshram.gov.in",
    applicationDeadline: "Ongoing",
    status: "Active",
    helplineNumber: "14434 / 011-23389928",
    faqs: [
      {
        question: "Is there any fee to register for an e-Shram card?",
        answer: "Self-registration on eshram.gov.in is 100% free. If applying through a CSC, the Ministry pays the VLE directly, so no citizen fee is charged."
      },
      {
        question: "Can college students who do freelance or gig work register?",
        answer: "Yes, students aged 16+ who engage in part-time unorganized or gig work and are not covered by EPFO/ESIC can register."
      },
      {
        question: "Do I need to renew the e-Shram card every year?",
        answer: "No, the 12-digit UAN card is issued for life. You only need to update your address, mobile number, or skill details if they change."
      }
    ],
    featured: false,
    views: 35900,
    updatedAt: "2026-10-24"
  },
  {
    id: "abha-card-scheme",
    title: "ABHA Card 2026: Ayushman Bharat Health Account Online Registration & Download",
    slug: "abha-card-apply-online-digital-health",
    summary: "14-digit unique digital health account to securely store medical lab reports, prescriptions, doctor consultations, and health insurance across Indian hospitals.",
    description: "Ayushman Bharat Health Account (ABHA) is a core pillar of the Ayushman Bharat Digital Mission (ABDM) spearheaded by the National Health Authority (NHA).\n\nABHA provides every Indian citizen with a unique 14-digit digital health identification number and a personalized ABHA Address (e.g., yourname@abdm).\n\n### Why You Need an ABHA Card\n- **Paperless Medical Records**: You no longer need to carry physical folders of blood test reports, X-rays, MRI scans, and handwritten prescriptions when visiting doctors.\n- **Interoperability**: Medical records created at a government AIIMS hospital can be accessed seamlessly by a private hospital in another state with your digital consent.\n- **Fast-Track Hospital Registration**: Scan the ABDM QR code at hospital OPD counters to generate an instant OPD slip in 30 seconds without standing in long queues.\n- **Privacy & User Consent**: No doctor or insurance company can view your health records without receiving an OTP or mobile consent request from you.",
    category: "Health",
    type: "Central",
    state: "All India",
    beneficiary: "All Citizens of India of Any Age",
    benefits: [
      "14-digit unique digital health identity accepted across government and private hospitals",
      "Instant paperless storage for all lab tests, discharge summaries, and prescriptions",
      "Fast-track 'Scan and Share' OPD registration at 50,000+ hospitals across India",
      "100% consent-driven data privacy: You control who can view your health data"
    ],
    eligibility: [
      "Any Indian citizen of any age (infants to senior citizens)",
      "Aadhaar card or Driving Licence used for identity verification",
      "Mobile number linked to Aadhaar for OTP authentication"
    ],
    documentsRequired: [
      "Aadhaar Card (or Driving Licence)",
      "Active Mobile number linked to Aadhaar"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit ABHA Official Portal",
        description: "Go to abha.abdm.gov.in or download the official ABHA App from Google Play Store."
      },
      {
        stepNumber: 2,
        title: "Select 'Create ABHA Number'",
        description: "Choose to create your ABHA number using your Aadhaar card."
      },
      {
        stepNumber: 3,
        title: "Aadhaar OTP Authentication",
        description: "Enter your 12-digit Aadhaar number and submit the 6-digit OTP sent to your linked phone."
      },
      {
        stepNumber: 4,
        title: "Create Your ABHA Address",
        description: "Choose a simple unique username (like firstname.lastname@abdm) and link your email ID."
      },
      {
        stepNumber: 5,
        title: "Download ABHA Card",
        description: "Download your PDF ABHA digital health card featuring your photo, 14-digit number, and secure QR code."
      }
    ],
    officialPortalUrl: "https://abha.abdm.gov.in",
    applicationDeadline: "Ongoing",
    status: "Active",
    helplineNumber: "1800-11-4477 / 14477",
    faqs: [
      {
        question: "Is having an ABHA card mandatory for treatment?",
        answer: "No, hospital treatment cannot be denied if you don't have an ABHA card. However, having one makes OPD registration, insurance claims, and records access instant."
      },
      {
        question: "Can I delete or deactivate my ABHA account later?",
        answer: "Yes, ABDM gives users full control to temporarily deactivate or permanently delete their ABHA number and records at any time."
      },
      {
        question: "Is ABHA card different from Ayushman Bharat PM-JAY card?",
        answer: "Yes. ABHA is a digital health record locker for all citizens. PM-JAY is an insurance card providing ₹5 Lakh free hospitalization for eligible low-income families."
      }
    ],
    featured: false,
    views: 33800,
    updatedAt: "2026-10-24"
  },
  {
    id: "udid-divyang-card",
    title: "UDID Swavlamban Card 2026: Unique Disability ID Card Registration & Concessions",
    slug: "udid-card-unique-disability-identity-apply",
    summary: "National unified photo ID for persons with disabilities (PwDs) providing disability pension, assistive device concessions, train travel subsidies, and hospital exemptions.",
    description: "The Unique Disability ID (UDID) project is implemented by the Department of Empowerment of Persons with Disabilities, Ministry of Social Justice and Empowerment.\n\nThe initiative creates a single, standardized, national database for Persons with Disabilities (PwDs) across India, replacing disparate state-level paper handicap certificates with a tamper-proof smart plastic UDID Card.\n\n### Key Privileges & Concessions\n- **Unified Recognition**: The UDID card is valid across all states and union territories in India without requiring local re-validation.\n- **Railway & Transport Concessions**: Up to 75% rail travel concession in Sleeper, 3AC, 2AC, and Chair Car classes for the disabled passenger and an escort.\n- **Free Assistive Devices**: Direct entitlement to wheelchairs, tricycles, hearing aids, braille slates, and prosthetic limbs under the ADIP scheme.\n- **Direct Benefit Transfers**: Seamless linkage to national and state disability pensions without repeated physical hospital medical boards.",
    category: "Health",
    type: "Central",
    state: "All India",
    beneficiary: "Persons with Disabilities (PwDs) covering 21 Notified Disability Types",
    benefits: [
      "Nationwide accepted photo ID with digital QR verification and encoded disability percentage",
      "Direct entitlement to monthly state disability pensions (₹1,000 to ₹3,000/month)",
      "Up to 75% rail travel concession and bus travel passes across state road transport fleets",
      "Free assistive devices, motorized tricycles, and cochlear implants under ADIP scheme"
    ],
    eligibility: [
      "Must be an Indian citizen with a verified physical, sensory, intellectual, or neurological disability",
      "Covers all 21 categories recognized under the Rights of Persons with Disabilities (RPwD) Act, 2016",
      "Minimum 40% certified disability required to qualify for most government welfare concessions and reservations"
    ],
    documentsRequired: [
      "Aadhaar Card or Voter ID (proof of identity and address)",
      "Passport-sized color photograph",
      "Existing Disability Certificate (if issued previously by a Civil Surgeon / Medical Board)",
      "Signature or thumb impression of the applicant"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit Swavlamban Card Portal",
        description: "Open swavlambancard.gov.in and click on 'Apply for Disability Certificate & UDID Card'."
      },
      {
        stepNumber: 2,
        title: "Fill Personal & Disability Details",
        description: "Enter name, father's name, date of birth, disability category, and select your district government hospital."
      },
      {
        stepNumber: 3,
        title: "Upload Photo, Signature, and Aadhaar",
        description: "Upload scanned copies of your passport photo, thumb impression, and identity documents."
      },
      {
        stepNumber: 4,
        title: "Medical Board Hospital Assessment",
        description: "Visit your allocated District Hospital Medical Board on your appointment date for clinical evaluation by specialist doctors."
      },
      {
        stepNumber: 5,
        title: "Receive Smart UDID Card by Post",
        description: "Once the CMO signs the certificate digitally, your plastic smart UDID Card is dispatched by Speed Post to your home address."
      }
    ],
    officialPortalUrl: "https://swavlambancard.gov.in",
    applicationDeadline: "Ongoing",
    status: "Active",
    helplineNumber: "1800-11-2001 / 011-24365019",
    faqs: [
      {
        question: "Is there any cost to apply for a UDID card?",
        answer: "No, application for a UDID card and medical assessment at the government district hospital is completely free of charge."
      },
      {
        question: "What is the difference between Temporary and Permanent UDID card?",
        answer: "Permanent cards are issued for non-progressive conditions (e.g. amputation, blindness). Temporary cards are issued for children whose condition may improve with therapy, requiring periodic review."
      },
      {
        question: "Can I track my UDID application status online?",
        answer: "Yes, you can track your status by entering your 15-digit Enrolment / Application Number on swavlambancard.gov.in under 'Track Application Status'."
      }
    ],
    featured: false,
    views: 25100,
    updatedAt: "2026-10-24"
  },
  {
    id: "madhu-babu-pension-yojana",
    title: "Madhu Babu Pension Yojana (MBPY) 2026: Online Status Check & Monthly Pension List",
    slug: "madhu-babu-pension-yojana-odisha",
    summary: "Monthly social security pension of ₹1,000 to ₹1,400 for senior citizens (above 60 years), widows, destitute individuals, and persons with disabilities in Odisha.",
    description: "Madhu Babu Pension Yojana (MBPY) is a premier social security scheme introduced by the Government of Odisha by merging the Revised Old Age Pension Rules, 1989 and Disability Pension Rules, 1985. The scheme is named in honor of Madhusudan Das, a revered lawyer, social reformer, and patriot of Odisha.\n\nThe scheme provides a compassionate financial safety net to elderly, destitute widows, orphan children, persons with disabilities, and leprosy patients living below the poverty line.\n\n### Pension Slabs\n- **Aged 60 to 79 Years**: ₹1,000 per month.\n- **Aged 80 Years and Above**: ₹1,200 to ₹1,400 per month.\n- **Persons with Disabilities (80%+ disability)**: ₹1,400 per month.\n- **Special Categories**: Covers transgender persons, widows of COVID-19 victims, and cured leprosy patients.",
    category: "Pension",
    type: "State",
    state: "Odisha",
    beneficiary: "Elderly (60+), Widows, Transgenders, and Differently Abled in Odisha",
    benefits: [
      "Guaranteed monthly social security pension up to ₹1,400 credited via DBT on the 15th of every month (Panchayat Pension Day)",
      "Complete social security protection for vulnerable citizens with no family breadwinner",
      "Cash disbursal option at Gram Panchayat office for bedridden senior citizens",
      "Simple online application and grievance redressal via SSEPD portal"
    ],
    eligibility: [
      "Applicant must be a permanent resident of Odisha",
      "Age: Must be 60 years or above (for old age pension); No minimum age requirement for widows",
      "Annual family income must not exceed ₹24,000 per annum from all sources",
      "Must not be receiving pension from any other state or central government scheme",
      "Applicant must not be a convicted criminal"
    ],
    documentsRequired: [
      "Aadhaar Card of the applicant",
      "Age proof (Voter ID, School Certificate, or Medical Officer Certificate)",
      "Income Certificate issued by Revenue Officer / Tehsildar",
      "Death Certificate of husband (for Widow Pension category)",
      "Disability Certificate from Medical Board (for Disability Pension)",
      "Bank Account Passbook (Aadhaar linked)",
      "Two passport size photographs"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit SSEPD Odisha Portal",
        description: "Open ssepd.odisha.gov.in and click on 'Apply for Social Security Schemes' -> MBPY."
      },
      {
        stepNumber: 2,
        title: "Select Pension Category",
        description: "Choose your scheme category (Old Age Pension, Widow Pension, Disability Pension, or Transgender Pension)."
      },
      {
        stepNumber: 3,
        title: "Enter Personal, Address, and Aadhaar Details",
        description: "Fill in District, Block, Gram Panchayat, Village, and enter your 12-digit Aadhaar number."
      },
      {
        stepNumber: 4,
        title: "Upload Documents & Submit",
        description: "Upload scanned copies of Aadhaar, income certificate, age proof, and submit the online application."
      },
      {
        stepNumber: 5,
        title: "Block / Municipal Scrutiny & Sanction",
        description: "Block Development Officer (BDO) or Executive Officer scrutinizes the application and issues the formal Pension Sanction Order."
      }
    ],
    officialPortalUrl: "https://ssepd.odisha.gov.in",
    applicationDeadline: "Ongoing",
    status: "Active",
    helplineNumber: "1800-345-7150 / 0674-2396783",
    faqs: [
      {
        question: "When is the monthly pension distributed?",
        answer: "In Odisha, the 15th of every calendar month is celebrated as 'Jana Seva Diwas' / Panchayat Pension Day where pensions are disbursed directly or credited via DBT."
      },
      {
        question: "Can an individual receive both National Old Age Pension (IGNOAPS) and MBPY?",
        answer: "No, a beneficiary can only avail either the central IGNOAPS pension or the state MBPY pension, not both."
      },
      {
        question: "Are transgender persons eligible for MBPY?",
        answer: "Yes, Odisha was the first state to include transgender individuals under Madhu Babu Pension Yojana based on a self-declaration certificate."
      }
    ],
    featured: false,
    views: 18200,
    updatedAt: "2026-10-25"
  },
  {
    id: "atal-pension-yojana",
    title: "Atal Pension Yojana (APY) 2026: Guaranteed Monthly Pension up to ₹5,000 After 60",
    slug: "atal-pension-yojana-guaranteed-pension",
    summary: "Government-backed guaranteed lifelong pension of ₹1,000 to ₹5,000 per month after age 60 for unorganized workers and citizens aged 18 to 40 years.",
    description: "Atal Pension Yojana (APY) is a flagship national pension program administered by the Pension Fund Regulatory and Development Authority (PFRDA) under the National Pension System (NPS) architecture.\n\nThe scheme was introduced to provide income security and old-age financial dignity to workers in the unorganized sector who do not enjoy formal employer-provided pensions.\n\n### Core Features & Triple Benefits\n1. **Guaranteed Lifelong Pension**: Subscribers receive a fixed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 per month starting at age 60 until death.\n2. **Spouse Pension**: Upon the subscriber's demise, the exact same monthly pension continues to the surviving spouse for their entire lifetime.\n3. **Return of Full Corpus**: After the demise of both the subscriber and spouse, the entire accumulated pension wealth (up to ₹8.5 Lakhs for a ₹5,000 pension) is handed over to the designated nominee.",
    category: "Pension",
    type: "Central",
    state: "All India",
    beneficiary: "All Indian Citizens aged 18 to 40 Years with a Savings Bank Account",
    benefits: [
      "Guaranteed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 after reaching age 60",
      "Lifetime pension security extended to spouse upon subscriber's demise",
      "100% accumulated pension wealth returned to nominee after demise of subscriber and spouse",
      "Tax deductions under Section 80CCD(1B) of the Income Tax Act up to ₹50,000 additional benefit"
    ],
    eligibility: [
      "Must be an Indian citizen aged between 18 and 40 years",
      "Must hold a functional savings bank account or post office savings account",
      "Must not be an income tax payer (as per current amended PFRDA guidelines)",
      "Must commit to regular monthly, quarterly, or half-yearly auto-debit contributions until age 60"
    ],
    documentsRequired: [
      "Aadhaar Card (identity and address proof)",
      "Bank Account details (Savings Account with auto-debit consent)",
      "Active Mobile number for transaction alerts and e-PRAN download",
      "Nominee details (Aadhaar, name, and relationship)"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit Your Bank Branch or NetBanking",
        description: "Open your bank's mobile banking app, NetBanking portal, or visit your savings bank branch."
      },
      {
        stepNumber: 2,
        title: "Navigate to APY Enrollment",
        description: "Search for 'Atal Pension Yojana' under government social security schemes."
      },
      {
        stepNumber: 3,
        title: "Select Desired Pension Slab (₹1,000 to ₹5,000)",
        description: "Choose your target monthly pension amount and payment frequency (monthly auto-debit is most popular)."
      },
      {
        stepNumber: 4,
        title: "Enter Nominee Details & Give Auto-Debit Mandate",
        description: "Provide spouse/nominee details and authorize your bank to automatically debit the monthly premium on a fixed date."
      },
      {
        stepNumber: 5,
        title: "Download e-PRAN Card",
        description: "Once enrolled, your unique Permanent Retirement Account Number (PRAN) is issued and can be downloaded from npscra.nsdl.co.in."
      }
    ],
    officialPortalUrl: "https://www.npscra.nsdl.co.in",
    applicationDeadline: "Ongoing",
    status: "Active",
    helplineNumber: "1800-110-069 / 022-24993499",
    faqs: [
      {
        question: "How much is the monthly contribution for a 18-year-old?",
        answer: "An 18-year-old needs to contribute only ₹210 per month (or ₹7 per day) to receive a guaranteed pension of ₹5,000 per month for life from age 60."
      },
      {
        question: "Can income tax payers enroll in APY?",
        answer: "Effective October 1, 2022, citizens who are income tax payers are not eligible to open a new APY account. Existing accounts opened prior remain valid."
      },
      {
        question: "What happens if premium is missed in a month?",
        answer: "Banks charge a nominal overdue penalty of ₹1 per month for contribution up to ₹100, and up to ₹10 for contributions above ₹1,000. The account remains active upon paying the missed premium."
      }
    ],
    featured: false,
    views: 39100,
    updatedAt: "2026-10-24"
  },
  {
    id: "free-laptop-tablet-yojana",
    title: "Free Laptop Tablet Smartphone Yojana 2026: DigiShakti Registration & Beneficiary List",
    slug: "free-laptop-tablet-smartphone-yojana",
    summary: "Free distribution of 5G-enabled tablets and smartphones under the Swami Vivekanand Yuva Sashaktikaran Yojana to college, ITI, and polytechnic students.",
    description: "The Swami Vivekanand Yuva Sashaktikaran Yojana (Free Smartphone and Tablet Distribution Scheme) is implemented by the Department of IT and Electronics, Government of Uttar Pradesh, through the centralized DigiShakti portal.\n\nThe scheme bridges the digital divide by equipping higher education students with free, modern, pre-loaded digital tablets and smartphones.\n\n### Purpose-Built Digital Tools\nDevices distributed under the scheme come pre-loaded with digital learning apps, e-books, career counseling portals, job notifications, government competitive exam preparation materials, and skilling content. The initiative has empowered over 25 Lakh young graduates, engineers, and diploma holders.",
    category: "Student",
    type: "State",
    state: "Uttar Pradesh",
    beneficiary: "Graduation, Post-Graduation, Engineering, ITI, and Polytechnic Students",
    benefits: [
      "100% free high-spec branded tablet or 5G smartphone with warranty",
      "Pre-loaded with educational study apps, lecture video libraries, and e-books",
      "Zero registration fee; student onboarding handled directly through college portals",
      "Empowers youth to attend online lectures, prepare for competitive tests, and learn coding"
    ],
    eligibility: [
      "Must be a permanent resident of Uttar Pradesh",
      "Must be actively enrolled in a recognized university, college, ITI, polytechnic, or medical institute in UP",
      "Eligible courses: BA, BSc, BCom, BTech, MBBS, BEd, ITI, Polytechnic, MA, MSc, MCom, and Ph.D.",
      "Family annual income should not exceed ₹2,00,000 per annum",
      "Student must not have any academic disciplinary backlogs"
    ],
    documentsRequired: [
      "Aadhaar Card of the student",
      "College Student ID Card & Current Year Admission Fee Receipt",
      "Class 10th and 12th Board Marksheets",
      "UP Domicile Certificate",
      "Passport size photograph and active mobile number"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "College Level Student Data Upload",
        description: "Students do NOT need to fill individual online forms. Colleges upload verified student data directly to digishakti.up.gov.in."
      },
      {
        stepNumber: 2,
        title: "Aadhaar e-KYC Verification by University",
        description: "The affiliating university cross-verifies student enrollment numbers, course streams, and active status."
      },
      {
        stepNumber: 3,
        title: "SMS Notification & IMEI Allotment",
        description: "Approved students receive an official SMS notification containing their device model, IMEI number, and allotment batch."
      },
      {
        stepNumber: 4,
        title: "Device Handover Ceremony",
        description: "Tablets and smartphones are formally handed over during institutional distribution programs at your college campus."
      }
    ],
    officialPortalUrl: "https://digishakti.up.gov.in",
    applicationDeadline: "Ongoing (Batch-wise Distribution)",
    status: "Active",
    helplineNumber: "1800-180-0888 / 0522-2207160",
    faqs: [
      {
        question: "Do students need to pay any security deposit?",
        answer: "No, the devices are distributed 100% free of cost with zero registration charges or security deposits."
      },
      {
        question: "Who receives tablets vs who receives smartphones?",
        answer: "Technical students (Engineering, MBBS, Polytechnic, ITI) are typically allotted digital tablets, while general graduation/post-graduation students receive smartphones."
      },
      {
        question: "Can passout students receive the device?",
        answer: "Only currently enrolled regular students in ongoing academic years are eligible for allocation."
      }
    ],
    featured: false,
    views: 32600,
    updatedAt: "2026-10-25"
  },
  {
    id: "vishwakarma-shram-samman-yojana",
    title: "UP Vishwakarma Shram Samman Yojana 2026: Free 6-Day Skill Training, Toolkits & ₹10L Loan",
    slug: "vishwakarma-shram-samman-yojana-up",
    summary: "State skill development, free advanced vocational toolkits, and subsidized bank credit up to ₹10 Lakhs for traditional artisans, tailors, carpenters, and potters in Uttar Pradesh.",
    description: "Vishwakarma Shram Samman Yojana (VSSY) is executed by the Directorate of Industries, Department of Micro, Small and Medium Enterprises and Export Promotion, Government of Uttar Pradesh.\n\nThe scheme aims to preserve, revitalize, and expand traditional trades and artisanal crafts by imparting modern vocational skill training, handing over free advanced toolkits, and assisting artisans in securing subsidized bank credit up to ₹10 Lakhs for setting up self-employment enterprises.\n\n### Occupations Covered\nCarpenters (Badhai), Blacksmiths (Lohar), Goldsmiths (Sonar), Potters (Kumhaar), Cobblers (Mochi), Tailors (Darzi), Basket Weavers (Tokri Bunkar), Barbers (Naai), and Confectioners/Halwais.",
    category: "Business",
    type: "State",
    state: "Uttar Pradesh",
    beneficiary: "Traditional Artisans, Craftspeople, and Tailors in Uttar Pradesh",
    benefits: [
      "Free 6-day residential or non-residential certified skill development training",
      "Free modern specialized toolkit worth up to ₹15,000 upon training completion",
      "Subsidized bank loan linkage up to ₹10,00,000 for setting up enterprise workshops",
      "Direct stipend and daily meal allowance provided during the 6-day training period"
    ],
    eligibility: [
      "Applicant must be a permanent resident of Uttar Pradesh",
      "Minimum age must be 18 years on the date of application",
      "Must be traditionally or practically engaged in the selected trade",
      "Only one person from an immediate family is eligible to claim scheme benefits",
      "Must not have availed toolkits or margin money assistance under similar schemes in the past 2 years"
    ],
    documentsRequired: [
      "Aadhaar Card of the applicant",
      "UP Domicile Certificate",
      "Trade engagement self-declaration certificate endorsed by Gram Pradhan / Ward Councilor",
      "Bank Account Passbook (Aadhaar linked)",
      "Passport-sized photograph and active mobile number"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit UP MSME DIUP Portal",
        description: "Open diupmsme.upsdc.gov.in and click on 'Vishwakarma Shram Samman Yojana'."
      },
      {
        stepNumber: 2,
        title: "User Registration & Trade Selection",
        description: "Register with your name, mobile number, and select your traditional trade (e.g. Darzi, Badhai, Lohar)."
      },
      {
        stepNumber: 3,
        title: "Upload Documents & Submit Application",
        description: "Upload scanned copies of Aadhaar, bank passbook, and photo, then submit the application to the District Industries Centre (DIC)."
      },
      {
        stepNumber: 4,
        title: "Attend 6-Day Skill Training",
        description: "Selected candidates attend the certified 6-day training at designated ITIs or polytechnics."
      },
      {
        stepNumber: 5,
        title: "Toolkit Distribution & Loan Processing",
        description: "Receive your free modern toolkit box and certificate on the final day, with bank loan facilitation."
      }
    ],
    officialPortalUrl: "https://diupmsme.upsdc.gov.in",
    applicationDeadline: "Ongoing",
    status: "Active",
    helplineNumber: "1800-180-0888 / 0522-2287234",
    faqs: [
      {
        question: "Are tailoring machines provided under this scheme?",
        answer: "Yes, candidates applying under the Tailor (Darzi) trade receive high-speed motorized sewing machine toolkits upon completing the 6-day training."
      },
      {
        question: "Is formal school education mandatory to apply?",
        answer: "No, formal educational qualifications are not mandatory; traditional trade proficiency and hands-on skill are the primary criteria."
      },
      {
        question: "How much loan can be availed for opening a shop?",
        answer: "Artisans can avail bank finance from ₹1,00,000 up to ₹10,00,000 through the DIC under PMEGP/state credit guarantee linkages."
      }
    ],
    featured: false,
    views: 24700,
    updatedAt: "2026-10-24"
  },
  {
    id: "bima-sakhi-yojana",
    title: "Bima Sakhi Yojana 2026: Insurance Livelihood Scheme for Rural Women SHG Members",
    slug: "bima-sakhi-yojana-apply-online",
    summary: "Rural women Self-Help Group (SHG) members trained and certified as rural micro-insurance agents, providing insurance access to villagers while earning steady commissions and monthly honorariums.",
    description: "Bima Sakhi Yojana is a specialized financial inclusion and female livelihood program introduced through the convergence of the Ministry of Rural Development (DAY-NRLM), public sector insurance companies (LIC, New India Assurance), and state rural livelihood missions.\n\nUnder the initiative, capable literate women members of Self-Help Groups (SHGs) are selected, trained, and certified as 'Bima Sakhis' (community insurance correspondents).\n\n### Role and Impact\n1. **Promoting Social Security**: Bima Sakhis facilitate doorstep enrollment of rural households into micro-insurance schemes including Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY), Pradhan Mantri Suraksha Bima Yojana (PMSBY), livestock insurance, and crop insurance.\n2. **Sustainable Livelihood**: Bima Sakhis earn attractive direct commissions on every policy issued and renewed, along with a baseline monthly travel and communication stipend, creating an independent monthly income of ₹10,000 to ₹15,000.",
    category: "Women",
    type: "Central",
    state: "All India",
    beneficiary: "Literate Rural Women SHG Members",
    benefits: [
      "Professional insurance advisor certification and training by IRDAI accredited institutes",
      "Sustainable monthly earning opportunity of ₹10,000+ through commissions and incentives",
      "Doorstep delivery of life, accidental, and cattle insurance for rural households",
      "Empowers women as respected financial leaders and community counselors"
    ],
    eligibility: [
      "Must be an active female member of a registered Self-Help Group (SHG) under DAY-NRLM",
      "Minimum educational qualification: 10th standard (High School) passed",
      "Age limit: Between 18 and 50 years",
      "Must possess good communication skills and basic smartphone handling capability",
      "Must have an active bank account in her own name"
    ],
    documentsRequired: [
      "Aadhaar Card and PAN Card of the applicant",
      "Class 10th Passing Certificate and Marksheet (proof of date of birth and education)",
      "SHG Membership Recommendation Letter signed by Gram Sangathan (VO)",
      "Bank Account details (Passbook copy)",
      "Passport size photographs"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Expression of Interest at Village Organization",
        description: "Submit an application expressing interest to your Village Organization (VO) / Gram Sangathan."
      },
      {
        stepNumber: 2,
        title: "Screening by Block Mission Management Unit (BMMU)",
        description: "Attend the preliminary screening test and interview conducted by the Block Livelihood Coordinator."
      },
      {
        stepNumber: 3,
        title: "15-Day Certified Training & POSP Exam",
        description: "Complete the 15-day Point of Sale Person (POSP) insurance training modules and clear the certification assessment."
      },
      {
        stepNumber: 4,
        title: "Issuance of ID Card & Commencement",
        description: "Receive your official Bima Sakhi identity badge, POS device/mobile app credentials, and start rural enrollments."
      }
    ],
    officialPortalUrl: "https://nrlm.gov.in",
    applicationDeadline: "Ongoing (Block-level drives)",
    status: "Active",
    helplineNumber: "1800-111-555 / 011-23386173",
    faqs: [
      {
        question: "Is there any exam to become a Bima Sakhi?",
        answer: "Yes, candidates must pass a simplified Point of Sale Person (POSP) certification examination conducted by IRDAI/partner insurance institutions."
      },
      {
        question: "Which insurance policies can a Bima Sakhi sell?",
        answer: "They are authorized to enroll citizens into PMJJBY (life insurance), PMSBY (accidental insurance), micro-endowment policies, crop insurance, and livestock insurance."
      },
      {
        question: "Are smartphones provided for work?",
        answer: "State livelihood missions often provide subsidized digital smartphones or biometric tablets to facilitate paperless on-the-spot policy generation."
      }
    ],
    featured: false,
    views: 20100,
    updatedAt: "2026-10-23"
  },
  {
    id: "swasthya-sathi-scheme",
    title: "Swasthya Sathi Scheme 2026: ₹5 Lakh Cashless Hospitalization Smart Card",
    slug: "swasthya-sathi-scheme-west-bengal",
    summary: "Cashless secondary and tertiary healthcare coverage up to ₹5,00,000 per family per annum covering 100% of the population across empanelled government and private hospitals in West Bengal.",
    description: "Swasthya Sathi is an all-inclusive flagship universal health protection scheme introduced by the Government of West Bengal. Unlike schemes limited strictly to BPL households, Swasthya Sathi covers **100% of the state's population**, ensuring that no family is pushed into poverty by catastrophic medical expenses.\n\nThe scheme provides paperless, cashless treatment up to **₹5,00,000 per family per year** for secondary and tertiary medical treatments, surgical operations, and post-hospitalization medicine packages.\n\n### Smart Card in Name of Female Head\nIn a revolutionary move towards women's empowerment, the Swasthya Sathi biometric Smart Card is issued exclusively in the name of the **eldest female member** of the household as the head of the family, covering her husband, children, dependent parents, and in-laws.",
    category: "Health",
    type: "State",
    state: "West Bengal",
    beneficiary: "All Families and Citizens in West Bengal (Female Head of Family)",
    benefits: [
      "Cashless health insurance cover up to ₹5,00,000 per family per annum",
      "100% universal coverage: No income ceiling or wealth exclusion criteria",
      "Pre-existing medical conditions covered from Day 1 without any waiting period",
      "Over 2,400 empanelled government and top-tier private hospitals across India"
    ],
    eligibility: [
      "Must be a permanent resident family of West Bengal",
      "Family must not be enrolled in any other government-sponsored medical allowance or CGHS/WBHS scheme",
      "All family members listed under the female head of household are covered"
    ],
    documentsRequired: [
      "Aadhaar Card of all family members",
      "Khadya Sathi Ration Card (Digital Ration Card)",
      "Passport-sized photograph of the female head of the family",
      "Mobile number for SMS updates and OTP authentication"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Visit Duare Sarkar Camp or Official Portal",
        description: "Submit Form 'B' at your local Duare Sarkar outreach camp or apply online at swasthyasathi.gov.in."
      },
      {
        stepNumber: 2,
        title: "Fill Family Details & Female Head Nominee",
        description: "Fill the application form with details of all family members, designating the eldest adult female as family head."
      },
      {
        stepNumber: 3,
        title: "Biometric & Live Photo Registration",
        description: "Visit the camp computer desk where biometrics (fingerprint and webcam photo) of the family head are captured."
      },
      {
        stepNumber: 4,
        title: "Instant Smart Card Issuance",
        description: "Receive your pre-activated, laminated Swasthya Sathi Smart Card with chip on the spot, ready for immediate hospital use."
      }
    ],
    officialPortalUrl: "https://swasthyasathi.gov.in",
    applicationDeadline: "Ongoing (Duare Sarkar Camps & Portal)",
    status: "Active",
    helplineNumber: "1800-345-5384",
    faqs: [
      {
        question: "Can unmarried women or single mothers get a Swasthya Sathi card?",
        answer: "Yes, single women, widows, and unmarried adult women living independently are recognized as heads of their households and receive cards."
      },
      {
        question: "Does Swasthya Sathi cover treatment outside West Bengal?",
        answer: "Yes, empanelled premier hospitals like AIIMS New Delhi, CMC Vellore, and Tata Memorial Hospital Mumbai accept Swasthya Sathi for specialized advanced oncology and cardiac treatments."
      },
      {
        question: "Are pre-existing diseases like heart conditions or diabetes covered?",
        answer: "Yes, all pre-existing illnesses and congenital conditions are 100% covered from day one without any waiting period."
      }
    ],
    featured: false,
    views: 31800,
    updatedAt: "2026-10-24"
  },
  {
    id: "deendayal-antyodaya-yojana-nrlm",
    title: "Deendayal Antyodaya Yojana - DAY-NRLM: Micro-Credit, Revolving Funds & SHG Livelihoods",
    slug: "deendayal-antyodaya-yojana-nrlm-shg",
    summary: "Nationwide rural poverty eradication program organizing 10+ crore women into Self-Help Groups (SHGs) with revolving funds, community investment support, and low-interest bank loan linkages.",
    description: "Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM) is implemented by the Ministry of Rural Development, Government of India. It is recognized globally as one of the world's largest community mobilization programs for women's socio-economic empowerment.\n\nThe mission's core belief is that the poor possess strong innate capabilities, and given appropriate institutional platforms, skill training, and affordable credit, they can pull themselves out of poverty.\n\n### Institutional Architecture & Financial Architecture\n1. **Revolving Fund (RF)**: A grant of ₹20,000 to ₹30,000 per SHG to cultivate internal thrift, mutual lending habits, and prompt repayment discipline.\n2. **Community Investment Support Fund (CIF)**: Capital grant of up to ₹1,50,000 provided to the Village Organization (VO) to lend to member SHGs for undertaking viable income-generating micro-enterprises.\n3. **Interest Subvention**: SHGs availing bank credit up to ₹3,00,000 receive an interest subvention bringing the effective borrowing rate down to 7% per annum, with an additional 3% subvention for prompt repayment (net 4% interest rate).",
    category: "General",
    type: "Central",
    state: "All India",
    beneficiary: "Rural Poor Families mobilized into Women Self-Help Groups (SHGs)",
    benefits: [
      "Access to collateral-free bank credit up to ₹10-20 Lakhs under SHG-Bank Linkage",
      "Revolving Fund grant of ₹20,000 to ₹30,000 per qualifying SHG",
      "Subsidized effective interest rate as low as 4% to 7% per annum",
      "Vocational training and direct market linkages through national SARAS Aajeevika exhibitions"
    ],
    eligibility: [
      "Must be an adult woman residing in a rural area",
      "Belongs to poor, marginalized, SC, ST, minority, or vulnerable rural households",
      "Must agree to follow the 'Panchasutra' principles: Regular meetings, regular savings, regular internal lending, timely repayment, and up-to-date bookkeeping"
    ],
    documentsRequired: [
      "Aadhaar Card and active mobile number",
      "SHG Resolution Book / Minutes Register",
      "SHG Group Savings Bank Account Passbook",
      "Ration Card or BPL Certificate",
      "Passport size photographs of group office bearers (President, Secretary, Treasurer)"
    ],
    howToApply: [
      {
        stepNumber: 1,
        title: "Group Formation (10 to 20 Women)",
        description: "Form a neighborhood group of 10 to 20 women with assistance from the local Community Resource Person (CRP)."
      },
      {
        stepNumber: 2,
        title: "Open Joint Savings Account",
        description: "Pass a resolution and open a savings bank account in the name of the SHG at your nearest bank branch."
      },
      {
        stepNumber: 3,
        title: "Follow Panchasutra for 3 Months",
        description: "Conduct weekly meetings, pool regular small savings (e.g. ₹50-100 per member), and start internal lending."
      },
      {
        stepNumber: 4,
        title: "Qualify for Revolving Fund & Bank Credit",
        description: "After 3 months of consistent Panchasutra performance, the SHG is graded and qualifies for government Revolving Funds and low-interest bank credit."
      }
    ],
    officialPortalUrl: "https://nrlm.gov.in",
    applicationDeadline: "Ongoing",
    status: "Active",
    helplineNumber: "1800-111-555 / 011-23386173",
    faqs: [
      {
        question: "What is 'Panchasutra' in NRLM?",
        answer: "Panchasutra is the foundation of every SHG: 1) Regular Meetings, 2) Regular Savings, 3) Regular Internal Lending, 4) Timely Repayment, and 5) Regular Book of Accounts."
      },
      {
        question: "Are individual collateral guarantees needed for SHG loans?",
        answer: "No, loans extended to SHGs are collateral-free and backed by the mutual peer guarantee of the group members."
      },
      {
        question: "Can an SHG start collective farming or food processing?",
        answer: "Yes, NRLM actively promotes Producer Groups and Farmer Producer Enterprises (FPEs) in poultry, dairy, spice grinding, and handloom weaving."
      }
    ],
    featured: false,
    views: 28900,
    updatedAt: "2026-10-24"
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

