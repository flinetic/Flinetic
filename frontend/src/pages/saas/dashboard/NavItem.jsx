export default function NavItem({ icon, label, active, onClick, collapsed }) {
    return (
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 p-3 my-1 rounded-md hover:bg-gray-900 ${
          active ? "bg-gradient-to-r from-[#1f1b2e] to-[#0f0c18] border-l-4 border-purple-600" : ""
        }`}
      >
        <div className="text-lg">{icon}</div>
        {!collapsed && (
          <div className={`text-sm ${active ? "text-white" : "text-gray-300"}`}>{label}</div>
        )}
      </button>
    );
  }
  