import BottomBar from "../components/BottomBar";
import Header from "../components/Header";
import IncomeExpenseCard from "../components/IncomeExpenseCard";
import CategoryExpensesCard from "../components/categoryExpenses/CategoryExpensesCard";
import CardHistory from "../components/history/CardHistory";
import { useFinancesStore } from "../context/FinancesStore";

function Home() {
  let despesas = 0;
  let receitas = 0;
  useFinancesStore().accounts.forEach((account) => {
    if (account.type == "expense") {
      despesas += account.value;
    } else {
      receitas += account.value;
    }
  });

  return (
    <main className="">
      <Header balance={2000 - 1000} />
      <IncomeExpenseCard income={receitas} expense={despesas} />
      <CategoryExpensesCard />
      <CardHistory />
      <BottomBar selected={0} />
    </main>
  );
}

export default Home;
