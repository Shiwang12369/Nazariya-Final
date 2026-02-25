// src/pages/Cart.jsx
import { useMemo, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// const { cart, increaseQuantity, decreaseQuantity, removeFromCart, subtotal } = useCart();

const initialCart = [
  {
    id: '1',
    name: 'Silk Cashmere Overcoat',
    price: 480,
    quantity: 1,
    size: 'M',
    image:
      'https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    name: 'Tailored Wool Blazer',
    price: 320,
    quantity: 2,
    size: 'L',
    image:
      'https://images.pexels.com/photos/7671200/pexels-photo-7671200.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart)
  const [mounted, setMounted] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 40)
    return () => clearTimeout(timer)
  }, [])

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(item.quantity + 1, 99) }
          : item
      )
    )
  }

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    )
  }

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = useMemo(
    () =>
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  )

  const shipping = subtotal > 0 ? 20 : 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleCheckout = () => {
    if (!cartItems.length) return
    navigate('/checkout')
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[hsl(var(--bg-primary))]">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* SECTION 1 — PAGE HEADER */}
        <header className="mb-10 sm:mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-[hsl(var(--text-primary))]">
                Your Cart
              </h1>
              <p className="mt-2 text-sm sm:text-base text-[hsl(var(--text-secondary))]">
                Carefully curated pieces, ready to be tailored to your wardrobe.
              </p>
            </div>
            {cartItems.length > 0 && (
              <p className="hidden sm:block text-sm text-[hsl(var(--text-secondary))]">
                {cartItems.length} item{cartItems.length > 1 ? 's' : ''}
              </p>
            )}
          </div>
          <div className="w-full h-px bg-[hsl(var(--border-soft))]" />
        </header>

        {/* SECTION 2 — CART LAYOUT */}
        {cartItems.length === 0 ? (
          <section className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-base sm:text-lg text-[hsl(var(--text-secondary))] mb-4">
              Your cart is currently empty.
            </p>
            <Link
              to="/shop"
              className="btn-primary px-6 py-3 text-sm sm:text-base"
            >
              Continue shopping
            </Link>
          </section>
        ) : (
          <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] gap-10 lg:gap-12">
            {/* LEFT — CART ITEMS */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="luxury-card flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="w-full sm:w-40 md:w-44 shrink-0">
                    <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between gap-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between gap-4">
                        <div className="space-y-1">
                          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[hsl(var(--text-secondary))]">
                            {item.size ? `Size ${item.size}` : 'One Size'}
                          </p>
                          <h2 className="text-base sm:text-lg md:text-xl text-[hsl(var(--text-primary))]">
                            {item.name}
                          </h2>
                        </div>
                        <p className="text-base sm:text-lg font-medium text-[hsl(var(--text-primary))] whitespace-nowrap">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))] max-w-md">
                        Crafted from elevated fabrics with a focus on timeless
                        proportion and subtle detailing.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      {/* Quantity selector */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs uppercase tracking-[0.18em] text-[hsl(var(--text-secondary))]">
                          Quantity
                        </span>
                        <div className="flex items-center rounded-full border border-[hsl(var(--border-soft))] bg-[hsl(var(--bg-primary))] shadow-[0_6px_16px_rgba(0,0,0,0.04)] overflow-hidden">
                          <button
                            type="button"
                            onClick={() => handleDecrease(item.id)}
                            disabled={item.quantity === 1}
                            className={`w-9 h-9 flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                              item.quantity === 1
                                ? 'opacity-40 cursor-not-allowed'
                                : 'hover:bg-[hsl(var(--bg-secondary))]'
                            }`}
                          >
                            −
                          </button>
                          <span className="min-w-[2.5rem] text-center text-sm text-[hsl(var(--text-primary))]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleIncrease(item.id)}
                            className="w-9 h-9 flex items-center justify-center text-sm font-medium hover:bg-[hsl(var(--bg-secondary))] transition-all duration-200"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => handleRemove(item.id)}
                          className="text-xs sm:text-sm text-[hsl(var(--text-secondary))] underline underline-offset-4 hover:text-[hsl(var(--text-primary))] transition-colors duration-200"
                        >
                          Remove
                        </button>
                        <Link
                          to={`/product/${item.id}`}
                          className="text-xs sm:text-sm text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors duration-200"
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* RIGHT — ORDER SUMMARY */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <div className="luxury-card p-5 sm:p-6 space-y-5">
                <h2 className="text-lg sm:text-xl text-[hsl(var(--text-primary))]">
                  Order Summary
                </h2>

                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span className="text-[hsl(var(--text-secondary))]">
                      Subtotal
                    </span>
                    <span className="text-[hsl(var(--text-primary))]">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[hsl(var(--text-secondary))]">
                      Shipping
                    </span>
                    <span className="text-[hsl(var(--text-primary))]">
                      {shipping === 0 ? '—' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[hsl(var(--text-secondary))]">
                      Estimated tax
                    </span>
                    <span className="text-[hsl(var(--text-primary))]">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-[hsl(var(--border-soft))]" />

                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-medium text-[hsl(var(--text-primary))]">
                    Total
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold text-[hsl(var(--text-primary))]">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))]">
                  Duties &amp; taxes are estimated. Final amounts are confirmed
                  at checkout.
                </p>

                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={!cartItems.length}
                  className={`w-full h-12 sm:h-13 mt-3 rounded-full text-xs sm:text-sm tracking-[0.22em] uppercase bg-[hsl(var(--text-primary))] text-[hsl(var(--bg-primary))] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-200 ${
                    cartItems.length
                      ? 'hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.22)]'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  Proceed to checkout
                </button>

                <Link
                  to="/shop"
                  className="block text-center text-xs sm:text-sm text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] mt-3 tracking-[0.18em] uppercase transition-colors duration-200"
                >
                  Continue shopping
                </Link>
              </div>
            </aside>
          </section>
        )}
      </div>
    </main>
  )
}

export default Cart
