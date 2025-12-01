import { BarChart3, Users, Calendar, ShoppingBag } from "lucide-react";
import StatCard from "./StatCard";

export default function Overview() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Overview</h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <StatCard
                    icon={Users}
                    label="Total Users"
                    value="1,245"
                    growth="+18%"
                />
                <StatCard
                    icon={Calendar}
                    label="Bookings"
                    value="342"
                    growth="+12%"
                />
                <StatCard
                    icon={ShoppingBag}
                    label="Invoices"
                    value="120"
                    growth="+8%"
                />
                <StatCard
                    icon={BarChart3}
                    label="Revenue"
                    value="₹85,400"
                    growth="+22%"
                />
            </div>

            {/* Chart Placeholder */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm h-72 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Charts will be added here</p>
            </div>
        </div>
    );
}
