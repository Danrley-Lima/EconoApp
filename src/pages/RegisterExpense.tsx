import BottomBar from "../components/BottomBar";
import Input from "../components/Input";
import TopBar from "../components/TopBar";
import FormExpense from "../components/registerExpense/FormExpense";

function RegisterExpense() {
    return (
        <main className="w-full">
            <TopBar title="Cadastrar" />
            <FormExpense />
            <BottomBar selected={1} />
        </main>
    )
}

export default RegisterExpense;