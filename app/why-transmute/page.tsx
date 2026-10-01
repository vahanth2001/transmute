import Image from "next/image";
import Link from "next/link";

const operatingConditions = [
  {
    title: "PUMP CONNECTIONS",
    image: "/images/why-us/pump-connections.jpg",
  },
  {
    title: "ROUTE TRANSITIONS",
    image: "/images/why-us/route-transitions.jpg",
  },
  {
    title: "LONG FIXED RUNS",
    image: "/images/why-us/long-fixed-runs.jpg",
  },
  {
    title: "MOVEMENT ZONES",
    image: "/images/why-us/movement-zones.jpg",
  },
  {
    title: "DISCHARGE POINTS",
    image: "/images/why-us/discharge-points.jpg",
  },
];

const differences = [
  {
    title: "APPLICATION-\nFIRST THINKING",
    text: "We begin by understanding the material, environment and operating conditions before recommending a solution.",
    image: "/images/why-us/application-first.jpg",
  },
  {
    title: "MULTIPLE TECHNOLOGIES.\nONE SYSTEM.",
    text: "Transmute brings together flexible hose and steel pipeline solutions within one engineered platform.",
    image: "/images/why-us/multiple-technologies.jpg",
  },
  {
    title: "INTEGRATED SYSTEM\nTHINKING",
    text: "A transfer system is more than individual pipe sections. We consider how each section works together as one complete system.",
    image: "/images/why-us/integrated-system.jpg",
  },
  {
    title: "FOCUS ON OPERATIONAL\nVALUE",
    text: "Our solutions are designed for reliability, maintainability and long-term performance.",
    image: "/images/why-us/operational-value.jpg",
  },
];

const values = [
  {
    title: "RELIABILITY",
    text: "Solutions are engineered around actual operating conditions to support dependable performance where it matters most.",
    image: "/images/why-us/reliability.jpg",
  },
  {
    title: "CONTINUITY",
    text: "Appropriate technology selection can help reduce unnecessary operational disruption and support smoother material transfer.",
    image: "/images/why-us/continuity.jpg",
  },
  {
    title: "MAINTAINABILITY",
    text: "A system designed with its critical sections in mind can make inspection, maintenance and replacement more manageable.",
    image: "/images/why-us/maintainability.jpg",
  },
  {
    title: "LIFECYCLE VALUE",
    text: "Performance should be evaluated over time. We consider service life, operational demands, maintenance requirements and long-term value.",
    image: "/images/why-us/lifecycle-value.jpg",
  },
];

export default function WhyUsPage() {
  return (
    <main className="bg-[#f5f2ea] text-[#20252a]">
      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#151a1d]">
        <Image
          src="/images/why-us/why-us-hero.jpg"
          alt="Transmute transfer system"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#111619] via-[#111619]/85 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1400px] items-center px-6 py-20 lg:px-12">
          <div className="max-w-[590px] text-white">
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[3px] text-[#c18b24]">
              Why Transmute
            </p>

            <h1 className="max-w-[560px] text-[48px] font-black uppercase leading-[0.96] tracking-[-1.5px] sm:text-[60px] lg:text-[66px]">
              The Right Solution
              <br />
              For Every Critical Section.
            </h1>

            <p className="mt-6 max-w-[540px] text-[16px] leading-[1.55] text-white/90">
              Transmute is built around a simple principle: material-transfer
              systems do not operate under one uniform condition. We bring
              together flexible hose and steel pipeline technologies to meet
              those different demands with a more integrated engineering
              approach.
            </p>

            <p className="mt-5 text-[15px] font-bold uppercase tracking-[1px]">
              Engineered for smoother, more reliable flow.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center bg-[#c08a24] px-7 py-3.5 text-[13px] font-bold text-white transition hover:bg-[#a87518]"
              >
                Explore Our Solutions
                <span className="ml-3 text-lg">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/80 px-7 py-3.5 text-[13px] font-bold text-white transition hover:bg-white hover:text-[#20252a]"
              >
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REAL CHALLENGE */}
      <section className="bg-[#f7f5ef] px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:items-center">
          <div>
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[3px] text-[#a9781b]">
              The Real Challenge
            </p>

            <h2 className="text-[38px] font-black uppercase leading-[0.98] tracking-[-1px] sm:text-[48px]">
              One Pipeline.
              <br />
              Many Operating Conditions.
            </h2>

            <p className="mt-6 max-w-[570px] text-[15px] leading-[1.65] text-[#42474a]">
              A transfer system may include long fixed runs, high-wear zones,
              pump connections, bends, vibration points, discharge sections and
              areas exposed to movement. Trying to treat all of these
              conditions in the same way can limit performance and increase
              maintenance complexity.
            </p>

            <p className="mt-4 max-w-[570px] text-[15px] leading-[1.65] text-[#42474a]">
              Transmute approaches the system differently. We start with the
              operating requirement, not a product, to ensure each section is
              engineered for what it actually needs to do.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {operatingConditions.map((item) => (
              <div
                key={item.title}
                className="relative h-[270px] overflow-hidden bg-black"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-[11px] font-black uppercase leading-tight text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[3px] text-[#a9781b]">
            The Transmute Difference
          </p>

          <h2 className="text-[38px] font-black uppercase leading-none tracking-[-1px] sm:text-[48px]">
            Engineered Around The Application.
          </h2>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differences.map((item) => (
              <article
                key={item.title}
                className="relative min-h-[330px] overflow-hidden bg-[#171b1e]"
              >
                <Image
                  src={item.image}
                  alt={item.title.replace("\n", " ")}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

                <div className="relative z-10 flex min-h-[330px] flex-col justify-end p-6 text-white">
                  <h3 className="whitespace-pre-line text-[24px] font-black uppercase leading-[0.98]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.5] text-white/90">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING PHILOSOPHY */}
      <section className="relative overflow-hidden bg-[#151a1d] px-6 py-20 text-white lg:px-12">
        <Image
          src="/images/why-us/engineering-philosophy.jpg"
          alt="Transmute engineered transfer system"
          fill
          className="object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-[#101416]/65" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[3px] text-[#d19a2c]">
                Our Engineering Philosophy
              </p>

              <h2 className="text-[42px] font-black uppercase leading-[0.98] tracking-[-1px] sm:text-[52px]">
                Engineer The System —
                <br />
                Not Just The Pipe.
              </h2>

              <p className="mt-6 max-w-[620px] text-[15px] leading-[1.65] text-white/85">
                Different sections of a material-transfer system can experience
                completely different demands. Transmute brings these
                requirements together within one engineering approach.
              </p>
            </div>

            <div className="flex items-end">
              <p className="max-w-[600px] text-[15px] leading-[1.65] text-white/80">
                A fixed route may require the structural strength of steel. A
                vibration or movement zone may need greater flexibility. A
                high-wear section may require additional protection. A
                discharge point may demand easier maintenance and replacement.
              </p>
            </div>
          </div>

          {/* SYSTEM */}
          <div className="mt-12">
            <div className="relative h-[180px] overflow-hidden">
              <Image
                src="/images/why-us/system-pipeline.jpg"
                alt="Transmute system"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-6 border-t border-white/20 pt-5">
              {[
                "PROCESS / PUMP",
                "TRANSMUTE STEEL",
                "TRANSMUTE FLEXIBLE",
                "TRANSMUTE STEEL",
                "TRANSMUTE FLEXIBLE",
                "DISCHARGE",
              ].map((item) => (
                <div
                  key={item}
                  className="border-r border-white/20 px-3 text-center last:border-r-0"
                >
                  <p className="text-[10px] font-bold tracking-[1px] text-white/90 sm:text-[12px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-center text-[14px] font-bold uppercase tracking-[4px] text-[#d19a2c]">
              One System. Multiple Technologies. One Standard of Reliable Flow.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="bg-[#f5f2ea] px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[3px] text-[#a9781b]">
            Value Beyond The Pipe
          </p>

          <h2 className="text-[38px] font-black uppercase leading-none tracking-[-1px] sm:text-[48px]">
            Designed To Support Better Operations.
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden border border-[#ded8cb] bg-[#faf9f5]"
              >
                <div className="relative h-[190px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-[22px] font-black uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.55] text-[#4a4d4e]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-white px-6 pb-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[3px] text-[#a9781b]">
            One Brand. Two Core Technologies.
          </p>

          <h2 className="text-[38px] font-black uppercase leading-none tracking-[-1px] sm:text-[48px]">
            Flexibility And Strength — Working Together.
          </h2>

          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {/* FLEX */}
            <div className="grid overflow-hidden border border-[#ded8cb] bg-[#f5f2ea] md:grid-cols-2">
              <div className="relative min-h-[300px]">
                <Image
                  src="/images/why-us/flexible-hose.jpg"
                  alt="Transmute flexible hose"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#b17c1c]">
                  Transmute
                </p>

                <h3 className="mt-2 text-[27px] font-black uppercase leading-none">
                  Flexible Hose Solutions
                </h3>

                <p className="mt-5 text-[14px] leading-[1.55] text-[#44484a]">
                  For sections where movement, vibration, bending, dynamic
                  routing and wear are important considerations.
                </p>

                <ul className="mt-5 space-y-1 text-[13px] text-[#44484a]">
                  <li>• Pump connections</li>
                  <li>• High-movement zones</li>
                  <li>• Bends and transitions</li>
                  <li>• Dredging</li>
                  <li>• Vibration-prone sections</li>
                  <li>• Critical wear areas</li>
                </ul>

                <Link
                  href="/solutions/flexible"
                  className="mt-6 inline-flex bg-[#c08a24] px-5 py-3 text-[12px] font-bold text-white"
                >
                  Explore Flexible Hose Solutions →
                </Link>
              </div>
            </div>

            {/* STEEL */}
            <div className="grid overflow-hidden border border-[#ded8cb] bg-[#f5f2ea] md:grid-cols-2">
              <div className="relative min-h-[300px]">
                <Image
                  src="/images/why-us/steel-pipeline.jpg"
                  alt="Transmute steel pipeline"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#b17c1c]">
                  Transmute
                </p>

                <h3 className="mt-2 text-[27px] font-black uppercase leading-none">
                  Steel Pipeline Solutions
                </h3>

                <p className="mt-5 text-[14px] leading-[1.55] text-[#44484a]">
                  For fixed transfer sections where structural strength,
                  long-distance performance and rigidity are required.
                </p>

                <ul className="mt-5 space-y-1 text-[13px] text-[#44484a]">
                  <li>• Main pipeline runs</li>
                  <li>• Long fixed routes</li>
                  <li>• Stationary transfer</li>
                  <li>• Industrial process lines</li>
                  <li>• Mining and slurry transport</li>
                  <li>• Wear-protected steel sections</li>
                </ul>

                <Link
                  href="/solutions/steel"
                  className="mt-6 inline-flex bg-[#c08a24] px-5 py-3 text-[12px] font-bold text-white"
                >
                  Explore Steel Pipeline Solutions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#151a1d] px-6 py-16 text-white lg:px-12">
        <Image
          src="/images/why-us/why-us-cta.jpg"
          alt="Transmute pipeline"
          fill
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#101416] via-[#101416]/80 to-transparent" />

        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#d19a2c]">
              Engineered For The Real World
            </p>

            <h2 className="mt-3 text-[38px] font-black uppercase leading-none sm:text-[52px]">
              Let&apos;s Engineer
              <br />
              The Right Solution.
            </h2>

            <p className="mt-5 max-w-[650px] text-[15px] text-white/80">
              Whether you are designing a new transfer system or addressing a
              specific operating challenge, Transmute brings together the
              right technology for the right section.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center bg-[#c08a24] px-8 py-4 text-[13px] font-bold text-white"
          >
            Talk to an Engineer
            <span className="ml-3 text-lg">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}