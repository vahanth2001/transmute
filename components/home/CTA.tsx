import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/home1.png"
          alt=""
          className="
            h-full
            w-full
            object-cover
            opacity-45
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/85
            to-black/45
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          grid
          w-full
          grid-cols-1
          gap-[clamp(28px,4vw,80px)]
          px-[clamp(18px,5vw,120px)]
          py-[clamp(45px,5vw,100px)]
          lg:grid-cols-[1fr_0.9fr]
          lg:items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="min-w-0">
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
              ENGINEERED FOR YOUR APPLICATION
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mt-[clamp(12px,1vw,22px)]
              max-w-[1100px]
              font-serif
              font-normal
              text-[clamp(36px,4vw,88px)]
              leading-[0.92]
              tracking-[-0.045em]
              text-white
            "
          >
            LET&apos;S ENGINEER
            <br />
            THE RIGHT
            <br />
            <span className="text-gold">
              TRANSFER SOLUTION.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-[clamp(18px,1.8vw,34px)]
              max-w-[850px]
              text-justify
              text-[clamp(12px,0.8vw,18px)]
              leading-[1.55]
              text-white/65
            "
          >
            Whether you are designing a new transfer system, upgrading an
            existing pipeline or addressing a critical wear, movement or
            reliability challenge, our team can help you identify the
            appropriate Transmute solution for your application.
          </p>

          {/* SUPPORTING LINE */}
          <div
            className="
              mt-[clamp(24px,2.5vw,48px)]
              flex
              items-center
              gap-[clamp(10px,1vw,18px)]
            "
          >
            <span
              className="
                h-px
                w-[clamp(28px,3vw,65px)]
                bg-gold
              "
            />

            <span
              className="
                text-[clamp(9px,0.62vw,14px)]
                font-semibold
                tracking-[0.15em]
                text-white/60
              "
            >
              ENGINEERED AROUND YOUR SYSTEM
            </span>
          </div>
        </div>

        {/* FORM */}
        <div
          className="
            min-w-0
            bg-white
            p-[clamp(18px,2.2vw,42px)]
          "
        >
          {/* FORM HEADER */}
          <div
            className="
              mb-[clamp(18px,1.8vw,34px)]
              flex
              items-start
              justify-between
              gap-5
              border-b
              border-black/10
              pb-[clamp(14px,1.2vw,24px)]
            "
          >
            <div>
              <span
                className="
                  block
                  text-[clamp(8px,0.55vw,12px)]
                  font-semibold
                  tracking-[0.18em]
                  text-gold
                "
              >
                START A CONVERSATION
              </span>

              <h3
                className="
                  mt-1
                  text-[clamp(18px,1.4vw,30px)]
                  font-semibold
                  tracking-[-0.02em]
                  text-black
                "
              >
                REQUEST APPLICATION REVIEW
              </h3>
            </div>

            <span
              className="
                text-[clamp(18px,1.5vw,30px)]
                text-gold
              "
            >
              →
            </span>
          </div>

          {/* FORM */}
          <form className="w-full">
            <div
              className="
                grid
                grid-cols-1
                gap-[clamp(9px,0.8vw,16px)]
                sm:grid-cols-2
              "
            >
              {/* NAME */}
              <div>
                <label
                  htmlFor="cta-name"
                  className="
                    mb-1.5
                    block
                    text-[clamp(8px,0.52vw,11px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black/55
                  "
                >
                  FULL NAME*
                </label>

                <input
                  id="cta-name"
                  type="text"
                  placeholder="Full Name"
                  className="
                    h-[clamp(38px,2.8vw,52px)]
                    w-full
                    border
                    border-black/15
                    bg-white
                    px-3
                    text-[clamp(10px,0.62vw,14px)]
                    text-black
                    outline-none
                    placeholder:text-black/30
                    focus:border-gold
                  "
                />
              </div>

              {/* COMPANY */}
              <div>
                <label
                  htmlFor="cta-company"
                  className="
                    mb-1.5
                    block
                    text-[clamp(8px,0.52vw,11px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black/55
                  "
                >
                  COMPANY*
                </label>

                <input
                  id="cta-company"
                  type="text"
                  placeholder="Company"
                  className="
                    h-[clamp(38px,2.8vw,52px)]
                    w-full
                    border
                    border-black/15
                    bg-white
                    px-3
                    text-[clamp(10px,0.62vw,14px)]
                    text-black
                    outline-none
                    placeholder:text-black/30
                    focus:border-gold
                  "
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="cta-email"
                  className="
                    mb-1.5
                    block
                    text-[clamp(8px,0.52vw,11px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black/55
                  "
                >
                  EMAIL*
                </label>

                <input
                  id="cta-email"
                  type="email"
                  placeholder="Email"
                  className="
                    h-[clamp(38px,2.8vw,52px)]
                    w-full
                    border
                    border-black/15
                    bg-white
                    px-3
                    text-[clamp(10px,0.62vw,14px)]
                    text-black
                    outline-none
                    placeholder:text-black/30
                    focus:border-gold
                  "
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="cta-phone"
                  className="
                    mb-1.5
                    block
                    text-[clamp(8px,0.52vw,11px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black/55
                  "
                >
                  PHONE*
                </label>

                <input
                  id="cta-phone"
                  type="tel"
                  placeholder="Phone"
                  className="
                    h-[clamp(38px,2.8vw,52px)]
                    w-full
                    border
                    border-black/15
                    bg-white
                    px-3
                    text-[clamp(10px,0.62vw,14px)]
                    text-black
                    outline-none
                    placeholder:text-black/30
                    focus:border-gold
                  "
                />
              </div>

              {/* INDUSTRY */}
              <div>
                <label
                  htmlFor="cta-industry"
                  className="
                    mb-1.5
                    block
                    text-[clamp(8px,0.52vw,11px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black/55
                  "
                >
                  INDUSTRY
                </label>

                <select
                  id="cta-industry"
                  defaultValue=""
                  className="
                    h-[clamp(38px,2.8vw,52px)]
                    w-full
                    border
                    border-black/15
                    bg-white
                    px-3
                    text-[clamp(10px,0.62vw,14px)]
                    text-black/60
                    outline-none
                    focus:border-gold
                  "
                >
                  <option value="" disabled>
                    Select Industry
                  </option>
                  <option value="mining">Mining</option>
                  <option value="dredging">Dredging</option>
                  <option value="petroleum">Petroleum & Process</option>
                  <option value="water">Water & Desalination</option>
                  <option value="sanitation">Sanitation & Wastewater</option>
                  <option value="industrial">
                    Industrial Applications
                  </option>
                </select>
              </div>

              {/* PROJECT / APPLICATION */}
              <div>
                <label
                  htmlFor="cta-project"
                  className="
                    mb-1.5
                    block
                    text-[clamp(8px,0.52vw,11px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black/55
                  "
                >
                  PROJECT / APPLICATION
                </label>

                <input
                  id="cta-project"
                  type="text"
                  placeholder="Project / Application"
                  className="
                    h-[clamp(38px,2.8vw,52px)]
                    w-full
                    border
                    border-black/15
                    bg-white
                    px-3
                    text-[clamp(10px,0.62vw,14px)]
                    text-black
                    outline-none
                    placeholder:text-black/30
                    focus:border-gold
                  "
                />
              </div>

              {/* MEDIA */}
              <div>
                <label
                  htmlFor="cta-media"
                  className="
                    mb-1.5
                    block
                    text-[clamp(8px,0.52vw,11px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black/55
                  "
                >
                  MEDIA BEING TRANSPORTED
                </label>

                <input
                  id="cta-media"
                  type="text"
                  placeholder="Media Being Transported"
                  className="
                    h-[clamp(38px,2.8vw,52px)]
                    w-full
                    border
                    border-black/15
                    bg-white
                    px-3
                    text-[clamp(10px,0.62vw,14px)]
                    text-black
                    outline-none
                    placeholder:text-black/30
                    focus:border-gold
                  "
                />
              </div>

              {/* PIPELINE */}
              <div>
                <label
                  htmlFor="cta-pipeline"
                  className="
                    mb-1.5
                    block
                    text-[clamp(8px,0.52vw,11px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black/55
                  "
                >
                  PIPELINE DIAMETER
                </label>

                <input
                  id="cta-pipeline"
                  type="text"
                  placeholder="Pipeline Diameter"
                  className="
                    h-[clamp(38px,2.8vw,52px)]
                    w-full
                    border
                    border-black/15
                    bg-white
                    px-3
                    text-[clamp(10px,0.62vw,14px)]
                    text-black
                    outline-none
                    placeholder:text-black/30
                    focus:border-gold
                  "
                />
              </div>

              {/* PRESSURE */}
              <div>
                <label
                  htmlFor="cta-pressure"
                  className="
                    mb-1.5
                    block
                    text-[clamp(8px,0.52vw,11px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black/55
                  "
                >
                  OPERATING PRESSURE
                </label>

                <input
                  id="cta-pressure"
                  type="text"
                  placeholder="Operating Pressure"
                  className="
                    h-[clamp(38px,2.8vw,52px)]
                    w-full
                    border
                    border-black/15
                    bg-white
                    px-3
                    text-[clamp(10px,0.62vw,14px)]
                    text-black
                    outline-none
                    placeholder:text-black/30
                    focus:border-gold
                  "
                />
              </div>

              {/* LOCATION */}
              <div>
                <label
                  htmlFor="cta-location"
                  className="
                    mb-1.5
                    block
                    text-[clamp(8px,0.52vw,11px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black/55
                  "
                >
                  PROJECT LOCATION
                </label>

                <input
                  id="cta-location"
                  type="text"
                  placeholder="Project Location"
                  className="
                    h-[clamp(38px,2.8vw,52px)]
                    w-full
                    border
                    border-black/15
                    bg-white
                    px-3
                    text-[clamp(10px,0.62vw,14px)]
                    text-black
                    outline-none
                    placeholder:text-black/30
                    focus:border-gold
                  "
                />
              </div>

              {/* REQUIREMENT */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="cta-requirement"
                  className="
                    mb-1.5
                    block
                    text-[clamp(8px,0.52vw,11px)]
                    font-semibold
                    tracking-[0.08em]
                    text-black/55
                  "
                >
                  TELL US ABOUT YOUR REQUIREMENT
                </label>

                <textarea
                  id="cta-requirement"
                  rows={3}
                  placeholder="Tell us about your requirement"
                  className="
                    min-h-[clamp(75px,6vw,120px)]
                    w-full
                    resize-none
                    border
                    border-black/15
                    bg-white
                    px-3
                    py-3
                    text-[clamp(10px,0.62vw,14px)]
                    text-black
                    outline-none
                    placeholder:text-black/30
                    focus:border-gold
                  "
                />
              </div>
            </div>

            {/* BOTTOM ACTIONS */}
            <div
              className="
                mt-[clamp(14px,1.2vw,24px)]
                flex
                flex-col
                gap-4
                border-t
                border-black/10
                pt-[clamp(14px,1.2vw,24px)]
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <label
                className="
                  flex
                  min-w-0
                  cursor-pointer
                  items-center
                  gap-2
                  text-[clamp(8px,0.52vw,11px)]
                  text-black/55
                "
              >
                <input
                  type="file"
                  className="hidden"
                />

                <span
                  className="
                    border
                    border-black/15
                    px-3
                    py-2
                  "
                >
                  Upload Drawing / Specification
                </span>
              </label>

              <button
                type="submit"
                className="
                  group
                  flex
                  shrink-0
                  items-center
                  justify-center
                  gap-3
                  bg-gold
                  px-[clamp(18px,1.8vw,36px)]
                  py-[clamp(11px,0.9vw,18px)]
                  text-[clamp(9px,0.62vw,14px)]
                  font-semibold
                  tracking-[0.04em]
                  text-white
                  transition-colors
                  hover:bg-black
                "
              >
                <span>SUBMIT APPLICATION</span>

                <span
                  className="
                    text-[clamp(13px,0.9vw,18px)]
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}