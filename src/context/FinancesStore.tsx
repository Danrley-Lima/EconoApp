import { create } from "zustand";
// import fs from "fs";

export type CategoryEntitie = {
  name: string;
  quant: number;
};

export type Account = {
  id?: number;
  type: string;
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
  addAccount: (newAccount: Account, onCompleted: () => void) => void;
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
      if (na.type != 'expense')
        return;
      const indexFind = newCategories.findIndex((nc) => nc.name == na.category);
      if (indexFind == -1)
        newCategories.push({
          name: na.category,
          quant: na.value,
        });
      else newCategories[indexFind].quant += na.value;
    });
    localStorage.setItem("data", JSON.stringify(newAccounts));
    set({ accounts: newAccounts, categories: newCategories });
  },
  addAccount: (newAccount, onCompleted) => {
    set((state) => {
      if (newAccount.type == 'expense'){
        const indexFind = state.categories.findIndex(
          (nc) => nc.name == newAccount.category,
        );
        if (indexFind == -1)
          state.categories.push({
            name: newAccount.category,
            quant: newAccount.value,
          });
        else state.categories[indexFind].quant += newAccount.value;
      }
      return {
        accounts: [...state.accounts, newAccount],
      };
    });
    salvarContaJson(newAccount);
    onCompleted();
  },
}));

function salvarContaJson(conta: Account) {
  const contas = localStorage.getItem("data");
  const arrayContas = JSON.parse(contas || "[]");
  arrayContas.push(conta);
  localStorage.setItem("data", JSON.stringify(arrayContas));
}

// function salvarContaJson(conta: Account) {
//   fs.readFile("../../data/mockedFinancialData.json", "utf-8", (err, data) => {
//     if (err) {
//       console.error("Erro ao ler o arquivo:", err);
//       return;
//     }
//     const jsonData = JSON.parse(data);
//     jsonData.push(conta);
//     const updatedJsonData = JSON.stringify(jsonData, null, 2);
//     fs.writeFile(
//       "../../data/mockedFinancialData.json",
//       updatedJsonData,
//       "utf8",
//       (err) => {
//         if (err) {
//           console.error("Erro ao escrever no arquivo:", err);
//           return;
//         }
//         console.log("Arquivo atualizado com sucesso!");
//       },
//     );
//   });
// }

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
