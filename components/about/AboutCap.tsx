import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "HIGH-WEAR TRANSFER",
    text: "Solutions engineered for demanding abrasive environments where material wear and system continuity are critical.",
  },
  {
    number: "02",
    title: "FLEXIBLE TRANSFER",
    text: "Flexible technologies designed for movement, vibration, alignment changes, and dynamic operating zones.",
  },
  {
    number: "03",
    title: "STEEL PIPELINES",
    text: "Engineered steel transfer systems for applications requiring structural strength, durability, and controlled material flow.",
  },
  {
    number: "04",
    title: "SYSTEM INTEGRATION",
    text: "A complete view of the transfer route, connecting different technologies into one coordinated operating system.",
  },
];

export default function AboutCapabilities() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      <div
        className="
          mx-auto w-full
          px-[clamp(16px,4vw,120px)]
          py-[clamp(60px,9vw,160px)]
        "
      >
        {/* TOP */}
        <div
          className="
            grid grid-cols-1
            gap-[clamp(30px,6vw,120px)]
            lg:grid-cols-[35%_65%]
          "
        >
          {/* LEFT */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="h-px w-[clamp(28px,4vw,70px)] bg-gold" />

              <span
                className="
                  text-[clamp(9px,0.6vw,14px)]
                  font-semibold
                  tracking-[0.2em]
                  text-gold
                "
              >
                WHAT WE DELIVER
              </span>
            </div>

            <h2
              className="
                mt-[clamp(18px,2vw,34px)]
                font-serif
                text-[clamp(34px,4.5vw,82px)]
                font-normal
                leading-[0.92]
                tracking-[-0.045em]
                text-black
              "
            >
              THE RIGHT
              <br />
              <span className="text-gold">SOLUTION</span>
              <br />
              FOR THE JOB.
            </h2>
          </div>

          {/* RIGHT INTRO */}
          <div className="min-w-0 lg:pt-[clamp(10px,2vw,30px)]">
            <p
              className="
                max-w-[1000px]
                text-justify
                text-[clamp(14px,1vw,22px)]
                leading-[1.7]
                text-muted
              "
            >
              Transmute brings multiple transfer technologies together under
              one engineering approach. Each solution is selected according
              to the conditions it needs to handle.
            </p>

            <p
              className="
                mt-[clamp(18px,2vw,34px)]
                max-w-[1000px]
                text-justify
                text-[clamp(13px,0.9vw,19px)]
                leading-[1.7]
                text-muted
              "
            >
              The result is a system designed around the real operating
              environment — helping reduce unnecessary compromises between
              performance, reliability, maintenance, and lifecycle value.
            </p>
          </div>
        </div>

        {/* CAPABILITY GRID */}
        <div
          className="
            mt-[clamp(50px,8vw,130px)]
            grid grid-cols-1
            border-t border-border
            sm:grid-cols-2
          "
        >
          {capabilities.map((item, index) => (
            <div
              key={item.number}
              className={`
                group
                min-w-0
                px-[clamp(16px,3vw,48px)]
                py-[clamp(28px,4vw,60px)]
                transition-colors
                duration-300
                hover:bg-black
                hover:text-white
                ${
                  index % 2 === 0
                    ? "sm:border-r sm:border-border"
                    : ""
                }
                ${
                  index < 2
                    ? "border-b border-border"
                    : ""
                }
              `}
            >
              {/* NUMBER */}
              <span
                className="
                  block
                  text-[clamp(9px,0.6vw,14px)]
                  font-semibold
                  tracking-[0.16em]
                  text-gold
                "
              >
                {item.number}
              </span>

              {/* TITLE */}
              <h3
                className="
                  mt-[clamp(14px,1.5vw,24px)]
                  text-[clamp(16px,1.2vw,25px)]
                  font-bold
                  leading-[1.15]
                  tracking-[0.04em]
                  text-black
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {item.title}
              </h3>

              {/* TEXT */}
              <p
                className="
                  mt-[clamp(14px,1.5vw,24px)]
                  max-w-[650px]
                  text-justify
                  text-[clamp(12px,0.8vw,17px)]
                  leading-[1.65]
                  text-muted
                  transition-colors
                  duration-300
                  group-hover:text-white/65
                "
              >
                {item.text}
              </p>

              {/* ARROW */}
              <div
                className="
                  mt-[clamp(22px,3vw,40px)]
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    h-px
                    w-[clamp(30px,4vw,70px)]
                    bg-gold
                  "
                />

                <span
                  className="
                    text-[clamp(18px,1.5vw,28px)]
                    text-gold
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div
          className="
            mt-[clamp(40px,6vw,90px)]
            flex
            flex-col
            gap-6
            border-t border-border
            pt-[clamp(28px,3vw,48px)]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              max-w-[800px]
              text-justify
              text-[clamp(13px,0.9vw,19px)]
              leading-[1.6]
              text-muted
            "
          >
            Every application presents a different set of demands.
            Let&apos;s identify the transfer approach that fits yours.
          </p>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              justify-between
              gap-8
              bg-black
              px-[clamp(18px,2vw,32px)]
              py-[clamp(13px,1vw,18px)]
              text-[clamp(10px,0.65vw,14px)]
              font-semibold
              tracking-[0.08em]
              text-white
              transition-colors
              duration-200
              hover:bg-gold
            "
          >
            TALK TO AN ENGINEER

            <span
              className="
                text-[clamp(16px,1vw,20px)]
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