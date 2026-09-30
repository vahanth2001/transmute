import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "STRUCTURAL STRENGTH",
    text: "Designed for fixed transfer systems.",
  },
  {
    title: "RELIABLE PERFORMANCE",
    text: "Engineered for demanding applications.",
  },
  {
    title: "WEAR PROTECTION OPTIONS",
    text: "With ceramic lining for abrasive service.",
  },
  {
    title: "SYSTEM COMPATIBILITY",
    text: "Integrates with Transmute flexible solutions.",
  },
];

const steelCharacteristics = [
  "Structural rigidity",
  "Engineered pressure capability",
  "Long-route suitability",
  "System compatibility with Transmute flexible solutions",
];

const steelApplications = [
  "Long-distance transfer",
  "Mining and slurry transport",
  "Industrial process lines",
  "Fixed pipeline routes",
  "Main transfer lines",
  "High structural-demand applications",
];

const ceramicCharacteristics = [
  "Steel structural strength",
  "Ceramic wear protection",
  "Engineered for abrasive service",
  "Fixed-route performance",
  "Lifecycle-focused design",
];

const ceramicApplications = [
  "High-abrasion slurry transport",
  "Mining applications",
  "High-wear straight sections",
  "Process transfer",
  "Fixed industrial installations",
  "Wear-critical pipeline zones",
];

const industries = [
  {
    title: "MINING",
    image: "/images/steel/mining.jpg",
  },
  {
    title: "INDUSTRIAL PROCESS",
    image: "/images/steel/industrial-process.jpg",
  },
  {
    title: "DREDGING",
    image: "/images/steel/dredging.jpg",
  },
  {
    title: "SLURRY TRANSPORT",
    image: "/images/steel/slurry-transport.jpg",
  },
];

export default function SteelPipelinePage() {
  return (
    <main className="bg-[#f5f1e8] text-[#20252a]">

      {/* HERO */}
      <section className="relative min-h-[520px] overflow-hidden">
        <Image
          src="/images/steel/steel-hero.jpg"
          alt="Transmute steel pipeline"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1e8] via-[#f5f1e8]/95 via-[38%] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1400px] items-center px-6 py-20 lg:px-14">
          <div className="max-w-[620px]">
            <p className="mb-4 text-[15px] font-bold tracking-[2px] text-[#b47a16]">
              STEEL PIPELINE SOLUTIONS
            </p>

            <h1 className="max-w-[600px] text-[48px] font-black uppercase leading-[0.98] tracking-[-1.5px] sm:text-[58px] lg:text-[64px]">
              ENGINEERED STRENGTH
              <br />
              FOR FIXED TRANSFER
              <br />
              SYSTEMS.
            </h1>

            <p className="mt-5 max-w-[560px] text-[17px] leading-[1.45] text-[#30343a]">
              Transmute steel pipeline solutions provide robust, rigid transfer
              options for applications requiring structural stability, fixed
              routing and dependable pipeline performance.
            </p>

            <Link
              href="#steel-pipe"
              className="mt-7 inline-flex items-center gap-3 bg-[#bd841d] px-7 py-4 text-[15px] font-bold text-white transition hover:bg-[#9e6c13]"
            >
              Explore Our Steel Solutions
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="border-y border-[#d8d0c1] bg-[#eee8db]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`px-8 py-7 text-center ${
                index !== features.length - 1
                  ? "border-b border-[#cfc6b7] md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <h3 className="text-[13px] font-black tracking-[1.3px]">
                {feature.title}
              </h3>

              <p className="mt-2 text-[14px] text-[#454545]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STEEL PIPE */}
      <section id="steel-pipe" className="bg-[#f8f5ed]">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
          <div className="relative min-h-[480px]">
            <Image
              src="/images/steel/steel-pipe-main.jpg"
              alt="Transmute steel pipe"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-14 lg:px-14">
            <p className="text-[14px] font-bold tracking-[1.5px] text-[#b47a16]">
              TRANSMUTE STEEL PIPE
            </p>

            <h2 className="mt-3 max-w-[650px] text-[42px] font-black uppercase leading-[1] tracking-[-1px] sm:text-[48px]">
              STRENGTH FOR
              <br />
              CONTINUOUS TRANSFER.
            </h2>

            <p className="mt-5 max-w-[650px] text-[17px] leading-[1.5] text-[#343434]">
              Transmute Steel Pipe is designed for fixed pipeline installations
              where rigidity, structural integrity and stable routing are
              primary requirements.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-[14px] font-bold tracking-[1px] text-[#b47a16]">
                  KEY CHARACTERISTICS
                </h3>

                <ul className="space-y-1.5 text-[15px]">
                  {steelCharacteristics.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>

              <div className="border-l border-[#cfc6b7] pl-7">
                <h3 className="mb-3 text-[14px] font-bold tracking-[1px] text-[#b47a16]">
                  TYPICAL APPLICATIONS
                </h3>

                <ul className="space-y-1.5 text-[15px]">
                  {steelApplications.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/solutions/steel/steel-pipe"
              className="mt-8 inline-flex w-fit items-center gap-3 bg-[#bd841d] px-7 py-4 text-[14px] font-bold text-white hover:bg-[#9e6c13]"
            >
              Explore Steel Pipe
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CERAMIC LINED STEEL */}
      <section className="bg-[#f8f5ed]">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-8 py-14 lg:order-1 lg:px-14">
            <p className="text-[14px] font-bold tracking-[1.5px] text-[#b47a16]">
              TRANSMUTE CERAMIC-LINED STEEL PIPE
            </p>

            <h2 className="mt-3 text-[42px] font-black uppercase leading-[1] tracking-[-1px] sm:text-[48px]">
              RIGID STRENGTH.
              <br />
              ENHANCED WEAR
              <br />
              PROTECTION.
            </h2>

            <p className="mt-5 max-w-[620px] text-[17px] leading-[1.5]">
              Transmute Ceramic-Lined Steel Pipe combines the structural
              advantages of steel with ceramic wear protection for abrasive
              material-transfer applications. It is intended for fixed
              pipeline sections where wear resistance is a critical
              consideration.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-[14px] font-bold tracking-[1px] text-[#b47a16]">
                  KEY CHARACTERISTICS
                </h3>

                <ul className="space-y-1.5 text-[15px]">
                  {ceramicCharacteristics.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>

              <div className="border-l border-[#cfc6b7] pl-7">
                <h3 className="mb-3 text-[14px] font-bold tracking-[1px] text-[#b47a16]">
                  TYPICAL APPLICATIONS
                </h3>

                <ul className="space-y-1.5 text-[15px]">
                  {ceramicApplications.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/solutions/steel/ceramic-lined-steel"
              className="mt-8 inline-flex w-fit items-center gap-3 bg-[#bd841d] px-7 py-4 text-[14px] font-bold text-white hover:bg-[#9e6c13]"
            >
              Explore Ceramic-Lined Steel Pipe
              <span className="text-lg">→</span>
            </Link>
          </div>

          <div className="relative order-1 min-h-[480px] lg:order-2">
            <Image
              src="/images/steel/ceramic-lined-steel.jpg"
              alt="Ceramic lined steel pipe"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#ebe5d8] px-6 py-14 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-[14px] font-bold tracking-[2px] text-[#b47a16]">
                BUILT FOR REAL-WORLD APPLICATIONS
              </p>

              <h2 className="mt-2 text-[40px] font-black uppercase leading-[1] tracking-[-1px] sm:text-[48px]">
                DESIGNED FOR DEMANDING INDUSTRIES.
              </h2>
            </div>

            <p className="max-w-[600px] text-[16px] leading-[1.5]">
              Transmute steel pipeline solutions are used in industries where
              reliable material transfer, structural strength and resistance
              to abrasive conditions are essential for continuous operations.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group relative h-[190px] overflow-hidden border border-[#c8bda9]"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-black/65 px-5 py-4">
                  <p className="text-[14px] font-black tracking-[0.5px] text-white">
                    {industry.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[350px] overflow-hidden bg-[#15191b]">
        <Image
          src="/images/steel/steel-cta.jpg"
          alt="Steel pipeline industrial facility"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#111518] via-[#111518]/90 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[350px] max-w-[1400px] items-center px-8 py-16 lg:px-14">
          <div className="max-w-[620px] text-white">
            <p className="text-[14px] font-bold tracking-[2px] text-[#c28a20]">
              A STRONGER FLOW AHEAD
            </p>

            <h2 className="mt-3 text-[42px] font-black uppercase leading-[1] tracking-[-1px] sm:text-[50px]">
              LET&apos;S ENGINEER
              <br />
              THE RIGHT STEEL
              <br />
              SOLUTION.
            </h2>

            <p className="mt-5 max-w-[580px] text-[16px] leading-[1.5] text-white/90">
              Whether you&apos;re designing a new pipeline, upgrading an
              existing system or addressing a specific wear challenge, our
              team can help you find the right Transmute steel pipeline
              solution for your application.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-3 bg-[#bd841d] px-7 py-4 text-[14px] font-bold text-white transition hover:bg-[#9e6c13]"
            >
              Talk to an Engineer
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}