// src/pages/Product.jsx - Ultra Premium Production-Ready Single Product Page
import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'

const mockProducts = [
  {
    id: '1',
    name: 'Silk Cashmere Overcoat',
    price: 480,
    category: 'Outerwear',
    description:
      'A softly structured overcoat in a silk-cashmere blend, tailored with clean lines and discreet hand-finished details. Italian-sourced fabric with subtle hand stitching at the seams.',
    images: [
      'https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7671165/pexels-photo-7671165.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7671167/pexels-photo-7671167.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7671158/pexels-photo-7671158.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    details: {
      fit: 'Tailored',
      material: '80% Silk, 20% Cashmere',
      origin: 'Made in Italy',
      care: 'Dry clean only'
    }
  },
  {
    id: '2',
    name: 'Tailored Wool Blazer',
    price: 320,
    category: 'Blazers',
    description:
      'Single-breasted blazer in superfine wool merino, featuring a softly nipped waist and lightly padded shoulders for modern silhouette. Half-canvas construction.',
    images: [
      'https://images.pexels.com/photos/7671200/pexels-photo-7671200.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7697260/pexels-photo-7697260.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7697259/pexels-photo-7697259.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7697258/pexels-photo-7697258.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    details: {
      fit: 'Slim',
      material: '100% Superfine Wool',
      origin: 'Made in Italy',
      care: 'Dry clean only'
    }
  },
  {
    id: '3',
    name: 'Fine Cotton Oxford Shirt',
    price: 140,
    category: 'Shirts',
    description:
      'Classic Oxford shirt in compact Egyptian cotton, featuring refined collar and elongated cuffs. Mother-of-pearl buttons and single chest pocket.',
    images: [
      'https://images.pexels.com/photos/7697301/pexels-photo-7697301.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7697310/pexels-photo-7697310.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7697312/pexels-photo-7697312.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7697314/pexels-photo-7697314.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    details: {
      fit: 'Regular',
      material: '100% Egyptian Cotton',
      origin: 'Made in Portugal',
      care: 'Machine wash cold'
    }
  },
]

const sizes = ['XS', 'S', 'M', 'L', 'XL']

// Custom fade-in scroll hook
const useScrollFadeIn = () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

// Premium Product Page Component
const Product = () => {
  const { id } = useParams()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activeSize, setActiveSize] = useState('M')
  const [openAccordion, setOpenAccordion] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const product = useMemo(
    () => mockProducts.find((p) => p.id === id) || mockProducts[0],
    [id]
  )

  const relatedProducts = useMemo(
    () => mockProducts.filter((p) => p.id !== product.id).slice(0, 4),
    [product.id]
  )

  // Page mount animation
  useEffect(() => {
    setMounted(false)
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [id])

  const handleImageChange = useCallback((index) => {
    setActiveImageIndex(index)
  }, [])

  const toggleAccordion = useCallback((section) => {
    setOpenAccordion(prev => prev === section ? null : section)
  }, [])

  const incrementQuantity = () => setQuantity(prev => Math.min(prev + 1, 99))
  const decrementQuantity = () => setQuantity(prev => Math.max(prev - 1, 1))

  const { ref: infoRef, visible: infoVisible } = useScrollFadeIn()
  const { ref: detailsRef, visible: detailsVisible } = useScrollFadeIn()
  const { ref: relatedRef, visible: relatedVisible } = useScrollFadeIn()

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[hsl(var(--bg-primary))]">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-[hsl(var(--text-secondary))]">
          <Link to="/shop" className="hover:text-[hsl(var(--text-primary))] transition-colors duration-200">
            Shop
          </Link>
          <span className="w-1 h-1 bg-[hsl(var(--border-soft))] rounded-full" />
          <span className="uppercase tracking-[0.2em] font-medium">
            {product.category}
          </span>
        </nav>

        {/* Main Product Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="luxury-card overflow-hidden group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.images[activeImageIndex]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg-primary))] via-transparent/0 to-transparent" />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3" role="tablist">
              {product.images.map((src, index) => {
                const isActive = index === activeImageIndex
                return (
                  <button
                    key={src}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleImageChange(index)}
                    className={`luxury-card overflow-hidden aspect-square transition-all duration-300 hover:scale-[1.02] ${
                      isActive 
                        ? 'ring-2 ring-[hsl(var(--accent))]/50 shadow-lg scale-[1.03]' 
                        : 'hover:ring-1 hover:ring-[hsl(var(--accent))]/20'
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${product.name} - view ${index + 1}`}
                      className="h-full w-full object-cover hover:scale-[1.06] transition-transform duration-300"
                    />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Product Info */}
          <div ref={infoRef} className={`space-y-8 transition-all duration-700 delay-200 ${
            infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--text-secondary))]">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-light text-[hsl(var(--text-primary))]">
                {product.name}
              </h1>
              <div className="flex items-start gap-4">
                <p className="text-3xl md:text-4xl font-light text-[hsl(var(--text-primary))]">
                  ${product.price.toLocaleString()}
                </p>
                <div className="h-8 w-px bg-[hsl(var(--border-soft))]" />
                <span className="px-3 py-1 text-xs uppercase tracking-[0.18em] bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] rounded-full">
                  Limited Stock
                </span>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-[hsl(var(--text-secondary))] max-w-2xl">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium uppercase tracking-[0.18em] text-[hsl(var(--text-secondary))]">
                  Select Size
                </label>
                <Link 
                  to="#" 
                  className="text-xs underline underline-offset-4 text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors"
                >
                  Size Guide →
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => {
                  const isActive = size === activeSize
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setActiveSize(size)}
                      className={`relative px-4 py-2.5 text-sm font-medium rounded-[var(--radius-lg)] transition-all duration-300 group ${
                        isActive
                          ? 'bg-[hsl(var(--accent))] text-[hsl(var(--bg-primary))] shadow-lg scale-105 ring-2 ring-[hsl(var(--accent))]/30'
                          : 'border-2 border-[hsl(var(--border-soft))] text-[hsl(var(--text-primary))] hover:border-[hsl(var(--accent))] hover:shadow-md hover:-translate-y-px hover:scale-[1.02]'
                      }`}
                      aria-pressed={isActive}
                    >
                      {size}
                      {!isActive && (
                        <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-[hsl(var(--accent))]/5 scale-0 group-hover:scale-100 transition-transform origin-center duration-300" />
                      )}
                    </button>
                  )
                })}
              </div>
              <p className="text-xs text-[hsl(var(--text-secondary))]">
                Model is 6'1" (185cm) and wears size M. Runs true to size.
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium uppercase tracking-[0.18em] text-[hsl(var(--text-secondary))] w-20">
                  Quantity
                </label>
                <div className="flex items-center border-2 border-[hsl(var(--border-soft))] rounded-[var(--radius-lg)] overflow-hidden w-28">
                  <button
                    type="button"
                    onClick={decrementQuantity}
                    className="flex-1 p-3 hover:bg-[hsl(var(--bg-secondary))] transition-colors duration-200"
                  >
                    −
                  </button>
                  <span className="px-4 py-3 text-lg font-medium text-[hsl(var(--text-primary))]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={incrementQuantity}
                    className="flex-1 p-3 hover:bg-[hsl(var(--bg-secondary))] transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <button className="btn-primary w-full h-14 text-lg font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  Add to Cart — ${(product.price * quantity).toLocaleString()}
                </button>
                <button className="w-full h-14 rounded-[var(--radius-lg)] border-2 border-[hsl(var(--border-soft))] text-lg font-medium text-[hsl(var(--text-primary))] transition-all duration-300 hover:border-[hsl(var(--accent))] hover:shadow-lg hover:-translate-y-px">
                  Add to Wishlist
                </button>
              </div>
            </div>

            {/* Product Specs */}
            <div className="grid grid-cols-2 gap-6 p-6 luxury-card">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--text-secondary))] mb-2">
                  Fit
                </p>
                <p className="text-sm font-medium text-[hsl(var(--text-primary))]">{product.details.fit}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--text-secondary))] mb-2">
                  Origin
                </p>
                <p className="text-sm font-medium text-[hsl(var(--text-primary))]">{product.details.origin}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--text-secondary))] mb-2">
                  Material
                </p>
                <p className="text-sm font-medium text-[hsl(var(--text-primary))]">{product.details.material}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--text-secondary))] mb-2">
                  Care
                </p>
                <p className="text-sm font-medium text-[hsl(var(--text-primary))]">{product.details.care}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Details Accordion */}
        <section ref={detailsRef} className={`space-y-3 mb-20 transition-all duration-700 delay-400 ${
          detailsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <AccordionItem
            id="description"
            title="Product Description"
            open={openAccordion === 'description'}
            onToggle={toggleAccordion}
          >
            <div className="prose prose-sm max-w-none text-[hsl(var(--text-secondary))]">
              <p className="mb-4">
                Crafted from the finest materials and designed for timeless elegance, this piece exemplifies our commitment to quality and sophistication. 
                Every detail has been meticulously considered, from the hand-stitched seams to the perfectly balanced proportions.
              </p>
              <p>
                Pair with tailored trousers for formal occasions or relaxed denim for a refined casual look. This garment transcends seasons and trends, 
                becoming a cornerstone of any discerning wardrobe.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem id="fabric" title="Fabric & Care" open={openAccordion === 'fabric'} onToggle={toggleAccordion}>
            <div className="space-y-3 text-sm text-[hsl(var(--text-secondary))]">
              <div>
                <h4 className="font-medium text-[hsl(var(--text-primary))] mb-2">Composition</h4>
                <p>{product.details.material}</p>
              </div>
              <div>
                <h4 className="font-medium text-[hsl(var(--text-primary))] mb-2">Care Instructions</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Dry clean only using perchloroethylene</li>
                  <li>Store on padded hanger away from direct sunlight</li>
                  <li>Steam to remove minor wrinkles</li>
                  <li>Avoid prolonged exposure to moisture</li>
                </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem id="shipping" title="Shipping & Returns" open={openAccordion === 'shipping'} onToggle={toggleAccordion}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[hsl(var(--text-secondary))]">
              <div>
                <h4 className="font-medium text-[hsl(var(--text-primary))] mb-3">Delivery</h4>
                <ul className="space-y-2">
                  <li>Complimentary standard shipping (3-5 days)</li>
                  <li>Express delivery available (+$25, 1-2 days)</li>
                  <li>Free returns within 30 days</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[hsl(var(--text-primary))] mb-3">Returns</h4>
                <ul className="space-y-2">
                  <li>30-day return policy</li>
                  <li>Must be unworn with tags attached</li>
                  <li>Refund processed within 5 business days</li>
                </ul>
              </div>
            </div>
          </AccordionItem>
        </section>

        {/* Related Products */}
        <section ref={relatedRef} className={`space-y-8 transition-all duration-700 delay-600 ${
          relatedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-2xl md:text-3xl font-light text-[hsl(var(--text-primary))]">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rp) => (
              <Link
                key={rp.id}
                to={`/product/${rp.id}`}
                className="group h-full"
              >
                <article className="luxury-card h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[hsl(var(--bg-secondary))]">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-[hsl(var(--text-primary))] rounded-full shadow-lg">
                        New
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs uppercase tracking-[0.22em] text-[hsl(var(--text-secondary))] mb-2">
                      {rp.category}
                    </p>
                    <h3 className="text-lg font-light text-[hsl(var(--text-primary))] mb-3 line-clamp-2 group-hover:text-[hsl(var(--accent))] transition-colors">
                      {rp.name}
                    </h3>
                    <p className="text-xl font-medium text-[hsl(var(--text-primary))] mb-auto">
                      ${rp.price.toLocaleString()}
                    </p>
                    <button className="mt-4 btn-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-sm">
                      Quick View
                    </button>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

const AccordionItem = ({ id, title, open, onToggle, children }) => {
  return (
    <div className="luxury-card overflow-hidden border border-[hsl(var(--border-soft))]/50">
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between px-6 py-5 hover:bg-[hsl(var(--bg-secondary))] transition-colors duration-200"
      >
        <span className="text-base font-medium text-[hsl(var(--text-primary))]">{title}</span>
        <span className={`transition-transform duration-300 ease-out w-6 h-6 flex items-center justify-center rounded-full border-2 border-[hsl(var(--border-soft))] text-sm font-medium ${
          open ? 'bg-[hsl(var(--accent))] text-[hsl(var(--bg-primary))]' : 'text-[hsl(var(--text-secondary))]'
        }`}>
          {open ? '−' : '+'}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-out ${
        open ? 'max-h-96 py-4 px-6' : 'max-h-0 py-0 px-0'
      }`}>
        <div className="pt-2">{children}</div>
      </div>
    </div>
  )
}

export default Product
