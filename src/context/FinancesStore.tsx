import { create } from "zustand";

type Conta = {
  data: string;
  valor: number;
  local: string;
  parcelado: boolean;
  totalParcelas: number | null;
  valorParcela: number | null;
  valorTotal: number;
};

interface FinancesState {
  accounts: Conta[];
  setAccounts: (newAccounts: Conta[]) => void;
  addAccount: (newAccount: Conta) => void;
}

export const useFinancesStore = create<FinancesState>((set) => ({
  accounts: [],
  setAccounts: (newAccounts) => set({ accounts: newAccounts }),
  addAccount: (newAccount) =>
    set((state) => ({
      accounts: [...state.accounts, newAccount],
    })),
}));

// export function useFinancesStore() {
//   return create<FinancesState>((set) => ({
//     accounts: [],
//     setAccounts: function (newAccounts: Conta[]) {
//       set({ accounts: newAccounts });
//     },
//     addAccount: function (newAccount: Conta) {
//       set((state) => ({
//         accounts: [...state.accounts, newAccount],
//       }));
//     },
//   }));
// }
