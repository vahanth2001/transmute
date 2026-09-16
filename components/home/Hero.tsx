import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="pt-20 min-h-[720px] flex items-center relative overflow-hidden bg-ivory">

      {/* Hero Background Image */}
      <div
        className="absolute inset-0 lg:left-[38%] lg:w-[62%] h-full bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              #F6F2EA 0%,
              rgba(246,242,234,0.96) 10%,
              rgba(246,242,234,0.72) 28%,
              rgba(246,242,234,0.15) 55%,
              rgba(246,242,234,0) 100%
            ),
            url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=90")
          `,
        }}
      />

      {/* Mobile image overlay */}
      <div className="absolute inset-0 lg:hidden bg-[#F6F2EA]/75" />

      {/* Content */}
      <div className="container relative z-10">

        <div className="max-w-2xl py-24">

          {/* Eyebrow */}
          <div className="eyebrow mb-6">
            Engineered for a tougher tomorrow
          </div>

          {/* Main Heading */}
          <h1 className="display text-carbon text-6xl md:text-8xl leading-[0.92]">

            The right flexibility.
            
            <br />

            <span className="text-gold">
              In the right places.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-7 text-lg text-gray-600 max-w-xl leading-relaxed">
            High-performance ceramic-lined reinforced hose systems for
            abrasive, high-movement and demanding industrial applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">

            <Button href="/technology">
              Explore Transmute
            </Button>

            <Button
              href="/contact"
              variant="outline"
            >
              Request Application Review
            </Button>

          </div>

          {/* Proof Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-xl">

            <div className="border-t-2 border-gold pt-3">
              <div className="text-xs font-bold uppercase tracking-wide text-carbon">
                Abrasion Resistant
              </div>
            </div>

            <div className="border-t-2 border-gold pt-3">
              <div className="text-xs font-bold uppercase tracking-wide text-carbon">
                Movement Ready
              </div>
            </div>

            <div className="border-t-2 border-gold pt-3">
              <div className="text-xs font-bold uppercase tracking-wide text-carbon">
                Lower Lifecycle Cost
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#F6F2EA]
          to-transparent
          pointer-events-none
        "
      />

    </section>
  );
}