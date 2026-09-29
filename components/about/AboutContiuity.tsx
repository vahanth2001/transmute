import Link from "next/link";

const solutions = [
  {
    image: "/images/flexible-hose.png",
    eyebrow: "TRANSMUTE",
    title: "FLEXIBLE HOSE SOLUTIONS",
    text: "Engineered for movement, vibration and variable conditions. Our flexible hose solutions are designed for demanding applications including dredging, mining, chemical transfer and industrial processing.",
    href: "/solutions/flexible-hose",
    button: "Explore Flexible Hose Solutions",
  },
  {
    image: "/images/steel-pipeline.png",
    eyebrow: "TRANSMUTE",
    title: "STEEL PIPELINE SOLUTIONS",
    text: "Engineered for strength, long-distance flow and harsh environments. Our steel pipeline solutions deliver reliable performance for high-pressure, high-volume and stationary transfer systems.",
    href: "/solutions/steel-pipeline",
    button: "Explore Steel Pipeline Solutions",
  },
];

export default function AboutSolutions() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      <div
        className="
          mx-auto
          w-full
          px-[clamp(16px,3vw,120px)]
          py-[clamp(40px,5vw,90px)]
        "
      >
        {/* SECTION HEADER */}
        <div className="w-full">
          {/* EYEBROW */}
          <div
            className="
              mb-[clamp(12px,1vw,22px)]
              flex
              items-center
              gap-[clamp(7px,0.8vw,14px)]
            "
          >
            <span
              className="
                h-px
                w-[clamp(24px,3vw,55px)]
                shrink-0
                bg-gold
              "
            />

            <span
              className="
                text-[clamp(9px,0.55vw,14px)]
                font-semibold
                tracking-[0.2em]
                text-gold
              "
            >
              OUR SOLUTIONS
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              max-w-[1200px]
              font-serif
              text-[clamp(30px,3.8vw,76px)]
              font-normal
              leading-[0.92]
              tracking-[-0.04em]
              text-black
            "
          >
            INTEGRATED TECHNOLOGIES.
            <span className="text-gold">
              {" "}ONE TRANSMUTE STANDARD.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-[clamp(14px,1.2vw,24px)]
              max-w-[1100px]
              text-justify
              text-[clamp(10px,0.7vw,17px)]
              leading-[1.55]
              text-muted
            "
          >
            TRANSMUTE brings together flexible and steel pipeline
            technologies within one solutions platform, providing a more
            complete, more effective approach to material transfer across
            a wide range of operating conditions.
          </p>
        </div>

        {/* SOLUTION CARDS */}
        <div
          className="
            mt-[clamp(28px,3vw,52px)]
            grid
            grid-cols-1
            gap-[clamp(14px,1.5vw,28px)]
            lg:grid-cols-2
          "
        >
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="
                group
                grid
                min-w-0
                overflow-hidden
                border
                border-border
                bg-white
                lg:grid-cols-[42%_58%]
              "
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  min-h-[clamp(220px,28vw,430px)]
                  overflow-hidden
                  lg:min-h-0
                "
              >
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
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
                    from-black/45
                    via-transparent
                    to-transparent
                  "
                />

                {/* IMAGE LABEL */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    bg-black/80
                    px-[clamp(10px,1vw,18px)]
                    py-[clamp(7px,0.7vw,12px)]
                  "
                >
                  <span
                    className="
                      text-[clamp(8px,0.5vw,12px)]
                      font-semibold
                      tracking-[0.15em]
                      text-white
                    "
                  >
                    {solution.eyebrow}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div
                className="
                  flex
                  min-w-0
                  flex-col
                  justify-between
                  p-[clamp(18px,2vw,38px)]
                "
              >
                <div>
                  <span
                    className="
                      block
                      text-[clamp(9px,0.55vw,14px)]
                      font-semibold
                      tracking-[0.16em]
                      text-gold
                    "
                  >
                    {solution.eyebrow}
                  </span>

                  <h3
                    className="
                      mt-[clamp(6px,0.5vw,10px)]
                      font-serif
                      text-[clamp(22px,2vw,40px)]
                      font-normal
                      leading-[0.95]
                      tracking-[-0.025em]
                      text-black
                    "
                  >
                    {solution.title}
                  </h3>

                  <p
                    className="
                      mt-[clamp(12px,1vw,20px)]
                      text-justify
                      text-[clamp(10px,0.65vw,15px)]
                      leading-[1.55]
                      text-muted
                    "
                  >
                    {solution.text}
                  </p>
                </div>

                {/* FEATURES */}
                <div
                  className="
                    mt-[clamp(20px,2vw,34px)]
                    grid
                    grid-cols-3
                    gap-[clamp(7px,0.8vw,16px)]
                    border-t
                    border-border
                    pt-[clamp(12px,1vw,20px)]
                  "
                >
                  {solution.title.includes("FLEXIBLE") ? (
                    <>
                      <Feature title="Movement" />
                      <Feature title="Vibration" />
                      <Feature title="Flexibility" />
                    </>
                  ) : (
                    <>
                      <Feature title="Strength" />
                      <Feature title="Pressure" />
                      <Feature title="Long Distance" />
                    </>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={solution.href}
                  className="
                    group/button
                    mt-[clamp(18px,1.8vw,32px)]
                    inline-flex
                    w-fit
                    max-w-full
                    items-center
                    gap-3
                    bg-gold
                    px-[clamp(13px,1.4vw,24px)]
                    py-[clamp(10px,0.8vw,15px)]
                    text-[clamp(9px,0.6vw,14px)]
                    font-semibold
                    tracking-[0.02em]
                    text-white
                    transition-colors
                    hover:bg-black
                  "
                >
                  <span>{solution.button}</span>

                  <span
                    className="
                      text-[clamp(12px,0.8vw,17px)]
                      transition-transform
                      group-hover/button:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <div
          className="
            mt-[clamp(22px,2.5vw,42px)]
            flex
            items-center
            gap-[clamp(8px,1vw,16px)]
          "
        >
          <span
            className="
              h-px
              w-[clamp(30px,4vw,70px)]
              shrink-0
              bg-gold
            "
          />

          <p
            className="
              text-[clamp(9px,0.6vw,14px)]
              font-semibold
              tracking-[0.08em]
              text-gold
            "
          >
            RIGHT TECHNOLOGY. RIGHT LOCATION. ONE ENGINEERED SYSTEM.
          </p>
        </div>
      </div>
    </section>
  );
}

function Feature({ title }: { title: string }) {
  return (
    <div className="min-w-0">
      <span
        className="
          block
          text-[clamp(8px,0.5vw,12px)]
          font-semibold
          uppercase
          leading-tight
          text-black
        "
      >
        {title}
      </span>

      <span
        className="
          mt-1
          block
          h-px
          w-[clamp(18px,2vw,32px)]
          bg-gold
        "
      />
    </div>
  );
}