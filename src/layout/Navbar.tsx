import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            {/* Your logo or brand */}
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {/* Your navigation links */}
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Users</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Settings</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        {/* Additional actions or components */}
                        <div className="ml-4 flex items-center md:ml-6">
                            <input type="text" placeholder="Search" className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm focus:outline-none focus:bg-gray-900" />
                            {/* Other components */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
   
