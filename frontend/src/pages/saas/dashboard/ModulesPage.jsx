import { Calendar, FileText, QrCode } from "lucide-react";

export default function ModulesPage() {
    const modules = [
        {
            icon: Calendar,
            name: "Booking Module",
            description: "Manage appointments, schedules, slots, and customers efficiently.",
        },
        {
            icon: FileText,
            name: "Invoice Module",
            description: "Create, send, and track invoices with automated reminders.",
        },
        {
            icon: QrCode,
            name: "QR Menu Module",
            description: "Upload items, generate QR menus, and track orders.",
        },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Modules</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {modules.map((m, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 p-6 shadow-sm rounded-xl border border-gray-200 dark:border-gray-700">
                        <m.icon className="h-10 w-10 text-indigo-500 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">{m.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{m.description}</p>
                        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                            Activate Module
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
