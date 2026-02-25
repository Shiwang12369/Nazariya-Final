// src/pages/Checkout.jsx
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Mock cart data (replace with real cart state later)
const mockCart = [
  {
    id: '1',
    name: 'Silk Cashmere Overcoat',
    price: 480,
    quantity: 1,
  },
  {
    id: '2',
    name: 'Tailored Wool Blazer',
    price: 320,
    quantity: 1,
  },
]

const Checkout = () => {
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 40)
    return () => clearTimeout(timer)
  }, [])

  const subtotal = useMemo(
    () =>
      mockCart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    []
  )

  const shipping = subtotal > 0 ? 20 : 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}

    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.'
    }
    if (!form.phone.trim()) newErrors.phone = 'Phone is required.'
    if (!form.address1.trim()) newErrors.address1 = 'Address is required.'
    if (!form.city.trim()) newErrors.city = 'City is required.'
    if (!form.state.trim()) newErrors.state = 'State is required.'
    if (!form.postalCode.trim())
      newErrors.postalCode = 'Postal code is required.'
    if (!form.country.trim()) newErrors.country = 'Country is required.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 1. Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const existing = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      )
      if (existing) {
        return resolve(true)
      }

      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  // 2–6. Payment handler (structure only, backend integration required)
  const handlePayment = async () => {
    if (!validate()) return
    if (!subtotal) return

    setSubmitting(true)

    try {
      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        alert('Payment service failed to load. Please try again.')
        setSubmitting(false)
        return
      }

      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: Math.round(total * 100),
          currency: 'INR',
          receipt: `order_rcpt_${Date.now()}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create order.')
      }

      const order = await response.json()
      const { order_id } = order

      const options = {
        key: 'RAZORPAY_KEY_ID',
        amount: Math.round(total * 100),
        currency: 'INR',
        name: 'Estate Studio',
        description: 'Order payment',
        order_id,
        prefill: {
          name: form.fullName,
          email: form.email,
          contact: form.phone,
        },
        notes: {
          address: `${form.address1}, ${form.address2}, ${form.city}, ${form.state}, ${form.country} - ${form.postalCode}`,
        },
        theme: {
          color: 'hsl(var(--accent))',
        },
        handler: async function () {
          navigate('/order-success', { replace: true })
        },
        modal: {
          ondismiss: () => {
            setSubmitting(false)
          },
        },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (error) {
      console.error(error)
      alert('Unable to initiate payment. Please try again.')
      setSubmitting(false)
    }
  }

  const inputClasses =
    'w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-[hsl(var(--border-soft))] bg-transparent text-sm text-[hsl(var(--text-primary))] outline-none transition-all duration-200 focus:border-[hsl(var(--accent))] focus:ring-1 focus:ring-[hsl(var(--accent))]'
  const labelClasses =
    'block text-xs font-medium uppercase tracking-[0.18em] mb-1 text-[hsl(var(--text-secondary))]'
  const errorClasses =
    'mt-1 text-xs text-[hsl(var(--destructive))]'

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[hsl(var(--bg-primary))]">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* SECTION 1 — HEADER */}
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-[hsl(var(--text-primary))]">
            Checkout
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[hsl(var(--text-secondary))]">
            Enter your details below to complete your order with Estate Studio.
          </p>
          <div className="mt-4 w-full h-px bg-[hsl(var(--border-soft))]" />
        </header>

        {/* SECTION 2 — TWO COLUMN LAYOUT */}
        <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] gap-10 lg:gap-12">
          {/* LEFT — SHIPPING & CONTACT FORM */}
          <div className="space-y-8">
            <div className="luxury-card p-5 sm:p-6">
              <h2 className="text-lg sm:text-xl mb-5 text-[hsl(var(--text-primary))]">
                Shipping & Contact
              </h2>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  handlePayment()
                }}
              >
                {/* Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses} htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      className={inputClasses}
                      value={form.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <p className={errorClasses}>{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClasses} htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={inputClasses}
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className={errorClasses}>{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className={labelClasses} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClasses}
                    value={form.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className={errorClasses}>{errors.phone}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className={labelClasses} htmlFor="address1">
                    Address Line 1
                  </label>
                  <input
                    id="address1"
                    name="address1"
                    type="text"
                    autoComplete="address-line1"
                    className={inputClasses}
                    value={form.address1}
                    onChange={handleChange}
                  />
                  {errors.address1 && (
                    <p className={errorClasses}>{errors.address1}</p>
                  )}
                </div>

                <div>
                  <label className={labelClasses} htmlFor="address2">
                    Address Line 2 (Optional)
                  </label>
                  <input
                    id="address2"
                    name="address2"
                    type="text"
                    autoComplete="address-line2"
                    className={inputClasses}
                    value={form.address2}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses} htmlFor="city">
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      className={inputClasses}
                      value={form.city}
                      onChange={handleChange}
                    />
                    {errors.city && (
                      <p className={errorClasses}>{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClasses} htmlFor="state">
                      State
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      autoComplete="address-level1"
                      className={inputClasses}
                      value={form.state}
                      onChange={handleChange}
                    />
                    {errors.state && (
                      <p className={errorClasses}>{errors.state}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses} htmlFor="postalCode">
                      Postal Code
                    </label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      autoComplete="postal-code"
                      className={inputClasses}
                      value={form.postalCode}
                      onChange={handleChange}
                    />
                    {errors.postalCode && (
                      <p className={errorClasses}>{errors.postalCode}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClasses} htmlFor="country">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      autoComplete="country"
                      className={inputClasses}
                      value={form.country}
                      onChange={handleChange}
                    />
                    {errors.country && (
                      <p className={errorClasses}>{errors.country}</p>
                    )}
                  </div>
                </div>

                {/* Payment CTA */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting || !mockCart.length}
                    className={`w-full h-12 sm:h-13 rounded-full text-xs sm:text-sm tracking-[0.22em] uppercase bg-[hsl(var(--text-primary))] text-[hsl(var(--bg-primary))] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-200 ${
                      submitting || !mockCart.length
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.22)]'
                    }`}
                  >
                    {submitting ? 'Processing…' : 'Pay Securely'}
                  </button>
                  <p className="mt-2 text-xs sm:text-sm text-[hsl(var(--text-secondary))]">
                    Payments are processed securely via Razorpay. We do not store
                    your card details.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="luxury-card p-5 sm:p-6 space-y-5">
              <h2 className="text-lg sm:text-xl text-[hsl(var(--text-primary))]">
                Order Summary
              </h2>

              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {mockCart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="flex-1">
                      <p className="text-sm text-[hsl(var(--text-primary))]">
                        {item.name}
                      </p>
                      <p className="text-xs text-[hsl(var(--text-secondary))]">
                        Qty {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm text-[hsl(var(--text-primary))] whitespace-nowrap">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                {!mockCart.length && (
                  <p className="text-sm text-[hsl(var(--text-secondary))]">
                    Your cart is empty.
                  </p>
                )}
              </div>

              <div className="w-full h-px bg-[hsl(var(--border-soft))]" />

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
                    {shipping ? `$${shipping.toFixed(2)}` : 'Calculated at checkout'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[hsl(var(--text-secondary))]">
                    Estimated Tax
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
                By placing your order, you agree to our terms, privacy policy,
                and return guidelines.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}

export default Checkout
