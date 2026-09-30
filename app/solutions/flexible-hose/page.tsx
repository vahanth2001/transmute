"use client";

import Link from "next/link";
import Image from "next/image";

const applications = [
  {
    title: "MINING",
    image: "/images/mining.jpg",
  },
  {
    title: "DREDGING",
    image: "/images/dredging.jpg",
  },
  {
    title: "INDUSTRIAL TRANSFER",
    image: "/images/industrial-transfer.jpg",
  },
  {
    title: "PUMP CONNECTIONS",
    image: "/images/pump-connections.jpg",
  },
];

export default function FlexibleHosePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#182027]">

      {/* HERO */}
      <section className="relative min-h-[510px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/flexible-hero.jpg"
            alt="Transmute flexible hose solution"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ed] via-[#f7f4ed]/95 via-[48%] to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[510px] max-w-[1400px] items-center px-6 py-20 lg:px-14">
          <div className="max-w-[570px]">
            <p className="mb-4 text-[14px] font-bold tracking-[2px] text-[#b77916]">
              FLEXIBLE HOSE SOLUTIONS
            </p>

            <h1 className="font-[Arial,sans-serif] text-[48px] font-black uppercase leading-[0.96] tracking-[-2px] sm:text-[58px] lg:text-[64px]">
              Engineered Flexibility
              <br />
              for Dynamic Operating
              <br />
              Conditions.
            </h1>

            <p className="mt-6 max-w-[510px] text-[17px] leading-[1.5] text-[#252a2e]">
              Transmute flexible hose solutions are designed for transfer
              sections where movement, vibration, routing flexibility and wear
              conditions demand a more adaptable approach.
            </p>

            <p className="mt-5 text-[16px] font-bold">
              Two engineered solutions. One Transmute standard.
            </p>

            <Link
              href="#rubber-hose"
              className="mt-7 inline-flex bg-[#bf811b] px-7 py-4 text-[14px] font-bold text-white transition hover:bg-[#9e6813]"
            >
              Explore Our Flexible Solutions
              <span className="ml-3">→</span>
            </Link>
          </div>
        </div>

        <div className="absolute right-8 top-12 hidden max-w-[180px] text-right text-white lg:block">
          <div className="text-[21px] font-bold uppercase leading-[1.1]">
            Flexible
            <br />
            Reliable
            <br />
            Ready for
            <br />
            What's Next.
          </div>

          <div className="mt-5 h-[2px] w-10 bg-[#c58a25]" />
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="border-b border-[#d9d3c7] bg-[#ebe5d8]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-14">
          {[
            ["MOVEMENT", "Handles dynamic conditions"],
            ["ADAPTABILITY", "Easier routing in complex sites"],
            ["WEAR PERFORMANCE", "Engineered for demanding applications"],
            ["SYSTEM COMPATIBILITY", "Integrates with Transmute steel solutions"],
          ].map(([title, text], index) => (
            <div
              key={title}
              className={`px-6 py-6 text-center ${
                index !== 0 ? "lg:border-l lg:border-[#bcb5a8]" : ""
              }`}
            >
              <div className="text-[12px] font-black tracking-[1.5px]">
                {title}
              </div>

              <p className="mt-2 text-[13px]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RUBBER HOSE */}
      <section
        id="rubber-hose"
        className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2"
      >
        <div className="relative min-h-[450px]">
          <Image
            src="/images/transmute-rubber-hose.jpg"
            alt="Transmute Rubber Hose"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-10 left-12">
            <div className="text-[21px] font-black uppercase leading-tight text-white">
              Built to Move
              <br />
              With the System.
            </div>

            <div className="mt-4 h-[3px] w-12 bg-[#bd7d17]" />
          </div>
        </div>

        <div className="flex items-center px-8 py-16 sm:px-12 lg:px-14">
          <div>
            <p className="text-[13px] font-bold tracking-[1.5px] text-[#b77916]">
              TRANSMUTE RUBBER HOSE
            </p>

            <h2 className="mt-3 text-[39px] font-black uppercase leading-[1.02] tracking-[-1px] sm:text-[46px]">
              Flexible Performance
              <br />
              for Dynamic Transfer
              <br />
              Applications.
            </h2>

            <p className="mt-6 max-w-[600px] text-[16px] leading-[1.55] text-[#34383b]">
              Transmute Rubber Hose is a reinforced rubber hose solution
              designed for applications where flexibility, movement,
              vibration and route adaptability are important.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-[13px] font-bold tracking-[1.2px] text-[#b77916]">
                  KEY CHARACTERISTICS
                </h3>

                <ul className="mt-4 space-y-2 text-[15px]">
                  <li>· Flexible construction</li>
                  <li>· Reinforced body</li>
                  <li>· Vibration accommodation</li>
                  <li>· Ease of installation</li>
                </ul>
              </div>

              <div className="sm:border-l sm:border-[#cfc8ba] sm:pl-7">
                <h3 className="text-[13px] font-bold tracking-[1.2px] text-[#b77916]">
                  TYPICAL APPLICATIONS
                </h3>

                <ul className="mt-4 space-y-2 text-[15px]">
                  <li>· Pump connections</li>
                  <li>· Dredging applications</li>
                  <li>· Movement zones</li>
                  <li>· Temporary or changing routes</li>
                  <li>· Vibration-prone sections</li>
                  <li>· General material transfer</li>
                </ul>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex bg-[#bd7d17] px-7 py-4 text-[14px] font-bold text-white hover:bg-[#9e6813]"
            >
              Explore Rubber Hose
              <span className="ml-3">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CERAMIC LINED RUBBER HOSE */}
      <section className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2">
        <div className="order-2 flex items-center px-8 py-16 sm:px-12 lg:order-1 lg:px-14">
          <div>
            <p className="text-[13px] font-bold tracking-[1.5px] text-[#b77916]">
              TRANSMUTE CERAMIC-LINED RUBBER HOSE
            </p>

            <h2 className="mt-3 text-[39px] font-black uppercase leading-[1.02] tracking-[-1px] sm:text-[46px]">
              Flexibility With
              <br />
              Advanced Wear Protection.
            </h2>

            <p className="mt-6 max-w-[600px] text-[16px] leading-[1.55] text-[#34383b]">
              Transmute Ceramic-Lined Rubber Hose combines the adaptability of
              a flexible hose with ceramic wear protection for demanding
              abrasive-transfer applications. It is designed for critical
              sections where conventional flexible hose may experience
              accelerated wear.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-[13px] font-bold tracking-[1.2px] text-[#b77916]">
                  KEY CHARACTERISTICS
                </h3>

                <ul className="mt-4 space-y-2 text-[15px]">
                  <li>· Ceramic wear protection</li>
                  <li>· Flexible construction</li>
                  <li>· Reinforced structure</li>
                  <li>· Critical-zone performance</li>
                </ul>
              </div>

              <div className="sm:border-l sm:border-[#cfc8ba] sm:pl-7">
                <h3 className="text-[13px] font-bold tracking-[1.2px] text-[#b77916]">
                  TYPICAL APPLICATIONS
                </h3>

                <ul className="mt-4 space-y-2 text-[15px]">
                  <li>· Abrasive slurry</li>
                  <li>· Mining applications</li>
                  <li>· Dredging</li>
                  <li>· Pump discharge areas</li>
                  <li>· Bends and transitions</li>
                  <li>· Movement zones</li>
                  <li>· Critical wear sections</li>
                </ul>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex bg-[#bd7d17] px-7 py-4 text-[14px] font-bold text-white hover:bg-[#9e6813]"
            >
              Explore Ceramic-Lined Rubber Hose
              <span className="ml-3">→</span>
            </Link>
          </div>
        </div>

        <div className="relative order-1 min-h-[450px] lg:order-2">
          <Image
            src="/images/ceramic-lined-rubber-hose.jpg"
            alt="Transmute Ceramic-Lined Rubber Hose"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-10 right-10">
            <div className="text-right text-[21px] font-black uppercase leading-tight text-white">
              Engineered
              <br />
              For Tougher
              <br />
              Conditions.
            </div>

            <div className="ml-auto mt-4 h-[3px] w-12 bg-[#bd7d17]" />
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="relative overflow-hidden bg-[#171c20]">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/images/flexible-cta.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-14 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-[13px] font-bold tracking-[2px] text-[#c48920]">
                A STRONGER FLOW AHEAD
              </p>

              <h2 className="mt-4 text-[42px] font-black uppercase leading-[1] text-white sm:text-[52px]">
                Let&apos;s Engineer
                <br />
                The Right Flexible
                <br />
                Solution.
              </h2>

              <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-white/90">
                Whether you&apos;re designing a new system or addressing a
                specific operating challenge, our team can help you find the
                right Transmute flexible hose solution for your application.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex bg-[#bd7d17] px-7 py-4 text-[14px] font-bold text-white hover:bg-[#9e6813]"
              >
                Talk to an Engineer
                <span className="ml-3">→</span>
              </Link>
            </div>

            {/* APPLICATION CARDS */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {applications.map((application) => (
                <div
                  key={application.title}
                  className="group relative min-h-[230px] overflow-hidden border border-white/20"
                >
                  <Image
                    src={application.image}
                    alt={application.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[13px] font-black text-white">
                      {application.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}