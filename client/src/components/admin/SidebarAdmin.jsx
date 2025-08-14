import { NavLink } from "react-router-dom"
import { LayoutDashboard } from 'lucide-react';
import { FolderCog } from 'lucide-react';
import { ChartBarStacked } from 'lucide-react';
import { PackageSearch } from 'lucide-react';
import { LogOut } from 'lucide-react';

const SidebarAdmin = () => {
    return (
        <div className="flex flex-col bg-[#aecad6] w-64 text-gray-100 h-screen">
            <div className="flex h-24 bg-[#779dad] items-center justify-center text-2xl font-bold text-black">
                Admin Panel
            </div>

            <nav className="flex-1 px-4 py-4 text-black space-y-2">
                <NavLink
                    to={"/admin"}
                    end
                    className={({ isActive }) =>
                        isActive ? " bg-[#779dad] text-black hover:bg-[#9dc1cf] flex items-center px-4 py-2 rounded-sm" :
                            "text-black px-4 py-2 hover:bg-[#9dc1cf] hover:text-black rounded-sm flex items-center"
                    }>
                    <LayoutDashboard className="mr-2" />
                    Dashboard
                </NavLink>

                <NavLink
                    to={"manage"}
                    className={({ isActive }) =>
                        isActive ? " bg-[#779dad] text-black hover:bg-[#9dc1cf] flex items-center px-4 py-2 rounded-sm" :
                            "text-black px-4 py-2 hover:bg-[#9dc1cf] hover:text-black rounded-sm flex items-center"
                    }>
                    <FolderCog className="mr-2" />
                    Manage
                </NavLink>

                <NavLink
                    to={"category"}
                    className={({ isActive }) =>
                        isActive ? " bg-[#779dad] text-black hover:bg-[#9dc1cf] flex items-center px-4 py-2 rounded-sm" :
                            "text-black px-4 py-2 hover:bg-[#9dc1cf] hover:text-black rounded-sm flex items-center"
                    }>
                    <ChartBarStacked className="mr-2" />
                    Category
                </NavLink>

                <NavLink
                    to={"product"}
                    className={({ isActive }) =>
                        isActive ? " bg-[#779dad] text-black hover:bg-[#9dc1cf] flex items-center px-4 py-2 rounded-sm" :
                            "text-black px-4 py-2 hover:bg-[#9dc1cf] hover:text-black rounded-sm flex items-center"
                    }>
                    <PackageSearch className="mr-2" />
                    Product
                </NavLink>

            </nav>

            <div className="text-black">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? " bg-[#779dad] text-black hover:bg-[#9dc1cf] flex items-center px-4 py-2 rounded-sm" :
                            "text-black px-4 py-2 hover:bg-[#9dc1cf] hover:text-black rounded-sm flex items-center"
                    }>
                    <LogOut className="mr-2" />
                    Logout
                </NavLink>
            </div>
        </div>
    )
}
export default SidebarAdmin