import Link from "next/link";

const navigation = [
  { label: "About Us", href: "/about" },
  { label: "Why Transmute", href: "/why-transmute" },
  { label: "Solutions", href: "/solutions" },
  { label: "Applications", href: "/applications" },
  { label: "Insights", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

const solutions = [
  { label: "Flexible Hose Solutions", href: "/solutions/flexible-hose" },
  { label: "Steel Pipeline Solutions", href: "/solutions/steel-pipeline" },
];

const applications = [
  { label: "Mining", href: "/applications/mining" },
  { label: "Dredging", href: "/applications/dredging" },
  { label: "Industrial", href: "/applications/industrial" },
  { label: "Petroleum", href: "/applications/petroleum" },
  { label: "Water & Desalination", href: "/applications/water-desalination" },
  { label: "Sanitation & Sewage", href: "/applications/sanitation-sewage" },
];

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-black text-white">
      {/* MAIN FOOTER */}
      <div
        className="
          grid
          w-full
          grid-cols-2
          border-b
          border-white/15
          lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]
        "
      >
        {/* BRAND */}
        <div
          className="
            min-w-0
            border-b
            border-white/15
            px-[clamp(18px,5vw,120px)]
            py-[clamp(38px,4vw,80px)]
            lg:border-b-0
            lg:border-r
          "
        >
          <Link
            href="/"
            className="inline-flex flex-col"
          >
            <div className="flex items-center gap-[clamp(7px,0.7vw,14px)]">
              <div
                className="
                  flex
                  h-[clamp(30px,2.5vw,52px)]
                  w-[clamp(30px,2.5vw,52px)]
                  shrink-0
                  items-center
                  justify-center
                "
              >
                <img
                  src="/icons/transmute-logo.png"
                  alt="Transmute"
                  className="h-full w-full object-contain"
                />
              </div>

              <span
                className="
                  text-[clamp(19px,1.6vw,34px)]
                  font-bold
                  tracking-[0.18em]
                  text-white
                "
              >
                TRANSMUTE
              </span>
            </div>

            <span
              className="
                mt-1
                text-[clamp(7px,0.52vw,12px)]
                font-medium
                tracking-[0.08em]
                text-white/45
              "
            >
              Engineered for Smoother, More Reliable Flow.
            </span>
          </Link>

          <p
            className="
              mt-[clamp(22px,2vw,40px)]
              max-w-[520px]
              text-justify
              text-[clamp(10px,0.68vw,15px)]
              leading-[1.55]
              text-white/55
            "
          >
            Engineered transfer solutions combining flexible and steel
            pipeline technologies to address the different demands of a
            complete transfer system.
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            className="
              group
              mt-[clamp(22px,2vw,40px)]
              inline-flex
              items-center
              gap-[clamp(8px,0.8vw,15px)]
              border
              border-gold
              px-[clamp(14px,1.4vw,28px)]
              py-[clamp(10px,0.8vw,16px)]
              text-[clamp(9px,0.62vw,14px)]
              font-semibold
              tracking-[0.04em]
              text-white
              transition-colors
              hover:bg-gold
            "
          >
            <span>Talk to an Engineer</span>

            <span
              className="
                text-gold
                transition-transform
                group-hover:translate-x-1
                group-hover:text-white
              "
            >
              →
            </span>
          </Link>
        </div>

        {/* NAVIGATION */}
        <div
          className="
            min-w-0
            border-b
            border-white/15
            px-[clamp(18px,3vw,60px)]
            py-[clamp(38px,4vw,80px)]
            lg:border-b-0
            lg:border-r
          "
        >
          <span
            className="
              text-[clamp(8px,0.55vw,12px)]
              font-semibold
              tracking-[0.2em]
              text-gold
            "
          >
            NAVIGATION
          </span>

          <nav
            className="
              mt-[clamp(18px,1.8vw,34px)]
              flex
              flex-col
            "
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-[clamp(9px,0.8vw,16px)]
                  text-[clamp(10px,0.68vw,15px)]
                  text-white/65
                  transition-colors
                  hover:text-white
                "
              >
                <span>{item.label}</span>

                <span
                  className="
                    text-gold
                    opacity-0
                    transition-all
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                >
                  →
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* SOLUTIONS */}
        <div
          className="
            min-w-0
            border-b
            border-white/15
            px-[clamp(18px,3vw,60px)]
            py-[clamp(38px,4vw,80px)]
            lg:border-b-0
            lg:border-r
          "
        >
          <span
            className="
              text-[clamp(8px,0.55vw,12px)]
              font-semibold
              tracking-[0.2em]
              text-gold
            "
          >
            SOLUTIONS
          </span>

          <div
            className="
              mt-[clamp(18px,1.8vw,34px)]
              flex
              flex-col
            "
          >
            {solutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  group
                  border-b
                  border-white/10
                  py-[clamp(9px,0.8vw,16px)]
                  text-[clamp(10px,0.68vw,15px)]
                  leading-[1.3]
                  text-white/65
                  transition-colors
                  hover:text-white
                "
              >
                <span>{item.label}</span>

                <span
                  className="
                    ml-2
                    text-gold
                    opacity-0
                    transition-all
                    group-hover:ml-3
                    group-hover:opacity-100
                  "
                >
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* CONTACT */}
          <div
            className="
              mt-[clamp(28px,2.5vw,50px)]
              border-t
              border-white/10
              pt-[clamp(18px,1.6vw,32px)]
            "
          >
            <span
              className="
                block
                text-[clamp(8px,0.5vw,11px)]
                font-semibold
                tracking-[0.15em]
                text-white/35
              "
            >
              CONTACT
            </span>

            <a
              href="mailto:info@transmute.com"
              className="
                mt-2
                block
                break-all
                text-[clamp(10px,0.68vw,15px)]
                text-white/70
                hover:text-gold
              "
            >
              info@transmute.com
            </a>

            <a
              href="tel:+910000000000"
              className="
                mt-1
                block
                text-[clamp(10px,0.68vw,15px)]
                text-white/70
                hover:text-gold
              "
            >
              +91 00000 00000
            </a>
          </div>
        </div>

        {/* APPLICATIONS */}
        <div
          className="
            min-w-0
            px-[clamp(18px,3vw,60px)]
            py-[clamp(38px,4vw,80px)]
          "
        >
          <span
            className="
              text-[clamp(8px,0.55vw,12px)]
              font-semibold
              tracking-[0.2em]
              text-gold
            "
          >
            APPLICATIONS
          </span>

          <div
            className="
              mt-[clamp(18px,1.8vw,34px)]
              grid
              grid-cols-1
            "
          >
            {applications.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-[clamp(8px,0.7vw,14px)]
                  text-[clamp(10px,0.68vw,15px)]
                  text-white/65
                  transition-colors
                  hover:text-white
                "
              >
                <span>{item.label}</span>

                <span
                  className="
                    text-gold
                    opacity-0
                    transition-all
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="
          flex
          w-full
          flex-col
          gap-4
          px-[clamp(18px,5vw,120px)]
          py-[clamp(16px,1.5vw,30px)]
          text-[clamp(8px,0.55vw,12px)]
          text-white/35
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <p>
          © {new Date().getFullYear()} Transmute. All rights reserved.
        </p>

        <div className="flex items-center gap-[clamp(14px,1.5vw,30px)]">
          <Link
            href="/contact"
            className="transition-colors hover:text-white"
          >
            Contact
          </Link>

          <span className="h-3 w-px bg-white/15" />

          <span>
            Engineered for Smoother, More Reliable Flow.
          </span>
        </div>
      </div>
    </footer>
  );
}