import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const userDataStore = create(devtools((set) => ({
    data: null,
    isLoading: false,
    error: null,
    fetchUsers: async (url) => {
        set({ isLoading: true, error: null });
        try {
            const response =await fetch(url);
            if (!response.ok) throw new Error("Network error");
            const result =await response.json();
            set({ data: result, isLoading: false });
        } catch (error) {
            set({ error: error, isLoading: false });
        }
    }
})));