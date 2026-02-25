// src/pages/OrderSuccess.jsx
const OrderSuccess = () => {
  return (
    <main className="min-h-screen bg-[hsl(var(--bg-primary))] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        <div className="luxury-card px-6 py-10 sm:px-8 sm:py-12 rounded-[var(--radius-xl)] flex flex-col items-center gap-6">
          {/* Success Icon */}
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[hsl(var(--bg-secondary))] flex items-center justify-center shadow-md">
            <span className="text-2xl sm:text-3xl text-[hsl(var(--accent))]">
              ✓
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-light text-[hsl(var(--text-primary))]">
              Order Confirmed
            </h1>
            <p className="text-sm sm:text-base text-[hsl(var(--text-secondary))]">
              Thank you for your purchase. A confirmation email has been sent to
              you with your order details.
            </p>
          </div>

          <div className="space-y-1 text-xs sm:text-sm text-[hsl(var(--text-secondary))]">
            <p className="uppercase tracking-[0.18em]">Order ID</p>
            <p className="text-[hsl(var(--text-primary))] font-medium">
              ES-2026-1043
            </p>
          </div>

          <div className="mt-2 flex flex-col sm:flex-row gap-3 w-full">
            <button
              type="button"
              className="btn-primary flex-1 h-11 rounded-[var(--radius-lg)] text-xs sm:text-sm tracking-[0.18em] uppercase shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform duration-200"
            >
              Continue Shopping
            </button>
            <button
              type="button"
              className="flex-1 h-11 rounded-[var(--radius-lg)] border border-[hsl(var(--border-soft))] text-xs sm:text-sm tracking-[0.18em] uppercase text-[hsl(var(--text-primary))] hover:border-[hsl(var(--accent))] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              View Orders
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default OrderSuccess
