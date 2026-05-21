import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { useThemeStore } from "../stores/themeStore";

// import icons
import { TextAlignJustify } from 'lucide-react';

// immport store
import { useSidebarStore } from '../stores/sidebarStore';
import { usePageStore } from '../stores/pageStore';

const Navbar = () => {

    // global states
    const { theme, toggleTheme } = useThemeStore();
    const { isOpen, openSidebar, closeSidebar } = useSidebarStore();
    const { page } = usePageStore();
    return (
        <nav className='w-full shrink-0 top-0 right-0'>
            <button onClick={closeSidebar} className={`${isOpen ? 'flex' : 'hidden'} md:hidden w-full h-screen absolute z-10 bg-black/20`}></button>
            <div className='component w-full p-4 flex justify-between'>
                <div className='flex justify-center items-center gap-2'>
                    <button onClick={openSidebar} className='flex md:hidden'><TextAlignJustify size={15}/></button>
                    <span className=''>{page}</span>
                </div>
                <button onClick={toggleTheme}>{theme == 'light' ? <Moon /> : <Sun />}</button>
            </div>
        </nav>

    );
}


export default Navbar