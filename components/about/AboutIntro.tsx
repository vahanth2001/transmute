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

export default function AboutApproach() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      <div
        className="
          mx-auto
          w-full
          px-[clamp(16px,3vw,120px)]
          py-[clamp(36px,5vw,90px)]
        "
      >
        {/* HEADER */}
        <div className="grid w-full lg:grid-cols-[58%_42%]">
          {/* TEXT */}
          <div className="min-w-0">
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
                OUR APPROACH
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                max-w-[1100px]
                font-serif
                text-[clamp(30px,3.8vw,76px)]
                font-normal
                leading-[0.92]
                tracking-[-0.04em]
                text-black
              "
            >
              ENGINEERING BEGINS
              <br />
              WITH THE APPLICATION.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[clamp(14px,1.4vw,26px)]
                max-w-[1100px]
                text-justify
                text-[clamp(11px,0.7vw,17px)]
                leading-[1.55]
                text-muted
              "
            >
              We take the time to understand the operating conditions,
              constraints and objectives before defining the right solution.
              Every application is different, and the right answer comes from
              a clear understanding of the full transfer environment —
              the media, route, pressure, movement, routing and the bigger
              picture of operational performance.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              mt-[clamp(24px,3vw,50px)]
              min-h-[clamp(220px,25vw,440px)]
              overflow-hidden
              lg:mt-0
              lg:min-h-[clamp(260px,28vw,480px)]
            "
          >
            <img
              src="/images/about-approach.png"
              alt="Industrial transfer system and pipeline"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cream
                via-transparent
                to-transparent
                lg:from-cream/80
                lg:via-transparent
              "
            />

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-1/2
                bg-gradient-to-t
                from-black/40
                to-transparent
              "
            />
          </div>
        </div>

        {/* APPROACH ITEMS */}
        <div
          className="
            mt-[clamp(30px,4vw,65px)]
            grid
            grid-cols-2
            border-t
            border-border
            sm:grid-cols-3
            lg:grid-cols-5
          "
        >
          {approachItems.map((item, index) => (
            <div
              key={item.title}
              className={`
                min-w-0
                border-b
                border-border
                px-[clamp(10px,1.5vw,28px)]
                py-[clamp(18px,2vw,34px)]
                lg:border-b-0
                ${
                  index !== approachItems.length - 1
                    ? "lg:border-r"
                    : ""
                }
                ${
                  index % 2 === 0
                    ? "border-r sm:border-r"
                    : ""
                }
                ${
                  index >= 3
                    ? "sm:border-r-0 lg:border-r"
                    : ""
                }
              `}
            >
              {/* NUMBER */}
              <span
                className="
                  mb-[clamp(8px,0.8vw,14px)]
                  block
                  text-[clamp(8px,0.55vw,13px)]
                  font-semibold
                  tracking-[0.15em]
                  text-gold
                "
              >
                0{index + 1}
              </span>

              {/* TITLE */}
              <h3
                className="
                  text-[clamp(10px,0.7vw,16px)]
                  font-bold
                  leading-[1.15]
                  tracking-[0.04em]
                  text-black
                "
              >
                {item.title}
              </h3>

              {/* TEXT */}
              <p
                className="
                  mt-[clamp(7px,0.6vw,12px)]
                  text-justify
                  text-[clamp(9px,0.6vw,14px)]
                  leading-[1.45]
                  text-muted
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <div
          className="
            mt-[clamp(20px,2vw,34px)]
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
            THE RIGHT TECHNOLOGY. IN THE RIGHT PLACE. WORKING AS ONE SYSTEM.
          </p>
        </div>
      </div>
    </section>
  );
}