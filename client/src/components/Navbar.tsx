import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { useThemeStore } from "../stores/themeStore";

// import icons
import { TextAlignJustify } from 'lucide-react';

// immport store
import { useSidebarStore } from '../stores/sidebarStore';


const Navbar = () => {

    // global states
    const { theme, toggleTheme } = useThemeStore();
    const { isOpen, openSidebar, closeSidebar } = useSidebarStore();

    return (
        <div className='w-full relative'>
            <button onClick={closeSidebar} className={`${isOpen ? 'flex' : 'hidden'} md:hidden w-full h-screen absolute z-10 bg-black/20`}></button>
            <nav className='component w-full p-4 flex justify-between'>
                <div className='flex justify-center items-center gap-2'>
                    <button onClick={openSidebar} className='flex md:hidden'><TextAlignJustify size={15}/></button>
                    <span className=''>Dashboard</span>
                </div>
                <button onClick={toggleTheme}>{theme == 'light' ? <Moon /> : <Sun />}</button>
            </nav>
        </div>

    );
}


export default Navbar