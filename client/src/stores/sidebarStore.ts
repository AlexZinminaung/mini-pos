import { create } from "zustand";


type SidebarStore = {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;

};


export const useSidebarStore = create<SidebarStore>((set) => ({
    isOpen: false,
    openSidebar: () => set({ isOpen: true }),
    closeSidebar: () => set({ isOpen: false }),
}))

