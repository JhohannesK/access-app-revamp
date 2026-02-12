import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  user: { id: string; email: string } | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  signIn: (email, _password) => {
    // TODO: Replace with real API call, token persistence (SecureStore)
    set({ isAuthenticated: true, user: { id: '1', email } });
  },
  signOut: () => set({ isAuthenticated: false, user: null }),
}));
