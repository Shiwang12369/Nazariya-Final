import { useState } from 'react';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { name: 'Women', color: 'from-rose-500/20 to-pink-500/20', bg: 'bg-gradient-to-br' },
    { name: 'Men', color: 'from-slate-900/20 to-neutral-800/20', bg: 'bg-gradient-to-br' },
    { name: 'Accessories', color: 'from-amber-500/20 to-orange-500/20', bg: 'bg-gradient-to-br' },
  ];

  const products = [
    { name: 'Silk Cashmere Sweater', price: '₹18,500', image: 'model1' },
    { name: 'Organic Linen Shirt', price: '₹12,800', image: 'model2' },
    { name: 'Wool Blend Trousers', price: '₹24,900', image: 'model3' },
    { name: 'Leather Crossbody', price: '₹9,800', image: 'model4' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50/70 via-white/50 to-neutral-50/30">
      
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex items-center overflow-hidden pt-20 lg:pt-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Hero Content */}
          <div className="space-y-12 lg:space-y-16 max-w-lg animate-fade-in">
            <div className="inline-flex px-8 py-4 bg-white/60 backdrop-blur-sm border border-neutral-200/50 rounded-full text-sm font-medium text-neutral-700 tracking-wide">
              New Collection 2026
            </div>
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-serif font-light leading-none text-neutral-900 tracking-tight">
                Timeless
                <br />
                <span className="font-normal">Essentials</span>
              </h1>
              <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed max-w-md">
                Crafted with precision for enduring elegance. 
                <br className="hidden lg:inline" />
                Premium materials, minimal design.
              </p>
            </div>
            <button className="px-12 py-6 border-2 border-neutral-900 text-neutral-900 font-medium text-lg rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] backdrop-blur-sm">
              Shop Collection
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="aspect-[3/4] bg-gradient-to-br from-neutral-100/50 via-white/70 to-neutral-50 rounded-3xl shadow-2xl border border-neutral-200/50 overflow-hidden group hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-[url('/api/placeholder/600/800')] bg-cover bg-center" />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-neutral-200 shadow-xl">
                <span className="text-2xl font-serif font-light text-neutral-900">₹18,500</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY SECTION ===== */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-700"
          style={{ 
            backgroundImage: `url('/api/placeholder/1920/1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-serif font-light text-neutral-900 tracking-tight">
              Explore Categories
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className={`
                  group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer
                  ${hoveredCard === index 
                    ? 'scale-[1.05] shadow-3xl z-10' 
                    : 'scale-100 opacity-80 hover:opacity-100'
                  }
                  ${category.bg} ${category.color} backdrop-blur-sm border border-white/20
                `}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-[url('/api/placeholder/500/400')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <h3 className="text-4xl lg:text-5xl font-serif font-light text-white tracking-tight drop-shadow-lg">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-32 lg:py-40 bg-white/50 backdrop-blur-sm border-t border-neutral-100/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-serif font-light text-neutral-900 tracking-tight">
              About Our Brand
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-neutral-900/30 to-transparent mx-auto" />
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8 text-lg text-neutral-600 leading-relaxed">
            <p>
              ESTATE is more than clothing—it's a commitment to timeless craftsmanship. 
              Every piece is designed with precision and made with premium materials 
              that age beautifully with time.
            </p>
            <p>
              We source the finest organic fabrics and partner with artisans who 
              share our philosophy of minimalism and enduring quality. Less is 
              always more when it's made exceptionally well.
            </p>
            <p>
              From our studios in India to your wardrobe, every garment carries 
              the promise of quiet luxury that lasts.
            </p>
          </div>
          
          <button className="px-12 py-6 border-2 border-neutral-200 text-neutral-700 font-medium text-lg rounded-full hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 hover:shadow-xl">
            Learn More
          </button>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-32 lg:py-40">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-serif font-light text-neutral-900 tracking-tight">
              Featured Collection
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-neutral-900/30 to-transparent mx-auto mt-8" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className="group cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-neutral-100/50 via-white/70 to-neutral-50 rounded-3xl overflow-hidden border border-neutral-200/50 group-hover:border-neutral-300 shadow-lg group-hover:shadow-2xl">
                  <div className="h-4/5 bg-[url('/api/placeholder/300/400')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                  <div className="p-8 bg-white/80 backdrop-blur-sm">
                    <h3 className="text-xl font-serif font-light text-neutral-900 group-hover:text-neutral-800 transition-colors duration-300 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-serif font-light text-neutral-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
