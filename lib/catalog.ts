export type Product = {
  slug: string;
  name: string;
  blurb: string;
  features: string[];
  specs: string[];
};

export type CatalogSection = {
  slug: string;
  number: string;
  title: string;
  intro: string;
  products: Product[];
};

export const catalog: CatalogSection[] = [
  {
    slug: "hygienic-doors",
    number: "01",
    title: "Hygienic & specialized doors",
    intro:
      "Hermetically sealed and impact-rated doors for theatres, wards and diagnostic rooms, built for infection control and daily hospital traffic.",
    products: [
      {
        slug: "single-leaf-door",
        name: "Single leaf door",
        blurb: "Hermetically sealed single door for wards, clinics and utility rooms.",
        features: ["Antibacterial surface finish", "Flush vision panel option", "Acoustic and smoke insulation"],
        specs: [
          "Frame: stainless / aluminium",
          "Core: polyurethane or honeycomb",
          "Width: 800mm – 1200mm",
          "Option: lead lining for X-ray shielding",
          "Option: biometric door lock",
        ],
      },
      {
        slug: "double-leaf-swing-door",
        name: "Double leaf swing door",
        blurb: "Double swing-action door built for theatre and high-traffic corridors.",
        features: ["High-impact bumpers", "180° double swing", "Hands-free kick plate"],
        specs: [
          "Frame: stainless / aluminium",
          "Core: polyurethane or honeycomb",
          "Width: 1200mm – 2000mm",
          "Option: lead lining for X-ray shielding",
          "Option: biometric door lock",
        ],
      },
      {
        slug: "sliding-door",
        name: "Sliding door",
        blurb: "Space-saving sliding door with hands-free and touchless options.",
        features: ["High-impact bumpers", "180° single slide", "Hands-free kick plate"],
        specs: [
          "Frame: stainless / aluminium",
          "Core: polyurethane or honeycomb",
          "Width: 1200mm – 2000mm",
          "Option: lead lining for X-ray shielding",
          "Option: automatic non-contact gesture opening",
          "Option: biometric door lock",
        ],
      },
    ],
  },
  {
    slug: "mgps",
    number: "02",
    title: "Medical gas pipeline systems (MGPS)",
    intro:
      "Manifolds, alarm panels, valve service units, bed head units and delivery devices designed to HTM 02-01 and BS standards.",
    products: [
      {
        slug: "automatic-gas-manifold",
        name: "Automatic gas manifold systems",
        blurb: "Automatic changeover manifolds with digital monitoring for O2, MA4 and N2O.",
        features: ["Automatic changeover control", "Digital pressure display", "Audio-visual alarm inputs"],
        specs: ["Conforms to HTM 02-01", "Gases: O2, MA4, N2O"],
      },
      {
        slug: "cylinder-banks",
        name: "Cylinder banks",
        blurb: "BS-standard cylinder banks with safety-wired pigtails.",
        features: ["Flexible pigtails with safety wire", "Cylinder bracket", "2, 3, 4, 5, 6 or 8 cylinder banks"],
        specs: ["Standard: BS", "Gases: O2, MA4, N2O"],
      },
      {
        slug: "gas-outlets",
        name: "Gas outlets",
        blurb: "Colour-coded, DISS-identified terminal units.",
        features: ["Colour coded", "DISS gas identification"],
        specs: ["Standard: BS EN ISO 9170-1", "Gases: O2, MA4, N2O, vacuum, MA7, AGSS"],
      },
      {
        slug: "gas-electricity-modules",
        name: "Gas and electricity modules",
        blurb: "Combined gas and power modules in sheet steel, finished to RAL colour.",
        features: ["DKP or stainless sheet metal", "RAL colour catalogue"],
        specs: ["Standard: BS", "Gases: O2, MA4, N2O, vacuum, MA7, AGSS"],
      },
      {
        slug: "alarm-panels",
        name: "Gas alarm panels",
        blurb: "LCD alarm units monitoring pressure and vacuum across zones.",
        features: ["5 pressure alarms, 1 vacuum alarm", "LCD alarm unit", "Modbus support"],
        specs: ["Standard: BS"],
      },
      {
        slug: "area-valve-service-units",
        name: "Area valve service units (AVSU)",
        blurb: "Zone isolation valves for planned maintenance and emergency shutoff.",
        features: ["Colour coded", "DISS gas identification"],
        specs: ["Standards: HTM 02-01, EN ISO 15223-1:2021", "Gases: O2, MA4, N2O, vacuum, MA7, AGSS"],
      },
      {
        slug: "zone-service-units",
        name: "Zone service units (ZSU)",
        blurb: "Lockable single-gas isolation enclosures at ward or room level.",
        features: ["Single gas valve per enclosure", "Lockable"],
        specs: ["Standards: HTM 02-01, EN ISO 15223-1:2021", "Gases: O2, MA4, N2O, vacuum, MA7, AGSS"],
      },
      {
        slug: "bed-head-units",
        name: "Bed head units (horizontal & vertical)",
        blurb: "Integrated gas, lighting and power at the bedside, customised to the ward layout.",
        features: ["Integrated gas outlets", "Reading and ambient light", "Class D electrical outlets", "Provision for nurse call and LAN"],
        specs: ["Length: 1500mm – 1800mm", "Gases: O2, MA4, N2O, vacuum, MA7, AGSS"],
      },
      {
        slug: "headwalls",
        name: "Headwalls",
        blurb: "Full headwall panel combining gas, power, light and nurse call provisions.",
        features: ["Integrated gas outlets", "Reading and ambient light", "Customised to client requirements"],
        specs: ["Gases: O2, MA4, N2O, vacuum, MA7, AGSS"],
      },
      {
        slug: "gas-pendants",
        name: "Gas pendants",
        blurb: "Ceiling-mounted pendants for theatre and ICU with powered rotation.",
        features: ["Electric and pneumatic control", "Braking", "Up to 340° rotation"],
        specs: ["Standard: BS", "Input: 240V AC, 50Hz", "Gases: O2, MA4, N2O, MA7, vacuum, AGSS"],
      },
      {
        slug: "flowmeters-vacuum-regulators",
        name: "Flowmeters & vacuum regulators",
        blurb: "Back-pressure regulated flow control for oxygen and vacuum lines.",
        features: ["Back-pressure regulated", "Variable flow settings", "Single or double variants"],
        specs: ["Standard: BS", "Gases: O2, vacuum"],
      },
      {
        slug: "gas-pressure-regulators",
        name: "Gas pressure regulators",
        blurb: "High-inlet-pressure regulators in stainless steel and brass.",
        features: ["Material: stainless steel, brass"],
        specs: ["Inlet pressure: up to 230 bar", "Outlet pressure: 0–30 bar", "Gases: O2, MA4, N2O"],
      },
      {
        slug: "vacuum-jars",
        name: "Vacuum jars",
        blurb: "Overflow-protected suction jars in autoclavable and disposable variants.",
        features: ["Anti-overflow float system", "Silicon valve", "Autoclavable or disposable"],
        specs: ["Standard: BS", "Sizes: 1L, 1.5L, 2L"],
      },
      {
        slug: "copper-pipes-fittings",
        name: "Degreased copper pipes & fittings",
        blurb: "Medical-grade degreased copper piping and fittings for pipeline runs.",
        features: ["Equal tee, elbow, coupler and reducing couplers"],
        specs: ["Outer diameter: 12mm – 54mm", "Wall thickness: 0.8mm – 1.2mm", "Standards: EN13348 / HTM 02-01"],
      },
    ],
  },
  {
    slug: "nurse-call",
    number: "03",
    title: "Nurse call systems",
    intro:
      "Wired and wireless call systems for wards, from bedside unit to duty-room receiver.",
    products: [
      {
        slug: "wired-smart-nurse-call",
        name: "Wired smart nurse call",
        blurb: "Ethernet or bus-line nurse call with full ward-level monitoring.",
        features: ["Ethernet / bus-line topology", "Antibacterial hand units", "Integrated call-cancel buttons", "Code blue", "Master console display", "PoE"],
        specs: [],
      },
      {
        slug: "wireless-instant-call",
        name: "Wireless instant call system",
        blurb: "RF or smart-mesh call system for fast retrofit installs with no trunking.",
        features: ["RF 433MHz / smart mesh", "Antibacterial hand units", "Long battery life", "Fast installation, no trunking"],
        specs: [],
      },
    ],
  },
  {
    slug: "radiation-shielding",
    number: "04",
    title: "X-ray radiation shielding",
    intro:
      "Lead sheet, lead glass and mobile shields sized and certified for diagnostic imaging rooms.",
    products: [
      {
        slug: "lead-sheets",
        name: "Lead sheets",
        blurb: "99% pure lead sheet for wall and door lining.",
        features: [],
        specs: ["Purity: 99% pure lead", "Thickness: 0.3mm – 2.0mm", "Sheet size: 4ft × 8ft"],
      },
      {
        slug: "lead-glass",
        name: "Lead glass",
        blurb: "High optical clarity viewing panels, cut to size.",
        features: ["High optical rating", "Custom cut dimensions"],
        specs: ["Lead equivalent: 1.5mm – 3.0mm Pb", "Standard size: 300mm × 300mm"],
      },
      {
        slug: "xray-shield",
        name: "Mobile X-ray shield",
        blurb: "Full-body mobile shield with panoramic viewing window.",
        features: ["Heavy-duty castors", "Panoramic window", "Full-body protection"],
        specs: ["Size: 1800mm × 900mm", "Lead equivalent: 2.0mm Pb"],
      },
    ],
  },
  {
    slug: "stainless-steel",
    number: "05",
    title: "Stainless steel ware",
    intro:
      "304 / 316 grade stainless fabrication for scrub-up, sluice and drug storage areas.",
    products: [
      {
        slug: "surgical-scrub-sink",
        name: "Surgical scrub sink",
        blurb: "Elbow or knee-operated scrub sinks for theatre entrances.",
        features: ["Elbow-action or knee operated", "Option: sensor operated", "Option: thermostatic mixing"],
        specs: ["Material: AISI 304 stainless", "1, 2 or 3 bay", "Capacity: 800L – 1800L"],
      },
      {
        slug: "sluice-waste-sink",
        name: "Sluice & waste sink",
        blurb: "Combined hopper, sink and WC unit for sluice rooms.",
        features: ["Double hopper with water closet", "Integrated flushing rim", "Deep bowl design"],
        specs: ["Material: AISI 304 / 316", "Size: 1200mm × 600mm × 850mm"],
      },
      {
        slug: "drug-utility-troughs",
        name: "Drug & utility troughs",
        blurb: "Lockable stainless storage for controlled drugs and utility items.",
        features: ["Lockable drug drawers", "Option: custom modular"],
        specs: ["Material: AISI 304 polished", "Anti-static troughs"],
      },
    ],
  },
  {
    slug: "plant-spares",
    number: "06",
    title: "MGPS plant spares & pneumatic parts",
    intro:
      "Service kits and pneumatic or hydraulic components to keep oxygen, air and vacuum plants running.",
    products: [
      {
        slug: "service-maintenance-kits",
        name: "Service & maintenance kits",
        blurb: "Plant-specific kits for scheduled maintenance and overhaul.",
        features: ["Vacuum pump overhaul kits", "Air compressor filter kits", "Desiccant drier refill packs", "Oxygen plant maintenance kits"],
        specs: [],
      },
      {
        slug: "pneumatic-hydraulic-parts",
        name: "Pneumatic & hydraulic parts",
        blurb: "Regulators, valves and gauges for plant rooms and autoclaves.",
        features: ["High-pressure regulators", "Solenoid and check valves", "Pressure switches and gauges"],
        specs: [],
      },
    ],
  },
];

export const services = {
  number: "07",
  title: "Biomedical engineering services",
  intro:
    "Beyond supply and installation, our biomedical engineering team supports facilities through the life of their equipment.",
  items: [
    {
      name: "Hospital design consultancy",
      blurb: "Layout and specification support for new builds and renovations, from plant room sizing to ward gas points.",
    },
    {
      name: "Medical equipment maintenance",
      blurb: "Scheduled preventive maintenance to keep critical equipment reliable and compliant.",
    },
    {
      name: "Medical equipment calibration",
      blurb: "Calibration services to keep diagnostic and monitoring equipment within specification.",
    },
    {
      name: "Installation, training & commissioning",
      blurb: "End-to-end installation with staff training and formal commissioning sign-off.",
    },
  ],
};

export function findProduct(sectionSlug: string, productSlug: string) {
  const section = catalog.find((s) => s.slug === sectionSlug);
  const product = section?.products.find((p) => p.slug === productSlug);
  return { section, product };
}
