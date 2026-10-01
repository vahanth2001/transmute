"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f3e9] text-[#171c21]">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[390px] overflow-hidden lg:min-h-[445px]">
        <img
          src="/images/contact-hero.jpg"
          alt="Transmute pipeline system"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3e9] via-[#f7f3e9]/95 via-[42%] to-transparent" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-12 lg:px-[58px] lg:py-[48px]">
          <div className="max-w-[550px]">
            <p className="mb-2 text-[14px] font-bold tracking-[0.12em] text-[#b67a17]">
              CONTACT US
            </p>

            <h1 className="font-condensed text-[43px] font-black uppercase leading-[0.93] tracking-[-1.5px] sm:text-[50px] lg:text-[57px]">
              LET’S ENGINEER
              <br />
              THE RIGHT TRANSFER
              <br />
              SOLUTION.
            </h1>

            <p className="mt-5 max-w-[530px] text-[15px] leading-[1.45] text-[#25292d] sm:text-[16px]">
              Whether you are planning a new transfer system, upgrading an
              existing pipeline, or addressing wear, movement, pressure,
              routing or reliability challenges, our team is ready to
              understand your application and help identify the most suitable
              Transmute solution.
            </p>

            <p className="mt-3 text-[15px] font-bold">
              Engineered for Smoother, More Reliable Flow.
            </p>

            <a
              href="#application-review"
              className="mt-5 inline-flex bg-[#bb8220] px-7 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#9e6e18]"
            >
              Talk to an Engineer
              <span className="ml-3">→</span>
            </a>
          </div>
        </div>

        <div className="absolute right-[6%] top-[55px] hidden text-right text-white lg:block">
          <p className="text-[22px] font-bold uppercase leading-[1.15]">
            REAL
            <br />
            APPLICATIONS.
            <br />
            REAL PROGRESS.
          </p>
          <div className="mt-6 h-[3px] w-[42px] bg-[#c18a25]" />
        </div>
      </section>

      {/* ================= APPLICATION + CONTACT ================= */}
      <section
        id="application-review"
        className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[1.65fr_1fr]"
      >
        {/* FORM */}
        <div className="px-6 py-12 lg:px-[58px] lg:py-[42px]">
          <p className="text-[13px] font-bold tracking-[0.12em] text-[#b67a17]">
            APPLICATION REVIEW
          </p>

          <h2 className="mt-2 font-condensed text-[34px] font-black uppercase leading-none sm:text-[40px]">
            TELL US ABOUT YOUR REQUIREMENT.
          </h2>

          <p className="mt-4 max-w-[720px] text-[15px] leading-[1.5]">
            Every transfer system is different. Share a few details about your
            application and our team will review the operating conditions and
            connect with you to discuss the next steps.
          </p>

          {submitted ? (
            <div className="mt-8 border border-[#c7a25d] bg-[#f0e7d4] p-8">
              <h3 className="text-2xl font-bold">
                Application received.
              </h3>
              <p className="mt-2">
                Thank you. Our engineering team will review your requirement
                and contact you.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-7 space-y-5"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Full Name" required placeholder="Enter your full name" />
                <Field label="Company" required placeholder="Enter your company name" />

                <Field label="Email" required type="email" placeholder="Enter your email address" />

                <div>
                  <label className="mb-2 block text-[13px] font-medium">
                    Phone Number <span className="text-[#b67a17]">*</span>
                  </label>

                  <div className="flex">
                    <select className="h-[43px] w-[78px] border border-[#cbc6ba] bg-white px-2 text-[13px] outline-none">
                      <option>+91</option>
                    </select>

                    <input
                      required
                      type="tel"
                      placeholder="Enter your phone number"
                      className="h-[43px] min-w-0 flex-1 border border-l-0 border-[#cbc6ba] bg-white px-3 text-[13px] outline-none focus:border-[#b67a17]"
                    />
                  </div>
                </div>

                <SelectField
                  label="Industry"
                  required
                  options={[
                    "Select industry",
                    "Mining",
                    "Dredging",
                    "Petroleum & Process",
                    "Water & Desalination",
                    "Sanitation & Wastewater",
                    "Industrial Applications",
                  ]}
                />

                <SelectField
                  label="Solution Interest"
                  required
                  options={[
                    "Select solution",
                    "Flexible Hose Solutions",
                    "Steel Pipeline Solutions",
                    "Ceramic-Lined Rubber Hose",
                    "Ceramic-Lined Steel Pipe",
                  ]}
                />
              </div>

              <TextArea
                label="Project / Application"
                required
                placeholder="e.g. Slurry transfer, pump connection, long-distance pipeline etc."
              />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field
                  label="Material Being Transported"
                  placeholder="e.g. Slurry, Sand, Water etc."
                />

                <Field
                  label="Pipeline Diameter"
                  placeholder="e.g. 150 mm"
                />

                <Field
                  label="Operating Pressure"
                  placeholder="e.g. 10 bar"
                />

                <Field
                  label="Project Location"
                  placeholder="Enter project location"
                />
              </div>

              <TextArea
                label="Tell Us About Your Requirement"
                required
                placeholder="Please share more details about your application, operating conditions, challenges etc."
              />

              {/* UPLOAD */}
              <div>
                <label className="mb-2 block text-[13px] font-medium">
                  Upload Drawing / Specification{" "}
                  <span className="text-[#777]">(Optional)</span>
                </label>

                <label className="flex h-[68px] cursor-pointer items-center gap-4 border border-[#cbc6ba] bg-white px-5">
                  <span className="text-2xl">↥</span>

                  <span>
                    <span className="block text-[13px] font-medium">
                      Choose a file or drag and drop
                    </span>
                    <span className="text-[11px] text-[#888]">
                      PDF, DWG, JPG, PNG (Max 10 MB)
                    </span>
                  </span>

                  <input type="file" className="hidden" />
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#b9801d] px-7 py-4 text-[14px] font-bold text-white transition hover:bg-[#9e6e18]"
              >
                SUBMIT APPLICATION
                <span className="ml-3">→</span>
              </button>
            </form>
          )}
        </div>

        {/* CONTACT INFORMATION */}
        <aside className="border-l border-[#d9d2c3] bg-[#eee8dc]">
          <div className="px-7 py-10 lg:px-9">
            <h2 className="font-condensed text-[29px] font-black uppercase leading-none">
              PREFER TO SPEAK
              <br />
              WITH US DIRECTLY?
            </h2>

            <p className="mt-4 text-[14px] leading-[1.5]">
              Our team is available to discuss your application, technical
              requirements and project needs.
            </p>

            <div className="mt-7 space-y-6">
              <ContactItem
                icon="⌕"
                title="Phone"
                value="+91 91542 54601"
              />

              <ContactItem
                icon="✉"
                title="Email"
                value="query@terrametventures.com"
              />

              <ContactItem
                icon="◎"
                title="Website"
                value="www.terrametventures.com"
              />
            </div>

            <div className="my-7 border-t border-[#d1c8b8]" />

            <ContactItem
              icon="⌖"
              title="Our Office"
              value={
                <>
                  Terramet Ventures Private Limited
                  <br />
                  Hyderabad, Telangana, India
                  <br />
                  <a
                    href="#"
                    className="mt-2 inline-block text-[#b67a17] underline"
                  >
                    Get Directions →
                  </a>
                </>
              }
            />
          </div>

          <div className="relative h-[310px] overflow-hidden">
            <img
              src="/images/contact-pipeline.jpg"
              alt="Transmute pipeline"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-7 max-w-[170px] text-white">
              <p className="font-condensed text-[21px] font-black uppercase leading-[1.05]">
                DIFFERENT
                <br />
                CHALLENGES.
                <br />
                A STRONGER
                <br />
                WAY FORWARD.
              </p>

              <div className="mt-4 h-[3px] w-[40px] bg-[#c28b28]" />
            </div>
          </div>
        </aside>
      </section>

      {/* ================= WHAT HAPPENS NEXT ================= */}
      <section className="bg-[#eee8dc] px-6 py-12 lg:px-[58px] lg:py-[42px]">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[13px] font-bold tracking-[0.12em] text-[#b67a17]">
            WHAT HAPPENS NEXT
          </p>

          <h2 className="mt-2 font-condensed text-[36px] font-black uppercase leading-none sm:text-[43px]">
            FROM ENQUIRY TO ENGINEERING DISCUSSION.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ProcessStep
              number="01"
              title={
                <>
                  We understand
                  <br />
                  the application.
                </>
              }
              text="Your operating conditions, material, routing and transfer requirements are reviewed."
            />

            <ProcessStep
              number="02"
              title={
                <>
                  We identify
                  <br />
                  the relevant solution.
                </>
              }
              text="The appropriate Transmute product or combination of solutions is considered."
            />

            <ProcessStep
              number="03"
              title={
                <>
                  We connect
                  <br />
                  with you.
                </>
              }
              text="Our team discusses technical requirements, project conditions and next steps."
            />

            <ProcessStep
              number="04"
              title={
                <>
                  We move toward the
                  <br />
                  right configuration.
                </>
              }
              text="The conversation progresses toward the most suitable transfer solution for the application."
            />
          </div>
        </div>
      </section>

      {/* ================= DARK CTA ================= */}
      <section className="relative overflow-hidden bg-[#171b1e]">
        <img
          src="/images/contact-cta.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171b1e] via-[#171b1e]/75 to-[#171b1e]/20" />

        <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-6 py-12 lg:flex-row lg:items-center lg:px-[58px] lg:py-[48px]">
          <div className="max-w-[650px] text-white">
            <p className="text-[13px] font-bold tracking-[0.12em] text-[#c18a25]">
              THE RIGHT CONVERSATION CAN START WITH
            </p>

            <h2 className="mt-2 font-condensed text-[38px] font-black uppercase leading-none sm:text-[48px]">
              ONE OPERATING CHALLENGE.
            </h2>

            <p className="mt-5 text-[16px] font-semibold">
              Wear. Movement. Pressure. Routing. Reliability.
            </p>

            <p className="mt-4 max-w-[600px] text-[14px] leading-[1.55] text-white/90">
              Whatever the issue, Transmute approaches it from the application
              first — with the objective of creating smoother, more reliable
              material flow.
            </p>
          </div>

          <a
            href="#application-review"
            className="shrink-0 bg-[#bd8420] px-8 py-4 text-[14px] font-bold text-white hover:bg-[#9f6f19]"
          >
            Talk to an Engineer
            <span className="ml-3">→</span>
          </a>

          <div className="hidden text-right text-white/70 lg:block">
            <p className="font-condensed text-[23px] font-bold uppercase leading-[1.05]">
              ENGINEERING
              <br />
              FLOW
              <br />
              FOR A TOUGHER
              <br />
              TOMORROW.
            </p>

            <div className="ml-auto mt-4 h-[3px] w-[40px] bg-[#c18a25]" />
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function Field({
  label,
  placeholder,
  required = false,
  type = "text",
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-medium">
        {label}{" "}
        {required && <span className="text-[#b67a17]">*</span>}
      </label>

      <input
        required={required}
        type={type}
        placeholder={placeholder}
        className="h-[43px] w-full border border-[#cbc6ba] bg-white px-3 text-[13px] outline-none transition focus:border-[#b67a17]"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  required = false,
}: {
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-medium">
        {label}{" "}
        {required && <span className="text-[#b67a17]">*</span>}
      </label>

      <select
        required={required}
        className="h-[43px] w-full border border-[#cbc6ba] bg-white px-3 text-[13px] outline-none focus:border-[#b67a17]"
      >
        {options.map((option, index) => (
          <option key={option} value={index === 0 ? "" : option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextArea({
  label,
  placeholder,
  required = false,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-medium">
        {label}{" "}
        {required && <span className="text-[#b67a17]">*</span>}
      </label>

      <textarea
        required={required}
        placeholder={placeholder}
        className="min-h-[86px] w-full resize-none border border-[#cbc6ba] bg-white px-3 py-3 text-[13px] outline-none focus:border-[#b67a17]"
      />
    </div>
  );
}

function ContactItem({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#bd8420] text-[19px] text-white">
        {icon}
      </div>

      <div>
        <p className="text-[14px] font-bold">{title}</p>
        <div className="mt-1 text-[14px] leading-[1.5]">{value}</div>
      </div>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex gap-4 border-r border-[#cfc7b8] pr-5 last:border-r-0">
      <div className="font-condensed text-[35px] font-black text-[#b9801d]">
        {number}
      </div>

      <div>
        <h3 className="text-[15px] font-bold leading-[1.15]">{title}</h3>

        <p className="mt-3 text-[13px] leading-[1.5] text-[#414141]">
          {text}
        </p>
      </div>
    </div>
  );
}