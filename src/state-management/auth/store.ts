import { create } from "zustand";

interface AuthStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

const authStore = create<AuthStore>((set) => ({
  user: "",
  login: (username) => set((store) => ({ user: username })),
  logout: () => set(() => ({ user: "" })),
}));

export default authStore;
