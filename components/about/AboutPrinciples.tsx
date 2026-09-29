const principles = [
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

export default function AboutPrinciples() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      <div
        className="
          mx-auto
          w-full
          px-[clamp(16px,3vw,120px)]
          py-[clamp(38px,5vw,85px)]
        "
      >
        {/* HEADER */}
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
              WHAT WE STAND FOR
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
            PERFORMANCE THAT KEEPS
            <br />
            OPERATIONS MOVING.
          </h2>
        </div>

        {/* PRINCIPLES */}
        <div
          className="
            mt-[clamp(28px,3vw,52px)]
            grid
            grid-cols-1
            border-t
            border-border
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {principles.map((item, index) => (
            <article
              key={item.title}
              className="
                group
                min-w-0
                border-b
                border-border
                px-[clamp(16px,2vw,34px)]
                py-[clamp(22px,2.5vw,42px)]
                transition-colors
                duration-300
                hover:bg-white
                lg:border-b-0
                lg:border-r
                lg:first:border-l
                lg:last:border-r-0
              "
            >
              {/* NUMBER */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <span
                  className="
                    text-[clamp(9px,0.55vw,13px)]
                    font-semibold
                    tracking-[0.15em]
                    text-gold
                  "
                >
                  0{index + 1}
                </span>

                <span
                  className="
                    h-px
                    flex-1
                    bg-border
                    transition-colors
                    duration-300
                    group-hover:bg-gold
                  "
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-[clamp(18px,1.8vw,30px)]
                  text-[clamp(14px,1vw,21px)]
                  font-bold
                  leading-[1.15]
                  tracking-[-0.01em]
                  text-black
                "
              >
                {item.title}
              </h3>

              {/* TEXT */}
              <p
                className="
                  mt-[clamp(9px,0.8vw,15px)]
                  max-w-[420px]
                  text-justify
                  text-[clamp(10px,0.65vw,15px)]
                  leading-[1.55]
                  text-muted
                "
              >
                {item.text}
              </p>

              {/* BOTTOM MARK */}
              <div
                className="
                  mt-[clamp(20px,2vw,34px)]
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-[clamp(5px,0.4vw,8px)]
                    w-[clamp(5px,0.4vw,8px)]
                    rounded-full
                    bg-gold
                  "
                />

                <span
                  className="
                    h-px
                    w-[clamp(30px,3vw,55px)]
                    bg-border
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}