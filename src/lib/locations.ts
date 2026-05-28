export interface Location {
  slug: string;
  name: string;
  region: string;
  description: string;
  longDescription: string;
  image: string;
  isHQ?: boolean;
}

export const locations: Location[] = [
  {
    slug: "randburg",
    name: "Randburg",
    region: "Gauteng",
    description: "Our headquarters — serving Randburg businesses with dedicated, on-site payroll support.",
    longDescription:
      "His Assignment Payroll Solutions is headquartered in Ferndale, Randburg. We serve businesses across Randburg, Ferndale, Northgate, Bordeaux, Robindale, and surrounding suburbs. As a Randburg-based firm, we understand the local business landscape and are on hand for in-person consultations when needed.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    isHQ: true,
  },
  {
    slug: "sandton",
    name: "Sandton",
    region: "Gauteng",
    description: "Payroll outsourcing for Sandton's SMEs, corporates, and financial services firms.",
    longDescription:
      "Sandton is South Africa's financial capital, home to a dense concentration of businesses that demand precision payroll management. His Assignment provides remote and on-site payroll services to businesses across Sandton, Morningside, Bryanston, Paulshof, and Rivonia — handling compliance, submissions, and employee queries with the same rigour that Sandton businesses expect.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "johannesburg",
    name: "Johannesburg",
    region: "Gauteng",
    description: "Full-service payroll outsourcing for Johannesburg businesses of every size.",
    longDescription:
      "Johannesburg is South Africa's economic engine, and businesses here face complex payroll challenges — multiple employee types, shifting compliance requirements, and zero tolerance for late SARS submissions. His Assignment serves Johannesburg CBD, Rosebank, Parktown, Melrose, Illovo, and all central Johannesburg areas with professional payroll BPO tailored to your industry.",
    image: "https://images.unsplash.com/photo-1564996424010-a8a1b7d8cbc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "pretoria",
    name: "Pretoria",
    region: "Gauteng",
    description: "SARS-compliant payroll services for Pretoria businesses, NGOs, and government contractors.",
    longDescription:
      "Pretoria's business environment includes a significant number of NGOs, government contractors, schools, and professional services firms — all with unique payroll requirements. His Assignment provides fully compliant payroll management across Pretoria East, Pretoria West, Centurion, Hatfield, and Arcadia, with particular expertise in NGO and school payrolls.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "germiston",
    name: "Germiston",
    region: "East Rand, Gauteng",
    description: "Reliable payroll outsourcing for Germiston's manufacturing, logistics, and trade businesses.",
    longDescription:
      "Germiston is the East Rand's industrial and commercial hub, home to manufacturing, logistics, and retail businesses with complex shift-based and hourly payrolls. His Assignment handles the full spectrum — from simple monthly payrolls to complex weekly runs with overtime, UIF, and SDL — serving businesses across Germiston, Bedfordview, and the East Rand corridor.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "boksburg",
    name: "Boksburg",
    region: "East Rand, Gauteng",
    description: "Payroll administration for Boksburg's growing SME and industrial sector.",
    longDescription:
      "Boksburg is a growing commercial centre on the East Rand, with a mix of industrial, retail, and services businesses. His Assignment provides professional payroll administration to businesses across Boksburg, Benoni, Brakpan, and the greater East Rand — including full SARS compliance, payslip generation, and leave management.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "northcliff",
    name: "Northcliff",
    region: "Gauteng",
    description: "Professional payroll services for Northcliff and surrounding western Johannesburg suburbs.",
    longDescription:
      "Northcliff, Melville, Westdene, and the western Johannesburg corridor host a wide range of independent businesses, schools, and NGOs. His Assignment serves clients across this area with the same dedicated payroll management offered to all our clients — personal service, accurate submissions, and always-available support.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "midrand",
    name: "Midrand",
    region: "Gauteng",
    description: "Scalable payroll outsourcing for Midrand's tech, logistics, and corporate hub.",
    longDescription:
      "Midrand sits at the crossroads of Johannesburg and Pretoria, making it one of Gauteng's fastest-growing business nodes. His Assignment serves businesses across Midrand, Kyalami, Halfway House, and Waterfall with scalable payroll solutions that grow as your business grows.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "centurion",
    name: "Centurion",
    region: "Tshwane, Gauteng",
    description: "Payroll management for Centurion's expanding corporate and retail sector.",
    longDescription:
      "Centurion bridges Pretoria and Midrand with a strong concentration of corporate offices, retail centres, and residential businesses. His Assignment provides complete payroll outsourcing to businesses across Centurion, Irene, Highveld, and the surrounding Tshwane South area — handling SARS compliance, payslips, and UIF administration with zero fuss.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
