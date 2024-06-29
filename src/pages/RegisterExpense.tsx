import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
import FormExpense from "../components/registerExpense/FormExpense";

function RegisterExpense() {
  return (
    <main className="w-full">
      <TopBar title="Cadastrar" />
      <FormExpense />
      <div className="h-24">
        <BottomBar selected={1} />
      </div>
    </main>
  );
}

export default RegisterExpense;
