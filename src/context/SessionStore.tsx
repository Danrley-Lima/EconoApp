import { create } from 'zustand';

type Session = {
    name: string,
    lastName: string,
    email: string,
}

interface SessionState {
    session: Session | null,
    setSession: (newSession: Session | null) => void
}

export const useSessionStore = create<SessionState>((set) => ({
    session: null,
    setSession(newSession) {
        set(() => ({
            session: newSession,
        }))
    }
}))