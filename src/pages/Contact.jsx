// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-[hsl(var(--bg))] text-[hsl(var(--text))]">
      {/* SECTION 1 — HERO HEADER */}
      <section className="w-full py-28 text-center animate-fade-in">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center space-y-6">
          <span className="uppercase tracking-[0.25em] text-sm font-light text-[hsl(var(--subtle-text))]">
            Contact
          </span>
          <h1 className="text-5xl font-serif font-light tracking-tight">
            Get In Touch
          </h1>
          <p className="text-lg font-light text-[hsl(var(--muted-text))] max-w-lg leading-relaxed">
            We’re here to help with styling advice, bespoke orders, or collaboration inquiries.
          </p>
          <div className="w-16 h-px bg-[hsl(var(--divider))] mt-2" />
        </div>
      </section>

      {/* SECTION 2 — MAIN CONTACT LAYOUT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6 items-start">
          {/* LEFT — CONTACT FORM */}
          <div className="luxury-card p-10 rounded-2xl shadow-[var(--shadow-soft)] bg-[hsl(var(--card-bg))] space-y-6 animate-fade-in-up">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-[hsl(var(--text))]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg bg-transparent focus:ring-2 focus:ring-[hsl(var(--accent))] outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[hsl(var(--text))]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg bg-transparent focus:ring-2 focus:ring-[hsl(var(--accent))] outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[hsl(var(--text))]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg bg-transparent focus:ring-2 focus:ring-[hsl(var(--accent))] outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[hsl(var(--text))]">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg bg-transparent focus:ring-2 focus:ring-[hsl(var(--accent))] outline-none transition-all duration-300 resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT — CONTACT DETAILS */}
          <div className="space-y-10 animate-fade-in-up animation-delay-200">
            {[
              {
                icon: "🏛️",
                title: "Address",
                desc: "123 Maison Avenue, Floor 4, New Delhi, India",
              },
              {
                icon: "✉️",
                title: "Email",
                desc: "support@estate.co",
              },
              {
                icon: "📞",
                title: "Phone",
                desc: "+91 98765 43210",
              },
              {
                icon: "🕰️",
                title: "Business Hours",
                desc: "Mon - Fri | 10:00 AM - 6:00 PM",
              },
            ].map((info, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-5 rounded-xl transition-all duration-300 hover:shadow-[var(--shadow-elevate)] hover:-translate-y-0.5 bg-[hsl(var(--card-bg))] border border-[hsl(var(--border))]"
              >
                <div className="text-2xl text-[hsl(var(--accent))]">{info.icon}</div>
                <div>
                  <h4 className="text-lg font-medium">{info.title}</h4>
                  <p className="text-sm text-[hsl(var(--muted-text))] mt-1 leading-relaxed">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-4">
              {["instagram", "twitter", "linkedin"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-[hsl(var(--border))] rounded-full hover:bg-[hsl(var(--hover-bg))] transition-all duration-300 hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="text-sm capitalize">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — MAP SECTION */}
      <section className="py-28 bg-[hsl(var(--section-bg))] text-center animate-fade-in-up">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl font-serif font-light">Visit Our Studio</h2>
          <div className="w-full aspect-[16/9] bg-[hsl(var(--card-bg))] rounded-2xl shadow-[var(--shadow-soft)] flex items-center justify-center text-[hsl(var(--muted-text))]">
            {/* Map placeholder */}
            <span>Map Embed Placeholder</span>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA SECTION */}
      <section className="py-28 text-center animate-fade-in-up">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-serif font-light leading-snug">
            Let’s Build Something Timeless Together
          </h2>
          <p className="text-[hsl(var(--muted-text))] font-light leading-relaxed">
            Discover craftsmanship that transcends trends — designed for those who value refinement and durability.
          </p>
          <button className="btn-primary">Shop Now</button>
        </div>
      </section>
    </main>
  );
};

export default Contact;
