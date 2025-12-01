import PaymentModal from "./PaymentModal";

export default function BillingPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Billing & Plans</h2>

            {/* Current Plan */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Current Plan</p>
                <h3 className="text-xl font-semibold">Starter Plan — ₹999/month</h3>
            </div>

            <PaymentModal />
        </div>
    );
}
