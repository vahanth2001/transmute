import Link from "next/link";

const systemPoints = [
  {
    type: "steel",
    title: "TRANSMUTE STEEL",
    subtitle: "Long Fixed Run",
  },
  {
    type: "flex",
    title: "TRANSMUTE FLEX",
    subtitle: "Vibration Zone",
  },
  {
    type: "steel",
    title: "TRANSMUTE STEEL",
    subtitle: "Main Transfer Route",
  },
  {
    type: "flex",
    title: "TRANSMUTE FLEX",
    subtitle: "Movement / Discharge Zone",
  },
];

export default function Comparison() {
  return (
    <section className="relative w-full overflow-hidden bg-[#e9e1d2]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/home1.png"
          alt=""
          className="
            h-full
            w-full
            object-cover
            opacity-45
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#eee7da]/85
            via-[#eee7da]/45
            to-[#eee7da]/90
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          w-full
          px-[clamp(18px,5vw,120px)]
          py-[clamp(40px,4.5vw,90px)]
        "
      >
        {/* EYEBROW */}
        <div
          className="
            flex
            items-center
            justify-center
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
            RIGHT TECHNOLOGY. RIGHT LOCATION.
          </span>

          <span
            className="
              h-px
              w-[clamp(24px,2.2vw,55px)]
              shrink-0
              bg-gold
            "
          />
        </div>

        {/* HEADING */}
        <h2
          className="
            mt-[clamp(9px,0.8vw,18px)]
            text-center
            font-serif
            font-normal
            text-[clamp(28px,3vw,66px)]
            leading-[0.95]
            tracking-[-0.04em]
            text-black
          "
        >
          ENGINEER THE SYSTEM — NOT JUST THE PIPE.
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            mt-[clamp(10px,0.9vw,18px)]
            max-w-[1050px]
            text-center
            text-justify
            text-[clamp(10px,0.7vw,16px)]
            leading-[1.5]
            text-black/65
          "
        >
          Transmute is built around understanding how the complete transfer
          system operates and selecting the appropriate technology for each
          critical section.
        </p>

        {/* SYSTEM DIAGRAM */}
        <div
          className="
            mt-[clamp(34px,4vw,80px)]
            w-full
          "
        >
          {/* PIPELINE */}
          <div className="relative">
            {/* MAIN PIPE */}
            <div
              className="
                absolute
                left-0
                right-0
                top-1/2
                hidden
                h-[clamp(8px,0.7vw,16px)]
                -translate-y-1/2
                bg-[#6f6d68]
                shadow-[0_2px_5px_rgba(0,0,0,0.2)]
                lg:block
              "
            />

            <div
              className="
                absolute
                left-0
                right-0
                top-1/2
                hidden
                h-[clamp(2px,0.2vw,4px)]
                -translate-y-1/2
                bg-white/60
                lg:block
              "
            />

            {/* ENDPOINTS + COMPONENTS */}
            <div
              className="
                grid
                grid-cols-1
                gap-5
                lg:grid-cols-[0.75fr_1.2fr_1.2fr_1.2fr_1.2fr_0.75fr]
                lg:items-center
                lg:gap-0
              "
            >
              {/* PROCESS */}
              <div className="relative z-10 flex justify-start lg:justify-center">
                <div
                  className="
                    flex
                    min-h-[clamp(45px,4vw,70px)]
                    w-full
                    max-w-[220px]
                    items-center
                    justify-center
                    border
                    border-black/20
                    bg-white/90
                    px-4
                    text-center
                  "
                >
                  <span
                    className="
                      text-[clamp(9px,0.65vw,14px)]
                      font-bold
                      leading-[1.15]
                      text-black
                    "
                  >
                    PROCESS /
                    <br />
                    PUMP
                  </span>
                </div>
              </div>

              {/* SYSTEM COMPONENTS */}
              {systemPoints.map((point) => (
                <div
                  key={`${point.title}-${point.subtitle}`}
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      w-full
                      max-w-[300px]
                      text-center
                    "
                  >
                    {/* PIPE */}
                    <div
                      className={`
                        mx-auto
                        h-[clamp(35px,4vw,70px)]
                        w-[clamp(110px,12vw,240px)]
                        rounded-[999px]
                        border-[clamp(5px,0.5vw,10px)]
                        shadow-[0_3px_7px_rgba(0,0,0,0.2)]
                        ${
                          point.type === "flex"
                            ? "border-[#17191b] bg-[#242629]"
                            : "border-[#777570] bg-[#a9a7a0]"
                        }
                      `}
                    >
                      {point.type === "flex" && (
                        <div
                          className="
                            flex
                            h-full
                            items-center
                            justify-center
                            text-[clamp(7px,0.45vw,10px)]
                            font-semibold
                            tracking-[0.12em]
                            text-white/70
                          "
                        >
                          TRANSMUTE
                        </div>
                      )}
                    </div>

                    {/* LABEL */}
                    <div className="mt-[clamp(9px,0.8vw,16px)]">
                      <span
                        className="
                          block
                          text-[clamp(8px,0.58vw,13px)]
                          font-bold
                          tracking-[0.04em]
                          text-black
                        "
                      >
                        {point.title}
                      </span>

                      <span
                        className="
                          mt-1
                          block
                          text-[clamp(7px,0.5vw,11px)]
                          text-black/55
                        "
                      >
                        {point.subtitle}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* DISCHARGE */}
              <div className="relative z-10 flex justify-start lg:justify-center">
                <div
                  className="
                    flex
                    min-h-[clamp(45px,4vw,70px)]
                    w-full
                    max-w-[220px]
                    items-center
                    justify-center
                    border
                    border-black/20
                    bg-white/90
                    px-4
                    text-center
                  "
                >
                  <span
                    className="
                      text-[clamp(9px,0.65vw,14px)]
                      font-bold
                      leading-[1.15]
                      text-black
                    "
                  >
                    DISCHARGE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div
          className="
            mt-[clamp(34px,3.5vw,70px)]
            flex
            items-center
            justify-center
            gap-[clamp(8px,1vw,18px)]
            border-t
            border-black/15
            pt-[clamp(16px,1.5vw,30px)]
          "
        >
          <span
            className="
              h-px
              w-[clamp(24px,2vw,50px)]
              bg-gold
            "
          />

          <p
            className="
              text-center
              text-[clamp(9px,0.65vw,14px)]
              font-semibold
              tracking-[0.18em]
              text-black
            "
          >
            ONE SYSTEM. MULTIPLE TECHNOLOGIES. ONE STANDARD OF RELIABLE FLOW.
          </p>

          <span
            className="
              h-px
              w-[clamp(24px,2vw,50px)]
              bg-gold
            "
          />
        </div>
      </div>
    </section>
  );
}