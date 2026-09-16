import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function MeetTransmute() {
  return (
    <section className="section bg-ivory">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">

        {/* Content */}
        <div>
          <div className="eyebrow mb-5">
            Meet Transmute
          </div>

          <h2 className="section-title">
            A different approach to demanding transfer.
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl">
            Transmute is positioned around a ceramic-lined, rubber-based
            reinforced hose system for applications where abrasion,
            movement and flexible routing are important considerations.
          </p>

          <div className="mt-7">
            <Button href="/technology">
              Learn More About Our Technology
            </Button>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative">

          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">

            <Image
              src="/images/home1.png"
              alt="Transmute reinforced hose system"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

          </div>

          {/* Product Architecture Label */}
          <div className="absolute -bottom-5 -left-5 bg-card border border-border p-5 shadow-lg max-w-[260px]">

            <div className="text-gold text-xs uppercase tracking-widest">
              Product Architecture
            </div>

            <div className="font-bold mt-2">
              Ceramic-lined reinforced hose
            </div>

            <div className="text-xs text-gray-500 mt-1">
              Technical construction details subject to engineering
              approval.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}