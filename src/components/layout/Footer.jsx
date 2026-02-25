// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[hsl(0,0%,6%)] via-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)] text-[hsl(0,0%,80%)] border-t border-[hsl(0,0%,18%)] overflow-hidden">
      {/* Soft radial ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-24 items-start">
          {/* Brand section */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="text-4xl lg:text-5xl font-serif font-light tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              ESTATE
            </div>
            <p className="text-base text-[hsl(0,0%,68%)] max-w-xs leading-relaxed font-light">
              Refined essentials crafted with intention and timeless simplicity.
              <br className="hidden sm:inline" />
              Experience elevated design that endures.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <h4 className="text-lg font-serif font-light text-white tracking-tight">
              Navigation
            </h4>
            <div className="space-y-3">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group relative text-[hsl(0,0%,70%)] text-base font-light hover:text-white transition-all duration-300 block"
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[hsl(40,70%,60%)] to-transparent opacity-0 group-hover:opacity-100 group-hover:w-14 transition-all duration-500 ease-out rounded-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe section */}
          <div className="space-y-6 animate-fade-in-up animation-delay-300">
            <h4 className="text-lg font-serif font-light text-white tracking-tight">
              Subscribe
            </h4>
            <p className="text-[hsl(0,0%,68%)] font-light leading-relaxed max-w-sm">
              Join our circle for exclusive previews, invitations, and seasonal stories.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative max-w-xs flex items-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm text-[hsl(0,0%,90%)] placeholder-[hsl(0,0%,50%)] bg-[hsl(0,0%,12%)] border border-[hsl(0,0%,25%)] rounded-full focus:outline-none focus:border-[hsl(40,60%,60%)] transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-5 py-2.5 bg-[hsl(0,0%,98%)] text-[hsl(0,0%,5%)] rounded-full font-medium text-sm uppercase tracking-wide hover:bg-[hsl(0,0%,88%)] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact & Social */}
          <div className="space-y-8 animate-fade-in-up animation-delay-400 lg:text-right">
            <div>
              <h4 className="text-lg font-serif font-light text-white tracking-tight mb-4">
                Connect
              </h4>
              <a
                href="mailto:hello@estate.co"
                className="inline-block text-base font-light text-[hsl(0,0%,70%)] hover:text-[hsl(40,70%,60%)] transition-all duration-300 group"
              >
                hello@estate.co
                <svg
                  className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <div className="flex space-x-4 pt-2 lg:justify-end">
              {["instagram", "twitter", "linkedin"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-11 h-11 border border-[hsl(0,0%,25%)] rounded-full flex items-center justify-center hover:border-[hsl(40,70%,60%)] hover:bg-[hsl(0,0%,12%)] transition-all duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-[hsl(0,0%,70%)] group-hover:text-[hsl(40,70%,60%)] transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Bottom Section */}
        <div className="pt-16 mt-16 border-t border-[hsl(0,0%,18%)]">
          <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-[hsl(0,0%,55%)] space-y-4 lg:space-y-0">
            <span className="font-light tracking-tight">
              © 2026 ESTATE. All rights reserved.
            </span>
            <span className="font-light">
              Made with purpose in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
