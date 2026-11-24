
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "River Dredging",
    image: "/images/solutions/1.jpeg",
    description:
      "Sediment removal, channel deepening, river rejuvenation and improved water flow and carrying capacity.",
  },
  {
    title: "Canal Dredging",
    image: "/images/solutions/2.jpeg",
    description:
      "Desiltation and capacity enhancement for irrigation canals, water supply channels and drainage networks.",
  },
  {
    title: "Reservoir Desiltation",
    image: "/images/solutions/3.jpeg",
    description:
      "Removal of accumulated silt to recover storage capacity, improve water availability and support infrastructure longevity.",
  },
  {
    title: "Lake Desiltation",
    image: "/images/solutions/4.jpeg",
    description:
      "Sediment removal and ecosystem restoration to improve usable depth, water quality and overall functionality.",
  },
  {
    title: "Sediment Management",
    image: "/images/solutions/5.jpeg",
    description:
      "Planned excavation, slurry handling, discharge coordination and designated disposal management.",
  },
  {
    title: "Inland Slurry Transportation",
    image: "/images/solutions/6.jpeg",
    description:
      "Engineered floating and shore-based pipeline systems for dependable slurry conveyance from dredger to discharge location.",
  },
];

const processSteps = [
  { number: "01", title: "Inland Dredger", icon: "⚓" },
  { number: "02", title: "Flexible Hose Connection", icon: "〰" },
  { number: "03", title: "Floating Pipeline", icon: "≋" },
  { number: "04", title: "Shore Discharge", icon: "↗" },
];

const benefits = [
  {
    icon: "◉",
    title: "Superior Abrasion Resistance",
    description: "Ceramic-lined construction.",
  },
  {
    icon: "◎",
    title: "Engineered Flexibility",
    description: "Accommodates movement and vibration.",
  },
  {
    icon: "◈",
    title: "Simplified Maintenance",
    description: "Replaceable hose sections.",
  },
  {
    icon: "✓",
    title: "Reduced Operational Interruptions",
    description: "Minimizes unplanned maintenance.",
  },
  {
    icon: "↗",
    title: "Optimized Lifecycle Economics",
    description: "Long-term operating value.",
  },
];

const equipment = ["MK 1", "MK 2", "BLSX 1", "BLSX 2", "BLSX 3"];

const capabilities = [
  "Hydraulic dredging",
  "Dredging discharge systems",
  "Equipment mobilization & deployment",
  "Sediment handling",
  "Operational planning & coordination",
  "Performance monitoring",
];

const reasons = [
  { icon: "◇", title: "End-to-End Solutions" },
  { icon: "♧", title: "Execution Capability" },
  { icon: "♙", title: "Experienced Teams" },
  { icon: "⚙", title: "Fit-for-Purpose Equipment" },
  { icon: "⬡", title: "Safety & Environmental Care" },
  { icon: "♧", title: "Transparent, Collaborative Approach" },
];

const partners = [
  "adani",
  "DEME",
  "JSW",
  "R meIL",
  "Ambuja",
  "MEKALA",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="h-[3px] w-7 bg-[#d4a63e]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c69a37]">
        {children}
      </span>
    </div>
  );
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function InlandDredgingPage() {
  return (
    <main className="overflow-hidden bg-[#101513] text-white">

      {/* ==========================================
          SECTION 01: HERO
      ========================================== */}

      <section
        className="relative flex min-h-[570px] items-center border-b border-[#c49b3e] bg-cover bg-center bg-no-repeat sm:min-h-[620px] lg:min-h-[650px]"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10,16,15,0.96) 0%,
              rgba(10,16,15,0.88) 30%,
              rgba(10,16,15,0.45) 57%,
              rgba(10,16,15,0.08) 100%
            ),
            url('/images/solutions/hero-dredging.png')
          `,
        }}
      >
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[#d5a63e]" />

        <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16">
          <div className="max-w-[620px]">

            <SectionLabel>Inland Dredging Solutions</SectionLabel>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
              Restoring Waterways.
              <span className="mt-1 block text-[#e3b446]">
                Reclaiming Capacity.
              </span>
            </h1>

            <p className="mt-5 text-base font-medium text-white/90 sm:text-xl">
              Engineering sustainable inland water infrastructure.
            </p>

            <p className="mt-5 max-w-[550px] text-sm leading-[1.85] text-white/80">
              TRANSMUTE delivers integrated inland dredging, desiltation,
              sediment management and slurry transportation solutions for
              rivers, canals, lakes and reservoirs. Combining advanced
              equipment, engineered pipeline systems and specialized
              abrasion-resistant hose technology, we restore water depth,
              improve carrying capacity and enhance the long-term performance
              of inland water infrastructure.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#dredging-services"
                className="inline-flex items-center justify-center gap-4 bg-[#e2b344] px-6 py-3 text-xs font-bold text-black transition hover:bg-[#f3c85f]"
              >
                Explore Our Capabilities <Arrow />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-4 border border-[#d1a33d] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#d1a33d] hover:text-black"
              >
                Discuss Your Project <Arrow />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#c49b3e]/70" />
      </section>


      {/* ==========================================
          SECTION 02: ABOUT
      ========================================== */}

      <section className="bg-[#f5f3ed] py-16 text-[#171b19] lg:py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-12 lg:px-16">

          <div className="lg:col-span-5">
            <SectionLabel>About Our Dredging Solutions</SectionLabel>

            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Engineered for
              <span className="block text-[#b88929]">
                Inland Water Systems
              </span>
            </h2>

            <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#424642]">
              TRANSMUTE is a strategic collaboration between Terramet
              Ventures LLP and BLSX Limited, bringing together engineering
              expertise, industry experience and execution capabilities.
              Our approach integrates dredging operations with slurry
              conveyance, specialized pipeline technology, sediment handling
              and site-specific project planning.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center lg:col-span-3">
            {[
              { icon: "◎", title: "Integrated", sub: "Solutions" },
              { icon: "⬡", title: "Proven", sub: "Expertise" },
              { icon: "♧", title: "Environmentally", sub: "Responsible" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center border-l border-[#ded8ca] px-2 py-7"
              >
                <span className="text-4xl text-[#b88c32]">{item.icon}</span>
                <p className="mt-3 text-xs font-bold">{item.title}</p>
                <p className="text-xs font-bold">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="relative h-[240px] overflow-hidden lg:col-span-4 lg:h-[290px]">
            <Image
              src="/images/solutions/canal-aerial.jpg"
              alt="Aerial view of an inland canal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-y-0 left-0 w-3 -skew-x-12 bg-[#d4a63e]" />
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 03: SERVICES
      ========================================== */}

      <section
        id="dredging-services"
        className="bg-[#101513] py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <SectionLabel>Our Inland Dredging Services</SectionLabel>

          <h2 className="mb-9 text-2xl font-extrabold sm:text-3xl">
            Comprehensive Solutions for
            <span className="text-[#e0b343]"> Every Waterbody</span>
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-md border border-[#92752f]/70 bg-[#171e1b] transition duration-300 hover:-translate-y-1 hover:border-[#e0b343] hover:shadow-xl hover:shadow-black/30"
              >
                <div className="relative h-[170px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#d5a63e]">
                      0{index + 1}
                    </span>
                    <h3 className="text-sm font-bold">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs leading-[1.8] text-white/70">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 04: INTEGRATED PROCESS
      ========================================== */}

      <section className="bg-[#f5f3ed] py-16 text-[#181c19] lg:py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-12 lg:px-16">

          <div className="lg:col-span-4">
            <SectionLabel>Integrated Dredging & Slurry Transportation</SectionLabel>

            <h2 className="text-3xl font-extrabold leading-tight">
              From Dredger to Discharge.
              <span className="block text-[#bd902f]">
                Engineered for Continuous Flow.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#4d514d]">
              Successful dredging requires more than sediment excavation.
              TRANSMUTE integrates dredging equipment with engineered
              hoses, floating and shore pipelines, and sediment discharge
              arrangements for operational continuity and productivity.
            </p>

            <Link
              href="/solutions/flexible-hose"
              className="mt-6 inline-flex items-center gap-3 bg-[#e1b342] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#f1c95d]"
            >
              Explore Our Pipeline Capabilities <Arrow />
            </Link>
          </div>

          <div className="rounded-lg bg-[#eeece5] p-5 sm:p-8 lg:col-span-8">
            <h3 className="mb-8 text-sm font-bold">
              Our Integrated Dredging Process
            </h3>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-3">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative text-center">
                  <div className="mx-auto flex h-[85px] w-[85px] items-center justify-center rounded-full bg-[#101513] text-4xl text-[#d8ac43] shadow-lg">
                    {step.icon}
                  </div>

                  <p className="mt-4 text-xs font-bold">
                    {step.title}
                  </p>

                  {index < 3 && (
                    <span className="absolute -right-3 top-7 hidden text-2xl text-[#a9a69e] sm:block">
                      ›
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-[#77776f]">
              One connected system — from excavation to discharge.
            </p>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 05: HOSE TECHNOLOGY
      ========================================== */}

      <section className="relative overflow-hidden bg-[#101513] py-16 lg:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/solutions/dredging-hose.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101513]/80 via-[#101513]/95 to-[#101513]" />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-12 lg:px-16">

          <div className="lg:col-span-4">
            <div className="relative h-[250px] overflow-hidden rounded-lg sm:h-[310px]">
              <Image
                src="/images/solutions/dredging-hose.jpg"
                alt="Industrial reinforced dredging hose"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <SectionLabel>Advanced Dredging Hose Technology</SectionLabel>

            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
              Engineered for Abrasion. Designed for Movement.
              <span className="block text-[#e0b343]">
                Built for Reliability.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/65">
              At the heart of our offering is TRANSMUTE's ceramic-lined,
              reinforced rubber hose technology, engineered for demanding
              dredging and abrasive slurry transportation applications.
            </p>

            <Link
              href="/solutions/flexible-hose"
              className="mt-6 inline-flex items-center gap-3 border border-[#c69b3e] px-5 py-3 text-xs font-bold text-[#e3b548] transition hover:bg-[#c69b3e] hover:text-black"
            >
              Discover Our Hose Technology <Arrow />
            </Link>
          </div>

          <div className="space-y-5 border-l border-[#a47e30] pl-6 lg:col-span-3">
            {benefits.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d3a63d] text-lg text-[#e1b342]">
                  {item.icon}
                </span>

                <div>
                  <h3 className="text-xs font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 06: EQUIPMENT
      ========================================== */}

      <section className="bg-[#f5f3ed] py-16 text-[#181c19] lg:py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 sm:px-10 lg:grid-cols-12 lg:px-16">

          <div className="lg:col-span-4">
            <SectionLabel>Equipment & Operational Capabilities</SectionLabel>

            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
              Specialized Equipment.
              Efficient Operations.
              <span className="block text-[#bd902f]">
                Reliable Execution.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#535750]">
              TRANSMUTE offers access to specialized dredging equipment
              and operational resources for inland dredging projects,
              supported by engineered discharge systems and project-specific
              deployment planning.
            </p>
          </div>

          <div className="rounded-xl bg-[#eeece5] p-5 lg:col-span-5">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wide">
              Identified Dredger Units
            </h3>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
              {equipment.map((unit) => (
                <div
                  key={unit}
                  className="flex flex-col items-center justify-center rounded-lg bg-white p-3 shadow-sm"
                >
                  <span className="text-2xl text-[#303833]">⚓</span>
                  <span className="mt-3 text-[10px] font-extrabold">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-bold">
              Our operational capabilities include:
            </h3>

            <ul className="space-y-3">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-start gap-2 text-xs text-[#51564f]"
                >
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e8d7a7] text-[10px] text-[#997021]">
                    ✓
                  </span>
                  {capability}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 07: WHY CHOOSE US + PARTNERS
      ========================================== */}

      <section className="bg-[#101513] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:px-16">

          <div className="lg:col-span-5">
            <SectionLabel>Why Choose Transmute?</SectionLabel>

            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#c59b3d] text-2xl text-[#e0b343]">
                    {reason.icon}
                  </div>

                  <p className="text-[11px] font-semibold leading-relaxed text-white/90">
                    {reason.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#4b432f] pt-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h2 className="text-xl font-extrabold text-[#e1b343]">
              Built on Industry Experience
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/70">
              Our strategic partner, BLSX Limited, brings dredging-sector
              experience and established industry relationships.
            </p>

            <p className="mb-5 mt-6 text-xs font-semibold text-white/80">
              Select Clientele of Our Strategic Partner — BLSX Limited
            </p>

            <div className="grid grid-cols-3 gap-2 rounded-md bg-white p-4 sm:grid-cols-6">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="flex min-h-[55px] items-center justify-center border border-gray-100 px-2 text-center text-sm font-extrabold text-[#34413a]"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 08: FINAL CTA
      ========================================== */}

      <section
        className="relative overflow-hidden border-t-[3px] border-[#c49b3e] bg-cover bg-center py-16 sm:py-20"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10,15,14,0.85),
              rgba(10,15,14,0.68)
            ),
            url('/images/solutions/sunset-river.jpg')
          `,
        }}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-6 text-center sm:px-10 lg:flex-row lg:justify-between lg:px-16 lg:text-left">

          <div className="max-w-[430px]">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Let's Dredge for Cleaner, Deeper,
              <span className="block text-[#e2b445]">
                Healthier Waterways.
              </span>
            </h2>
          </div>

          <div className="max-w-[400px] border-l-2 border-[#d3a63e] pl-5 text-sm leading-7 text-white/80">
            Whether you are planning river desiltation, reservoir capacity
            restoration, canal rehabilitation, lake rejuvenation or inland
            slurry transportation, our team is ready to discuss your
            project requirements.
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-4 bg-[#e2b343] px-7 py-4 text-xs font-extrabold text-black transition hover:bg-[#f4ca60]"
          >
            Discuss Your Project <Arrow />
          </Link>

        </div>
      </section>

    </main>
  );
}
