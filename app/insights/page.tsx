"use client";

import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    image: "/images/insights/mining-pipeline.jpg",
    category: "MINING",
    title: "HIGH-ABRASION SLURRY TRANSFER",
    solution: "Transmute Ceramic-Lined Steel Pipe",
    description:
      "Addressing excessive wear in a long-distance slurry pipeline.",
  },
  {
    image: "/images/insights/dredging.jpg",
    category: "DREDGING",
    title: "FLEXIBLE TRANSFER IN DYNAMIC CONDITIONS",
    solution: "Transmute Rubber Hose",
    description:
      "Reliable transfer solution for a moving dredging system in a marine environment.",
  },
  {
    image: "/images/insights/petroleum.jpg",
    category: "PETROLEUM & PROCESS",
    title: "RELIABLE TRANSFER IN PROCESS APPLICATION",
    solution: "Transmute Steel Pipe",
    description:
      "Robust pipeline solution for a critical process transfer line.",
  },
  {
    image: "/images/insights/water.jpg",
    category: "WATER & DESALINATION",
    title: "INTAKE AND DISCHARGE TRANSFER SYSTEM",
    solution: "Transmute Steel Pipe and Flexible Hose",
    description:
      "Engineered solution for a high-capacity seawater transfer system.",
  },
  {
    image: "/images/insights/wastewater.jpg",
    category: "SANITATION & WASTEWATER",
    title: "RELIABLE TRANSFER FOR WASTEWATER SYSTEM",
    solution: "Transmute Rubber Hose",
    description:
      "Flexible hose solution for a municipal wastewater transfer application.",
  },
  {
    image: "/images/insights/industrial.jpg",
    category: "INDUSTRIAL APPLICATIONS",
    title: "MATERIAL TRANSFER IN INDUSTRIAL OPERATION",
    solution: "Transmute Ceramic-Lined Rubber Hose",
    description:
      "Enhanced wear protection in a high-wear industrial transfer section.",
  },
];

const engineeringInsights = [
  {
    image: "/images/insights/abrasive-wear.jpg",
    title: "UNDERSTANDING ABRASIVE WEAR IN SLURRY SYSTEMS",
  },
  {
    image: "/images/insights/flexible-hose.jpg",
    title: "WHEN FLEXIBLE HOSE IS THE RIGHT CHOICE",
  },
  {
    image: "/images/insights/ceramic-lining.jpg",
    title: "THE ROLE OF CERAMIC LINING IN HIGH-WEAR APPLICATIONS",
  },
  {
    image: "/images/insights/vibration.jpg",
    title: "MANAGING VIBRATION AT PUMP CONNECTIONS",
  },
  {
    image: "/images/insights/transition.jpg",
    title: "DESIGNING TRANSITION ZONES BETWEEN STEEL AND FLEXIBLE SECTIONS",
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b2024]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[470px] overflow-hidden bg-[#eee8da]">
        <div className="absolute inset-0">
          <Image
            src="/images/insights/insights-hero.jpg"
            alt="Transmute transfer system"
            fill
            priority
            className="object-cover object-right"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1e8] via-[#f5f1e8]/95 via-[42%] to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[470px] max-w-[1440px] items-center px-6 md:px-10 lg:px-[60px]">
          <div className="max-w-[570px] pb-10 pt-12">
            <p className="mb-3 text-[14px] font-bold tracking-[2px] text-[#b47c16]">
              INSIGHTS
            </p>

            <h1 className="font-condensed text-[43px] font-black uppercase leading-[0.98] tracking-[-1.5px] md:text-[52px] lg:text-[58px]">
              PROVEN IN THE FIELD.
              <br />
              BUILT ON REAL OPERATING
              <br />
              CHALLENGES.
            </h1>

            <p className="mt-5 max-w-[530px] text-[16px] leading-[1.45]">
              Transmute Insights brings together real-world applications, case
              studies and engineering learnings from demanding
              material-transfer environments.
            </p>

            <p className="mt-3 max-w-[530px] text-[16px] leading-[1.45]">
              From wear-critical sections and movement zones to long-distance
              steel transfer systems, each case study demonstrates how the
              right Transmute solution is selected around actual operating
              conditions.
            </p>

            <Link
              href="#case-studies"
              className="mt-7 inline-flex bg-[#bd8622] px-7 py-4 text-[14px] font-semibold text-white transition hover:bg-[#9e6e18]"
            >
              Explore Case Studies
              <span className="ml-3">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURED CASE STUDY ================= */}
      <section className="bg-[#15191b] text-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1fr_300px]">
          
          <div className="relative min-h-[390px] overflow-hidden">
            <Image
              src="/images/insights/featured-case.jpg"
              alt="Featured Transmute case study"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

            <div className="relative z-10 flex min-h-[390px] max-w-[720px] flex-col justify-center px-6 py-12 md:px-10 lg:px-[60px]">
              <p className="text-[13px] font-bold tracking-[2px] text-[#d49a2c]">
                FEATURED CASE STUDY
              </p>

              <p className="mt-3 text-[12px] font-semibold tracking-[1px]">
                MINING <span className="mx-2 text-[#c38b26]">|</span>{" "}
                ABRASIVE SLURRY TRANSFER
              </p>

              <h2 className="mt-2 font-condensed text-[36px] font-black uppercase leading-[1] md:text-[44px]">
                REDUCING WEAR EXPOSURE
                <br />
                IN A CRITICAL TRANSFER SECTION.
              </h2>

              <p className="mt-5 max-w-[650px] text-[15px] leading-[1.5] text-white/90">
                A leading mining operation faced frequent wear and maintenance
                disruption in a high-abrasion transfer section. Transmute
                Ceramic-Lined Rubber Hose was integrated into the critical
                movement zone to enhance wear resistance and operational
                reliability.
              </p>

              <Link
                href="#case-studies"
                className="mt-6 w-fit bg-[#bf8928] px-7 py-3 text-[14px] font-semibold text-white"
              >
                Read Case Study
                <span className="ml-3">→</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center px-7 py-10 md:px-10">
            {[
              [
                "THE CHALLENGE",
                "Frequent wear and maintenance disruption in a high-abrasion zone.",
              ],
              [
                "THE SOLUTION",
                "Transmute Ceramic-Lined Rubber Hose.",
              ],
              [
                "OPERATING CONDITIONS",
                "Abrasive slurry, continuous operation, movement zone.",
              ],
              [
                "THE OUTCOME",
                "Improved wear performance and reduced maintenance downtime.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-white/30 py-5 first:pt-0"
              >
                <p className="text-[12px] font-bold tracking-[1px] text-[#d19a2d]">
                  {title}
                </p>
                <p className="mt-2 text-[13px] leading-[1.45] text-white/90">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section id="case-studies" className="bg-[#f5f1e8] py-14">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[60px]">
          
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[13px] font-bold tracking-[2px] text-[#b47c16]">
                CASE STUDY LIBRARY
              </p>

              <h2 className="font-condensed mt-2 text-[35px] font-black uppercase leading-none md:text-[44px]">
                REAL APPLICATIONS. REAL RESULTS.
              </h2>
            </div>

            <div className="flex max-w-[600px] flex-wrap gap-2">
              {[
                "All",
                "Flexible Hose",
                "Ceramic-Lined Hose",
                "Steel Pipe",
                "Ceramic-Lined Steel Pipe",
              ].map((item, index) => (
                <button
                  key={item}
                  className={`border px-4 py-2 text-[12px] ${
                    index === 0
                      ? "border-[#bd8622] bg-[#bd8622] text-white"
                      : "border-[#d2ccbf] bg-[#faf8f2] text-[#272b2e]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {[
              "All",
              "Mining",
              "Dredging",
              "Process",
              "Water",
              "Industrial",
            ].map((item, index) => (
              <button
                key={item}
                className={`border px-5 py-2 text-[12px] ${
                  index === 0
                    ? "border-[#bd8622] bg-[#bd8622] text-white"
                    : "border-[#d2ccbf] bg-[#faf8f2]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden border border-[#ded8cc] bg-[#faf8f2]"
              >
                <div className="relative h-[190px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-black/75 px-4 py-3">
                    <span className="text-[13px] font-bold text-white">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-condensed text-[21px] font-black uppercase leading-[1.05]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] font-medium text-[#655f56]">
                    {item.solution}
                  </p>

                  <p className="mt-2 text-[14px] leading-[1.45] text-[#373737]">
                    {item.description}
                  </p>

                  <Link
                    href="#"
                    className="mt-4 inline-flex text-[13px] font-bold text-[#b47c16]"
                  >
                    Read Case Study
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING INSIGHTS ================= */}
      <section className="bg-[#ebe5d8] py-14">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[60px]">
          
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-[13px] font-bold tracking-[2px] text-[#b47c16]">
                ENGINEERING INSIGHTS
              </p>

              <h2 className="font-condensed mt-2 text-[35px] font-black uppercase leading-none md:text-[44px]">
                PRACTICAL KNOWLEDGE FROM THE FIELD.
              </h2>
            </div>

            <Link
              href="#"
              className="hidden text-[13px] font-bold text-[#ad7516] md:block"
            >
              View All Insights →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {engineeringInsights.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden border border-[#d8d1c3] bg-[#f8f5ee]"
              >
                <div className="relative h-[155px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-condensed text-[17px] font-black uppercase leading-[1.05]">
                    {item.title}
                  </h3>

                  <Link
                    href="#"
                    className="mt-4 inline-flex text-[12px] font-bold text-[#b47c16]"
                  >
                    Read Article
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#161a1c] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/insights/insights-cta.jpg"
            alt=""
            fill
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121618] via-[#121618]/90 to-[#121618]/50" />
        </div>

        <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-6 py-14 md:px-10 lg:flex-row lg:items-center lg:px-[60px]">
          <div>
            <p className="text-[13px] font-bold tracking-[2px] text-[#d09a2c]">
              LET&apos;S SOLVE YOUR NEXT CHALLENGE
            </p>

            <h2 className="font-condensed mt-2 text-[38px] font-black uppercase leading-none md:text-[48px]">
              HAVE A SIMILAR OPERATING CHALLENGE?
            </h2>

            <p className="mt-4 max-w-[720px] text-[15px] text-white/85">
              Our team can review your application and help identify the most
              suitable Transmute solution.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 bg-[#bf8928] px-9 py-4 text-[14px] font-bold text-white transition hover:bg-[#a8731c]"
          >
            Talk to an Engineer
            <span className="ml-3">→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}