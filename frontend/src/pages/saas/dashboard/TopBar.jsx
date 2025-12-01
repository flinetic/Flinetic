// Topbar.jsx
import React, { useState } from "react";
import { Search, Bell, Menu } from "lucide-react";
import Avatar from "./Avatar";

const Topbar = ({ onToggleSidebar }) => {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <header className="w-full h-16 border-b flex items-center justify-between px-4 sticky top-0 z-40 mb-10">
            
            {/* Left Side */}
            <div className="flex items-center gap-3">
                {/* Mobile Sidebar Toggle */}
                <button
                    className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                    onClick={onToggleSidebar}
                >
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>

                {/* Search Bar */}
                <div className="hidden md:flex items-center bg-gray-900 rounded-xl px-3 py-2">
                    <Search className="w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent ml-2 text-sm focus:outline-none"
                    />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5">

                {/* Notification Bell */}
                <div className="relative">
                    <button
                        className="p-2 rounded-md hover:bg-gray-100"
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <Bell className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Notification Dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-3 w-64 bg-white shadow-xl rounded-xl border p-3 animate-fadeIn">
                            <h4 className="font-semibold text-sm mb-2">Notifications</h4>

                            <ul className="space-y-2">
                                <li className="p-2 bg-gray-50 rounded-lg text-sm">
                                    New payment received.
                                </li>
                                <li className="p-2 bg-gray-50 rounded-lg text-sm">
                                    Your subscription is active.
                                </li>
                                <li className="p-2 bg-gray-50 rounded-lg text-sm">
                                    Server running smoothly.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* User Avatar */}
                <Avatar />
            </div>
        </header>
    );
};

export default Topbar;
