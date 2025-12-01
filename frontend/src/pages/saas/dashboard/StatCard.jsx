import React from "react";

export default function StatCard({ icon: Icon, label, value, growth }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">{value}</p>
                    <p className="text-xs text-green-500 mt-1">{growth}</p>
                </div>
            </div>
        </div>
    );
}
