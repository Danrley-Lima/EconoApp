import { create } from "zustand";

export type Account = {
  date: string;
  value: number;
  local: string;
  parcel: boolean;
  totalParcels: number | null;
  valueParcel: number | null;
  valueTotal: number;
};

interface FinancesState {
  accounts: Account[];
  setAccounts: (newAccounts: Account[]) => void;
  addAccount: (newAccount: Account) => void;
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
//     setAccounts: function (newAccounts: Account[]) {
//       set({ accounts: newAccounts });
//     },
//     addAccount: function (newAccount: Account) {
//       set((state) => ({
//         accounts: [...state.accounts, newAccount],
//       }));
//     },
//   }));
// }
