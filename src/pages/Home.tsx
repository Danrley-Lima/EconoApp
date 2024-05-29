import Header from "../components/Header";
import IncomeExpenseCard from "../components/IncomeExpenseCard";
import CategoryExpensesCard from "../components/categoryExpenses/CategoryExpensesCard";
import CardHistory from "../components/history/CardHistory";


function Home() {
    return (
        <main>
            <Header name={"Jon Snow"} balance={3000} />
            <IncomeExpenseCard income={2000} expense={1000} />
            <CategoryExpensesCard />
            <CardHistory />
        </main>
    )
}

export default Home;