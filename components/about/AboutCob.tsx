import Link from "next/link";

export default function CollaborationSection() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[46%_54%]">

        {/* LEFT CONTENT */}
        <div
          className="
            flex min-w-0 flex-col justify-center
            px-[clamp(20px,4vw,90px)]
            py-[clamp(40px,5vw,90px)]
          "
        >
          <div className="w-full max-w-[1100px]">

            {/* EYEBROW */}
            <div
              className="
                mb-[clamp(12px,1vw,22px)]
                flex items-center gap-[clamp(8px,0.8vw,14px)]
              "
            >
              <span
                className="
                  h-px shrink-0 bg-gold
                  w-[clamp(24px,3vw,55px)]
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
                BUILT THROUGH COLLABORATION
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                max-w-[1000px]
                font-serif
                font-normal
                text-black
                text-[clamp(32px,4vw,76px)]
                leading-[0.92]
                tracking-[-0.04em]
              "
            >
              COMBINING MARKET
              <br />
              UNDERSTANDING
              <br />
              WITH INDUSTRIAL
              <br />
              <span className="text-gold">
                CAPABILITY.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[clamp(16px,1.8vw,30px)]
                max-w-[900px]
                text-justify
                text-[clamp(12px,0.72vw,18px)]
                leading-[1.55]
                text-muted
              "
            >
              TRANSMUTE is a product of collaboration between Terramate
              Ventures LLP and BLSX Limited, bringing together market
              insight, engineering knowledge and industrial capability
              to create a stronger, more complete transfer-solutions
              platform.
            </p>

            {/* PARTNERS */}
            <div
              className="
                mt-[clamp(22px,2.5vw,40px)]
                grid grid-cols-2
                gap-[clamp(8px,1vw,16px)]
              "
            >
              <div className="border border-border bg-white/40 p-[clamp(12px,1.5vw,24px)]">
                <span
                  className="
                    block
                    text-[clamp(8px,0.5vw,12px)]
                    font-semibold
                    tracking-[0.15em]
                    text-gold
                  "
                >
                  PARTNER
                </span>

                <h3
                  className="
                    mt-2
                    text-[clamp(13px,0.9vw,20px)]
                    font-bold
                    tracking-[0.02em]
                    text-black
                  "
                >
                  TERRAMATE
                  <br />
                  VENTURES LLP
                </h3>
              </div>

              <div className="border border-border bg-white/40 p-[clamp(12px,1.5vw,24px)]">
                <span
                  className="
                    block
                    text-[clamp(8px,0.5vw,12px)]
                    font-semibold
                    tracking-[0.15em]
                    text-gold
                  "
                >
                  PARTNER
                </span>

                <h3
                  className="
                    mt-2
                    text-[clamp(13px,0.9vw,20px)]
                    font-bold
                    tracking-[0.02em]
                    text-black
                  "
                >
                  BLSX
                  <br />
                  LIMITED
                </h3>
              </div>
            </div>

            {/* STATEMENT */}
            <div
              className="
                mt-[clamp(20px,2vw,32px)]
                border-t border-border
                pt-[clamp(12px,1vw,20px)]
              "
            >
              <p
                className="
                  text-[clamp(9px,0.6vw,15px)]
                  font-semibold
                  tracking-[0.08em]
                  text-gold
                "
              >
                ONE COLLABORATION. ONE ENGINEERING PHILOSOPHY.
                ONE TRANSMUTE STANDARD.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative
            min-h-[clamp(320px,48vw,760px)]
            overflow-hidden
          "
        >
          <img
            src="/images/about-collaboration.png"
            alt="Industrial team working at a material transfer facility"
            className="
              absolute inset-0
              h-full w-full
              object-cover
              object-center
            "
          />

          {/* IMAGE OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-black/30
              via-black/5
              to-transparent
            "
          />

          <div
            className="
              absolute inset-x-0 bottom-0
              h-1/2
              bg-gradient-to-t
              from-black/65
              via-black/10
              to-transparent
            "
          />

          {/* LABEL */}
          <div
            className="
              absolute right-0 top-0
              bg-black
              px-[clamp(12px,1.5vw,28px)]
              py-[clamp(9px,1vw,17px)]
            "
          >
            <span
              className="
                text-[clamp(8px,0.55vw,13px)]
                font-semibold
                tracking-[0.18em]
                text-white
              "
            >
              TRANSMUTE
            </span>
          </div>

          {/* IMAGE CAPTION */}
          <div
            className="
              absolute bottom-0 left-0
              w-full
              p-[clamp(20px,4vw,70px)]
            "
          >
            <div className="flex items-end gap-3">

              <span
                className="
                  h-[clamp(35px,4vw,70px)]
                  w-px shrink-0
                  bg-gold
                "
              />

              <div className="min-w-0">

                <span
                  className="
                    block
                    text-[clamp(8px,0.55vw,13px)]
                    tracking-[0.18em]
                    text-white/70
                  "
                >
                  INDUSTRIAL CAPABILITY
                </span>

                <span
                  className="
                    mt-1 block
                    text-[clamp(12px,1vw,22px)]
                    font-semibold
                    tracking-[0.04em]
                    text-white
                  "
                >
                  MARKET KNOWLEDGE. ENGINEERING. EXECUTION.
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PRINCIPLE BAR */}
      <div
        className="
          flex
          min-h-[clamp(55px,6vw,90px)]
          items-center
          justify-center
          border-y border-border
          px-[clamp(16px,4vw,80px)]
          py-[clamp(14px,1.5vw,24px)]
          text-center
        "
      >
        <p
          className="
            text-[clamp(9px,0.65vw,15px)]
            font-semibold
            tracking-[0.12em]
            text-black
          "
        >
          STRONGER TOGETHER. A MORE COMPLETE TRANSFER-SOLUTIONS PLATFORM.
        </p>
      </div>
    </section>
  );
}