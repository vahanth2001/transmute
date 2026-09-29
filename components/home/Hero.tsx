import Link from "next/link";

const heroStats = [
  {
    number: "01",
    title: "ENGINEERED FOR WEAR",
    text: "Designed for demanding abrasive applications.",
  },
  {
    number: "02",
    title: "BUILT FOR MOVEMENT",
    text: "Flexible solutions for dynamic operating zones.",
  },
  {
    number: "03",
    title: "DESIGNED FOR CONTINUITY",
    text: "Reliable transfer solutions engineered to reduce disruption.",
  },
];

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      <div
        className="
          mx-auto
          w-full
          px-[clamp(12px,3vw,120px)]
          py-[clamp(12px,2vw,48px)]
        "
      >
        {/* HERO */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-stretch
            border
            border-border
            lg:grid-cols-[48%_52%]
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              min-w-0
              flex-col
              justify-center
              p-[clamp(20px,3.5vw,72px)]
            "
          >
            <div
              className="
                w-full
                max-w-[1200px]
              "
            >
              {/* EYEBROW */}
              <div
                className="
                  mb-[clamp(16px,2vw,38px)]
                  flex
                  items-center
                  justify-start
                  gap-[clamp(7px,0.8vw,16px)]
                "
              >
                <span
                  className="
                    h-px
                    w-[clamp(24px,2.8vw,65px)]
                    shrink-0
                    bg-gold
                  "
                />

                <span
                  className="
                    whitespace-nowrap
                    text-[clamp(10px,0.72vw,18px)]
                    font-semibold
                    tracking-[0.19em]
                    text-gold
                  "
                >
                  ENGINEERED TRANSFER SOLUTIONS
                </span>

                <span
                  className="
                    h-px
                    w-[clamp(24px,2.8vw,65px)]
                    shrink-0
                    bg-gold
                  "
                />
              </div>

              {/* HEADING */}
              <h1
                className="
                  font-serif
                  font-normal
                  text-[clamp(38px,4.8vw,110px)]
                  leading-[0.92]
                  tracking-[-0.045em]
                  text-black
                "
              >
                ENGINEERED FOR
                <br />
                SMOOTHER, MORE
                <br />
                RELIABLE <span className="text-gold">FLOW.</span>
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-[clamp(16px,1.8vw,34px)]
                  w-full
                  max-w-[1100px]
                  text-justify
                  text-[clamp(14px,0.95vw,22px)]
                  leading-[1.5]
                  text-muted
                "
              >
                From flexible high-wear sections to engineered steel
                pipelines, Transmute delivers the right transfer solution
                for each part of the system — helping operators move with
                greater continuity, reliability, and lifecycle value.
              </p>

              {/* BUTTONS */}
              <div
                className="
                  mt-[clamp(18px,2vw,38px)]
                  flex
                  w-full
                  max-w-[1100px]
                  flex-row
                  flex-nowrap
                  items-stretch
                  justify-start
                  gap-[clamp(7px,1vw,20px)]
                "
              >
                {/* PRIMARY BUTTON */}
                <Link
                  href="/solutions"
                  className="
                    group
                    flex
                    min-w-0
                    flex-1
                    items-center
                    justify-center
                    gap-[clamp(5px,0.7vw,13px)]
                    bg-black
                    px-[clamp(10px,1.5vw,32px)]
                    py-[clamp(11px,1.1vw,20px)]
                    text-center
                    text-[clamp(10px,0.82vw,18px)]
                    font-semibold
                    leading-tight
                    tracking-[0.02em]
                    text-white
                    transition-colors
                    hover:bg-gold
                  "
                >
                  <span className="min-w-0">
                    Explore Transmute Solutions
                  </span>

                  <span
                    className="
                      shrink-0
                      text-[clamp(13px,1vw,21px)]
                      transition-transform
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>

                {/* SECONDARY BUTTON */}
                <Link
                  href="/contact"
                  className="
                    flex
                    min-w-0
                    flex-1
                    items-center
                    justify-center
                    border
                    border-black
                    px-[clamp(10px,1.5vw,32px)]
                    py-[clamp(11px,1.1vw,20px)]
                    text-center
                    text-[clamp(10px,0.82vw,18px)]
                    font-semibold
                    leading-tight
                    tracking-[0.02em]
                    text-black
                    transition-colors
                    hover:bg-black
                    hover:text-white
                  "
                >
                  Request Application Review
                </Link>
              </div>

              {/* THREE STATS */}
              <div
                className="
                  mt-[clamp(24px,3vw,52px)]
                  grid
                  grid-cols-3
                  gap-[clamp(8px,1.8vw,36px)]
                  border-t
                  border-border
                  pt-[clamp(14px,1.6vw,30px)]
                "
              >
                {heroStats.map((item) => (
                  <div
                    key={item.number}
                    className="
                      min-w-0
                      text-left
                    "
                  >
                    {/* NUMBER */}
                    <span
                      className="
                        block
                        text-[clamp(10px,0.7vw,17px)]
                        font-semibold
                        tracking-[0.14em]
                        text-gold
                      "
                    >
                      {item.number}
                    </span>

                    {/* TITLE */}
                    <h2
                      className="
                        mt-[clamp(3px,0.25vw,7px)]
                        break-words
                        text-[clamp(10px,0.85vw,19px)]
                        font-bold
                        leading-[1.15]
                        tracking-[0.045em]
                        text-black
                      "
                    >
                      {item.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-[clamp(4px,0.4vw,9px)]
                        w-full
                        max-w-[360px]
                        break-words
                        text-[clamp(10px,0.8vw,18px)]
                        leading-[1.4]
                        text-muted
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              min-w-0
              overflow-hidden
              min-h-[clamp(280px,60vw,700px)]
              lg:min-h-0
            "
          >
            <img
              src="/images/hero.png"
              alt="Engineered industrial transfer pipeline"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* IMAGE OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
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
                px-[clamp(11px,1.3vw,26px)]
                py-[clamp(9px,0.9vw,18px)]
              "
            >
              <span
                className="
                  text-[clamp(10px,0.82vw,18px)]
                  font-semibold
                  tracking-[0.16em]
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
                p-[clamp(18px,2.7vw,52px)]
              "
            >
              <div
                className="
                  flex
                  items-end
                  justify-start
                  gap-[clamp(8px,1vw,16px)]
                "
              >
                <span
                  className="
                    h-[clamp(30px,3vw,66px)]
                    w-px
                    shrink-0
                    bg-gold
                  "
                />

                <div className="min-w-0 text-left">
                  <span
                    className="
                      block
                      text-[clamp(9px,0.85vw,16px)]
                      tracking-[0.16em]
                      text-white/70
                    "
                  >
                    TRANSFER SYSTEMS
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[clamp(11px,0.95vw,19px)]
                      font-semibold
                      tracking-[0.05em]
                      text-white
                    "
                  >
                    ENGINEERED FOR CONTINUITY.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            flex
            items-start
            justify-center
            gap-[clamp(9px,1vw,18px)]
            border-x
            border-b
            border-border
            px-[clamp(14px,3vw,120px)]
            py-[clamp(14px,1.6vw,30px)]
            text-left
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[clamp(11px,0.85vw,18px)]
              leading-[1.4]
              text-muted
            "
          >
            One system. Multiple technologies. One performance standard.
          </p>

          <Link
            href="/why-transmute"
            className="
              group
              flex
              shrink-0
              items-center
              gap-[clamp(8px,0.8vw,15px)]
              text-[clamp(10px,0.82vw,17px)]
              font-semibold
              tracking-[0.12em]
              text-black
            "
          >
            <span className="border-b border-black pb-1">
              WHY TRANSMUTE
            </span>

            <span
              className="
                text-gold
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