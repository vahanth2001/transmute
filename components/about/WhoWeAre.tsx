const platformCards = [
  {
    title: "Terramate",
    subtitle: "Ventures LLP",
    text: "Backed by deep industry experience and a long-term commitment to building industrial solutions.",
  },
  {
    title: "BLSX",
    subtitle: "Limited",
    text: "A global partner with engineering expertise and operational reach.",
  },
  {
    title: "TRANSMUTE",
    subtitle: "",
    text: "The integrated transfer-solutions platform delivering flexible hose and steel pipeline technologies for a wide range of industries.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      <div
        className="
          grid
          w-full
          grid-cols-1
          border-b
          border-border
          lg:grid-cols-[43%_57%]
        "
      >
        {/* =====================================================
            LEFT — WHO WE ARE
        ===================================================== */}
        <div
          className="
            min-w-0
            px-[clamp(20px,4vw,90px)]
            py-[clamp(38px,4vw,80px)]
          "
        >
          <div className="w-full max-w-[1100px]">
            {/* EYEBROW */}
            <div
              className="
                mb-[clamp(12px,1.3vw,24px)]
                flex
                items-center
                gap-3
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
                WHO WE ARE
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                font-serif
                font-normal
                text-[clamp(30px,3.5vw,72px)]
                leading-[0.92]
                tracking-[-0.04em]
                text-black
              "
            >
              MORE THAN A PRODUCT.
              <br />

              <span className="text-gold">
                A TRANSFER-SOLUTIONS PLATFORM.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[clamp(18px,1.8vw,32px)]
                max-w-[1000px]
                text-justify
                text-[clamp(12px,0.75vw,18px)]
                leading-[1.55]
                text-muted
              "
            >
              TRANSMUTE brings together engineered flexible hose and steel
              pipeline solutions as a complete transfer system. We combine
              deep application expertise, high-quality manufacturing, and
              real-world experience to help customers solve complex flow
              challenges — from media handling to pressure balance, routing,
              and movement — across the full lifecycle.
            </p>
          </div>
        </div>

        {/* =====================================================
            RIGHT — PLATFORM PARTNERS
        ===================================================== */}
        <div
          className="
            flex
            min-w-0
            flex-col
            justify-center
            px-[clamp(16px,3vw,60px)]
            pb-[clamp(34px,4vw,70px)]
            lg:py-[clamp(38px,4vw,80px)]
          "
        >
          {/* CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-3
              border-y
              border-l
              border-border
            "
          >
            {platformCards.map((card, index) => (
              <div
                key={card.title}
                className={`
                  min-w-0
                  px-[clamp(12px,1.7vw,32px)]
                  py-[clamp(18px,2vw,36px)]
                  ${
                    index !== platformCards.length - 1
                      ? "border-r border-border"
                      : "border-r border-border"
                  }
                `}
              >
                {/* CARD TITLE */}
                <h3
                  className="
                    text-[clamp(15px,1.15vw,25px)]
                    font-bold
                    leading-[1]
                    tracking-[-0.02em]
                    text-black
                  "
                >
                  {card.title}
                </h3>

                {card.subtitle && (
                  <h4
                    className="
                      mt-1
                      text-[clamp(13px,1vw,22px)]
                      font-bold
                      leading-[1]
                      text-black
                    "
                  >
                    {card.subtitle}
                  </h4>
                )}

                {/* CARD TEXT */}
                <p
                  className="
                    mt-[clamp(14px,1.5vw,25px)]
                    text-justify
                    text-[clamp(9px,0.65vw,15px)]
                    leading-[1.45]
                    text-muted
                  "
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM STATEMENT */}
          <div
            className="
              mt-[clamp(14px,1.5vw,24px)]
              flex
              items-center
              justify-end
              gap-3
            "
          >
            <span
              className="
                h-px
                w-[clamp(25px,3vw,60px)]
                shrink-0
                bg-gold
              "
            />

            <span
              className="
                text-[clamp(8px,0.55vw,14px)]
                font-semibold
                tracking-[0.08em]
                text-gold
              "
            >
              STRONGER TOGETHER. A MORE COMPLETE SOLUTION.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
