import Link from "next/link";

const heroPoints = [
  {
    number: "01",
    title: "APPLICATION FIRST",
  },
  {
    number: "02",
    title: "ENGINEERING WITH PURPOSE",
  },
  {
    number: "03",
    title: "RELIABILITY IN OPERATION",
  },
];

export default function AboutHero() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      {/* =====================================================
          HERO
      ===================================================== */}
      <div
        className="
          grid
          w-full
          grid-cols-1
          lg:grid-cols-[49%_51%]
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}
        <div
          className="
            flex
            min-w-0
            flex-col
            justify-center
            px-[clamp(18px,4vw,100px)]
            py-[clamp(36px,5vw,90px)]
          "
        >
          <div className="w-full max-w-[1200px]">
            {/* EYEBROW */}
            <div
              className="
                mb-[clamp(14px,1.5vw,30px)]
                flex
                items-center
                gap-[clamp(8px,0.8vw,16px)]
              "
            >
              <span
                className="
                  h-px
                  w-[clamp(24px,3vw,65px)]
                  shrink-0
                  bg-gold
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[clamp(9px,0.55vw,15px)]
                  font-semibold
                  tracking-[0.2em]
                  text-gold
                "
              >
                ABOUT TRANSMUTE
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="
                max-w-[1150px]
                font-serif
                font-normal
                text-[clamp(36px,5vw,100px)]
                leading-[0.9]
                tracking-[-0.045em]
                text-black
              "
            >
              ENGINEERED FOR
              <br />

              <span className="text-gold">
                SMOOTHER, MORE
              </span>

              <br />

              RELIABLE FLOW.
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[clamp(18px,2vw,34px)]
                max-w-[950px]
                text-justify
                text-[clamp(12px,0.75vw,19px)]
                leading-[1.55]
                text-muted
              "
            >
              TRANSMUTE is an engineered transfer-solutions brand created
              to address one fundamental reality: every part of a material
              transfer system operates under different conditions. From
              wear to aggressive material slurry, from remote sites to
              urban industrial environments, we help industries move
              critical materials more safely, efficiently, and reliably
              through application-driven engineering and a smarter,
              more integrated approach.
            </p>

            {/* =================================================
                BUTTONS — ALWAYS ROW
            ================================================= */}
            <div
              className="
                mt-[clamp(20px,2.5vw,40px)]
                flex
                w-full
                flex-row
                flex-nowrap
                gap-[clamp(7px,1vw,18px)]
              "
            >
              {/* PRIMARY */}
              <Link
                href="/solutions"
                className="
                  group
                  flex
                  min-w-0
                  flex-1
                  items-center
                  justify-center
                  gap-[clamp(5px,0.6vw,12px)]
                  bg-gold
                  px-[clamp(10px,1.5vw,30px)]
                  py-[clamp(11px,0.9vw,18px)]
                  text-center
                  text-[clamp(9px,0.65vw,16px)]
                  font-semibold
                  tracking-[0.02em]
                  text-white
                  transition-all
                  duration-200
                  hover:bg-black
                "
              >
                <span className="min-w-0">
                  Explore Our Solutions
                </span>

                <span
                  className="
                    shrink-0
                    text-[clamp(13px,0.9vw,20px)]
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>

              {/* SECONDARY */}
              <Link
                href="/contact"
                className="
                  flex
                  min-w-0
                  flex-1
                  items-center
                  justify-center
                  gap-[clamp(5px,0.6vw,12px)]
                  border
                  border-black
                  px-[clamp(10px,1.5vw,30px)]
                  py-[clamp(11px,0.9vw,18px)]
                  text-center
                  text-[clamp(9px,0.65vw,16px)]
                  font-semibold
                  tracking-[0.02em]
                  text-black
                  transition-all
                  duration-200
                  hover:bg-black
                  hover:text-white
                "
              >
                <span className="min-w-0">
                  Talk to an Engineer
                </span>

                <span
                  className="
                    shrink-0
                    text-[clamp(13px,0.9vw,20px)]
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT IMAGE
        ================================================= */}
        <div
          className="
            relative
            min-h-[clamp(300px,62vw,720px)]
            min-w-0
            overflow-hidden
            lg:min-h-[clamp(500px,42vw,900px)]
          "
        >
          <img
            src="/images/about-hero.png"
            alt="Transmute industrial transfer pipeline"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* LEFT BLEND */}
          <div
            className="
              absolute
              inset-y-0
              left-0
              w-[35%]
              bg-gradient-to-r
              from-cream/95
              via-cream/35
              to-transparent
            "
          />

          {/* BOTTOM FADE */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[45%]
              bg-gradient-to-t
              from-black/70
              via-black/15
              to-transparent
            "
          />

          {/* TOP LABEL */}
          <div
            className="
              absolute
              right-0
              top-0
              bg-black
              px-[clamp(12px,1.5vw,28px)]
              py-[clamp(9px,1vw,17px)]
            "
          >
            <span
              className="
                text-[clamp(8px,0.55vw,14px)]
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
              absolute
              bottom-0
              left-0
              w-full
              p-[clamp(18px,3vw,60px)]
            "
          >
            <div className="flex items-end gap-3">
              <span
                className="
                  h-[clamp(34px,4vw,70px)]
                  w-px
                  shrink-0
                  bg-gold
                "
              />

              <div className="min-w-0">
                <span
                  className="
                    block
                    text-[clamp(8px,0.55vw,14px)]
                    tracking-[0.18em]
                    text-white/70
                  "
                >
                  ENGINEERED TRANSFER SYSTEMS
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[clamp(11px,0.9vw,22px)]
                    font-semibold
                    tracking-[0.04em]
                    text-white
                  "
                >
                  BUILT AROUND THE APPLICATION.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM POINTS
          ALWAYS 3 COLUMNS
      ===================================================== */}
      <div
        className="
          grid
          w-full
          grid-cols-3
          border-y
          border-border
          bg-cream
        "
      >
        {heroPoints.map((point, index) => (
          <div
            key={point.number}
            className={`
              min-w-0
              px-[clamp(10px,2.5vw,50px)]
              py-[clamp(13px,1.5vw,28px)]
              ${
                index !== heroPoints.length - 1
                  ? "border-r border-border"
                  : ""
              }
            `}
          >
            <span
              className="
                block
                text-[clamp(8px,0.55vw,14px)]
                font-semibold
                tracking-[0.15em]
                text-gold
              "
            >
              {point.number}
            </span>

            <span
              className="
                mt-1
                block
                break-words
                text-[clamp(8px,0.65vw,15px)]
                font-bold
                leading-[1.15]
                tracking-[0.04em]
                text-black
              "
            >
              {point.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
