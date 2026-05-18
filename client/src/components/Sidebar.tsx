import { LayoutDashboard } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { History } from 'lucide-react';
import { Box } from 'lucide-react';
import { Layers } from 'lucide-react';
import { ChartNoAxesColumn } from 'lucide-react';
import { Users } from 'lucide-react';
import { LogOut } from 'lucide-react';

// use store
import { useSidebarStore } from '../stores/sidebarStore';

const Sidebar = () => {
    const { isOpen } = useSidebarStore();
    return (
        <div className={`component flex flex-col text-xs text-gray-400 absolute z-20 md:static md:translate-x-0 h-screen transition-all ${isOpen ? "translate-x-0" : " -translate-x-full"}`}>
            <div className="flex flex-col gap-2 p-5 mini-component">
                <span className=" text-teal-500 font-bold text-lg">Mini-Pos</span>
                <span className="text-gray-400">POS SYSTEM</span>
            </div>

            {/* Role Header (which display user is Admin or Staff) */}
            <div className="flex gap-2 p-5 mini-component">
                <span className="bg-teal-400 size-8 aspect-square rounded-full flex justify-center items-center text-black">A</span>
                <div className="flex flex-col">
                    <span className="font-bold dark:text-white text-black">admin</span>
                    <span>ADMINISTRATOR</span>
                </div>
            </div>
            <div className="flex flex-col gap-2 py-2 mini-component h-full">
                <button className='flex items-center gap-2 py-2 px-5 dark:hover:bg-[#182037] hover:bg-[#F4F6FA]'> <LayoutDashboard size={20}/> Dashboard</button>
                <div className="flex flex-col gap-2">
                    <span className='text-gray-600 px-5'>SALES</span>
                    <button className='flex items-center gap-2 py-2 px-5 dark:hover:bg-[#182037] hover:bg-[#F4F6FA]'> <ShoppingBag size={20}/> Point of Sale</button>
                    <button className='flex items-center gap-2 py-2 px-5 dark:hover:bg-[#182037] hover:bg-[#F4F6FA]'><History size={20}/> Sales History</button>
                </div>

                <div className="flex flex-col gap-2">
                    <span className='text-gray-600 px-5'>INVENTORY</span>
                    <button className='flex items-center gap-2 py-2 px-5 dark:hover:bg-[#182037] hover:bg-[#F4F6FA]'><Box size={20}/> Products</button>
                    <button className='flex items-center gap-2 py-2 px-5 dark:hover:bg-[#182037] hover:bg-[#F4F6FA]'><Layers size={20}/> Inventory</button>
                </div>

                <div className="flex flex-col gap-2">
                    <span className='text-gray-600 px-5'>ANALYTICS</span>
                    <button className='flex items-center gap-2 py-2 px-5 dark:hover:bg-[#182037] hover:bg-[#F4F6FA]'><ChartNoAxesColumn size={20}/> Reports</button>
                </div>

                <div className="flex flex-col gap-2">
                    <span className='text-gray-600 px-5'>SYSTEM</span>
                    <button className='flex items-center gap-2 py-2 px-5 dark:hover:bg-[#182037] hover:bg-[#F4F6FA]'><Users size={20}/> Users</button>
                </div>

            </div>

            <div className='p-5 flex justify-center items-center'>
                <button className=' border border-[#E5E7EB] dark:border-[#202A44] rounded-md flex  items-center gap-2 py-2 px-5 hover:text-[#d9282e91] hover:border-[#d9282e91] '> <LogOut size={20}/> Logout</button>
            </div>

        </div>
    );
}



export default Sidebar;