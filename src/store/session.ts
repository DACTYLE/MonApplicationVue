import { defineStore } from "pinia";

// Définir le type de l'état
export interface SessionState {
  user: User | null;
  loggedIn: boolean;
}

// Définir le type de l'utilisateur
export interface User {
  email: string;
}

export interface SessionActions {
  login(payload: { user: User }): void;
  logout(): void;
}


export type SessionStore = SessionState & SessionActions;

// Définir le store avec typage
export const useSession = defineStore<'session', SessionState, {}, SessionActions>('session', {
  persist: {
    enabled: true, // Activer la persistance
    strategies: [
      {
        key: 'session', // Clé utilisée pour stocker les données
        storage: localStorage, // ou sessionStorage selon vos besoins
      },
    ],
  },
  state: (): SessionState => {
    return {
      user: null,
      loggedIn: false,
    };
  },
  actions: {
    login(payload: { user: User }) {
      this.loggedIn = true;
      this.user = payload.user;
    },
    logout() {
      this.loggedIn = false;
      this.user = null;
    }
  },
});