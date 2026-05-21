import { create } from "zustand";


type PopUpStore = {
    isNewProductFromOpen: boolean,
    toggleNewProductFrom: () => void;
}


export const usePopUpStore = create<PopUpStore>((set) => ({
    isNewProductFromOpen: false,
    toggleNewProductFrom: () => set((state) => ({ isNewProductFromOpen: !state.isNewProductFromOpen }))

    }))
