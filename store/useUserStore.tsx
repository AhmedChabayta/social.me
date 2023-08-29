import { create } from "zustand";

interface UserStore {
  userID?: string;
  setUserID: (userID?: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userID: undefined,
  setUserID: (userID) => set({ userID }),
}));
