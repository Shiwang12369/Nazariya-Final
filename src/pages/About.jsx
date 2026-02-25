// src/pages/About.jsx
const About = () => {
  return (
    <main className="min-h-screen bg-[hsl(var(--bg-primary))] text-[hsl(var(--text-primary))]">
      {/* PAGE WRAPPER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 space-y-20 sm:space-y-24 lg:space-y-28">

        {/* SECTION 1 — HERO INTRO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left - Text */}
          <div className="space-y-5 sm:space-y-6">
            <p className="text-[0.7rem] tracking-[0.26em] uppercase text-[hsl(var(--text-secondary))]">
              Our Story
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-light text-[hsl(var(--text-primary))]">
              Crafting Timeless Essentials
            </h1>
            <p className="text-sm sm:text-base text-[hsl(var(--text-secondary))] max-w-xl">
              Estate Studio was founded on a single belief: that everyday pieces
              deserve the same attention as couture. We design with intention,
              focusing on refined silhouettes, rich textures, and subtle details
              that endure beyond a single season.
            </p>
            <p className="text-sm sm:text-base text-[hsl(var(--text-secondary))] max-w-xl">
              Each collection is developed in small, considered runs with
              long-term wear in mind. From fabric selection to final finishing,
              we partner with ateliers who share our commitment to craftsmanship,
              responsibility, and quiet luxury.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="luxury-card overflow-hidden rounded-[var(--radius-2xl)] aspect-[4/5] sm:aspect-[5/6] animate-fade-in-soft">
              <img
                src="https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Tailored garments on a rack"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="w-full h-px bg-[hsl(var(--border-soft))]" />

        {/* SECTION 2 — BRAND PHILOSOPHY */}
        <section className="space-y-10">
          <header className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-[hsl(var(--text-primary))]">
              Our Philosophy
            </h2>
            <p className="text-sm sm:text-base text-[hsl(var(--text-secondary))]">
              A modern wardrobe built on lasting quality, responsible decisions,
              and design that feels relevant year after year.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {/* Card 1 */}
            <article className="luxury-card rounded-[var(--radius-xl)] p-5 sm:p-6 transition-transform duration-200 hover:-translate-y-1">
              <div className="mb-3 flex items-center justify-center h-9 w-9 rounded-full bg-[hsl(var(--bg-secondary))] text-xs tracking-[0.18em] uppercase text-[hsl(var(--text-secondary))]">
                QF
              </div>
              <h3 className="text-sm sm:text-base font-medium text-[hsl(var(--text-primary))] mb-2">
                Quality First
              </h3>
              <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))]">
                We work with mills and makers who share our obsession with fabric,
                construction, and finishing details that stand up to daily wear.
              </p>
            </article>

            {/* Card 2 */}
            <article className="luxury-card rounded-[var(--radius-xl)] p-5 sm:p-6 transition-transform duration-200 hover:-translate-y-1">
              <div className="mb-3 flex items-center justify-center h-9 w-9 rounded-full bg-[hsl(var(--bg-secondary))] text-xs tracking-[0.18em] uppercase text-[hsl(var(--text-secondary))]">
                EP
              </div>
              <h3 className="text-sm sm:text-base font-medium text-[hsl(var(--text-primary))] mb-2">
                Ethical Production
              </h3>
              <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))]">
                Our partners uphold fair working conditions and transparent
                practices, allowing us to create collections with integrity.
              </p>
            </article>

            {/* Card 3 */}
            <article className="luxury-card rounded-[var(--radius-xl)] p-5 sm:p-6 transition-transform duration-200 hover:-translate-y-1">
              <div className="mb-3 flex items-center justify-center h-9 w-9 rounded-full bg-[hsl(var(--bg-secondary))] text-xs tracking-[0.18em] uppercase text-[hsl(var(--text-secondary))]">
                TD
              </div>
              <h3 className="text-sm sm:text-base font-medium text-[hsl(var(--text-primary))] mb-2">
                Timeless Design
              </h3>
              <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))]">
                Clean lines, quiet tones, and purposeful proportions ensure each
                piece feels current today and considered in years to come.
              </p>
            </article>
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="w-full h-px bg-[hsl(var(--border-soft))]" />

        {/* SECTION 3 — CRAFTSMANSHIP */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="luxury-card overflow-hidden rounded-[var(--radius-2xl)] aspect-[4/5] sm:aspect-[16/11] animate-fade-in-soft">
              <img
                src="https://images.pexels.com/photos/3738086/pexels-photo-3738086.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Tailor working on fabric"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="order-1 lg:order-2 space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-light text-[hsl(var(--text-primary))]">
              Crafted with Precision
            </h2>
            <p className="text-sm sm:text-base text-[hsl(var(--text-secondary))] max-w-xl">
              From first sketch to final pressing, every garment passes through
              the hands of experienced pattern cutters and tailors. Subtle
              adjustments, hand-finished seams, and meticulous pressing ensure
              each piece sits precisely on the body.
            </p>
            <p className="text-sm sm:text-base text-[hsl(var(--text-secondary))] max-w-xl">
              We source textiles from responsible mills known for their
              innovation in comfort, drape, and durability. The result is a
              wardrobe of pieces that feel as considered on the inside as they
              look on the outside.
            </p>
            <p className="text-sm sm:text-base text-[hsl(var(--text-secondary))] max-w-xl">
              Rather than chasing trends, we refine core styles season after
              season, evolving details while preserving the character that our
              clients return to again and again.
            </p>

            <div className="pt-1">
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-[var(--radius-lg)] border border-[hsl(var(--border-soft))] text-xs sm:text-sm tracking-[0.18em] uppercase text-[hsl(var(--text-primary))] hover:border-[hsl(var(--accent))] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                Explore Collection
              </button>
            </div>
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="w-full h-px bg-[hsl(var(--border-soft))]" />

        {/* SECTION 4 — VISION QUOTE */}
        <section className="max-w-3xl mx-auto text-center space-y-6">
          <blockquote className="text-xl sm:text-2xl md:text-3xl italic leading-relaxed text-[hsl(var(--text-primary))]">
            &ldquo;Luxury, to us, is the quiet confidence of a wardrobe that
            works seamlessly, season after season, without ever needing to raise
            its voice.&rdquo;
          </blockquote>
          <div className="space-y-2">
            <p className="text-sm sm:text-base font-medium text-[hsl(var(--text-primary))]">
              Arjun Mehra
            </p>
            <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))]">
              Founder &amp; Creative Director, Estate Studio
            </p>
          </div>
          <div className="w-16 h-px mx-auto bg-[hsl(var(--border-soft))]" />
        </section>

        {/* SECTION 5 — CALL TO ACTION */}
        <section className="text-center space-y-4 sm:space-y-5">
          <h2 className="text-2xl sm:text-3xl font-light text-[hsl(var(--text-primary))]">
            Experience the Difference
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[hsl(var(--text-secondary))]">
            Discover a collection designed to move effortlessly between boardroom,
            gallery opening, and weekend escape—crafted to live with you, not
            just in your wardrobe.
          </p>
          <div className="pt-2">
            <button
              type="button"
              className="btn-primary inline-flex items-center justify-center px-8 h-11 rounded-[var(--radius-xl)] text-xs sm:text-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform duration-200"
            >
              Shop Now
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About
