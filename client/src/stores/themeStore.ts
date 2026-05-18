import { create } from "zustand";

type Theme = "light" | "dark";

type ThemeStore = {
    theme: Theme;
    toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set, get) => ({
    theme:  localStorage.getItem("theme") === "dark" ? "dark" : "light",
    toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
    
        localStorage.setItem("theme", newTheme);
            if (newTheme === "dark")
            {   
                document.documentElement.classList.add("dark"); 
            }
            else 
            {
                document.documentElement.classList.remove("dark");
            }

        set({ theme: newTheme})
    }
}))