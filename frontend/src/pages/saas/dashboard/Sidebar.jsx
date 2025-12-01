import NavItem from "./NavItem";

export default function Sidebar({ sidebarOpen, setSidebarOpen, active, setActive }) {
  return (
    <aside className={`${sidebarOpen ? "w-72" : "w-20"} transition-all duration-300 bg-[#06050a] border-r border-gray-800 min-h-screen flex flex-col`}>
      
      <div className="p-4 flex items-center gap-3">
        <div className="ml-1 bg-gradient-to-r from-white/70 to-indigo-600 bg-clip-text text-transparent text-xl font-semibold">
          FLINETIC
        </div>

        <button
          className="ml-auto text-gray-400"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="toggle sidebar"
        >
          {sidebarOpen ? "←" : "→"}
        </button>
      </div>

      <nav className="mt-6 px-2">
        <NavItem icon="📊" label="Overview" active={active==="overview"} onClick={() => setActive("overview")} collapsed={!sidebarOpen} />
        <NavItem icon="🧩" label="Modules" active={active==="modules"} onClick={() => setActive("modules")} collapsed={!sidebarOpen} />
        <NavItem icon="💳" label="Billing" active={active==="billing"} onClick={() => setActive("billing")} collapsed={!sidebarOpen} />
        <NavItem icon="⚙️" label="Settings" active={active==="settings"} onClick={() => setActive("settings")} collapsed={!sidebarOpen} />
        <NavItem icon="❓" label="Support" active={active==="support"} onClick={() => setActive("support")} collapsed={!sidebarOpen} />
      </nav>

      <div className="mt-auto p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} FLINETIC
      </div>
    </aside>
  );
}
