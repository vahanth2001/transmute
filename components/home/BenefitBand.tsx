import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "ENGINEERED\nFOR WEAR",
    text: "Solutions configured for abrasive media and demanding environments.",
  },
  {
    number: "02",
    title: "OPTIMIZED\nFOR MOVEMENT",
    text: "Flexible technologies positioned where vibration, movement and route changes matter most.",
  },
  {
    number: "03",
    title: "DESIGNED\nFOR RELIABILITY",
    text: "Appropriate material and construction selected for each transfer section and operating condition.",
  },
  {
    number: "04",
    title: "FOCUSED ON\nLIFECYCLE VALUE",
    text: "Engineering the right solution for each system can improve service life, maintenance and overall system performance.",
  },
];

const sectors = [
  {
    title: "MINING",
    image: "/images/mining.jpg",
    href: "/applications/mining",
  },
  {
    title: "DREDGING",
    image: "/images/dredging.jpg",
    href: "/applications/dredging",
  },
  {
    title: "PETROLEUM &\nPROCESS",
    image: "/images/petroleum.jpg",
    href: "/applications/petroleum",
  },
  {
    title: "WATER &\nDESALINATION",
    image: "/images/water.jpg",
    href: "/applications/water-desalination",
  },
  {
    title: "SANITATION &\nWASTEWATER",
    image: "/images/sanitation.jpg",
    href: "/applications/sanitation-sewage",
  },
  {
    title: "INDUSTRIAL\nAPPLICATIONS",
    image: "/images/industrial.jpg",
    href: "/applications/industrial",
  },
];

export default function BenefitBand() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      <div
        className="
          grid
          w-full
          grid-cols-1
          border-t
          border-border
          lg:grid-cols-[1.05fr_0.95fr]
        "
      >
        {/* LEFT — BENEFITS */}
        <div
          className="
            min-w-0
            border-b
            border-border
            px-[clamp(18px,5vw,120px)]
            py-[clamp(38px,4vw,80px)]
            lg:border-b-0
            lg:border-r
          "
        >
          {/* EYEBROW */}
          <div
            className="
              flex
              items-center
              justify-start
              gap-[clamp(7px,0.7vw,14px)]
            "
          >
            <span
              className="
                h-px
                w-[clamp(24px,2.2vw,55px)]
                shrink-0
                bg-gold
              "
            />

            <span
              className="
                text-[clamp(8px,0.58vw,14px)]
                font-semibold
                tracking-[0.25em]
                text-gold
              "
            >
              ENGINEERED AS A SYSTEM
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mt-[clamp(10px,0.8vw,18px)]
              font-serif
              font-normal
              text-[clamp(30px,3vw,64px)]
              leading-[0.94]
              tracking-[-0.04em]
              text-black
            "
          >
            BUILT TO PERFORM
            <br />
            WHERE IT MATTERS MOST.
          </h2>

          {/* BENEFITS */}
          <div
            className="
              mt-[clamp(30px,3vw,58px)]
              grid
              grid-cols-1
              border-t
              border-border
              sm:grid-cols-2
            "
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit.number}
                className={`
                  min-w-0
                  py-[clamp(18px,1.6vw,32px)]
                  pr-[clamp(14px,2vw,36px)]
                  ${
                    index >= 2
                      ? "border-t border-border"
                      : ""
                  }
                  ${
                    index % 2 === 1
                      ? "sm:border-l sm:border-border sm:pl-[clamp(14px,2vw,36px)]"
                      : ""
                  }
                `}
              >
                {/* NUMBER */}
                <span
                  className="
                    inline-flex
                    h-[clamp(25px,1.8vw,38px)]
                    min-w-[clamp(25px,1.8vw,38px)]
                    items-center
                    justify-center
                    border
                    border-black/15
                    text-[clamp(8px,0.55vw,12px)]
                    font-semibold
                    text-black
                  "
                >
                  {benefit.number}
                </span>

                {/* TITLE */}
                <h3
                  className="
                    mt-[clamp(10px,0.8vw,16px)]
                    whitespace-pre-line
                    text-[clamp(10px,0.7vw,15px)]
                    font-bold
                    leading-[1.12]
                    tracking-[0.025em]
                    text-black
                  "
                >
                  {benefit.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-[clamp(7px,0.6vw,12px)]
                    max-w-[420px]
                    text-[clamp(9px,0.6vw,14px)]
                    leading-[1.45]
                    text-black/60
                  "
                >
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — APPLICATIONS */}
        <div
          className="
            min-w-0
            px-[clamp(18px,4vw,90px)]
            py-[clamp(38px,4vw,80px)]
          "
        >
          {/* EYEBROW */}
          <div
            className="
              flex
              items-center
              justify-start
              gap-[clamp(7px,0.7vw,14px)]
            "
          >
            <span
              className="
                h-px
                w-[clamp(24px,2.2vw,55px)]
                shrink-0
                bg-gold
              "
            />

            <span
              className="
                text-[clamp(8px,0.58vw,14px)]
                font-semibold
                tracking-[0.25em]
                text-gold
              "
            >
              ENGINEERED FOR REAL-WORLD CONDITIONS
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mt-[clamp(10px,0.8vw,18px)]
              font-serif
              font-normal
              text-[clamp(27px,2.7vw,58px)]
              leading-[0.94]
              tracking-[-0.04em]
              text-black
            "
          >
            DEMANDING SECTORS.
            <br />
            INTEGRATED SOLUTIONS.
          </h2>

          {/* APPLICATION GRID */}
          <div
            className="
              mt-[clamp(24px,2.2vw,44px)]
              grid
              grid-cols-2
              gap-[clamp(6px,0.7vw,12px)]
              sm:grid-cols-3
            "
          >
            {sectors.map((sector) => (
              <Link
                key={sector.title}
                href={sector.href}
                className="
                  group
                  relative
                  aspect-[1.8/1]
                  min-w-0
                  overflow-hidden
                  bg-black
                "
              >
                <img
                  src={sector.image}
                  alt=""
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    opacity-75
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    p-[clamp(8px,0.9vw,18px)]
                  "
                >
                  <span
                    className="
                      whitespace-pre-line
                      text-[clamp(8px,0.65vw,14px)]
                      font-bold
                      leading-[1.05]
                      tracking-[0.03em]
                      text-white
                    "
                  >
                    {sector.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/applications"
            className="
              group
              mt-[clamp(12px,1.2vw,24px)]
              inline-flex
              items-center
              gap-[clamp(7px,0.7vw,13px)]
              bg-gold
              px-[clamp(14px,1.4vw,28px)]
              py-[clamp(10px,0.8vw,16px)]
              text-[clamp(9px,0.65vw,14px)]
              font-semibold
              text-white
              transition-colors
              hover:bg-black
            "
          >
            <span>Explore All Applications</span>

            <span
              className="
                text-[clamp(12px,0.9vw,18px)]
                transition-transform
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}