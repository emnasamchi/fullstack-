import { create } from 'zustand'
import { persist,createJSONStorage  } from 'zustand/middleware'


export const useUser = create(  persist(
  (set, get) => ({
    user: {},
    setUser: (data) => set({ user: data })
  }),
  {
    name: 'UserStore', 
    storage: createJSONStorage(() => localStorage), 
  }
)) 