import React from "react";

const aboutImages = {
  hero: "/images/about-hero.jpg",
  approach: "/images/about-approach.jpg",
  philosophy: "/images/about-philosophy.jpg",
  philosophypipe: "/images/philosophy-pipe.jpg",
  hose: "/images/5.jpg",
  steel: "/images/6.jpg",
  collaboration: "/images/15.jpg",
  cta: "/images/16.jpg",
};

const approachItems = [
  {
    title: "MEDIA",
    text: "We assess the material properties, temperature and chemical compatibility.",
  },
  {
    title: "WEAR",
    text: "We account for abrasive, corrosive and real operating conditions.",
  },
  {
    title: "PRESSURE",
    text: "We design for the right pressure ratings, safety factors and surge conditions.",
  },
  {
    title: "MOVEMENT",
    text: "We plan for flexing, expansion, vibration and dynamic movement.",
  },
  {
    title: "DISTANCE & ROUTING",
    text: "We consider the full system route, elevation changes and installation environment.",
  },
];

const performanceItems = [
  {
    title: "Application First",
    text: "We start with the application, because real solutions solve real operating conditions.",
  },
  {
    title: "Engineering with Purpose",
    text: "We engineer with a clear purpose — reliable, practical and fit for the real world.",
  },
  {
    title: "Reliability in Operation",
    text: "We focus on solutions that perform where it matters — in the field, not just on paper.",
  },
  {
    title: "Lifecycle Thinking",
    text: "We consider the bigger picture, from installation to long-term operation and value.",
  },
];

const systemSections = [
  {
    title: "PROCESS / PUMP",
    text: "Connects to a wide range of pumps and process equipment.",
  },
  {
    title: "FLEXIBLE HOSE SECTION",
    text: "Absorbs movement, relieves stress and manages vibration.",
  },
  {
    title: "STEEL PIPELINE",
    text: "Provides strength for longer runs and static sections.",
  },
  {
    title: "FLEXIBLE HOSE SECTION",
    text: "Accommodates expansion and dynamic movement.",
  },
  {
    title: "STEEL PIPELINE",
    text: "Maintains flow and discharge with maximum reliability.",
  },
  {
    title: "DISCHARGE",
    text: "Completes the system.",
  },
];

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#182027]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[570px] overflow-hidden border-b border-[#e5ded1]">
        <img
          src={aboutImages.hero}
          alt="Transmute engineered transfer system"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ea] via-[#f7f3eaeF] via-[42%] to-transparent" />

        <div className="relative mx-auto flex min-h-[570px] max-w-[1450px] items-center px-6 py-20 lg:px-10">
          <div className="max-w-[720px]">

            <p className="mb-4 text-[12px] font-bold uppercase tracking-[5px] text-[#a8751c]">
              About Transmute
            </p>

            <h1 className="font-condensed text-[48px] font-black uppercase leading-[0.92] tracking-[-1.5px] sm:text-[62px] lg:text-[74px]">
              Engineered for smoother,
              <span className="block text-[#a8751c]">
                more reliable flow.
              </span>
            </h1>

            <p className="mt-6 max-w-[680px] text-[15px] leading-[1.55] text-[#2c3236]">
              TRANSMUTE is an engineered transfer-solutions brand created to
              address one fundamental reality: every part of a material-transfer
              system operates under different conditions. From fresh water to
              aggressive chemical slurry, from remote sites to urban industrial
              environments, we help industries move critical materials more
              safely, efficiently, and reliably through application-driven
              engineering and a smarter, more integrated approach.
            </p>

            <a
              href="/solutions"
              className="mt-7 inline-flex items-center gap-3 bg-[#b27b20] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#946418]"
            >
              Explore Our Solutions
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section className="bg-[#f7f3ea] px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1450px] gap-12 lg:grid-cols-[0.95fr_1.35fr]">

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[5px] text-[#aa761b]">
              Who We Are
            </p>

            <h2 className="mt-3 font-condensed text-[38px] font-black uppercase leading-[0.95] sm:text-[48px]">
              More than a product.
              <span className="block text-[#a8751c]">
                A transfer-solutions platform.
              </span>
            </h2>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.55] text-[#30363a]">
              TRANSMUTE brings together engineered flexible hose and steel
              pipeline solutions as a complete transfer system. We combine deep
              application expertise, high-quality manufacturing, and real-world
              experience to help customers solve complex flow challenges —
              from media handling to pressure balance, routing, and movement —
              across the full lifecycle.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-[#ded8cc] bg-white/50 p-7">
              <h3 className="text-[24px] font-black leading-tight">
                Terramate
                <br />
                Ventures LLP
              </h3>

              <p className="mt-6 text-[14px] leading-[1.5] text-[#3c4246]">
                Backed by deep industry experience and a long-term commitment
                to building industrial solutions.
              </p>
            </div>

            <div className="border border-[#ded8cc] bg-white/50 p-7">
              <h3 className="text-[24px] font-black leading-tight">
                BLSX
                <br />
                LIMITED
              </h3>

              <p className="mt-6 text-[14px] leading-[1.5] text-[#3c4246]">
                A global partner with engineering expertise and operational
                reach.
              </p>
            </div>

            <div className="border border-[#ded8cc] bg-white/50 p-7">
              <h3 className="text-[24px] font-black leading-tight">
                TRANSMUTE
              </h3>

              <p className="mt-6 text-[14px] leading-[1.5] text-[#3c4246]">
                The integrated transfer-solutions platform delivering flexible
                hose and steel pipeline technologies for a wide range of
                industries.
              </p>
            </div>

            <div className="sm:col-span-3 text-center">
              <p className="text-sm font-bold text-[#a8751c]">
                Stronger together. A more complete solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-[#ded8cc] bg-[#f7f3ea]">
        <div className="absolute right-0 top-0 h-full w-[55%]">
          <img
            src={aboutImages.approach}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ea] via-[#f7f3eacc] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1450px] px-6 py-14 lg:px-10">

          <p className="text-[11px] font-bold uppercase tracking-[5px] text-[#a8751c]">
            Our Approach
          </p>

          <h2 className="mt-3 max-w-[850px] font-condensed text-[40px] font-black uppercase leading-[0.95] sm:text-[52px]">
            Engineering begins with the application.
          </h2>

          <p className="mt-5 max-w-[930px] text-[15px] leading-[1.55]">
            We take the time to understand the operating conditions, constraints
            and objectives before defining the right solution. Every application
            is different, and the right answer comes from a clear understanding
            of the full transfer environment — the media, route, pressure,
            movement, routing and the bigger picture of operational performance.
          </p>

          <div className="relative mt-10 grid max-w-[950px] grid-cols-2 gap-y-8 md:grid-cols-5 md:gap-0">
            {approachItems.map((item) => (
              <div
                key={item.title}
                className="border-r border-[#d7d0c3] px-5 first:pl-0 last:border-0"
              >
                <h3 className="text-center text-[14px] font-black tracking-wide">
                  {item.title}
                </h3>

                <p className="mt-3 text-center text-[13px] leading-[1.45] text-[#454b4e]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="relative mt-7 text-sm font-bold text-[#a8751c]">
            The right technology. In the right place. Working as one system.
          </p>
        </div>
      </section>

      {/* =========================================================
          ENGINEER THE SYSTEM
      ========================================================= */}
      {/* THE TRANSMUTE PHILOSOPHY */}
<section
  className="relative overflow-hidden bg-[#151b1f] text-white"
  style={{
    backgroundImage: `url("${aboutImages.philosophy}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-[#101519]/75" />

  <div className="relative mx-auto max-w-[1340px] px-5 py-14 md:px-10 lg:px-12">

    {/* HEADER */}
    <div className="max-w-[900px]">
      <p className="text-[10px] font-bold uppercase tracking-[5px] text-[#c28a29]">
  THE TRANSMUTE PHILOSOPHY
</p>

      <h2 className="mt-3 font-serif text-[36px] font-black uppercase leading-[0.95] tracking-tight md:text-[52px]">
        Engineer the system — not just the pipe.
      </h2>

      <p className="mt-6 max-w-[900px] text-[11px] leading-[1.65] text-white/85 md:text-[13px]">
        Different sections of a material transfer system operate under
        different conditions. Some require the flexibility of hose, others
        the strength of steel. TRANSMUTE engineers the complete system,
        matching each technology to the right role for a safer, more
        reliable and longer-lasting flow solution.
      </p>
    </div>

    {/* PIPE SYSTEM */}
    <div className="relative mt-10 w-full overflow-hidden">
      <img
        src={aboutImages.philosophypipe}
        alt="Transmute engineered transfer system"
        className="block h-auto w-full object-cover"
      />
    </div>

    {/* SYSTEM SECTIONS */}
    <div className="mt-6 grid grid-cols-2 gap-y-8 md:grid-cols-6 md:gap-x-5 md:gap-y-0">

      {/* 01 */}
      <div className="border-l border-white/20 pl-4">
        <h3 className="text-[10px] font-black uppercase tracking-wide text-[#c28a29] md:text-[11px]">
          PROCESS / PUMP
        </h3>

        <p className="mt-2 text-[9px] leading-[1.5] text-white/70 md:text-[10px]">
          Connects to a wide range of pumps and process equipment.
        </p>
      </div>

      {/* 02 */}
      <div className="border-l border-white/20 pl-4">
        <h3 className="text-[10px] font-black uppercase tracking-wide text-[#c28a29] md:text-[11px]">
          FLEXIBLE HOSE SECTION
        </h3>

        <p className="mt-2 text-[9px] leading-[1.5] text-white/70 md:text-[10px]">
          Absorbs movement, relieves stress and manages vibration.
        </p>
      </div>

      {/* 03 */}
      <div className="border-l border-white/20 pl-4">
        <h3 className="text-[10px] font-black uppercase tracking-wide text-[#c28a29] md:text-[11px]">
          STEEL PIPELINE
        </h3>

        <p className="mt-2 text-[9px] leading-[1.5] text-white/70 md:text-[10px]">
          Provides strength for longer runs and static sections.
        </p>
      </div>

      {/* 04 */}
      <div className="border-l border-white/20 pl-4">
        <h3 className="text-[10px] font-black uppercase tracking-wide text-[#c28a29] md:text-[11px]">
          FLEXIBLE HOSE SECTION
        </h3>

        <p className="mt-2 text-[9px] leading-[1.5] text-white/70 md:text-[10px]">
          Accommodates expansion and dynamic movement.
        </p>
      </div>

      {/* 05 */}
      <div className="border-l border-white/20 pl-4">
        <h3 className="text-[10px] font-black uppercase tracking-wide text-[#c28a29] md:text-[11px]">
          STEEL PIPELINE
        </h3>

        <p className="mt-2 text-[9px] leading-[1.5] text-white/70 md:text-[10px]">
          Maintains flow and discharge with maximum reliability.
        </p>
      </div>

      {/* 06 */}
      <div className="border-l border-white/20 pl-4">
        <h3 className="text-[10px] font-black uppercase tracking-wide text-[#c28a29] md:text-[11px]">
          DISCHARGE
        </h3>

        <p className="mt-2 text-[9px] leading-[1.5] text-white/70 md:text-[10px]">
          Completes the system.
        </p>
      </div>

    </div>

    {/* BOTTOM STATEMENT */}
    <div className="mt-9 text-center">
      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#c28a29] md:text-[11px]">
        One system. Multiple technologies. One standard of reliable flow.
      </p>
    </div>

  </div>
</section>

      {/* =========================================================
          OUR SOLUTIONS
      ========================================================= */}
      <section className="bg-[#f7f3ea] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-[1450px]">

          <p className="text-[11px] font-bold uppercase tracking-[5px] text-[#a8751c]">
            Our Solutions
          </p>

          <h2 className="mt-3 font-condensed text-[40px] font-black uppercase leading-[0.95] sm:text-[52px]">
            Integrated technologies.
            <span className="text-[#a8751c]"> One Transmute standard.</span>
          </h2>

          <p className="mt-4 max-w-[900px] text-[15px] leading-[1.5]">
            TRANSMUTE brings together flexible and steel pipeline technologies
            within one solutions platform, providing a more complete,
            more effective approach to material transfer across a wide range
            of operating conditions.
          </p>

          <div className="mt-9 grid gap-6 lg:grid-cols-2">

            {/* FLEXIBLE */}
            <div className="grid overflow-hidden border border-[#ded8cc] bg-white sm:grid-cols-[42%_58%]">
              <div className="min-h-[290px]">
                <img
                  src={aboutImages.hose}
                  alt="Transmute flexible hose"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-7">
                <p className="text-[13px] font-bold uppercase text-[#a8751c]">
                  Transmute
                </p>

                <h3 className="mt-1 text-[25px] font-black uppercase leading-[1]">
                  Flexible Hose Solutions
                </h3>

                <p className="mt-4 text-[14px] leading-[1.5]">
                  Engineered for movement, vibration and variable conditions.
                  Our flexible hose solutions are designed for demanding
                  applications including dredging, mining, chemical transfer
                  and industrial processes.
                </p>

                <a
                  href="/solutions/flexible-hose"
                  className="mt-6 inline-flex bg-[#b27b20] px-5 py-3 text-xs font-bold text-white"
                >
                  Explore Flexible Hose Solutions →
                </a>
              </div>
            </div>

            {/* STEEL */}
            <div className="grid overflow-hidden border border-[#ded8cc] bg-white sm:grid-cols-[42%_58%]">
              <div className="min-h-[290px]">
                <img
                  src={aboutImages.steel}
                  alt="Transmute steel pipeline"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-7">
                <p className="text-[13px] font-bold uppercase text-[#a8751c]">
                  Transmute
                </p>

                <h3 className="mt-1 text-[25px] font-black uppercase leading-[1]">
                  Steel Pipeline Solutions
                </h3>

                <p className="mt-4 text-[14px] leading-[1.5]">
                  Engineered for strength, long-distance flow and harsh
                  environments. Our steel pipeline solutions deliver reliable
                  performance for high-pressure, high-volume and stationary
                  transfer systems.
                </p>

                <a
                  href="/solutions/steel-pipeline"
                  className="mt-6 inline-flex bg-[#b27b20] px-5 py-3 text-xs font-bold text-white"
                >
                  Explore Steel Pipeline Solutions →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE STAND FOR
      ========================================================= */}
      <section className="bg-[#f7f3ea] px-6 pb-16 lg:px-10">
        <div className="mx-auto max-w-[1450px]">

          <p className="text-[11px] font-bold uppercase tracking-[5px] text-[#a8751c]">
            What We Stand For
          </p>

          <h2 className="mt-3 font-condensed text-[40px] font-black uppercase leading-[0.95] sm:text-[50px]">
            Performance that keeps operations moving.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {performanceItems.map((item) => (
              <div
                key={item.title}
                className="border border-[#ded8cc] bg-white/60 px-6 py-8 text-center"
              >
                <h3 className="text-[19px] font-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.5] text-[#41474b]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COLLABORATION
      ========================================================= */}
      <section className="relative overflow-hidden">
        <img
          src={aboutImages.collaboration}
          alt="Transmute industrial collaboration"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ea] via-[#f7f3eaF2] to-transparent" />

        <div className="relative mx-auto min-h-[350px] max-w-[1450px] px-6 py-16 lg:px-10">
          <div className="max-w-[680px]">

            <p className="text-[11px] font-bold uppercase tracking-[5px] text-[#a8751c]">
              Built Through Collaboration
            </p>

            <h2 className="mt-3 font-condensed text-[38px] font-black uppercase leading-[0.95] sm:text-[48px]">
              Combining market understanding
              <span className="block">
                with industrial capability.
              </span>
            </h2>

            <p className="mt-5 text-[14px] leading-[1.55]">
              TRANSMUTE is a product of the collaboration between Terramate
              Ventures LLP and BLSX Limited, bringing together market insight,
              engineering knowledge and industrial capability to create a
              stronger, more complete transfer-solutions platform.
            </p>

            <p className="mt-4 text-sm font-bold text-[#a8751c]">
              One collaboration. One engineering philosophy. One TRANSMUTE
              standard.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden">
        <img
          src={aboutImages.cta}
          alt="Transmute transfer pipeline"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ea] via-[#f7f3eaf0] to-transparent" />

        <div className="relative mx-auto max-w-[1450px] px-6 py-14 lg:px-10">
          <div className="max-w-[620px]">

            <div className="text-[45px] font-black tracking-[-2px]">
              TRANSMUTE
            </div>

            <h2 className="mt-1 font-condensed text-[28px] font-black uppercase leading-none sm:text-[38px]">
              Engineered{" "}
              <span className="text-[#a8751c]">
                for smoother, more reliable flow.
              </span>
            </h2>

            <p className="mt-5 text-[14px] leading-[1.5]">
              We're here to help you move what matters — more safely, more
              efficiently and with greater confidence. Discover how TRANSMUTE
              can support your operation with engineered transfer solutions
              built for the real world.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/solutions"
                className="bg-[#b27b20] px-7 py-4 text-sm font-bold text-white"
              >
                Explore Our Solutions →
              </a>

              <a
                href="/contact"
                className="border border-[#b27b20] bg-white/80 px-7 py-4 text-sm font-bold"
              >
                Talk to an Engineer →
              </a>
            </div>

          </div>
        </div>
      </section>
      
    </main>
  );
}