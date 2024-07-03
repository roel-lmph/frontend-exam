import { create } from 'zustand';

interface ModalStore {
    isMinimized: boolean;
    modals: Set<string>;
    setActiveModal: (modal: string) => void;
    register: (modal: string) => void;
    activeModal: string;
}

export const useModal = create<ModalStore>((set) => ({
    isMinimized: false,
    modals: new Set<string>(),
    setActiveModal: (modal: string) => set((state) => ({ ...state, activeModal: modal })),
    register: (modal: string) => set((state) => {
        state.modals.add(modal)
        return { ...state }
    }),
    activeModal: ''
}));