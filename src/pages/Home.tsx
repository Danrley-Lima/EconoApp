import BottomBar from "../components/BottomBar";
import Header from "../components/Header";
import IncomeExpenseCard from "../components/IncomeExpenseCard";
import CategoryExpensesCard from "../components/categoryExpenses/CategoryExpensesCard";
import CardHistory from "../components/history/CardHistory";


function Home() {
    return (
        <main>
            <Header balance={3000} />
            <IncomeExpenseCard income={2000} expense={1000} />
            <CategoryExpensesCard />
            <CardHistory />
            <BottomBar selected={0} />
        </main>
    )
}

export default Home;