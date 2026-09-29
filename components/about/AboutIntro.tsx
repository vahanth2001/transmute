export default function AboutIntroduction() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      <div
        className="
          mx-auto w-full
          px-[clamp(16px,4vw,120px)]
          py-[clamp(56px,8vw,140px)]
        "
      >
        <div
          className="
            grid w-full
            grid-cols-1
            gap-[clamp(36px,6vw,120px)]
            lg:grid-cols-[38%_62%]
            lg:items-start
          "
        >
          {/* LEFT — SECTION LABEL */}
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
                WHY TRANSMUTE
              </span>
            </div>

            <h2
              className="
                mt-[clamp(18px,2vw,34px)]
                max-w-[700px]
                font-serif
                text-[clamp(32px,4vw,78px)]
                font-normal
                leading-[0.94]
                tracking-[-0.04em]
                text-black
              "
            >
              ONE SYSTEM.
              <br />
              <span className="text-gold">DIFFERENT DEMANDS.</span>
            </h2>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="min-w-0">
            <p
              className="
                max-w-[1000px]
                text-justify
                text-[clamp(14px,1vw,22px)]
                leading-[1.7]
                text-muted
              "
            >
              Material transfer systems rarely operate under one set of
              conditions. Different sections experience different levels of
              abrasion, movement, pressure, temperature, and environmental
              exposure.
            </p>

            <p
              className="
                mt-[clamp(20px,2.5vw,42px)]
                max-w-[1000px]
                text-justify
                text-[clamp(14px,1vw,22px)]
                leading-[1.7]
                text-muted
              "
            >
              Transmute approaches the system as a whole — selecting the
              appropriate technology for each operating zone rather than
              forcing one solution across every application.
            </p>

            {/* ENGINEERING PRINCIPLES */}
            <div
              className="
                mt-[clamp(36px,5vw,80px)]
                grid grid-cols-3
                border-y border-border
              "
            >
              <div
                className="
                  min-w-0
                  border-r border-border
                  px-[clamp(10px,2vw,36px)]
                  py-[clamp(18px,2vw,32px)]
                "
              >
                <span
                  className="
                    block
                    text-[clamp(9px,0.6vw,14px)]
                    font-semibold
                    tracking-[0.15em]
                    text-gold
                  "
                >
                  01
                </span>

                <h3
                  className="
                    mt-2
                    text-[clamp(10px,0.8vw,17px)]
                    font-bold
                    leading-[1.2]
                    tracking-[0.04em]
                    text-black
                  "
                >
                  APPLICATION
                  <br />
                  FIRST
                </h3>
              </div>

              <div
                className="
                  min-w-0
                  border-r border-border
                  px-[clamp(10px,2vw,36px)]
                  py-[clamp(18px,2vw,32px)]
                "
              >
                <span
                  className="
                    block
                    text-[clamp(9px,0.6vw,14px)]
                    font-semibold
                    tracking-[0.15em]
                    text-gold
                  "
                >
                  02
                </span>

                <h3
                  className="
                    mt-2
                    text-[clamp(10px,0.8vw,17px)]
                    font-bold
                    leading-[1.2]
                    tracking-[0.04em]
                    text-black
                  "
                >
                  ENGINEERED
                  <br />
                  WITH PURPOSE
                </h3>
              </div>

              <div
                className="
                  min-w-0
                  px-[clamp(10px,2vw,36px)]
                  py-[clamp(18px,2vw,32px)]
                "
              >
                <span
                  className="
                    block
                    text-[clamp(9px,0.6vw,14px)]
                    font-semibold
                    tracking-[0.15em]
                    text-gold
                  "
                >
                  03
                </span>

                <h3
                  className="
                    mt-2
                    text-[clamp(10px,0.8vw,17px)]
                    font-bold
                    leading-[1.2]
                    tracking-[0.04em]
                    text-black
                  "
                >
                  BUILT FOR
                  <br />
                  CONTINUITY
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}