import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    title: "MINING",
    text: "Engineered solutions for slurry, tailings, mineral transfer and abrasive-service applications.",
    image: "/images/applications/mining.jpg",
  },
  {
    title: "DREDGING",
    text: "Flexible and rigid transfer solutions for changing routes, movement, marine environments and abrasive media.",
    image: "/images/applications/dredging.jpg",
  },
  {
    title: "PETROLEUM & PROCESS",
    text: "Transfer solutions for demanding industrial and process environments where material and system integrity are essential.",
    image: "/images/applications/petroleum-process.jpg",
  },
  {
    title: "WATER & DESALINATION",
    text: "Pipeline solutions for intake, discharge and process-transfer systems operating under demanding environmental conditions.",
    image: "/images/applications/water-desalination.jpg",
  },
  {
    title: "SANITATION & WASTEWATER",
    text: "Transfer systems engineered for municipal and industrial wastewater applications.",
    image: "/images/applications/wastewater.jpg",
  },
  {
    title: "INDUSTRIAL APPLICATIONS",
    text: "Engineered transfer solutions for diverse industrial environments, media types and operating conditions.",
    image: "/images/applications/industrial.jpg",
  },
];

const conditions = [
  {
    title: "ABRASION",
    text: "Where media causes accelerated wear and long-term durability becomes critical.",
    image: "/images/applications/abrasion.jpg",
  },
  {
    title: "MOVEMENT",
    text: "Where vibration, dynamic equipment or route changes affect the system.",
    image: "/images/applications/movement.jpg",
  },
  {
    title: "PRESSURE",
    text: "Where sections of the system require pressure and structural consideration.",
    image: "/images/applications/pressure.jpg",
  },
  {
    title: "ROUTING",
    text: "Where long runs, bends, elevation changes or constrained layouts affect design.",
    image: "/images/applications/routing.jpg",
  },
  {
    title: "ENVIRONMENT",
    text: "Where operating conditions influence materials, protection and service life.",
    image: "/images/applications/environment.jpg",
  },
];

const solutions = [
  {
    title: "TRANSMUTE RUBBER HOSE",
    text: "For movement, connections and route adaptability.",
    image: "/images/applications/rubber-hose.jpg",
  },
  {
    title: "TRANSMUTE CERAMIC-LINED RUBBER HOSE",
    text: "For flexible high-wear sections.",
    image: "/images/applications/ceramic-rubber-hose.jpg",
  },
  {
    title: "TRANSMUTE STEEL PIPE",
    text: "For fixed, long-distance transfer.",
    image: "/images/applications/steel-pipe.jpg",
  },
  {
    title: "TRANSMUTE CERAMIC-LINED STEEL PIPE",
    text: "For rigid high-wear pipeline sections.",
    image: "/images/applications/ceramic-steel-pipe.jpg",
  },
];

export default function ApplicationsPage() {
  return (
    <main className="bg-[#f6f2e9] text-[#20252a]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[520px] overflow-hidden">
        <Image
          src="/images/33.jpg"
          alt="Transmute material transfer system"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f6f2e9] via-[#f6f2e9]/95 via-[38%] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1400px] items-center px-6 py-16 lg:px-12">
          <div className="max-w-[600px]">
            <p className="mb-3 text-[14px] font-bold tracking-[2px] text-[#b77c17]">
              APPLICATIONS
            </p>

            <h1 className="text-[46px] font-black uppercase leading-[0.96] tracking-[-1.5px] sm:text-[55px] lg:text-[62px]">
              ENGINEERED FOR
              <br />
              DEMANDING MATERIAL-
              <br />
              TRANSFER ENVIRONMENTS.
            </h1>

            <p className="mt-5 max-w-[570px] text-[16px] leading-[1.45] text-[#33373b]">
              From mining and dredging to process industries, water systems
              and wastewater infrastructure, Transmute solutions are designed
              around the real operating conditions of each application. By
              combining flexible hose and steel pipeline technologies,
              Transmute helps create transfer systems that support smoother
              flow, stronger reliability and long-term operational performance.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#industries"
                className="inline-flex items-center gap-3 bg-[#bd841d] px-7 py-4 text-[14px] font-bold text-white transition hover:bg-[#9d6c13]"
              >
                Explore Applications
                <span className="text-lg">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#bd841d] bg-white/60 px-7 py-4 text-[14px] font-bold text-[#22272b] transition hover:bg-white"
              >
                Talk to an Engineer
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 hidden max-w-[190px] border-l-4 border-[#bd841d] pl-5 text-white lg:block">
            <p className="text-[20px] font-black uppercase leading-[1.1]">
              DIFFERENT
              <br />
              INDUSTRIES.
              <br />
              DIFFERENT
              <br />
              CONDITIONS.
              <br />
              ONE TRANSMUTE
              <br />
              APPROACH.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}
      <section
        id="industries"
        className="bg-[#f6f2e9] px-6 py-12 lg:px-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[13px] font-bold tracking-[2px] text-[#b77c17]">
            BUILT AROUND THE APPLICATION
          </p>

          <h2 className="mt-2 text-[34px] font-black uppercase leading-[1] tracking-[-1px] sm:text-[43px]">
            DIFFERENT INDUSTRIES. DIFFERENT CONDITIONS.
            <br className="hidden lg:block" />
            ONE TRANSMUTE APPROACH.
          </h2>

          <p className="mt-3 max-w-[1100px] text-[15px] leading-[1.45] text-[#414141]">
            Abrasion, movement, pressure, routing, distance and the operating
            environment all influence the right transfer solution. Transmute
            works with you to understand the application and configure the
            right combination of flexible hose and steel pipeline technologies.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group relative h-[220px] overflow-hidden"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-[21px] font-black uppercase leading-none">
                      {industry.title}
                    </h3>

                    <span className="h-[2px] w-8 bg-[#c38a21]" />
                  </div>

                  <p className="max-w-[400px] text-[13px] leading-[1.35] text-white/95">
                    {industry.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#ae7614]"
            >
              Talk to us about your application
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION DEFINES SOLUTION
      ========================================================= */}
      <section className="relative min-h-[360px] overflow-hidden">
        <Image
          src="/images/applications/application-system.jpg"
          alt="Transmute transfer system"
          fill
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#101518]/95 via-[#101518]/80 to-[#101518]/20" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1400px] items-center px-6 py-14 lg:px-12">
          <div className="max-w-[700px] text-white">
            <h2 className="text-[38px] font-black uppercase leading-[1] tracking-[-1px] sm:text-[46px]">
              THE APPLICATION
              <br />
              DEFINES THE SOLUTION.
            </h2>

            <p className="mt-4 max-w-[690px] text-[15px] leading-[1.5] text-white/90">
              Transmute does not begin with a product. It begins with the
              operating requirement. A mining transfer line may need steel for
              long fixed sections and ceramic-lined flexible hose at
              high-wear movement zones. A dredging system may require greater
              flexibility. A process plant may require heavier routing and
              rigid pipeline sections with selected flexible connections. The
              solution is shaped around the application.
            </p>

            <p className="mt-7 text-[18px] font-bold uppercase tracking-[1px] text-[#d6a43e]">
              ONE APPLICATION CAN REQUIRE MORE THAN ONE TECHNOLOGY.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONDITIONS
      ========================================================= */}
      <section className="bg-[#f6f2e9] px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[13px] font-bold tracking-[2px] text-[#b77c17]">
            WHAT WE ENGINEER AROUND
          </p>

          <h2 className="mt-2 text-[36px] font-black uppercase leading-none tracking-[-1px] sm:text-[44px]">
            REAL CONDITIONS. ENGINEERED RESPONSE.
          </h2>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {conditions.map((condition) => (
              <div
                key={condition.title}
                className="group relative h-[250px] overflow-hidden"
              >
                <Image
                  src={condition.image}
                  alt={condition.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[19px] font-black uppercase">
                      {condition.title}
                    </h3>

                    <span className="h-[2px] w-7 bg-[#c38a21]" />
                  </div>

                  <p className="mt-2 text-[13px] leading-[1.35]">
                    {condition.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTION COMBINATION
      ========================================================= */}
      <section className="bg-[#f6f2e9] px-6 pb-14 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-[30px] font-black uppercase leading-[1] tracking-[-1px] sm:text-[39px]">
            ONE APPLICATION CAN REQUIRE MORE THAN ONE TRANSMUTE SOLUTION.
          </h2>

          <p className="mt-3 max-w-[1200px] text-[15px] leading-[1.45] text-[#424242]">
            Many transfer systems use a combination of Transmute solutions,
            selected to suit the operating conditions. Flexible and rigid
            technologies work together to create a more reliable, efficient
            and longer-lasting system.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="overflow-hidden border border-[#d8d0c1] bg-white"
              >
                <div className="relative h-[150px]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <div className="mb-2 h-[2px] w-8 bg-[#bd841d]" />

                  <h3 className="text-[15px] font-black uppercase leading-[1.1]">
                    {solution.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.4] text-[#4b4b4b]">
                    {solution.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-4">
            <span className="hidden h-[1px] w-16 bg-[#bd841d] sm:block" />

            <p className="text-center text-[14px] font-bold">
              One system. Four solutions. Engineered around the application.
            </p>

            <span className="hidden h-[1px] w-16 bg-[#bd841d] sm:block" />
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative min-h-[330px] overflow-hidden">
        <Image
          src="/images/applications/application-cta.jpg"
          alt="Transmute industrial transfer solution"
          fill
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#111517]/95 via-[#111517]/80 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[330px] max-w-[1400px] items-center px-6 py-12 lg:px-12">
          <div className="max-w-[620px] text-white">
            <h2 className="text-[38px] font-black uppercase leading-[1] tracking-[-1px] sm:text-[46px]">
              LET&apos;S ENGINEER THE RIGHT SOLUTION
              <br className="hidden sm:block" />
              FOR YOUR APPLICATION.
            </h2>

            <p className="mt-4 max-w-[600px] text-[15px] leading-[1.45] text-white/90">
              Whether you are designing a new transfer system, upgrading an
              existing installation or addressing wear, movement or
              reliability challenges, our team can help identify the most
              suitable Transmute configuration.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#bd841d] px-7 py-4 text-[14px] font-bold text-white hover:bg-[#9d6c13]"
              >
                Talk to an Engineer
                <span>→</span>
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center gap-3 border border-white/60 px-7 py-4 text-[14px] font-bold text-white hover:bg-white/10"
              >
                Explore Our Solutions
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}