import { create } from "zustand";

export type CategoryEntitie = {
  name: string;
  quant: number;
};

export type Account = {
  id?: number;
  type: 'expense' | 'income'
  date: string;
  value: number;
  local: string;
  category: string;
  parcel: boolean;
  totalParcels: number | null;
  valueParcel: number | null;
  valueTotal: number;
};

interface FinancesState {
  accounts: Account[];
  categories: CategoryEntitie[];
  includeCategorie: (categorieName: string) => void;
  setAccounts: (newAccounts: Account[]) => void;
  addAccount: (newAccount: Account) => void;
}

export const useFinancesStore = create<FinancesState>((set) => ({
  accounts: [],
  categories: [],
  includeCategorie: (categorieName) => {
    set((state) => ({
      categories: [
        ...state.categories,
        {
          name: categorieName,
          quant: 0,
        },
      ],
    }));
  },
  setAccounts: (newAccounts) => {
    const newCategories: CategoryEntitie[] = [];
    newAccounts.forEach((na) => {
      const indexFind = newCategories.findIndex((nc) => nc.name == na.category);
      if (indexFind == -1)
        newCategories.push({
          name: na.category,
          quant: na.value,
        });
      else newCategories[indexFind].quant += na.value;
    });
    set({ accounts: newAccounts, categories: newCategories });
  },
  addAccount: (newAccount) => {
    console.log(newAccount);
    set((state) => {
      const indexFind = state.categories.findIndex(
        (nc) => nc.name == newAccount.category,
      );
      if (indexFind == -1)
        state.categories.push({
          name: newAccount.category,
          quant: newAccount.value,
        });
      else state.categories[indexFind].quant += newAccount.value;

      return {
        accounts: [...state.accounts, newAccount],
      };
    });
  },
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
