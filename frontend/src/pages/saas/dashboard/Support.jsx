export default function SupportPage() {
    return (
        <div className="space-y-6 max-w-xl">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Support</h2>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Need help? Send us a message — we reply within 24 hours.
                </p>

                <textarea
                    rows="5"
                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-900"
                    placeholder="Describe your issue..."
                ></textarea>

                <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                    Submit Ticket
                </button>
            </div>
        </div>
    );
}
