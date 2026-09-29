import Image from "next/image";

const demands = [
  {
    image: "/images/home1.png",
    icon: "◒",
    title: "HIGH-WEAR\nCONDITIONS",
    text: "Abrasive slurry and aggressive media demand systems engineered for prolonged wear resistance.",
  },
  {
    image: "/images/hero.png",
    icon: "↝",
    title: "DYNAMIC\nCONDITIONS",
    text: "Vibration, ground movement, equipment motion and changing routes require flexibility where conventional fixed systems may be restricted.",
  },
  {
    image: "/images/8724dad6-e804-435c-95b8-5f8b6e86e596 copy.png",
    icon: "◉",
    title: "OPERATING\nDEMANDS",
    text: "Different sections of a transfer system may experience different pressures, loads and structural requirements.",
  },
  {
    image: "/images/5f02b291-6ea2-47bc-a9f9-6732ac37aa11.png",
    icon: "⌁",
    title: "SYSTEM\nCONFIGURATION",
    text: "Long straight runs, bends, discharge points and mobile sections require different engineering approaches.",
  },
];

export default function ProblemSection() {
  return (
    <section className="w-full overflow-hidden bg-cream">
      {/* SECTION INTRO */}
      <div
        className="
          w-full
          px-[clamp(18px,5vw,120px)]
          pt-[clamp(34px,3.5vw,72px)]
          pb-[clamp(22px,2.5vw,48px)]
        "
      >
        {/* EYEBROW */}
        <div
          className="
            mb-[clamp(10px,0.8vw,18px)]
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
            ONE SYSTEM. DIFFERENT DEMANDS.
          </span>
        </div>

        {/* HEADING + SIDE LABEL */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-[clamp(18px,2vw,40px)]
            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >
          {/* MAIN CONTENT */}
          <div className="min-w-0">
            <h2
              className="
                font-serif
                font-normal
                text-[clamp(30px,3.2vw,70px)]
                leading-[0.94]
                tracking-[-0.04em]
                text-black
              "
            >
              EVERY PART OF A TRANSFER SYSTEM
              <br className="hidden md:block" />
              WORKS DIFFERENTLY.
            </h2>

            <p
              className="
                mt-[clamp(10px,0.9vw,18px)]
                w-full
                max-w-[1100px]
                text-justify
                text-[clamp(11px,0.72vw,17px)]
                leading-[1.45]
                text-black/70
              "
            >
              Pressure, abrasion, movement, distance and routing conditions
              can change throughout a transfer system. A solution that
              performs well in one section may not be the right choice for
              another. Transmute brings flexible and rigid pipeline
              technologies together so each section is engineered around its
              actual operating requirement.
            </p>
          </div>

          {/* SIDE STATEMENT */}
          <div
            className="
              hidden
              shrink-0
              items-start
              gap-3
              pt-2
              lg:flex
              lg:w-[clamp(150px,13vw,260px)]
            "
          >
            <span
              className="
                mt-2
                h-px
                w-[clamp(28px,2.5vw,55px)]
                shrink-0
                bg-black/30
              "
            />

            <div className="text-left">
              <span
                className="
                  block
                  text-[clamp(7px,0.48vw,11px)]
                  font-semibold
                  tracking-[0.15em]
                  text-black/45
                "
              >
                DIFFERENT CONDITIONS.
              </span>

              <span
                className="
                  mt-1
                  block
                  text-[clamp(8px,0.55vw,13px)]
                  font-semibold
                  leading-[1.25]
                  text-black/70
                "
              >
                A STRONGER SYSTEM.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FOUR CARDS */}
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-[clamp(10px,1vw,22px)]
          px-[clamp(18px,5vw,120px)]
          pb-[clamp(36px,4vw,80px)]
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {demands.map((item) => (
          <article
            key={item.title}
            className="
              group
              min-w-0
              overflow-hidden
              border
              border-black/10
              bg-white
              shadow-[0_1px_4px_rgba(0,0,0,0.04)]
            "
          >
            {/* IMAGE */}
            <div
              className="
                relative
                aspect-[2.15/1]
                w-full
                overflow-hidden
                bg-black/5
              "
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-[1.03]
                "
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 50vw,
                  25vw
                "
              />
            </div>

            {/* CARD CONTENT */}
            <div
              className="
                flex
                min-h-[clamp(120px,10vw,190px)]
                items-start
                gap-[clamp(9px,0.8vw,18px)]
                p-[clamp(12px,1.15vw,24px)]
                text-left
              "
            >
              {/* ICON */}
              <div
                className="
                  flex
                  h-[clamp(28px,2vw,42px)]
                  w-[clamp(28px,2vw,42px)]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gold
                  text-[clamp(14px,0.9vw,20px)]
                  text-gold
                "
              >
                {item.icon}
              </div>

              {/* TEXT */}
              <div className="min-w-0 text-left">
                <h3
                  className="
                    whitespace-pre-line
                    text-[clamp(10px,0.68vw,15px)]
                    font-bold
                    leading-[1.12]
                    tracking-[0.02em]
                    text-black
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-[clamp(6px,0.5vw,10px)]
                    text-[clamp(8px,0.9vw,13px)]
                    leading-[1.42]
                    text-black/60
                  "
                >
                  {item.text}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}