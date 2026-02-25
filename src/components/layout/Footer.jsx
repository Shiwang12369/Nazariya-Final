const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-100/50 bg-gradient-to-t from-neutral-50/60 to-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start">
          
          {/* Brand Section */}
          <div className="max-w-sm space-y-6 fade-in-up">
            <div className="text-3xl lg:text-4xl font-serif font-light tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900/70 bg-clip-text text-transparent">
              ESTATE
            </div>
            <p className="text-lg text-neutral-600 leading-relaxed font-light max-w-xs">
              Timeless essentials crafted for enduring elegance. 
              <br className="hidden sm:inline" />
              Precision design, premium materials.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6 fade-in-up animation-delay-200">
            <h4 className="text-xl font-serif font-light text-neutral-900 tracking-tight">Navigation</h4>
            <div className="space-y-3">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group relative text-lg font-light text-neutral-700 hover:text-neutral-900 block h-7 transition-all duration-300"
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500 ease-out rounded-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-8 fade-in-up animation-delay-400 lg:text-right">
            <div>
              <h4 className="text-xl font-serif font-light text-neutral-900 tracking-tight mb-4">Connect</h4>
              <a href="mailto:hello@estate.co" className="block text-lg font-light text-neutral-700 hover:text-neutral-900 transition-colors duration-200 group">
                hello@estate.co
                <svg className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="flex space-x-4 pt-2">
              {['instagram', 'twitter', 'linkedin'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-11 h-11 border border-neutral-200/50 hover:border-neutral-300 hover:bg-neutral-50 rounded-xl flex items-center justify-center transition-all duration-200 group backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 text-neutral-700 group-hover:text-neutral-900 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-16 mt-16 border-t border-neutral-100/30">
          <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-neutral-600 space-y-4 lg:space-y-0">
            <span className="font-light tracking-tight">
              © 2026 ESTATE. All rights reserved.
            </span>
            <span className="font-light">
              Made with care in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
