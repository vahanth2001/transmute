const approach = [
  {
    number: "01",
    title: "Understand\nthe Application",
    text: "Evaluate media, pressure, movement and routing conditions.",
  },
  {
    number: "02",
    title: "Engineer\nthe Solution",
    text: "Select the appropriate flexible or steel solution for each section.",
  },
  {
    number: "03",
    title: "Integrate\nthe System",
    text: "Engineer interfaces, connections and transitions.",
  },
  {
    number: "04",
    title: "Support\nLifecycle Performance",
    text: "Focus on reliability, maintainability and long-term value.",
  },
];

const customers = [
  "BHP",
  "RioTinto",
  "VALE",
  "CAT",
  "TECHNIP",
  "linkedin",
];

export default function TrustedSection() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      <div
        className="
          grid
          w-full
          grid-cols-1
          border-t
          border-border
          lg:grid-cols-[1.15fr_0.85fr]
        "
      >
        {/* LEFT — TRANSMUTE APPROACH */}
        <div
          className="
            min-w-0
            border-b
            border-border
            px-[clamp(18px,5vw,120px)]
            py-[clamp(38px,4vw,80px)]
            lg:border-b-0
            lg:border-r
          "
        >
          {/* EYEBROW */}
          <div
            className="
              flex
              items-center
              justify-start
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
              THE TRANSMUTE APPROACH
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mt-[clamp(10px,0.8vw,18px)]
              max-w-[950px]
              font-serif
              font-normal
              text-[clamp(28px,2.8vw,62px)]
              leading-[0.95]
              tracking-[-0.04em]
              text-black
            "
          >
            FROM COMPONENT SELECTION
            <br />
            TO SYSTEM PERFORMANCE.
          </h2>

          {/* APPROACH STEPS */}
          <div
            className="
              mt-[clamp(30px,3vw,58px)]
              grid
              grid-cols-1
              border-t
              border-border
              sm:grid-cols-2
            "
          >
            {approach.map((item, index) => (
              <div
                key={item.number}
                className={`
                  min-w-0
                  py-[clamp(18px,1.7vw,34px)]
                  pr-[clamp(14px,2vw,38px)]
                  ${
                    index >= 2
                      ? "border-t border-border"
                      : ""
                  }
                  ${
                    index % 2 === 1
                      ? "sm:border-l sm:border-border sm:pl-[clamp(14px,2vw,38px)]"
                      : ""
                  }
                `}
              >
                {/* NUMBER */}
                <span
                  className="
                    block
                    text-[clamp(9px,0.62vw,13px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black
                  "
                >
                  {item.number}
                </span>

                {/* TITLE */}
                <h3
                  className="
                    mt-[clamp(10px,0.8vw,16px)]
                    whitespace-pre-line
                    text-[clamp(11px,0.78vw,17px)]
                    font-bold
                    leading-[1.12]
                    tracking-[0.02em]
                    text-black
                  "
                >
                  {item.title}
                </h3>

                {/* TEXT */}
                <p
                  className="
                    mt-[clamp(7px,0.6vw,12px)]
                    max-w-[420px]
                    text-[clamp(9px,0.58vw,14px)]
                    leading-[1.45]
                    text-black/60
                  "
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — TRUST */}
        <div
          className="
            min-w-0
            grid
            grid-cols-1
            md:grid-cols-[1fr_auto]
          "
        >
          {/* TRUSTED */}
          <div
            className="
              min-w-0
              px-[clamp(18px,4vw,70px)]
              py-[clamp(38px,4vw,80px)]
            "
          >
            {/* EYEBROW */}
            <div
              className="
                flex
                items-center
                justify-start
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
                  tracking-[0.2em]
                  text-gold
                "
              >
                TRUSTED ACROSS DEMANDING INDUSTRIES
              </span>
            </div>

            <p
              className="
                mt-[clamp(12px,1vw,20px)]
                max-w-[650px]
                text-[clamp(11px,0.72vw,17px)]
                leading-[1.5]
                text-black/65
              "
            >
              Supporting organizations operating in mining, dredging,
              infrastructure, energy and industrial sectors.
            </p>

            {/* LOGOS */}
            <div
              className="
                mt-[clamp(30px,3vw,60px)]
                grid
                grid-cols-3
                items-center
                gap-x-[clamp(18px,2.5vw,50px)]
                gap-y-[clamp(22px,2vw,38px)]
                border-t
                border-border
                pt-[clamp(22px,2vw,40px)]
                sm:grid-cols-6
              "
            >
              {customers.map((customer) => (
                <div
                  key={customer}
                  className="
                    flex
                    min-w-0
                    items-center
                    justify-start
                    text-[clamp(12px,1vw,22px)]
                    font-bold
                    tracking-[-0.03em]
                    text-black/40
                  "
                >
                  {customer}
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCT BY */}
          <div
            className="
              flex
              min-h-full
              min-w-[clamp(160px,15vw,260px)]
              flex-col
              justify-between
              border-t
              border-border
              px-[clamp(18px,2vw,40px)]
              py-[clamp(24px,2.5vw,50px)]
              md:border-l
              md:border-t-0
            "
          >
            <span
              className="
                text-[clamp(7px,0.5vw,11px)]
                font-semibold
                tracking-[0.18em]
                text-black/45
              "
            >
              A PRODUCT BY
            </span>

            <div className="mt-8">
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-[clamp(30px,2.5vw,50px)]
                    w-[clamp(30px,2.5vw,50px)]
                    items-center
                    justify-center
                    border
                    border-black
                    text-[clamp(14px,1vw,22px)]
                    font-bold
                  "
                >
                  T
                </div>

                <div>
                  <span
                    className="
                      block
                      text-[clamp(14px,1vw,22px)]
                      font-bold
                      tracking-[0.08em]
                      text-black
                    "
                  >
                    TERRAMET
                  </span>

                  <span
                    className="
                      block
                      text-[clamp(7px,0.48vw,11px)]
                      font-semibold
                      tracking-[0.15em]
                      text-black/50
                    "
                  >
                    VENTURES LLP
                  </span>
                </div>
              </div>

              <div
                className="
                  mt-[clamp(24px,2.5vw,48px)]
                  border-t
                  border-border
                  pt-[clamp(18px,1.8vw,34px)]
                "
              >
                <span
                  className="
                    block
                    text-[clamp(14px,1vw,22px)]
                    font-bold
                    tracking-[0.05em]
                    text-black
                  "
                >
                  BLSX
                </span>

                <span
                  className="
                    block
                    text-[clamp(7px,0.48vw,11px)]
                    font-semibold
                    tracking-[0.12em]
                    text-black/50
                  "
                >
                  LIMITED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}