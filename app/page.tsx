import React from "react";
import {
  ArrowRight,
  ChevronDown,
  MoveUpRight,
  ShieldCheck,
  Activity,
  Settings2,
  Route,
  Wrench,
} from "lucide-react";

const IMG = "/images/transmute";

const industries = [
  {
    title: "MINING",
    image: `${IMG}/mining.jpg`,
  },
  {
    title: "DREDGING",
    image: `${IMG}/dredging.jpg`,
  },
  {
    title: "PETROLEUM & PROCESS",
    image: `${IMG}/petroleum.jpg`,
  },
  {
    title: "WATER & DESALINATION",
    image: `${IMG}/water.jpg`,
  },
  {
    title: "SANITATION & WASTEWATER",
    image: `${IMG}/wastewater.jpg`,
  },
  {
    title: "INDUSTRIAL APPLICATIONS",
    image: `${IMG}/industrial.jpg`,
  },
];

const conditions = [
  {
    title: "HIGH-WEAR CONDITIONS",
    text: "Abrasive slurry and aggressive media demand materials and lining systems engineered for prolonged wear resistance.",
    image: `${IMG}/condition-wear.jpg`,
    icon: ShieldCheck,
  },
  {
    title: "DYNAMIC CONDITIONS",
    text: "Vibration, ground movement, equipment motion and changing routes require flexibility where conventional fixed systems may be restricted.",
    image: `${IMG}/condition-dynamic.jpg`,
    icon: Activity,
  },
  {
    title: "OPERATING DEMANDS",
    text: "Different sections of a transfer system may experience different pressures, loads and structural requirements.",
    image: `${IMG}/condition-pressure.jpg`,
    icon: Settings2,
  },
  {
    title: "SYSTEM CONFIGURATION",
    text: "Long straight runs, bends, discharge points and mobile sections each require different engineering approaches.",
    image: `${IMG}/condition-routing.jpg`,
    icon: Route,
  },
];

const values = [
  {
    number: "01",
    title: "ENGINEERED FOR WEAR",
    text: "Solutions configured for abrasive media and demanding environments.",
  },
  {
    number: "02",
    title: "OPTIMIZED FOR MOVEMENT",
    text: "Flexible technologies positioned where vibration, movement and route changes matter most.",
  },
  {
    number: "03",
    title: "DESIGNED FOR RELIABILITY",
    text: "Appropriate material and construction selection helps reduce failures and operational disruption.",
  },
  {
    number: "04",
    title: "FOCUSED ON LIFECYCLE VALUE",
    text: "Engineering the right solution for each section can improve service life, maintenance and overall system performance.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#ad7417] md:text-[11px]">
      {children}
    </div>
  );
}

function GoldButton({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <button
      className={`group inline-flex items-center gap-3 border px-5 py-3 text-[11px] font-bold uppercase tracking-wide transition ${
        dark
          ? "border-[#c58a2c] bg-[#bd8120] text-white hover:bg-[#d29635]"
          : "border-[#bd8120] bg-[#bd8120] text-white hover:bg-[#a86f16]"
      }`}
    >
      {children}
      <ArrowRight
        size={15}
        className="transition-transform group-hover:translate-x-1"
      />
    </button>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#171d22]">

      {/* HERO */}
      <section className="relative min-h-[590px] overflow-hidden bg-[#eee9dd]">
        <div
          className="absolute inset-y-0 right-0 w-full bg-cover bg-center md:w-[67%]"
          style={{ backgroundImage: `url(${IMG}/hero.jpg)` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1e8] via-[#f5f1e8]/95 via-40% to-transparent md:w-[70%]" />

        <div className="relative mx-auto flex min-h-[590px] max-w-[1440px] items-center px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-[590px]">
            <SectionLabel>ENGINEERED TRANSFER SOLUTIONS</SectionLabel>

            <h1 className="font-serif text-[45px] uppercase leading-[0.94] tracking-[-0.035em] md:text-[67px]">
              Engineered for
              <br />
              smoother, more
              <br />
              reliable{" "}
              <span className="text-[#a97018]">flow.</span>
            </h1>

            <p className="mt-6 max-w-[510px] text-[14px] leading-[1.55] text-[#333]">
              From flexible high-wear sections to engineered steel pipelines,
              Transmute delivers the right transfer solution for each part of
              the system — helping operations move with greater continuity,
              reliability and lifecycle value.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <GoldButton>Explore Transmute Solutions</GoldButton>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#ad7417] bg-white/50 px-5 py-3 text-[11px] font-bold uppercase"
              >
                Request Application Review
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="mt-10 grid max-w-[580px] grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  icon: <ShieldCheck />,
                  title: "ENGINEERED FOR WEAR",
                  text: "Designed for demanding abrasive applications.",
                },
                {
                  icon: <Activity />,
                  title: "BUILT FOR MOVEMENT",
                  text: "Flexible solutions for dynamic operating zones.",
                },
                {
                  icon: <Wrench />,
                  title: "DESIGNED FOR CONTINUITY",
                  text: "Reliable transfer solutions engineered to reduce disruption.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bd8120] text-[#bd8120]">
                    {React.cloneElement(item.icon, { size: 18 })}
                  </div>
                  <div>
                    <h3 className="text-[9px] font-black uppercase leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[9px] leading-[1.35] text-[#555]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-8 hidden max-w-[270px] border-l-2 border-[#c08425] pl-4 text-white md:block">
          <p className="font-serif text-[20px] uppercase leading-tight">
            One system.
            <br />
            Multiple technologies.
            <br />
            One performance standard.
          </p>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="bg-white px-5 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1340px]">
          <SectionLabel>ONE SYSTEM. DIFFERENT DEMANDS.</SectionLabel>

          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <div>
              <h2 className="max-w-[720px] font-serif text-[34px] uppercase leading-[0.98] md:text-[47px]">
                Every part of a transfer system
                <br />
                works differently.
              </h2>

              <p className="mt-4 max-w-[840px] text-[13px] leading-[1.55] text-[#444]">
                Pressure, abrasion, movement, distance and routing conditions
                can change throughout a transfer system. A solution that
                performs well in one section may not be the right choice for
                another. Transmute brings together flexible and rigid pipeline
                technologies to engineer each section around its actual
                operating requirement.
              </p>
            </div>

            <div className="hidden self-start pt-3 text-right text-[9px] uppercase tracking-[0.12em] text-[#777] md:block">
              Different conditions.
              <br />
              <span className="font-bold text-[#333]">
                A stronger system.
              </span>
            </div>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {conditions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="overflow-hidden border border-black/10 bg-[#f8f6f0]"
                >
                  <div
                    className="h-[150px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#bd8120] text-[#a97018]">
                        <Icon size={17} />
                      </div>

                      <div>
                        <h3 className="text-[11px] font-black uppercase leading-tight">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[10px] leading-[1.5] text-[#555]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTION FAMILY */}
      <section className="bg-[#eee9df] px-5 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1340px]">
          <SectionLabel>THE TRANSMUTE SOLUTION FAMILY</SectionLabel>

          <h2 className="font-serif text-[34px] uppercase leading-none md:text-[48px]">
            The right technology. In the right place.
          </h2>

          <p className="mt-4 max-w-[900px] text-[13px] leading-[1.55] text-[#444]">
            Transmute combines complementary pipeline technologies under one
            engineered solutions platform — allowing each part of the transfer
            system to be designed around its actual operating conditions.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {/* FLEX */}
            <div className="relative min-h-[340px] overflow-hidden bg-[#14181b] text-white">
              <img
                src={`${IMG}/flex-solution.jpg`}
                alt="Transmute Flex"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

              <div className="relative z-10 flex min-h-[340px] max-w-[490px] flex-col justify-between p-7">
                <div>
                  <h3 className="font-serif text-[24px] uppercase text-[#d3a04c]">
                    Transmute Flex
                  </h3>

                  <h4 className="mt-2 text-[18px] font-black uppercase leading-tight">
                    Engineered flexibility
                    <br />
                    for critical zones.
                  </h4>

                  <p className="mt-4 max-w-[330px] text-[10px] leading-[1.5] text-white/80">
                    High-performance reinforced hose systems designed for
                    abrasive transfer, vibration, movement, bends and dynamic
                    transfer applications.
                  </p>
                </div>

                <a
                  href="/solutions/flexible-hose"
                  className="mt-6 inline-flex w-fit items-center gap-2 bg-[#c08a2b] px-4 py-3 text-[10px] font-bold uppercase"
                >
                  Explore Flexible Hose Solutions
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* STEEL */}
            <div className="relative min-h-[340px] overflow-hidden border border-black/10 bg-[#f8f6ef]">
              <img
                src={`${IMG}/steel-solution.jpg`}
                alt="Transmute Steel"
                className="absolute right-0 top-0 h-full w-[57%] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#f8f6ef] via-[#f8f6ef]/95 to-transparent" />

              <div className="relative z-10 max-w-[470px] p-7">
                <h3 className="font-serif text-[24px] uppercase">
                  Transmute Steel
                </h3>

                <h4 className="mt-2 text-[18px] font-black uppercase leading-tight">
                  Engineered strength
                  <br />
                  for fixed transfer systems.
                </h4>

                <p className="mt-4 max-w-[330px] text-[10px] leading-[1.5] text-[#555]">
                  Robust steel pipeline solutions designed for fixed routes,
                  long transfer runs, structural rigidity and demanding
                  operating conditions.
                </p>

                <a
                  href="/solutions/steel-pipeline"
                  className="mt-8 inline-flex items-center gap-2 bg-[#c08a2b] px-4 py-3 text-[10px] font-bold uppercase text-white"
                >
                  Explore Steel Pipeline Solutions
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM DIAGRAM */}
      <section
        className="relative overflow-hidden bg-cover bg-center px-5 py-14 md:px-12 lg:px-16"
        style={{ backgroundImage: `url(${IMG}/system-bg.jpg)` }}
      >
        <div className="absolute inset-0 bg-[#e8ddc8]/75" />

        <div className="relative mx-auto max-w-[1340px] text-center">
          <SectionLabel>RIGHT TECHNOLOGY. RIGHT LOCATION.</SectionLabel>

          <h2 className="font-serif text-[32px] uppercase md:text-[44px]">
            Engineer the system — not just the pipe.
          </h2>

          <p className="mx-auto mt-3 max-w-[730px] text-[11px] leading-[1.5] text-[#444]">
            Transmute is built around understanding how the complete transfer
            system operates and selecting the appropriate technology for each
            critical section.
          </p>

          <div className="mx-auto mt-10 flex max-w-[1200px] flex-col items-center gap-0 md:flex-row">
            <div className="border border-black/20 bg-white px-4 py-4 text-[9px] font-bold uppercase">
              PROCESS /
              <br />
              PUMP
            </div>

            <div className="hidden h-1 flex-1 bg-[#5b5d5d] md:block" />

            <div className="w-full border-y-4 border-[#222] bg-white/60 py-3 md:w-auto md:min-w-[220px]">
              <strong className="block text-[10px] uppercase">
                Transmute Steel
              </strong>
              <span className="text-[9px]">Long Fixed Run</span>
            </div>

            <div className="hidden h-1 flex-1 bg-[#5b5d5d] md:block" />

            <div className="w-full border-y-4 border-[#222] bg-[#171b1e] py-3 text-white md:w-auto md:min-w-[220px]">
              <strong className="block text-[10px] uppercase">
                Transmute Flex
              </strong>
              <span className="text-[9px]">Vibration Zone</span>
            </div>

            <div className="hidden h-1 flex-1 bg-[#5b5d5d] md:block" />

            <div className="w-full border-y-4 border-[#222] bg-white/60 py-3 md:w-auto md:min-w-[220px]">
              <strong className="block text-[10px] uppercase">
                Transmute Steel
              </strong>
              <span className="text-[9px]">Main Transfer Route</span>
            </div>

            <div className="hidden h-1 flex-1 bg-[#5b5d5d] md:block" />

            <div className="w-full border-y-4 border-[#222] bg-[#171b1e] py-3 text-white md:w-auto md:min-w-[220px]">
              <strong className="block text-[10px] uppercase">
                Transmute Flex
              </strong>
              <span className="text-[9px]">Movement / Discharge Zone</span>
            </div>

            <div className="hidden h-1 flex-1 bg-[#5b5d5d] md:block" />

            <div className="border border-black/20 bg-white px-4 py-4 text-[9px] font-bold uppercase">
              DISCHARGE
            </div>
          </div>

          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em]">
            One system. Multiple technologies. One standard of reliable flow.
          </p>
        </div>
      </section>

      {/* PERFORMANCE + INDUSTRIES */}
      <section className="bg-white px-5 py-16 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionLabel>ENGINEERED AS A SYSTEM</SectionLabel>

            <h2 className="font-serif text-[34px] uppercase leading-none md:text-[43px]">
              Built to perform
              <br />
              where it matters most.
            </h2>

            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.number} className="border-t border-black/15 pt-4">
                  <div className="font-serif text-[28px] text-[#bd8120]">
                    {value.number}
                  </div>

                  <h3 className="mt-1 text-[10px] font-black uppercase">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-[1.5] text-[#555]">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>ENGINEERED FOR REAL-WORLD CONDITIONS</SectionLabel>

            <h2 className="font-serif text-[31px] uppercase leading-none md:text-[39px]">
              Demanding sectors.
              <br />
              Integrated solutions.
            </h2>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {industries.map((industry) => (
                <a
                  href="/applications"
                  key={industry.title}
                  className="group relative h-[130px] overflow-hidden"
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <span className="absolute bottom-3 left-3 right-3 text-[10px] font-black uppercase leading-tight text-white">
                    {industry.title}
                  </span>
                </a>
              ))}
            </div>

            <a
              href="/applications"
              className="mt-5 inline-flex items-center gap-2 border border-[#bd8120] px-5 py-3 text-[10px] font-bold uppercase text-[#9b6615]"
            >
              Explore All Applications
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* APPROACH + TRUST */}
      <section className="border-t border-black/10 bg-[#f4f0e6] px-5 py-14 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1340px] gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionLabel>THE TRANSMUTE APPROACH</SectionLabel>

            <h2 className="font-serif text-[32px] uppercase leading-none md:text-[41px]">
              From component selection
              <br />
              to system performance.
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
              {[
                ["01", "UNDERSTAND THE APPLICATION", "Evaluate media, pressure, movement and routing conditions."],
                ["02", "ENGINEER THE SOLUTION", "Select the appropriate technology for each section."],
                ["03", "INTEGRATE THE SYSTEM", "Engineer interfaces, connections and transitions."],
                ["04", "SUPPORT LIFECYCLE PERFORMANCE", "Focus on reliability, maintainability and long-term value."],
              ].map(([number, title, text]) => (
                <div key={number}>
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#bd8120] text-[10px] font-bold text-[#a97018]">
                    {number}
                  </div>

                  <h3 className="text-[9px] font-black uppercase leading-tight">
                    {title}
                  </h3>

                  <p className="mt-2 text-[9px] leading-[1.5] text-[#666]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l border-black/10 pl-0 lg:pl-10">
            <SectionLabel>TRUSTED ACROSS DEMANDING INDUSTRIES</SectionLabel>

            <p className="max-w-[450px] text-[11px] leading-[1.5] text-[#555]">
              Supporting organizations operating in mining, dredging,
              infrastructure, energy and industrial sectors.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5 text-[18px] font-black text-[#747474]">
              <span>BHP</span>
              <span>RioTinto</span>
              <span>VALE</span>
              <span>CAT</span>
              <span>TechnipFMC</span>
              <span>in</span>
            </div>

            <div className="mt-8 border-t border-black/10 pt-6">
              <span className="text-[8px] uppercase tracking-[0.25em] text-[#777]">
                A PRODUCT BY
              </span>

              <div className="mt-3 flex gap-8">
                <strong className="text-[13px]">
                  TERRAMET
                  <br />
                  <span className="text-[8px] font-normal">
                    VENTURES LLP
                  </span>
                </strong>

                <strong className="text-[13px]">
                  BLSX
                  <br />
                  <span className="text-[8px] font-normal">LIMITED</span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / FORM */}
      <section
        className="relative overflow-hidden bg-cover bg-center px-5 py-16 text-white md:px-12 lg:px-16"
        style={{ backgroundImage: `url(${IMG}/cta.jpg)` }}
      >
        <div className="absolute inset-0 bg-[#101518]/80" />

        <div className="relative mx-auto grid max-w-[1340px] gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <SectionLabel>ENGINEERED AROUND YOUR APPLICATION</SectionLabel>

            <h2 className="max-w-[650px] font-serif text-[39px] uppercase leading-[0.95] md:text-[53px]">
              Let&apos;s engineer the right transfer solution.
            </h2>

            <p className="mt-5 max-w-[520px] text-[12px] leading-[1.6] text-white/80">
              Whether you are designing a new transfer system, upgrading an
              existing pipeline or addressing a specific wear, movement or
              reliability challenge, our team can help identify the
              appropriate Transmute solution for your application.
            </p>
          </div>

          <div className="bg-[#f6f3ec] p-5 text-[#171d22] md:p-7">
            <div className="mb-5 text-[12px] font-black uppercase">
              Request Application Review
            </div>

            <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                className="h-10 border border-black/15 bg-white px-3 text-[10px] outline-none focus:border-[#bd8120]"
                placeholder="Full Name*"
              />

              <input
                className="h-10 border border-black/15 bg-white px-3 text-[10px] outline-none focus:border-[#bd8120]"
                placeholder="Company*"
              />

              <input
                type="email"
                className="h-10 border border-black/15 bg-white px-3 text-[10px] outline-none focus:border-[#bd8120]"
                placeholder="Email*"
              />

              <input
                className="h-10 border border-black/15 bg-white px-3 text-[10px] outline-none focus:border-[#bd8120]"
                placeholder="Phone*"
              />

              <select className="h-10 border border-black/15 bg-white px-3 text-[10px] outline-none">
                <option>Industry</option>
                <option>Mining</option>
                <option>Dredging</option>
                <option>Petroleum & Process</option>
                <option>Water & Desalination</option>
                <option>Industrial Applications</option>
              </select>

              <input
                className="h-10 border border-black/15 bg-white px-3 text-[10px] outline-none focus:border-[#bd8120]"
                placeholder="Project / Application"
              />

              <input
                className="h-10 border border-black/15 bg-white px-3 text-[10px] outline-none focus:border-[#bd8120]"
                placeholder="Media Being Transported"
              />

              <input
                className="h-10 border border-black/15 bg-white px-3 text-[10px] outline-none focus:border-[#bd8120]"
                placeholder="Pipeline Diameter"
              />

              <input
                className="h-10 border border-black/15 bg-white px-3 text-[10px] outline-none focus:border-[#bd8120]"
                placeholder="Operating Pressure"
              />

              <input
                className="h-10 border border-black/15 bg-white px-3 text-[10px] outline-none focus:border-[#bd8120]"
                placeholder="Project Location"
              />

              <textarea
                rows={4}
                className="border border-black/15 bg-white p-3 text-[10px] outline-none focus:border-[#bd8120] sm:col-span-2"
                placeholder="Tell Us About Your Requirement"
              />

              <label className="flex min-h-[48px] cursor-pointer items-center border border-dashed border-black/20 bg-white px-3 text-[9px] text-[#777] sm:col-span-2">
                Upload Drawing / Specification (Optional)
                <input type="file" className="hidden" />
              </label>

              <button
                type="submit"
                className="inline-flex w-fit items-center gap-3 bg-[#bd8120] px-6 py-3 text-[10px] font-bold uppercase text-white"
              >
                Submit Application
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}