const systemStages = [
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
    text: "Provides strength for longer runs and straight sections.",
  },
  {
    title: "FLEXIBLE HOSE SECTION",
    text: "Accommodates expansion and dynamic movement.",
  },
  {
    title: "STEEL PIPELINE",
    text: "Maintains flow and discharge with minimum reliability.",
  },
  {
    title: "DISCHARGE",
    text: "Completes the transfer system.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="w-full overflow-hidden bg-black text-white">
      <div
        className="
          relative
          mx-auto
          w-full
          px-[clamp(16px,3vw,120px)]
          py-[clamp(40px,5vw,90px)]
        "
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/images/about-philosophy.png"
            alt=""
            className="h-full w-full object-cover"
          />

          <div
            className="
              absolute
              inset-0
              bg-black/70
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black
              via-black/75
              to-black/30
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-transparent
              to-black/30
            "
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          {/* EYEBROW */}
          <div
            className="
              mb-[clamp(12px,1.2vw,22px)]
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
              THE TRANSMUTE PHILOSOPHY
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              max-w-[1100px]
              font-serif
              text-[clamp(32px,4vw,78px)]
              font-normal
              leading-[0.92]
              tracking-[-0.04em]
              text-white
            "
          >
            ENGINEER THE SYSTEM —
            <br />
            NOT JUST THE PIPE.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-[clamp(14px,1.5vw,26px)]
              max-w-[1050px]
              text-justify
              text-[clamp(10px,0.7vw,17px)]
              leading-[1.55]
              text-white/75
            "
          >
            Different sections of a material transfer system operate under
            different conditions. Some require the flexibility of hose,
            others the strength of steel. TRANSMUTE engineers the complete
            system, matching each technology to the right role for a safer,
            more reliable and longer-lasting flow solution.
          </p>

          {/* RIGHT SIDE LABEL */}
          <div
            className="
              absolute
              right-0
              top-[clamp(30px,4vw,70px)]
              hidden
              max-w-[190px]
              border-l
              border-gold
              pl-4
              lg:block
            "
          >
            <span
              className="
                block
                text-[clamp(8px,0.5vw,12px)]
                font-semibold
                tracking-[0.14em]
                text-white/60
              "
            >
              DIFFERENT CONDITIONS.
            </span>

            <span
              className="
                mt-1
                block
                text-[clamp(9px,0.6vw,14px)]
                font-semibold
                tracking-[0.08em]
                text-white
              "
            >
              ONE ENGINEERED SYSTEM.
            </span>
          </div>

          {/* PIPELINE VISUAL */}
          <div
            className="
              relative
              mt-[clamp(35px,5vw,80px)]
              h-[clamp(90px,13vw,190px)]
              overflow-hidden
            "
          >
            {/* PIPE */}
            <div
              className="
                absolute
                left-0
                right-0
                top-1/2
                h-[clamp(30px,4vw,58px)]
                -translate-y-1/2
                bg-gradient-to-b
                from-neutral-500
                via-neutral-200
                to-neutral-600
                shadow-[0_8px_20px_rgba(0,0,0,0.5)]
              "
            />

            {/* FLEX SECTIONS */}
            <div
              className="
                absolute
                left-[16%]
                top-1/2
                h-[clamp(36px,4.8vw,68px)]
                w-[12%]
                -translate-y-1/2
                rounded-full
                bg-neutral-900
                shadow-inner
              "
            />

            <div
              className="
                absolute
                left-[57%]
                top-1/2
                h-[clamp(36px,4.8vw,68px)]
                w-[12%]
                -translate-y-1/2
                rounded-full
                bg-neutral-900
                shadow-inner
              "
            />

            {/* GOLD FLANGES */}
            {[15, 28, 56, 69, 82].map((position) => (
              <span
                key={position}
                className="
                  absolute
                  top-1/2
                  h-[clamp(45px,5.5vw,78px)]
                  w-[clamp(7px,0.8vw,13px)]
                  -translate-y-1/2
                  bg-gold
                "
                style={{ left: `${position}%` }}
              />
            ))}
          </div>

          {/* SYSTEM STAGES */}
          <div
            className="
              grid
              grid-cols-2
              border-t
              border-white/20
              sm:grid-cols-3
              lg:grid-cols-6
            "
          >
            {systemStages.map((stage, index) => (
              <div
                key={`${stage.title}-${index}`}
                className="
                  min-w-0
                  border-b
                  border-white/15
                  px-[clamp(9px,1.2vw,24px)]
                  py-[clamp(16px,1.8vw,30px)]
                  lg:border-b-0
                  lg:border-r
                  last:border-r-0
                "
              >
                <span
                  className="
                    block
                    text-[clamp(8px,0.5vw,12px)]
                    font-semibold
                    tracking-[0.14em]
                    text-gold
                  "
                >
                  0{index + 1}
                </span>

                <h3
                  className="
                    mt-1.5
                    text-[clamp(9px,0.6vw,14px)]
                    font-bold
                    leading-[1.2]
                    tracking-[0.03em]
                    text-white
                  "
                >
                  {stage.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-justify
                    text-[clamp(8px,0.55vw,12px)]
                    leading-[1.45]
                    text-white/65
                  "
                >
                  {stage.text}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM STATEMENT */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-[clamp(8px,1vw,16px)]
              pt-[clamp(22px,2.5vw,40px)]
              text-center
            "
          >
            <span
              className="
                hidden
                h-px
                w-[clamp(25px,3vw,55px)]
                bg-gold
                sm:block
              "
            />

            <p
              className="
                text-[clamp(9px,0.65vw,14px)]
                font-semibold
                tracking-[0.12em]
                text-gold
              "
            >
              ONE SYSTEM. MULTIPLE TECHNOLOGIES. ONE STANDARD OF RELIABLE FLOW.
            </p>

            <span
              className="
                hidden
                h-px
                w-[clamp(25px,3vw,55px)]
                bg-gold
                sm:block
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}