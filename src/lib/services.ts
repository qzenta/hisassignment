export interface Service {
  slug: string;
  title: string;
  intro: string;
  desc: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "payroll-processing",
    title: "Payroll Processing",
    intro: "Accurate payroll processing ensures all employee salaries are calculated correctly and paid on time — every cycle, without exception.",
    desc: "We handle every component of your payroll run: basic salaries, wages, overtime, bonuses, commissions, and all applicable deductions. Our process is structured, documented, and audit-ready from day one.",
    features: [
      "Salary & wage calculations",
      "Overtime & bonus processing",
      "Statutory deduction handling",
      "Payslip generation & distribution",
      "Bank payment files",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "payroll-outsourcing",
    title: "Payroll Outsourcing",
    intro: "Hand over your entire payroll function to a dedicated specialist — without the overhead, risk, or complexity of managing it in-house.",
    desc: "We become your payroll department. From monthly processing to employee query resolution and SARS correspondence, everything is handled on your behalf. You get the expertise of a full payroll team at a fraction of the cost.",
    features: [
      "Full payroll BPO service",
      "Dedicated payroll consultant",
      "Month-end payroll runs",
      "Employee query handling",
      "SARS correspondence management",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "sars-compliance-management",
    title: "SARS Compliance Management",
    intro: "Never miss a SARS deadline again. We manage every statutory submission on your behalf — accurately, on time, every time.",
    desc: "Full management of your EMP201, EMP501, IRP5, and IT3(a) obligations. We handle SARS eFiling, respond to SARS queries, and ensure your business remains fully compliant throughout the tax year.",
    features: [
      "EMP201 monthly submissions",
      "EMP501 bi-annual reconciliation",
      "IRP5 & IT3(a) certificates",
      "SARS eFiling management",
      "Audit support & SARS query resolution",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "paye-uif-sdl-administration",
    title: "PAYE, UIF & SDL Administration",
    intro: "Complete statutory compliance — every PAYE, UIF, and SDL obligation calculated, submitted, and reconciled accurately each month.",
    desc: "We calculate and submit all statutory amounts on your behalf, ensuring your business meets its obligations under the Income Tax Act, Unemployment Insurance Act, and Skills Development Levies Act. No penalties. No surprises.",
    features: [
      "PAYE calculations & submissions",
      "UIF registration & declarations",
      "SDL levy management",
      "Monthly EMP201 returns",
      "Annual reconciliations",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "leave-management",
    title: "Leave Management",
    intro: "Accurate leave tracking, fully integrated with your payroll cycle — so your records are always audit-ready and BCEA compliant.",
    desc: "We maintain complete leave records for all employees: annual leave, sick leave, family responsibility leave, and any other applicable leave types. Leave balances are updated each cycle and reconciled with payroll to ensure zero discrepancies.",
    features: [
      "Annual, sick & family leave tracking",
      "Leave balance reporting",
      "Leave pay processing",
      "BCEA compliance monitoring",
      "Leave accrual management",
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "year-end-tax-certificates",
    title: "Year-End Tax Certificates",
    intro: "IRP5 and IT3(a) certificates prepared and submitted with precision — making tax season completely stress-free.",
    desc: "We reconcile your full tax year, prepare all employee tax certificates, and submit your EMP501 to SARS on your behalf. Your employees receive accurate IRP5s on time, and your business closes out the tax year with clean, compliant records.",
    features: [
      "IRP5 certificate preparation",
      "IT3(a) submissions",
      "EMP501 annual reconciliation",
      "Employee tax year summaries",
      "SARS correspondence handling",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "payroll-reporting",
    title: "Payroll Reporting",
    intro: "Clear, structured payroll reports that give management the financial visibility they need — when they need it.",
    desc: "We produce monthly payroll cost reports, departmental summaries, and custom management reports tailored to your business. All records are audit-ready and available for review at any time.",
    features: [
      "Monthly cost reports",
      "Department payroll summaries",
      "Custom management reports",
      "Audit-ready records",
      "Year-over-year comparisons",
    ],
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1920&q=80",
  },
  {
    slug: "payroll-consulting",
    title: "Payroll Consulting",
    intro: "Expert guidance on payroll structures, compliance questions, and operational improvements — tailored specifically to your business.",
    desc: "Whether you need a once-off compliance review, help setting up payroll for a new business, or ongoing advisory support, we bring deep practical knowledge of South African payroll law and SARS requirements to every engagement.",
    features: [
      "Payroll structure review",
      "Compliance health checks",
      "New business payroll setup",
      "Payroll software advisory",
      "SARS query resolution",
    ],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
