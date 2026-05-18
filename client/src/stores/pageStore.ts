import { create } from "zustand";

export type Page =
  | "Dashboard"
  | "Point of Sale"
  | "Sales History"
  | "Products"
  | "Inventory"
  | "Reports"
  | "Users";


type PageStore = {
  page: Page;
  setPage: (page: Page) => void;
};


export const usePageStore = create<PageStore>((set) => ({
    page: "Dashboard",
    setPage: (page) => set({page: page})

}))