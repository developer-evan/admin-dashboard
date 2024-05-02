import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="bg-gray-800 text-white h-screen w-64 border-r border-r-slate-300">
            <div className="p-4">
                <h1 className="text-2xl font-bold">Sidebar</h1>
            </div>
            <ul className="py-4">
                <li className="px-4 py-2 hover:bg-gray-700">
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <Link to="/users">Users</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">

                    <Link to="/settings">Settings</Link>
                    
                    </li>
            </ul>
        </div>
    );
}
    