import { create } from "zustand"

export const useThemeStore = create((set) => ({
  theme: "light", // 'light' | 'dark'
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}))
