import Link from "next/link";

const solutions = [
  {
    label: "TRANSMUTE FLEX",
    title: "ENGINEERED FLEXIBILITY\nFOR CRITICAL ZONES.",
    text: "High-performance reinforced hose systems designed for abrasive flow, movement, bends and dynamic transfer applications.",
    image: "/images/hero.png",
    features: [
      {
        title: "Wear Protection",
        text: "Engineered options for abrasive applications.",
      },
      {
        title: "Flexible Construction",
        text: "Designed for movement, vibration and changing geometry.",
      },
      {
        title: "Reinforced Structure",
        text: "Engineered around pressure and operating requirements.",
      },
      {
        title: "Connection Systems",
        text: "Designed for dependable installation and replacement.",
      },
    ],
    href: "/solutions/flexible-hose",
    button: "Explore Flexible Hose Solutions",
  },
  {
    label: "TRANSMUTE STEEL",
    title: "ENGINEERED STRENGTH\nFOR FIXED TRANSFER SYSTEMS.",
    text: "Robust steel pipeline solutions designed for fixed routes, long runs, transfer rigidity and demanding operating conditions.",
    image: "/images/8724dad6-e804-435c-95b8-5f8b6e86e596 copy.png",
    features: [
      {
        title: "Structural Strength",
        text: "Built for stable, fixed pipeline installations.",
      },
      {
        title: "Pressure Capability",
        text: "Engineered according to application requirements.",
      },
      {
        title: "Wear Protection Options",
        text: "Available with application-specific lining and protection systems.",
      },
      {
        title: "System Integration",
        text: "Designed to work alongside flexible Transmute sections.",
      },
    ],
    href: "/solutions/steel-pipeline",
    button: "Explore Steel Pipeline Solutions",
  },
];

export default function MeetTransmute() {
  return (
    <section className="w-full overflow-hidden bg-[#f1efe9]">
      {/* SECTION INTRO */}
      <div
        className="
          w-full
          px-[clamp(18px,5vw,120px)]
          pt-[clamp(34px,3.5vw,72px)]
          pb-[clamp(22px,2.5vw,48px)]
        "
      >
        {/* EYEBROW */}
        <div
          className="
            mb-[clamp(10px,0.8vw,18px)]
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
            THE TRANSMUTE SOLUTION FAMILY
          </span>
        </div>

        {/* HEADING */}
        <h2
          className="
            font-serif
            font-normal
            text-[clamp(30px,3.2vw,70px)]
            leading-[0.94]
            tracking-[-0.04em]
            text-black
          "
        >
          THE RIGHT TECHNOLOGY. IN THE RIGHT PLACE.
        </h2>

        <p
          className="
            mt-[clamp(10px,0.9vw,18px)]
            max-w-[1150px]
            text-justify
            text-[clamp(11px,0.72vw,17px)]
            leading-[1.45]
            text-black/65
          "
        >
          Transmute combines complementary pipeline technologies under one
          engineered solutions platform — allowing each part of the transfer
          system to be designed around its actual operating conditions.
        </p>
      </div>

      {/* SOLUTION CARDS */}
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-[clamp(12px,1.2vw,24px)]
          px-[clamp(18px,5vw,120px)]
          pb-[clamp(40px,4vw,80px)]
          lg:grid-cols-2
        "
      >
        {solutions.map((solution) => (
          <article
            key={solution.label}
            className="
              relative
              min-w-0
              overflow-hidden
              bg-black
              text-white
            "
          >
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0">
              <img
                src={solution.image}
                alt=""
                className="
                  h-full
                  w-full
                  object-cover
                  opacity-55
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black
                  via-black/90
                  to-black/20
                "
              />
            </div>

            {/* CONTENT */}
            <div
              className="
                relative
                z-10
                flex
                min-h-[clamp(390px,34vw,650px)]
                flex-col
                p-[clamp(20px,2.8vw,58px)]
              "
            >
              {/* LABEL */}
              <span
                className="
                  font-serif
                  text-[clamp(18px,1.55vw,32px)]
                  leading-none
                  tracking-[-0.02em]
                  text-gold
                "
              >
                {solution.label}
              </span>

              {/* TITLE */}
              <h3
                className="
                  mt-[clamp(14px,1.2vw,24px)]
                  whitespace-pre-line
                  text-[clamp(20px,1.45vw,32px)]
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.015em]
                  text-white
                "
              >
                {solution.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-[clamp(12px,1vw,20px)]
                  max-w-[600px]
                  text-justify
                  text-[clamp(10px,0.68vw,15px)]
                  leading-[1.5]
                  text-white/70
                "
              >
                {solution.text}
              </p>

              {/* FEATURES */}
              <div
                className="
                  mt-auto
                  grid
                  grid-cols-2
                  gap-x-[clamp(12px,2vw,35px)]
                  gap-y-[clamp(14px,1.5vw,28px)]
                  pt-[clamp(30px,3vw,55px)]
                "
              >
                {solution.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-[clamp(7px,0.7vw,13px)]
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-[clamp(24px,1.8vw,38px)]
                        w-[clamp(24px,1.8vw,38px)]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gold
                        text-[clamp(10px,0.65vw,14px)]
                        text-gold
                      "
                    >
                      ◇
                    </div>

                    <div className="min-w-0 text-left">
                      <h4
                        className="
                          text-[clamp(9px,0.62vw,14px)]
                          font-bold
                          leading-[1.15]
                          text-white
                        "
                      >
                        {feature.title}
                      </h4>

                      <p
                        className="
                          mt-1
                          text-[clamp(8px,0.52vw,12px)]
                          leading-[1.35]
                          text-white/55
                        "
                      >
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-[clamp(24px,2vw,40px)]">
                <Link
                  href={solution.href}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-[clamp(7px,0.7vw,13px)]
                    bg-gold
                    px-[clamp(14px,1.4vw,28px)]
                    py-[clamp(10px,0.8vw,16px)]
                    text-[clamp(9px,0.65vw,14px)]
                    font-semibold
                    tracking-[0.01em]
                    text-white
                    transition-colors
                    hover:bg-white
                    hover:text-black
                  "
                >
                  <span>{solution.button}</span>

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
          </article>
        ))}
      </div>
    </section>
  );
}