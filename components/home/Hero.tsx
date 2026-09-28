import Link from "next/link";

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-inner">
        <div className="home-hero-content">
          <div className="home-hero-eyebrow">
            <span />
            ENGINEERED FLOW SOLUTIONS
          </div>

          <h1 className="home-hero-title">
            Engineered for
            <br />
            <span>Smoother Flow.</span>
          </h1>

          <p className="home-hero-description">
            Advanced pipeline and hose solutions engineered for demanding
            environments, reliable flow, and long-term performance.
          </p>

          <div className="home-hero-actions">
            <Link href="/contact" className="button button-primary">
              Talk to an Engineer
              <span className="button-arrow">→</span>
            </Link>

            <Link href="/applications" className="button button-secondary">
              Explore Applications
              <span className="button-arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="home-hero-media">
          <img
            src="/images/hero.png"
            alt="Transmute engineered flow solution"
            className="home-hero-image"
          />

          <div className="home-hero-caption">
            <span>ENGINEERED FLOW</span>
            <span>RELIABLE PERFORMANCE</span>
          </div>
        </div>
      </div>
    </section>
  );
}