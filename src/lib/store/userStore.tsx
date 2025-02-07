import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IWhoAmI } from "@/lib/types/api/user";

export interface IUserStore {
  userData: IWhoAmI | null;
  setUserData: (data: IWhoAmI) => void;
}

export const useUserStore = create<IUserStore>()(
  persist(
    (set) => ({
      userData: null,
      setUserData: (data: IWhoAmI) => set({ userData: data }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
