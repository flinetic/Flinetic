import { useState } from "react";

export default function PaymentModal() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
                Upgrade Plan
            </button>

            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-md shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Payment</h3>

                        <div className="space-y-4">
                            <input className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg" placeholder="Card Number" />
                            <input className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg" placeholder="Expiry Date" />
                            <input className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg" placeholder="CVV" />
                        </div>

                        <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                            Pay Now
                        </button>

                        <button
                            className="w-full mt-3 text-gray-500 hover:text-gray-700"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
