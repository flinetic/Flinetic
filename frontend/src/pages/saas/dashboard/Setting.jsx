export default function SettingsPage() {
    return (
        <div className="space-y-6 max-w-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Settings</h2>

            {/* Business Info */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Business Information</h3>
                <div className="space-y-4">
                    <input className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900" placeholder="Business Name" />
                    <input className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900" placeholder="Email Address" />
                    <input className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900" placeholder="Phone Number" />
                </div>
            </div>

            {/* Branding */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Branding</h3>
                <input className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900" placeholder="Primary Color (#HEX)" />
            </div>

            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Save Settings
            </button>
        </div>
    );
}
