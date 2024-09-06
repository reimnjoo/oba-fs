import { Link } from "react-router-dom";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
    return (
        <div
            id="sidebar"
            className={`bg-[#89855E] text-[#FFFFFF] md:block md:static fixed inset-x-0 top-0 transform ${
                isOpen ? "translate-y-0" : "-translate-y-full"
            } transition-transform duration-300 ease-in-out md:translate-y-0 z-30 w-full md:w-64`}
        >
            {/* Close button for Mobile */}
            {isOpen && (
                <button
                    className="md:hidden p-4 focus:outline-none text-white absolute right-0 top-0"
                    onClick={toggleSidebar}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            )}

            <nav>
                <ul className="flex flex-col md:block">
                    <li className="hover:bg-[#7a7a52] p-4">
                        <Link to="/dashboard" onClick={toggleSidebar}>
                            Dashboard
                        </Link>
                    </li>
                    <li className="hover:bg-[#7a7a52] p-4">
                        <Link to="/accounts" onClick={toggleSidebar}>
                            Accounts
                        </Link>
                    </li>
                    <li className="hover:bg-[#7a7a52] p-4">
                        <Link to="/deposit" onClick={toggleSidebar}>
                            Deposit
                        </Link>
                    </li>
                    <li className="hover:bg-[#7a7a52] p-4">
                        <Link to="/withdraw" onClick={toggleSidebar}>
                            Withdraw
                        </Link>
                    </li>
                    <li className="hover:bg-[#7a7a52] p-4">
                        <Link to="/transfer" onClick={toggleSidebar}>
                            Transfer
                        </Link>
                    </li>
                    <li className="hover:bg-[#7a7a52] p-4">
                        <Link to="/audit" onClick={toggleSidebar}>
                            Audit
                        </Link>
                    </li>
                    <li className="hover:bg-[#7a7a52] p-4">
                        <Link to="/settings" onClick={toggleSidebar}>
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
