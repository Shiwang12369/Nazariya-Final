// src/pages/AdminDashboard.jsx
import { useState } from 'react'

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = ['Dashboard', 'Products', 'Orders', 'Users', 'Logout']

  return (
    <main className="min-h-screen bg-[hsl(var(--bg-primary))] flex">
      {/* Sidebar */}
      <aside className="border-r border-[hsl(var(--border-soft))] bg-[hsl(var(--bg-primary))]">
        <div className="h-full flex flex-col">
          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-[hsl(var(--border-soft))]">
            <span className="text-sm font-medium tracking-[0.18em] uppercase text-[hsl(var(--text-secondary))]">
              Admin
            </span>
            <button
              type="button"
              onClick={() => setSidebarOpen((prev) => !prev)}
              className="text-[hsl(var(--text-primary))] text-sm"
            >
              {sidebarOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          <nav
            className={`${
              sidebarOpen ? 'max-h-screen' : 'max-h-0 lg:max-h-none'
            } lg:max-h-none overflow-hidden lg:overflow-visible transition-all duration-300 lg:transition-none`}
          >
            <div className="hidden lg:flex items-center px-6 py-6 border-b border-[hsl(var(--border-soft))]">
              <span className="text-base font-semibold tracking-[0.20em] uppercase text-[hsl(var(--text-primary))]">
                Estate Studio
              </span>
            </div>

            <ul className="px-4 lg:px-6 py-4 space-y-1">
              {navItems.map((item, index) => (
                <li key={item}>
                  <button
                    type="button"
                    className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-[var(--radius-md)] text-sm tracking-[0.12em] uppercase transition-all duration-200 ${
                      index === 0
                        ? 'bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))]'
                        : 'text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--bg-secondary))] hover:text-[hsl(var(--text-primary))]'
                    }`}
                  >
                    <span>{item}</span>
                    {index === 0 && (
                      <span className="text-[0.65rem] rounded-full px-2 py-0.5 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
                        Active
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <section className="flex-1 min-w-0 flex flex-col">
        <header className="px-4 sm:px-6 lg:px-8 py-5 border-b border-[hsl(var(--border-soft))] flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-light text-[hsl(var(--text-primary))]">
              Admin Dashboard
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[hsl(var(--text-secondary))]">
              Overview of key metrics and recent activity.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-[hsl(var(--text-secondary))]">
            <span>Last updated: 5 min ago</span>
          </div>
        </header>

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-8 overflow-x-hidden">
          {/* Stats cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { label: 'Total Orders', value: '1,248' },
              { label: 'Revenue', value: '$482,900' },
              { label: 'Products', value: '186' },
              { label: 'Users', value: '3,420' },
            ].map((stat) => (
              <article
                key={stat.label}
                className="luxury-card rounded-[var(--radius-lg)] px-4 py-4 sm:px-5 sm:py-5 flex flex-col gap-2"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[hsl(var(--text-secondary))]">
                  {stat.label}
                </p>
                <p className="text-xl sm:text-2xl font-medium text-[hsl(var(--text-primary))]">
                  {stat.value}
                </p>
              </article>
            ))}
          </section>

          {/* Recent orders table */}
          <section className="luxury-card rounded-[var(--radius-xl)] p-4 sm:p-6">
            <header className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg text-[hsl(var(--text-primary))]">
                  Recent Orders
                </h2>
                <p className="text-xs sm:text-sm text-[hsl(var(--text-secondary))]">
                  Latest orders placed on the store.
                </p>
              </div>
              <button
                type="button"
                className="hidden sm:inline-flex items-center text-xs uppercase tracking-[0.16em] text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] underline underline-offset-4 transition-colors"
              >
                View all
              </button>
            </header>

            <div className="w-full overflow-x-auto">
              <table className="min-w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[hsl(var(--border-soft))]">
                    <th className="py-2 pr-4 font-medium uppercase tracking-[0.16em] text-[hsl(var(--text-secondary))]">
                      Order ID
                    </th>
                    <th className="py-2 pr-4 font-medium uppercase tracking-[0.16em] text-[hsl(var(--text-secondary))]">
                      Customer
                    </th>
                    <th className="py-2 pr-4 font-medium uppercase tracking-[0.16em] text-[hsl(var(--text-secondary))]">
                      Date
                    </th>
                    <th className="py-2 pr-4 font-medium uppercase tracking-[0.16em] text-[hsl(var(--text-secondary))]">
                      Status
                    </th>
                    <th className="py-2 pr-4 font-medium uppercase tracking-[0.16em] text-[hsl(var(--text-secondary))] text-right">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[hsl(var(--border-soft))]">
                  {[
                    {
                      id: 'ES-2041',
                      customer: 'Alex Smith',
                      date: '24 Feb 2026',
                      status: 'Processing',
                      total: '$640.00',
                    },
                    {
                      id: 'ES-2038',
                      customer: 'Maria Lopez',
                      date: '23 Feb 2026',
                      status: 'Shipped',
                      total: '$1,120.00',
                    },
                    {
                      id: 'ES-2030',
                      customer: 'Daniel Kim',
                      date: '21 Feb 2026',
                      status: 'Delivered',
                      total: '$420.00',
                    },
                  ].map((order) => (
                    <tr key={order.id} className="align-middle">
                      <td className="py-3 pr-4 text-[hsl(var(--text-primary))]">
                        {order.id}
                      </td>
                      <td className="py-3 pr-4 text-[hsl(var(--text-secondary))]">
                        {order.customer}
                      </td>
                      <td className="py-3 pr-4 text-[hsl(var(--text-secondary))]">
                        {order.date}
                      </td>
                      <td className="py-3 pr-4">
                        <span className="inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-secondary))]">
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-right text-[hsl(var(--text-primary))]">
                        {order.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default AdminDashboard
