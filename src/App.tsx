import Header from "./components/Header";
import IncomeExpenseCard from "./components/IncomeExpenseCard";
import CategoryExpensesCard from "./components/categoryExpenses/CategoryExpensesCard";

import { useEffect } from "react";
import jsonData from "../data/mockedFinancialData.json";
import { useFinancesStore } from "./context/FinancesStore";

function App() {
  const { setAccounts, accounts } = useFinancesStore();

  useEffect(() => {
    // Defina o estado inicial com os dados do JSON
    setAccounts(jsonData);
    console.log("Dados do estado:", accounts);
  }, [accounts, setAccounts]);

  return (
    <div className="font-DM-Sans">
      <Header name={"Jon Snow"} balance={3000} />
      <IncomeExpenseCard income={2000} expense={1000} />
      <CategoryExpensesCard />
    </div>
  );
}

export default App;
