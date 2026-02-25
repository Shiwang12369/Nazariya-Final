// src/pages/Shop.jsx
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom' // ✅ sirf yeh import add

const mockProducts = [
  {
    id: '1',
    name: 'Silk Cashmere Overcoat',
    price: 480.0,
    category: 'Outerwear',
    image:
      'https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    name: 'Tailored Wool Blazer',
    price: 320.0,
    category: 'Blazers',
    image:
      'https://images.pexels.com/photos/7671200/pexels-photo-7671200.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    name: 'Fine Cotton Oxford Shirt',
    price: 140.0,
    category: 'Shirts',
    image:
      'https://images.pexels.com/photos/7671250/pexels-photo-7671250.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    name: 'Italian Leather Loafers',
    price: 260.0,
    category: 'Footwear',
    image:
      'https://images.pexels.com/photos/7691086/pexels-photo-7691086.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '5',
    name: 'Relaxed Linen Trousers',
    price: 190.0,
    category: 'Trousers',
    image:
      'https://images.pexels.com/photos/7697319/pexels-photo-7697319.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '6',
    name: 'Cashmere Crewneck Knit',
    price: 210.0,
    category: 'Knitwear',
    image:
      'https://images.pexels.com/photos/7697301/pexels-photo-7697301.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

// Simple “fade-in on scroll once” hook (can be reused)
const useFadeInOnScroll = () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  // Categories derived from data (easy to replace with Supabase)
  const categories = useMemo(() => {
    const base = new Set(mockProducts.map((p) => p.category))
    return ['all', ...Array.from(base)]
  }, [])

  const filteredAndSorted = useMemo(() => {
    let result = [...mockProducts]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedPrice !== 'all') {
      if (selectedPrice === '0-200') {
        result = result.filter((p) => p.price <= 200)
      } else if (selectedPrice === '200-400') {
        result = result.filter((p) => p.price > 200 && p.price <= 400)
      } else if (selectedPrice === '400+') {
        result = result.filter((p) => p.price > 400)
      }
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'newest') {
      // placeholder for created_at from Supabase later
      result.sort((a, b) => Number(b.id) - Number(a.id))
    }

    return result
  }, [selectedCategory, selectedPrice, sortBy])

  const { ref: headerRef, visible: headerVisible } = useFadeInOnScroll()
  const { ref: controlsRef, visible: controlsVisible } = useFadeInOnScroll()
  const { ref: gridRef, visible: gridVisible } = useFadeInOnScroll()

  return (
    <main
      className="min-h-screen pt-24 pb-20"
      style={{ backgroundColor: 'hsl(var(--bg-secondary))' }}
    >
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION 1 — PAGE HEADER */}
        <header
          ref={headerRef}
          className={`transition-all duration-500 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="space-y-3 pb-6">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl tracking-tight"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              Shop Collection
            </h1>
            <p
              className="max-w-xl text-sm sm:text-base"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              Curated pieces in limited runs, crafted from elevated fabrics in timeless
              silhouettes.
            </p>
            <div
              className="w-full h-px"
              style={{ backgroundColor: 'hsl(var(--border-soft))' }}
            />
          </div>
        </header>

        {/* SECTION 2 — FILTER & SORT BAR */}
        <section
          ref={controlsRef}
          className={`mb-10 sm:mb-12 transition-all duration-500 ease-out ${
            controlsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Category Filter */}
              <div className="w-full sm:w-56">
                <label
                  className="block text-xs uppercase tracking-[0.18em] mb-1"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full appearance-none text-sm px-3.5 py-2.5 rounded-[var(--radius-md)] bg-transparent outline-none transition-all duration-200"
                    style={{
                      borderColor: 'hsl(var(--border-soft))',
                      borderWidth: '1px',
                      color: 'hsl(var(--text-primary))',
                    }}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat === 'all'
                          ? 'All categories'
                          : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                  <span
                    className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                  >
                    ▾
                  </span>
                </div>
              </div>

              {/* Price Filter */}
              <div className="w-full sm:w-48">
                <label
                  className="block text-xs uppercase tracking-[0.18em] mb-1"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  Price
                </label>
                <div className="relative">
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    className="w-full appearance-none text-sm px-3.5 py-2.5 rounded-[var(--radius-md)] bg-transparent outline-none transition-all duration-200"
                    style={{
                      borderColor: 'hsl(var(--border-soft))',
                      borderWidth: '1px',
                      color: 'hsl(var(--text-primary))',
                    }}
                  >
                    <option value="all">Any price</option>
                    <option value="0-200">$0 — $200</option>
                    <option value="200-400">$200 — $400</option>
                    <option value="400+">$400+</option>
                  </select>
                  <span
                    className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                  >
                    ▾
                  </span>
                </div>
              </div>
            </div>

            {/* Sort */}
            <div className="w-full sm:w-56">
              <label
                className="block text-xs uppercase tracking-[0.18em] mb-1"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                Sort
              </label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none text-sm px-3.5 py-2.5 rounded-[var(--radius-md)] bg-transparent outline-none transition-all duration-200"
                  style={{
                    borderColor: 'hsl(var(--border-soft))',
                    borderWidth: '1px',
                    color: 'hsl(var(--text-primary))',
                  }}
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <span
                  className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  ▾
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — PRODUCT GRID */}
        <section
          ref={gridRef}
          className={`transition-all duration-500 ease-out ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {filteredAndSorted.length === 0 ? (
            <div className="py-12 text-center">
              <p
                className="text-sm sm:text-base"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                No pieces found for the selected filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
              {filteredAndSorted.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`} // ✅ yahan se dusra page open hoga
                  className="group"
                >
                  <article className="luxury-card group flex flex-col overflow-hidden">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="flex flex-1 flex-col px-4 pt-4 pb-4 sm:px-5 sm:pt-5 sm:pb-5">
                      <div className="flex items-baseline justify-between gap-3 mb-3">
                        <div className="space-y-1">
                          <p
                            className="text-[0.7rem] tracking-[0.22em] uppercase"
                            style={{ color: 'hsl(var(--text-secondary))' }}
                          >
                            {product.category}
                          </p>
                          <h3
                            className="text-base sm:text-lg leading-snug"
                            style={{ color: 'hsl(var(--text-primary))' }}
                          >
                            {product.name}
                          </h3>
                        </div>
                        <span
                          className="text-sm sm:text-base whitespace-nowrap"
                          style={{ color: 'hsl(var(--text-primary))' }}
                        >
                          ${product.price.toFixed(2)}
                        </span>
                      </div>

                      <div className="mt-auto pt-2">
                        <button className="btn-primary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out w-full text-sm">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  )
}

export default Shop
