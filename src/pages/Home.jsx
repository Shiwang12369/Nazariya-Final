// src/pages/Home.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const categories = [
    { name: 'Women', route: '/shop?category=women', image: 'https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?w=800' },
    { name: 'Men', route: '/shop?category=men', image: 'https://images.pexels.com/photos/3738086/pexels-photo-3738086.jpeg?w=800' },
    { name: 'Accessories', route: '/shop?category=accessories', image: 'https://images.pexels.com/photos/7671215/pexels-photo-7671215.jpeg?w=800' },
  ]

  const products = [
    { name: 'Silk Cashmere Sweater', price: '₹18,500', image: 'https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?w=400', route: '/product/1' },
    { name: 'Organic Linen Shirt', price: '₹12,800', image: 'https://images.pexels.com/photos/7671200/pexels-photo-7671200.jpeg?w=400', route: '/product/2' },
    { name: 'Wool Blend Trousers', price: '₹24,900', image: 'https://images.pexels.com/photos/3738086/pexels-photo-3738086.jpeg?w=400', route: '/product/3' },
    { name: 'Leather Crossbody Bag', price: '₹9,800', image: 'https://images.pexels.com/photos/7671215/pexels-photo-7671215.jpeg?w=400', route: '/product/4' },
  ]

  return (
    <main className="min-h-screen bg-[hsl(var(--bg-primary))]">
      {/* HERO SECTION */}
      <section className="pt-24 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT - TEXT */}
            <div className="space-y-8 max-w-lg">
              <div className="inline-flex px-6 py-3 bg-[hsl(var(--bg-elevated))] rounded-full text-sm font-medium uppercase tracking-wider border border-[hsl(var(--border-soft))] shadow-lg">
                New Collection 2026
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                  Timeless
                  <br />
                  <span className="font-normal">Essentials</span>
                </h1>
                <p className="text-lg text-[hsl(var(--text-secondary))] mb-8 max-w-md">
                  Crafted with precision for enduring elegance. Premium materials, minimal design.
                </p>
              </div>
              <Link
                to="/shop"
                className="inline-block px-10 py-5 bg-[hsl(var(--text-primary))] text-[hsl(var(--bg-primary))] text-lg font-medium uppercase tracking-wider rounded-full shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
              >
                Shop Collection
              </Link>
            </div>

            {/* RIGHT - IMAGE */}
            <div>
              <div className="luxury-card w-full aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl relative group hover:shadow-3xl transition-all duration-500">
                <img
                  src="https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?w=800"
                  alt="Hero"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-[hsl(var(--bg-elevated))] px-6 py-3 rounded-2xl border shadow-xl">
                  <span className="text-xl font-light text-[hsl(var(--text-primary))] block">₹18,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-transparent to-[hsl(var(--border-soft))]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">Explore Categories</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.route}
                className="group relative h-64 md:h-80 rounded-[2rem] overflow-hidden luxury-card shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer border-[hsl(var(--border-soft))]"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-20 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl md:text-4xl font-light text-white drop-shadow-2xl">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 lg:py-32 bg-[hsl(var(--bg-elevated))] border-y border-[hsl(var(--border-soft))]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">About Our Brand</h2>
          <div className="w-24 h-px bg-[hsl(var(--text-primary))]/30 mx-auto mb-12" />
          
          <div className="max-w-2xl mx-auto space-y-6 text-lg text-[hsl(var(--text-secondary))]">
            <p>ESTATE is more than clothing—it's a commitment to timeless craftsmanship.</p>
            <p>We source the finest organic fabrics and partner with artisans who share our philosophy of minimalism and enduring quality.</p>
            <p>From our studios in India to your wardrobe, every garment carries the promise of quiet luxury.</p>
          </div>
          
          <Link
            to="/about"
            className="mt-12 inline-block px-10 py-5 border-2 border-[hsl(var(--border-soft))] text-[hsl(var(--text-primary))] text-lg font-medium uppercase tracking-wider rounded-full hover:border-[hsl(var(--accent))] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">Featured Collection</h2>
            <div className="w-24 h-px bg-[hsl(var(--text-primary))]/30 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.name}
                to={product.route}
                className="group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[1.75rem] overflow-hidden luxury-card shadow-lg"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light text-[hsl(var(--text-primary))] mb-3 line-clamp-2 group-hover:text-[hsl(var(--accent))]">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-light text-[hsl(var(--text-primary))] tracking-tight">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
