import React, { useState } from 'react';

// SaaS_Dashboard.jsx
// Single-file dashboard component built with React + Tailwind CSS.
// Drop into: src/pages/Dashboard.jsx and import into your router.
// This is a *frontend UI shell* with mock data and placeholders for real integrations.

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [active, setActive] = useState('overview');
  const [moduleActive, setModuleActive] = useState('booking');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Mock stats
  const stats = {
    revenueMonth: '₹72,450',
    bookings: 342,
    invoices: 128,
    uptime: '99.95%'
  };

  const modules = [
    { id: 'booking', name: 'Booking System', desc: 'Manage appointments, staff, slots.' },
    { id: 'invoice', name: 'Invoice & Billing', desc: 'Create invoices, track payments.' },
    { id: 'qrmenu', name: 'QR Menu', desc: 'Digital menus, QR codes & ordering.' }
  ];

  const bookings = [
    { id: 'B-001', name: 'Aarav', service: 'Haircut', slot: '2025-12-02 10:00', status: 'Confirmed' },
    { id: 'B-002', name: 'Nina', service: 'Facial', slot: '2025-12-02 12:00', status: 'Pending' },
    { id: 'B-003', name: 'Rohit', service: 'Yoga Class', slot: '2025-12-03 07:00', status: 'Cancelled' }
  ];

  const invoices = [
    { id: 'INV-1001', client: 'Luxe Salon', amount: '₹4,500', status: 'Paid' },
    { id: 'INV-1002', client: 'Bella Studio', amount: '₹9,800', status: 'Due' }
  ];

  return (
    <div className="min-h-screen bg-[#07060a] text-gray-100">
      <div className="flex">
        {/* SIDEBAR */}
        <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} transition-width duration-300 bg-[#06050a] border-r border-gray-800 min-h-screen`}>
          <div className="p-4 flex items-center gap-3">
            <div className="ml-1 bg-gradient-to-r from-white/70  to-indigo-600 bg-clip-text text-transparent">FLINETIC</div>
            <button className="ml-auto text-gray-400" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="toggle sidebar">{sidebarOpen ? '←' : '→'}</button>
          </div>

          <nav className="mt-6 px-2">
            <NavItem icon="📊" label="Overview" active={active==='overview'} onClick={() => setActive('overview')} collapsed={!sidebarOpen} />
            <NavItem icon="🧩" label="Modules" active={active==='modules'} onClick={() => setActive('modules')} collapsed={!sidebarOpen} />
            <NavItem icon="💳" label="Billing" active={active==='billing'} onClick={() => setActive('billing')} collapsed={!sidebarOpen} />
            <NavItem icon="⚙️" label="Settings" active={active==='settings'} onClick={() => setActive('settings')} collapsed={!sidebarOpen} />
            <NavItem icon="❓" label="Support" active={active==='support'} onClick={() => setActive('support')} collapsed={!sidebarOpen} />
          </nav>

          <div className="mt-auto p-4 text-sm text-gray-500">© {new Date().getFullYear()} FLINETIC</div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6">
          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <p className="text-sm text-gray-400">Welcome back — manage modules, billing, and settings here.</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400">Account: <strong className="text-white">Acme Studio</strong></div>
              <button onClick={() => setShowPaymentModal(true)} className="px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] rounded-md text-sm font-medium">Add Payment</button>
              <Avatar />
            </div>
          </div>

          {/* CONTENT SWITCHER */}
          <div>
            {active === 'overview' && (
              <Overview stats={stats} modules={modules} setModuleActive={setModuleActive} bookings={bookings} invoices={invoices} setActive={setActive} />
            )}

            {active === 'modules' && (
              <ModulesPage modules={modules} moduleActive={moduleActive} setModuleActive={setModuleActive} />
            )}

            {active === 'billing' && (
              <BillingPage invoices={invoices} />
            )}

            {active === 'settings' && (
              <SettingsPage />
            )}

            {active === 'support' && (
              <SupportPage />
            )}
          </div>
        </main>
      </div>

      {showPaymentModal && (
        <PaymentModal onClose={() => setShowPaymentModal(false)} />
      )}
    </div>
  );
}

/* ---------------- Subcomponents ---------------- */

function NavItem({ icon, label, active, onClick, collapsed }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-3 p-3 my-1 rounded-md hover:bg-gray-900 ${active ? 'bg-gradient-to-r from-[#1f1b2e] to-[#0f0c18] border-l-4 border-purple-600' : ''}`}>
      <div className="text-lg">{icon}</div>
      {!collapsed && <div className={`text-sm ${active ? 'text-white' : 'text-gray-300'}`}>{label}</div>}
    </button>
  );
}

function Avatar(){
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-700 to-blue-500 flex items-center justify-center text-white">A</div>
  );
}

function Overview({ stats, modules, setModuleActive, bookings, invoices, setActive }){
  return (
    <div className="space-y-6">
      {/* STAT CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="Revenue (This Month)" value={stats.revenueMonth} />
        <StatCard title="Bookings" value={stats.bookings} />
        <StatCard title="Invoices" value={stats.invoices} />
        <StatCard title="Uptime" value={stats.uptime} />
      </div>

      {/* MODULES QUICK */}
      <div className="bg-[#0b0a0f] border border-gray-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Modules</h3>
          <div className="text-sm text-gray-400">Activate, manage or view module dashboards</div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {modules.map(m => (
            <div key={m.id} className="p-4 rounded-xl bg-gradient-to-b from-transparent to-[#07060a] border border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{m.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{m.desc}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => { setModuleActive(m.id); setActive('modules'); }} className="px-3 py-1 bg-[#111014] rounded-md border border-gray-700 text-sm">Open</button>
                  <button className="px-3 py-1 bg-transparent rounded-md border border-gray-700 text-sm">Settings</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOOKINGS & INVOICES */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#0b0a0f] border border-gray-800 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold">Recent Bookings</h4>
            <button className="text-sm text-purple-300" onClick={() => setActive('modules')}>View all</button>
          </div>

          <div className="space-y-3">
            {bookings.map(b => (
              <div key={b.id} className="flex items-center justify-between p-3 bg-[#07060a] rounded-md border border-gray-800">
                <div>
                  <div className="font-medium">{b.name} — {b.service}</div>
                  <div className="text-xs text-gray-400">{b.slot}</div>
                </div>
                <div className={`text-sm px-3 py-1 rounded-md ${b.status === 'Confirmed' ? 'bg-green-800 text-green-300' : b.status === 'Pending' ? 'bg-yellow-800 text-yellow-300' : 'bg-red-800 text-red-300'}`}>{b.status}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0b0a0f] border border-gray-800 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold">Recent Invoices</h4>
            <button className="text-sm text-purple-300" onClick={() => setActive('billing')}>View all</button>
          </div>

          <div className="space-y-3">
            {invoices.map(inv => (
              <div key={inv.id} className="flex items-center justify-between p-3 bg-[#07060a] rounded-md border border-gray-800">
                <div>
                  <div className="font-medium">{inv.client}</div>
                  <div className="text-xs text-gray-400">{inv.id} • {inv.amount}</div>
                </div>
                <div className={`text-sm px-3 py-1 rounded-md ${inv.status === 'Paid' ? 'bg-green-800 text-green-300' : 'bg-yellow-800 text-yellow-300'}`}>{inv.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

function StatCard({ title, value }){
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-b from-transparent to-[#07060a] border border-gray-800 flex flex-col justify-between">
      <div className="text-xs text-gray-400">{title}</div>
      <div className="text-2xl font-bold mt-3">{value}</div>
    </div>
  );
}

function ModulesPage({ modules, moduleActive, setModuleActive }){
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Modules</h2>
        <div className="text-sm text-gray-400">Activate modules and configure settings</div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {modules.map(m => (
          <div key={m.id} className={`p-6 rounded-2xl border ${moduleActive===m.id ? 'border-purple-600 shadow-lg' : 'border-gray-800'} bg-[#0b0a0f]`}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm text-gray-400 mt-2">{m.desc}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => setModuleActive(m.id)} className="px-3 py-1 rounded-md bg-[#111014] border border-gray-700">Open</button>
                <button className="px-3 py-1 rounded-md border border-gray-700 bg-transparent text-sm">Configure</button>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-400">Quick actions:</div>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1 rounded-md bg-gray-800 text-sm">Preview</button>
              <button className="px-3 py-1 rounded-md bg-gray-800 text-sm">Embed</button>
              <button className="px-3 py-1 rounded-md bg-gray-800 text-sm">Docs</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-2xl bg-[#080717] border border-gray-800">
        <h4 className="font-semibold">Module Activity Feed</h4>
        <div className="text-sm text-gray-400 mt-2">Recent actions, logs and notable notifications will appear here.</div>

        <div className="mt-4 space-y-2">
          <div className="p-3 bg-[#07060a] rounded-md border border-gray-800">New booking confirmed by Aarav at 10:00 AM</div>
          <div className="p-3 bg-[#07060a] rounded-md border border-gray-800">Invoice INV-1002 marked as Due</div>
        </div>
      </div>
    </div>
  );
}

function BillingPage({ invoices }){
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Billing & Subscription</h2>
        <div className="text-sm text-gray-400">Manage plan, payment methods, and invoices</div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl bg-[#0b0a0f] border border-gray-800">
          <div className="text-sm text-gray-400">Current Plan</div>
          <div className="mt-2 font-bold text-lg">Professional</div>
          <div className="text-sm text-gray-400">₹1,999 / month</div>
          <div className="mt-4 flex gap-2">
            <button className="px-3 py-2 bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] rounded-md">Upgrade</button>
            <button className="px-3 py-2 border border-gray-700 rounded-md">Change Plan</button>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#0b0a0f] border border-gray-800">
          <div className="text-sm text-gray-400">Payment Method</div>
          <div className="mt-2">**** **** **** 4242</div>
          <div className="text-sm text-gray-400">Visa • Exp 12/27</div>
          <div className="mt-4">
            <button className="px-3 py-2 bg-[#111014] rounded-md border border-gray-700">Update Card</button>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#0b0a0f] border border-gray-800">
          <div className="text-sm text-gray-400">Yearly Discount</div>
          <div className="mt-2 font-bold text-lg">Save 20% with yearly plan</div>
          <div className="mt-4">
            <button className="px-3 py-2 bg-[#111014] rounded-md border border-gray-700">Switch to Yearly</button>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-[#0b0a0f] border border-gray-800">
        <h4 className="font-semibold">Invoices</h4>
        <div className="mt-4 space-y-3">
          {invoices.map(inv => (
            <div key={inv.id} className="flex items-center justify-between p-3 bg-[#07060a] rounded-md border border-gray-800">
              <div>
                <div className="font-medium">{inv.id} — {inv.client}</div>
                <div className="text-xs text-gray-400">{inv.amount}</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded-md border border-gray-700">Download</button>
                <button className="px-3 py-1 rounded-md bg-gradient-to-r from-[#7c3aed] to-[#5b21b6]">Pay Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsPage(){
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Account Settings</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-[#0b0a0f] border border-gray-800">
          <h4 className="font-semibold">Profile</h4>
          <div className="mt-3 text-sm text-gray-400">Update your name, email, and company details</div>
          <div className="mt-4 space-y-3">
            <input className="w-full p-3 rounded-md bg-[#07060a] border border-gray-700 text-white" placeholder="Full name" />
            <input className="w-full p-3 rounded-md bg-[#07060a] border border-gray-700 text-white" placeholder="Email" />
            <input className="w-full p-3 rounded-md bg-[#07060a] border border-gray-700 text-white" placeholder="Company" />
            <button className="px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] rounded-md">Save Profile</button>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#0b0a0f] border border-gray-800">
          <h4 className="font-semibold">Security</h4>
          <div className="mt-3 text-sm text-gray-400">Change password and enable 2FA</div>
          <div className="mt-4 space-y-3">
            <input className="w-full p-3 rounded-md bg-[#07060a] border border-gray-700 text-white" placeholder="Current password" />
            <input className="w-full p-3 rounded-md bg-[#07060a] border border-gray-700 text-white" placeholder="New password" />
            <button className="px-4 py-2 bg-[#111014] rounded-md border border-gray-700">Change password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportPage(){
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Support</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-[#0b0a0f] border border-gray-800">
          <h4 className="font-semibold">Open a Ticket</h4>
          <p className="text-sm text-gray-400 mt-2">Send us details and our support team will respond within 24 hours.</p>
          <textarea className="w-full mt-3 p-3 rounded-md bg-[#07060a] border border-gray-700 text-white" placeholder="Describe the issue" rows={6} />
          <div className="mt-3"><button className="px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] rounded-md">Submit Ticket</button></div>
        </div>

        <div className="p-6 rounded-2xl bg-[#0b0a0f] border border-gray-800">
          <h4 className="font-semibold">Help Center</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li>How to create services & staff</li>
            <li>Embed booking widget on website</li>
            <li>Integrate payments</li>
            <li>FAQ & Troubleshooting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function PaymentModal({ onClose }){
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="w-full max-w-2xl p-6 rounded-2xl bg-[#0b0a0f] border border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Add Payment Method</h3>
          <button onClick={onClose} className="text-gray-400">✕</button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-400">Enter card details (Stripe integration)</div>
            <input className="w-full mt-3 p-3 rounded-md bg-[#07060a] border border-gray-700" placeholder="Card number" />
            <div className="flex gap-2 mt-3">
              <input className="flex-1 p-3 rounded-md bg-[#07060a] border border-gray-700" placeholder="MM/YY" />
              <input className="w-24 p-3 rounded-md bg-[#07060a] border border-gray-700" placeholder="CVC" />
            </div>

            <div className="mt-4 text-sm text-gray-400">(This is a UI placeholder. To accept real payments integrate Stripe or Razorpay in backend.)</div>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] rounded-md">Save Card</button>
              <button onClick={onClose} className="px-4 py-2 border border-gray-700 rounded-md">Cancel</button>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-400">Or pay using Razorpay / UPI</div>
            <div className="mt-3 p-4 bg-[#07060a] rounded-md border border-gray-800">Razorpay / UPI placeholder — call your payment API here</div>
            <div className="mt-4 text-sm text-gray-400">Integration notes: Use server-side SDKs for Stripe / Razorpay to create payment intents and verify payments. Never collect raw card data in frontend without Stripe Elements.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------- END --------------------------- */

// Notes for integration (copy into your developer README):
// 1. Auth: Use JWT or session-based auth. Protect all API routes on server.
// 2. Modules: Store module activation per workspace (tenant). Use a workspace_id to separate data.
// 3. Payment: Implement Stripe (recommended) or Razorpay. Create PaymentIntent server-side, confirm client-side.
// 4. Hosting: Use Node/Express + MongoDB (or Firebase) for quick setup. Keep uploads in S3 (or Cloud Storage).
// 5. Webhooks: Use payment webhooks to update invoice/payment status.
// 6. Multi-tenancy: either isolated DB per tenant or single DB with workspace_id filtering.

// This UI is intentionally componentised but kept in one file for copy-paste convenience.
// Split into multiple components/files as your project grows.
