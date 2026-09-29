import Link from "next/link";

export default function AboutClosingCTA() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      <div
        className="
          grid w-full
          grid-cols-1
          lg:grid-cols-[48%_52%]
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            relative z-10
            flex min-w-0
            flex-col justify-center
            px-[clamp(20px,4vw,80px)]
            py-[clamp(40px,4vw,80px)]
          "
        >
          <div className="w-full max-w-[1100px]">

            {/* BRAND */}
            <h2
              className="
                font-serif
                font-normal
                text-black
                text-[clamp(38px,5vw,90px)]
                leading-[0.9]
                tracking-[-0.045em]
              "
            >
              TRANSMUTE
            </h2>

            {/* TAGLINE */}
            <h3
              className="
                mt-[clamp(4px,0.5vw,10px)]
                font-serif
                font-normal
                text-[clamp(20px,2.2vw,42px)]
                leading-[1]
                tracking-[-0.025em]
                text-gold
              "
            >
              ENGINEERED FOR SMOOTHER,
              <br />
              MORE RELIABLE FLOW.
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[clamp(14px,1.5vw,26px)]
                max-w-[900px]
                text-justify
                text-[clamp(11px,0.7vw,17px)]
                leading-[1.55]
                text-muted
              "
            >
              We're here to help you move what matters — more safely,
              more efficiently and with greater confidence. Discover how
              TRANSMUTE can support your operations with engineered
              transfer solutions built for the real world.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-[clamp(18px,2vw,32px)]
                flex w-full
                flex-row flex-nowrap
                gap-[clamp(8px,1vw,18px)]
              "
            >
              <Link
                href="/solutions"
                className="
                  group
                  inline-flex min-w-0 flex-1
                  items-center justify-center
                  gap-3
                  bg-gold
                  px-[clamp(12px,1.5vw,28px)]
                  py-[clamp(11px,0.9vw,17px)]
                  text-center
                  text-[clamp(9px,0.65vw,15px)]
                  font-semibold
                  tracking-[0.02em]
                  text-white
                  transition-colors
                  hover:bg-black
                "
              >
                <span>Explore Our Solutions</span>

                <span
                  className="
                    shrink-0
                    text-[clamp(13px,0.9vw,19px)]
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="
                  group
                  inline-flex min-w-0 flex-1
                  items-center justify-center
                  gap-3
                  border border-black
                  px-[clamp(12px,1.5vw,28px)]
                  py-[clamp(11px,0.9vw,17px)]
                  text-center
                  text-[clamp(9px,0.65vw,15px)]
                  font-semibold
                  tracking-[0.02em]
                  text-black
                  transition-colors
                  hover:bg-black
                  hover:text-white
                "
              >
                <span>Talk to an Engineer</span>

                <span
                  className="
                    shrink-0
                    text-[clamp(13px,0.9vw,19px)]
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative
            min-h-[clamp(300px,45vw,650px)]
            min-w-0
            overflow-hidden
          "
        >
          <img
            src="/images/about-cta.png"
            alt="Transmute engineered transfer pipeline"
            className="
              absolute inset-0
              h-full w-full
              object-cover
              object-center
            "
          />

          {/* LEFT FADE */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-cream/95
              via-cream/25
              to-transparent
            "
          />

          {/* BOTTOM FADE */}
          <div
            className="
              absolute inset-x-0 bottom-0
              h-1/2
              bg-gradient-to-t
              from-black/35
              via-transparent
              to-transparent
            "
          />

          {/* IMAGE LABEL */}
          <div
            className="
              absolute
              right-0 top-0
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
        </div>
      </div>
    </section>
  );
}