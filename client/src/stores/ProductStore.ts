import { create } from "zustand";
import type { ProductType } from "../types/ProductType";
import Products from "../data/ProductData";


type ProductStore = {
    products: ProductType[],
    addProduct: (data: ProductType) => void;

}


export const useProductStore = create<ProductStore>((set) => ({
    products: Products,
    addProduct: (data: ProductType) => set((state) => ({
        products: [...state.products, data],
    }))
}))

